import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect, Fragment } from 'react';
import Cookies  from 'universal-cookie';

const cookies = new Cookies();
//valor de la cookie
const cuentaSeleccionada = cookies.get('cuentaSeleccionada');

const ListadoContactos = () => {
    // VARIABLES
    const [dataId, setDataId] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [nombre, setNombre] = useState('');
    const [idContacto, setIdContacto] = useState(null);
    const [validated, setValidated] = useState(false);
    const [idBanco, setIdBanco] = useState(null);
    //id y selected para eliminarlo
    const [idContactoDelete, setIdContactoDelete] = useState(null);
    const [selectedItemDelete, setSelectedItemDelete] = useState(null);

    //para editar SOLO el nombre, el cbu no se puede editar.
    const [editNombre, setEditNombre] = useState('');
    const [editCbu, setEditCbu] = useState('');

    
    


    useEffect(() => {
        getDataId();
    }, []);

    // TRAIGO DATOS DE LA BD
    const getDataId = () => {
        axios.get(`https://localhost:7042/Cuenta/cuentas/Numero/${cuentaSeleccionada}/Contacto`)
            .then((result) => {
                setDataId(result.data)
            })
            .catch((error) => {
                console.log("Error al obtener la información de los contactos");
            });
    }

    const getBancoId = async (nombreBanco) => {
        try {
            const response = await axios.get(`https://localhost:7042/Banco/IdxNombre/${nombreBanco}`);
            setIdBanco(response.data.id); // Asigna el IdBanco obtenido
        } catch (error) {
            console.error('Error al obtener el IdBanco:', error.message);
            toast.error('Error al obtener el IdBanco');
        }
    };

    // Limpiamos
    const clear = () => {
        setNombre('');
    }

    // Handles
        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true);
        };
        //mdodalEditar
        const handleShowEdit = (item) => {
            console.log('Showing modal for:', item);
            setShowEdit(true);
            setSelectedItem(item);
        };
        //cierro modal
        const handleCloseEdit = () => {
            setShowEdit(false);
            setSelectedItem(null);
        };
        //modal eliminar
        const handleShowDelete = (item) => {
            console.log('Showing modal for:', item);
            setShowDelete(true);
            setSelectedItemDelete(item);
        };
    
        const handleCloseDelete = () => {
            setShowDelete(false);
            setSelectedItemDelete(null);
        };

        //eliminar
        const handleDeleteObtenerIdxCbu = async (cbu) => {
            
            console.log('Delete button clicked for CBU:', cbu);
            await axios.get(`https://localhost:7042/Contacto/IdxCbu/${cbu}`)
                .then((result) => {
                    setIdContactoDelete(result.data.id);
                    handleShowDelete(true)
                    console.log("Entre en handle obtener delete este es el id",idContactoDelete)
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    toast.error(error);
                });
        };

        const handleDeleteContacto = () => {
            console.log("Entre en handle delete este es el id",idContactoDelete)
            try {
                axios.delete(`https://localhost:7042/Contacto/${idContactoDelete}`)
    
                handleCloseDelete();
                getDataId();
                setIdContactoDelete(null);
                toast.success(`Ha sido eliminado`);
    
            } catch (error) {
                console.error("Error deleting:", error);
                toast.error("Error deleting. Please try again.");
            }
        }

        const handleEditObtenerIdxCbu = async (cbu) => {
            console.log('Edit button clicked for CBU:', cbu);
            await axios.get(`https://localhost:7042/Contacto/IdxCbu/${cbu}`)
                .then((result) => {
                    setIdContacto(result.data.id);
                    handleEditContacto(result.data.id);
                    handleShowEdit(true);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    toast.error(error);
                });
        };
        const handleEditContacto = (idContacto) => { //para editar contactos
            axios.get(`https://localhost:7042/Contacto/${idContacto}`)
                .then((result) => {
                    console.log(result.data)
                    // setEditId(idContacto)
                    setEditNombre(result.data.nombre);
                    setEditCbu(result.data.cbu);
                    getBancoId(result.data.banco);
                })
                .catch((error) => {
                    toast.error(error);
                })
        }

        

        const handleUpdate = () => {
            const url = `https://localhost:7042/Contacto/${idContacto}`
            console.log(idContacto)
            const data = {
                "id": idContacto,
                "nombre": editNombre,
                "cbu": editCbu,
                "idBanco": idBanco, 
                "idCuenta": 4
            }
            console.log(data);
            axios.put(url, data)
                .then((result) => {
                    handleCloseEdit();
                    getDataId();
                    clear();
                    toast.success('Contacto has been updated')
                    setIdContacto(null);
                }).catch((error) => {
                    toast.error(error);
                });
        }
    //Fin Handles

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
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
                        dataId.length > 0 &&
                        dataId.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.banco}</td>
                                <td colSpan={2}>
                                    {/* Primero obtiene el id por el cbu y de ahí se llama al handle para editar */}
                                    <button className='btn btn-primary' onClick={() => handleEditObtenerIdxCbu(item.cbu)}>
                                        Editar
                                    </button>&nbsp;
                                    <button className='btn btn-danger' onClick={() => handleDeleteObtenerIdxCbu(item.cbu)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </Table>
            <Modal show={showEdit} onHide={handleCloseEdit}>
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
                                event.preventDefault();
                                handleSubmit(event);
                            }}
                        >
                            <Form.Group controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    name="Nombre"
                                    value={editNombre || selectedItem.nombre}
                                    onChange={(e) => setEditNombre(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Por favor, ingrese un nombre válido.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formCbu">
                                <Form.Label>Cbu</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingrese el cbu"
                                    value={editCbu}
                                    onChange={(e) => setEditCbu(e.target.value)}
                                    disabled
                                />
                                <Form.Control.Feedback type="invalid">Por favor, ingrese un CBU válido.</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Cerrar
                    </Button>
                    <Button
                        className="Btn1"
                        type="submit"
                        variant="primary"
                        onClick={handleUpdate}
                    >
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Está seguro de que desea eliminar este contacto?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Cancelar
                    </Button>
                    <Button
                        className="Btn1"
                        variant="danger"
                        onClick={handleDeleteContacto}
                    >
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>

        </Fragment>
    );
};

export default ListadoContactos;