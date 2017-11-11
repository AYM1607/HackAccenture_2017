import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, 
         Form, 
         Item, 
         Input, 
         Label, 
         Button,
         Spinner, 
        } from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    if (this.props.login) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onSuccess.bind(this), this.onLoginFailure.bind(this));
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onSuccess.bind(this), this.onSignupFailure.bind(this));
    }
  }

  onSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
    Actions.pop();
  }

  onLoginFailure() {
    this.setState({
      email: '',
      password: '',
      error: 'Intentalo otra vez',
      loading: false,
    });
  }

  onSignupFailure() {
    this.setState({
      email: '',
      password: '',
      error: 'Ya tienes cuenta?',
      loading: false,
    });
  }

  loginButton() {
    if (this.state.loading) {
      return (
        <Spinner color='rgb(0,122,255)' />
      );
    }

    return (
      <Button
            success 
            block 
            style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}
            onPress={this.onButtonPress.bind(this)}
      >
        <Text style={{ color: 'white' }}>{ this.props.buttonLabel }</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false} 
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              autoCorrect={false} 
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
          </Item>
        </Form>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        {this.loginButton()}
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

LoginForm.defaultProps = { buttonLabel: '', login: false };
export default LoginForm;
