import React, { Component } from 'react';
//import { View , Text } from 'react-native';
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
import { Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';


class LoginScreen extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              onPress={Actions.pop}
              transparent
            >
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
