import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MiCuenta = ({ onCuentaSeleccionada }) => {
  const [nombreCliente, setNombreCliente] = useState('');
  const [clienteCuentas, setClienteCuentas] = useState([]);
  const [selectedCuentas, setSelectedCuentas] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7042/Cliente/clientes/RazonSocial/deamon16/Cliente')
      .then((result) => {
        setNombreCliente(result.data.razonSocial);
      })
      .catch((error) => {
        console.log("Error al obtener la información del cliente");
      });

    axios.get('https://localhost:7042/clientexcuenta/cliente/deamon16')
      .then((result) => {
        setClienteCuentas(result.data);
      })
      .catch((error) => {
        console.log("Error al obtener la información de las cuentas");
      });
  }, []);

  const handleCuentaSeleccionada = (cuenta) => {
    const updatedSelectedCuentas = [...selectedCuentas];
    const index = updatedSelectedCuentas.indexOf(cuenta.numeroCuenta);

    if (index === -1) {
      updatedSelectedCuentas.push(cuenta.numeroCuenta);
    } else {
      updatedSelectedCuentas.splice(index, 1);
    }

    setSelectedCuentas(updatedSelectedCuentas);
    onCuentaSeleccionada(updatedSelectedCuentas);
  };

  const handleNuevaCuenta = () => {
    console.log("Crear nueva cuenta");
    // Agrega la lógica para crear una nueva cuenta
  };

  return (
    <div className="mi-cuenta-container">
      <div className="mi-cuenta-left">
        <h1>{nombreCliente}</h1>
        <h2>Mis Cuentas</h2>
      </div>

      <div className="mi-cuenta-right">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {clienteCuentas.map((cuenta, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Número de Cuenta: {cuenta.numeroCuenta}</p>
                  <p>Saldo: {cuenta.saldo}</p>
                </div>
                <input
                  type="checkbox"
                  checked={selectedCuentas.includes(cuenta.numeroCuenta)}
                  onChange={() => handleCuentaSeleccionada(cuenta)}
                />
              </div>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary mb-3" onClick={handleNuevaCuenta}>
          Nueva Cuenta
        </button>
      </div>
    </div>
  );
};

export default MiCuenta;
