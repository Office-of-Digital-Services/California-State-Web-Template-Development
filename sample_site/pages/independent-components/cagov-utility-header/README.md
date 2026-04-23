# CA.gov Utility Header

This component is the compact CA.gov utility header shell used to present official statewide branding, navigation access, and search within a single utility bar. It is included here for reference, implementation consistency, and structural understanding.

This component is not intended for modification. It should remain as-is because it represents official CA.gov branding and a primary CA.gov shell component. Do not restyle, restructure, rename regions, or swap core content patterns unless direction comes from the platform or branding owners.

## Purpose

Use this component when the experience needs a compact CA.gov utility header treatment, including:

- CA.gov branding
- CA.gov navigation access
- search

## High-Level Structure

The component is wrapped in:

```html
<div class="cagov-utility-header">
  <!-- Utility Wrapper -->
</div>
```

It is composed of one primary utility region containing four functional areas:

1. CA.gov brand link
2. CA.gov menu button
3. CA.gov menu content
4. Search control and search form

## Region Breakdown

### 1. CA.gov Brand Link

The first functional area provides the CA.gov logo link back to the main CA.gov site.

Contained areas:

- CA.gov home link
- CA.gov logo graphic
- screen reader label

This region establishes statewide branding and should remain visually and structurally intact.

### 2. CA.gov Menu

The next functional area provides access to statewide navigation.

Contained areas:

- CA.gov menu button
- CA.gov navigation content
- links for Services, Departments, About California, and Get help

This region provides access to core CA.gov destinations and should remain consistent with the CA.gov shell.

### 3. Search

The final functional area provides the CA.gov search experience.

Contained areas:

- search button
- search form
- search input
- submit button

This region supports global CA.gov search access and should be preserved intact.

## Structural Outline

```html
div.cagov-utility-header
  div   /* Utility Wrapper */
    div /* Container */
      div /* Utility Bar */
        div      /* CA.gov logo */
        details  /* CA.gov menu button */
        div      /* CA.gov menu content */
        details  /* Search button */
        div      /* Search content */
```

## Guidance

- Treat this as a protected shell component, not a customization surface.
- Do not alter the branding, logo treatment, labels, navigation set, search pattern, or region order.
- Do not repurpose the component as a local header variant.
- If a project needs different header behavior, create or use another component rather than editing this one.

## Files

- `cagov-utility-header.html`: Markup and region structure
- `cagov-utility-header.html.css`: Presentation and layout
- `cagov-utility-header.html.js`: Interactive behavior
