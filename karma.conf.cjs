const path = require('node:path');
const fs = require('node:fs/promises');
const { createInstrumenter } = require('istanbul-lib-instrument');
const esbuild = require('esbuild');

const instrumentSourceForCoverage = {
  name: 'instrument-source-for-coverage',
  setup(build) {
    build.onLoad({ filter: /\.[jt]sx?$/ }, async ({ path: filePath }) => {
      if (filePath.includes(`${path.sep}node_modules${path.sep}`) || filePath.endsWith('.spec.js')) {
        return null;
      }

      const source = await fs.readFile(filePath, 'utf8');
      const transformed = await esbuild.transform(source, {
        loader: filePath.endsWith('.jsx') ? 'jsx' : 'js',
        format: 'esm',
        jsx: 'automatic',
        sourcefile: filePath,
      });
      const instrumenter = createInstrumenter({
        esModules: true,
        produceSourceMap: false,
      });

      return {
        contents: instrumenter.instrumentSync(transformed.code, filePath),
        loader: 'js',
      };
    });
  },
};

function bundleTestPreprocessor() {
  return async (content, file, done) => {
    try {
      const result = await esbuild.build({
        entryPoints: [file.originalPath],
        outfile: path.join(__dirname, '.karma-tmp', `${path.basename(file.originalPath)}.bundle.js`),
        bundle: true,
        write: false,
        platform: 'browser',
        format: 'iife',
        target: 'es2020',
        jsx: 'automatic',
        loader: { '.js': 'jsx' },
        sourcemap: 'inline',
        define: {
          'import.meta.env.BASE_URL': JSON.stringify('/'),
        },
        plugins: [instrumentSourceForCoverage],
      });

      done(null, result.outputFiles[0].text);
    } catch (error) {
      done(error);
    }
  };
}

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'public/images/**/*', included: false, watched: false },
      { pattern: 'src/tests/**/*.spec.js', watched: true },
    ],
    preprocessors: {
      'src/tests/**/*.spec.js': ['bundle-tests'],
    },
    plugins: [
      'karma-*',
      { 'preprocessor:bundle-tests': ['factory', bundleTestPreprocessor] },
    ],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: path.join(__dirname, 'coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly', file: 'lcov.info' },
      ],
    },
    browsers: ['ChromeHeadlessWorkspace'],
    proxies: {
      '/images/': '/base/public/images/',
    },
    customLaunchers: {
      ChromeHeadlessWorkspace: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
      },
    },
    singleRun: true,
    restartOnFileChange: false,
  });
};
