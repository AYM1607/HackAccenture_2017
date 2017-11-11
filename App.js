/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/containers/Home'
import LoginScreen from './src/containers/LoginScreen';
import SignUpScreen from './src/containers/SignUpScreen';
import Mapa from './src/containers/Mapa';
import QRScanner from './src/containers/QRScanner';


export default class App extends Component<{}> {

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
        <Router>
          <Scene key="root" hideNavBar>
            <Scene 
              key='home'
              component={Home}
            />

            <Scene 
              key="login"
              component={LoginScreen}
            />

            <Scene 
              key="signup"
              component={SignUpScreen}
            />

            <Scene
              key="mapa"
              component={Mapa}
            />

            <Scene
              key="scanner"
              component={QRScanner}
              initial
            />

          </Scene>
        </Router>
    );
  }
}

