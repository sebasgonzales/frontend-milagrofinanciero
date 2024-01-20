import React from 'react'
import ListadoTransferencias from '../../components/ListadoTransferencias'
import NuevaTransferencia from './NuevaTransferencia'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Transferencia = () => {
  return (
    <div>

      <h1>Esta es la pagina de Transferencia</h1>

      <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <p class="fs-3">Cuenta N° 123456789</p>
          </div>
          <div className="text-center">
          <div className="mb-4 justify-content-center">
          <Link to="/screens/transferencia/NuevaTransferencia"> 
        <Button variant="primary " size="lg" style={{marginRight: 5 + 'px'}}>
          Nueva Transferencia
        </Button>
        </Link>{' '}
        <Link to="/screens/transferencia/SolicitarPago"> 
        <Button variant="primary" size="lg" style={{marginLeft: 5 + 'px'}}>
          Solicitar Pago
        </Button>
        </Link>
      </div>
      </div>
        </div>
      </div>
      
      <div className='container text-center'>
        <ListadoTransferencias></ListadoTransferencias>
      </div>

    </div>
  )
}

export default Transferencia