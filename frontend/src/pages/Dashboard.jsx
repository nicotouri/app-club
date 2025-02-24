import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, LayoutDashboard, Users, Activity, Wallet, Settings } from "lucide-react"; // Iconos

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(null); // Controla qué menú está abierto

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen">
      {/* Botón de mostrar/ocultar sidebar */}
      <button
        className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-md z-10"
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        {sidebarVisible ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`bg-blue-700 text-white p-5 transition-all duration-300 ${sidebarVisible ? "w-64" : "w-0 overflow-hidden"}`}>
        {sidebarVisible && (
          <>
            <h2 className="text-xl font-bold">Menú</h2>
            <nav className="mt-5">
              <ul className="space-y-2">
                {/* DASHBOARD */}
                <li>
                  <Link to="/dashboard" className="flex items-center w-full p-2 bg-blue-500 rounded-md hover:bg-blue-400">
                    <LayoutDashboard size={20} className="mr-2" />
                    Dashboard
                  </Link>
                </li>

                {/* SOCIOS */}
                <li>
                  <button
                    className="flex items-center w-full p-2 bg-blue-500 rounded-md"
                    onClick={() => setOpenMenu(openMenu === "socios" ? null : "socios")}
                  >
                    <Users size={20} className="mr-2" />
                    Socios
                  </button>
                  {openMenu === "socios" && (
                    <ul className="pl-4 mt-1 space-y-1">
                      <li>
                        <Link to="/alta-socio" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Alta Socio</Link>
                      </li>
                      <li>
                        <Link to="/consulta-socios" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Consultar Socios</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* ACTIVIDADES */}
                <li>
                  <button
                    className="flex items-center w-full p-2 bg-blue-500 rounded-md"
                    onClick={() => setOpenMenu(openMenu === "actividades" ? null : "actividades")}
                  >
                    <Activity size={20} className="mr-2" />
                    Actividades
                  </button>
                  {openMenu === "actividades" && (
                    <ul className="pl-4 mt-1 space-y-1">
                      <li>
                        <Link to="/alta-actividad" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Alta Actividad</Link>
                      </li>
                      <li>
                        <Link to="/consulta-actividades" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Consultar Actividades</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* TESORERÍA */}
                <li>
                  <button
                    className="flex items-center w-full p-2 bg-blue-500 rounded-md"
                    onClick={() => setOpenMenu(openMenu === "tesoreria" ? null : "tesoreria")}
                  >
                    <Wallet size={20} className="mr-2" />
                    Tesorería
                  </button>
                  {openMenu === "tesoreria" && (
                    <ul className="pl-4 mt-1 space-y-1">
                      <li>
                        <Link to="/estado-financiero" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Estado Financiero</Link>
                      </li>
                      <li>
                        <Link to="/registro-pagos" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Registro de Pagos</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* CONFIGURACIÓN */}
                <li>
                  <button
                    className="flex items-center w-full p-2 bg-blue-500 rounded-md"
                    onClick={() => setOpenMenu(openMenu === "config" ? null : "config")}
                  >
                    <Settings size={20} className="mr-2" />
                    Configuración
                  </button>
                  {openMenu === "config" && (
                    <ul className="pl-4 mt-1 space-y-1">
                      <li>
                        <Link to="/gestion-usuarios" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Gestión de Usuarios</Link>
                      </li>
                      <li>
                        <Link to="/roles-permisos" className="block p-2 bg-blue-400 rounded-md hover:bg-blue-300">Roles y Permisos</Link>
                      </li>
                    </ul>
                  )}
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
