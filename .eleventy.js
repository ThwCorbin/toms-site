module.exports = {
  dir: {
    input: "views",
    output: "dist",
    includes: "_includes"
  },
  "dataTemplateEngine": "njk",
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk"
};


// See 11ty docs: Using the Configuration API
// module.exports = function(eleventyConfig) {
//   let nunjucksEnvironment = new nunjucks.Environment(
//     new nunjucks.FileSystemLoader("views")
//   );

//   eleventyConfig.setLibrary("njk", nunjucksEnvironment);
// };