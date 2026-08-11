# Template Form Select Component

A reusable select (dropdown) form component with label and CSS-driven styling options.

## Features

- **Required Field Indicator**: Displays a red asterisk (\*) before the label when the field is required using pure CSS
- **Dark Border Variant**: Option to use a darker border color for visual distinction
- **Accessible**: Proper label-select association using `for` and `id` attributes
- **Responsive**: Scales appropriately on different device sizes
- **CSS Custom Properties**: Uses CSS variables for easy theming
- **No JavaScript Required**: All styling is handled with CSS data attributes

## Usage

### Basic Example

```html
<label class="template-form-select-label" for="InputName">Select an option</label>
<select
  class="template-form-select"
  id="InputName">
  <option selected>Select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
```

### With Required Indicator

Add `data-required="true"` to the label to display a red asterisk:

```html
<label class="template-form-select-label" data-required="true" for="InputName">Select an option</label>
<select
  class="template-form-select"
  id="InputName"
  required>
  <option selected>Select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
```

### With Dark Border

Add `data-border-dark="true"` to the select for a darker border:

```html
<label class="template-form-select-label" data-required="true" for="InputName">Select an option</label>
<select
  class="template-form-select"
  id="InputName"
  data-border-dark="true"
  required>
  <option selected>Select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
```

## Data Attributes

- `data-required="true"` - Adds a red asterisk to the label (CSS-only implementation using `::before` pseudo-element)
- `data-border-dark="true"` - Changes border color from gray-300 to gray-700 for higher contrast

## CSS Classes

- `.template-form-select-label` - Styles for the label element
- `.template-form-select` - Styles for the select element

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

### Select Styling

- Full width within container
- Padding for comfortable interaction
- 1px solid border with customizable color
- Focus state with 2px outline and offset for accessibility
- Nested CSS for related variants
- Support for custom dropdown styling

## Browser Support

- Chrome/Edge: Full support including CSS nesting
- Firefox: Full support including CSS nesting
- Safari: Full support including CSS nesting
- IE11: Limited support (CSS nesting not supported)

## Files

- `template-form-textarea.html` - Component markup with data attributes and comments
- `template-form-textarea.html.css` - Component styles using SCSS-style nesting
