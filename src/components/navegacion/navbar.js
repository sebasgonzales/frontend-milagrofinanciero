import React from 'react'

const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Milagro Financiero</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Transferencia
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nueva Transferencia</a></li>
            <li><a className="dropdown-item" href="#">Solicitar Pago</a></li>
            <li><a className="dropdown-item" href="#">Cuentas Agendadas</a></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Mi Cuenta</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Configuracion</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar