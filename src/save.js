import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
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

	return (
		<RichText.Content
			{...useBlockProps.save({ style: columnStyles })}
			tagName="p"
			value={attributes.content}
		/>
	);
}
