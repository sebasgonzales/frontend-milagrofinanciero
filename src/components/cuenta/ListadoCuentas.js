import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const ListadoCuentas = ({ onCuentaSeleccionada }) => {
    const cookies = new Cookies();
    const cuitCuil = cookies.get('cuitCuil');
    const token = cookies.get('token');
    const [clienteCuentas, setClienteCuentas] = useState([]);
    const [cbu, setCbu] = useState(cookies.get('cbu') || null);
    const [cuentaSeleccionada, setCuentaSeleccionada] = useState(cookies.get('cuentaSeleccionada') || null);

    const getClienteCuentas = async () => {
        try {
            const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/clientes/CuitCuil/${cuitCuil}/ClienteCuenta`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const cuentas = response.data.map(cuenta => cuenta.numeroCuenta);
            setClienteCuentas(cuentas);
            // Si no hay una cuenta seleccionada, seleccionamos automáticamente la primera cuenta
            if (!cuentaSeleccionada && cuentas.length > 0) {
                handleCuentaSeleccionada(cuentas[0]);
            }
        } catch (error) {
            console.log("Error al obtener la información de las cuentas");
        }
    }

    const getCbu = async (cuenta) => {
        try {
            const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/CbuxNumeroCuenta/${cuenta}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const cbu = response.data;
            if (cbu) {
                setCbu(cbu);
                cookies.set('cbu', cbu, { path: '/' });
            } else {
                console.log("No se recibió un cbu en la respuesta.");
            }
        } catch (error) {
            console.error('Error ', error.message);
        }
    }

    useEffect(() => {
        getClienteCuentas();
    }, []);

    const handleCuentaSeleccionada = (cuenta) => {
        setCuentaSeleccionada(cuenta);
        getCbu(cuenta);
        onCuentaSeleccionada(cuenta);
    };

    return (
        <div className="dropdown">
            <button className='btn btn-secondary dropdown-toggle button' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {cuentaSeleccionada ? `Cuenta N° ${cuentaSeleccionada}` : 'Selecciona una cuenta'}
            </button>
            <ul className="dropdown-menu">
                {/* Mapear el array para generar las opciones dinámicamente */}
                {clienteCuentas.map((cuenta, index) => (
                    <li key={index}>
                        <button className="dropdown-item" onClick={() => handleCuentaSeleccionada(cuenta)}>
                            {cuenta}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListadoCuentas;
