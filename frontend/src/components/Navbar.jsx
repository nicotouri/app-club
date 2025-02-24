import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold"></h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        {!user ? (
          <Link to="/login" className="hover:underline">Login</Link>
        ) : (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
