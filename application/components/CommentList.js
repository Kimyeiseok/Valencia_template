import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import StarRating from 'react-native-star-rating';
var styles = require('../../assets/files/Styles');

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import * as firebase from 'firebase';

import avatar from '../../assets/images/avatar.png';

class CommentList extends React.Component {

	render () {
		const {comment} = this.props;
    var user = firebase.auth().currentUser;
    var photoUrl;

  if (user != null) {
  photoUrl = user.photoURL;
  }
		return (

			<ListItem avatar style={{marginBottom: 5, marginLeft: 0, borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 5}}>
              <Body style={{borderBottomWidth: 0}}>
      <StarRating
          disabled={true}
          maxStars={5}
          emptyStar={require('../../assets/images/empty-star.png')}
          fullStar={require('../../assets/images/star.png')}
          halfStar={require('../../assets/images/half-star.png')}
          rating={comment.rating}
          containerStyle={{width: 60, marginBottom: 10}}
          starSize={15}
          emptyStarColor={'#f1c40f'}
          fullStarColor={'#f1c40f'}
          />

                <Text note numberOfLines={5} style={{fontSize: 12}}>{comment.comment}</Text>
              </Body>
              <Right style={{borderBottomWidth: 0}}>
                <Text note style={{color: '#333'}}>{comment.user}</Text>
                <Text note style={{fontSize: 10}}>{comment.date}</Text>
              </Right>
            </ListItem>

		)
	}
}

export default CommentList;
