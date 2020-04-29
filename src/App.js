import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/about/about.component";
import Projects from "./pages/projects/project.component";
import ContactPage from "./pages/contact/contact.component";
import Menu from "./components/menu/menu.component";

class App extends React.Component {
	state = {
		menuOpen: false,
	};

	menuToggleClickHandler = () => {
		this.setState((prevState) => {
			return { menuOpen: !prevState.menuOpen };
		});
	};

	render() {
		return (
			<div className="App">
				<Header showMenuHandler={this.menuToggleClickHandler} />
				<Menu show={this.state.menuOpen} />
				<HomePage />
				<About id="about" />
				<Projects />
				<ContactPage />
			</div>
		);
	}
}

export default App;
