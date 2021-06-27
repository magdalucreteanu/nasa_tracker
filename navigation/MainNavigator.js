import React, {useContext}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import ImpressumNavigator from './ImpressumNavigator';
import { getBottomTabTheme} from "../constants/Themes";
import Colors from "../constants/Colors";
import {ToggleContext} from "../data/ToggleContext";

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  const [toggle, setToggle] = useContext(ToggleContext);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Imprint') {
            iconName = focused ? 'ios-book' : 'ios-book-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: Colors.homeIconColorActive,
          inactiveTintColor: Colors.homeIconColorInactive,
          style: getBottomTabTheme(toggle.darkTheme)
        }}
      >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Imprint" component={ImpressumNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};