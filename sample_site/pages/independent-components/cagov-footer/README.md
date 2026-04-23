# CA.gov Footer

This component is the standard CA.gov footer shell used to present official statewide branding, legal links, and footer-level attribution. It is included here for reference, implementation consistency, and structural understanding.

This component is not intended for modification. It should remain as-is because it represents official CA.gov branding and a primary CA.gov shell component. Do not restyle, restructure, rename regions, or swap core content patterns unless direction comes from the platform or branding owners.

## Purpose

Use this component when the experience needs the standard CA.gov global footer treatment, including:

- CA.gov branding
- legal and policy links
- footer attribution for the State of California

## High-Level Structure

The component is wrapped in:

```html
<footer class="cagov-footer">
  <!-- Footer content -->
</footer>
```

It is composed of three primary content areas:

1. CA.gov brand link
2. Footer link list
3. State attribution

## Region Breakdown

### 1. CA.gov Brand Link

The first content area provides the CA.gov wordmark/logo link back to the main CA.gov site.

Contained areas:

- CA.gov text label
- CA.gov logo graphic

This region establishes statewide branding and should remain visually and structurally intact.

### 2. Footer Link List

The second content area provides key statewide policy and support destinations.

Contained areas:

- Conditions of use
- Privacy policy
- Accessibility
- Sitemap

These links support common global footer expectations and should remain consistent with the CA.gov shell.

### 3. State Attribution

The final content area provides the copyright line for the State of California, including the current year.

Contained areas:

- copyright symbol
- current year
- State of California label

## Structural Outline

```html
footer.cagov-footer
  div
    div
      a        /* CA.gov brand link */
      ul       /* Footer links */
      div      /* State attribution */
```

## Guidance

- Treat this as a protected shell component, not a customization surface.
- Do not alter the branding, logo treatment, labels, legal link set, or region order.
- Do not repurpose the component as a local footer variant.
- If a project needs different footer behavior, create or use another component rather than editing this one.

## Files

- `cagov-footer.html`: Markup and region structure
- `cagov-footer.html.css`: Presentation and layout
