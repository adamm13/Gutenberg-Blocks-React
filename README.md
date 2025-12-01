# Curvy Block - WordPress Gutenberg Shape Divider

A custom Gutenberg block that adds beautiful, customizable curved shape dividers to your WordPress content sections. Perfect for creating modern, visually appealing page designs with wave-style separators.

## Overview

The **Curvy Block** (`blockylicious/curvy`) allows you to add SVG-based curved dividers to the top and/or bottom of content sections in the WordPress Block Editor (Gutenberg). It's ideal for creating visual separation between sections while maintaining a modern, fluid design aesthetic.

## Features

### Visual Customization
- **Dual Curve Support**: Add curves to both the top and bottom of sections independently
- **Color Control**: Customize the color of each curve separately
- **Width & Height Adjustment**: Fine-tune curve dimensions with range controls
- **Flip Options**: Horizontally and vertically flip curves for varied designs
- **Background Color**: Full support for WordPress color palette
- **Spacing Controls**: Adjustable padding on all sides

### Technical Features
- Built with React and WordPress Block Editor APIs
- SVG-based curves for crisp rendering at any resolution
- Full-width (`alignfull`) layout support
- Responsive design-ready
- Proper alignment and positioning controls

## Block Attributes

### Top Curve Settings
- **enableTopCurve** (boolean, default: `true`) - Toggle top curve visibility
- **topWidth** (number, default: `100`) - Width percentage (100-300%)
- **topHeight** (number, default: `100`) - Height in pixels (0-200px)
- **topFlipX** (boolean, default: `false`) - Flip horizontally
- **topFlipY** (boolean, default: `false`) - Flip vertically
- **topColor** (string, default: `"#FFFFFF"`) - Curve fill color

### Bottom Curve Settings
- **enableBottomCurve** (boolean, default: `true`) - Toggle bottom curve visibility
- **bottomWidth** (number, default: `100`) - Width percentage (100-300%)
- **bottomHeight** (number, default: `100`) - Height in pixels (0-200px)
- **bottomFlipX** (boolean, default: `false`) - Flip horizontally
- **bottomFlipY** (boolean, default: `false`) - Flip vertically
- **bottomColor** (string, default: `"#FFFFFF"`) - Curve fill color

### Style Settings
- **Background Color**: Default `#ec4899` (pink)
- **Padding**: Default 80px top/bottom, 50px left/right

## How to Use

1. **Add the Block**
   - Open the WordPress Block Editor
   - Click the (+) button to add a new block
   - Search for "Curvy" in the block inserter
   - Select the Curvy block from the Widgets category

2. **Configure Top Curve**
   - In the right sidebar, find the "Top Curve" panel
   - Toggle "Enable Top Curve" on/off
   - When enabled, adjust:
     - Width slider (100-300%)
     - Height slider (0-200px)
     - Flip Horizontally/Vertically toggles
     - Curve Color picker

3. **Configure Bottom Curve**
   - In the right sidebar, find the "Bottom Curve" panel
   - Toggle "Enable Bottom Curve" on/off
   - When enabled, adjust the same controls as the top curve

4. **Style the Section**
   - Use the block toolbar or sidebar to:
     - Set background color
     - Adjust padding/spacing
     - Add custom CSS classes if needed

## Use Cases

- **Hero Sections**: Add a curved bottom to separate hero content from the next section
- **Call-to-Action Areas**: Frame CTAs with top and bottom curves
- **Testimonials**: Create distinct visual boundaries for testimonial sections
- **Feature Sections**: Add visual interest between different content areas
- **Footer Transitions**: Smooth transition from content to footer

## Architecture

### Component Structure
```
curvy/
├── Blockylicious.php          # Plugin registration
├── src/
│   └── blocks/
│       └── curvy/
│           ├── block.json      # Block metadata
│           ├── index.js        # Block registration
│           ├── edit.js         # Editor component
│           ├── save.js         # Frontend save
│           ├── style.scss      # Frontend styles
│           ├── editor.scss     # Editor styles
│           └── components/
│               ├── curve.js              # SVG curve component
│               ├── topCurveSettings.js   # Top curve controls
│               └── bottomCurveSettings.js # Bottom curve controls
└── build/                      # Compiled assets
```

### Key Components

**Curve Component** (`curve.js`)
- Renders SVG path with configurable transforms
- Supports normal and inverted path variations
- Absolute positioning for top/bottom placement
- Dynamic scaling and rotation based on props

**Settings Components** (`topCurveSettings.js`, `bottomCurveSettings.js`)
- `RangeControl` for width and height
- `ToggleControl` for flip options
- `ColorPalette` for color selection
- Proper attribute management

**Edit Component** (`edit.js`)
- Renders curves conditionally based on enabled state
- Provides InspectorControls for sidebar settings
- Uses `useBlockProps` for proper block wrapper attributes
- Full-width section with alignfull class

## Technical Requirements

- **WordPress**: 6.7 or higher
- **PHP**: 7.4 or higher
- **Node.js**: For development/building
- **npm packages**: `@wordpress/scripts` for building

## Development

### Build Commands
```bash
# Development build with watch mode
npm start

# Production build (minified)
npm run build

# Format code
npm run format

# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css
```

### File Locations
- **Source files**: `src/blocks/curvy/`
- **Built files**: `build/blocks/curvy/`
- **Block manifest**: `build/blocks-manifest.php`

## Block Registration

The block is registered using WordPress 6.7+ block metadata collection API for optimal performance:

```php
register_block_type( __DIR__ . '/build/blocks/curvy' );
```

The block metadata is loaded from `block.json` and includes all necessary asset dependencies automatically.

## Customization Tips

1. **Adjust Default Colors**: Modify the `default` values in `block.json` for different default color schemes
2. **Change Curve Shape**: Edit the SVG paths in `curve.js` to create different wave patterns
3. **Add More Curves**: Extend the pattern to support middle curves or multiple curves
4. **Custom Transforms**: Modify the `transform` property in `curve.js` for advanced animations

## Browser Compatibility

- Modern browsers with SVG support
- IE11+ (with appropriate polyfills)
- Responsive across all device sizes

## License

GPL-2.0-or-later

## Author

Adam Mohammed  
GitHub: [@adamm13](https://github.com/adamm13)

## Repository

[Gutenberg-Blocks-React](https://github.com/adamm13/Gutenberg-Blocks-React)

## Support

For issues, feature requests, or contributions, please visit the GitHub repository.
