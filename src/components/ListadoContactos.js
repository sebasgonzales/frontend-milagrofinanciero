import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect, Fragment } from 'react';

const ListadoContactos = () => {
    // VARIABLES
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [nombre, setNombre] = useState('');
    const [cbuContacto, setCbuContacto] = useState('');
    const [validated, setValidated] = useState(false);

    //para editar
    const [editNombre, setEditNombre] = useState('');
    const [editCbuContacto, setEditCbuContacto] = useState('');

    useEffect(() => {
        getData();
    }, []);



    // TRAIGO DATOS DE LA BD
    const getData = () => {
        axios.get('https://localhost:7042/Cuenta/cuentas/Numero/6655443322/Contacto')
            .then((result) => {
                const dataWithIds = result.data.map((contacto, indexContacto) => ({ id: indexContacto + 1, nombre: contacto.nombre, cbu: contacto.cbu, banco: contacto.banco }));
                setData(dataWithIds);
            })
            .catch((error) => {
                console.log("Error al obtener la información de los contactos");
            });
    }

    const clear = () => {
        setNombre('');
        setCbuContacto('');
    }

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
        console.log('Showing modal for:', item);
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

    const handleDelete = (id) => {
        if (window.confirm("¿Está seguro de que desea eliminar este contacto?") === true) {
            axios.delete(`https://localhost:7042/Contacto/${id}`)
                .then((result) => {
                    if (result.status === 200) {
                        toast.success(`Ha sido eliminado`);
                        getData();
                    }
                })
                .catch((error) => {
                    console.error("Error deleting:", error);
                    toast.error("Error deleting. Please try again.");
                });
        }
    };


    const handleEdit = (id) => {
        handleShow(true);
        console.log('Edit button clicked for ID:', id);
        axios.get(`https://localhost:7042/Cuenta/cuentas/Numero/6655443322/Contacto/${id}`)
            .then((result) => {
                 // Asegúrate de que esta línea esté presente
                console.log('Data retrieved:', result.data);
                setEditNombre(result.data.nombre);
                setEditCbuContacto(result.data.cbu);

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                toast.error(error);
            });
    };





    const modificarContacto = async () => {
        const url = `https://localhost:7042/Contacto/${selectedItem.id}`;
        console.log("selectedID:", selectedItem.id)
        try {
            const data = {
                Id: selectedItem.id,
                Nombre: editNombre,
                Cbu: editCbuContacto,
                IdBanco: 1,
                IdCuenta: selectedItem.idCuenta,
            };

            // Realizar la solicitud PUT para modificar el contacto
            const response = await axios.put(url, data);

            console.log('Respuesta de modificar el contacto:', response.data);

            // Muestra un mensaje de éxito utilizando react-toastify
            console.log('Contacto modificado con éxito');
            handleClose();
            setShow(false); // Cerrar el modal directamente aquí
            clear();
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
                        <th>Nombre</th>
                        <th>Banco</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 &&
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.banco}</td>
                                <td colSpan={2}>
                                    <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>
                                        Editar
                                    </button>&nbsp;
                                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))

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
                                    value={editNombre}
                                    onChange={(e) => setEditNombre(e.target.value)}

                                />
                                <Form.Control.Feedback type="invalid">Por favor, ingrese un nombre válido.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formCbu">
                                <Form.Label>Cbu</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingrese el cbu"
                                    value={editCbuContacto}
                                    onChange={(e) => setEditCbuContacto(e.target.value)}

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
                        onClick={modificarContacto}
                    >
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default ListadoContactos;
