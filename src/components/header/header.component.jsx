import React from "react";
import "./header.styles.scss";

const Header = ({ showMenuHandler }) => (
	<header className="header">
		<div className="nav-container">
			<div className="logo">myPortfolio.</div>
			<div className="hamburger">
				<button onClick={showMenuHandler}>Menu</button>
			</div>
		</div>
	</header>
);
export default Header;
