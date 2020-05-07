import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ name, link }) => (
	<button className="btn btn-border-pop">
		{name.toUpperCase()}
		<a href={link}></a>
	</button>
);

export default CustomButton;
