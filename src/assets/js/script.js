/* eslint-disable node/no-unsupported-features/es-syntax */
import format from "date-fns";
let datePrint = format(new Date(2018, 10, 1), "MM/dd/yyyy");

let anchorCollection = document.getElementsByTagName("a");

//# Underline current page in nav bars
(() => {
  for (let i = 0; i < anchorCollection.length; i++) {
    anchorCollection[i].attributes.href.value.toLowerCase() ==
    window.location.pathname.toLowerCase()
      ? anchorCollection[i].parentElement.setAttribute("id", "currentPage")
      : anchorCollection[i].removeAttribute("id");
  }
  console.log(datePrint);
})();

//# Label: Better Comments Key (added # comment style to settings.json)
//! Warning: A Palantir is a dangerous tool, Saruman.
//? Question: Why? Why should we fear to use it?
//* Highlight: They are not all accounted for, the lost Seeing Stones.
//// Strike - Friendship with Saruman is not lightly thrown aside!
//todo: Leap off the Tower of Orthanc onto a giant eagle
