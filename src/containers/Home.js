import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import {
	Button,
	Container,
	Header,
	Footer,
	Content,
	Body,
	Title,
} from 'native-base';

class Home extends Component {
	render () {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Welcome to GreenWards</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Image source={require('../img/logo.png')} style={styles.imageStyle} />
					<Button block success style={styles.buttons}>
						<Text style={styles.buttonText}>Login</Text>
					</Button>
					<Button block success style={styles.buttons}>
						<Text style={styles.buttonText}>SignUp</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

const styles = {
	buttons: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
	},
	buttonText: {
		color: 'white',
	},
	imageStyle: {
		width: '85%',
		marginTop: 50,
		marginBottom: 30,
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
};

export default Home;
