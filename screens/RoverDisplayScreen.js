import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Image, useColorScheme, SafeAreaView, ScrollView, StatusBar, TouchableHighlight, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {getBaseTextTheme, getThemeBg, getTitleTextTheme} from "../constants/Themes";
import Colors from "../constants/Colors";

export default RoverDisplayScreen = ({ route, navigation}) => {

  const {rover} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: rover,
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color={Colors.settingsIconColor} />}
          onPress={() => navigation.navigate("Settings", {title: "Settings"})}
        />
      ),
    });
  }, [navigation]);

  const colorScheme = useColorScheme();
  return (
    <View style={[getThemeBg(colorScheme === "light"), styles.mainView]}>
        <Text style={getTitleTextTheme(colorScheme === "light")}>Rover display</Text>
        <Text style={getBaseTextTheme(colorScheme === "light")}>xx</Text>
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