import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';

const cookies = new Cookies()
const cookie = new Cookies()
function RegistroCliente() {
    // const [dataLocalidad, setDataLocalidad] = useState([]);
    // const [localidadSeleccionada, setLocalidadSeleccionada] = useState('');
    // const [idLocalidad, setIdLocalidad] = useState('');

    // const obtenerFechaHoraUTC = () => {
    //     const ahora = new Date();
    //     return ahora.toISOString();
    // };

    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        cuitCuil: '',
        alta: "",
        calle: '',
        departamento: '',
        alturaCalle: '',
        idLocalidad: '',
        username: '',
        password: ''
    });
    const [numeroCuenta, setNumeroCuenta] = useState()

      //--FECHA--//

  // Obtener la fecha actual
  const fechaActual = new Date();

  // Obtener los componentes individuales de la fecha
  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
  const dia = fechaActual.getDate();
  const horas = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();
  // Obtener milisegundos y formatear los segundos con dos dígitos
  const milisegundos = fechaActual.getMilliseconds();
  const segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
  // Formatear la fecha como YYYY-MM-DDTHH:MM:SS.sssZ, así lo pide el json del swagger
  const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}T${horas}:${minutos}:${segundosFormateados}.${milisegundos}Z`;
  console.log(fechaFormateada);
  //----//

    // useEffect(() => {
    //     getDataLocalidad();
    // }, []);

    // const handleChangeIdLocalidad = (localidad) => {
    //     setIdLocalidad(localidad.id);
    //     setLocalidadSeleccionada(localidad.nombre);
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const generarNumeroAleatorio = (length) => {
    //     let numeroAleatorio = '';
    //     for (let i = 0; i < length; i++) {
    //         numeroAleatorio += Math.floor(Math.random() * 10);
    //     }
    //     return numeroAleatorio;
    // };

    // const numeroCuentaAleatorio = generarNumeroAleatorio(10);
    // const cbuAleatorio = generarNumeroAleatorio(12);

    // console.log(numeroCuentaAleatorio);
    // console.log(cbuAleatorio);
    // Cuenta //



    const crearCuenta = async () => {
        const dataCuenta = {
            Id: 0,
            Numero: 0,
            Cbu: "",
            IdTipoCuenta: 1,
            IdBanco: 1,
            IdSucursal: 1
        }
        try {
            const response = await axios.post('https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta', dataCuenta );
            console.log("numero de cuenta", response.data.numero)
            setNumeroCuenta(response.data.numero)
            console.log(numeroCuenta);
        } catch (error) {
            console.error('Error al crear la cuenta:', error.message);
        }
    };
    
    // ---- //

    const idCuenta = async (numeroCuenta) => {
        try {
            const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/IdxNumeroCuenta/${numeroCuenta}`);
            console.log(response.data.id)
            return response.data.id;
        } catch (error) {
            console.error('Error al obtener el ID de la cuenta:', error);
        }
    };

    // CienteCuenta  //

    const idCliente = async () => {
        try {
            const cuitCuil = cookies.get('cuitCuil');
            console.log("valor de la cookie: ", cuitCuil);
            if (!cuitCuil) {
                console.error('No se encontró ningún CUIT/CUIL en la cookie.');
                return null; // O devuelve lo que sea apropiado en tu caso
            }
    
            const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/IdxCuitCuil/${cuitCuil}`);
            console.log(response.data.id);
            return response.data.id;
        } catch (error) {
            console.error('Error al obtener el ID del cliente:', error);
            return null; // O maneja el error de otra manera, según tus necesidades
        }
    };
    


    const crearClienteCuenta = async () => {
        const idCu = idCuenta(numeroCuenta);
        console.log(idCu);
        const idC = idCliente();
        console.log(idC);
        const dataClienteCuenta = {
            Id: 0,
            Titular: true,
            Alta: fechaFormateada,
            IdCliente: idC,
            IdCuenta: idCu
        }
        try {
            const response = await axios.post('https://colosal.duckdns.org:15001/MilagroFinanciero/ClienteCuenta', dataClienteCuenta);
            console.log(response.data);
        } catch (error) {
            console.error('Error al crear el cliente-cuenta:', error.message);
        }
    };

    // ---- //

    // Registro Cliente //

    const registrarse = async () => {
    const dataCliente = {
        Id: 0,
        Nombre: data.nombre,
        Apellido: data.apellido,
        CuitCuil: data.cuitCuil,
        Alta: fechaFormateada,
        Calle: data.calle,
        Departamento: data.departamento,
        AlturaCalle: data.alturaCalle,
        Username: data.username,
        Password: data.password,
        IdLocalidad: data.idLocalidad,
    }     
    try {
        const response = await axios.post('https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente', dataCliente);
        console.log(response.data)
        const cuitCuil = response.data.cuitCuil;

        if (cuitCuil) {
            cookies.set('cuitCuil', cuitCuil, { path: '/' });
            console.log('Número de CUIT/CUIL guardado en la cookie:', cuitCuil);
            // window.location.href = '/MilagroFinanciero/Home';
        } else {
            console.log('No se recibió un número de CUIT/CUIL en la respuesta.');
        }
        } catch (error) {
            console.error('Error al registrar el cliente:', error.message);
        }
    };
    // ---- //  


    const handleSubmit = async (e) => {
        e.preventDefault();
        await registrarse();
        if (cookies.get('cuitCuil')){
            
            await crearCuenta();
            if (cookies.get('numeroCuenta')){
                console.log('Se recibio numero de cuenta')
                await crearClienteCuenta(numeroCuenta);
            }else{
                console.log('No se recibió un número de cuenta en la respuesta.');
            }
        }else{
            console.log('No se recibió un número de CUIT/CUIL en la respuesta.');
        }
        
    };



    // const getDataLocalidad = () => {
    //     axios.get('https://localhost:7042/Localidad')
    //         .then((result) => {
    //             const dataWithIds = result.data.map((localidad, index) => ({ id: index + 1, nombre: localidad.nombre }));
    //             setDataLocalidad(dataWithIds);
    //         })
    //         .catch((error) => {
    //             console.error('Error al obtener datos de las localidades:', error.message);
    //         });
    // };


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
                {/* <DropdownButton id="dropdown-basic-button" title={localidadSeleccionada || 'Seleccionar'}>
                    {dataLocalidad.map((localidad, index) => (
                        <Dropdown.Item key={index} onClick={() => handleChangeIdLocalidad(localidad)}>
                            {localidad.nombre}
                        </Dropdown.Item>
                    ))}
                </DropdownButton> */}
                <label>
                    Localidad:
                    <input type="text" name="idLocalidad" value={data.idLocalidad} onChange={handleChange} />
                </label><br />

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
                onClick={handleSubmit}>
                    Registrarse
                
                </Button>
                
            </Form>
        </div>
    );
}
export default RegistroCliente;
