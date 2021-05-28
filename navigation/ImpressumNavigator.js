import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ImpressumScreen from '../screens/ImpressumScreen';

const ImpressumStack = createStackNavigator();

export default ImpressumNavigator = () => {
  return (
    <ImpressumStack.Navigator initialRouteName="Impressum" screenOptions={{
      headerStyle: {height: 160},
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'tomato'
      }
    }}>
      <ImpressumStack.Screen name="Impressum" component={ImpressumScreen}/>
    </ImpressumStack.Navigator>
  );
};