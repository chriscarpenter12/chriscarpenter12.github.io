const eleventyLinkTo = require('eleventy-plugin-link_to');
const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");
const util = require('util');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/images');

  eleventyConfig.addPlugin(eleventyLinkTo);
  eleventyConfig.addPlugin(eleventySass, { sass, outputPath: 'assets/css' });

  eleventyConfig.addShortcode('year', () => new Date().getFullYear().toString());

  eleventyConfig.addFilter('console', function(value) {
    const str = util.inspect(value);
    return `<pre><code>${str}</code></pre>`;
    // Usage: {{ inputData | console | safe }}
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
