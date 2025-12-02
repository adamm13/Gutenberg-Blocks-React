/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, ToggleControl,} from "@wordpress/components";
import { TopCurveSettings } from './components/topCurveSettings';	
import { BottomCurveSettings } from './components/bottomCurveSettings';	


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Edit Component - Block Editor Interface
 * 
 * The edit function describes the structure of the block in the context of the
 * editor. This represents what the editor will render when the block is used.
 * 
 * This component renders:
 * 1. A full-width section that displays the curves in the editor
 * 2. InspectorControls (sidebar) with settings for both top and bottom curves
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} props - Component properties
 * @param {Object} props.attributes - Block attributes (curve settings, colors, etc.)
 * @param {Function} props.setAttributes - Function to update block attributes
 * 
 * @return {JSX.Element} The block editor interface with curves and controls
 */
import metadata from './block.json';
import { Curve } from './components/curve';

export default function Edit(props) {
	// Extract className and spread remaining block props
	// useBlockProps provides necessary attributes for the block wrapper
	const { className, ...blockProps } = useBlockProps();
	console.log({className})
	
	return (
		<>
		{/* Main section that contains the curves - uses alignfull for full-width display */}
		<section className={`${className} alignfull`} {...blockProps}> 
			{/* Top Curve - Only renders if enableTopCurve is true */}
			{props.attributes.enableTopCurve &&
			<Curve 
			color={props.attributes.topColor}
			height={props.attributes.topHeight} 
			width={props.attributes.topWidth}
			flipX={props.attributes.topFlipX}
			flipY={props.attributes.topFlipY} />	
			}
			
			{/* InnerBlocks allows nested content within this block */}
			<InnerBlocks />
			
			{/* Bottom Curve - Only renders if enableBottomCurve is true */}
			{/* Note: isBottom={true} positions this curve at the bottom of the section */}
			{props.attributes.enableBottomCurve &&
			<Curve
			isBottom={true} 
			color={props.attributes.bottomColor}
			height={props.attributes.bottomHeight} 
			width={props.attributes.bottomWidth}
			flipX={props.attributes.bottomFlipX}
			flipY={props.attributes.bottomFlipY} />	
			}
		</section>	
		{/* InspectorControls - Sidebar settings panel in the block editor */}
		<InspectorControls>
			{/* Bottom Curve Panel - Contains toggle and settings for the bottom curve */}
			<PanelBody title={__("Bottom Curve", metadata.textdomain)}>
				{/* Toggle to enable/disable the bottom curve */}
				<div style={{ display: "flex" }}>
					<ToggleControl
						checked={props.attributes.enableBottomCurve}
						onChange={(value) => props.setAttributes({ enableBottomCurve: value })}
					/>
					<span>{__("Enable Bottom Curve", metadata.textdomain)}</span>
				</div>
				{/* Conditionally render detailed settings only when bottom curve is enabled */}
				{props.attributes.enableBottomCurve && (
					<BottomCurveSettings attributes={props.attributes} setAttributes={props.setAttributes} />
				)}
			</PanelBody>
			
			{/* Top Curve Panel - Contains toggle and settings for the top curve */}
			<PanelBody title={__("Top Curve", metadata.textdomain)}>
				{/* Toggle to enable/disable the top curve */}
				<div style={{ display: "flex" }}>
					<ToggleControl
						checked={props.attributes.enableTopCurve}
						onChange={(value) => props.setAttributes({ enableTopCurve: value })}
					/>
					<span>{__("Enable Top Curve", metadata.textdomain)}</span>
				</div>
				{/* Conditionally render detailed settings only when top curve is enabled */}
				{props.attributes.enableTopCurve && (
					<TopCurveSettings attributes={props.attributes} setAttributes={props.setAttributes} />
				)}
			</PanelBody>
		</InspectorControls>
	</>
	);}

