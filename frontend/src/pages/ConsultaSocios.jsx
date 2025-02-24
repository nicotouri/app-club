import React, { useContext, useEffect } from "react";
import { SociosContext } from "../context/SociosContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Importamos la Sidebar

const ConsultaSocios = () => {
  const { socios } = useContext(SociosContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar agregada */}

      {/* Contenido Principal */}
      <main className="flex-1 p-10 bg-gray-100">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Consulta de Socios</h1>
        <div className="overflow-x-auto bg-white p-5 shadow-md rounded-lg">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border p-2">Nombre</th>
                <th className="border p-2">DNI</th>
                <th className="border p-2">Tel. Celular</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Tipo de Socio</th>
              </tr>
            </thead>
            <tbody>
              {socios.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-4 text-gray-500">No hay socios registrados.</td>
                </tr>
              ) : (
                socios.map((socio) => (
                  <tr key={socio.id} className="border hover:bg-gray-100">
                    <td className="border p-2">{socio.nombre} {socio.apellido}</td>
                    <td className="border p-2">{socio.dni}</td>
                    <td className="border p-2">{socio.telefonoCelular || "N/A"}</td>
                    <td className="border p-2">{socio.email || "N/A"}</td>
                    <td className="border p-2">{socio.tipoSocio}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ConsultaSocios;
