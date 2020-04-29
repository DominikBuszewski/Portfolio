import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ name }) => (
	<button className="btn btn-border-pop">{name.toUpperCase()}</button>
);

export default CustomButton;
