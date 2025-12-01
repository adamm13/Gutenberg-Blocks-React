/**
 * Curve Component
 * 
 * Renders an SVG-based curved shape divider that can be positioned at the top or bottom of a section.
 * The curve uses predefined SVG paths that create a wave-like appearance.
 * 
 * @param {Object} props - Component properties
 * @param {boolean} props.isBottom - If true, positions the curve at the bottom; otherwise at the top
 * @param {string} props.color - Fill color for the curve (e.g., "#FFFFFF", "white")
 * @param {number} props.height - Height of the curve container in pixels
 * @param {number} props.width - Width percentage of the curve (100-300)
 * @param {boolean} props.flipX - If true, flips the curve horizontally
 * @param {boolean} props.flipY - If true, flips the curve vertically (rotates 180deg)
 * 
 * @returns {JSX.Element} An absolutely positioned div containing the SVG curve
 */
export const Curve = (props) => {
    // Normal wave path - curves downward from left to right
    const normalPath = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
    
    // Inverted wave path - curves upward from left to right
    const invertedPath = "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z";
   
    return (
        // Outer wrapper - absolutely positioned container for the curve
        <div style={{
            position: "absolute",
            // Position at top (0) for top curves, or bottom (0) for bottom curves
            top: !props.isBottom ? 0 : "initial", 
            bottom: props.isBottom ? 0 : "initial",
            left: 0, 
            width: "100%",
            overflow: "hidden", // Clips any overflow to prevent scrollbars
            height: props.height,
            // Apply transforms: flipX mirrors horizontally, flipY rotates 180deg, isBottom flips for bottom positioning
            transform: `scaleX(${props.flipX ? -1 : 1}) rotate(${
                props.flipY ? "180deg" : 0}) scaleY(${
                    props.isBottom ? -1 : 1})`,
            }}>
            <div>
                {/* SVG element that renders the actual curve shape */}
                <svg preserveAspectRatio="none"  // Stretches to fill container without maintaining aspect ratio
                style= {{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: props.height,
                    width: `${props.width}%` // Width as percentage allows curves wider than container
                }}
                 viewBox="0 0 1200 120"> {/* Fixed viewBox defines the coordinate system */}
                    {/* Path element draws the curve shape */}
                    <path 
                        style={{fill: props.color || "white"}} 
                        d={props.flipY ? invertedPath : normalPath} // Switch between normal and inverted path based on flipY
                    ></path>
                    </svg>              
             </div>
        </div>
    );
};

