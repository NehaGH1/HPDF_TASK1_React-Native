import React from 'react';
import {  Content } from 'native-base';
import  { TwitterCard }  from './../Timeline';

//contains list of twitter cards..
export default class Feed from React.Component<{}> {
  render() {
    return (
      <Content>
        <TwitterCard />
        <TwitterCard />
        <TwitterCard/>
      </Content>
    );
  }
}
