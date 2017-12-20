import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Spinner,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import cardFormat from './cardFormat';
export default class TwitterCard extends Component {
  render() {
    return (<Container>
      <Header/>
      <Content>
        <Spinner color='#3BB9FF'/>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../Images/yash_raj_films.jpg')}/>
              <Body>
                <cardFormat textName="Yash Raj Films" textBody="Picture Perfect! #RaniMukerji at the #HichkiTrailer launch event." twitterID="@yrf" lastSeenTime="4h"/>
                <Icon style={{ color: '#B6B6B4' }} name='arrow-dropdown'/>
              </Body>
            </Left>
          </CardItem>
          <Right>
            <CardItem cardBody="cardBody">
              <Image source={require('../Images/rani_mukherjee_hichki.jpg')}
                style={{
                  height: 200,
                  width: 400,
                  paddingLeft: 45
                }}/>
            </CardItem>
          </Right>
          <CardItem style={{
              justifyContent: 'flex-end'
            }}>

            <Button small iconLeft transparent>
              <Icon style={{
                  color: '#848482'
                }} name="text"/>
              <Text style={styles.buttonTextStyle}>50</Text>
            </Button>
            <Button small iconLeft transparent>
              <Icon style={{
                  color: '#848482'
                }} name="git-compare"/>
              <Text style={styles.buttonTextStyle}>5</Text>
            </Button>
            <Button small iconLeft transparent>
              <Icon style={{
                  color: '#848482'
                }} name="heart"/>
              <Text style={styles.buttonTextStyle}>31</Text>
            </Button>
            <Button small iconLeft transparent>
              <Icon style={{
                  color: '#848482'
                }} name="mail"/>
              <Text style={styles.buttonTextStyle}></Text>
            </Button>

          </CardItem>
        </Card>
      </Content>
    </Container>);
  }
}
const styles = {
  buttonTextStyle: {
    paddingLeft: 5,
    color: '#3BB9FF',
  }
};
