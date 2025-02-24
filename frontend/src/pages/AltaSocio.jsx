import React, { useContext, useState, useEffect } from "react";
import { SociosContext } from "../context/SociosContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Info } from "lucide-react"; // Importamos el ícono de información

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
    genero: "",
    telefonoCelular: "",
    telefonoFijo: "",
    email: "",
    calle: "",
    altura: "",
    ciudad: "",
    partido: "",
    obraSocial: "",
    numeroAfiliado: "",
    grupoFamiliar: false,
    numeroSocio: "",
    tipoSocio: "Activo",
    fechaAlta: new Date().toISOString().split("T")[0],
    vencimientoCuota: "",
    foto: null,
    documentacion: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setNuevoSocio({ ...nuevoSocio, [name]: checked });
    } else if (type === "file") {
      setNuevoSocio({ ...nuevoSocio, [name]: files[0] });
    } else {
      setNuevoSocio({ ...nuevoSocio, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarSocio(nuevoSocio);
    navigate("/consulta-socios");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 flex items-center justify-center bg-gray-100 p-5">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Alta de Socio</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Sección: Datos Personales */}
            <fieldset className="border p-4 rounded-lg">
              <legend className="text-lg font-semibold text-blue-600">Datos Personales</legend>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <input type="text" name="nombre" placeholder="Nombre" value={nuevoSocio.nombre} onChange={handleChange} className="w-full p-2 border rounded" required />
                <input type="text" name="apellido" placeholder="Apellido" value={nuevoSocio.apellido} onChange={handleChange} className="w-full p-2 border rounded" required />
                <input type="text" name="dni" placeholder="DNI" value={nuevoSocio.dni} onChange={handleChange} className="w-full p-2 border rounded" required />
                
                {/* Fecha de Nacimiento con Floating Label y Tooltip */}
                <div className="relative flex items-center">
                  <input type="date" name="fechaNacimiento" value={nuevoSocio.fechaNacimiento} onChange={handleChange} className="w-full p-2 border rounded peer" required />
                  <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                  </label>
                  
                  {/* Tooltip de Información */}
                  <div className="relative group ml-2">
                    <Info size={18} className="text-blue-500 cursor-pointer" />
                    <div className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-40 bg-black text-white text-xs rounded py-1 px-2 shadow-lg">
                      Ingrese la fecha de nacimiento en formato AAAA-MM-DD.
                    </div>
                  </div>
                </div>

                <select name="genero" value={nuevoSocio.genero} onChange={handleChange} className="w-full p-2 border rounded">
                  <option value="">Selecciona el género</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
                <input type="text" name="email" placeholder="Email" value={nuevoSocio.email} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>
            </fieldset>

            {/* Sección: Dirección */}
            <fieldset className="border p-4 rounded-lg">
              <legend className="text-lg font-semibold text-blue-600">Dirección</legend>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <input type="text" name="calle" placeholder="Calle" value={nuevoSocio.calle} onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="altura" placeholder="Altura" value={nuevoSocio.altura} onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="ciudad" placeholder="Ciudad" value={nuevoSocio.ciudad} onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="partido" placeholder="Partido" value={nuevoSocio.partido} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>
            </fieldset>

            {/* Sección: Salud */}
            <fieldset className="border p-4 rounded-lg">
              <legend className="text-lg font-semibold text-blue-600">Salud</legend>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <input type="text" name="obraSocial" placeholder="Obra Social" value={nuevoSocio.obraSocial} onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="numeroAfiliado" placeholder="Número de Afiliado" value={nuevoSocio.numeroAfiliado} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>
            </fieldset>

            {/* Sección: Documentos */}
            <fieldset className="border p-4 rounded-lg">
              <legend className="text-lg font-semibold text-blue-600">Documentos</legend>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <label className="block">
                  <span className="text-gray-700">Foto:</span>
                  <input type="file" name="foto" onChange={handleChange} className="w-full p-2 border rounded" />
                </label>
                <label className="block">
                  <span className="text-gray-700">Documentación:</span>
                  <input type="file" name="documentacion" onChange={handleChange} className="w-full p-2 border rounded" />
                </label>
              </div>
            </fieldset>

            {/* Botón de Envío */}
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">Registrar Socio</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AltaSocio;
