import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoCuentasySaldo = ({ numeroCuenta, cbu, tipoCuenta }) => {
  const [saldo, setSaldo] = useState(null);
  //const [rol, setRol] = useState(null);

  useEffect(() => {
    handleObtenerSaldoDeCuentas(numeroCuenta);
    // handleObtenerRolDeCuentas(numeroCuenta)
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
  /*const handleObtenerRolDeCuentas = (numeroCuenta) => {
    axios.get(`https://localhost:7042/Cuenta/cuentas/Numero/${numeroCuenta}/Rol`)

      .then((result) => {
        // const rolTitular = result.data.map(rol => rol.titular);
        console.log(result.data.titular)
        setRol(result.data.titular);
      })
      .catch((error) => {
        console.log("Error al obtener la información de las cuentas");
      });
  }*/


  return (
    <div className='bg-white p-5 m-2 shadow rounded-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h3>Numero de cuenta: {numeroCuenta}</h3>
          <h5>Saldo: {saldo !== null ? saldo : 'Cargando saldo...'}</h5>
          <h5>CBU: {cbu} </h5>
          <h5>Tipo de Cuenta: {tipoCuenta}</h5>
          {/* <h5>Rol: {rol ? 'Titular' : 'Extensión'}</h5> */}
        </div>
      </div>
    </div>
  );
};
export default ListadoCuentasySaldo;