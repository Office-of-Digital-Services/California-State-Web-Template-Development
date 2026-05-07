# Template Skip To Content

The Skip to Content component provides an accessible shortcut that lets keyboard and assistive technology users move directly to the primary page content without tabbing through the full header and navigation.

## Placement

This component should be placed as the first element inside the `<header>` tag.

Putting it first ensures the link is the first interactive control available to keyboard users when they enter the page.

## Expected Behavior

- The link should point to the main content container, typically `#main-content`.
- The destination element should exist on the page.
- The component should remain visually hidden until it receives keyboard focus.

## Recommended Structure

```html
<header>
	<div id="template-skip-to-content">
		<a href="#main-content">Skip to Main Content</a>
	</div>

	<!-- Header branding, navigation, search, etc. -->
</header>

<main id="main-content">
	<!-- Primary page content -->
</main>
```

## Guidance

- Use this component on pages with persistent header, navigation, or utility content.
- Keep the link label direct and action-oriented.
- Do not place this component after other header controls or navigation elements.
