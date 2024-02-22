import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfoDolar = ({ nombre }) => {
  const [datosDolar, setDatosDolar] = useState({ compra: 'Loading...', venta: 'Loading...' });

  useEffect(() => {
    const obtenerDatosDolar = async () => {
      try {
        const response = await axios.get('https://dolarapi.com/v1/dolares');
        const dolarEncontrado = response.data.find(dolarEncontrado => dolarEncontrado.casa === nombre);
        console.log( response.data[0].casa)
        // Busca el dato correspondiente al nombre proporcionado


        if (dolarEncontrado) {
          setDatosDolar({
            compra: dolarEncontrado.casa.compra,
            venta: dolarEncontrado.casa.venta,
          });
        } else {
          console.error(`No se encontraron datos para el tipo de dólar: ${nombre}`);
        }
        console.log(dolarEncontrado)
      } catch (error) {
        console.error('Error al obtener los datos del dólar:', error.message);
      }
    };

    obtenerDatosDolar();
  }, [nombre]);

  return (
    <div>
      <p>Compra: {datosDolar.compra}</p>
      <p>Venta: {datosDolar.venta}</p>
    </div>
  );
};

export default InfoDolar;
