//@ts-check
const markdownIt = require("markdown-it");
const defaultConfig = require("@11ty/eleventy/src/defaultConfig");
const path = require("path");

module.exports = function (
  /** @type {import("@11ty/eleventy").UserConfig} **/ userConfig
) {
  // Markdown configurarion
  const md = new markdownIt({
    html: true
  });

  userConfig.addPassthroughCopy({
    "src/fonts": "ca_state_template/fonts",
    //"src/html-data": "ca_state_template/html-data",
    "src/root": "ca_state_template",
    "sample_site/images": "images",
    "sample_site/siteRoot": "/"
  });

  // Markdown rendering onfigurarion
  userConfig.addPairedShortcode("markdown", (/** @type {string} */ content) =>
    md.render(content)
  );

  //Start with default config, easier to configure 11ty later
  const config = defaultConfig(userConfig);

  // allow nunjucks templating in .html files
  config.htmlTemplateEngine = "njk";
  config.markdownTemplateEngine = "njk";
  config.templateFormats = ["html", "njk", "11ty.js"];

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

  userConfig.addTransform(
    "fixPaths",
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
