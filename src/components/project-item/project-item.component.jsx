import React from "react";
import "./project-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import Tilt from "react-tilt";

const ProjectItem = ({ title, technology, imgUrl, code, live }) => (
	<Tilt className="Tilt project-container" options={{ max: 35, scale: 0.8 }}>
		<div className="project">
			<img src={imgUrl} />
		</div>
		<div className="project-details-container">
			<div className="project-details">
				<h3>{title}</h3>
				<p className="project-description"></p>
				<p className="used-technology">{technology}</p>
				<div className="project-button-container">
					<a href={code} target="_blank">
						<CustomButton name={"CODE"} />
					</a>
					<a href={live} target="_blank">
						<CustomButton name={"LIVE"} />
					</a>
				</div>
			</div>
		</div>
	</Tilt>
);

export default ProjectItem;
