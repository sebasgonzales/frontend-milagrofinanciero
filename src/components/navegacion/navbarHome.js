import React from 'react'
import { Link } from 'react-router-dom'
import BotonDesplegable from "./botonDesplegable";
import Cookies from 'universal-cookie';

const navbar = () => {
    const cookies = new Cookies()
    const cerrarSesion = async () => {
        await cookies.remove('cuitCuil', { path: '/' });
        await cookies.remove('cuentaSeleccionada', { path: '/' })
        await cookies.remove('cbu', { path: '/' })
        await cookies.remove('token', { path: '/' })
        console.log('cookies eliminadas');
        window.location.href = '/BancoMilagroFinanciero';
    }

    return (
        <div>
    <nav className="navbar custom-navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a class="navbar-brand" href="/BancoMilagroFinanciero/Home">Milagro Financiero</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="d-flex justify-content-end">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='/BancoMilagroFinanciero/Home' style={{ marginRight: 50 + 'px' }}>Home</Link>
                                </li>
                                <li className="nav-item"><BotonDesplegable></BotonDesplegable></li>

                                <li className="nav-item" style={{ marginRight: 50 + 'px' }}>
                                    <Link className="nav-link" to='/BancoMilagroFinanciero/MiCuenta'>Mi Cuenta</Link>
                                </li>
                                <li className="nav-item" style={{ marginRight: 50 + 'px' }}>
                                    <Link className="nav-link" to='/BancoMilagroFinanciero/Configuracion'>Configuracion</Link>
                                </li>
                                <li className="nav-item" style={{ marginRight: 50 + 'px' }}>
                                    <Link className="nav-link" onClick={cerrarSesion}>Cerrar Sesion</Link>
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