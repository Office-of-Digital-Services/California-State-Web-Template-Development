import { terser } from "rollup-plugin-terser";

const publishPackageJsonVersion = require("./publish/package.json").version;
//const projectPackageJsonVersion = process.env.npm_package_version;

//Place a var at the top of generated source
const banner = `var StateTemplateNpmPackageVersion="${publishPackageJsonVersion}";`;
const format = "esm";

// Minify in normal build only
const plugins =
  process.env["ROLLUP_WATCH"] === "true" ? [] : [terser({ module: false })];

export default [
  {
    input: "src/js/index.js",
    output: [
      {
        file: "_site/ca_state_template/js/cagov.core.js",
        format,
        banner
      },
      {
        file: "_site/ca_state_template/js/cagov.core.min.js",
        format,
        plugins,
        banner
      }
    ],
    onwarn: function (warning) {
      // should intercept warnings but doesn't in some rollup versions
      if (warning.code === "THIS_IS_UNDEFINED") {
        return;
      }

      // console.warn everything else
      console.warn(warning.message);
    }
  }
];
