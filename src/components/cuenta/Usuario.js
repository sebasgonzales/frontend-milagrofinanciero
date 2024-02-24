import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { getUsuario } from '../../api/getData';



const Usuario = ({ cuentaSeleccionada }) => {
  const [usuario, setUsuario] = useState('');
  const cookie = new Cookies();

  const cuitCuil = cookie.get('cuitCuil');
 
  useEffect(() => { 
    getUsuario(cuitCuil, setUsuario); 
  }, []);

  return (

    <div className="usuario">
      <h1>Bienvenido {usuario}! </h1>
    </div>
  );
}

export default Usuario;
