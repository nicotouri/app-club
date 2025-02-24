import React, { useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Menu, X, Home, Users, Activity, Wallet, Settings, LogOut } from "lucide-react";

const Layout = () => {
  const { logout } = useContext(AuthContext);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`bg-blue-700 text-white transition-all duration-300 ${sidebarVisible ? "w-64 p-5" : "w-16 p-2"}`}>
        {/* Botón para ocultar la sidebar */}
        <button className="text-white bg-blue-500 p-2 rounded-md" onClick={() => setSidebarVisible(!sidebarVisible)}>
          {sidebarVisible ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Menú de navegación */}
        <nav className="mt-5">
          <ul className="space-y-2">
            <li>
              <button className="flex items-center w-full p-2 bg-blue-500 rounded-md" onClick={() => setOpenMenu(openMenu === "socios" ? null : "socios")}>
                <Users size={20} className="mr-2" />
                {sidebarVisible && "Socios"}
              </button>
              {openMenu === "socios" && sidebarVisible && (
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
          </ul>
        </nav>

        {/* Cerrar sesión */}
        <button onClick={logout} className="flex items-center w-full p-2 bg-red-500 rounded-md">
          <LogOut size={20} className="mr-2" />
          {sidebarVisible && "Cerrar Sesión"}
        </button>
      </aside>

      {/* Contenido Principal */}
      <div className="flex-1">
        <header className="flex items-center justify-between p-4 bg-gray-200">
          <h1 className="text-2xl font-bold">Web App</h1>
          <button className="bg-blue-600 text-white p-2 rounded-md" onClick={() => setSidebarVisible(!sidebarVisible)}>
            {sidebarVisible ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {/* Aquí se renderizan las páginas */}
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
