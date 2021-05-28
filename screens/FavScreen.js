import React from 'react';
import { View, Text } from "react-native";
import ToDoList from '../components/ToDoList';
import {TODOITEMS} from '../data/dummy-data';

export default FavScreen = ({ route, navigation}) => {
  const favToDos = TODOITEMS.filter(item => item.isFav);

  return (
    <View style={{ flex: 1 }}>
        <Text>Entwickler:</Text>
        <Text>Magdalena Lucreteanu</Text>
        <Text>Kirsten Grahl</Text>
    </View>
  );
};