import React, { useLayoutEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, TouchableHighlight, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { getBaseTextTheme, getThemeBg, getTitleTextTheme } from "../constants/Themes";
import Colors from "../constants/Colors";
import GridTile from "../components/GridTile";
import curiosity from "../assets/NASA_Mars_Rover_Curiosity.jpg";
import opportunity from "../assets/NASA_Mars_Rover_Opportunity.jpg";
import spirit from "../assets/NASA_Mars_Rover_Spirit.jpg";
import {ToggleContext} from "../data/ToggleContext";

export default MarsRoversScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [toggle, setToggle] = useContext(ToggleContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: Colors.settingsIconColor,
      headerTitle: "Mars Rovers",
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color={Colors.settingsIconColor} />}
          onPress={() => navigation.navigate("Settings", { title: "Settings" })}
        />
      ),
    });
  }, [navigation]);

  const clickCuriosity = () => {
    navigation.navigate('RoverDisplay', { rover: 'Curiosity' });
  }
  const clickOpportunity = () => {
    navigation.navigate('RoverDisplay', { rover: 'Opportunity' });
  }
  const clickSpirit = () => {
    navigation.navigate('RoverDisplay', { rover: 'Spirit' });
  }

  return (
    <View style={[getThemeBg(toggle.darkTheme), { flex: 1 }, styles.mainView]}>
      <Text style={[getTitleTextTheme(toggle.darkTheme), styles.titleText]}>Curiosity</Text>
      <View style={styles.baseTextView}>
        <TouchableHighlight onPress={clickCuriosity}>
          <Image
            style={styles.image}
            source={curiosity}
            resizeMode="contain"
          />
        </TouchableHighlight>
        <View style={styles.textView}>
          <Text style={[getBaseTextTheme(toggle.darkTheme), styles.textArea]}>
            Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars.
            Its goals include an investigation of the Martian climate and geology in preparation for human exploration.
             </Text>
        </View>
      </View>

      <Text style={[getTitleTextTheme(toggle.darkTheme), styles.titleText]}>Opportunity</Text>
      <View style={{ flex: 1 }, styles.baseTextView}>
        <TouchableHighlight onPress={clickOpportunity}>
          <Image
            style={styles.image}
            source={opportunity}
            resizeMode="contain"
          />
        </TouchableHighlight>
        <View style={styles.textView}>
          <Text style={[getBaseTextTheme(toggle.darkTheme), styles.textArea]}>
            Opportunity is a robotic rover that was active on Mars from 2004 until mid-2018.
            Mission highlights included the initial 90-sol mission, finding meteorites and studying Victoria crater.
              </Text>
        </View>
      </View>
      <Text style={[getTitleTextTheme(toggle.darkTheme), styles.titleText]}>Spirit </Text>
      <View style={{ flex: 1 }, styles.baseTextView}>
        <TouchableHighlight onPress={clickSpirit}>
          <Image
            style={styles.image}
            source={spirit}
            resizeMode="contain"
          />
        </TouchableHighlight>
        <View style={styles.textView}>
          <Text style={[getBaseTextTheme(toggle.darkTheme), styles.textArea]}>
            Spirit  is a robotic rover on Mars, active from 2004 to 2010.
            It allowed more extensive geological analysis of Martian rocks and planetary surface features.
              </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 10
  },
  baseTextView: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  image: {
    width: 120,
    height: 120,
    justifyContent: 'center',
  },
  textView: {
    flex: 1,
    padding: 10
  },
  textArea: {
    fontSize: 14
  },
  titleText: {
    //marginBottom: 5,
  }
});

