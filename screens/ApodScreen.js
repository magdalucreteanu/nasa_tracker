import React, {useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert, Image, SafeAreaView, ScrollView, StatusBar, DatePicker } from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";

export default ApodScreen = ({route, navigation}) => {
  const {itemId} = route.params;

  const [data, setData] = useState('');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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

  return (
    <View style={styles.mainView}>
        <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.textStyle}> Date: {date.toLocaleDateString()}</Text>
                <Button
                          type="clear"
                          icon={<Ionicons name="md-calendar" size={24} color="rgb(0, 122, 255)" />}
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
        <Text style={styles.titleText}>{data.title}</Text>

        <View style={{flex: 10}}>
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
  textStyle: {
    fontSize: 16,
  },
  textArea: {
      marginVertical: 10,
      fontSize: 16,
      textAlign: 'justify'
  },
});