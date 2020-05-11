import React from "react";
import "./projects-overview.styles.scss";
import ProjectItem from "../project-item/project-item.component";
import test from "../../assets/images/bg-test.jpg";
import bao from "../../assets/images/bao.JPG";
import crown from "../../assets/images/crown.JPG";
import faceDetector from "../../assets/images/faceDetector.JPG";

const ProjectsOverview = () => (
	<div className="projects-overview">
		<ProjectItem
			imgUrl={crown}
			title={"Crown-shop"}
			technology={"HTML/CSS/REACT/REDUX/REACT-ROUTER"}
			code={"https://github.com/DominikBuszewski/crown-clothing"}
			live={"https://dominik-buszewski-portfolio.herokuapp.com/"}
		/>
		<ProjectItem
			imgUrl={bao}
			title={"Bao-burger"}
			technology={"HTML/CSS/REACT/REDUX/REACT-ROUTER"}
			code={"https://github.com/DominikBuszewski/bao-burger"}
			live={"https://bao-burger.herokuapp.com"}
		/>
		<ProjectItem
			imgUrl={test}
			title={"Portfolio"}
			technology={"HTML/CSS/REACT/REACT-SCROLL"}
			code={"https://github.com/DominikBuszewski/Portfolio"}
		/>
		<ProjectItem
			imgUrl={faceDetector}
			title={"Face Detector"}
			technology={"HTML/CSS/REACT/HOOKS"}
			code={"https://github.com/DominikBuszewski/face-detector"}
			live={"https://face-detector-live.herokuapp.com"}
		/>
	</div>
);
export default ProjectsOverview;
