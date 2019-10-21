/* eslint-disable node/no-unpublished-import */
import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
// import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";

export default {
  input: "main.js",
  output: {
    file: "src/assets/js/bundle.js",
    format: "iife",
    name: "tomsMod"
  },
  plugins: [
    resolve(),
    commonJS({
      namedExports: {
        "date-fns": ["format"]
      }
    }),
    babel({
      exclude: "node_modules/**" // only transpile source code
      // Babel 7+ does not need the following:
      // babelrc: false,
      // presets: [['env', { modules: false }]],
    })
  ]
};
