/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform,StyleSheet,View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';

import Dashboard from './src/pages/dashboard';
import LoginPage from './src/pages/login-page';
import Router from './router';

export default class App extends Component {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDMdEqdezKS3sPK6FDTjcxR2Hc1qKbN2as",
      authDomain: "uniquem-cd162.firebaseapp.com",
      databaseURL: "https://uniquem-cd162.firebaseio.com",
      projectId: "uniquem-cd162",
      storageBucket: "uniquem-cd162.appspot.com",
      messagingSenderId: "906553688608"
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        {/* <View style={{backgroundColor:'#C3ECFA'}}> */}
          <Router/>
          {/* <LoginPage/> */}
          {/* <LandingPage/> */}
        {/* </View> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  
});
