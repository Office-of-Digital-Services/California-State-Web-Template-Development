const publishPackageJsonVersion = require("../../publish/package.json").version;

module.exports = {
  CdnPath: `https://cdn.cdt.ca.gov/cdt/statetemplate/${publishPackageJsonVersion}/`,
  StateTemplateVersion: publishPackageJsonVersion
};
