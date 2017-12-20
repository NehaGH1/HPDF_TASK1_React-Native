import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title
} from 'native-base';

const MenuBar = () => {

  const {navigate} = this.props.navigation;
  return (<Header hasTabs='true'>
    <Left>

      <Button transparent="transparent" onPress={() => navigate("DrawerToggle")}>
        <Icon name="menu"/>
      </Button>
    </Left>
    <Body>
      <Title>Home</Title>
    </Body>

  </Header>);

}

export {
  MenuBar
};
