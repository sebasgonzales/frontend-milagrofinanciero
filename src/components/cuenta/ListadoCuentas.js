import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { getClienteCuentas } from '../../api/getData';


const ListadoCuentas = ({ onCuentaSeleccionada, nombreCliente }) => {
    const cookies = new Cookies();

    const cuitCuil = cookies.get('cuitCuil');

    const [clienteCuentas, setClienteCuentas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        getClienteCuentas(cuitCuil, setClienteCuentas);
    }, [nombreCliente]);

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
