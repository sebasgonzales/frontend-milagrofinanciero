import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Usuario = () => {
  const [usuario, setUsuario] = useState('');

  const getUsuario = async (username) => {
    try {
      const response = await axios.get(`https://localhost:7042/Cliente/clientes/RazonSocial/${username}/Cliente`);
      setUsuario(response.data.razonSocial);
    } catch (error) {
      console.log("Error al obtener información del usuario", error);
    }
  };

  useEffect(() => {
    getUsuario('deamon16');
  }, []); // Asegúrate de invocar la función cuando el componente se monta

  return (
    <div className="usuario">
      <h1>Bienvenido {usuario}</h1>
    </div>
  );
}

export default Usuario;
