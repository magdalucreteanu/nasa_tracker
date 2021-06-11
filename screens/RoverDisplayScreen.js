import React, {useLayoutEffect, useState, useEffect, useContext} from 'react';
import { FlatList, View, Text, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, TouchableHighlight, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import {ToggleContext} from "../data/ToggleContext";


import {getBaseTextTheme, getThemeBg, getTitleTextTheme} from "../constants/Themes";
import Colors from "../constants/Colors";

export default RoverDisplayScreen = ({ route, navigation}) => {
  const {rover} = route.params;

  let today = new Date();
  let roverDate = new Date();
  if (rover === 'Curiosity') {
      // Datzum für Curiosity ist gestern
      roverDate.setDate(today. getDate() - 1);
  } else if (rover === 'Opportunity') {
      // Datum für Opportunity ist 2018-06-05, danach gab es keine brauchbare Fotos mehr
      roverDate = new Date("2018-06-05");
  } else if (rover === 'Spirit') {
      // Datum für Spirit ist 2010-03-03, danach gab es keine brauchbare Fotos mehr
      roverDate = new Date("2010-03-03");
  }

  const [data, setData] = useState([]);

  const [date, setDate] = useState(roverDate);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: Colors.settingsIconColor,
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

  const [toggle, setToggle] = useContext(ToggleContext);

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
        loadData(roverDate);
      }, []);

  return (
    <View style={[getThemeBg(toggle.darkTheme), styles.mainView]}>
      <View style={styles.datePicker}>
        <Text style={getBaseTextTheme(toggle.darkTheme)}> Date: {date.toLocaleDateString()}</Text>
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

            <FlatList
                  data={data}
                  style={getThemeBg(toggle.darkTheme)}
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
