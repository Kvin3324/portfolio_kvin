import React from "react";
import ChipsWrapper from "../../style/Chips.style";

const Chips = props => {
	return (
		<ChipsWrapper contentType={props.content}>
			{props.content === null ? "Markdown" : props.content}
		</ChipsWrapper>
	);
}

export default Chips;