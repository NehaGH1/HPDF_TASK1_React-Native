import React from 'react';
import { StyleSheet, Image } from 'react-native';
import getTheme from './../../native-base-theme/variables/material';
import { footer, header } from './../Timeline'
import { Container, Thumbnail, Icon, Fab } from 'native-base';
import Feed from './Timeline.js';
import HomeScreenTab from './index'

//Main initial screen containing all tabs and icons and set to default on the timeline screen
export default class HomeScreen extends React.Component {
  static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
         <Icon name="home" style={{color: tintColor}} />
    ),
  }

  constructor() {
    super();
    //setting state for FAB to check if it is clicked
    this.state = {
      active: true,
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <header/>
        <Fab active={this.state.active}
          style={{ backgroundColor: '#3BB9FF', marginBottom: 30, }}
          position="bottomRight"
          onPress={() => this.setState({ active:!this.state.active })}>
            <Thumbnail source={require('./twitter_icon.png')} large/>
        </Fab>
        <footer />
      </Container>
    );
  }
}
