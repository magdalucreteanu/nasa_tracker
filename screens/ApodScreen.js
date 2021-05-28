import React, {useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import SimpleDatePicker from "../components/SimpleDatePicker";

export default ApodScreen = ({route, navigation}) => {
  const {itemId} = route.params;

  const handleSuche = () => {
    // TODO suche hier
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "APOD",
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
    <View style={styles.mainView}>
        <Text>Aktuelles Datum hier.</Text>
        <Button title = 'Suche' onClick={handleSuche}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      padding: 20
  },
});