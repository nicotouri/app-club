
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-blue-600">Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        className="mt-4 p-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="mt-2 p-2 border rounded-md"
      />
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Entrar
      </button>
    </div>
  );
};

export default Login;
