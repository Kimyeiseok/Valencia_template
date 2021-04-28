import React, {Component} from 'react';
import * as firebase from 'firebase';
import {View} from "react-native";
import StarRating from 'react-native-star-rating';
var styles = require('../../assets/files/Styles');


const starImage = require('../../assets/images/star.png')

class PlaceRating extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			rating: 0
		};
		const {placeId} = props;
		this.commentsRef = firebase.database().ref(`placeComments/${placeId}`);
	}

	componentDidMount () {
		this.commentsRef.on("child_added", snapshot => {
			this.commentsRef.on("value", snap => {
				let comments = [];
				snap.forEach(row => {
					comments.push(parseInt(row.val().rating));
				});

				this.setState({
					rating: comments.reduce((previous, current) => previous + current, 0) / comments.length
				});

				/*this.refs.rating.setCurrentRating(
					comments.reduce((previous, current) => previous + current, 0) / comments.length
				);*/
			})
		});
	}

	render () {
		const {rating} = this.state;
		return (
<View>
      <StarRating
		ref="rating"
          disabled={true}
          maxStars={5}
          emptyStar={require('../../assets/images/empty-star.png')}
          fullStar={require('../../assets/images/star.png')}
          halfStar={require('../../assets/images/half-star.png')}
          rating={rating}
          containerStyle={{width: 60, marginBottom: 5}}
          starSize={12}
          emptyStarColor={'#f1c40f'}
          fullStarColor={'#f1c40f'}
          />
</View>
		)
	}
}

export default PlaceRating;
