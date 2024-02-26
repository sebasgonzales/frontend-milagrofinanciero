import React, { useState, useEffect, Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import '../../styles/componentes/ListadoTransferencias.css';
import Cookies from 'universal-cookie';


//

const ListadoTransferencias = () => {
    //cookies
    const cookies = new Cookies();
    const cuentaSeleccionada = cookies.get('cuentaSeleccionada');
    const cbuFromCookie = cookies.get('cbu');
    const [data, setData] = useState([]);
    const token = cookies.get('token');

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

  
    //usando la BD

    const getData = async () => {
        await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Transaccion/HistorialTransacciones/${cuentaSeleccionada}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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
                        <th>Cbu Destino</th>
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
                                 // Calcular la comparación isSameCbu
                            const isSameCbu = item.cbuDestino === cbuFromCookie;
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
                                        <td>{item.cbuDestino}</td>
                                        <td className={isSameCbu ? 'texto-verde' : 'texto-rojo'}>
                                            {isSameCbu ? `+${item.monto}` : `-${item.monto}`}
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
                            <h6>Cbu Origen: {selectedItem.cbuOrigen}</h6>
                            <h6>Cbu Destino: {selectedItem.cbuDestino}</h6>
                            <h6>Motivo: {selectedItem.motivo}</h6>
                            <h6>Referencia: {selectedItem.referencia}</h6>
                            <h6>Fecha: {selectedItem.realizacion}</h6>
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