# Template Accordion Component

The Template Accordion component is a progressively enhanced disclosure pattern built on native `details` and `summary` elements. It features a class-root architecture (`.template-accordion`) combined with structural descendant selectors and a lightweight JavaScript controller for smooth height animation and optional single-open behavior.

## Initial Structure

The component's HTML structure must remain consistent, as the CSS and JavaScript rely on this exact nesting to style the summary row, animate panel height, and target the accordion body.

```html
<!--
  Accordion Component
  data-open options: "single"
-->
<section
  class="template-accordion"
  data-open="single">
  <details>
    <!-- Accordion Summary -->
    <summary>Accordion heading</summary>

    <!-- Accordion Body -->
    <div>
      <p>This is accordion content.</p>
      <p>You can place text, lists, links, or other simple content here.</p>
    </div>
  </details>

  <details>
    <summary>Another accordion heading</summary>
    <div>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </div>
  </details>
</section>
```

## Data Attribute Selectors and Features

Instead of utility classes, this component uses a single `data-open` attribute on the root element to control accordion interaction behavior.

### Open Behavior (`data-open`)

Applied to the root `.template-accordion` element.

- `data-open="single"`: Allows only one accordion item to remain open at a time. Opening a new item automatically closes the others.

If `data-open` is omitted, each `details` element can be opened and closed independently.

## Structure Notes

The JavaScript expects the following structure inside each accordion item:

- A `summary` element as the clickable toggle.
- A direct child `div` after the `summary` to serve as the animated content container.

Changing `details > div` to a different element, or inserting extra wrapper elements between `details`, `summary`, and the content container, can break the height calculations and visual styling.

## Animation Behavior

The accordion uses JavaScript to calculate the exact closed and expanded heights of each `details` element, which allows for a smooth height transition without relying on `max-height` hacks.

- Default transition speed: `300ms`
- Height animation is synchronized with the chevron rotation.
- Border-inclusive height measurement uses `offsetHeight`, so the summary border remains visible in the collapsed state.

## Accessibility and Progressive Enhancement

Because the component is built on native `details` and `summary`, it retains basic disclosure behavior even if JavaScript is unavailable. JavaScript enhances the interaction by adding smooth transitions and optional single-open logic, while the CSS provides visible focus treatment for keyboard users.
