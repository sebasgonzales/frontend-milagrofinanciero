import React from 'react'
import PostContactos from '../../components/postContactos'
import Navbar from '../../components/navegacion/navbar';


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