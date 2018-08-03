import React, { Component, ImageBackground } from 'react';
import homeBackground from '../assets/homeBackground.jpg';

class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<ImageBackground source={homeBackground} style={{ width: '100%', height: '100%' }}>
					<Text>Nick Bates</Text>
				</ImageBackground>
			</React.Fragment>
		);
	}
}

export default HomePage;
