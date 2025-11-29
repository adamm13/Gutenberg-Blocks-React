import { HorizontalRule, RangeControl } from "@wordpress/components";
import { ToggleControl, ColorPalette } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

export const BottomCurveSettings = (props) => {
 return (
    <>
                        <HorizontalRule />
                        <RangeControl 
                        min={100}
                        max={300}
                        value ={props.attributes.bottomWidth || 100}
                        onChange={(newValue) => {
                            props.setAttributes({
                                bottomWidth: newValue});
                        }}	
                        label={__("Width", metadata.textdomain)} 
                        />
                        <RangeControl 
                        min={0}
                        max={200}
                        value ={props.attributes.bottomHeight || 100}
                        onChange={(newValue) => {
                            props.setAttributes({
                                bottomHeight: newValue});
                        }}	
                        label={__("Height", metadata.textdomain)} 
                        />
                        <div style={{display: "flex"}}>
                            <ToggleControl checked={props.attributes.bottomFlipX} onChange={(value) => props.setAttributes({bottomFlipX: value})} />
                        <span>
                            {__("Flip Horizontaly", metadata.textdomain)}
                        </span>
                    </div>
                    <div style={{display: "flex"}}>
                        <ToggleControl checked={props.attributes.bottomFlipY} onChange={(value) => props.setAttributes({bottomFlipY: value})} />
                        <span>
                            {__("Flip Vertically", metadata.textdomain)}
                        </span>
                    </div>
                    <HorizontalRule />
                    <div>
                        <label>{__("Curve Color", metadata.textdomain)}</label>
                        <ColorPalette 
                            value={props.attributes.bottomColor} onChange={(value) => props.setAttributes({bottomColor: value,

                            })} />
                    </div>
                    </>
 );};