import React, { useState } from 'react';
import ListadoCuentas from '../../components/cuenta/ListadoCuentas';
import ListadoTransferencias from '../../components/ListadoTransferencias';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);

    const handleCuentaSeleccionada = (cuenta) => {
        setCuentaSeleccionada(cuenta);
    };

    const cuitCuil = 123456789;

    return (
        <div>
            <h1>Esta es la página de Home</h1>

            <div className='container text-left'>
                <div className='row align-items-center'>
                    <div className='col-8'>
                        <h1>Bienvenido Usuario</h1>
                        <div className='row align-items-center'>
                            <div className='col-6'>
                                <p className="fs-3">Cuenta N° 123456789</p>
                            </div>
                            <div className='col-5' style={{ marginLeft: 'auto', marginRight: '10px' }}>
                                <ListadoCuentas onCuentaSeleccionada={handleCuentaSeleccionada} cuitCuil={cuitCuil} />
                            </div>
                        </div>
                        <div className='border border-primary mt-3 mb-3'>
                            <div className='ml-5'>
                                <p>Saldo de la Cuenta</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 offset-9' style={{ display: 'inline-block' }}>
                        <div className="mb-4 justify-content-center">
                            <p style={{ display: 'inline-block', marginRight: '10px' }}>Act. Reciente</p>
                            <Link to="/screens/home/ActividadReciente">
                                <Button variant="primary" size="lg" style={{ marginLeft: 1 + 'px', display: 'inline-block' }}>
                                    Ver todos
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container text-center'>
                <ListadoTransferencias maxToShow={3} cuentaSeleccionada={cuentaSeleccionada} />
            </div>
        </div>
    );
}

export default Home;
