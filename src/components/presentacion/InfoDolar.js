import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfoDolar = ({ nombre }) => {
  const [datosDolar, setDatosDolar] = useState({ compra: 'Loading...', venta: 'Loading...' });

  useEffect(() => {
    const obtenerDatosDolar = async () => {
      try {
        const response = await axios.get('https://dolarapi.com/v1/dolares');
        const dolarEncontrado = response.data.find(dolar => dolar.casa === nombre);

        if (dolarEncontrado) {
          setDatosDolar({
            compra: dolarEncontrado.compra,
            venta: dolarEncontrado.venta,
          });
        } else {
          console.error(`No se encontraron datos para el tipo de dólar: ${nombre}`);
        }
      } catch (error) {
        console.error('Error al obtener los datos del dólar:', error.message);
      }
    };

    obtenerDatosDolar();
  }, [nombre]);

  return (
    <div>
      <p>Compra: ${datosDolar.compra}</p>
      <p>Venta: ${datosDolar.venta}</p>
    </div>
  );
};

export default InfoDolar;
