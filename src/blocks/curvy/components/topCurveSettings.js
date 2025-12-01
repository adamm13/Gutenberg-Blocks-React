import { HorizontalRule, RangeControl } from "@wordpress/components";
import { ToggleControl, ColorPalette } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

/**
 * TopCurveSettings Component
 * 
 * Provides the inspector controls (sidebar settings) for customizing the top curve.
 * Includes controls for width, height, flip options, and color selection.
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.attributes - Block attributes containing curve settings
 * @param {Function} props.setAttributes - Function to update block attributes
 * 
 * @returns {JSX.Element} Inspector controls for top curve customization
 */
export const TopCurveSettings = (props) => {
 return (
    <>
                        <HorizontalRule /> {/* Visual separator */}
                        
                        {/* Width control - adjusts horizontal stretch of the curve (100-300%) */}
                        <RangeControl 
                        min={100}
                        max={300}
                        value={props.attributes.topWidth || 100}
                        onChange={(newValue) => {
                            props.setAttributes({
                                topWidth: newValue});
                        }}	
                        label={__("Width", metadata.textdomain)} 
                        />
                        
                        {/* Height control - adjusts vertical size of the curve (0-200px) */}
                        <RangeControl 
                        min={0}
                        max={200}
                        value={props.attributes.topHeight || 100}
                        onChange={(newValue) => {
                            props.setAttributes({
                                topHeight: newValue});
                        }}	
                        label={__("Height", metadata.textdomain)} 
                        />
                        
                        {/* Flip X toggle - mirrors the curve horizontally */}
                        <div style={{display: "flex"}}>
                        <ToggleControl 
                            checked={props.attributes.topFlipX} 
                            onChange={(value) => props.setAttributes({topFlipX: value})} 
                        />
                        <span>
                            {__("Flip Horizontaly", metadata.textdomain)}
                        </span>
                    </div>
                    
                    {/* Flip Y toggle - rotates the curve 180 degrees */}
                    <div style={{display: "flex"}}>
                        <ToggleControl 
                            checked={props.attributes.topFlipY} 
                            onChange={(value) => props.setAttributes({topFlipY: value})} 
                        />
                        <span>
                            {__("Flip Vertically", metadata.textdomain)}
                        </span>
                    </div>
                    
                    <HorizontalRule /> {/* Visual separator */}
                    
                    {/* Color picker - sets the fill color of the curve SVG */}
                    <div>
                        <label>{__("Curve Color", metadata.textdomain)}</label>
                        <ColorPalette 
                            value={props.attributes.topColor} 
                            onChange={(value) => props.setAttributes({topColor: value})} 
                        />
                    </div>
                    </>
 );};