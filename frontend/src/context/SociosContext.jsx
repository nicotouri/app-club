import React, { createContext, useState } from "react";

export const SociosContext = createContext();

export const SociosProvider = ({ children }) => {
  const [socios, setSocios] = useState([
    { id: 1, nombre: "Juan", apellido: "Pérez", dni: "12345678", telefonoCelular: "1122334455", email: "juan.perez@email.com", tipoSocio: "Activo" },
    { id: 2, nombre: "Ana", apellido: "Gómez", dni: "87654321", telefonoCelular: "1133445566", email: "ana.gomez@email.com", tipoSocio: "Moroso" },
    { id: 3, nombre: "Carlos", apellido: "López", dni: "11223344", telefonoCelular: "1144556677", email: "carlos.lopez@email.com", tipoSocio: "Baja" },
    { id: 4, nombre: "María", apellido: "Fernández", dni: "99887766", telefonoCelular: "1155667788", email: "maria.fernandez@email.com", tipoSocio: "Activo" },
  ]);

  return (
    <SociosContext.Provider value={{ socios }}>
      {children}
    </SociosContext.Provider>
  );
};
