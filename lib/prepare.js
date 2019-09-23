const cordovaSetVersion = require('cordova-set-version');

module.exports = async (pluginConfig, { nextRelease: { version }, logger }) => {
  const filenames = pluginConfig.filenames || 'config.xml';
  const modifyConfig = filename => {
    cordovaSetVersion(filename, version);
    logger.log(`Modifying ${filename} to version ${version}.`);
  };

  if (Array.isArray(filenames)) {
    filenames.forEach(modifyConfig);
  } else {
    modifyConfig(filenames);
  }
};
