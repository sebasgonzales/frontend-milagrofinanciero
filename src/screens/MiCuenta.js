import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MiCuenta = ({ onCuentaSeleccionada }) => {
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

  const handleNuevaCuenta = () => {
    console.log("Crear nueva cuenta");
    // Agrega la lógica para crear una nueva cuenta
  };

  return (
    <div>
      <div className='container mt-5'>
        <div>
          <h1>{nombreCliente}, estas son tus cuentas:</h1>
          <br></br>
          <div className='d-flex justify-content-between align-items-right'>
          <div className='btn btn-primary align-items-right'>
            Nueva Cuenta
          </div>
          </div>
          
          <br></br>
        </div>
        <div className='p-5 shadow rounded-5' style={{ backgroundColor: '#CAF0F8' }}>
          {dataClienteCuentas.map((item, index) => (
            <Cuenta key={index} numeroCuenta={item.cuenta} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Cuenta = ({ numeroCuenta }) => {
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

export default MiCuenta;