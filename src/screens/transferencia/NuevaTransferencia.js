import React from 'react'
import PostTransferencia from '../../components/transferencia/postTransferencia';
import Navbar from '../../components/navegacion/navbarHome';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
//valor de la cookie
const cuentaSeleccionada = cookies.get('cuentaSeleccionada');
const NuevaTransferencia = () => {
    return (
        <div>
          <Navbar></Navbar>
            <h1>Esta es la pagina de NuevaTransferencia</h1>
            <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <p className="fs-3">{`Cuenta N° ${cuentaSeleccionada}`}</p>
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