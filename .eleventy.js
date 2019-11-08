const { format } = require('date-fns');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(eleventyConfig) {
  //> Search input directory for all files with these extensions
  eleventyConfig.setTemplateFormats('html,md,njk');

  //> Passthrough non-template static content
  //* path is relative to root: 11ty drops "src/" when outputs to "dist/"
  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/images');

  //> Filter for date
  eleventyConfig.addFilter('date_dMMMMyyyy', (date) => {
    return format(date, 'd MMM yyyy');
  });

  //> Filter for clipping
  eleventyConfig.addFilter('clipPost', (templateContent) => {
    if (!templateContent) return;

    let clipEnd = `<!END`;
    let clipping = templateContent.slice(0, templateContent.indexOf(clipEnd));
    return clipping;
  });

  //> 11ty syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  //> Returns configuration options (Config object)
  return {
    dir: {
      input: 'src', //* controls top level dir/file/glob where we look for templates
      output: 'dist', //* controls dir where we write finished templates
      //* Values below are relative to the input directory
      includes: '_includes', //* layouts, include/extend files, partials, macros
      data: '_data', //* controls dir for global data template files
    },
    //> Template engines
    //* HTML templates run through this before transforming to better HTML
    htmlTemplateEngine: 'njk',
    //* Markdown files run through this before transforming to HTML
    markdownTemplateEngine: 'njk',
    //* Global data files run through this before transforming to JSON
    dataTemplateEngine: 'njk',
  };
};
