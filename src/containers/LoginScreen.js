import React, { Component } from 'react';
//import { View , Text } from 'react-native';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Container, 
         Header, 
         Title, 
         Body, 
         Content, 
         Button, 
         Left, 
         Right, 
         Icon, 
       } from 'native-base';
import LoginForm from './LoginForm';


class LoginScreen extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyC90PabaVp594fe2P_1c89lPCxHle18fJk',
    authDomain: 'mi-circuito-tec.firebaseapp.com',
    databaseURL: 'https://mi-circuito-tec.firebaseio.com',
    projectId: 'mi-circuito-tec',
    storageBucket: 'mi-circuito-tec.appspot.com',
    messagingSenderId: '253965715675'
  });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <LoginForm
            login
            buttonLabel='Login!'
          />
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
