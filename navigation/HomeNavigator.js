import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ApodScreen from '../screens/ApodScreen';
import MarsRoversScreen from '../screens/MarsRoversScreen';
import TwitterFeedScreen from '../screens/TwitterFeedScreen';

const HomeStack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {height: 160},
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'tomato'
      }
    }}>
      <HomeStack.Screen name="NASA Tracker" component={HomeScreen}/>
      <HomeStack.Screen name="Settings" component={SettingsScreen} options={{headerTitle: 'Settings'}}/>
      <HomeStack.Screen name="Apod" component={ApodScreen}/>
      <HomeStack.Screen name="MarsRovers" component={MarsRoversScreen}/>
      <HomeStack.Screen name="TwitterFeed" component={TwitterFeedScreen}/>
    </HomeStack.Navigator>
  );
};