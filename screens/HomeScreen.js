import React, { useLayoutEffect } from "react";
import { FlatList, useColorScheme } from "react-native";
import GridTile from "../components/GridTile";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {getBaseTextTheme, getTitleTextTheme, getThemeBg} from "../constants/Themes";
import Colors from "../constants/Colors";

export default HomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color={Colors.settingsIconColor} />}
          onPress={() => navigation.navigate("Settings", { title: "Settings", category: '' })}
        />
      ),
    });
  }, [navigation]);


  const MENUS = [
    {
      id: 'APOD',
      title: 'APOD',
    },
    {
      id: 'MarsRovers',
      title: 'Mars Rovers',
    },
    {
      id: 'TwitterFeed',
      title: 'Twitter Feed',
    },
  ];

  const clickHandler = (id) => {
    if ('APOD' === id) {
      navigation.navigate('Apod', { itemId: id });
    } else if ('MarsRovers' === id) {
      navigation.navigate('MarsRovers', { itemId: id });
    } else if ('TwitterFeed' === id) {
      navigation.navigate('TwitterFeed', { itemId: id });
    }
  };

  return (
    <FlatList
      data={MENUS}
      style={getThemeBg(colorScheme === "light")} 
      renderItem={(itemData) => {
        return (
          <GridTile
            text={itemData.item.title}
            onClick={clickHandler}
            id={itemData.item.id}
          />
        );
      }}
      numColumns={1}
    />
  );

};
