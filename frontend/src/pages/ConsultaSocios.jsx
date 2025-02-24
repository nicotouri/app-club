import React, { useContext, useEffect, useState } from "react";
import { SociosContext } from "../context/SociosContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ConsultaSocios = () => {
  const { socios, actualizarSocio } = useContext(SociosContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [busquedaDNI, setBusquedaDNI] = useState("");
  const [busquedaGeneral, setBusquedaGeneral] = useState("");
  const [socioSeleccionado, setSocioSeleccionado] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Filtrado por DNI y búsqueda general
  const sociosFiltrados = socios.filter((socio) =>
    (busquedaDNI ? socio.dni.includes(busquedaDNI) : true) &&
    (busquedaGeneral
      ? Object.values(socio).some((valor) =>
          valor?.toString().toLowerCase().includes(busquedaGeneral.toLowerCase())
        )
      : true)
  );

  // Abrir modal de edición o vista
  const handleEdit = (socio) => {
    setSocioSeleccionado({ ...socio });
    setModoEdicion(true);
  };

  const handleView = (socio) => {
    setSocioSeleccionado({ ...socio });
    setModoEdicion(false);
  };

  // Guardar cambios en socio
  const handleSave = () => {
    actualizarSocio(socioSeleccionado);
    setModoEdicion(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-10 bg-gray-100">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Consulta de Socios</h1>

        {/* Campos de búsqueda */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Buscar por DNI"
            className="p-2 border rounded w-1/4"
            value={busquedaDNI}
            onChange={(e) => setBusquedaDNI(e.target.value)}
          />
          <input
            type="text"
            placeholder="Búsqueda general..."
            className="p-2 border rounded w-1/2"
            value={busquedaGeneral}
            onChange={(e) => setBusquedaGeneral(e.target.value)}
          />
        </div>

        {/* Tabla de socios */}
        <div className="overflow-x-auto bg-white p-5 shadow-md rounded-lg">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border p-2">Nombre</th>
                <th className="border p-2">DNI</th>
                <th className="border p-2">Tel. Celular</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {sociosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-4 text-gray-500">No hay socios registrados.</td>
                </tr>
              ) : (
                sociosFiltrados.map((socio) => (
                  <tr key={socio.id} className="border hover:bg-gray-100">
                    <td className="border p-2">{socio.nombre} {socio.apellido}</td>
                    <td className="border p-2">{socio.dni}</td>
                    <td className="border p-2">{socio.telefonoCelular || "N/A"}</td>
                    <td className="border p-2">{socio.email || "N/A"}</td>
                    <td className="border p-2 flex space-x-2">
                      <button onClick={() => handleView(socio)} className="bg-green-500 text-white px-3 py-1 rounded">Ver</button>
                      <button onClick={() => handleEdit(socio)} className="bg-yellow-500 text-white px-3 py-1 rounded">Editar</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal para Ver/Editar Socio */}
      {socioSeleccionado && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
              {modoEdicion ? "Editar Socio" : "Ver Socio"}
            </h2>

            <div className="space-y-4">
              {/* Datos personales */}
              <fieldset className="border p-4 rounded-lg">
                <legend className="text-lg font-semibold text-blue-600">Datos Personales</legend>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "nombre", "apellido", "dni", "fechaNacimiento", "genero",
                    "telefonoCelular", "telefonoFijo", "email"
                  ].map((campo) => (
                    <input
                      key={campo}
                      type="text"
                      name={campo}
                      value={socioSeleccionado[campo] || ""}
                      onChange={(e) => setSocioSeleccionado({ ...socioSeleccionado, [campo]: e.target.value })}
                      readOnly={!modoEdicion}
                      className="w-full p-2 border rounded mt-2"
                      placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
                    />
                  ))}
                </div>
              </fieldset>

              {/* Dirección */}
              <fieldset className="border p-4 rounded-lg">
                <legend className="text-lg font-semibold text-blue-600">Dirección</legend>
                <div className="grid grid-cols-2 gap-4">
                  {["calle", "altura", "ciudad", "partido"].map((campo) => (
                    <input
                      key={campo}
                      type="text"
                      name={campo}
                      value={socioSeleccionado[campo] || ""}
                      onChange={(e) => setSocioSeleccionado({ ...socioSeleccionado, [campo]: e.target.value })}
                      readOnly={!modoEdicion}
                      className="w-full p-2 border rounded mt-2"
                      placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
                    />
                  ))}
                </div>
              </fieldset>

              {/* Salud */}
              <fieldset className="border p-4 rounded-lg">
                <legend className="text-lg font-semibold text-blue-600">Salud</legend>
                <div className="grid grid-cols-2 gap-4">
                  {["obraSocial", "numeroAfiliado"].map((campo) => (
                    <input
                      key={campo}
                      type="text"
                      name={campo}
                      value={socioSeleccionado[campo] || ""}
                      onChange={(e) => setSocioSeleccionado({ ...socioSeleccionado, [campo]: e.target.value })}
                      readOnly={!modoEdicion}
                      className="w-full p-2 border rounded mt-2"
                      placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
                    />
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Botones */}
            <div className="flex justify-end space-x-2 mt-4">
              <button onClick={() => setSocioSeleccionado(null)} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar</button>
              {modoEdicion && (
                <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultaSocios;
