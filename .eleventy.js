export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("CNAME");

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