import React from 'react'
import ListadoContactos from '../../components/transferencia/ListadoContactos'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/navegacion/navbarHome';

const CuentasAgendadas = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Esta es la pagina de CuentasAgendadas</h1>
      <div className='container text-left'>

        <div className="text-center">
          <div className="mb-4 justify-content-center">
            <Link to="/MilagroFinanciero/Transferencia/AgregarCuenta">
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