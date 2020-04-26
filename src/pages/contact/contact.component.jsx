import React from "react";
import "./contact.styles.scss";
// import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../..//assets/icons/github.svg";

const ContactPage = () => (
  <div className="conntact-page">
    <h1>Contact</h1>
    <h3>Write to my on my email</h3>
    <p>buszewski91@gmail.com</p>
    <h3>Or through other sources</h3>
    <div className="social-media">
      <LinkedinIcon className="contact-icon" />
      <GithubIcon className="contact-icon" />
    </div>
  </div>
);

export default ContactPage;
