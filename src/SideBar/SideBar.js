import React from 'react';
import {AppRegistry, Image, StatusBar, Settings} from 'react-native';
import {
  Header,
  Footer,
  FooterTab,
  Left,
  Right,
  Card,
  CardItem,
  Text,
  Body,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  View,
  Icon
} from 'native-base';

// route name and icon as needs to be shown on the side bar
const routes = [
  {
    name: "Profile",
    icon: 'person'
  }, {
    name: "Lists",
    icon: 'list-box'
  }, {
    name: "Moments",
    icon: 'flash'
  }, {
    name: "Highlights",
    icon: 'albums'
  }
];
let userdetails = '';

export default class SideBar extends React.Component {

  constructor() {
    super();

    // hardcoding userdetails info as json
    userdetails = {
      username: 'Madhurima Kumar',
      userid: '@1nk_kumar6',
      following: 300,
      followers: 580
    };
    console.log(userdetails + 'user');

  }

  render() {

    // destructuring user info from prop
    const {username, userid, following, followers} = userdetails;
    console.log(username);
    return (<Container>
      <Content>
        <Card>
          <CardItem>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>

              <Thumbnail source={require('./../Images/dp.jpg')}/>
              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end'
                }}>
                <Left>
                  <Text style={{
                      includeFontPadding: false,
                      fontSize: 17,
                      fontWeight: 'bold'
                    }}>{username}</Text>

                </Left>
                <Right>
                  <Icon style={{
                      color: '#3BB9FF'
                    }} name='arrow-dropdown'/>
                </Right>
              </View>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end'
                }}>
                <Left>
                  <Text style={{
                      fontSize: 16,
                      color: '#848482'
                    }}>{userid}</Text>
                </Left>
              </View>
              <Body/>
              <View style={{
                  flex: 1,
                  flexDirection: 'row'
                }}>
                <Text>{following}
                </Text>
                <Text style={{
                    color: '#848482'
                  }}>Following</Text>
                <Text></Text>
                <Text>{followers}
                </Text>
                <Text style={{
                    color: '#848482'
                  }}>Followers</Text>
              </View>

            </View>
          </CardItem>
          {/* //TODO: write same code using card List and destructuring via routes
        //Check whether or not it is possible through cards
        // provided navigation on clicking those options are also rendered
        //Also try fixing separating lines between the list components
        // and fit the icons(size) well
        </Card>
        <List dataArray={routes} renderRow={data => {
          return <Card>
          <CardItem style={{
            elevation: 4 }} >
              <CardItem>
                <Icon style={{fontSize: 30, color: '#848482'}} name={data.icon} />
                <Body>
                  <Text style={{fontWeight: 'normal'}}>{data.name}</Text>
                </Body>
              </CardItem>
              <Right/>
           </CardItem>
        </Card> */
          }
          <CardItem style={{
              elevation: 4
            }}>

            <List dataArray={routes} renderRow={data => {
                return (<ListItem button transparent
                   onPress={() => this.props.navigation.navigate(data.name)} icon="icon">
                  <Left style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start'
                    }}>
                    <Icon style={{
                        fontSize: 26,
                        color: '#848482'
                      }} name={data.icon}/>
                    <Text style={{
                        fontWeight: 'normal'
                      }}>
                      {data.name}</Text>
                  </Left>
                  <Right/>
                </ListItem>);
              }}/>

          </CardItem>
          <Body/>
          <CardItem >
            <Text style={{
                textAlignVertical: 'center'
              }}>Settings and Privacy</Text><Body/>
          </CardItem>
          <CardItem>
            <Text>Help Center</Text><Body/>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <FooterTab style={{
            backgroundColor: 'white'
          }}>
          <Left>
            <Icon style={{
                marginLeft: 10,
                color: '#3BB9FF'
              }} name='moon'></Icon>
          </Left>
          <Right>
            <Icon style={{
                marginRight: 10,
                color: '#3BB9FF'
              }} name='qr-scanner'></Icon>
          </Right>
        </FooterTab>
      </Footer>
    </Container>);
        }
      }
