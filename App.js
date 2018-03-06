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
import LandingPage from './src/pages/landing-page';

export default class App extends Component {
  render() {
    return (
      <View>
        <LandingPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
