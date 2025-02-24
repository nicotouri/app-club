import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Simulación de login (con usuario y contraseña hardcodeados)
  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      setUser({ username });
      navigate("/dashboard"); // Redirige al Dashboard
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // Cerrar sesión
  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
