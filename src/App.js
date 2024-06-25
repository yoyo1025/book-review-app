import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Top from "./components/Top";
import Home from "./components/Home";
import CreateReview from "./components/CreateReview";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/UserProfile";

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true;

    const getCsrfToken = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/csrf`);
        axios.defaults.headers.common["X-CSRF-Token"] = data.csrf_token;
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    getCsrfToken();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userbooks/:userId" element={<UserProfile />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateReview />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
