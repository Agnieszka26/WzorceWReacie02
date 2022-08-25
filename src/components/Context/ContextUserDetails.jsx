import React, {createContext, useState} from "react";
export const ContextUserDetails = createContext();

export const ContextProviderUserDetails = ({children}) => {
  const [userDetails, setUserDetails] = useState({
    name: "Jan",
    email: "jan@email.com",
    isAdmin: true,
  });

  const values = {
    userDetails,
    setUserDetails,
  };
  return (
    <ContextUserDetails.Provider value={values}>
      {children}
    </ContextUserDetails.Provider>
  );
};
