module.exports = function(eleventyConfig) {

  eleventyConfig.setTemplateFormats("html,md,njk");

  return {
    dir: {
      input: "views", //* controls dir/file/glob where we look for templates
      output: "dist", //* controls dir where we write finished templates
      includes: "_includes", //* layouts, include/extend files, partials, macros
      data: "_data" //* controls dir for global data template files
    },
      //# Template engines
      //* global data files run through this before transforming to JSON
      dataTemplateEngine: "njk",
      //* markdown files run through this before transforming to HTML
      markdownTemplateEngine: "njk", 
      //* HTML templates run through this before transforming to better HTML
      htmlTemplateEngine: "njk" 
  };
};

//* //Optional: See 11ty docs for using Nunjucks env...
// module.exports = function(eleventyConfig) {
  //* // Using the Configuration API 
  // let nunjucksEnvironment = new nunjucks.Environment(
  // new nunjucks.FileSystemLoader("views")
  // );
  //* // Use your Nunjucks Environment
  // let nunjucksEnvironment = new Nunjucks.Environment(
  // new Nunjucks.FileSystemLoader("_includes")
  // );
//  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
// };