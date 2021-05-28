import React, { useState } from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet, Switch} from 'react-native';

export default SettingsScreen = ({route, navigation}) => {
  const {title} = route.params;

  const addHandler = name => {
    console.log("add this " + title + ": " + name);
    navigation.goBack();
  };

  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(true);
  const darkThemeToggleSwitch = () => setIsDarkThemeEnabled(previousState => !previousState);
  const [isApodEnabled, setIsApodEnabled] = useState(true);
  const apodToggleSwitch = () => setIsApodEnabled(previousState => !previousState);
  const [isCuriosityEnabled, setIsCuriosityEnabled] = useState(true);
  const curiosityToggleSwitch = () => setIsCuriosityEnabled(previousState => !previousState);
  const [isOpportunityEnabled, setIsOpportunityEnabled] = useState(true);
  const opportunityToggleSwitch = () => setIsOpportunityEnabled(previousState => !previousState);
  const [isSpiritEnabled, setIsSpiritEnabled] = useState(true);
  const spiritToggleSwitch = () => setIsSpiritEnabled(previousState => !previousState);
  const [isTwitterEnabled, setIsTwitterEnabled] = useState(true);
  const twitterToggleSwitch = () => setIsTwitterEnabled(previousState => !previousState);

  return (
      <View style={styles.mainView}>
        <Text style={styles.titleText} >General</Text>
        <View style={styles.baseTextView}>
            <Text style={styles.baseText} >Dark Theme</Text>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDarkThemeEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={darkThemeToggleSwitch}
                    value={isDarkThemeEnabled}
                  />
        </View>

        <Text style={styles.titleText} >Notifications</Text>
        <View style={styles.baseTextView}>
            <Text style={styles.baseText} >APOD</Text>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isApodEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={apodToggleSwitch}
                    value={isApodEnabled}
                  />
        </View>
        <View style={styles.baseTextView}>
            <Text style={styles.baseText} >Curiosity Rover</Text>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isCuriosityEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={curiosityToggleSwitch}
                    value={isCuriosityEnabled}
                  />
        </View>
        <View style={styles.baseTextView}>
            <Text style={styles.baseText} >Opportunity Rover</Text>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isOpportunityEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={opportunityToggleSwitch}
                    value={isOpportunityEnabled}
                  />
        </View>
        <View style={styles.baseTextView}>
            <Text style={styles.baseText} >Spirit Rover</Text>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isSpiritEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={spiritToggleSwitch}
                    value={isSpiritEnabled}
                  />
        </View>
        <View style={styles.baseTextView}>
            <Text style={styles.baseText} >Twitter</Text>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isTwitterEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={twitterToggleSwitch}
                    value={isTwitterEnabled}
                  />
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
    marginVertical: 10
  },
  baseTextView: {
      flexDirection: "row",
      marginVertical: 5
  },
  baseText: {
    fontSize: 20
  }
});