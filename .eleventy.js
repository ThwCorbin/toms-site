// import { format, subDays } from 'date-fns';

import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

export default function(eleventyConfig) {
  eleventyConfig.setTemplateFormats('html,md,njk,css');
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  //* path is relative to root: 11ty drops "src/" when outputs to "dist/"

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
    //* global data files run through this before transforming to JSON
    dataTemplateEngine: 'njk',
    //* markdown files run through this before transforming to HTML
    // markdownTemplateEngine: 'njk',
    //* HTML templates run through this before transforming to better HTML
    htmlTemplateEngine: 'njk',
  };

  //> Parse exerpts from content
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- end -->',
    excerpt_alias: 'excerpt',
  });
}
