# Template Featured Search Component

The Template Featured Search component is a prominent search form with an integrated search button. It provides an accessible and user-friendly search interface with keyboard navigation and screen reader support.

## Features

- Search form with integrated search input and submit button.
- Primary color border (2px) with left rounded corners on input and right rounded corners on button.
- Search icon button with no left border to create seamless integration with input field.
- Focus states for keyboard navigation with outline offset.
- Hover states for visual feedback.
- Screen reader only text for accessibility.
- Reset/clear button hidden across all browsers.
- Responsive design that works on all device sizes.

## Required HTML Structure

Use this exact structure:

```html
<form class="template-featured-search" action="/serp.html">
  <span id="TemplateSearchInput" data-sr-only="true">Custom Google Search</span>
  <input
    type="search"
    name="q"
    aria-labelledby="TemplateSearchInput"
    placeholder="Search"
  />
  <button type="submit">
    <span data-search-icon="true" aria-hidden="true"></span>
    <span data-sr-only="true">Submit</span>
  </button>
</form>
```

Notes:

- The root wrapper must be `<form class="template-featured-search">`.
- The `action` attribute should point to your search results page.
- The input must be `type="search"` for proper browser behavior.
- The input `name` attribute should match your search parameter (e.g., `q` for query).
- The `aria-labelledby` attribute should reference the screen reader text span.
- The search icon span should have `data-search-icon="true"`.
- Screen reader only text spans should have `data-sr-only="true"`.

## Search Results Page

This component assumes you have a search results page (e.g., `/serp.html`) that will display the search results. The form's `action` attribute is set to `/serp.html`, which means when users submit the form, they will be redirected to this page with the search query passed as a URL parameter (e.g., `?q=search+term`). You should implement the `/serp.html` page to handle the search query parameter and display appropriate search results to the user.

## Styling

All styling is applied via CSS classes on the root form. The component features:

- **Input field**: 20px font size, 2px primary color border on top, bottom, and left, with left rounded corners.
- **Submit button**: 30px icon size, 2px primary color border on top, bottom, and right, with right rounded corners.
- **Focus state**: 2px blue outline with -5px offset, dark gray shadow.
- **Hover state**: Light gray background on button, gray shadow.

## Accessibility

- Uses semantic HTML with proper form structure.
- Includes `aria-labelledby` for input association.
- Screen reader only text for button label and form description.
- Proper focus indicators with outline offset.
- `data-sr-only="true"` attribute replaces CSS class-based approach for consistency.
