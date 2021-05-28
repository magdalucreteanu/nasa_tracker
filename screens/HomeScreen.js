import React, { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import GridTile from "../components/GridTile";
import { CATEGORIES } from "../data/dummy-data";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color="rgb(0, 122, 255)" />}
          onPress={() => navigation.navigate("Settings", {title: "Settings", category: ''})}
        />
      ),
    });
  }, [navigation]);

  const categories = CATEGORIES;

  const clickHandler = (id) => {
    navigation.navigate("Category", { itemId: id });
  };

/*
  return (
    <FlatList
      data={categories}
      renderItem={(itemData) => {
        return (
          <GridTile
            text={itemData.item.title}
            onClick={clickHandler}
            id={itemData.item.id}
          />
        );
      }}
      numColumns={2}
    />
  );
  */

  return (
    <FlatList
      data={categories}
      renderItem={(itemData) => {
        return (
          <GridTile
            text={itemData.item.title}
            onClick={clickHandler}
            id={itemData.item.id}
          />
        );
      }}
      numColumns={1}
    />
  );

};
