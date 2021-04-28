import React from 'react';
import {View, Slider, Text} from "react-native";
import StarRating from 'react-native-star-rating';
var styles = require('../../assets/files/Styles');

export default sliderTemplate = (locals) => {
	const help = (
		<Text style={{marginBottom: 8}}>{locals.help}</Text>
	);

	return (

		<View>
			<StarRating
			ref="input"
        	disabled={false}
        	maxStars={5}
          emptyStar={require('../../assets/images/empty-star.png')}
          fullStar={require('../../assets/images/star.png')}
          halfStar={require('../../assets/images/half-star.png')}
        	rating={parseInt(locals.value)}
        	containerStyle={{width: 160}}
        	starSize={30}
        	selectedStar={value => locals.onChange(value)}
            emptyStarColor={'#f1c40f'}
            fullStarColor={'#f1c40f'}
      		/>
			{help}
		</View>
	)
}