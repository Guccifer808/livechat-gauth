import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import MainChatPage from "./pages/MainChatPage";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/chat"
          element={
            <PrivateRoutes>
              <MainChatPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
