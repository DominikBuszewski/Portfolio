import React from "react";
import "./projects-overview.styles.scss";
import ProjectItem from "../project-item/project-item.component";
import test from "../../assets/images/bg-test.jpg";
import bao from "../../assets/images/bao.JPG";
import crown from "../../assets/images/crown.JPG";

const ProjectsOverview = () => (
	<div className="projects-overview">
		<ProjectItem
			imgUrl={test}
			title={"Crown-shop"}
			technology={"HTML/CSS/REACT/REDUX/REACT-ROUTER"}
		/>
		<ProjectItem
			imgUrl={bao}
			title={"Bao-burger"}
			technology={"HTML/CSS/REACT/REDUX/REACT-ROUTER"}
		/>
		<ProjectItem
			imgUrl={crown}
			title={"Portfolio"}
			technology={"HTML/CSS/REACT/REACT-SCROLL"}
		/>
	</div>
);

export default ProjectsOverview;
