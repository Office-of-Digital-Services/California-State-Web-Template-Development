//@ts-check
const markdownIt = require("markdown-it");
const defaultConfig = require("@11ty/eleventy/src/defaultConfig");

module.exports = function (
  /** @type {import("@11ty/eleventy").UserConfig} **/ userConfig
) {
  // Markdown configurarion
  const md = new markdownIt({
    html: true
  });

  userConfig.addPassthroughCopy({
    "src/fonts": "ca_state_template/fonts",
    "src/html-data": "ca_state_template/html-data",
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
    data: config.dir.data,
    // site content pages
    input: "sample_site/pages",
    // site structure pages (path is realtive to input directory)
    includes: "../_includes",
    layouts: "../_includes/layouts",
    // site final outpuut directory
    output: "_site"
  };

  return config;
};
