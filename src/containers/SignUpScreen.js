import React, { Component } from 'react';
//import { View , Text } from 'react-native';
import firebase from 'firebase';
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
import { Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';

class SignUpScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button 
              transparent
              onPress={() => Actions.pop()}
            >
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Sign up</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <LoginForm
            buttonLabel='Sign Up!'
          />
        </Content>
      </Container>
    );
  }
}

export default SignUpScreen;
