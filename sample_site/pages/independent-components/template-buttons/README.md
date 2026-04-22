# Template Button Component

The Template Button component provides a flexible, accessible button system using a classless CSS architecture. Styling is driven by HTML structure and `data-*` attributes, not utility classes.

## Initial Structure

Buttons can be rendered as `<a>` or `<button>` elements. Use the appropriate element for your use case (links for navigation, buttons for actions).

```html
<!-- Primary button -->
<a href="#" data-btn-bg="primary">Primary color</a>
<!-- Highlight button -->
<a href="#" data-btn-bg="highlight">Highlight color</a>
<!-- Standout button -->
<a href="#" data-btn-bg="standout">Standout color</a>
<!-- Outline primary button -->
<a href="#" data-btn-bg="primary" data-btn-variant="outline">Primary outline</a>
<!-- Outline highlight button -->
<a href="#" data-btn-bg="highlight" data-btn-variant="outline">Highlight outline</a>
<!-- Small outline standout button -->
<a href="#" data-btn-bg="standout" data-btn-variant="outline" data-btn-size="sm">Standout outline small</a>
<!-- Extra small default button -->
<a href="#" data-btn-bg="default" data-btn-size="xs">Default extra small</a>
<!-- Large default button as <button> -->
<button data-btn-bg="default" data-btn-size="lg">Default large button</button>
```

## Data Attribute Selectors and Features

Instead of utility classes, this component leverages specific `data-*` attributes for modifiers and styling overrides.

### Background Colors (`data-btn-bg`)

Applied to `<a>` or `<button>` elements.

- `data-btn-bg="primary"`: Solid primary blue background (`#046b99`), white text.
- `data-btn-bg="highlight"`: Gold background (`#fdb81e`), dark text.
- `data-btn-bg="standout"`: Slate background (`#323a45`), white text.
- `data-btn-bg="default"`: Light gray background (`#fafafa`), dark text.

### Outline Variant (`data-btn-variant`)

- `data-btn-variant="outline"`: Renders the button with a transparent or white background and a colored border, with color based on `data-btn-bg`.

### Button Sizes (`data-btn-size`)

- `data-btn-size="lg"`: Large button (increased padding and font size).
- `data-btn-size="sm"`: Small button.
- `data-btn-size="xs"`: Extra small button.
- _(default)_: If no size is provided, the default size is used.

## Accessibility

- Use `<button>` for actions and `<a>` for navigation.
- All buttons have visible focus states for accessibility.
- Ensure `aria-label` or descriptive text is present for icon-only buttons (not shown above).

## Example

```html
<!-- Example usage -->
<a href="#" data-btn-bg="primary">Primary</a>
<a href="#" data-btn-bg="highlight">Highlight</a>
<a href="#" data-btn-bg="standout">Standout</a>
<a href="#" data-btn-bg="primary" data-btn-variant="outline">Primary Outline</a>
<a href="#" data-btn-bg="highlight" data-btn-variant="outline">Highlight Outline</a>
<a href="#" data-btn-bg="standout" data-btn-variant="outline" data-btn-size="sm">Standout Outline Small</a>
<a href="#" data-btn-bg="default" data-btn-size="xs">Default Extra Small</a>
<button data-btn-bg="default" data-btn-size="lg">Default Large Button</button>
```

## Migration Notes

- Remove all button-related classes from your HTML. Use only the documented `data-*` attributes.
- The CSS will automatically style buttons based on these attributes.
- For custom variants or new colors, extend the CSS with new `[data-btn-bg]` or `[data-btn-variant]` selectors as needed.
