import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const cuitCuil = cookie.get('cuitCuil');

const Usuario = ({ cuentaSeleccionada }) => {
  const [usuario, setUsuario] = useState('');
  
  const getUsuario = async (cuitCuil) => {
    try {
      // Ajustada la Logica
      const response = await axios.get(`https://localhost:7042/Cliente/clientes/Nombre/${cuitCuil}/Cliente`);
      console.log(response.data)
      setUsuario(response.data);
    } catch (error) {
      console.log("Error al obtener información del usuario", error);
    }
  };

  // useEffect(() => {
  //   if (cuentaSeleccionada) {
  //     getUsuario('deamon16');
  //   }
  // }, [cuentaSeleccionada]); // Asegúrate de invocar la función cuando la cuenta seleccionada cambie

   useEffect(() => {     getUsuario(cuitCuil);   }, []);

  return (
    // NO DEUVLEVE EL USUARIO PQ SE HACE EL LOGIN
    // REVISAR CUANDO ESTE EL LOGIN
    <div className="usuario">
      <h1>Bienvenido/a {usuario}</h1>
    </div>
  );
}

export default Usuario;
