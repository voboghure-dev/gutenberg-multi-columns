import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { columnCount } = attributes;
	const columnStyles = { columnCount };

	return (
		<RichText.Content
			{...useBlockProps.save({ style: columnStyles })}
			tagName="p"
			value={attributes.content}
		/>
	);
}
