import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoCuentasYSaldo = ({ numeroCuenta }) => {
    const [saldo, setSaldo] = useState(null);
  
    useEffect(() => {
      handleObtenerSaldoDeCuentas(numeroCuenta);
    }, [numeroCuenta]);
  
    const handleObtenerSaldoDeCuentas = (numeroCuenta) => {
      axios.get(`https://localhost:7042/Transaccion/saldo/${numeroCuenta}`)
        .then((result) => {
          setSaldo(result.data.saldoTotal);
        })
        .catch((error) => {
          console.log("Error al obtener la información de las cuentas");
        });
    }
  
    return (
      <div className='bg-white p-5 m-2 shadow rounded-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Numero de cuenta: {numeroCuenta}</h3>
            <h5>Saldo: {saldo !== null ? saldo : 'Cargando saldo...'}</h5>
          </div>
          <div className='col'>
            <div className='btn btn-primary'>
              Accion
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ListadoCuentasYSaldo;