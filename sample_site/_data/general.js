const publishPackageJsonVersion = require("../../publish/package.json").version;

module.exports = {
  VersionGtmPropertyId: "GTM-NJ6Q4MV",
  CdnPath: `https://california.azureedge.net/cdt/statetemplate/${publishPackageJsonVersion}/`,
  StateTemplateVersion: publishPackageJsonVersion
};
