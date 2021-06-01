import React, {useLayoutEffect} from 'react';
import {View, Text, useColorScheme} from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {getBaseTextTheme, getThemeBg} from "../constants/Themes";
import Colors from "../constants/Colors";

export default MarsRoversScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Mars Rovers",
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color={Colors.settingsIconColor} />}
          onPress={() => navigation.navigate("Settings", {title: "Settings"})}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={[getThemeBg(colorScheme === "light"), {flex: 1}]}>
        <Text style= {getBaseTextTheme(colorScheme === "light")}>This is Mars Rovers</Text>
    </View>
  );
};