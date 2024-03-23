import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
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

	const onChangeContent = (val) => {
		setAttributes({ content: val });
	};

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

			<RichText
				{...useBlockProps({ style: columnStyles })}
				tagName="p"
				onChange={onChangeContent}
				value={attributes.content}
				placeholder="Enter some text here..."
			/>
		</>
	);
}
