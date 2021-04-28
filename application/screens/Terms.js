import React, {Component} from 'react';
import * as firebase from 'firebase';
import AppPreLoader from '../components/AppPreLoader'; 
import { NavigationActions, StackNavigator } from 'react-navigation';
import{TouchableOpacity, Dimensions, View, Image, FlatList, ScrollView} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Text} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import HTML from 'react-native-render-html';
import Strings from '../utils/Strings';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Terms extends Component {
static navigationOptions = {
  title: `${Strings.ST82}`,
};


constructor(props) {

    super(props);

    this.state = {
      isLoading: true
    }

  }

  componentDidMount() {
    
       return fetch(ConfigApp.URL+'json/data_strings.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson[0]
           }, function() {
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }


  render () {


    const item = this.state.dataSource;

        if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    return (

<Container style={styles.background_general}>
<ScrollView showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>

<View style={{padding: 20}}>

<HTML html={item.st_termsofservice} />    
<HTML html={item.st_privacypolicy} />      

</View>
</ScrollView>

</Container>

    )
  }

}