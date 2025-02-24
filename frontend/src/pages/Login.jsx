import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-blue-600">Iniciar Sesión</h1>
      <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          className="p-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="p-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
