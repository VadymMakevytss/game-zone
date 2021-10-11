import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Header from '../shared/Header';
import About from '../screens/About';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='About GameZone' navigation={navigation} />
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff' },
  }
});

export default AboutStack;
