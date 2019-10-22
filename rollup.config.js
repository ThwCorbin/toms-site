import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

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
    })
  ]
};

// commonJS({
//   namedExports: {
//     "date-fns": ["format"],
//     "rollup-plugin-node-resolve": ["resolve"]
//   }
// })
