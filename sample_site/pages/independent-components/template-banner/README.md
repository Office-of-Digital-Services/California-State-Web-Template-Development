# Template Banner Component

The Template Banner component provides a highly visual, prominent banner usually intended for the top of landing pages. It features a classless CSS architecture where styling is heavily driven by HTML structure and `data-*` attributes rather than verbose utility classes.

## Initial Structure

The component's HTML structure must remain consistent, as the CSS utilizes descendant selectors (`>`) based on this exact nesting to apply styles.

```html
<div class="template-banner__component" data-bg="primary-gradient">
  <!-- 1st Child: Image Container -->
  <div>
    <img
      src="path/to/image.webp"
      alt="Banner Image"
      data-image="fade-left" />
  </div>

  <!-- 2nd Child: Content Container -->
  <div>
    <!-- Inner wrapper for column constraints -->
    <div>
      <!-- Heading element -->
      <h1 data-font-weight="200">
        State template banner heading
      </h1>
      
      <!-- Description paragraph -->
      <p>
        Description of the banner goes here.
      </p>
      
      <!-- Actions / Buttons container -->
      <div>
        <a href="#">Primary Action</a>
        <a href="#" data-action="secondary">Secondary Action</a>
      </div>
    </div>
  </div>
</div>
```

## Data Attribute Selectors and Features

Instead of utility classes, this component leverages specific `data-*` attributes for modifiers and styling overrides.

### Background Colors (`data-bg`)
Applied to the root `.template-banner__component` element.
- `data-bg="understated"`: Sets a light blue background (`#eef8fb`) and dark text.
- `data-bg="primary"`: Sets a solid primary blue background (`#046b99`) and white text.
- `data-bg="primary-gradient"`: Sets a dark-to-primary blue gradient background and white text.
- `data-bg="standout"`: Sets a dark slate background (`#323a45`) and white text.

### Typography & Headings
Applied to the heading elements or internal wrappers.
- `data-h2`: Forces the font size to match an `h2` scale (`calc(2.3175rem + 0.1vw)`).
- `data-font-weight="400"`: Forces the font weight to normal/400.
- `data-font-weight="200"`: Forces the font weight to light/200.

### Image Modifiers (`data-image`)
Applied directly to the `<img>` element.
- `data-image="fade-left"`: Applies a CSS mask image gradient, fading the image out towards the left side (or bottom on mobile) to blend seamlessly with the background color.

### Action Modifiers (`data-action`)
Applied directly to the `<a>` (link/button) elements inside the actions container.
- *(default)*: If no data attribute is provided, the link becomes a primary action button (gold background, dark text).
- `data-action="secondary"`: Formats the link as a secondary action button (transparent/primary background with a solid white border).
