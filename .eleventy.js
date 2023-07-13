//@ts-check
const docSiteUrl = "https://template.webstandards.ca.gov/";
const defaultConfig = require("@11ty/eleventy/src/defaultConfig");
const path = require("path");

module.exports = function (
  /** @type {import("@11ty/eleventy").UserConfig} **/ eleventyConfig
) {
  eleventyConfig.addPassthroughCopy({
    "src/fonts": "ca_state_template/fonts",
    "sample_site/images": "images",
    "sample_site/siteRoot": "/"
  });

  //Sorted list of all the samples
  eleventyConfig.addFilter(
    "allSamples",
    (/** @type {{data:{title:string, tags:string}}[]} */ values) => {
      return values
        .slice()
        .filter(x => x.data.tags == "sample")
        .sort((a, b) => (a.data.title || "").localeCompare(b.data.title));
    }
  );

  //Automatically uses the template site URL for images inside sample content
  eleventyConfig.addFilter(
    "SampleCodeUseMainSiteImages",
    (/** @type {string} */ content) =>
      content
        .replace(/="\/images\//g, `="${docSiteUrl}images/`)
        .replace(/url\(\'\/images\//g, `url('${docSiteUrl}images/`)
  );

  //Start with default config, easier to configure 11ty later
  const config = defaultConfig(eleventyConfig);

  // allow nunjucks templating in .html files
  config.htmlTemplateEngine = "njk";
  config.markdownTemplateEngine = "njk";
  config.templateFormats = ["html", "njk", "11ty.js", "md"];

  config.dir = {
    // site content pages
    input: "sample_site/pages",
    // site structure pages (path is realtive to input directory)
    data: "../_data",
    includes: "../_includes",
    layouts: "../_includes/layouts",
    // site final outpuut directory
    output: "_site"
  };

  //Adding a transform to make the output work as non-server static files
  eleventyConfig.addTransform(
    "staticPaths",
    /**
     * @param {string} content
     * @param {string} outputPath
     */
    async function (content, outputPath) {
      const basePath = config.dir.output;

      const relativePath = path
        .relative(path.dirname(outputPath), path.dirname(basePath))
        .slice(0, -2); //removing last 2 dots

      //Replace all ... ="/  ... with new path
      return content.replace(/=\"\//g, `="${relativePath}`);
    }
  );

  return config;
};
