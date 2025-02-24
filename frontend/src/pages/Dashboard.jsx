import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Importamos la Sidebar

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar agregada */}

      {/* Contenido Principal */}
      <main className="flex-1 p-10 bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-700">Bienvenido, {user?.username}</h1>
        <p className="mt-2 text-gray-500">Selecciona una opción del menú para empezar.</p>
      </main>
    </div>
  );
};

export default Dashboard;
