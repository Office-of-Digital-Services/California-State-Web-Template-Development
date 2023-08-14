const publishPackageJsonVersion = require("../../publish/package.json").version;

module.exports = {
  CdnPath: `https://california.azureedge.net/cdt/statetemplate/${publishPackageJsonVersion}/`,
  StateTemplateVersion: publishPackageJsonVersion
};
