import React from "react";
import "./about.styles.scss";
import SoftSkillsOverview from "../../components/soft-skills-overview/soft-skills-overview.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import SkillsOverview from "../../components/skills-overview/skills.component";
import { Link, animateScroll as scroll } from "react-scroll";

const About = () => (
	<main className="about-me" id="about">
		<h1>ABOUT ME</h1>
		<div className="skills">
			<div className="informations">
				<p>
					Hi! My name is Dominik, I'm 28 years old, currently looking for my
					first job as a web developer or any kind of internships which will
					help me improve my skills. If you're interested in hiring me, don't
					hesitate and contact me now!
				</p>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					<CustomButton name="Hire me!" />
				</Link>
			</div>
			<SoftSkillsOverview />
			<SkillsOverview />
		</div>
	</main>
);

export default About;
