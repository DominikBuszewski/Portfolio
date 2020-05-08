import React from "react";
import "./contact.styles.scss";
// import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../..//assets/icons/github.svg";
import { ReactComponent as EmailMessageIcon } from "../../assets/icons/email.svg";

const ContactPage = () => (
	<div className="conntact-page" id="contact">
		<h1>CONTACT</h1>

		<div className="social-media">
			<p>Email: buszewski91@gmail.com</p>

			<div className="icon-container">
				<a
					href="https://pl.linkedin.com/in/dominik-buszewski-4697171a4"
					target="_blank"
				>
					<LinkedinIcon className="contact-icon" />
					<p>Linkedin</p>
				</a>
			</div>
			<div className="icon-container">
				<a href="https://github.com/DominikBuszewski" target="_blank">
					<GithubIcon className="contact-icon" />
					<p>Github</p>
				</a>
			</div>
		</div>

		<footer className="footer">
			<p>© Dominik Buszewski, 2020.</p>
		</footer>
	</div>
);

export default ContactPage;
