import React, { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import GridTile from "../components/GridTile";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

export default HomeScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color="rgb(0, 122, 255)" />}
          onPress={() => navigation.navigate("Settings", {title: "Settings", category: ''})}
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
    <AppearanceProvider>
        <FlatList
          data={MENUS}
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
    </AppearanceProvider>
  );

};
