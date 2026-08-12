# Template Form File Input Component

A reusable file input form component with label and CSS-driven styling options, styled like Bootstrap's file input control.

## Features

- **Bootstrap-style File Input**: "Choose File" button with consistent styling across all browsers
- **Full-height Button**: Button extends to the full height of the input element
- **Proper Spacing**: Gap between button and file feedback text for better visual separation
- **Required Field Indicator**: Displays a red asterisk (\*) before the label when the field is required using pure CSS
- **Dark Border Variant**: Option to use a darker border color for visual distinction
- **Accessible**: Proper label-input association using `for` and `id` attributes, with focus states
- **Responsive**: Scales appropriately on different device sizes
- **CSS Custom Properties**: Uses CSS variables for easy theming
- **Cross-browser Compatible**: Consistent styling in Chrome, Safari, Firefox, and Edge
- **No JavaScript Required**: All styling is handled with CSS and data attributes

## Usage

### Basic Example

```html
<label for="fileInput" class="template-form-input-file-label">Upload your file</label>
<div class="template-form-input-file">
  <input type="file" id="fileInput" />
</div>
```

### With Required Indicator

Add `data-required="true"` to the label to display a red asterisk:

```html
<label
  for="fileInput"
  class="template-form-input-file-label"
  data-required="true">
  Upload your file
</label>
<div class="template-form-input-file">
  <input type="file" id="fileInput" required />
</div>
```

### With Dark Border

Add `data-border-dark="true"` to the input for a darker border:

```html
<label for="fileInput" class="template-form-input-file-label" data-required="true">
  Upload your file
</label>
<div class="template-form-input-file">
  <input type="file" id="fileInput" data-border-dark="true" required />
</div>
```

### Multiple File Selection

Add the `multiple` attribute to allow multiple file selection:

```html
<label for="fileInput" class="template-form-input-file-label">
  Upload files
</label>
<div class="template-form-input-file">
  <input type="file" id="fileInput" multiple />
</div>
```

## Data Attributes

- `data-required="true"` - Adds a red asterisk to the label (CSS-only implementation using `::before` pseudo-element)
- `data-border-dark="true"` - Changes border color from gray-300 to gray-700 for higher contrast

## CSS Classes

- `.template-form-input-file-label` - Styles for the label element
- `.template-form-input-file` - Wrapper div for the file input
- `input[type="file"]` - Styles for the file input element

## CSS Custom Properties (Themeable)

The component uses the following CSS variables for theming (with fallback values):

- `--font-family-sans-serif` - Font family (fallback: "Public Sans", system fonts)
- `--text-color` - Text color (fallback: #3b3a48)
- `--text-required-color` - Required asterisk color (fallback: #cd402d)
- `--gray-100` - Button background color (fallback: #ededef)
- `--gray-200` - Button hover background color (fallback: #d4d4d7)
- `--gray-300` - Default border color (fallback: #d2d2d6)
- `--gray-700` - Dark border color (fallback: #5e5e6a)
- `--input-border` - Input border color (fallback: #d2d2d6)
- `--outline-default-color` - Focus outline color (fallback: #0b8ee5)
- `--white` - Background color (fallback: #fff)

## Styling Details

### Label Styling

- Inline-block display for proper alignment
- Bold font weight (600) with increased font size (1.125rem)
- Positioned relatively to support pseudo-elements
- Bottom margin (0.5rem) for spacing
- Required indicator using CSS `::before` pseudo-element

### File Input Styling

- Full width within container
- Flexbox layout with centered vertical alignment
- 1px solid border with customizable color
- "Choose File" button with light gray background (#ededef)
- Button extends to full height and width of input
- 0.75rem margin-right on button for spacing from file text
- Button has right border separator from file text area
- 1.375rem font size for both button and feedback text
- Focus state with 2px blue outline and 2px offset for accessibility
- Hover state with darker gray background on button

### Browser Pseudo-element Support

- `::-webkit-file-upload-button` - Chrome, Safari, Edge
- `::file-selector-button` - Firefox (standard)

## Button Styling

- Padding: 0.375rem 0.75rem
- Background: Light gray (#ededef)
- Hover Background: Slightly darker gray (#d4d4d7)
- Border: Right border only, gray (#d2d2d6)
- Font Weight: 600 (bold)
- Font Size: 1.375rem
- Cursor: pointer
- Transition: background-color 0.2s ease-in-out

## Browser Support

- Chrome: Full support including file input button styling
- Safari: Full support including file input button styling
- Firefox: Full support with standard `::file-selector-button` pseudo-element
- Edge: Full support including file input button styling
- IE11: Limited support (pseudo-element styling not supported)

## Files

- `template-form-textarea.html` - Component markup with data attributes and comments
- `template-form-textarea.html.css` - Component styles using SCSS-style nesting
