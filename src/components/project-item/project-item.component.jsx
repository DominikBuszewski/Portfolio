import React from "react";
import "./project-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const ProjectItem = ({ title, technology, imgUrl }) => (
  <div className="project-container">
    <div className="project">
      <img src={imgUrl} />
    </div>
    <div className="project-details-container">
      <div className="project-details">
        <h3>{title}</h3>
        <p className="project-description"></p>
        <p className="used-technology">{technology}</p>
        <div className="project-button-container">
          <CustomButton name={"CODE"} />
          <CustomButton name={"LIVE"} />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectItem;
