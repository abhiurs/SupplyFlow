import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: "Abhi",
    email: "abhi@supplyflow.com",
    role: "Admin",
    profileImage: "",
  });

  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>

  );

};

export const useAuth = () => {
  return useContext(AuthContext);
};