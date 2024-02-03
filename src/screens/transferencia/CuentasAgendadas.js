import React from 'react'
import ListadoContactos from '../../components/ListadoContactos'
import AgregarCuenta from './AgregarCuenta'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const CuentasAgendadas = () => {
  return (
    <div>
      <h1>Esta es la pagina de CuentasAgendadas</h1>
      <div className='container text-left'>

        <div className="text-center">
          <div className="mb-4 justify-content-center">
            <Link to="/screens/transferencia/AgregarCuenta">
              <Button variant="primary" size="lg" style={{ marginLeft: 5 + 'px' }}>
                AgregarCuenta
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='container text-center'>
        <ListadoContactos></ListadoContactos>
      </div>
    </div>

  )
}

export default CuentasAgendadas