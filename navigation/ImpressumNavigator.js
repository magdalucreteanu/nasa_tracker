import React, {useContext}  from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ImpressumScreen from '../screens/ImpressumScreen';
import {getHeaderTextTheme, getHeaderTheme} from "../constants/Themes";
import Colors from "../constants/Colors";
import {ToggleContext} from "../data/ToggleContext";

const ImpressumStack = createStackNavigator();

export default ImpressumNavigator = () => {
  const [toggle, setToggle] = useContext(ToggleContext);
  return (
    <ImpressumStack.Navigator initialRouteName="Impressum" screenOptions={{
      headerStyle: getHeaderTheme(toggle.darkTheme),
      headerTitleStyle: getHeaderTextTheme(toggle.darkTheme)
    }}>
      <ImpressumStack.Screen name="Impressum" component={ImpressumScreen}/>
    </ImpressumStack.Navigator>
  );
};