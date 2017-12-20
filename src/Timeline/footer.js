import React, {Component} from 'react';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Text,
  Right,
  Icon
} from 'native-base';
export default class footer extends Component<{}> {
  render() {
    return (<Container>
      <Footer style={{
          backgroundColor: 'white'
        }}>
        <FooterTab style={{
            backgroundColor: 'white'
          }}>
          <Button>
            <Text uppercase={false} style={{
                fontSize: 16,
                color: '#3BB9FF',
                fontWeight: 'bold'
              }}>All</Text>
          </Button>
          <Button>
            <Text uppercase={false} style={{
                paddingLeft: 5,
                fontSize: 16,
                fontWeight: 'bold'
              }}>Mentions</Text>
          </Button>

        </FooterTab>
        <Right>
          <Icon style={{
              marginRight: 10,
              color: '#3BB9FF'
            }} name='settings'></Icon>
        </Right>
      </Footer>
    </Container>);
  }
}
