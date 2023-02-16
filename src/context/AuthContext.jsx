import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
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
  // Signout
  const signout = () => signOut(auth);
  // After successful login
  useEffect(() => {
    const userAuthData = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return userAuthData;
  }, []);
  // Context values
  const value = {
    currentUser,
    setCurrentUser,
    googleAuth,
    signout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
