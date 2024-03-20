import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { columnCount, columnWidth } = attributes;
	const columnStyles = { columnCount, columnWidth };

	return (
		<RichText.Content
			{...useBlockProps.save({ style: columnStyles })}
			tagName="p"
			value={attributes.content}
		/>
	);
}
