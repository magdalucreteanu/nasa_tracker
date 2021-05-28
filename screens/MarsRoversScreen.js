import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default MarsRoversScreen = ({route, navigation}) => {
  const {itemId} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Mars Rovers",
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color="rgb(0, 122, 255)" />}
          onPress={() => navigation.navigate("Settings", {title: "Settings"})}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
        <Text>This is Mars Rovers</Text>
    </View>
  );
};