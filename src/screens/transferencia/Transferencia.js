// Transferencia.js
import React from 'react';
import ListadoTransferencias from '../../components/ListadoTransferencias';
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/navegacion/navbar';

const Transferencia = () => {
  const location = useLocation();
  const cuentaSeleccionada = new URLSearchParams(location.search).get("cuenta");

  return (
    <div>
      <Navbar></Navbar>
      <h1>Esta es la página de Transferencia</h1>

      <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <p className="fs-3">Cuenta N° {cuentaSeleccionada}</p>
          </div>
          <div className="text-center">
            <div className="mb-4 justify-content-center">
              <Link to="/screens/transferencia/NuevaTransferencia">
                <Button variant="primary " size="lg" style={{ marginRight: 5 + 'px' }}>
                  Nueva Transferencia
                </Button>
              </Link>
              <Link to="/screens/transferencia/SolicitarPago">
                <Button variant="primary" size="lg" style={{ marginLeft: 5 + 'px' }}>
                  Solicitar Pago
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container text-center'>
        <ListadoTransferencias cuentaSeleccionada={cuentaSeleccionada} />
      </div>
    </div>
  );
}

export default Transferencia;
