import React, { useState, useEffect, Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const ListadoTransferencias = () => {

    const [show, setShow] = useState(false);
    //para el item seleccionado
    const [selectedItem, setSelectedItem] = useState(null);

    //se ejecuta cuando se cierra el modal
    const handleClose = () => {
        setShow(false); //oculta el modal
        setSelectedItem(null); // Limpiar el elemento seleccionado al cerrar el modal
        //la próxima vez que se abra el modal, no muestre detalles del elemento anteriormente seleccionado.
    };

    //se desea mostrar el modal con detalles específicos de un elemento.
    const handleShow = (item) => {
        setShow(true);
        setSelectedItem(item);
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    //usando la BD
    const getData = () => {
       // axios.get('https://localhost:7042/Transaccion')
        axios.get('https://localhost:7042/Transaccion/HistorialTransacciones/987654321')
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log("Error al obtener la información de las transferencias")
            })
    }

    return (
        <Fragment>
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
                    {
                        data && data.length > 0 ? // si la variable data existe y si su longitud (data.length) es mayor que cero. Si es verdad, se ejecuta la parte de código antes del :
                            data   .sort((a, b) => new Date(b.realizacion) - new Date(a.realizacion)) // Ordena por fechas y horas de la más reciente a la más antigua
                            .map((item, index) => { //mapeo sobre los elem de 'data'
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.cuentaDestino}</td>
                                        <td>{item.monto}</td>
                                        <td>{item.realizacion}</td>
                                        <td colSpan={2}>
                                            <button className='btn btn-primary' onClick={() => handleShow(item)}>Ver Detalle</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }


                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {selectedItem && ( //se utiliza para asegurarse de que selectedItem esté definido antes de intentar acceder a sus propiedades
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
                    )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
export default ListadoTransferencias;