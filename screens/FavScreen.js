import React from 'react';
import ToDoList from '../components/ToDoList';
import {TODOITEMS} from '../data/dummy-data';

export default FavScreen = ({ route, navigation}) => {
  const favToDos = TODOITEMS.filter(item => item.isFav);

  return <ToDoList listData={favToDos} navigation={navigation}/>;
};