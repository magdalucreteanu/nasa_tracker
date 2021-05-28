import React from 'react';
import { View, Text } from "react-native";
import ToDoList from '../components/ToDoList';
import {TODOITEMS} from '../data/dummy-data';

export default ImpressumScreen = ({ route, navigation}) => {
  const favToDos = TODOITEMS.filter(item => item.isFav);

  return (
    <View style={{ flex: 1, padding: 20 }}>
        <Text>Entwickler:</Text>
        <Text>Magdalena Lucreteanu</Text>
        <Text>Kirsten Grahl</Text>
    </View>
  );
};