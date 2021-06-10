import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ApodScreen from '../screens/ApodScreen';
import MarsRoversScreen from '../screens/MarsRoversScreen';
import RoverDisplayScreen from '../screens/RoverDisplayScreen';
import TwitterFeedScreen from '../screens/TwitterFeedScreen';
import {getHeaderTextTheme, getHeaderTheme} from "../constants/Themes";
import Colors from "../constants/Colors";
import useDarkMode from 'use-dark-mode';
import {ToggleContext} from "../data/ToggleContext";

const HomeStack = createStackNavigator();

export default HomeNavigator = () => {
  const [toggle, setToggle] = useContext(ToggleContext);
  const darkMode = useDarkMode(true);

  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: getHeaderTheme(toggle.darkTheme),
      headerTitleStyle: getHeaderTextTheme(toggle.darkTheme)
    }}>
      <HomeStack.Screen name="NASA Tracker" component={HomeScreen}/>
      <HomeStack.Screen name="Settings" component={SettingsScreen} options={{headerTitle: 'Settings'}}/>
      <HomeStack.Screen name="Apod" component={ApodScreen}/>
      <HomeStack.Screen name="MarsRovers" component={MarsRoversScreen}/>
      <HomeStack.Screen name="RoverDisplay" component={RoverDisplayScreen}/>
      <HomeStack.Screen name="TwitterFeed" component={TwitterFeedScreen}/>
    </HomeStack.Navigator>
  );
};