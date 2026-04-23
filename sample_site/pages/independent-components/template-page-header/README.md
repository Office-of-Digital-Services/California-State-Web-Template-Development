# Template Page Header Component

The Template Page Header component provides a clean, responsive header area for landing and content pages. It features a class-root architecture (`.template-page-header`) combined with data attributes and tag-based descendant selectors for variants.

## Initial Structure

The component's HTML structure must remain consistent, as the CSS utilizes direct descendant selectors (`>`) based on this exact nesting to apply styles.

```html
<!-- 
  Page Header Component 
  data-page-header-bg options: "understated", "understated-gradient", "primary", "primary-gradient", "standout"
-->
<div
  class="template-page-header"
  data-page-header-bg="understated-gradient">
  <!-- Content Container -->
  <div>
    <!-- Heading / Title -->
    <h1>State template page header</h1>
    
    <!-- Description -->
    <p>This is a description of the page header.</p>
  </div>
</div>
```

## Data Attribute Selectors and Features

Instead of utility classes, this component leverages specific `data-page-header-*` attributes for modifiers and styling overrides.

### Background Colors (`data-page-header-bg`)
Applied to the root `.template-page-header` element.
- `data-page-header-bg="understated"`: Sets a light blue background (`#eef8fb`) and dark text.
- `data-page-header-bg="understated-gradient"`: Sets a light blue gradient background and dark text.
- `data-page-header-bg="primary"`: Sets a solid primary blue background (`#046b99`) and white text.
- `data-page-header-bg="primary-gradient"`: Sets a dark-to-primary blue gradient background and white text.
- `data-page-header-bg="standout"`: Sets a dark slate background (`#323a45`) and white text.

### Typography & Headings
Applied to internal elements within the content container.
- `data-page-header-h2`: Forces the font size of an element to match an `h2` scale (`calc(2.3175rem + 0.1vw)`).
- `data-page-header-font-weight="400"`: Forces the font weight to normal/400.
- `data-page-header-font-weight="200"`: Forces the font weight to light/200.

## Structural Regions
- **Root Container**: The main component wrapper that handles background colors and alignment.
- **Content Container**: An inner wrapper that manages padding, maximum width, and centering.
- **Heading/Title**: The primary page title (`h1`).
- **Description**: A supporting paragraph (`p`) for additional context.
