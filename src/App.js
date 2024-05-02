import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Top from "./components/Top";
import Home from "./components/Home";
import CreateReview from "./components/CreateReview";

function App() {
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
