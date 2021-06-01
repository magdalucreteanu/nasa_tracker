import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import {getBaseTextTheme, getThemeBg, getTitleTextTheme} from "../constants/Themes";

export default ImpressumScreen = ({ route, navigation}) => {
  const colorScheme = useColorScheme();
  return (
    <View style={[getThemeBg(colorScheme === "light"), styles.mainView]}>
        <Text style={getTitleTextTheme(colorScheme === "light")}>Entwickler:</Text>
        <Text style={getBaseTextTheme(colorScheme === "light")}>Magdalena Lucreteanu</Text>
        <Text style={getBaseTextTheme(colorScheme === "light")}>Kirsten Grahl</Text>
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