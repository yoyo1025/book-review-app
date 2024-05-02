import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Top from "./components/Top";
import Home from "./components/Home";
import CreateReview from "./components/CreateReview";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true;

    const getCsrfToken = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/csrf`);
      const data = response.data;
      axios.defaults.headers.common["X-CSRF-Token"] = data.csrf_token;
    };

    getCsrfToken();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
