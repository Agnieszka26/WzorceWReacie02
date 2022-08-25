
import React, {createContext, useState} from "react";
export const ContextList = createContext();

export const ContextProvider = ({children}) => {
  const [isUserSetCorrectPassphrase, setIsUserSetCorrectPassphrase] = useState();


  const values = {
    isUserSetCorrectPassphrase, setIsUserSetCorrectPassphrase
  };
  return <ContextList.Provider value={values}>{children}</ContextList.Provider>;
};