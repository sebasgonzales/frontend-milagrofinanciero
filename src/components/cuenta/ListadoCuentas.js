import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoCuentas = ({ onCuentaSeleccionada }) => {
    const [clienteCuentas, setClienteCuentas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const nombreCliente = "Sebatian Gonzales";
        axios.get(`https://localhost:7042/clientexcuenta/cliente/${encodeURIComponent(nombreCliente)}`)
            .then((result) => {
                const cuentas = result.data.map(cuenta => cuenta.cuenta);
                setClienteCuentas(cuentas);
            })
            .catch((error) => {
                console.log("Error al obtener la información de las cuentas");
            });
    }, []);

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
