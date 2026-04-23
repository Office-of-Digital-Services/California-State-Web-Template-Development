# CA.gov Header Full

This component is the full CA.gov header shell used to present official statewide branding and core navigation. It is included here for reference, implementation consistency, and structural understanding.

This component is not intended for modification. It should remain as-is because it represents official CA.gov branding and the primary CA.gov shell component. Do not restyle, restructure, rename regions, or swap core content patterns unless direction comes from the platform or branding owners.

## Purpose

Use this component when the experience needs the full CA.gov global header treatment, including:

- official California government identification
- utility navigation
- CA.gov branding
- search
- primary site navigation

## High-Level Structure

The component is wrapped in:

```html
<div class="cagov-header-full">
  <!-- Utility Bar -->
  <!-- Bottom Bar / Branding -->
</div>
```

It is composed of two primary regions:

1. Utility Bar
2. Bottom Bar / Branding

## Region Breakdown

### 1. Utility Bar

The first top-level region provides lightweight statewide utility actions and trust messaging.

Contained areas:

- Official California website button
- Official California website explanatory content
- Login link
- Utility menu button
- Utility navigation content

This region helps users confirm that the site is part of California government and gives quick access to utility-level destinations.

### 2. Bottom Bar / Branding

The second top-level region contains the primary branded shell.

Contained areas:

- CA.gov logo/home link
- Search button
- Search form
- Main menu button
- Main navigation content

This region is the main branded interaction layer and should be preserved intact to maintain consistency with CA.gov.

## Structural Outline

```html
div.cagov-header-full
  div  /* Utility Bar */
    div
      details  /* Official California website */
      div      /* Official California website content */
      div      /* Login */
      details  /* Utility menu */
      div      /* Utility navigation */
  div  /* Bottom Bar / Branding */
    div
      div      /* CA.gov logo */
      details  /* Search button */
      div      /* Search form */
      details  /* Main menu */
      div      /* Main navigation */
```

## Guidance

- Treat this as a protected shell component, not a customization surface.
- Do not alter the branding, logo treatment, labels, or region order.
- Do not repurpose the component as a local header variant.
- If a project needs a different header behavior, create or use another component rather than editing this one.

## Files

- `cagov-header-full.html`: Markup and region structure
- `cagov-header-full.html.css`: Presentation and layout
- `cagov-header-full.html.js`: Interactive behavior
