# Template Card Component

The Template Card component is a flexible, highly visual element designed for highlighting content with a combination of images, icons, and structured information. It features a class-root architecture (`.template-card`) combined with data attributes and tag-based descendant selectors for variants and state management.

## Initial Structure

The component's HTML structure must remain consistent, as the CSS utilizes descendant selectors (`>`) based on this exact nesting to apply styles.

```html
<!--
  Card Component
  data-card-corners options: "rounded"
  data-card-shadow options: "box-shadow"
  data-card-interaction options: "scale-on-hover"
-->
<div
  class="template-card"
  data-card-corners="rounded"
  data-card-shadow="box-shadow"
  data-card-interaction="scale-on-hover">
  <!-- Card Image -->
  <img
    src="path/to/image.webp"
    alt="Card Image" />

  <!-- Card Content Container -->
  <div>
    <!-- Card Icon (Optional) -->
    <div>
      <img
        src="path/to/icon.svg"
        alt="Icon" />
    </div>

    <!-- Card Info Container -->
    <div>
      <!--
        Card Heading
        data-card-font-weight options: "200", "400"
        data-card-h2 option: boolean (add data-card-h2 attribute without value to match h2 size)
        NOTE: Adding a hyperlink inside of the heading will make entire card linkable.
      -->
      <h2>
        <a href="#">Template card heading</a>
      </h2>

      <!--
        Card Description
        Consists of paragraphs, unordered lists (ul), or ordered lists (ol).
      -->
      <p>This is a description of the card.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </div>
  </div>
</div>
```

## Data Attribute Selectors and Features

Instead of utility classes, this component leverages specific `data-card-*` attributes for modifiers and styling overrides.

### Corner Style (`data-card-corners`)

Applied to the root `.template-card` element.

- `data-card-corners="rounded"`: Applies a `10px` border-radius to the card and its top image.

### Shadow Effects (`data-card-shadow`)

Applied to the root `.template-card` element.

- `data-card-shadow="box-shadow"`: Applies a subtle outer shadow to the card.

### Interactions (`data-card-interaction`)

Applied to the root `.template-card` element.

- `data-card-interaction="scale-on-hover"`: Automatically adds a smooth transition and scales the card slightly (1.05x) when hovered.

### Typography & Headings

Applied to elements within the info container.

- `data-card-h2`: Forces the font size and styling of an element to match an `h2` scale (`calc(1.4375rem + 0.1vw)`).
- `data-card-font-weight="400"`: Forces the font weight to normal/400.
- `data-card-font-weight="200"`: Forces the font weight to light/200.

## Card Linkability

Adding a hyperlink (`<a>`) inside of the **Card Heading** will automatically make the entire card linkable. This is achieved via a CSS pseudo-element (`::before`) on the link that expands to cover the full dimensions of the card root.
