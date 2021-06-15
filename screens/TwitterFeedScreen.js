import React, {useLayoutEffect, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {getBaseTextTheme, getThemeBg} from "../constants/Themes";
import Colors from "../constants/Colors";
import {ToggleContext} from "../data/ToggleContext";
import { RANDOMFACTS } from '../data/random-facts';

export default TwitterFeedScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const [toggle, setToggle] = useContext(ToggleContext);
  const [randomFact, setRandomFact] = useState('');

  const randomFactHandler = () => {
    let max = RANDOMFACTS.length;
    let min = 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    let number = Math.floor(Math.random() * (max - min +1)) + min;
    const random = RANDOMFACTS.find(item => item.id === number);
    setRandomFact(random.fact);
    console.log(randomFact);
  };

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
        <Button title="Get Random Fact" onPress={randomFactHandler} />
        <Text style={getBaseTextTheme(toggle.darkTheme)}>{randomFact}</Text>
    </View>
  );
};