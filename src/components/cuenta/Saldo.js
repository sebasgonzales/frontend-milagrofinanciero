// Saldo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
const Saldo = ({ cuentaSeleccionada }) => {
  const cookies = new Cookies();
  const [saldo, setSaldo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = cookies.get('token')
  const getSaldo = async (cuentaSeleccionada) => {
    try {
      const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Transaccion/saldo/${cuentaSeleccionada}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
      setSaldo(response.data.saldoTotal);
    } catch (error) {
      setError("Error al obtener el saldo");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (cuentaSeleccionada) {
      getSaldo(cuentaSeleccionada);
    }
  }, [cuentaSeleccionada]);

  const saldoContainerStyle = {
    // Eliminé la clase "border"
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const saldoAmountStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#008000', // Color verde o el que prefieras
  };

  const saldoLoadingStyle = {
    color: '#0000ff', // Color azul o el que prefieras para el texto de carga
  };

  const saldoErrorStyle = {
    color: '#ff0000', // Color rojo o el que prefieras para el mensaje de error
  };

  return (
    <div style={saldoContainerStyle}>
      {isLoading && <p style={saldoLoadingStyle}>Cargando saldo...</p>}
      {error && <p style={saldoErrorStyle}>{error}</p>}
      {saldo !== null && !isLoading && !error && <p style={saldoAmountStyle}>$ {saldo}</p>}
    </div>
  );
};

export default Saldo;
