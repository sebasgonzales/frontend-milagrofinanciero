import React from 'react'
import PostContactos from '../../components/transferencia/postContactos'
import Navbar from '../../components/navegacion/navbarHome';


const AgregarCuenta = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Esta es la pagina de AgregarCuenta</h1>
      <div className='container text-center'>
        <PostContactos></PostContactos>
      </div>
    </div>

  )
}

export default AgregarCuenta;