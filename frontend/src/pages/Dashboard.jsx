import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

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
      {/* Menú Lateral */}
      <aside className="w-64 bg-blue-700 text-white p-5">
        <h2 className="text-xl font-bold">Panel de Administración</h2>
        <nav className="mt-5 flex flex-col space-y-2">
          <Link to="/socios" className="p-2 bg-blue-500 rounded-md hover:bg-blue-400">Socios</Link>
          <Link to="/actividades" className="p-2 bg-blue-500 rounded-md hover:bg-blue-400">Actividades</Link>
          <Link to="/tesoreria" className="p-2 bg-blue-500 rounded-md hover:bg-blue-400">Tesorería</Link>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-700">Bienvenido, {user?.username}</h1>
        <p className="mt-2 text-gray-500">Selecciona una opción del menú para empezar.</p>
      </main>
    </div>
  );
};

export default Dashboard;
