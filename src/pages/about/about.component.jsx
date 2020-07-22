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
				<table>
					<tbody>
						<tr>
							<td>Name:</td>
							<td>Dominik </td>
						</tr>
						<tr>
							<td>Surname:</td>
							<td>Buszewski</td>
						</tr>
						<tr>
							<td>Age:</td>
							<td>28</td>
						</tr>
						<tr>
							<td>City:</td>
							<td>Wrocław</td>
						</tr>
						<tr>
							<td>Languages:</td>
							<td>Polish, English</td>
						</tr>
						<tr>
							<td>Education:</td>
							<td>Engineering degree</td>
						</tr>
					</tbody>
				</table>

				<p className="text">
					Hello! if you want to know more aboue me or you are interested in
					hiring me, do not hesitate and contact me now! I am also open to
					internships which will help me gain some experience and improve my
					programming skills.
				</p>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					<CustomButton name={"Hire me"} />
				</Link>
			</div>
			<SoftSkillsOverview />
			<SkillsOverview />
		</div>
	</main>
);

export default About;
