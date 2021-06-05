import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Image, useColorScheme, SafeAreaView, ScrollView, StatusBar, TouchableHighlight, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {getBaseTextTheme, getThemeBg, getTitleTextTheme} from "../constants/Themes";
import Colors from "../constants/Colors";
import GridTile from "../components/GridTile";
import curiosity from "../assets/NASA_Mars_Rover_Curiosity.jpg";
import opportunity from "../assets/NASA_Mars_Rover_Opportunity.jpg";
import spirit from "../assets/NASA_Mars_Rover_Spirit.jpg";

export default MarsRoversScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Mars Rovers",
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color={Colors.settingsIconColor} />}
          onPress={() => navigation.navigate("Settings", {title: "Settings"})}
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
    <View style={[getThemeBg(colorScheme === "light"), {flex: 1}, styles.mainView]}>
         <Text style={getTitleTextTheme(colorScheme === "light")}>Curiosity</Text>
            <View style={styles.baseTextView}>
               <TouchableHighlight onPress={clickCuriosity}>
                 <Image
                   style={styles.image}
                   source= {curiosity}
                   resizeMode="contain"
                 />
               </TouchableHighlight>
             <Text style={[getBaseTextTheme(colorScheme === "light"), styles.textArea]}>
               Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars.
               Its goals include an investigation of the Martian climate and geology in preparation for human exploration.
             </Text>
         </View>

         <Text style={getTitleTextTheme(colorScheme === "light")}>Opportunity</Text>
         <View style={{ flex: 1 }, styles.baseTextView}>
            <TouchableHighlight onPress={clickOpportunity}>
                 <Image
                   style={styles.image}
                   source= {opportunity}
                   resizeMode="contain"
                 />
             </TouchableHighlight>
              <Text style={[getBaseTextTheme(colorScheme === "light"), styles.textArea]}>
                Opportunity is a robotic rover that was active on Mars from 2004 until mid-2018.
                Mission highlights included the initial 90-sol mission, finding meteorites and studying Victoria crater.
              </Text>
         </View>
         <Text style={getTitleTextTheme(colorScheme === "light")}>Spirit </Text>
         <View style={{ flex: 1 }, styles.baseTextView}>
            <TouchableHighlight onPress={clickSpirit}>
                 <Image
                   style={styles.image}
                   source= {spirit}
                   resizeMode="contain"
                 />
             </TouchableHighlight>
             <Text style={[getBaseTextTheme(colorScheme === "light"), styles.textArea]}>
                 Spirit  is a robotic rover on Mars, active from 2004 to 2010.
                 It allowed more extensive geological analysis of Martian rocks and planetary surface features.
              </Text>
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      padding: 20
  },
  baseTextView: {
      flexDirection: "row",
      marginVertical: 5
  },
   image: {
        width: 120,
        height: 120,
        justifyContent: 'center',
    },
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
});
