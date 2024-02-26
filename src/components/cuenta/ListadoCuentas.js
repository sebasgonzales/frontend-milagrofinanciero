import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';


const ListadoCuentas = ({ onCuentaSeleccionada, nombreCliente }) => {
    const cookies = new Cookies();

const cuitCuil = cookies.get('cuitCuil');
const token = cookies.get('token')
    const [clienteCuentas, setClienteCuentas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/clientes/CuitCuil/${cuitCuil}/ClienteCuenta`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((result) => {
                const cuentas = result.data.map(cuenta => cuenta.numeroCuenta);
                setClienteCuentas(cuentas);
                
            })
            .catch((error) => {
                console.log("Error al obtener la información de las cuentas");
            });
    }, [nombreCliente]); // Agregué nombreCliente a las dependencias de useEffect

    const handleCuentaSeleccionada = (cuenta) => {
        setIsOpen(false);
        onCuentaSeleccionada(cuenta);
    };

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded="false"
            >
                Cambiar cuenta
            </button>
            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                {/* Mapear el array para generar las opciones dinámicamente */}
                {clienteCuentas.map((cuenta, index) => (
                    <li key={index}>
                        <button
                            className="dropdown-item"
                            onClick={() => handleCuentaSeleccionada(cuenta)}
                        >
                            {cuenta}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListadoCuentas;
