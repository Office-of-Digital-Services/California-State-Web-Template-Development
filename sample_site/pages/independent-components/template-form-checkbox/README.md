# Template Form Checkbox Component

A reusable checkbox form component with legend grouping and CSS-driven styling options.

## Features

- **Semantic Grouping**: Uses `<fieldset>` with `<legend>` for proper accessibility
- **Dark Border Variant**: Option to use a darker border color for visual distinction
- **Accessible**: Proper label-input association using `for` and `id` attributes
- **Custom Styling**: Uses SVG checkmark icon with CSS appearance override
- **Responsive**: Works well on different device sizes
- **CSS Custom Properties**: Uses CSS variables for easy theming
- **No JavaScript Required**: All styling is handled with pure CSS

## Usage

### Basic Example

```html
<fieldset class="template-form-fieldset">
  <legend>Pick one or more of these items:</legend>
  <div class="template-form-checkbox">
    <input type="checkbox" value="option1" id="CheckOption1" />
    <label class="template-form-checkbox-label" for="CheckOption1">Option 1</label>
  </div>
  <div class="template-form-checkbox">
    <input type="checkbox" value="option2" id="CheckOption2" />
    <label class="template-form-checkbox-label" for="CheckOption2">Option 2</label>
  </div>
</fieldset>
```

### With Dark Border

Add `data-border-dark="true"` to the checkbox input for a darker border:

```html
<fieldset class="template-form-fieldset">
  <legend>Pick one or more of these items:</legend>
  <div class="template-form-checkbox">
    <input type="checkbox" value="option1" id="CheckOption1" data-border-dark="true" />
    <label class="template-form-checkbox-label" for="CheckOption1">Option 1</label>
  </div>
</fieldset>
```

## Data Attributes

- `data-border-dark="true"` - Changes border color from gray-300 to gray-700 for higher contrast

## CSS Classes

- `.template-form-fieldset` - Wrapper class for the fieldset (no default borders/padding)
- `.template-form-checkbox` - Wrapper div for each checkbox-label pair
- `.template-form-checkbox-label` - Styles for the label element

## Structure Notes

**Important:** The `<div class="template-form-checkbox">` elements are **not nested in the CSS** and can be used independently:

- **With Fieldset**: Use fieldset + legend for grouped checkboxes (recommended for accessibility)
- **Without Fieldset**: Use just the `<div class="template-form-checkbox">` for individual checkboxes
- **Standalone**: The CSS styles apply to `.template-form-checkbox` regardless of parent element

Example without fieldset:

```html
<div class="template-form-checkbox">
  <input type="checkbox" value="agree" id="CheckAgree" />
  <label class="template-form-checkbox-label" for="CheckAgree">I agree to the terms</label>
</div>
```

## CSS Custom Properties (Themeable)

The component uses the following CSS variables for theming (with fallback values):

### Legend Styling

- `--font-family-sans-serif` - Font family (fallback: "Public Sans", system fonts)
- `--font-size-h4` - Legend font size (fallback: calc(1rem \* 1.4375))
- `--font-weight-7` - Legend font weight (fallback: 700)
- `--font-lineheight-4` - Legend line height (fallback: 1.625)
- `--ratio-headers` - Responsive font adjustment (fallback: 0.1vw)

### Checkbox & Label Styling

- `--text-color` - Label text color (fallback: #3b3a48)
- `--gray-300` - Default border color (fallback: #d2d2d6)
- `--gray-700` - Dark border color (fallback: #5e5e6a)
- `--link-color` / `--color-p2` - Checked state background and border (fallback: #046b99)
- `--outline-default-color` - Focus outline color (fallback: #0b8ee5)

## Styling Details

### Fieldset & Legend

- Fieldset has no border or padding (clean styling)
- Legend uses h4 typography with responsive sizing
- Legend margins: 2rem top, 1rem bottom (responsive on larger screens)

### Checkbox Input

- Floated left with negative margin for label alignment
- Custom styling with SVG checkmark icon (no browser default checkbox)
- 1x1em size with customizable border color
- Focus state with 2px outline and offset for accessibility
- Checked state uses link color for background and border

### Label

- Inline-block display for proper alignment
- Bold font weight (600) with increased font size
- Clickable for better UX

## Accessibility Notes

- `<fieldset>` and `<legend>` provide semantic grouping for screen readers
- Each checkbox is properly associated with its label via id/for attributes
- Focus states include visible outlines for keyboard navigation
- SVG checkmark is decorative; the checkbox input handles the checked state

## Browser Support

- Chrome/Edge: Full support including CSS nesting
- Firefox: Full support including CSS nesting
- Safari: Full support including CSS nesting
- IE11: Limited support (CSS nesting and appearance:none may have limited support)

## Files

- `template-form-checkbox.html` - Component markup with fieldset structure and comments
- `template-form-checkbox.html.css` - Component styles using SCSS-style nesting
