import React from "react";
import "./homepage.styles.scss";
import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

const HomePage = () => (
  <div className="homepage">
    <div className="hero">
      <h1>Dominik Buszewski</h1>
      <p>Front-end developer.</p>
    </div>
    <div className="buttons">
      <CustomButton name={"My Projects"} />

      <CustomButton name={"Contact me"} />
    </div>
  </div>
);

export default HomePage;
