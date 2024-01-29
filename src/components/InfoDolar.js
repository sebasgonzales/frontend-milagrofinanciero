import React, { useState, useEffect } from 'react';

const InfoDolar = ({ nombre }) => {
  const [datosDolar, setDatosDolar] = useState({ compra: 'Loading...', venta: 'Loading...' });

  useEffect(() => {
    const obtenerDatosDolar = async () => {
      try {
        const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const data = await response.json();
        
        // Busca el dato correspondiente al nombre proporcionado
        const dolarEncontrado = data.find(item => item.casa.nombre === nombre);

        if (dolarEncontrado) {
          setDatosDolar({
            compra: dolarEncontrado.casa.compra,
            venta: dolarEncontrado.casa.venta,
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
      <p>Compra: {datosDolar.compra}</p>
      <p>Venta: {datosDolar.venta}</p>
    </div>
  );
};

export default InfoDolar;
