import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { RangeControl, PanelBody } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { columnCount } = attributes;
	const columnStyles = { columnCount };

	const onChangeContent = (val) => {
		setAttributes({ content: val });
	};

	const onChangeColumnCount = (val) => {
		setAttributes({ columnCount: val });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label="Columns"
						value={columnCount}
						onChange={onChangeColumnCount}
						min={2}
						max={6}
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
