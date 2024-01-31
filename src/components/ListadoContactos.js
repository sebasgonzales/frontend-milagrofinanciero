import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';

const ListadoContactos = () => {
    // VARIABLES
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [nombre, setNombre] = useState('');
    const [cbuContacto, setCbuContacto] = useState('');
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    // TRAIGO DATOS DE LA BD
    const getData = () => {
        axios.get('https://localhost:7042/Cuenta/cuentas/Numero/6655443322/Contacto')
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => {
                console.log("Error al obtener la información de los contactos");
            });
    };

    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
    };

    const handleChangeCbu = (e) => {
        setCbuContacto(e.target.value);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleShow = (item) => {
        setShow(true);
        setSelectedItem(item);
        // lleno los datos del formulario con los anteriores
        setNombre(item.nombre);
        setCbuContacto(item.cbu);
    };
    //cierro modal
    const handleClose = () => {
        setShow(false);
    };

    const eliminarContacto = async (selectedItem) => {
        try {
            // solicitud delete
            const response = await axios.delete(`https://localhost:7042/Contacto/${selectedItem.id}`);

            console.log('Respuesta de eliminar el contacto:', response.data);

            // Muestra un mensaje de éxito utilizando react-toastify
            console.log('Contacto eliminado con éxito');

            // Recargar datos después de la eliminación
            getData();
        } catch (error) {
            console.error('Error al eliminar el contacto:', error.message);
            // Muestra un mensaje de error utilizando react-toastify
            console.log('Error al eliminar el contacto');
        }
    };



    const modificarContacto = async (selectedItem) => {

        try {
            const dataContacto = {
                Id: selectedItem.id,
                Nombre: nombre,
                Cbu: cbuContacto,
                IdBanco: 1,
                IdCuenta: selectedItem.idCuenta,
            };

            // Realizar la solicitud PUT para modificar el contacto
            const response = await axios.put(`https://localhost:7042/Contacto/${selectedItem.id}`, dataContacto);

            console.log('Respuesta de modificar el contacto:', response.data);

            // Muestra un mensaje de éxito utilizando react-toastify
            console.log('Contacto modificado con éxito');
            setShow(false); // Cerrar el modal directamente aquí
        } catch (error) {
            console.error('Error al modificar el contacto:', error.message);
            // Muestra un mensaje de error utilizando react-toastify
            console.log('Error al modificar el contacto');
        } finally {
            getData(); // Recargar datos después de la modificación
        }
    };









    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Banco</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ? data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.nombre}</td>
                                <td>{item.banco}</td>
                                <td colSpan={2} className='justify-content-evently'>
                                    <button className='btn btn-primary' onClick={() => handleShow(item)}>
                                        Editar
                                    </button>
                                    <button className='btn btn-danger' onClick={() => eliminarContacto(selectedItem)}>
                                        Eliminar
                                    </button>


                                </td>
                            </tr>
                        )) : 'Loading...'
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedItem && (

                        <Form
                            className="labelPersonalizado"
                            noValidate
                            validated={validated}
                            onSubmit={(event) => {
                                event.preventDefault(); // Evita la recarga de la página
                                handleSubmit(event); // Llama a tu función handleSubmit
                                modificarContacto(); // Llama a tu función agregarContacto
                            }}
                        >
                            <Form.Group controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    name="Nombre"
                                    value={nombre}
                                    onChange={handleChangeNombre}

                                />
                                <Form.Control.Feedback type="invalid">Por favor, ingrese un nombre válido.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formCbu">
                                <Form.Label>Cbu</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingrese el cbu"
                                    value={cbuContacto}
                                    onChange={handleChangeCbu}

                                />
                                <Form.Control.Feedback type="invalid">Por favor, ingrese un cbu válido.</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button
                        className="Btn1"
                        type="submit"
                        variant="primary"
                    >
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default ListadoContactos;
