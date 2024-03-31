import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { RangeControl, PanelBody, SelectControl } from "@wordpress/components";
import "./editor.scss";
import NumberControl from "./components/number-control";

export default function Edit({ attributes, setAttributes }) {
	const {
		columnCount,
		columnWidth,
		columnGap,
		columnRuleStyle,
		columnRuleWidth,
		columnRuleColor,
	} = attributes;
	const columnStyles = {
		columnCount,
		columnWidth,
		columnGap,
		columnRuleStyle,
		columnRuleWidth,
		columnRuleColor,
	};

	const ALLOWED_BLOCKS = ["core/heading", "core/paragraph", "core/image"];

	const TEMPLATE_PARAGRAPHS = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus, lectus non interdum cursus, arcu sapien mollis lacus, et tincidunt odio nisi ut purus. Duis eleifend, magna placerat faucibus tincidunt, orci nulla ornare tortor, eget egestas tortor nunc quis sem. Cras in tortor justo. Nulla consectetur leo vel blandit consectetur. Fusce quis sapien ante. Vestibulum non varius augue, et ultricies urna. Integer hendrerit suscipit nibh.",
		"Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vestibulum mauris diam. Praesent semper diam a efficitur iaculis. Nullam lacinia augue quis lorem accumsan tempus. Maecenas dapibus velit eu blandit pretium. Nullam posuere ut ipsum in commodo. Fusce fringilla quis turpis a placerat. Etiam hendrerit velit a lacus varius ornare.",
	];

	const MC_TEMPLATE = [
		["core/heading", { level: 2, placeholder: "Heading..." }],
		["core/image", { caption: "First image", height: 250 }],
		["core/paragraph", { placeholder: TEMPLATE_PARAGRAPHS[0] }],
		["core/quote"],
		["core/heading", { level: 4, placeholder: "Sub-heading..." }],
		["core/paragraph", { placeholder: TEMPLATE_PARAGRAPHS[1] }],
	];

	const onChangeColumnCount = (val) => {
		setAttributes({ columnCount: Number(val) });
	};

	const onChangeColumnWidth = (val) => {
		setAttributes({ columnWidth: Number(val) });
	};

	const onChangeColumnGap = (val) => {
		setAttributes({ columnGap: Number(val) });
	};

	const onChangeColumnRuleStyle = (val) => {
		setAttributes({ columnRuleStyle: val });
	};

	const onChangeColumnRuleWidth = (val) => {
		setAttributes({ columnRuleWidth: Number(val) });
	};

	const onChangeColumnRuleColor = (val) => {
		setAttributes({ columnRuleColor: val });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Column Settings">
					<RangeControl
						label="Columns"
						value={columnCount}
						onChange={onChangeColumnCount}
						min={2}
						max={6}
					/>
					<NumberControl
						label="Width"
						value={columnWidth}
						onChange={onChangeColumnWidth}
						min={100}
						max={400}
						step={10}
					/>
					<NumberControl
						label="Gap"
						value={columnGap}
						onChange={onChangeColumnGap}
						min={0}
						max={100}
						step={10}
					/>
				</PanelBody>
				<PanelBody title="Column Separator" initialOpen={false}>
					<SelectControl
						label="Separator Style"
						onChange={onChangeColumnRuleStyle}
						value={columnRuleStyle}
						options={[
							{
								label: "None",
								value: "none",
							},
							{
								label: "Solid",
								value: "solid",
							},
							{
								label: "Dotted",
								value: "dotted",
							},
							{
								label: "Dashed",
								value: "dashed",
							},
							{
								label: "Double",
								value: "double",
							},
							{
								label: "Groove",
								value: "groove",
							},
							{
								label: "Ridge",
								value: "ridge",
							},
						]}
					/>
					<NumberControl
						label="Width"
						onChange={onChangeColumnRuleWidth}
						value={columnRuleWidth}
						min={1}
						max={8}
					/>
				</PanelBody>
				<PanelColorSettings
					title="Colour Settings"
					colorSettings={[
						{
							label: "Separator colour",
							value: columnRuleColor,
							onChange: onChangeColumnRuleColor,
						},
					]}
				></PanelColorSettings>
			</InspectorControls>

			<div {...useBlockProps({ style: columnStyles })}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={MC_TEMPLATE} />
			</div>
		</>
	);
}
