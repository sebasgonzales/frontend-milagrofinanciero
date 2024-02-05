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

  if (isLoading) {
    return <p>Cargando saldo...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='sal'>
      <p>$ {saldo}</p>
    </div>
  );
};

export default Saldo;
