// Home.js
import React, { useState } from 'react';
import ListadoCuentas from '../../components/cuenta/ListadoCuentas';
import ListadoTransferenciasHome from '../../components/transferencia/ListadoTransferenciasHome';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Usuario from '../../components/cuenta/Usuario';
import Saldo from '../../components/cuenta/Saldo';
import Cookies  from 'universal-cookie';
import Navbar from '../../components/navegacion/navbarHome';

const cookies = new Cookies();

const cuitCuil = cookies.get('cuitCuil');

const Home = () => {
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(cookies.get('cuentaSeleccionada') || null);
  // const [nombreCliente, setNombreCliente] = useState('');

  
  const handleCuentaSeleccionada = (cuenta) => {
    setCuentaSeleccionada(cuenta);
    cookies.set('cuentaSeleccionada', cuenta, { path: '/' }); // Almacena la cuentaSeleccionada en una cookie
 
  };

    console.log("Valor de la cookie: ", cuitCuil);
    console.log("Valor de la cookie cuentaSeleccionada : ", cuentaSeleccionada);

  return (
    <div>
      <Navbar></Navbar>
      <h1>Esta es la página de Home</h1>

      <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <h1>Bienvenido <Usuario /></h1>
            {/* <Usuario cuentaSeleccionada={cuentaSeleccionada} /> */}
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
              <Link to={`/MilagroFinanciero/Home/ActividadReciente?cuenta=${cuentaSeleccionada}`}>
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
