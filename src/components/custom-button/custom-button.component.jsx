import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ name }) => (
  <button className="custom-button">{name.toUpperCase()}</button>
);

export default CustomButton;
