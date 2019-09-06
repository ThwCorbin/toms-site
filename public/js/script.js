const Nunjucks = require("nunjucks");

// Nunchucks.configure({autoescape: true});

// module.exports
console.log(Nunjucks.render(
  "./public/index.njk", {
    drink: "Old Fashioned"
  }
));