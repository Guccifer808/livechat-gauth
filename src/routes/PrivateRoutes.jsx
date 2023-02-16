//Private route to hide chatbox url for not logged users
import { Navigate } from "react-router-dom";
export const PrivateRoutes = ({ children }) => {
  const currentUser = false;
  return !currentUser ? <Navigate to="/" replace /> : children;
};
