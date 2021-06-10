import React, {useContext} from 'react';
import { View, Text, StyleSheet } from "react-native";
import {getBaseTextTheme, getThemeBg, getTitleTextTheme} from "../constants/Themes";
import {ToggleContext} from "../data/ToggleContext";

export default ImpressumScreen = ({ route, navigation}) => {
  const [toggle, setToggle] = useContext(ToggleContext);
  return (
    <View style={[getThemeBg(toggle.darkTheme), styles.mainView]}>
        <Text style={getTitleTextTheme(toggle.darkTheme)}>Entwickler:</Text>
        <Text style={getBaseTextTheme(toggle.darkTheme)}>Magdalena Lucreteanu</Text>
        <Text style={getBaseTextTheme(toggle.darkTheme)}>Kirsten Grahl</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      padding: 20
  },
  baseTextView: {
      flexDirection: "row",
      marginVertical: 5
  },
});