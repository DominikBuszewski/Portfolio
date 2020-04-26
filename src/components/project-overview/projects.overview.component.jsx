import React from "react";
import "./projects-overview.styles.scss";
import ProjectItem from "../project-item/project-item.component";
import test from "../../assets/images/bg-test.jpg";

const ProjectsOverview = () => (
  <div className="projects-overview">
    <ProjectItem imgUrl={test} title={"Test"} technology={"HTML/CSS/REACT"} />
    <ProjectItem imgUrl={test} title={"Test"} technology={"HTML/CSS/REACT"} />
    <ProjectItem imgUrl={test} title={"Test"} technology={"HTML/CSS/REACT"} />
  </div>
);

export default ProjectsOverview;
