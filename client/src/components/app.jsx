import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './home';
import ProjectsPage from './projects';
import ResumePage from './resume';
import AboutPage from './about';
import ContactPage from './contact';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Link className="btn btn-dark ml-2" to="/">
						Home
					</Link>
					<Link className="btn btn-dark ml-2" to="/projects">
						Projects
					</Link>
					<Link className="btn btn-dark ml-2" to="/resume">
						Resume
					</Link>
					<Link className="btn btn-dark ml-2" to="/about">
						About Me
					</Link>
					<Link className="btn btn-dark ml-2" to="/contact">
						Contact Me
					</Link>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/projects" component={ProjectsPage} />
						<Route exact path="/resume" component={ResumePage} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/contact" component={ContactPage} />
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

export default Navigation;
