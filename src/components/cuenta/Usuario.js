import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Usuario = ({ cuentaSeleccionada }) => {
  const [usuario, setUsuario] = useState('');
  
  const getUsuario = async (username) => {
    try {
      // Puedes ajustar la lógica según cómo se obtiene la información del usuario
      const response = await axios.get(`https://localhost:7042/Cliente/clientes/RazonSocial/${username}/Cliente`);
      console.log(response.data.razonSocial)
      setUsuario(response.data.razonSocial);
    } catch (error) {
      console.log("Error al obtener información del usuario", error);
    }
  };

  // useEffect(() => {
  //   if (cuentaSeleccionada) {
  //     getUsuario('deamon16');
  //   }
  // }, [cuentaSeleccionada]); // Asegúrate de invocar la función cuando la cuenta seleccionada cambie

  useEffect(() => {     getUsuario('deamon16');   }, []);

  return (
    // NO DEUVLEVE EL USUARIO PQ SE HACE EL LOGIN
    // REVISAR CUANDO ESTE EL LOGIN
    <div className="usuario">
      <h1>Bienvenido {usuario}</h1>
    </div>
  );
}

export default Usuario;
