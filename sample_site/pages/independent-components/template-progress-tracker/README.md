# Template Progress Tracker Component

The Template Progress Tracker component is a visual timeline designed to show progress through a multi-step process or a chronological list of events. It features a class-root architecture (`.template-progress-tracker`) combined with data attributes and tag-based descendant selectors for variants.

## Initial Structure

The component's HTML structure must remain consistent, as the CSS utilizes direct descendant selectors (`>`) based on this exact nesting to apply styles.

```html
<!-- 
  Progress Tracker Component 
  data-progress-step-border options: "gray", "transparent"
-->
<div class="template-progress-tracker">
  <!-- Progress Tracker Content -->
  <div>
    <!-- Progress Tracker Step -->
    <div data-progress-step-border="gray">
      <!-- 
        Timeline Dot 
        data-progress-dot options: "primary", "primary-full", "gray"
      -->
      <div data-progress-dot="primary-full">
        <span></span>
      </div>
      
      <!-- Step Content -->
      <div>
        <h2>Progress tracker timeline heading</h2>
        <p>Description of the progress step goes here.</p>
        
        <!-- 
          Progress List 
          data-progress-list options: "unstyled"
        -->
        <ul data-progress-list="unstyled">
          <li>List item 1</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Data Attribute Selectors and Features

Instead of utility classes, this component leverages specific `data-progress-*` attributes for modifiers and styling overrides.

### Step Border Style (`data-progress-step-border`)
Applied to the **Progress Tracker Step** element (the `div` child of the content container).
- `data-progress-step-border="gray"`: Sets the left vertical border color to light gray (`#ededef`).
- `data-progress-step-border="transparent"`: Hides the left vertical border (useful for the final step).
- *(default)*: If no attribute is provided, the border color defaults to a light blue (`#87b8ce`).

### Timeline Dot Style (`data-progress-dot`)
Applied to the **Timeline Dot Container** element.
- `data-progress-dot="primary"`: Sets the inner dot center to primary blue.
- `data-progress-dot="primary-full"`: Sets both the ring and the inner center to primary blue.
- `data-progress-dot="gray"`: Sets the ring to a light gray.
- *(default)*: If no attribute is provided, the ring is light blue with a white center.

### List Style (`data-progress-list`)
Applied to the `<ul>` element within the step content.
- `data-progress-list="unstyled"`: Removes padding and bullet points from the list.

## Structural Regions
- **Root Container**: The main component wrapper.
- **Content Container**: An inner wrapper managing layout and width constraints.
- **Progress Step**: A repeating container for each individual stage/event.
- **Timeline Dot**: The visual marker on the left representing the step state.
- **Step Content**: The text area containing the heading, description, and supporting lists.
