import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ name, link }) => (
	<button className="btn btn-border-pop">
		<p href={link}> {name.toUpperCase()}</p>
	</button>
);

export default CustomButton;
