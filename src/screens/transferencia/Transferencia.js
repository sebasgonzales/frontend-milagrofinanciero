import React from 'react'
import ListadoTransferencias from './ListadoTransferencias'
import NuevaTransferencia from './NuevaTransferencia'
const Transferencia = () => {
  return (
    <div>

      <h1>Esta es la pagina de Transferencia</h1>

      <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <p class="fs-3">Cuenta N° 123456789</p>

          </div>
        </div>
      </div>
      <div className='container text-center'>
        <ListadoTransferencias></ListadoTransferencias>
        <NuevaTransferencia></NuevaTransferencia>
      </div>

    </div>
  )
}

export default Transferencia