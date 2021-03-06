import React, {useLayoutEffect, useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { Button } from "react-native-elements";
import Hyperlink from 'react-native-hyperlink'
import { Ionicons } from "@expo/vector-icons";
import {getBaseTextTheme, getThemeBg, getTitleTextTheme, getButtonTheme, getButtonTextTheme} from "../constants/Themes";
import Colors from "../constants/Colors";
import {ToggleContext} from "../data/ToggleContext";
import { RANDOMFACTS } from '../data/random-facts';
import GridTile from "../components/GridTile";

export default RandomFactsScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const [toggle, setToggle] = useContext(ToggleContext);
  const [randomFactTitle, setRandomFactTitle] = useState('');
  const [randomFact, setRandomFact] = useState('');
  const [randomFactUrl, setRandomFactUrl] = useState('');

  const randomFactHandler = () => {
    let max = RANDOMFACTS.length;
    let min = 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    let number = Math.floor(Math.random() * (max - min +1)) + min;
    const random = RANDOMFACTS.find(item => item.id === number);
    setRandomFactTitle(random.title);
    setRandomFact(random.fact);
    setRandomFactUrl(random.url);
    //console.log(randomFact);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: Colors.settingsIconColor,
      headerTitle: "Random Facts",
      headerRight: () => (
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={32} color={Colors.settingsIconColor} />}
          onPress={() => navigation.navigate("Settings", {title: "Settings"})}
        />
      ),
    });
  }, [navigation]);

    useEffect(() => {
        randomFactHandler();
      }, []);

//  <GridTile text="Get Random Fact" onClick={randomFactHandler} id="randomFact"/>
// <Button buttonStyle={getButtonTheme(toggle.darkTheme)} titleStyle={getButtonTextTheme(toggle.darkTheme)} title="Get Random Fact" onPress={randomFactHandler} />
  return (
      <View style={[getThemeBg(toggle.darkTheme), {flex:1, padding: 20}]}>
        <View style = {{flex: 1}}>
          <GridTile text="Get Random Fact" onClick={randomFactHandler} id={"randomFact"}/>
        </View>
        <View style = {{flex: 5}}>
          <Text style={getTitleTextTheme(toggle.darkTheme)}>{randomFactTitle}</Text>
          <Text style={getBaseTextTheme(toggle.darkTheme)}>{randomFact}</Text>
          <Hyperlink
                linkDefault={ true } linkStyle={ { color: '#2980b9', fontSize: 20 } }
                linkText={ randomFactUrl => randomFactUrl.includes('http') ? '[Learn more]' : randomFactUrl }>
              <Text style={[getBaseTextTheme(toggle.darkTheme), {fontSize: 12, paddingTop:5}]}>{randomFactUrl}</Text>
          </Hyperlink>
          </View>
      </View>
      
  );
};