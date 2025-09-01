import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    // templateFormats: ['html', 'md', 'liquid'],
    // htmlTemplateEngine: 'liquid',
  };
};

// module.exports = '/{{ page.filePathStem }}.html'