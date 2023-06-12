module.exports = {
  eleventyComputed: {
    layout: "basic.njk",
    title: data =>
      `${
        /** @type {import("@11ty/eleventy/src/Template")} */ (data.page)
          .fileSlug
      }`
  }
};
