# Template Header Full Component

The Template Header Full component provides a complete, responsive header solution including a utility bar (CA.gov branding) and a main branding bar with site-specific logo, search, and navigation.

It utilizes a "classless" internal CSS architecture where styling is driven by the HTML structure and direct descendant selectors (`>`) rather than deep BEM nesting.

## Initial Structure

The component's HTML structure must remain consistent, as the CSS utilizes direct descendant selectors (`>`) based on this exact nesting to apply styles.

```html
<div class="template-header-full">
  <!-- 1st Child: Utility Bar (CA.gov Branding) -->
  <div>
    <div>
      <!-- CA.gov Logo & Official Text -->
      <div>...</div>
      <!-- Utility Links -->
      <div>...</div>
    </div>
  </div>

  <!-- 2nd Child: Branding Bar (Site Specific) -->
  <div>
    <div>
      <!-- Site Logo -->
      <div>...</div>

      <!-- Search Trigger (Mobile) -->
      <details name="...">...</details>

      <!-- Search Form -->
      <div>...</div>

      <!-- Menu Trigger (Mobile) -->
      <details name="...">...</details>

      <!-- Main Navigation -->
      <div>
        <nav>...</nav>
      </div>
    </div>
  </div>
</div>
```

## CSS Parent-to-Children Selector Method

This component relies on a strict parent-to-child relationship in CSS to minimize the need for internal class names. By targeting elements like `> div:first-child` and `> div > div`, the stylesheet remains modular and scoped to the `.template-header-full` root.

### Benefits
- **Cleaner HTML**: Fewer classes cluttering the markup.
- **Structural Integrity**: The CSS enforces a consistent HTML structure, which helps maintain accessibility and design standards.
- **Scoped Styling**: All internal element styles are strictly scoped to the header root, preventing leakage.

### Implementation Details
- **Utility Bar**: Targeted via `> div:first-child`.
- **Branding Bar**: Targeted via `> div:last-child`.
- **Containers**: Inner wrappers use width constraints and flexbox layout, targeted via `> div > div`.
- **Interactive Elements**: Search and Menu triggers use the native `<details>` element, with styles applied via `> details`.

## Responsive Behavior
- **Mobile (< 992px)**: Search and Navigation menus are hidden behind `<details>` triggers.
- **Desktop (>= 992px)**: Search form and Navigation menu are displayed inline.
- **Official Branding**: The "Official website" text visibility is managed based on screen width.
