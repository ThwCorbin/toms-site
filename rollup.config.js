/* eslint-disable node/no-unpublished-import */
import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    name: "tomsbundle"
  },
  plugins: [
    resolve(),
    commonJS(),
    babel({
      exclude: "node_modules/**"
    }),
    json()
  ]
};
