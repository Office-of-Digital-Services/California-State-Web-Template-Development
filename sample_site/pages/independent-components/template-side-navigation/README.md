# Template Side Navigation

A responsive, accessible side navigation component built with native HTML `<details>` and `<summary>` elements. The component provides a mobile-friendly toggle button that reveals/hides navigation links with full keyboard and screen reader support.

## Purpose

Use this component when you need:

- A responsive side navigation menu
- Mobile-friendly disclosure/collapse behavior
- Full WCAG 2.1 accessibility compliance
- Framework-agnostic initialization (vanilla JS, React, Vue, etc.)
- Semantic HTML with ARIA attributes
- Bootstrap-compatible container styling

## Key Features

### Accessibility (WCAG 2.1)

- **ARIA attributes**: `aria-expanded`, `aria-controls`, `aria-label`, `aria-current` for full semantic markup
- **Keyboard navigation**: Native `<details>` element handles all keyboard interactions
- **Screen reader support**: Proper announcements of state changes and navigation structure
- **Data attributes**: `data-active="true"`, `data-landing="true"`, and `data-back="true"` for state management instead of classes

### Responsive Design

- **Mobile**: Toggle button visible, content hidden by default
- **Desktop (≥992px)**: Toggle button hidden, navigation always visible
- **Container widths**: Bootstrap 5-compatible breakpoints (576px, 768px, 992px, 1200px, 1400px)

### JavaScript Features

- **Safari compatibility polyfill**: `details.name` grouping support for Safari 16.5 and earlier
- **Automatic aria-expanded sync**: Keeps ARIA state in sync with native `open` attribute
- **Framework compatible**: Exported functions for React, Vue, and other frameworks
- **DOMContentLoaded fallback**: Handles both early script load and framework hydration scenarios

## High-Level Structure

```html
<div class="template-side-navigation-wrapper">
  <!-- Toggle Button (mobile only) -->
  <details aria-controls="template-side-navigation-content">
    <summary>
      <span data-role="side-navigation-toggle">Side navigation</span>
    </summary>
  </details>

  <!-- Navigation Content -->
  <div id="template-side-navigation-content">
    <nav aria-label="Side navigation">
      <ul>
        <li><a href="..." data-active="true" data-landing="true">Landing page</a></li>
        <li><a href="...">Page 1</a></li>
        <li><a href="...">Page 2</a></li>
      </ul>
    </nav>
  </div>
</div>
```

## Semantic Markup

### Root Container

```html
<div class="template-side-navigation-wrapper">
```

The main wrapper that contains all child elements.

### Toggle Button (Details/Summary)

```html
<details
  aria-label="Toggle side navigation"
  aria-expanded="false"
  aria-controls="template-side-navigation-content">
  <summary>
    <span data-role="side-navigation-toggle">Side navigation</span>
  </summary>
</details>
```

- Native `<details>` element for state management
- `aria-controls`: Links button to the content it controls
- `aria-expanded`: Always updated to reflect open/closed state
- `data-role="side-navigation-toggle"`: Optional semantic marker for container styling

### Navigation Content

```html
<div id="template-side-navigation-content">
  <nav aria-label="Side navigation">
    <ul>
      <li>
        <a
          href="..."
          data-active="true"
          data-landing="true"
          aria-current="page">
          Landing page
        </a>
      </li>
    </ul>
  </nav>
</div>
```

- Content container with `id` matching `aria-controls` value
- Semantic `<nav>` with descriptive `aria-label`
- Links with data attributes for styling:
  - `data-active="true"`: Highlights current page/section
  - `data-landing="true"`: Styles as primary/landing link
  - `data-back="true"`: Adds back arrow icon in front of the link label
  - `aria-current="page"`: ARIA attribute for current page

## State Management with Data Attributes

Instead of classes, use data attributes for semantic state:

```html
<!-- Active link -->
<a href="..." data-active="true">Current Page</a>

<!-- Landing/primary link -->
<a href="..." data-landing="true">Home</a>

<!-- Both active and landing -->
<a href="..." data-active="true" data-landing="true">Landing Page</a>

<!-- Back link (optional) -->
<a href="..." data-back="true">Back</a>
```

CSS selectors:

```scss
a[data-active="true"] { /* Styling for active links */ }
a[data-landing="true"] { /* Styling for landing/primary links */ }
a[data-back="true"] { /* Styling for back button */ }
```

## CSS Customization

The component uses CSS variables for theming. Override in your CSS:

```css
:root {
  --link-color: #046b99;
  --text-muted: #5e5e6a;
  --sidenav-active-bg: #f8f9fa;
  --sidenav-hover-bg: #fafafa;
  --border-color-muted: #ededef;
}
```

### Responsive Media Queries

```scss
/* Desktop breakpoint: hide toggle, always show nav */
@media (width >= 992px) {
  details {
    display: none;
  }

  details + div {
    display: block;
  }
}
```

## JavaScript Initialization

### Automatic (Page Load)

Scripts run automatically on `DOMContentLoaded` or if DOM is already loaded.

### Manual Initialization (Frameworks)

**React:**

```javascript
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    window.initTemplateSideNavigation();
  }, []);

  return <div>{/* Component */}</div>;
}
```

**Vue 3:**

```javascript
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      window.initTemplateSideNavigation();
    });
  }
}
```

**Vanilla JS:**

```javascript
// Manually call if needed
window.detailsNamePolyfill();        // Safari <16.5 support
window.templateSideNavigationToggle(); // ARIA sync
```

## Files

- `template-side-navigation.html`: Markup and component structure
- `template-side-navigation.html.css`: Presentation, layout, and responsive behavior
- `template-side-navigation.html.js`: JavaScript initialization and polyfills
- `README.md`: Component documentation

## Browser Support

| Browser     | Support        | Notes                                              |
| ----------- | -------------- | -------------------------------------------------- |
| Chrome/Edge | ✅ Full        | Full native support                                |
| Firefox     | ✅ Full        | Full native support                                |
| Safari      | ✅ Full        | Polyfill handles details.name in v16.5 and earlier |
| IE 11       | ❌ Unsupported | `<details>` element not supported                  |

## Accessibility Checklist

- ✅ Proper heading hierarchy (if used with headings)
- ✅ ARIA labels and controls
- ✅ Keyboard navigation support
- ✅ Screen reader announcements
- ✅ Focus management
- ✅ Color contrast meets WCAG AA
- ✅ Touch targets ≥44×44px
- ✅ No reliance on color alone for state indication

## Related Components

- **cagov-header-full**: Uses similar details/aria pattern for disclosure menus
- **template-accordion**: Related disclosure pattern for accordion-style content
