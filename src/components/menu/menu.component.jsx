import React from "react";
import "./menu.styles.scss";

const Menu = ({ show }) => {
	let menuClasses = "hamburger-menu";
	if (show) {
		menuClasses = "hamburger-menu open";
	} else {
		menuClasses = "hamburger-menu";
	}
	return (
		<div className={menuClasses}>
			<div className="menu-links">
				<nav>
					<ul>
						<li>
							<a href="">HOME</a>
						</li>
						<li>
							<a href="about">ABOUT</a>
						</li>
						<li>
							<a href="">PROJECTS</a>
						</li>
						<li>
							<a href="">CONTACT</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Menu;
