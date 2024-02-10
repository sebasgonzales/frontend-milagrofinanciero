import React , { useState }from 'react'

import axios from 'axios';
//import PostTransferencia from '../../components/postTransferencia';
import PostTransferenciaV2 from '../../components/postTransferenciaV2';
import Navbar from '../../components/navegacion/navbar';

const NuevaTransferencia = () => {
    return (
        <div>
          <Navbar></Navbar>
            <h1>Esta es la pagina de NuevaTransferencia</h1>
            <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <p class="fs-3">Cuenta N° 123456789</p>

          </div>
        </div>
      </div>
      <div className='container text-center'>
        <PostTransferenciaV2></PostTransferenciaV2>
      </div>

        </div>
    )
}
export default NuevaTransferencia;