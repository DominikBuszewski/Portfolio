import React from "react";
import "./menu.styles.scss";
import { Link, animateScroll as scroll } from "react-scroll";

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
						<li className="link">
							<a href="">HOME</a>
						</li>
						<li>
							<a href="about">ABOUT</a>
						</li>
						<li>
							<a href="">PROJECTS</a>
						</li>
						<Link
							activeClass="active"
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							CONTACT
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Menu;
