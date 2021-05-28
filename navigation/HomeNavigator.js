import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import InputScreen from '../screens/InputScreen';
import CategoryScreen from '../screens/CategoryScreen';

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
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="AddCategory" component={InputScreen} options={{headerTitle: 'Add Category'}}/>
      <HomeStack.Screen name="AddEntry" component={InputScreen} options={{headerTitle: 'Add ToDo'}}/>
      <HomeStack.Screen name="Category" component={CategoryScreen}/>
    </HomeStack.Navigator>
  );
};