import React, { useState, useEffect } from 'react';
import ListadoCuentasYSaldo from '../components/ListadoCuentasYSaldo';
import axios from 'axios';

const MiCuenta = () => {
  const [nombreCliente, setNombreCliente] = useState('');
  const [dataClienteCuentas, setDataClienteCuentas] = useState([]);

  useEffect(() => {
    getDataNombreCliente();
    getDataCuentasCliente();
  }, []);

  const getDataNombreCliente = () => {
    axios.get('https://localhost:7042/Cliente/clientes/Nombre/deamon16/Cliente')
      .then((result) => {
        setNombreCliente(result.data.nombre);
      })
      .catch((error) => {
        console.log("Error al obtener la información del cliente");
      });
  }

  const getDataCuentasCliente = () => {
    axios.get(`https://localhost:7042/Home/Cuentas/deamon16`)
      .then((result) => {
        if (Array.isArray(result.data)) {
          setDataClienteCuentas(result.data);
        } else {
          console.log("La información de las cuentas no es un array");
        }
      })
      .catch((error) => {
        console.log("Error al obtener la información de las cuentas");
      });
  }


  return (
    <div>
      <div className='container mt-5'>
        <div>
          <div className='row'>
            <div className='col'>
              <h1>{nombreCliente}, estas son tus cuentas:</h1>
            </div>
            <div className='col-md-4'>
              <div className='btn btn-primary align-items-right'>
                Nueva Cuenta
              </div>
            </div>
          </div>
          <br></br>
        </div>
        <div className='p-5 shadow rounded-5' style={{ backgroundColor: '#CAF0F8' }}>
          {dataClienteCuentas.map((item, index) => (
            <ListadoCuentasYSaldo key={index} numeroCuenta={item.cuenta} />
          ))}
        </div>
      </div>
    </div>
  );
};



export default MiCuenta;