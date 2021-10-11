 import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Header from '../shared/Header';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details'
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#fff'}
  }
})

export default HomeStack
