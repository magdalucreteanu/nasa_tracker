import React, { useLayoutEffect, useState, useEffect, useContext } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet, Switch, AsyncStorage, Alert } from 'react-native';
import { getThemeBg, getBaseTextTheme, getTitleTextTheme } from "../constants/Themes";
import { ToggleContext } from '../data/ToggleContext';
import { storeTheme } from "../data/AppStorage";
import Colors from "../constants/Colors";

export default SettingsScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const [toggle, setToggle] = useContext(ToggleContext);

 useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: Colors.settingsIconColor,
      headerTitle: "Settings",
    });
  }, [navigation]);

  const addHandler = name => {
    console.log("add this " + title + ": " + name);
    navigation.goBack();
  };

  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const darkThemeToggleSwitch = () => {
    setToggle(toggle => ({
      darkTheme: !toggle.darkTheme, 
      twitterFeed: toggle.twitterFeed,
    }));
    storeTheme(toggle);
  };

  const twitterToggleSwitch = () => {
    setToggle(toggle => ({
      darkTheme: toggle.darkTheme, 
      twitterFeed: !toggle.twitterFeed,
    }));
    storeTheme(toggle);
  };

  const [isApodEnabled, setIsApodEnabled] = useState(false);
  const apodToggleSwitch = () => setIsApodEnabled(previousState => !previousState);
  const [isCuriosityEnabled, setIsCuriosityEnabled] = useState(false);
  const curiosityToggleSwitch = () => setIsCuriosityEnabled(previousState => !previousState);
  const [isOpportunityEnabled, setIsOpportunityEnabled] = useState(false);
  const opportunityToggleSwitch = () => setIsOpportunityEnabled(previousState => !previousState);
  const [isSpiritEnabled, setIsSpiritEnabled] = useState(false);
  const spiritToggleSwitch = () => setIsSpiritEnabled(previousState => !previousState);

  return (
    <View style={[getThemeBg(toggle.darkTheme), styles.mainView]}>
      <Text style={getTitleTextTheme(toggle.darkTheme)} >General</Text>
      <View style={styles.baseTextView}>
        <Text style={getBaseTextTheme(toggle.darkTheme)} >Dark Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={toggle.darkTheme ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={darkThemeToggleSwitch}
          value={toggle.darkTheme}
        />
      </View>

      <Text style={getTitleTextTheme(toggle.darkTheme)} >Notifications</Text>
      <View style={styles.baseTextView}>
        <Text style={getBaseTextTheme(toggle.darkTheme)} >Twitter</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={toggle.twitterFeed ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={twitterToggleSwitch}
          value={toggle.twitterFeed}
        />
      </View>

      <View style={styles.baseTextView}>
        <Text style={styles.baseTextInactive} >APOD</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isApodEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={apodToggleSwitch}
          value={isApodEnabled}
          disabled={true}
        />
      </View>
      <View style={styles.baseTextView}>
        <Text style={styles.baseTextInactive} >Curiosity Rover</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isCuriosityEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={curiosityToggleSwitch}
          value={isCuriosityEnabled}
          disabled={true}
        />
      </View>
      <View style={styles.baseTextView} >
        <Text style={styles.baseTextInactive} >Opportunity Rover</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isOpportunityEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={opportunityToggleSwitch}
          value={isOpportunityEnabled}
          disabled={true}
        />
      </View>
      <View style={styles.baseTextView}>
        <Text style={styles.baseTextInactive} >Spirit Rover</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSpiritEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={spiritToggleSwitch}
          value={isSpiritEnabled}
          disabled={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20,
  },
  baseTextView: {
    flexDirection: "row",
    marginVertical: 5,
  },
  baseTextInactive: {
    fontSize: 20,
    color: '#696969'
  }
});