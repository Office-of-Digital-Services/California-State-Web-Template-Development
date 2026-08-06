# Template Link Grid Component

The Template Link Grid component displays a set of prominent links as bordered cards in a responsive grid. It uses the `.template-link-grid` root class and strict direct-child selectors, so the HTML structure must remain consistent.

## Features

- Card-style links with border, rounded corners, bottom accent border, and arrow indicator.
- Hover and focus states for accessibility and visual feedback.
- Bootstrap-like responsive layout behavior based on number of items.
- Supports exactly 2, 3, or 4 direct child items for column sizing rules.

## Required HTML Structure

Use this exact nesting pattern:

```html
<div class="template-link-grid">
  <div>
    <a href="javascript:;">Short link 1</a>
  </div>
  <div>
    <a href="javascript:;">Short link 2</a>
  </div>
  <div>
    <a href="javascript:;">Short link 3</a>
  </div>
</div>
```

Notes:

- The root wrapper must be `.template-link-grid`.
- Each grid item must be a direct child `div`.
- Each direct child `div` must contain a direct child `a` element.

## Responsive Grid Behavior

At small widths, each item is full width.

At `@media (width >= 768px)`, columns are assigned by child count:

- 2 items: each item is 50% width (`col-md-6` equivalent).
- 3 items: each item is 33.33333% width (`col-md-4` equivalent).
- 4 items: each item is 25% width (`col-md-3` equivalent).

## Limitations

- 5 or more columns are not supported by the current layout rules.
- If you use a different child count, custom width rules should be added.

## Styling Notes

- Link styles are applied to `.template-link-grid > div > a`.
- Arrow icon is rendered with the link `::after` pseudo-element.
- Focus outlines use `--outline-default-color` for accessibility.
