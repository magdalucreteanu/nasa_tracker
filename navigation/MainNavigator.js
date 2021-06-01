import React from 'react';
import { useColorScheme } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import ImpressumNavigator from './ImpressumNavigator';
import { getBottomTabTheme} from "../constants/Themes";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Impressum') {
            iconName = focused ? 'ios-book' : 'ios-book-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: Colors.homeIconColorActive,
          inactiveTintColor: Colors.homeIconColorInactive,
          style: getBottomTabTheme(colorScheme === "light")
        }}
      >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Impressum" component={ImpressumNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};