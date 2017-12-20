import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View, Text, Icon, Thumbnail} from 'native-base';

//Customizing the format of the twitter cards
const cardFormat = (props) => {
  cardFormat.propTypes = {
    textName: PropTypes.string,
    textBody: PropTypes.string,
    twitterID: PropTypes.string,
    lastSeenTime: PropTypes.string
  };
  const {textName, textBody, twitterID, lastSeenTime} = props;

  return (<View>
    <View style={{
        flexDirection: 'row'
      }}>
      <Text style={styles.textName}>
        {textName}
      </Text>
      <Thumbnail source={require('../Images/blue_check.png')}/>
      <Text note>
        {twitterID}
      </Text>
      <Text>
        .
      </Text>
      <Text note>
        {lastSeenTime}
      </Text>
    </View>
    <Text style={styles.baseText}>
      {textBody}
    </Text>
  </View>);
};

const styles = {
  baseText: {
    fontFamily: 'Cochin'
  },
  textName: {
    fontSize: 15,
    fontWeight: 'bold'
  }
};

export default cardFormat;
