# Template Site Footer Component

The Template Site Footer component is a modular, responsive footer designed to house site-specific navigation, support links, and organizational information. It features a class-root architecture (`.template-site-footer`) combined with data attributes and tag-based descendant selectors for variants.

## Initial Structure

The component's HTML structure must remain consistent, as the CSS utilizes direct descendant selectors (`>`) based on this exact nesting to apply styles.

```html
<!-- 
  Site Footer Component 
  data-site-footer-bg options: "gray-100"
-->
<div class="template-site-footer">
  <!-- Footer Content Container -->
  <div>
    <!-- Footer Column -->
    <div>
      <h2>Column Heading</h2>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>

    <!-- More columns as needed -->
  </div>
</div>
```

## Data Attribute Selectors and Features

Instead of utility classes, this component leverages specific `data-site-footer-*` attributes for modifiers and styling overrides.

### Background Colors (`data-site-footer-bg`)
Applied to the root `.template-site-footer` element.
- `data-site-footer-bg="gray-100"`: Sets a light gray background (`#ededef`) and switches text/link colors to dark slate for high contrast on light backgrounds.
- *(default)*: If no attribute is provided, the footer uses a dark slate background (`#323a45`) with white text and gold accent borders.

## Structural Regions
- **Root Container**: The main component wrapper handling background and base typography.
- **Content Container**: An inner wrapper that manages responsive layout (column to row transition) and maximum width constraints.
- **Footer Column**: Modular vertical containers that stack on mobile and align horizontally on desktop.
- **Column Heading**: Section titles (`h2`) featuring a secondary accent border.
- **Links**: Block-level navigation elements with consistent padding and hover states.
