import React from 'react';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Root } from "native-base";
import { StatusBar, LogBox } from "react-native";
import AppPreLoader from "./application/components/AppPreLoader";
import firebaseConfig from './application/utils/Firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

import GuestNavigation from './application/navigations/Guest';
import LoggedNavigation from './application/navigations/Logged';

LogBox.ignoreAllLogs();

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {

  constructor () {
    super();
    this.state = {
      isLogged: false,
      loaded: false,
      isReady: false,
    }
  }

async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/header.jpg'),
      require('./assets/images/logo.png'),
      require('./assets/images/logo_dark.png'),
      require('./assets/images/star.png'),
      require('./assets/images/avatar.png'),
      require('./assets/images/emptylist.png'),
      require('./assets/images/avatar.jpg'),
      require('./assets/images/nointernet.png'),
      require('./assets/images/contact.png'),
      require('./assets/images/address.png'),
      require('./assets/images/audience.png'),
      require('./assets/images/schedule.png'),
      require('./assets/images/phone.png'),
      require('./assets/images/website.png'),
      require('./assets/images/bookmarked.png'),
      require('./assets/images/checked.png'),
      require('./assets/images/empty-star.png'),
      require('./assets/images/half-star.png')
    ]);

    await Promise.all([...imageAssets]);
  }

  async componentDidMount () {

      await Font.loadAsync({
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      'Entypo': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Entypo.ttf'),
      'FontAwesome': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf'),
      'Ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
      'MaterialCommunityIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
      'SimpleLineIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/SimpleLineIcons.ttf'),
      'FontAwesome': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf')
    });

    await firebase.auth().onAuthStateChanged((user) => {
      if(user !== null) {
        this.setState({
          isLogged: true,
          loaded: true
        });
      } else {
        this.setState({
          isLogged: false,
          loaded: true
        });
      }
    })

  }

  render() {

        if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    const {isLogged, loaded, isReady} = this.state;

    if ( ! loaded) {
      return (
        <AppPreLoader/>
        );
    }

    if(isLogged && isReady) {
      return (
        <Root>
        <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'} />
        
        <LoggedNavigation />
        </Root>
        );
    } else {
      return (
        <Root>
        <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
        <GuestNavigation />
        </Root>
        );
    }
  }
}


