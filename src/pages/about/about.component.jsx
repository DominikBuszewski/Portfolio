import React from "react";
import "./about.styles.scss";
import SoftSkillsOverview from "../../components/soft-skills-overview/soft-skills-overview.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import SkillsOverview from "../../components/skills-overview/skills.component";
import { Link } from "react-scroll";

const About = () => (
	<main className="about-me" id="about">
		<h1>ABOUT ME</h1>
		<div className="skills">
			<div className="informations">
				<p>
					Hi! My name is Dominik, I'm 28 years old guy, currently living in
					Wrocław, working on my JS/React skills and looking for a job as a
					front end developer. I am also open to internships which will help me
					gain some experience and improve my programming skills. If you're
					interested in hiring me, don't hesitate and contact me now!
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
