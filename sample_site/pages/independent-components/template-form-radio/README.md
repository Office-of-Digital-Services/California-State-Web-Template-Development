# Template Form Radio Button Component

A reusable radio button form component with legend grouping and CSS-driven styling options.

## Features

- **Semantic Grouping**: Uses `<fieldset>` with `<legend>` for proper accessibility
- **Single Selection**: Only one option can be selected at a time (unlike checkboxes)
- **Dark Border Variant**: Option to use a darker border color for visual distinction
- **Accessible**: Proper label-input association using `for` and `id` attributes
- **Custom Styling**: Uses SVG circle icon with CSS appearance override
- **Responsive**: Works well on different device sizes
- **CSS Custom Properties**: Uses CSS variables for easy theming
- **No JavaScript Required**: All styling is handled with pure CSS

## Usage

### Basic Example

```html
<fieldset class="template-form-fieldset">
  <legend>Pick one of these items:</legend>
  <div class="template-form-radio">
    <input type="radio" name="options" value="option1" id="RadioOption1" />
    <label class="template-form-radio-label" for="RadioOption1">Option 1</label>
  </div>
  <div class="template-form-radio">
    <input type="radio" name="options" value="option2" id="RadioOption2" />
    <label class="template-form-radio-label" for="RadioOption2">Option 2</label>
  </div>
  <div class="template-form-radio">
    <input type="radio" name="options" value="option3" id="RadioOption3" />
    <label class="template-form-radio-label" for="RadioOption3">Option 3</label>
  </div>
</fieldset>
```

### With Dark Border

Add `data-border-dark="true"` to the radio input for a darker border:

```html
<fieldset class="template-form-fieldset">
  <legend>Pick one of these items:</legend>
  <div class="template-form-radio">
    <input type="radio" name="options" value="option1" id="RadioOption1" data-border-dark="true" />
    <label class="template-form-radio-label" for="RadioOption1">Option 1</label>
  </div>
</fieldset>
```

## Important: name Attribute

All radio buttons in a group **must have the same `name` attribute** to ensure only one can be selected at a time:

```html
<input type="radio" name="options" value="option1" id="RadioOption1" />
<input type="radio" name="options" value="option2" id="RadioOption2" />
<input type="radio" name="options" value="option3" id="RadioOption3" />
```

## Data Attributes

- `data-border-dark="true"` - Changes border color from gray-300 to gray-700 for higher contrast

## CSS Classes

- `.template-form-fieldset` - Wrapper class for the fieldset (no default borders/padding)
- `.template-form-radio` - Wrapper div for each radio-label pair
- `.template-form-radio-label` - Styles for the label element

## Structure Notes

**Important:** The `<div class="template-form-radio">` elements are **not nested in the CSS** and can be used independently:

- **With Fieldset**: Use fieldset + legend for grouped radio buttons (recommended for accessibility)
- **Without Fieldset**: Use just the `<div class="template-form-radio">` for individual radio buttons
- **Standalone**: The CSS styles apply to `.template-form-radio` regardless of parent element

Example without fieldset:

```html
<div class="template-form-radio">
  <input type="radio" name="preference" value="yes" id="RadioYes" />
  <label class="template-form-radio-label" for="RadioYes">Yes</label>
</div>
<div class="template-form-radio">
  <input type="radio" name="preference" value="no" id="RadioNo" />
  <label class="template-form-radio-label" for="RadioNo">No</label>
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

### Radio Button & Label Styling

- `--text-color` - Label text color (fallback: #3b3a48)
- `--gray-300` - Default border color (fallback: #d2d2d6)
- `--gray-700` - Dark border color (fallback: #5e5e6a)
- `--link-color` / `--color-p2` - Selected state background and border (fallback: #046b99)
- `--outline-default-color` - Focus outline color (fallback: #0b8ee5)

## Styling Details

### Fieldset & Legend

- Fieldset has no border or padding (clean styling)
- Legend uses h4 typography with responsive sizing
- Legend margins: 2rem top, 1rem bottom (responsive on larger screens)

### Radio Button Input

- Floated left with negative margin for label alignment
- Custom styling with SVG circle icon (no browser default radio button)
- Circular appearance with `border-radius: 50%`
- 1x1em size with customizable border color
- Focus state with 2px outline and offset for accessibility
- Selected state uses link color for background and border

### Label

- Inline-block display for proper alignment
- Bold font weight (600) with increased font size
- Clickable for better UX

## Accessibility Notes

- `<fieldset>` and `<legend>` provide semantic grouping for screen readers
- All radio buttons in a group must share the same `name` attribute
- Each radio button is properly associated with its label via id/for attributes
- Focus states include visible outlines for keyboard navigation
- SVG circle is decorative; the radio button input handles the checked state
- Arrow keys allow keyboard navigation between grouped radio buttons

## Browser Support

- Chrome/Edge: Full support including CSS nesting
- Firefox: Full support including CSS nesting
- Safari: Full support including CSS nesting
- IE11: Limited support (CSS nesting and appearance:none may have limited support)

## Difference from Checkboxes

- **Radio buttons**: Only one option can be selected (`name` attribute groups them)
- **Checkboxes**: Multiple options can be selected independently
- **Visual**: Radio buttons are circular, checkboxes are square

## Files

- `template-form-radio.html` - Component markup with fieldset structure and comments
- `template-form-radio.html.css` - Component styles using SCSS-style nesting

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
