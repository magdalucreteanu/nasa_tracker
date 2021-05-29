import React, {useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import SimpleDatePicker from "../components/SimpleDatePicker";

export default ApodScreen = ({route, navigation}) => {
  const {itemId} = route.params;

  const [data, setData] = useState('');

  const imageUri = 'https://reactnative.dev/img/tiny_logo.png';

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

    const getApodHandler = async () => {
        try {
            let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
            let json = await response.json();
            setData(json);
            // Alert.alert(data.title);
            // Alert.alert(data.image);
            /*let json = {
                title: 'Wow wow',
                image: 'https://reactnative.dev/img/tiny_logo.png'
            }
            setData(json);
            */
        } catch (error) {
            Alert.alert('error');
        }
    }

  return (
    <View style={styles.mainView}>
        <Text>Aktuelles Datum hier.</Text>
        <Button title = 'Suche' onPress={getApodHandler}/>
        <Text style={styles.titleText}>{data.title}</Text>

        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Image
                style={styles.image}
                source={{uri: data.url}}
              />
            <Text style={styles.textArea}>
              {data.explanation}
            </Text>
          </ScrollView>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      padding: 20
  },
    titleText: {
      fontSize: 24,
      fontWeight: "bold",
      marginVertical: 5,
      textAlign: 'center'
    },
  image: {
      width: 300,
      height: 300,
      justifyContent: 'center',
    },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  textArea: {
      marginVertical: 10,
      fontSize: 16,
      textAlign: 'justify'
  },
});