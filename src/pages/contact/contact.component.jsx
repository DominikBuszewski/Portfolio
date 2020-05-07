import React from "react";
import "./contact.styles.scss";
// import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../..//assets/icons/github.svg";
import { Link } from "react-router-dom";

const ContactPage = () => (
	<div className="conntact-page" id="contact">
		<h1>CONTACT</h1>
		<h3>Write to my on my email</h3>
		<p>buszewski91@gmail.com</p>
		<h3>or find me on my social media</h3>
		<div className="social-media">
			<div className="icon-container">
				<a
					href="https://pl.linkedin.com/in/dominik-buszewski-4697171a4"
					target="_blank"
				>
					<LinkedinIcon className="contact-icon" />
				</a>
			</div>
			<div className="icon-container">
				<a href="https://github.com/DominikBuszewski" target="_blank">
					<GithubIcon className="contact-icon" />
				</a>
			</div>
		</div>
		<footer className="footer">
			<p>© Dominik Buszewski, 2020.</p>
		</footer>
	</div>
);

export default ContactPage;
