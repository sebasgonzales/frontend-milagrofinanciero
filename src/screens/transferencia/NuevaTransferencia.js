import React , { useState }from 'react'

import axios from 'axios';
import PostTransferencia from '../../components/postTransferencia';

const NuevaTransferencia = () => {
    return (
        <div>
            <h1>Esta es la pagina de NuevaTransferencia</h1>
            <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <p class="fs-3">Cuenta N° 123456789</p>

          </div>
        </div>
      </div>
      <div className='container text-center'>
        <PostTransferencia></PostTransferencia>
      </div>

        </div>
    )
}
export default NuevaTransferencia;