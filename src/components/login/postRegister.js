import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';

const cookies = new Cookies()

const timestamp = Date.now();

function RegistroCliente() {

    const [dataLocalidad, setDataLocalidad] = useState([]);
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState(''); // Estado para el banco seleccionado
    const [idLocalidad, setIdLocalidad] = useState('')
    const date = new Date(timestamp);
    console.log(date);
    // Estado para almacenar los datos del formulario
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        cuitCuil: '',
        alta: '',
        calle: '',
        departamento: [null],
        alturaCalle: '',
        idLocalidad: '',
        username: '',
        password: ''
    });

    const getDataLocalidad = () => {
        axios.get('https://localhost:7042/Localidad')
            .then((result) => {
                // Asignamos identificadores únicos a los bancos en el frontend porque el dto no muestra el id
                const dataWithIds = result.data.map((localidad, index) => ({ id: index + 1, nombre: localidad.nombre }));
                setDataLocalidad(dataWithIds);
            })
            .catch((error) => {
                console.log(console.error('Error al obtener datos de las localidades:', error.message))
                //toast.error('Error al obtener la informacion de las localidades');
            });
    };

    useEffect(() => {
        getDataLocalidad();
    }, [])

    const handleChangeIdLocalidad = (localidad) => {
        setIdLocalidad(localidad.id);
        handleLocalidadSeleccionada(localidad.nombre);
    };
        // Para que el nombre del dropdown cambie cuando se selecciona el banco
        // Más visual que otra cosa
    const handleLocalidadSeleccionada = (localidad) => {
        setLocalidadSeleccionada(localidad)
    }

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        registrarse();
    };
    const registrarse = async (date) => {
        try {
            const response = await axios.post("https://localhost:7042/Cliente", {
                id: 0,
                nombre: data.nombre, 
                apellido: data.apellido, 
                cuitCuil: data.cuitCuil,
                alta: date,
                calle: data.calle, 
                departamento: data.departamento, 
                alturaCalle: data.alturaCalle,
                idLocalidad: data.idLocalidad, 
                username: data.username, 
                password: data.password
            });
            const cuitCuil = response.data.cuitCuil; // Suponiendo que response.data contiene solo el número de CUIT/CUIL
        
            if (cuitCuil) {
                cookies.set('cuitCuil', cuitCuil, { path: '/' });
                console.log("Número de CUIT/CUIL guardado en la cookie:", cuitCuil);
                console.log("Valor de la cookie: ", cookies.get('cuitCuil'));
                window.location.href='/MilagroFinanciero/Home'
                // Redireccionar a la página de inicio o realizar otras acciones según sea necesario
            } else {
                console.log("No se recibió un número de CUIT/CUIL en la respuesta.");
            } 
        } catch (error) {
            console.error('Error al Crear una Cuenta:', error.message);
            console.log(data.idLocalidad)
            if (data.idLocalidad == null) {
                console.log("idLocalidad VACIO")}
            // Manejar el error de inicio de sesión según sea necesario
        }
    };
    return (
        <div>
            <h2>Registro de Cliente</h2>
            <Form onSubmit={handleSubmit}
            className="input-group mt-4">
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={data.nombre} onChange={handleChange} />
                </label><br />
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={data.apellido} onChange={handleChange} />
                </label><br />
                <label>
                    CUIT/CUIL:
                    <input type="text" name="cuitCuil" value={data.cuitCuil} onChange={handleChange} />
                </label><br />
                <label>
                    Calle:
                    <input type="text" name="calle" value={data.calle} onChange={handleChange} />
                </label><br />
                <label>
                    Departamento:
                    <input type="text" name="departamento" value={data.departamento} onChange={handleChange} />
                </label><br />
                <label>
                    Altura:
                    <input type="text" name="alturaCalle" value={data.alturaCalle} onChange={handleChange} />
                </label><br />
                <DropdownButton id="dropdown-basic-button" title={localidadSeleccionada || 'Seleccionar'}>
                    {dataLocalidad.map((localidad, index) => (
                        <Dropdown.Item key={index} onClick={() => handleChangeIdLocalidad(localidad)}>
                            {localidad.nombre}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>

                <label>
                    Nombre de Usuario:
                    <input type="text" name="username" value={data.username} onChange={handleChange} />
                </label><br />
                <label>
                    Contraseña:
                    <input type="password" name="password" value={data.password} onChange={handleChange} />
                </label><br />
                <Button 
                type="submit"
                className="btn btn-primary text-white w-100 mt-4 fw-semibold shadow-sm"
                onClick={registrarse}>
                    Registrarse
                </Button>
            </Form>
        </div>
    );
}

export default RegistroCliente;
