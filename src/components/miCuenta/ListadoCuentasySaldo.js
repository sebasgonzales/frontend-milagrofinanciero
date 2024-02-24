import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getSaldoDeCuentas } from '../../api/getData';

const ListadoCuentasySaldo = ({ numeroCuenta, cbu, tipoCuenta }) => {
  const [saldo, setSaldo] = useState(null);
  //const [rol, setRol] = useState(null);

  useEffect(() => {
    getSaldoDeCuentas(numeroCuenta, setSaldo)
    // handleObtenerRolDeCuentas(numeroCuenta)
  }, [numeroCuenta]);



  return (
    <div className='bg-white p-5 m-2 shadow rounded-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h3>Numero de cuenta: {numeroCuenta}</h3>
          <h5>Saldo: ${saldo !== null ? saldo : 'Cargando saldo...'}</h5>
          <h5>CBU: {cbu} </h5>
          <h5>Tipo de Cuenta: {tipoCuenta}</h5>
          {/* <h5>Rol: {rol ? 'Titular' : 'Extensión'}</h5> */}
        </div>
      </div>
    </div>
  );
};
export default ListadoCuentasySaldo;