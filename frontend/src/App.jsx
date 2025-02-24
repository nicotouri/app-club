import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Socios from "./pages/Socios";
import Actividades from "./pages/Actividades";
import Tesoreria from "./pages/Tesoreria";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/socios" element={<Socios />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/tesoreria" element={<Tesoreria />} />
      </Routes>
    </div>
  );
};

export default App;
