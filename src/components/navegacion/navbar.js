import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a class="navbar-brand" href=".">Milagro Financiero</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex justify-content-end">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to='../screens/Home' style={{marginRight: 50 + 'px'}}>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className=" nav-item nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight: 50 + 'px'}} to='../screens/transferencia/Transferencia'>
            Transferencia
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href=".">Nueva Transferencia</a></li>
            <li><a className="dropdown-item" href=".">Solicitar Pago</a></li>
            <li><a className="dropdown-item" href=".">Cuentas Agendadas</a></li>
          </ul>
        </li>
        
        <li className="nav-item" style={{marginRight: 50 + 'px'}}>
          <Link className="nav-link" to='../screens/MiCuenta'>Mi Cuenta</Link>
        </li>
        <li className="nav-item" style={{marginRight: 50 + 'px'}}>
          <Link className="nav-link" to='../screens/Configuracion'>Configuracion</Link>
        </li>
      </ul>
      
    </div>
  </div>
  </div>
</nav>
    </div>
  )
}

export default navbar