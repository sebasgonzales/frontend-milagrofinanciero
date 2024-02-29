import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const ListadoCuentasySaldo = ({ numeroCuenta, cbu, tipoCuenta }) => {
  const cookies = new Cookies()
  const [saldo, setSaldo] = useState(null);
  //const [rol, setRol] = useState(null);
  const token = cookies.get('token')
  useEffect(() => {
    handleObtenerSaldoDeCuentas(numeroCuenta);
    // handleObtenerRolDeCuentas(numeroCuenta)
  }, [numeroCuenta]);

  const handleObtenerSaldoDeCuentas = (numeroCuenta) => {
    axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Transaccion/saldo/${numeroCuenta}`, {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  })
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
          <h5>Saldo: ${saldo !== null ? saldo : 'Cargando saldo...'}</h5>
          <h5>CBU: {cbu} </h5>
          <h5>Tipo de Cuenta: {tipoCuenta}</h5>
        </div>
      </div>
    </div>
  );
};
export default ListadoCuentasySaldo;