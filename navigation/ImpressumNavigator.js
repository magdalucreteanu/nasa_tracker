import React from 'react';
import { useColorScheme } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import ImpressumScreen from '../screens/ImpressumScreen';
import {getHeaderTextTheme, getHeaderTheme} from "../constants/Themes";
import Colors from "../constants/Colors";

const ImpressumStack = createStackNavigator();

export default ImpressumNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <ImpressumStack.Navigator initialRouteName="Impressum" screenOptions={{
      headerStyle: getHeaderTheme(colorScheme === "light"),
      headerTitleStyle: getHeaderTextTheme(colorScheme === "light")
    }}>
      <ImpressumStack.Screen name="Impressum" component={ImpressumScreen}/>
    </ImpressumStack.Navigator>
  );
};