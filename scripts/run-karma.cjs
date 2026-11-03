const path = require('node:path');
const { Server, config: karmaConfig } = require('karma');

const projectRoot = path.resolve(__dirname, '..');
const requestedBrowsers = process.argv[2];
const options = {
  singleRun: true,
};

if (requestedBrowsers) {
  options.browsers = requestedBrowsers.split(',');
}

karmaConfig.parseConfig(
  path.join(projectRoot, 'karma.conf.cjs'),
  options,
  { promiseConfig: true, throwErrors: true },
).then((config) => {
  new Server(config, (exitCode) => process.exit(exitCode)).start();
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
