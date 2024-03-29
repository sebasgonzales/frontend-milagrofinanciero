import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';



const Usuario = ({ cuentaSeleccionada }) => {
  const [usuario, setUsuario] = useState('');
  const cookie = new Cookies();

const cuitCuil = cookie.get('cuitCuil');
const token = cookie.get('token')
  const getUsuario = async (cuitCuil) => {
    try {
      // Ajustada la Logica.
      const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/clientes/Nombre/${cuitCuil}/Cliente`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
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
    <div className="usuario mt-5" style={{ textAlign: 'left', width: '100%' }}>
      <h1 style={{ fontSize: '36px' }}>Bienvenido {usuario}</h1>
    </div>
  );
  
}

export default Usuario;
