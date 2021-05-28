import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default ImpressumScreen = ({ route, navigation}) => {

  return (
    <View style={styles.mainView}>
        <Text style={styles.titleText}>Entwickler:</Text>
        <Text style={styles.baseText}>Magdalena Lucreteanu</Text>
        <Text style={styles.baseText}>Kirsten Grahl</Text>
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
  baseText: {
    fontSize: 20
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10
  },
});