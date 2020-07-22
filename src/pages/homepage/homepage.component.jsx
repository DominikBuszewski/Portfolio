import React from "react";
import "./homepage.styles.scss";
import Typical from "react-typical";
import { Link, animateScroll as scroll } from "react-scroll";

import CustomButton from "../../components/custom-button/custom-button.component";

const HomePage = () => (
	<div className="homepage" id="home">
		<div className="hero">
			<h1 className="tracking-in-contract-bck">Dominik Buszewski</h1>

			<Typical
				steps={[
					"Junior Front-end Developer",
					1000,
					"Junior Web Developer",
					1000,
					"Junior Software Developer",
					1000,
				]}
				loop={Infinity}
				wrapper="p"
			/>
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
				<CustomButton name={"Contact"} />
			</Link>
		</div>
		<div className="animated-box">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
);

export default HomePage;
