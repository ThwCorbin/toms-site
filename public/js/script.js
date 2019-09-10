//// import { render } from "nunjucks";
let nunjucks = require("nunjucks");

nunjucks.configure("views", {autoescape: true});

//// let env = nunjucks.configure("views");

nunjucks.render(
  "index.njk", {
    page_title: "Tom's Site",
    pub: "The Wicket Maiden",
    drink: "Old Fashioned",
    hours: "12:00 til 11:00"
  }
);

if(x<=12){
  // code 
}


//# Label: Better Comments Key (added # comment style to settings.json)
//! Warning: A Palantir is a dangerous tool, Saruman.
//? Question: Why? Why should we fear to use it?
//* Highlight: They are not all accounted for, the lost Seeing Stones.
//// Strike - Friendship with Saruman is not lightly thrown aside!
//todo: Leap off the Tower of Orthanc onto a giant eagle