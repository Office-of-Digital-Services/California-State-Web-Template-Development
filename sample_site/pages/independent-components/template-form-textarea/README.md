# Template Form Textarea Component

A reusable textarea form component with label and CSS-driven styling options.

## Features

- **Required Field Indicator**: Displays a red asterisk (\*) before the label when the field is required using pure CSS
- **Dark Border Variant**: Option to use a darker border color for visual distinction
- **Accessible**: Proper label-textarea association using `for` and `id` attributes
- **Responsive**: Scales appropriately on different device sizes
- **CSS Custom Properties**: Uses CSS variables for easy theming
- **No JavaScript Required**: All styling is handled with CSS data attributes

## Usage

### Basic Example

```html
<label class="template-form-textarea-label" for="InputName">Comments</label>
<textarea
  class="template-form-textarea-input"
  id="InputName"
  placeholder="Enter your comments"></textarea>
```

### With Required Indicator

Add `data-required="true"` to the label to display a red asterisk:

```html
<label class="template-form-textarea-label" data-required="true" for="InputName">Comments</label>
<textarea
  class="template-form-textarea-input"
  id="InputName"
  required></textarea>
```

### With Dark Border

Add `data-border-dark="true"` to the textarea for a darker border:

```html
<label class="template-form-textarea-label" data-required="true" for="InputName">Comments</label>
<textarea
  class="template-form-textarea-input"
  id="InputName"
  placeholder="Enter your comments"
  data-border-dark="true"
  required></textarea>
```

## Data Attributes

- `data-required="true"` - Adds a red asterisk to the label (CSS-only implementation using `::before` pseudo-element)
- `data-border-dark="true"` - Changes border color from gray-300 to gray-700 for higher contrast

## CSS Classes

- `.template-form-textarea-label` - Styles for the label element
- `.template-form-textarea-input` - Styles for the textarea element

## CSS Custom Properties (Themeable)

The component uses the following CSS variables for theming (with fallback values):

- `--font-family-sans-serif` - Font family (fallback: "Public Sans", system fonts)
- `--text-color` - Text color (fallback: #3b3a48)
- `--text-required-color` - Required asterisk color (fallback: #cd402d)
- `--body-bg` - Background color (fallback: #fff)
- `--gray-300` - Default border color (fallback: #d2d2d6)
- `--gray-700` - Dark border color (fallback: #5e5e6a)
- `--outline-default-color` - Focus outline color (fallback: #0b8ee5)

## Styling Details

### Label Styling

- Inline-block display for proper alignment
- Bold font weight (600) with increased font size
- Positioned relatively to support pseudo-elements
- Bottom margin for spacing

### Textarea Styling

- Full width within container
- Padding for comfortable typing
- 1px solid border with customizable color
- Vertical resize allowed for user control
- Focus state with 2px outline and offset for accessibility
- Nested CSS for related variants

## Browser Support

- Chrome/Edge: Full support including CSS nesting
- Firefox: Full support including CSS nesting
- Safari: Full support including CSS nesting
- IE11: Limited support (CSS nesting not supported)

## Files

- `template-form-textarea.html` - Component markup with data attributes and comments
- `template-form-textarea.html.css` - Component styles using SCSS-style nesting
