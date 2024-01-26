import React, { useState, useEffect, Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const ListadoCuentas = () => {

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
    const getClienteID = () => {
        // axios.get('https://localhost:7042/Cliente')
        axios.get('https://localhost:7042/Clientes')
            .then((result) => {
                // Filtrar los IDs de las cuentas del usuario con número 2761
                const clienteID = result.data
                    .filter(cliente => cliente.numero === 2761)
                    .map(cliente => cliente.id);
                
                // Hacer algo con los IDs filtrados, por ejemplo, actualizar el estado
                setData(clienteID);
            })
            .catch((error) => {
                console.log("Error al obtener la información de las cuentas");
            });
    };
    
    const  getCuentaID= () => {
        // axios.get(`https://localhost:7042/ClienteXCuenta')
        axios.get(`https://localhost:7042/ClientesXCuentas`) // Ajusta la URL según la estructura de tu API
            .then((result) => {
                // Hacer algo con las cuentas, por ejemplo, actualizar el estado
                const cuentaID = result.data
                    .filter(cuenta => cuenta.idCliente === getClienteID())
                    .map(cuenta => cuenta.idCuenta);

                setData(cuentaID);
            })
            .catch((error) => {
                console.log("Error al obtener la información de las cuentas");
            });
    
        const getData= () => {
            // axios.get('https://localhost:7042/Cuenta')
              axios.get('https://localhost:7042/Cuentas')
                .then((result) => {
                    const cuenta = result.data
                    .filter(cuenta => cuenta.id === getCuentaID())

                    setData(cuenta);
                })
                .catch((error) => {
                    console.log("Error al obtener la información de las cuentas");
                });
        };       

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
                                const fechaFormateada = fechaRealizacion.toLocaleString('es-ES', opcionesFecha);

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.cuentaDestino}</td>
                                        <td>
                                            {item.cuentaDestino === 6655443322 ? `+${item.monto}` : `-${item.monto}`}
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
}
export default ListadoCuentas;