import React, { useState, useEffect, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Cookies from 'universal-cookie';

const ListadoTransferencias = ({ maxToShow, cuentaSeleccionada }) => {
    const cookies = new Cookies()
    const token = cookies.get('token')
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [cuentaSeleccionada]); // Asegúrate de actualizar la data cuando cambia la cuenta seleccionada

    const handleClose = () => {
        setShow(false);
        setSelectedItem(null);
    };

    const handleShow = (item) => {
        setShow(true);
        setSelectedItem(item);
    };

    const getData = () => {
        // Utiliza la cuentaSeleccionada para obtener las transacciones correctas
        axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/transaccion/HistorialTransacciones/${cuentaSeleccionada}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => {
                console.log("Error al obtener la información de las Transacciones");
            });
    };

    const renderRows = () => {
        const sortedData = data.sort((a, b) => new Date(b.numero) - new Date(a.numero));
        const limitedData = maxToShow ? sortedData.slice(0, maxToShow) : sortedData;

        return limitedData.map((item, index) => {
            const fechaRealizacion = new Date(item.realizacion);
            const opcionesFecha = {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            };
            const fechaFormateada = fechaRealizacion.toLocaleString('es-ES', opcionesFecha);

            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.cuentaDestino}</td>
                    <td className={item.cuentaDestino === cuentaSeleccionada ? 'texto-verde' : 'texto-rojo'}>
                        {item.cuentaDestino === cuentaSeleccionada ? `+${item.monto}` : `-${item.monto}`}
                    </td>
                    <td>{fechaFormateada}</td>
                    <td colSpan={2}>
                        <button className='btn btn-primary' onClick={() => handleShow(item)}>Ver Detalle</button>
                    </td>
                </tr>
            );
        });
    };

    const renderTable = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cuenta Destino</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </Table>
        );
    };

    return (
        <Fragment>
            {renderTable()}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedItem && (
                        <div>
                            <h6>Número de Operacion: {selectedItem.numero}</h6>
                            <h6>Monto: {selectedItem.monto}</h6>
                            <h6>Número de Cuenta: {selectedItem.cuentaDestino}</h6>
                            <h6>Motivo: {selectedItem.motivo}</h6>
                            <h6>Referencia: {selectedItem.referencia}</h6>
                            <h6>Fecha de realizacion: {selectedItem.realizacion}</h6>
                            <h6>Fecha de acreditacion: {selectedItem.acreditacion}</h6>
                            <h6>Tipo de Transferencia: {selectedItem.tipoTransaccion}</h6>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default ListadoTransferencias;