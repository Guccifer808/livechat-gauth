//Private route to hide chatbox url for not logged users
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
export const PrivateRoutes = ({ children }) => {
  const { currentUser, googleAuth } = UserAuth();
  return !currentUser ? <Navigate to="/" replace /> : children;
};
