import React, { useLayoutEffect, useState, useEffect, useContext } from 'react';
import { FlatList, View, Text, StyleSheet, Alert, Image, SafeAreaView, ScrollView, StatusBar, DatePicker } from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import { getBaseTextTheme, getThemeBg, getTitleTextTheme } from "../constants/Themes";
import Colors from "../constants/Colors";
import {ToggleContext} from "../data/ToggleContext";
import YoutubePlayer from "react-native-youtube-iframe";

export default ApodScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [toggle, setToggle] = useContext(ToggleContext);

  const [data, setData] = useState('');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: Colors.settingsIconColor,
      headerTitle: "APOD",
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color={Colors.settingsIconColor} />}
          onPress={() => navigation.navigate("Settings", { title: "Settings" })}
        />
      ),
    });
  }, [navigation]);

  loadData = async (currentDate) => {
    try {
      let formattedDate = format(currentDate, 'yyyy-MM-dd');
      let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=EbkmyHpRcGZRJdA4drqYbFPaVUIR8uLsbA6LI72w&date='.concat(formattedDate));
      let json = await response.json();
      /*
      let json = {
          title: 'Lunar Dust and Duct Tape',
          url: 'https://apod.nasa.gov/apod/image/2105/AS17-137-20979_1024.jpg',
          explanation: 'Patches, patches, patches...'
      };*/

      // parse video id for youtube
      if (json.media_type == 'video') {
          let startPosition = "https://www.youtube.com/embed/".length;
          let endPosition = json.url.indexOf('&');
          let videoId = json.url.slice(startPosition, endPosition);
          json.url = videoId;
      }
      setData(json);
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

    useEffect(() => {
        loadData(new Date());
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
      <Text style={[getTitleTextTheme(toggle.darkTheme), styles.titleText]}>{data.title}</Text>

      <View style={{ flex: 10 }}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {data.media_type == 'image'? <Image
                                           style={styles.image}
                                           source={{ uri: data.url }}
                                           resizeMode="contain"
                                          />
                                       :
                                       <SafeAreaView style={{ flex: 1 }}>
                                             <YoutubePlayer height={250} videoId={data.url} />
                                           </SafeAreaView>
            }

            <Text style={[getBaseTextTheme(toggle.darkTheme), styles.textArea]}>
              {data.explanation}
            </Text>
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