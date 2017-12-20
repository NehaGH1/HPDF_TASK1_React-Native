import React, { Component } from 'react';
import { AppRegistry, Alert, View, TextInput } from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Header,
  Content,
  Body,
  Text,
  Right,
  Left,
  Icon,
  Item,
  Input,
  Title,
  Button,
  H1
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { footer } from './../Timeline';

// a dummy page displaying cards where twitter posts must be displayed
export default class SearchBox extends Component<{}> {
  static navigationOptions = {
    title: 'SearchScreen',
    headerStyle: {
      backgroundColor: '#E5E4E2'
    },
    headerTitleStyle: {
      color: '#3BB9FF'
    }
  }

  render() {
    return (<Container>
      <Header style={{
          backgroundColor: 'white'
        }}>
        <Left>
          {/* goBack is predefined */}
          <Button transparent
            onPress={() => this.props.navigation.goBack()}
            style={{
              backgroundColor: 'white'
            }}>
            <Icon name="arrow-back" style={{
                color: '#3BB9FF'
              }}/>
          </Button>
        </Left>
        <Body>
          <Item style={{
              width: 200
            }}>
            <Input placeholder="Search Twitter"/>
          </Item>
        </Body>
        <Right/>
      </Header>
      <Content padder="padder"></Content>
      <footer/>
      {/* A ScrollView component that handles keyboard appearance and automatically scrolls to focussed TextInput. */}
      <KeyboardAwareScrollView>
        <View>
          <TextInput />
        </View>
      </KeyboardAwareScrollView>
    </Container>);
  }
}
