import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import { CATEGORIES, TODOITEMS} from '../data/dummy-data';
import ToDoList from '../components/ToDoList'
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default CategoryScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const selectedCategory = CATEGORIES.find(cat => cat.id === itemId);
  const displayedToDoItems = TODOITEMS.filter(item => item.categoryId === itemId);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-add" size={32} color="rgb(0, 122, 255)" />}
          onPress={() => navigation.navigate("AddEntry", {title: "ToDo", category: selectedCategory.title})}
        />
      ),
    });
  }, [navigation]);

  return <ToDoList listData={displayedToDoItems}/>;
};