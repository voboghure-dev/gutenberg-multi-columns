import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { RangeControl, PanelBody } from "@wordpress/components";
import "./editor.scss";
import NumberControl from "./components/number-control";

export default function Edit({ attributes, setAttributes }) {
	const { columnCount, columnWidth } = attributes;
	const columnStyles = { columnCount, columnWidth };

	const onChangeContent = (val) => {
		setAttributes({ content: val });
	};

	const onChangeColumnCount = (val) => {
		setAttributes({ columnCount: val });
	};

	const onChangeColumnWidth = (val) => {
		setAttributes({ columnWidth: Number(val) });
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
				</PanelBody>
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
