import React, { useContext, useState } from "react";
import { SociosContext } from "../context/SociosContext";

const Socios = () => {
  const { socios, agregarSocio, eliminarSocio, editarSocio } = useContext(SociosContext);
  const [nuevoSocio, setNuevoSocio] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fechaNacimiento: "",
    genero: "",
    email: "",
    telefonoCelular: "",
    telefonoFijo: "",
    calle: "",
    altura: "",
    ciudad: "",
    partido: "",
    numeroSocio: "",
    fechaAlta: "",
    vencimientoCuota: "",
    tipoSocio: "",
    grupoFamiliar: false,
    nombreObraSocial: "",
    numeroAfiliado: "",
    tieneUsuario: false,
    usuario: "",
  });

  const handleChange = (e) => {
    setNuevoSocio({ ...nuevoSocio, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarSocio(nuevoSocio);
    setNuevoSocio({
      nombre: "",
      apellido: "",
      dni: "",
      fechaNacimiento: "",
      genero: "",
      email: "",
      telefonoCelular: "",
      telefonoFijo: "",
      calle: "",
      altura: "",
      ciudad: "",
      partido: "",
      numeroSocio: "",
      fechaAlta: "",
      vencimientoCuota: "",
      tipoSocio: "",
      grupoFamiliar: false,
      nombreObraSocial: "",
      numeroAfiliado: "",
      tieneUsuario: false,
      usuario: "",
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-blue-600">Gestión de Socios</h1>

      <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-2 gap-4">
        <input type="text" name="nombre" placeholder="Nombre" value={nuevoSocio.nombre} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="apellido" placeholder="Apellido" value={nuevoSocio.apellido} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="dni" placeholder="DNI" value={nuevoSocio.dni} onChange={handleChange} className="p-2 border rounded" required />
        <input type="date" name="fechaNacimiento" value={nuevoSocio.fechaNacimiento} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="telefonoCelular" placeholder="Tel. Celular" value={nuevoSocio.telefonoCelular} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="telefonoFijo" placeholder="Tel. Fijo" value={nuevoSocio.telefonoFijo} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="email" placeholder="Email" value={nuevoSocio.email} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="calle" placeholder="Calle" value={nuevoSocio.calle} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="altura" placeholder="Altura" value={nuevoSocio.altura} onChange={handleChange} className="p-2 border rounded" />
        <button type="submit" className="col-span-2 px-4 py-2 bg-green-500 text-white rounded">Agregar Socio</button>
      </form>
    </div>
  );
};

export default Socios;
