import React, {useLayoutEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {getBaseTextTheme, getThemeBg} from "../constants/Themes";
import Colors from "../constants/Colors";
import {ToggleContext} from "../data/ToggleContext";

export default TwitterFeedScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const [toggle, setToggle] = useContext(ToggleContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: Colors.settingsIconColor,
      headerTitle: "Twitter Feed",
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
    <View style={[getThemeBg(toggle.darkTheme), {flex: 1}]}>
        <Text style={getBaseTextTheme(toggle.darkTheme)}>This is Twitter Feed</Text>
    </View>
  );
};