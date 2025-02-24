import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de login exitoso con usuario fijo
    const userData = { username: credentials.username, role: "admin" };
    login(userData);
    navigate("/dashboard"); // Redirigir después de loguearse
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input type="text" name="username" placeholder="Usuario" value={credentials.username} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Contraseña" value={credentials.password} onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
