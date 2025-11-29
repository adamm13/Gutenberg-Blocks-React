import { HorizontalRule, RangeControl } from "@wordpress/components";
import { ToggleControl, ColorPalette } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

export const TopCurveSettings = (props) => {
 return (
    <>
                        <HorizontalRule />
                        <RangeControl 
                        min={100}
                        max={300}
                        value ={props.attributes.topWidth || 100}
                        onChange={(newValue) => {
                            props.setAttributes({
                                topWidth: newValue});
                        }}	
                        label={__("Width", metadata.textdomain)} 
                        />
                        <RangeControl 
                        min={0}
                        max={200}
                        value ={props.attributes.topHeight || 100}
                        onChange={(newValue) => {
                            props.setAttributes({
                                topHeight: newValue});
                        }}	
                        label={__("Height", metadata.textdomain)} 
                        />
                        <div style={{display: "flex"}}>
                        <ToggleControl checked={props.attributes.topFlipX} onChange={(value) => props.setAttributes({topFlipX: value})} />
                        <span>
                            {__("Flip Horizontaly", metadata.textdomain)}
                        </span>
                    </div>
                    <div style={{display: "flex"}}>
                        <ToggleControl checked={props.attributes.topFlipY} onChange={(value) => props.setAttributes({topFlipY: value})} />
                        <span>
                            {__("Flip Vertically", metadata.textdomain)}
                        </span>
                    </div>
                    <HorizontalRule />
                    <div>
                        <label>{__("Curve Color", metadata.textdomain)}</label>
                        <ColorPalette 
                            value={props.attributes.topColor} onChange={(value) => props.setAttributes({topColor: value,

                            })} />
                    </div>
                    </>
 );};