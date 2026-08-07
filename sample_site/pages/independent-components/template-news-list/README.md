# Template News List Component

The Template News List component presents recent news links in a clean, scannable list pattern inspired by the CA.gov homepage spotlight/news treatment. It uses a strict DOM structure with data-attribute hooks for styling.

## Features

- Section heading and divider-based list layout.
- News article links with accessible hover and focus states.
- Published date/type metadata styling.
- Final "View all" link for full news archive navigation.
- Data-attribute selectors for clear targeting and maintainability.

## Required HTML Structure

Use this exact nesting pattern:

```html
<div class="template-news-list">
  <h2>Latest news</h2>
  <hr />

  <h3 data-link="news-article">
    <a href="javascript:;">News Article Title 1</a>
  </h3>
  <p data-date="published">Month 00, 0000 | News</p>
  <hr />

  <h3 data-link="news-article">
    <a href="javascript:;">News Article Title 2</a>
  </h3>
  <p data-date="published">Month 00, 0000 | News</p>
  <hr />

  <h3 data-link="news-article">
    <a href="javascript:;">News Article Title 3</a>
  </h3>
  <p data-date="published">Month 00, 0000 | News</p>
  <hr />

  <p data-link="all"><a href="javascript:;">View all</a></p>
</div>
```

## Data Attributes

- `data-link="news-article"`: targets each article title row.
- `data-date="published"`: targets article metadata text.
- `data-link="all"`: targets the bottom "View all" row.

## Styling Behavior

- Root container uses border, radius, and internal spacing.
- `h3[data-link="news-article"] > a` and `p[data-link="all"] > a` share link color and interaction styles.
- Dates use muted text color to separate metadata from headlines.
- Horizontal rules create clear separation between entries.

## Accessibility Notes

- Link focus states include visible outlines using `--outline-default-color`.
- Maintain semantic heading/link structure (`h3 > a`) for screen reader and keyboard usability.
