import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Saldo = ({ cuentaSeleccionada }) => {
  const [saldo, setSaldo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerSaldoPorCuenta = async (nroCuenta) => {
      try {
          const response = await axios.get(`https://localhost:7042/Transaccion/saldo/${nroCuenta}`);
          setSaldo(response.data.saldoTotal);
      } catch (error) {
          setError("Error al obtener el saldo");
      } finally {
          setIsLoading(false);
      }
  };

  useEffect(() => {
      if (cuentaSeleccionada) {
          obtenerSaldoPorCuenta(cuentaSeleccionada);
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
