module.exports = {
  eleventyComputed: {
    layout: "sample.njk",
    tags: "sample",
    title: data =>
      `${
        /** @type {import("@11ty/eleventy/src/Template")} */ (data.page)
          .fileSlug
      }`
  }
};
