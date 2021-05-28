import React from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import InputTile from '../components/InputTile'

export default InputScreen = ({route, navigation}) => {
  const {title} = route.params;

  const addHandler = name => {
    console.log("add this " + title + ": " + name);
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1, padding: 20, flexDirection: 'row'}}>
        <InputTile placeholderText={"Add " + title + " here..."} onAdd={addHandler} navigation={navigation}/>
      </View>
    </TouchableWithoutFeedback>
  );
};