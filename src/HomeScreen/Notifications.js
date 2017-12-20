//dummy page for the notifications icon on the homescreen
import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, View, Header, Item, Icon, Input, Button, Text} from 'native-base';
import { footer } from './../Timeline';

export default class Notifications extends Component  {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
      <Icon ios="ios-notifications" android="md-notifications"
         style={{color: tintColor}} />
    ),
  }

  render() {
    return (
      <Container>
        <View style={{flex:1, paddingTop: 130,}}>
           <Text style={styles.container}>No new notifications.</Text>
           <Text style={styles.container}>Check again later.</Text>
        </View>
        <footer />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  container: {
     fontSize: 26,
     textAlign: 'center',
     fontWeight: 'bold',
     margin: 10,
     color: '#566D7E',
  },
});
