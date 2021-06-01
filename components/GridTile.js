import React from "react";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import {getGridTileTheme, getGridTileTextTheme} from "../constants/Themes";

export default GridTile = props => {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity
      style={getGridTileTheme(colorScheme === "light")}
      onPress={() => props.onClick(props.id)}
    >
      <Text style={getGridTileTextTheme(colorScheme === "light")}>{props.text}</Text>
    </TouchableOpacity>
  );
};