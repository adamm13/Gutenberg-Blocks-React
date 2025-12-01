import { HorizontalRule, RangeControl } from "@wordpress/components";
import { ToggleControl, ColorPalette } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

/**
 * BottomCurveSettings Component
 * 
 * Provides the inspector controls (sidebar settings) for customizing the bottom curve.
 * Includes controls for width, height, flip options, and color selection.
 * Mirrors the functionality of TopCurveSettings but for the bottom curve.
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.attributes - Block attributes containing curve settings
 * @param {Function} props.setAttributes - Function to update block attributes
 * 
 * @returns {JSX.Element} Inspector controls for bottom curve customization
 */
export const BottomCurveSettings = (props) => {
 return (
    <>
                        <HorizontalRule /> {/* Visual separator */}
                        
                        {/* Width control - adjusts horizontal stretch of the bottom curve (100-300%) */}
                        <RangeControl 
                        min={100}
                        max={300}
                        value={props.attributes.bottomWidth || 100}
                        onChange={(newValue) => {
                            props.setAttributes({
                                bottomWidth: newValue});
                        }}	
                        label={__("Width", metadata.textdomain)} 
                        />
                        
                        {/* Height control - adjusts vertical size of the bottom curve (0-200px) */}
                        <RangeControl 
                        min={0}
                        max={200}
                        value={props.attributes.bottomHeight || 100}
                        onChange={(newValue) => {
                            props.setAttributes({
                                bottomHeight: newValue});
                        }}	
                        label={__("Height", metadata.textdomain)} 
                        />
                        
                        {/* Flip X toggle - mirrors the bottom curve horizontally */}
                        <div style={{display: "flex"}}>
                            <ToggleControl 
                                checked={props.attributes.bottomFlipX} 
                                onChange={(value) => props.setAttributes({bottomFlipX: value})} 
                            />
                        <span>
                            {__("Flip Horizontaly", metadata.textdomain)}
                        </span>
                    </div>
                    
                    {/* Flip Y toggle - rotates the bottom curve 180 degrees */}
                    <div style={{display: "flex"}}>
                        <ToggleControl 
                            checked={props.attributes.bottomFlipY} 
                            onChange={(value) => props.setAttributes({bottomFlipY: value})} 
                        />
                        <span>
                            {__("Flip Vertically", metadata.textdomain)}
                        </span>
                    </div>
                    
                    <HorizontalRule /> {/* Visual separator */}
                    
                    {/* Color picker - sets the fill color of the bottom curve SVG */}
                    <div>
                        <label>{__("Curve Color", metadata.textdomain)}</label>
                        <ColorPalette 
                            value={props.attributes.bottomColor} 
                            onChange={(value) => props.setAttributes({bottomColor: value})} 
                        />
                    </div>
                    </>
 );};