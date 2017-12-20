import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header, Item, Icon, Input, Button, Text} from 'native-base';
import { footer } from './../Timeline';

// Screen that shows when the search tab is clicked
export default class SearchScreen extends Component  {
  static navigationOptions = {
    //setting the tabbar icon for the screen
    tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{color: tintColor}} />
      ),
    }

     render() {
       return (
        <Container>
          <View style={{flex:1, paddingTop: 130,}}>
             <Text style={styles.container}>Click the search bar</Text>
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
