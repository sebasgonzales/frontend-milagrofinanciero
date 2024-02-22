// Transferencia.js
import React from 'react';
import ListadoTransferencias from '../../components/transferencia/ListadoTransferencias';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/navegacion/navbarHome';
import Cookies  from 'universal-cookie';

//cookies
const cookies = new Cookies();
const cuentaSeleccionada = cookies.get('cuentaSeleccionada');
//

const Transferencia = () => {
  // const location = useLocation();
  // const cuentaSeleccionada = new URLSearchParams(location.search).get("cuenta");
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
                <Button variant="primary " size="lg" style={{ marginRight: 5 + 'px' }}>
                  Nueva Transferencia
                </Button>
              </Link>
              <Link to="/MilagroFinanciero/Transferencia/SolicitarPago">
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
