/* eslint-disable no-unused-vars */
import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './src/Navigation/Mainnavigation'
import store from './src/Redux/store'
import {Provider} from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
    <MainStackNavigator/>
    </Provider>
   
  );
}

