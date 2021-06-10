import React, {useContext} from "react";
import { Text, TouchableOpacity } from "react-native";
import {getGridTileTheme, getGridTileTextTheme} from "../constants/Themes";
import {ToggleContext} from "../data/ToggleContext";

export default GridTile = props => {
  const [toggle, setToggle] = useContext(ToggleContext);
  return (
    <TouchableOpacity
      style={getGridTileTheme(toggle.darkTheme)}
      onPress={() => props.onClick(props.id)}
    >
      <Text style={getGridTileTextTheme(toggle.darkTheme)}>{props.text}</Text>
    </TouchableOpacity>
  );
};