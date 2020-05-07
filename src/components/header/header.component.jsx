import React from "react";
import "./header.styles.scss";
import { Link } from "react-scroll";
import logo from "../../assets/icons/logo.png";

const Header = () => (
	<header className="header">
		<img src={logo} className="logo" />

		<nav className="nav-container">
			<Link
				className="nav-element"
				activeClass="active"
				to="home"
				spy={true}
				smooth={true}
				offset={-70}
				duration={800}
			>
				HOME
			</Link>
			<Link
				className="nav-element"
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				offset={-70}
				duration={800}
			>
				ABOUT
			</Link>
			<Link
				className="nav-element"
				activeClass="active"
				to="projects"
				spy={true}
				smooth={true}
				offset={-70}
				duration={800}
			>
				PROJECTS
			</Link>
			<Link
				className="nav-element"
				activeClass="active"
				to="contact"
				spy={true}
				smooth={true}
				offset={-70}
				duration={800}
			>
				CONTACT
			</Link>
		</nav>
	</header>
);
export default Header;
