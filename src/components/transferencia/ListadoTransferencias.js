import React, { useState, useEffect, Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import '../../styles/componentes/ListadoTransferencias.css';
import Cookies  from 'universal-cookie';


//

const ListadoTransferencias = () => {
   //cookies
const cookies = new Cookies();
const cuentaSeleccionada = cookies.get('cuentaSeleccionada');
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

    //usando la BD

    const getData = async () => {
        await axios.get(`https://localhost:7042/Transaccion/HistorialTransacciones/${cuentaSeleccionada}`)
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log("Error al obtener la información de las transferencias")
            })
    }
    useEffect(() => {
        getData();
    }, [])
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
                        data && data.length > 0 ? data
                            .sort((a, b) => new Date(b.numero) - new Date(a.numero))
                            .map((item, index) => {
                                // Formatear la fecha de realizacion
                                const fechaRealizacion = new Date(item.realizacion);
                                const opcionesFecha = {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false,
                                };
                                const fechaFormateada = fechaRealizacion.toLocaleString('default', opcionesFecha);

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.cuentaDestino}</td>
                                        <td className={item.cbuDestino === cuentaSeleccionada ? 'texto-verde' : 'texto-rojo'}>
                                            {item.cbuDestino === cuentaSeleccionada ? `+${item.monto}` : `-${item.monto}`}
                                        </td>
                                        <td>{fechaFormateada}</td>
                                        <td colSpan={2}>
                                            <button className='btn btn-primary' onClick={() => handleShow(item)}>Ver Detalle</button>
                                        </td>
                                    </tr>
                                );

                            })
                            : 'Loading...'
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
                            <h6>Número de Origen: {selectedItem.cuentaOrigen}</h6>
                            <h6>Número de Cuenta Destino: {selectedItem.cuentaDestino}</h6>
                            <h6>Motivo: {selectedItem.motivo}</h6>
                            <h6>Referencia: {selectedItem.referencia}</h6>
                            <h6>Fecha de realizacion: {selectedItem.realizacion}</h6>
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