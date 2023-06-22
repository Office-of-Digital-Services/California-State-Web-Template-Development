# California State Web Template NPM Package

This is the NPM Package for the California State Web Template, an HTML template and website standard offered by the California Department of Technology to state agencies and departments within the State of California and beyond.

The California State Web Template is designed to promote a responsive and standard look and feel to ensure a uniform user experience across state entities. The web template includes many usability, security and accessibility requirements and is updated regularly to meet evolving industry standards and best practices.

The state web template is an open source project which you can find on the [CA Office of Digital Services GitHub repository](https://github.com/Office-of-Digital-Services). There are various technology versions of the web template available for consumption. Collaboration is highly encouraged and user feedback and contributions are always considered and often implemented.

This package is based on [Bootstrap v5.1.3](https://www.npmjs.com/package/bootstrap/v/5.1.3)

## How to use

### React

```javascript
//Core CSS first
import "@cagovweb/state-template/dist/css/cagov.core.css";
//Choose Theme
import "@cagovweb/state-template/dist/css/colortheme-oceanside.css";
//Core JS last
import "@cagovweb/state-template/dist/js/cagov.core.js";
```

### Eleventy

**`.eleventy.js`** [(see reference)](https://www.11ty.dev/docs/copy/)

```javascript
module.exports = function(eleventyConfig) {
  // Copy state template core files to site output
  eleventyConfig.addPassthroughCopy({
    "node_modules/@cagovweb/state-template/dist": "state-template"
  });
};
```

At references in your template files

```html
<head>
  ...
  <link rel="stylesheet" href="state-template/css/cagov.core.min.css"/>
  <link rel="stylesheet" href="state-template/css/colortheme-oceanside.min.css"/>
  <script type="text/javascript" src="state-template/js/cagov.core.min.js"></script>
</head>
```

## Documentation

For more information on how to use the state web template, please visit [webstandards.ca.gov](https://webstandards.ca.gov/template/). There you will find documentation on how to get started, how to customize the template, how to follow the web standards and best practices, and how to join the community of web developers and designers working with the state web template.

You can also visit [template.webstandards.ca.gov](https://template.webstandards.ca.gov/) to see examples of websites built with the state web template and learn more about the upcoming design system that will replace the state web template in the future.

## License

The state web template is licensed under the MIT License. See [LICENSE](https://github.com/Office-of-Digital-Services/California-State-Web-Template-Development/blob/main/LICENSE) for details.

## Status

[![npm version](https://img.shields.io/npm/v/@cagovweb/state-template?logo=npm&logoColor=fff)](https://www.npmjs.com/package/@cagovweb/state-template)
[![template version](https://img.shields.io/github/package-json/v/Office-of-Digital-Services/California-State-Web-Template-Development?label=template&logo=github)](https://github.com/Office-of-Digital-Services/California-State-Web-Template-Development/blob/main/package.json)
[![license](https://img.shields.io/github/license/Office-of-Digital-Services/California-State-Web-Template-Development?logo=github)](https://github.com/Office-of-Digital-Services/California-State-Web-Template-Development/blob/main/publish/LICENSE)
[![CSS gzip size](https://img.badgesize.io/Office-of-Digital-Services/California-State-Web-Template-HTML/main/ca_state_template/css/cagov.core.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/Office-of-Digital-Services/California-State-Web-Template-HTML/blob/main/ca_state_template/css/cagov.core.min.css)
[![JS gzip size](https://img.badgesize.io/Office-of-Digital-Services/California-State-Web-Template-HTML/main/ca_state_template/js/cagov.core.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/Office-of-Digital-Services/California-State-Web-Template-HTML/blob/main/ca_state_template/js/cagov.core.min.js)
