import React, { createContext } from "react";

const SettingsContext = createContext();

export const SettingsProvider = (props) => {
  return (
    //   the prop should be named 'value' not something else
    <SettingsContext.Provider value={props.settings}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
