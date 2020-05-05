import React from "react";
import "./homepage.styles.scss";
import { Link, animateScroll as scroll } from "react-scroll";

import CustomButton from "../../components/custom-button/custom-button.component";

const HomePage = () => (
	<div className="homepage" id="home">
		<div className="hero">
			<h1 className="tracking-in-contract-bck">Dominik Buszewski</h1>
			<p className="tracking-in-contract-bck">Junior Front-end Developer.</p>
		</div>
		<div className="buttons">
			<Link
				to="projects"
				activeClass="active"
				spy={true}
				smooth={true}
				offset={-70}
				duration={800}
			>
				<CustomButton name={"My Projects"} />
			</Link>
			<Link
				to="contact"
				activeClass="active"
				spy={true}
				smooth={true}
				offset={-70}
				duration={800}
			>
				<CustomButton name={"Contact me"} />
			</Link>
		</div>
	</div>
);

export default HomePage;
