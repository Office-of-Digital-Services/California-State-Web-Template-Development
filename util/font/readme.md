Icon SVG creation

- use https://icomoon.io/app/#/select
- use the "Import Icons" option and select "selection.json" from this project
- Select "Generate Font" and then "Download" a new SVG and replace src/fonts/CaGov.svg

1. Download latest CAGov icon font JSON file: https://github.com/Office-of-Digital-Services/California-State-Web-Template-Source/blob/main/util/font/selection.json (or you can find the same json fine in your State Template /fonts/ folder).
1. Create your own icons (in Illustrator) and save them as .svg files (i will give you examples what needs to be created)
1. Go to https://icomoon.io/app/
1. Open hamburger menu that is the right side and click on Remove set (that will remove existing default set)
1. Click on "Import icons" button and import selection.json file that you have downloaded in the step 1.
1. Add your custom .svg icons to the set by clicking "Import to set" link on the right hamburger menu.
1. Click on "select all" in the same right hamburger menu
1. Click on "Generate font" button that is located at the bottom right corner
1. After font is generated click on "Download" button in the bottom right corner.
1. Unzip downloaded file go to the fonts folder and rename each file to "CaGov" (e.g. CaGov.eat, CaGov.ttf, etc.)
1. Get the WOFF2 version from https://cloudconvert.com/woff-to-woff2
1. Copy and paste those renamed font files into your website's "fonts" folder
1. In the downloaded folder find "styles.css"
1. Inside find your custom icons styles. Change classes, so the first half of the class name would look like this .ca-gov-icon-
   (e.g. .ca-gov-icon-features:before {content: "\e993";} .ca-gov-icon-update:before {content: "\e993";}, etc.)
1. Copy those new classes into /src/css/cagov/icon-font.scss and generate core css files using gulp.
