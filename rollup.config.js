import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/js/index.js",
    output: [
      {
        file: "_site/ca_state_template/js/cagov.core.js",
        format: "esm"
      },
      {
        file: "_site/ca_state_template/js/cagov.core.min.js",
        format: "esm",
        plugins: [terser({ module: false })]
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
