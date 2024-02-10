// Home.js
import React, { useState, useEffect } from 'react';
import ListadoCuentas from '../../components/cuenta/ListadoCuentas';
import ListadoTransferenciasHome from '../../components/ListadoTransferenciasHome';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Usuario from '../../components/cuenta/Usuario';
import Saldo from '../../components/cuenta/Saldo';
import axios from 'axios';
import Cookies  from 'universal-cookie';

const cookies = new Cookies();

const Home = () => {
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);
  const [nombreCliente, setNombreCliente] = useState('');

  const handleCuentaSeleccionada = (cuenta) => {
    setCuentaSeleccionada(cuenta);
  };

  const handleNombreClienteChange = (nombre) => {
    setNombreCliente(nombre);
  };

  useEffect(() => {
    if (cuentaSeleccionada) {
      // Actualizamos el nombre del cliente cuando cambia la cuenta seleccionada
      getNombreCliente(cuentaSeleccionada);
    }
  }, [cuentaSeleccionada]);

  const getNombreCliente = async (cuenta) => {
    try {
      const response = await axios.get(`https://localhost:7042/Cliente/clientes/ObtenerNombreClientePorCuenta/${cuenta}`);
      setNombreCliente(response.data.nombreCliente);
    } catch (error) {
      console.log("Error al obtener información del nombre del cliente", error);
    }
  };

    console.log("Valor de la cookie: ", cookies.get('cuitCuil'));

  return (
    <div>
      <h1>Esta es la página de Home</h1>

      <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <Usuario cuentaSeleccionada={cuentaSeleccionada} />
            <div className='row align-items-center'>
              <div className='col-6'>
                <p className="fs-3">{cuentaSeleccionada ? `Cuenta N° ${cuentaSeleccionada}` : 'Selecciona una cuenta'}</p>
              </div>
              <div className='col-5' style={{ marginLeft: 'auto', marginRight: '10px' }}>
                <ListadoCuentas onCuentaSeleccionada={handleCuentaSeleccionada} />
              </div>
            </div>
            <div className='border border-primary mt-3 mb-3'>
              <div className='ml-5'>
                <Saldo cuentaSeleccionada={cuentaSeleccionada} />
              </div>
            </div>
          </div>
          <div className='col-4 offset-9' style={{ display: 'inline-block' }}>
            <div className="mb-4 justify-content-center">
              <p style={{ display: 'inline-block', marginRight: '10px' }}>Act. Reciente</p>
              <Link to={`/screens/home/ActividadReciente?cuenta=${cuentaSeleccionada}`}>
                <Button variant="primary" size="lg" style={{ marginLeft: 1 + 'px', display: 'inline-block' }}>
                  Ver todos
                </Button>
              </Link>
              {/* <Link to={`/screens/transferencia/Transferencia?cuenta=${cuentaSeleccionada}`}>
                <Button variant="primary" size="lg" style={{ marginLeft: 1 + 'px', display: 'inline-block' }}>
                  Ver todos
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className='container text-center'>
        <ListadoTransferenciasHome maxToShow={3} cuentaSeleccionada={cuentaSeleccionada} />
      </div>
    </div>
  );
}

export default Home;
