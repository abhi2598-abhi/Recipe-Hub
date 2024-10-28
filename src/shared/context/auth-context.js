import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  isAdminLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); 
  const [userId, setUserId] = useState(null);

  const login = (uid, isAdmin = false) => {
    setIsLoggedIn(true);
    setUserId(uid);
    setIsAdminLoggedIn(isAdmin); 
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isAdminLoggedIn, userId, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
