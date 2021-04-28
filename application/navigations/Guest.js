import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import ForgetPassScreen from "../screens/ForgetPass";
import TermsGuestScreen from "../screens/TermsGuest";

const RootStack = createStackNavigator(
	{
		Start: {
			screen: StartScreen
		},

		Login: {
			screen: LoginScreen
		},
		Register: {
			screen: RegisterScreen
		},
		ForgetPass: {
			screen: ForgetPassScreen
		},
		Terms: {
			screen: TermsGuestScreen
		},
	},
	{
		initialRouteName: 'Start',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#ffffff',
				borderWidth: 0,
				borderBottomWidth: 0
				},
			headerTintColor: '#000',
			headerTitleStyle: {
				textAlign: 'center',
				alignSelf: 'center',
				fontSize: 16,
				color: '#000',
				fontWeight: 'bold',
			}
		}

	}
)

export default createAppContainer(RootStack)