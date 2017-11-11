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
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/containers/Home'
import LoginScreen from './src/containers/LoginScreen';


export default class App extends Component<{}> {
  render() {
    return (
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
          </Scene>
        </Router>
    );
  }
}

