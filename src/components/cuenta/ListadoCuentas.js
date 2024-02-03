import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoCuentas = ({ onCuentaSeleccionada, cuitCuil }) => {
    const [clienteCuentas, setClienteCuentas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCuenta, setSelectedCuenta] = useState(null);

    useEffect(() => {
        // Verifica si cuitCuil es un número antes de hacer la solicitud
        if (!isNaN(cuitCuil)) {
            axios.get(`https://localhost:7042/clientexcuenta/cliente/${cuitCuil}`)
                .then((result) => {
                    const cuentas = result.data.map(cuenta => cuenta.cuenta);
                    setClienteCuentas(cuentas);
                })
                .catch((error) => {
                    console.log("Error al obtener la información de las cuentas");
                });
        }
    }, [cuitCuil]);

    const handleCuentaSeleccionada = (cuenta) => {
        setIsOpen(false);
        onCuentaSeleccionada(cuenta);
    };

    const handleCambiarCuenta = (cuenta) => {
        setSelectedCuenta(cuenta);
        setIsOpen(true);
    };

    const confirmarCambioCuenta = () => {
        console.log("Cambiando a la cuenta:", selectedCuenta);
        handleCuentaSeleccionada(selectedCuenta);
        setIsOpen(false);
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
                {clienteCuentas.map((cuenta, index) => (
                    <li key={index}>
                        <button
                            className="dropdown-item"
                            onClick={() => handleCuentaSeleccionada(cuenta)}
                        >
                            {cuenta}
                        </button>
                        <button
                            className="dropdown-item"
                            onClick={() => handleCambiarCuenta(cuenta)}
                        >
                            Cambiar Cuenta
                        </button>
                    </li>
                ))}
            </ul>

            {isOpen && (
                <div className="modal-container">
                    <div className="modal">
                        <p>¿Estás seguro de cambiar a la cuenta {selectedCuenta}?</p>
                        <button onClick={confirmarCambioCuenta}>Confirmar</button>
                        <button onClick={() => setIsOpen(false)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListadoCuentas;
