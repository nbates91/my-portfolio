import React, { Component } from 'react';

class ProjectsPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>My Projects</h1>
				<br />
				<h2>Craft Crawls</h2>
				<br />
				<h2>Chirper</h2>
				<br />
				<a href="https://github.com/nbates91">More examples can be found here on my Github</a>
			</div>
		);
	}
}

export default ProjectsPage;
