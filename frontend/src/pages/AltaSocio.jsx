import React, { useContext, useState, useEffect } from "react";
import { SociosContext } from "../context/SociosContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Importamos la Sidebar

const AltaSocio = () => {
  const { agregarSocio } = useContext(SociosContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [nuevoSocio, setNuevoSocio] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fechaNacimiento: "",
    email: "",
    telefonoCelular: "",
    ciudad: "",
    numeroSocio: "",
    tipoSocio: "Activo",
  });

  const handleChange = (e) => {
    setNuevoSocio({ ...nuevoSocio, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarSocio(nuevoSocio);
    navigate("/consulta-socios");
  };

  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar agregada */}

      {/* Contenido Principal */}
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[350px]">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Alta de Socio</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="nombre" placeholder="Nombre" value={nuevoSocio.nombre} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="apellido" placeholder="Apellido" value={nuevoSocio.apellido} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="dni" placeholder="DNI" value={nuevoSocio.dni} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="date" name="fechaNacimiento" value={nuevoSocio.fechaNacimiento} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="email" placeholder="Email" value={nuevoSocio.email} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="text" name="telefonoCelular" placeholder="Tel. Celular" value={nuevoSocio.telefonoCelular} onChange={handleChange} className="w-full p-2 border rounded" />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">Registrar Socio</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AltaSocio;
