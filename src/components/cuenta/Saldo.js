// Saldo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Saldo = ({ cuentaSeleccionada }) => {
  const [saldo, setSaldo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSaldo = async (cuentaSeleccionada) => {
    try {
      const response = await axios.get(`https://localhost:7042/Transaccion/saldo/${cuentaSeleccionada}`);
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
