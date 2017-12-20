//dummy page for the messages icon on the homescreen
import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  View,
  Header,
  Item,
  Icon,
  Input,
  Button,
  Text
} from 'native-base';
import {footer} from './../Timeline';

export default class Messages extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="mail" style={{
        color: tintColor
      }}/>)
  }

  render() {
    return (<Container>
      <Header/>
      <Content>
        <View style={{
            flex: 1,
          }}>
          <Text style={{
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
              margin: 10,
            }}>Send a message, get a message</Text>
          <Text style={{
              textAlign: 'center',
              margin: 10,
              color: '#566D7E',
            }}>Direct Messages are private conversations between you and the other people on Twitter. Share Tweets, media, and more!</Text>
        </View>
        <View style={{paddingLeft: 25}}>
          <Item rounded style={{ width: 300, backgroundColor: '#3BB9FF'}}>
            <Input placeholder='Start a conversation' placeholderTextColor= 'white'
              style={{textAlign: 'center', fontWeight: 'bold'}}/>
          </Item>
        </View>
      </Content>
      <footer />
    </Container>);
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
