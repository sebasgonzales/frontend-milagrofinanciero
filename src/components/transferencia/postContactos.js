import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, InputGroup, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/componentes/postTransferencia.css';
import Cookies  from 'universal-cookie';


const PostContactos = () => {
    const cookies = new Cookies();
    //valor de la cookie
    const cuentaSeleccionada = cookies.get('cuentaSeleccionada');
    const token = cookies.get('token')
    const [cbuContacto, setCbuContacto] = useState('');
    const [nombre, setNombre] = useState('');
    const [validated, setValidated] = useState(false);

    const [dataBanco, setDataBanco] = useState([]);
    const [bancoSeleccionado, setBancoSeleccionado] = useState(''); // Estado para el banco seleccionado
    const [idBanco, setIdBanco] = useState('')

    const [dataIdCuenta, setDataIdCuenta] = useState({});  // Datos de la cuenta a transferir

    //--CLEAR DATA--//
    const clear = () => {
        setCbuContacto('');
        setNombre('');
    }
    //GET
    const getDataBanco = () => {
        axios.get('https://colosal.duckdns.org:15001/MilagroFinanciero/Banco', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((result) => {
                // Asignamos identificadores únicos a los bancos en el frontend porque el dto no muestra el id
                const dataWithIds = result.data.map((banco, index) => ({ id: index + 1, nombre: banco.nombre }));
                setDataBanco(dataWithIds);
            })
            .catch((error) => {
                console.log(console.error('Error al obtener datos del banco:', error.message))
                toast.error('Error al obtener la informacion del Banco');
            });
    };

    const getIdDataCuenta = () => {
        axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/IdxNumeroCuenta/${cuentaSeleccionada}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((result) => {
                setDataIdCuenta(result.data.id)
            })
            .catch((error) => {
                console.log(console.error('Error al obtener ids de la cuenta:', error.message))
                toast.error('Error al obtener la informacion de la cuenta');
            });
    };

    useEffect(() => {
        getDataBanco();
        getIdDataCuenta()
    }, [])


    //HANDLES
    const handleChangeIdBanco = (banco) => {
        setIdBanco(banco.id);
        handleBancoSeleccionado(banco.nombre);
    };
        // Para que el nombre del dropdown cambie cuando se selecciona el banco
        // Más visual que otra cosa
    const handleBancoSeleccionado = (banco) => {
        setBancoSeleccionado(banco)
    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
    };

    const handleChangeCbu = (e) => {
        setCbuContacto(e.target.value);
    };
    //--VALIDACION--//

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const volverAtras = () => {
        // vuelvo a la pagina anterior
        window.history.back();
    }

        //FUNCION PARA GUARDAR LOS DATOS
    const agregarContacto = async () => {
        try {

            // // Verifica si el nombre tiene valores
            if (!nombre) {
                // Muestra un mensaje de error utilizando react-toastify o cualquier otra forma de manejar errores
                toast.error('Por favor, complete todos los campos ');
                console.log('Por favor, complete todos los campos ');
                return;
            }

            // Obtener el id del banco por el nombre ingresado
            // const idBanco = await getBancoIdPorNombre(nombreBanco);

            // Verificar si se obtuvo el id del banco
            if (idBanco === null) {
                return;
            }

            const dataContacto = {
                Id: 0,
                Cbu: cbuContacto,
                Nombre: nombre,
                IdCuenta: dataIdCuenta,
                IdBanco: idBanco,

            };
            
        
            //cambiar localhost por colosal cuando este publicado!!!!
            const existingContacts = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Contacto`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(existingContacts.data);
            // Verificar si ya existe un contacto con el mismo CBU para la misma cuenta
            if (existingContacts.data.some(contact => contact.cbu === cbuContacto && contact.cuenta === cuentaSeleccionada)) {
                toast.error('Ya existe un contacto con el mismo');
                return;
            }
            else{
                // Realizar la solicitud POST de contacto
            console.log(dataContacto)
            const response = await axios.post(`https://colosal.duckdns.org:15001/MilagroFinanciero/Contacto`, dataContacto, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('Respuesta de el contacto:', response.data);

            // Muestra un mensaje de éxito utilizando react-toastify
            toast.success('Contacto agregado con éxito')
            clear();
            }


            
        } catch (error) {
            console.error('Error al agregar el contacto:', error.message);
            // Muestra un mensaje de error utilizando react-toastify
            toast.error('Error al agregar el contacto');

        }
    };

    return (
        <div>
            <ToastContainer />
            <Form
                className="labelPersonalizado"
                noValidate
                validated={validated}
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event);
                    agregarContacto();
                }}
            >
                <Form.Group as={Col} controlId="validationCustom01" className="align-items-start">
                    <Form.Label>Nombre</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre"
                            name="Nombre"
                            value={nombre}
                            onChange={handleChangeNombre}
                            aria-describedby="basic-addon2"
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Banco</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId='validationCustom01'>
                    <DropdownButton id="dropdown-basic-button" title={bancoSeleccionado || 'Seleccionar'}>
                        {dataBanco.map((banco, index) => (
                            <Dropdown.Item key={index} onClick={() => handleChangeIdBanco(banco)}>
                                {banco.nombre}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom03">
                    <br></br>
                    <Form.Label>Cbu</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="number"
                            placeholder="Ingrese el cbu"
                            name="cbuContacto"
                            value={cbuContacto}
                            onChange={handleChangeCbu}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese un cbu válido.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <div className="botonesAlPie mb-2">
                    <Button className="Btn2" variant="secondary" size="lg" onClick={volverAtras}>
                        Cancelar
                    </Button>{' '}
                    <Button
                        className="Btn1"
                        type="submit"
                        variant="primary"
                        size="lg"
                        onClick={volverAtras}
                    >
                        Guardar
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default PostContactos