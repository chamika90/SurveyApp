import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Res from '../resources';
import {NAVIGATION_SCREENS} from '../config/constants';

import Home from '../screens/Home/Home';
import SurveyInfo from '../screens/SurveyInfo/SurveyInfo';
const {Colors} = Res;

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    initialRouteName={NAVIGATION_SCREENS.HOME}
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.summer_sky,
      },
      headerTitleAlign: 'center',
    }}>
    <HomeStack.Screen
      name={NAVIGATION_SCREENS.HOME}
      component={Home}
      options={{title: 'Home'}}
    />
    <HomeStack.Screen
      name={NAVIGATION_SCREENS.SURVEY_INFO}
      component={SurveyInfo}
      options={{title: 'Survey Info'}}
    />
  </HomeStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
