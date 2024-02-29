import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/componentes/botonDesplegable.css';

const BotonDesplegable = () => {
    const opciones = [

        { nombre: 'Nueva Transferencia', ruta: '/BancoMilagroFinanciero/Transferencia/NuevaTransferencia' },
        { nombre: 'Cuentas Agendadas', ruta: '/BancoMilagroFinanciero/Transferencia/CuentasAgendadas' },
    ];

    const [mostrarOpciones, setMostrarOpciones] = useState(false);

    const handleMouseEnter = () => {
        setMostrarOpciones(true);
    };

    const handleMouseLeave = () => {
        setMostrarOpciones(false);
    };
    const handleOpcionClick = () => {
        setMostrarOpciones(false);
    };

    return (
        <div className="boton-desplegable" onMouseLeave={handleMouseLeave}>
            <li className="nav-item"  onMouseEnter={handleMouseEnter}>
                 
                    <Link className="nav-link" to='/BancoMilagroFinanciero/Transferencia'>Transferencia</Link>
                
            </li>
            {mostrarOpciones && (
                <div className="opciones ">
                    {opciones.map((opcion, index) => (
                        <Link key={index} className="dropdown-item" to={opcion.ruta} onClick={handleOpcionClick}>
                            {opcion.nombre}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BotonDesplegable;
