import React from 'react'
import { Link } from 'react-router-dom'

const NavbarPrincipal = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#52489C' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/BancoMilagroFinanciero"style={{ color: 'white' }}>Milagro Financiero</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-end">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto"> 
                            <li className="nav-item" style={{ marginRight: '50px' }}>
                                    {/* <Link className="nav-link" to='/MilagroFinanciero'>Personas</Link> */}
                                </li>
                                <li className="nav-item" style={{ marginRight: '50px' }}>
                                <Link className="nav-link rounded-3" to='https://colosal.duckdns.org:15001/SRVP/?client=MilagroFinanciero' style={{ color: 'white' }}>Iniciar Sesión</Link>
                                </li>
                                <li className="nav-item" style={{ marginRight: '50px' }}>
                                <Link className="nav-link rounded-3" to='/Registro' style={{ color: 'white' }}>Registrarse</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarPrincipal;