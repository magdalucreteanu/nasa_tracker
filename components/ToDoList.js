import React from "react";
import { View, FlatList } from "react-native";
import ToDoItemTile from "./ToDoItemTile";

export default ToDoList = (props) => {

  const deleteHandler = (id) => {
    console.log('delete ToDo with id: ' + id );
  };

  const favHandler = (id) => {
    console.log('fav ToDo with id: ' + id );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => {
          return (
            <ToDoItemTile
              text={itemData.item.title}
              id={itemData.item.id}
              isFav={itemData.item.isFav}
              onDelete={deleteHandler}
              onFav={favHandler}
            />
          );
        }}
        style={{ width: "100%" }}
        contentContainerStyle={{alignItems: 'stretch', padding: 20}}
      />
    </View>
  );
};
