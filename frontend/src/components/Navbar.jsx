import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Menu, X, Home, LogOut } from "lucide-react"; // Iconos

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation(); // Obtiene la ruta actual

  const isLoginPage = location.pathname === "/login"; // Verifica si estamos en la página de login

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      {/* Ocultar el botón en la página de Login */}
      {!isLoginPage && (
        <div className="flex items-center space-x-3">
          <button
            className="text-white bg-blue-500 p-2 rounded-md"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {sidebarVisible ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-xl font-bold">Club Atlético Boulogne</h1>
        </div>
      )}

      {/* Ocultar Home y Login en la página de Login */}
      {!isLoginPage && (
        <div className="space-x-4 flex items-center">
          <Link to="/dashboard" className="flex items-center hover:underline">
            <Home size={20} className="mr-1" />
          </Link>
          {!user ? (
            <Link to="/login" className="hover:underline">Login</Link>
          ) : (
            <button onClick={logout} className="flex items-center bg-red-500 px-3 py-1 rounded">
              <LogOut size={20} className="mr-1" />
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
