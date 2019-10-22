import { format } from "date-fns";
let theDate = format(new Date(), "'Today is a' iiii");
export { theDate };

let pictureTest = document.querySelector(".imgDaddyO");
let printDate = () => {
  console.log("a Date");
};
pictureTest.addEventListener("click", printDate);

//> Underline current page in nav bars
let anchorCollection = document.getElementsByTagName("a");
(() => {
  for (let i = 0; i < anchorCollection.length; i++) {
    anchorCollection[i].attributes.href.value.toLowerCase() ==
    window.location.pathname.toLowerCase()
      ? anchorCollection[i].parentElement.setAttribute("id", "activePage")
      : anchorCollection[i].removeAttribute("id");
  }
})();

//> Label: Better Comments Key (added # comment style to settings.json)
//! Warning: A Palantir is a dangerous tool, Saruman.
//? Question: Why? Why should we fear to use it?
//* Highlight: They are not all accounted for, the lost Seeing Stones.
//// Strike - Friendship with Saruman is not lightly thrown aside!
//todo: Leap off the Tower of Orthanc onto a giant eagle
