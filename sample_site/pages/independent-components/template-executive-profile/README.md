# Template Executive Profile

A flexible, accessible component for displaying executive and government official profiles with photo, title, name, agency, and biographical information. The component supports three style variants: default (light background), transparent (no background), and dark (white text on dark background).

## Purpose

Use this component when you need:

- Display executive/government official profile cards
- Show organizational leadership or staff directory
- Highlight key personnel with photo, title, and agency information
- Multiple styling variants for different page contexts
- Full WCAG 2.1 accessibility compliance
- Responsive, semantic HTML markup

## Key Features

### Accessibility (WCAG 2.1)

- **Semantic HTML**: Uses `<figure>` and `<h3>` for proper document structure
- **Image alt text**: Required descriptive alt attributes for profile photos
- **Color contrast**: All text meets WCAG AA color contrast requirements
- **Data attributes**: `data-variant` for styling instead of classes
- **Focus states**: Visible focus outlines for all interactive elements (links)
- **Responsive**: Adapts layout for mobile and desktop viewports

### Style Variants

- **Default**: Light blue background (`var(--color-p2-pale)`) with dark text
- **Transparent**: No background color, text only display
- **Dark**: Dark background (`var(--color-p3)`) with white text, ideal for dark sections

### Responsive Design

- **Mobile & Desktop**: Consistent single-column layout with flexbox
- **Touch targets**: Links have sufficient size for mobile interaction
- **Container widths**: Bootstrap 5-compatible breakpoints (576px, 768px, 992px, 1200px, 1400px)

## High-Level Structure

```html
<figure class="template-executive-profile">
  <!-- Profile Photo -->
  <img src="..." alt="Portrait of Name, Official Title" />

  <!-- Profile Details -->
  <div data-role="executive-profile-body">
    <p>Official Title</p>
    <h3 data-role="executive-name">Name</h3>
    <p>Government agency</p>
    <p><a href="...">Bio or contact info</a></p>
  </div>
</figure>
```

## Semantic Markup

### Root Container

```html
<figure class="template-executive-profile">
```

Uses semantic `<figure>` element to indicate this is an illustration or self-contained content about a person.

### Profile Photo

```html
<img
  src="path/to/image.jpg"
  alt="Portrait of Name, Official Title" />
```

- Required `alt` text describing the person and their title
- Image provides visual context for the profile
- Flexible sizing controlled by CSS

### Profile Details Container

```html
<div data-role="executive-profile-body">
  <p>Official Title</p>
  <h3 data-role="executive-name">Name</h3>
  <p>Government agency</p>
  <p>
    <a href="..." aria-label="Link to Official's Website">
      Bio or contact info
    </a>
  </p>
</div>
```

- `data-role="executive-profile-body"`: Semantic marker for the details container
- `data-role="executive-name"`: Identifies the person's name (`<h3>`)
- Structured paragraphs for title, agency, and bio information
- Link with descriptive `aria-label` for accessibility

## Variant Management with Data Attributes

Apply variants using the `data-variant` attribute on the `<figure>` element:

```html
<!-- Default variant: light background -->
<figure class="template-executive-profile">
  ...
</figure>

<!-- Transparent variant: no background -->
<figure class="template-executive-profile" data-variant="transparent">
  ...
</figure>

<!-- Dark variant: white text on dark background -->
<figure class="template-executive-profile" data-variant="dark">
  ...
</figure>
```

CSS selectors:

```scss
figure.template-executive-profile { /* Default styling */ }
figure.template-executive-profile[data-variant="transparent"] { /* No background */ }
figure.template-executive-profile[data-variant="dark"] { /* Dark background with white text */ }
```

## CSS Customization

The component uses CSS variables for theming. Override in your CSS:

```css
:root {
  --color-p1: #fdb81e;           /* Primary accent (gold) */
  --color-p2: #046b99;           /* Primary blue */
  --color-p2-pale: #eef8fb;      /* Light blue background */
  --color-p2-darker: #035376;    /* Darker blue */
  --color-p3: #323a45;           /* Dark background */
  --white: #fff;                 /* White text */
  --text-muted: #5e5e6a;         /* Muted text color */
  --link-color: #046b99;         /* Link color */
  --link-color-hover: #035376;   /* Link hover color */
}
```

### Layout Customization

```scss
/* Flex layout for photo + details side-by-side */
figure.template-executive-profile {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

/* Photo dimensions */
figure.template-executive-profile > img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

/* Details container styling */
figure.template-executive-profile > [data-role="executive-profile-body"] {
  flex: 1;
  border-left: 1px solid var(--text-muted);
  padding-left: 1rem;
}
```

### Responsive Media Queries

```scss
/* Adjust layout on smaller screens if needed */
@media (width < 576px) {
  figure.template-executive-profile {
    flex-direction: column;
    gap: 0.5rem;
  }

  figure.template-executive-profile > [data-role="executive-profile-body"] {
    border-left: none;
    padding-left: 0;
  }
}
```

## Files

- `template-executive-profile.html`: Markup and component structure with three variants
- `template-executive-profile.html.css`: Styling, layout, variants, and responsive behavior
- `README.md`: Component documentation

## Browser Support

| Browser     | Support        | Notes                 |
| ----------- | -------------- | --------------------- |
| Chrome/Edge | ✅ Full        | Full support          |
| Firefox     | ✅ Full        | Full support          |
| Safari      | ✅ Full        | Full support          |
| IE 11       | ❌ Unsupported | Flexbox not supported |

## Accessibility Checklist

- ✅ Semantic `<figure>` element usage
- ✅ Descriptive alt text for profile images
- ✅ Proper heading hierarchy (`<h3>`)
- ✅ Color contrast meets WCAG AA
- ✅ Focus visible on all interactive elements (links)
- ✅ Responsive design for mobile devices
- ✅ Touch targets ≥44×44px
- ✅ No reliance on color alone for variant identification

## Related Components

- **template-card**: Similar content container for flexible layout patterns
- **cagov-footer**: May contain staff/leadership directory using this profile component
- **template-page-header**: Often precedes profile listings or team pages
