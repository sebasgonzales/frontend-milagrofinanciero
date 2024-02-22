import React from 'react'
import ListadoTransferencias from '../../components/transferencia/ListadoTransferencias';
import {useLocation} from 'react-router-dom';
import Navbar from '../../components/navegacion/navbarHome';

const ActividadReciente = () => {
  const location = useLocation();
  const cuentaSeleccionada = new URLSearchParams(location.search).get("cuenta");

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1>Esta es la pagina de Actividad reciente</h1>
      </div>
      <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <p className="fs-3">Cuenta N° {cuentaSeleccionada}</p>
          </div>
        </div>
      </div>

      <div className='container text-center'>
        <ListadoTransferencias cuentaSeleccionada={cuentaSeleccionada} />
      </div>
    </div>
    
  )
}

export default ActividadReciente