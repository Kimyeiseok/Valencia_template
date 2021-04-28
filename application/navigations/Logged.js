import React from 'react';
import SideMenu from './SideMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import {Dimensions, Text} from "react-native";
var styles = require('../../assets/files/Styles');

var {height, width} = Dimensions.get('window');

import HomeScreen from '../screens/Home';
import PlacesCategoriesScreen from '../screens/PlacesCategories';
import OffersCategoriesScreen from '../screens/OffersCategories';
import PlacesByCategoryScreen from '../screens/PlacesByCategory';
import OffersByCategoryScreen from '../screens/OffersByCategory';
import PostsByCategoryScreen from '../screens/PostsByCategory';
import PlaceDetailsScreen from '../screens/PlaceDetails';
import OfferDetailsScreen from '../screens/OfferDetails';
import OrderDetailsScreen from '../screens/OrderDetails';
import PostDetailsScreen from '../screens/PostDetails';
import CategoryByTypeScreen from '../screens/CategoryByType';
import ProfileScreen from "../screens/Profile";
import NewsScreen from "../screens/News";
import LogoutScreen from "../screens/Logout";
import SettingsScreen from "../screens/Settings";
import TermsScreen from "../screens/Terms";
import AboutUsScreen from "../screens/AboutUs";
import ContactUsScreen from "../screens/ContactUs";
import PaypalScreen from "../screens/Paypal";
import StripeScreen from "../screens/Stripe";
import SearchScreen from "../screens/Search";
import CategoriesScreen from "../screens/Categories";

const leftIcon = (navigation, icon) => <Icon
  name={icon}
  style={{marginLeft: 20}}
  size={27}
  color="white"
  onPress={() => navigation.navigate('DrawerOpen')}
/>;

const navigationOptions = {
  defaultNavigationOptions: {
    headerStyle: styles.headerStyle,
    headerBackTitle: null,
    headerBackTitleVisible: false,
    headerTintColor: '#fff',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold'
    }
  }
};

const HomeNavigator = createStackNavigator(
{
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
    headerLeft: () => leftIcon(navigation, 'md-menu')
  })
  },
  PlacesCategoriesScreen: {
    screen: PlacesCategoriesScreen
  },
  OffersCategoriesScreen: {
    screen: OffersCategoriesScreen
  },
  PlacesByCategoryScreen: {
    screen: PlacesByCategoryScreen
  },
  OffersByCategoryScreen: {
    screen: OffersByCategoryScreen
  },
  PostsByCategoryScreen: {
    screen: PostsByCategoryScreen
  },
  PlaceDetailsScreen: {
    screen: PlaceDetailsScreen
  },
  OfferDetailsScreen: {
    screen: OfferDetailsScreen
  },
  OrderDetailsScreen: {
    screen: OrderDetailsScreen
  },
  PostDetailsScreen: {
    screen: PostDetailsScreen
  },
  CategoryByTypeScreen: {
    screen: CategoryByTypeScreen
  },
  ProfileScreen: {
    screen: ProfileScreen
  },
  NewsScreen: {
    screen: NewsScreen
  },
  LogoutScreen: {
    screen: LogoutScreen
  },
  SettingsScreen: {
    screen: SettingsScreen
  },
  AboutUsScreen: {
    screen: AboutUsScreen
  },
  TermsScreen: {
    screen: TermsScreen
  },
  ContactUsScreen: {
    screen: ContactUsScreen
  },
  PaypalScreen: {
    screen: PaypalScreen
  },
  StripeScreen: {
    screen: StripeScreen
  },
  SearchScreen: {
    screen: SearchScreen
  },
  CategoriesScreen: {
    screen: CategoriesScreen
  },
}, navigationOptions

);

const RootStack = createDrawerNavigator({

Home: {
    screen: HomeNavigator,
  },
}, {
  contentComponent: SideMenu,
  drawerWidth: width * .7,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export default createAppContainer(RootStack)