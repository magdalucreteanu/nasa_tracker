import React, { useState, useEffect } from "react";
import MainNavigator from './navigation/MainNavigator';
import { ToggleContext } from './data/ToggleContext';
import { getTheme } from './data/AppStorage';


export default App => {
  const [toggle, setToggle] = useState({ darkTheme: false, twitterFeed: false});

  useEffect(() => {
    getTheme()
      .then((returnedValue) => {
        setToggle(JSON.parse(returnedValue));
      })
      .catch(() => console.log('We got an error!'));
  }, []);

  return (
    <ToggleContext.Provider value={[toggle, setToggle]}>
      <MainNavigator />
    </ToggleContext.Provider>
  );
};
