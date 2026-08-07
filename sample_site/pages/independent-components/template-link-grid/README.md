# Template Link Grid Component

The Template Link Grid component displays a set of prominent links as bordered cards in a responsive grid. It uses the `.template-link-grid` root class and strict direct-child selectors, so the HTML structure must remain consistent.

## Features

- Card-style links with border, rounded corners, bottom accent border, and arrow indicator.
- Hover and focus states for accessibility and visual feedback.
- Bootstrap-like responsive layout behavior based on number of items.
- Supports 2, 3, 4, or 5+ direct child items.
- Optional `data-columns` override to force 2, 3, or 4 columns.

## Required HTML Structure

Use this exact nesting pattern:

```html
<div class="template-link-grid" data-columns="3">
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
- 5 or more items: each item is 25% width (`col-md-3` equivalent, wraps to additional rows).

## Optional Forced Columns

Set the `data-columns` attribute on the root wrapper to force a layout, regardless of item count:

- `data-columns="2"`: each item is 50% width at md and above.
- `data-columns="3"`: each item is 33.33333% width at md and above.
- `data-columns="4"`: each item is 25% width at md and above.

Example:

```html
<div class="template-link-grid" data-columns="3">
  <div><a href="javascript:;">Link 1</a></div>
  <div><a href="javascript:;">Link 2</a></div>
  <div><a href="javascript:;">Link 3</a></div>
  <div><a href="javascript:;">Link 4</a></div>
  <div><a href="javascript:;">Link 5</a></div>
</div>
```

## Limitations

- Only `data-columns="2"`, `data-columns="3"`, and `data-columns="4"` are supported.
- Invalid or unsupported `data-columns` values fall back to automatic child-count behavior.

## Styling Notes

- Link styles are applied to `.template-link-grid > div > a`.
- Arrow icon is rendered with the link `::after` pseudo-element.
- Focus outlines use `--outline-default-color` for accessibility.
