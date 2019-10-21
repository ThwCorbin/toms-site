import { format } from "date-fns";

let aDate = () => {
  let date = format(new Date(), "'Today is a' iiii");
  console.log(date);
};

export { format, aDate };

// import blurb from "../src/assets/js/script";

// export default function() {
//   console.log(blurb);
// }

// import answer from "the-answer";

// export default function() {
//   console.log(`Hiya luna. The answer is ${answer}`);
// }
