/* eslint-disable node/no-unpublished-import */
import commonJS from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";

export default {
  input: "src/main.js",
  output: {
    file: "dist/assets/js/bundle.js",
    format: "iife",
    name: "tomsbundle"
  },
  plugins: [
    commonJS(),
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    json()
  ]
};
//* rollup-plugin-commonjs should go before other plugins that transform your
//* modules — this is to prevent other plugins from making changes that break
//* the CommonJS detection.
