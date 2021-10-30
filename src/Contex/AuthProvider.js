import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContenxt = useFirebase();

  return (
    <AuthContext.Provider value={allContenxt}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
