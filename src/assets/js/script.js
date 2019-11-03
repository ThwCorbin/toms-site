//> Label: Better Comments Key (Add > style to VS Code settings.json)
//! Warning: A Palantir is a dangerous tool, Saruman.
//? Question: Why? Why should we fear to use it?
//* Highlight: They are not all accounted for, the lost Seeing Stones.
//// Strike - Friendship with Saruman is not lightly thrown aside!
//todo: Leap off the Tower of Orthanc on to a giant eagle

//> The day and the answer import/export tests
import { format } from "date-fns";
import answer from "the-answer";

let theDay = format(new Date(), "'Today is a' iiii");
let theAnswer = () => console.log(`Hiya luna! The answer is ${answer}.`);

export { theDay, theAnswer };

//> The picture click test
let myFace = document.querySelector(".imgDaddyO");
let pictureTest = () => {
  console.log("Hiya luna!");
};
myFace.addEventListener("click", pictureTest);

//> Underline active page in nav bars
let anchorCollection = document.getElementsByTagName("a");
(() => {
  for (let i = 0; i < anchorCollection.length; i++) {
    anchorCollection[i].attributes.href.value.toLowerCase() ==
    window.location.pathname.toLowerCase()
      ? anchorCollection[i].parentElement.setAttribute("id", "activePage")
      : anchorCollection[i].removeAttribute("id");
  }
})();
