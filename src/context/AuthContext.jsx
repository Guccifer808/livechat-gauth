import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

// Create Context
const AuthContext = createContext();
// Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Google Auth w popup
  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // after successful login
  useEffect(() => {
    const userAuthData = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return userAuthData;
  }, []);
  const value = {
    currentUser,
    setCurrentUser,
    googleAuth,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
