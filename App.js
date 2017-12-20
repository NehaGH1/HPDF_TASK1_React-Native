import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import HomeScreen from './src/HomeScreen/index.js';

export default class App extends Component {

  render() {

    return <HomeScreen />;
  }
}
