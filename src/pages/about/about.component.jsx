import React from "react";
import "./about.styles.scss";
import SoftSkillsOverview from "../../components/soft-skills-overview/soft-skills-overview.component";

import SkillsOverview from "../../components/skills-overview/skills.component";

const About = () => (
  <div className="about">
    <h1>About me</h1>
    <div className="skills">
      <SoftSkillsOverview />
      <SkillsOverview />
    </div>
  </div>
);

export default About;
