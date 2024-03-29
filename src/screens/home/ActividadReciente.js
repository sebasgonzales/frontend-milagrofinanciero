import React from 'react'
import ListadoTransferencias from '../../components/transferencia/ListadoTransferencias';
import Navbar from '../../components/navegacion/navbarHome';
import Cookies  from 'universal-cookie';

const ActividadReciente = () => {

  const cookies = new Cookies();
  const cuentaSeleccionada = cookies.get('cuentaSeleccionada');
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