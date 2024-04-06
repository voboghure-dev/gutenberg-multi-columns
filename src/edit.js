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
		__(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus, lectus non interdum cursus, arcu sapien mollis lacus, et tincidunt odio nisi ut purus. Duis eleifend, magna placerat faucibus tincidunt, orci nulla ornare tortor, eget egestas tortor nunc quis sem. Cras in tortor justo. Nulla consectetur leo vel blandit consectetur. Fusce quis sapien ante. Vestibulum non varius augue, et ultricies urna. Integer hendrerit suscipit nibh.",
			"multi-columns",
		),
		__(
			"Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vestibulum mauris diam. Praesent semper diam a efficitur iaculis. Nullam lacinia augue quis lorem accumsan tempus. Maecenas dapibus velit eu blandit pretium. Nullam posuere ut ipsum in commodo. Fusce fringilla quis turpis a placerat. Etiam hendrerit velit a lacus varius ornare.",
			"multi-columns",
		),
	];

	const MC_TEMPLATE = [
		[
			"core/heading",
			{ level: 2, placeholder: __("Heading...", "multi-columns") },
		],
		[
			"core/image",
			{ height: 250, caption: __("First image", "multi-columns") },
		],
		["core/paragraph", { placeholder: TEMPLATE_PARAGRAPHS[0] }],
		["core/quote"],
		[
			"core/heading",
			{ level: 4, placeholder: __("Sub-heading...", "multi-columns") },
		],
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
				<PanelBody title={__("Column Settings", "multi-columns")}>
					<RangeControl
						label={__("Columns", "multi-columns")}
						value={columnCount}
						onChange={onChangeColumnCount}
						min={2}
						max={6}
					/>
					<NumberControl
						label={__("Width", "multi-columns")}
						value={columnWidth}
						onChange={onChangeColumnWidth}
						min={100}
						max={400}
						step={10}
					/>
					<NumberControl
						label={__("Gap", "multi-columns")}
						value={columnGap}
						onChange={onChangeColumnGap}
						min={0}
						max={100}
						step={10}
					/>
				</PanelBody>
				<PanelBody
					title={__("Column Separator", "multi-columns")}
					initialOpen={false}
				>
					<SelectControl
						label={__("Separator Style", "multi-columns")}
						onChange={onChangeColumnRuleStyle}
						value={columnRuleStyle}
						options={[
							{
								label: __("None", "multi-columns"),
								value: "none",
							},
							{
								label: __("Solid", "multi-columns"),
								value: "solid",
							},
							{
								label: __("Dotted", "multi-columns"),
								value: "dotted",
							},
							{
								label: __("Dashed", "multi-columns"),
								value: "dashed",
							},
							{
								label: __("Double", "multi-columns"),
								value: "double",
							},
							{
								label: __("Groove", "multi-columns"),
								value: "groove",
							},
							{
								label: __("Ridge", "multi-columns"),
								value: "ridge",
							},
						]}
					/>
					<NumberControl
						label={__("Width", "multi-columns")}
						onChange={onChangeColumnRuleWidth}
						value={columnRuleWidth}
						min={1}
						max={8}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__("Colour Settings", "multi-columns")}
					colorSettings={[
						{
							label: __("Separator colour", "multi-columns"),
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
