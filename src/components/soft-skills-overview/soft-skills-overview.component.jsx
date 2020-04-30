import React from "react";
import "./soft-skills-overview.styles.scss";
import { ReactComponent as ResponsibleIcon } from "../../assets/icons/responsible.svg";
import { ReactComponent as OpenMindIcon } from "../../assets/icons/open-mind.svg";
import { ReactComponent as PunctualIcon } from "../../assets/icons/punctual.svg";
import { ReactComponent as CommunicativeIcon } from "../../assets/icons/comunicative.svg";
import { ReactComponent as TeamPlayerIcon } from "../../assets/icons/team-player.svg";

const SoftSkillsOverview = () => (
	<div className="overview">
		<div className="soft-skills">
			<h2>Soft skills</h2>
			<div className="soft-skills-list">
				<div className="soft-skills-container">
					<div className="soft-skill">
						<ResponsibleIcon className="icon" />
					</div>
					<p>Responsible</p>
				</div>
				<div className="soft-skills-container">
					<div className="soft-skill">
						<OpenMindIcon className="icon" />
					</div>
					<p>Open minded</p>
				</div>
				<div className="soft-skills-container">
					<div className="soft-skill">
						<PunctualIcon className="icon" />
					</div>
					<p>Punctual</p>
				</div>
				<div className="soft-skills-container">
					<div className="soft-skill">
						<CommunicativeIcon className="icon" />
					</div>
					<p>Communicative</p>
				</div>
				<div className="soft-skills-container">
					<div className="soft-skill">
						<TeamPlayerIcon className="icon" />
					</div>
					<p>Team player</p>
				</div>
			</div>
		</div>
	</div>
);

export default SoftSkillsOverview;
