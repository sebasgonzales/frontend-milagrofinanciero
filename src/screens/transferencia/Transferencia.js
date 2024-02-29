// Transferencia.js
import React from 'react';
import ListadoTransferencias from '../../components/transferencia/ListadoTransferencias';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/navegacion/navbarHome';
import Cookies from 'universal-cookie';

//cookies

//

const Transferencia = () => {
  const cookies = new Cookies();
  const cuentaSeleccionada = cookies.get('cuentaSeleccionada');

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
              <Link to="/MilagroFinanciero/Transferencia/NuevaTransferencia">
                <Button className="button" variant="primary" size="lg" style={{ marginRight: '5px' }}>
                  Nueva Transferencia
                </Button>
              </Link>
              <Link to="/MilagroFinanciero/Transferencia/SolicitarPago">
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
