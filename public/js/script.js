// import { render } from "nunjucks";
let nunjucks = require("nunjucks");

nunjucks.configure("views", {autoescape: true});

// let env = nunjucks.configure("views");

nunjucks.render(
  "index.njk", {
    page_title: "Tom's Site",
    pub: "The Wicket Maiden",
    drink: "Old Fashioned",
    hours: "12:00 til 11:00"
  }
);