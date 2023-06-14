module.exports = {
  eleventyComputed: {
    layout: "sample.njk",
    tags: "sample",
    permalink: data =>
      `/samples/${
        /** @type {import("@11ty/eleventy/src/Template")} */ (data.page)
          .fileSlug
      }.html`,
    title: data =>
      `${
        /** @type {import("@11ty/eleventy/src/Template")} */ (
          data.page
        ).fileSlug
          .toString()
          .replace(/-/g, " ")
      }`
  }
};
