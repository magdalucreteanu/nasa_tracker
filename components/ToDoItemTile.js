import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default ToDoItemTile = (props) => {
  const favIconName = props.isFav ? "ios-star" : "ios-star-outline";

  return (
    <View style={styles.itemContainer}>
      <Button
        onPress={() => {props.onFav(props.id)}}
        type="clear"
        icon={
          <Ionicons name={favIconName} size={24} color="rgb(0, 122, 255)" />
        }
      />
      <Text style={styles.title}>{props.text}</Text>
      <Button
        onPress={() => {props.onDelete(props.id)}}
        type="clear"
        icon={
          <Ionicons
            name="ios-close-circle-outline"
            size={24}
            color="rgb(0, 122, 255)"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginVertical: 15,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#333",
  },
});
