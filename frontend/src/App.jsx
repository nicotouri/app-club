import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Actividades from "./pages/Actividades";
import Tesoreria from "./pages/Tesoreria";
import AltaSocio from "./pages/AltaSocio";
import ConsultaSocios from "./pages/ConsultaSocios";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/tesoreria" element={<Tesoreria />} />
        <Route path="/alta-socio" element={<AltaSocio />} />
        <Route path="/consulta-socios" element={<ConsultaSocios />} />
      </Routes>
    </div>
  );
};

export default App;
