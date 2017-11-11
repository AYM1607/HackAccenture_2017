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
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './src/containers/Home'
import LoginScreen from './src/containers/LoginScreen';
import SignUpScreen from './src/containers/SignUpScreen';
import Mapa from './src/containers/Mapa';
import QRScanner from './src/containers/QRScanner';
import Profile from './src/containers/Profile';
import Rewards from './src/containers/Rewards';
import Reducers from './src/reducers';


export default class App extends Component<{}> {

    componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyCiotlbArnE8Zp60mYK4ANO-gLCo97xvZM",
    authDomain: "greenwards-9e80b.firebaseapp.com",
    databaseURL: "https://greenwards-9e80b.firebaseio.com",
    projectId: "greenwards-9e80b",
    storageBucket: "greenwards-9e80b.appspot.com",
    messagingSenderId: "319564739638"
  });
  }

  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene 
              key='home'
              component={Home}
              initial
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
              key="profile"
              component={Profile}
            />

            <Scene
              key="scanner"
              component={QRScanner}
            />

            <Scene
              key="rewards"
              component={Rewards}
            />

          </Scene>
        </Router>
      </Provider>
    );
  }
}

