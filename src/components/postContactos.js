import React, { useState} from 'react';
import axios from 'axios';
import { Form, Button, InputGroup, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './postTransferencia.css';

const PostContactos = () => {

    const [cbuContacto, setCbuContacto] = useState('');
    const [nombre, setNombre] = useState('');
    const [validated, setValidated] = useState(false);

    //--CLEAR DATA--//
    const clear = () => {
        setCbuContacto('');
        setNombre('');
    }
    //HANDLES


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

    const Cancelar = () => {
        // vuelvo a la pagina anterior
        window.history.back();
    }

    //FUNCION PARA GUARDAR LOS DATOS
    const agregarContacto = async () => {
        try {

            // // Verifica si el nombre tiene valores
            if (!nombre) {
                // Muestra un mensaje de error utilizando react-toastify o cualquier otra forma de manejar errores
                toast.error('Por favor, complete todos los campos antes de realizar la transferencia');
                console.log('Por favor, complete todos los campos antes de realizar la transferencia');
                return;
            }

            const dataContacto = {
                Id: 0,
                Cbu: cbuContacto,
                Nombre: nombre,
                IdCuenta: 4,
                IdBanco: 1,

            };


            // Realizar la solicitud POST de contacto
            console.log(dataContacto)
            const response = await axios.post(`https://localhost:7042/Contacto`, dataContacto);

            console.log('Respuesta de el contacto:', response.data);

            // Muestra un mensaje de éxito utilizando react-toastify
            toast.success('Contacto agregado con éxito')
            clear();
        } catch (error) {
            console.error('Error al agregar el contacto:', error.message);
            // Muestra un mensaje de error utilizando react-toastify
            toast.error('Error al agregar el contacto');

        }
    };

    return (
        <div>

            <ToastContainer></ToastContainer>
            <Form
                className="labelPersonalizado"
                noValidate
                validated={validated}
                onSubmit={(event) => {
                    event.preventDefault(); // Evita la recarga de la página
                    handleSubmit(event); // Llama a tu función handleSubmit
                    agregarContacto(); // Llama a tu función agregarContacto
                }}
            >
                <Form.Group as={Col} controlId="validationCustom01" className="align-items-start" >
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
                    </InputGroup>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Cbu</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingrese el cbu"
                        name="cbuContacto"
                        value={cbuContacto}
                        onChange={handleChangeCbu}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese un cbu valido.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Looks good!
                    </Form.Control.Feedback>
                </Form.Group>
                <br></br>


                <div className="botonesAlPie mb-2">
                    <Button className="Btn2" variant="secondary" size="lg" onClick={Cancelar}>
                        Cancelar
                    </Button>{' '}
                    <Button
                        className="Btn1"
                        type="submit"
                        variant="primary"
                        size="lg"
                    >
                        Guardar
                    </Button>
                </div>
            </Form>
        </div>
    )
}


export default PostContactos