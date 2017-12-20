import React, {Component} from 'react';
import {TouchableWithoutFeedback, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import {  Container,  Thumbnail,  Header,  Title,  Item,  Input,  Left,  Icon,  Right,  Button,
  Body,  Content,  Fab,  Tab,  Tabs,  TabHeading, Text } from 'native-base';

const header = (props) => {
  //destructuring so that this.props.navigation is not required for calling navigate
  const {navigation, tabKey} = props;
  console.log(navigation);
  let body = null;
  //when the search bar is selected
  if (tabKey == 'Search') {
    body =//if any other tab is selected, display tab name
    <Body>
      <Item rounded="rounded" style={{
          width: 200,
          backgroundColor: '#E5E4E2'
        }}>
        {/* on typing something on the search bar, navigating to another folder */}
        <Input placeholder="Search Twitter"
          onChangeText={(text) => navigation.navigate('SearchBox')}/>
        <Icon name="person-add"/>
      </Item>
    </Body>;
  } else {
    body = <Body>
      <Title style={{
          color: 'black',
          alignContent: 'flex-start'
        }}>{tabKey}</Title>
    </Body>
  }

  return (
  // if no tabs exist, then no text to be displayed
  <Header hasTabs="hasTabs" style={{
      backgroundColor: 'white'
    }}>
    <Left>
      <Button transparent="transparent" onPress={() => navigation.navigate("DrawerOpen")}>
        {/* <Thumbnail source={require('../Images/dp.jpg')} small/> */}
      </Button>
    </Left>
    {body}
    <Right/>
  </Header>);
};
export default header;
