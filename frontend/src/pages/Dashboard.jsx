import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Íconos para mostrar/ocultar la sidebar

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(true); // Estado para mostrar u ocultar la barra

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen">
      {/* Botón de ocultar/mostrar sidebar */}
      <button
        className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-md z-10"
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        {sidebarVisible ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Menú Lateral (Sidebar) */}
      <aside className={`bg-blue-700 text-white p-5 transition-all duration-300 ${sidebarVisible ? "w-64" : "w-0 overflow-hidden"}`}>
        {sidebarVisible && (
          <>
            <h2 className="text-xl font-bold">Panel de Administración</h2>
            <nav className="mt-5">
              <ul className="space-y-2">
                {/* SOCIOS */}
                <li className="group">
                  <div className="p-2 bg-blue-500 rounded-md">Socios</div>
                  <ul className="pl-4 mt-1 space-y-1 hidden group-hover:block">
                    <li>
                      <Link to="/alta-socio" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Alta Socio</Link>
                    </li>
                    <li>
                      <Link to="/consulta-socios" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Consultar Socios</Link>
                    </li>
                  </ul>
                </li>

                {/* ACTIVIDADES */}
                <li className="group">
                  <div className="p-2 bg-blue-500 rounded-md">Actividades</div>
                  <ul className="pl-4 mt-1 space-y-1 hidden group-hover:block">
                    <li>
                      <Link to="/alta-actividad" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Alta Actividad</Link>
                    </li>
                    <li>
                      <Link to="/consulta-actividades" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Consultar Actividades</Link>
                    </li>
                  </ul>
                </li>

                {/* TESORERÍA */}
                <li className="group">
                  <div className="p-2 bg-blue-500 rounded-md">Tesorería</div>
                  <ul className="pl-4 mt-1 space-y-1 hidden group-hover:block">
                    <li>
                      <Link to="/estado-financiero" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Estado Financiero</Link>
                    </li>
                    <li>
                      <Link to="/registro-pagos" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Registro de Pagos</Link>
                    </li>
                  </ul>
                </li>

                {/* CONFIGURACIÓN */}
                <li className="group">
                  <div className="p-2 bg-blue-500 rounded-md">Configuración</div>
                  <ul className="pl-4 mt-1 space-y-1 hidden group-hover:block">
                    <li>
                      <Link to="/gestion-usuarios" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Gestión de Usuarios</Link>
                    </li>
                    <li>
                      <Link to="/roles-permisos" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Roles y Permisos</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </>
        )}
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-10 transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-700">Bienvenido, {user?.username}</h1>
        <p className="mt-2 text-gray-500">Selecciona una opción del menú para empezar.</p>
      </main>
    </div>
  );
};

export default Dashboard;
