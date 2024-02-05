import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Usuario = ({ cuentaSeleccionada }) => {
  const [usuario, setUsuario] = useState('');

  const getUsuario = async (cuenta) => {
    try {
      // Puedes ajustar la lógica según cómo se obtiene la información del usuario
      const response = await axios.get(`https://localhost:7042/Cliente/clientes/ObtenerUsuarioPorCuenta/${cuenta}`);
      setUsuario(response.data.razonSocial);
    } catch (error) {
      console.log("Error al obtener información del usuario", error);
    }
  };

  useEffect(() => {
    if (cuentaSeleccionada) {
      getUsuario(cuentaSeleccionada);
    }
  }, [cuentaSeleccionada]); // Asegúrate de invocar la función cuando la cuenta seleccionada cambie

  return (
    <div className="usuario">
      <h1>Bienvenido {usuario}</h1>
    </div>
  );
}

export default Usuario;
