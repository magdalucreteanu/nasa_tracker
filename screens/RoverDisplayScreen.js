import React, {useLayoutEffect, useState, useEffect} from 'react';
import { FlatList, View, Text, StyleSheet, Image, useColorScheme, SafeAreaView, ScrollView, StatusBar, TouchableHighlight, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";


import {getBaseTextTheme, getThemeBg, getTitleTextTheme} from "../constants/Themes";
import Colors from "../constants/Colors";

export default RoverDisplayScreen = ({ route, navigation}) => {

  let today = new Date();
  let yesterday = new Date();
  yesterday. setDate(today. getDate() - 1);

  const {rover} = route.params;

  const [data, setData] = useState('');

  const [date, setDate] = useState(yesterday);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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

    loadData = async (currentDate) => {
      try {
        let formattedDate = format(currentDate, 'yyyy-MM-dd');
        let apiLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'.concat(rover).concat('/photos?api_key=EbkmyHpRcGZRJdA4drqYbFPaVUIR8uLsbA6LI72w&earth_date='.concat(formattedDate));
        let response = await fetch(apiLink);
        let json = await response.json();
        setData(json.photos);
      } catch (error) {
        Alert.alert('error');
      }
    }

    const onChange = async (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      loadData(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

  const clickHandler = (id) => {
    Alert.alert(id);
  }

    useEffect(() => {
        loadData(yesterday);
      }, []);


  return (
    <View style={[getThemeBg(colorScheme === "light"), styles.mainView]}>
      <View style={styles.datePicker}>
        <Text style={getBaseTextTheme(colorScheme === "light")}> Date: {date.toLocaleDateString()}</Text>
        <Button
          type="clear"
          icon={<Ionicons name="md-calendar" size={24} color={Colors.calendarIconColor} />}
          onPress={showDatepicker} />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={{ flex: 10 }}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <FlatList
                  data={data}
                  style={getThemeBg(colorScheme === "light")}
                  renderItem={(itemData) => {
                    return (
                     <Image
                       style={styles.image}
                       source={{ uri: itemData.item.img_src }}
                       resizeMode="contain"
                     />
                    );
                  }}
                  numColumns={1}
                />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  titleText: {
    textAlign: 'center'
  },
  image: {
    width: "100%",
    height: 300,
    justifyContent: 'center',
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  textArea: {
    marginVertical: 10,
    textAlign: 'justify',
    fontSize: 16
  },
});
