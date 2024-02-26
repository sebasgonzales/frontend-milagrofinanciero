import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';

const cookies = new Cookies()

function RegistroCliente() {

    // Data para transferencia //
    const [cbu, setCbuDestino] = useState('');

    // Data para el Dropdown //
    const [dataLocalidad, setDataLocalidad] = useState([]);
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('');
    const [idLocalidad, setIdLocalidad] = useState('');
    // Find Data Dropdowns // 

    // Data para provincias //
    const [provincias, setProvincias] = useState([]);
    const [provinciaSeleccionada, setProvinciaSeleccionada] = useState('');
    // fin data provincias // 

    const [idcuen, setIdCuenta] = useState('');
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
    const [numeroCuenta, setNumeroCuenta] = useState('')

    //--FECHA formateada--//

    // Obtener la fecha actual
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; 
    const dia = fechaActual.getDate();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();
    const milisegundos = fechaActual.getMilliseconds();
    const segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
    const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}T${horas}:${minutos}:${segundosFormateados}.${milisegundos}Z`;
    //----//
    
    //Funciones para provincia //
    useEffect(() => {
        obtenerProvincias();
    }, []);

    const obtenerProvincias = async () => {
        try {
            const response = await axios.get('https://localhost:7042/Provincia/provinciasNombre');
            console.log(response.data); // Verificar la estructura de los datos recibidos
            setProvincias(response.data);
        } catch (error) {
            console.error('Error al obtener las provincias:', error);
        }
    };
    

    const handleProvinciaSeleccionada = (provincia) => {
        setProvinciaSeleccionada(provincia);
    };
    // Fin funciones //    

    // Funciones Dropdown //
    useEffect(() => {
        getDataLocalidad();
    }, [provinciaSeleccionada]);

    const handleChangeIdLocalidad = (localidad) => {
        setIdLocalidad(localidad.id);
        setLocalidadSeleccionada(localidad.nombre);
    };

    const getDataLocalidad = async () => {
        try {
            const response = await axios.get(`https://localhost:7042/Localidad/provincia/${provinciaSeleccionada}`);
            const dataWithIds = response.data.map((localidad, index) => ({ id: index + 1, nombre: localidad.nombre }));
            setDataLocalidad(dataWithIds);
        } catch (error) {
            console.error('Error al obtener datos de las localidades:', error.message);
        }
    };
    // Fin Funciones Drowpdown //

    const idCuenta = async (numeroCuenta) => {
        try {
            const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/IdxNumeroCuenta/${numeroCuenta}`);
            console.log(response.data.id)
            setIdCuenta(response.data.id)
            return response.data.id;
        } catch (error) {
            console.error('Error al obtener el ID de la cuenta:', error);
        }
    };

    const idCliente = async () => {
        try {
            const cuitCuil = data.cuitCuil; // Obtener el CUIT/CUIL del formulario
            console.log("valor del CUIT/CUIL del formulario: ", cuitCuil);
            if (!cuitCuil) {
                console.error('No se encontró ningún CUIT/CUIL en el formulario.');
                return null;
            } else {
                const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/IdxCuitCuil/${cuitCuil}`);
                console.log(response.data.id);
                return response.data.id;
            }
        } catch (error) {
            console.error('Error al obtener el ID del cliente:', error);
            return null;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registrarse();
        //CREA Y REDIRIJE A PRESENTACION
        //window.location.href='/MilagroFinanciero'
        // if (cookies.get('cuitCuil')) {
        //     if (cookies.get('numeroCuenta')) {
        //         console.log('Se recibio numero de cuenta')
        //         //await crearClienteCuenta(numeroCuenta);

        //     } else {
        //         console.log('No se recibió un número de cuenta en la respuesta.');
        //     }
        // } else {
        //     console.log('No se recibió un número de CUIT/CUIL en la respuesta.');
        // }

    };
 
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
            IdLocalidad: idLocalidad,
        }
        try {
            console.log("valor de idLocalidad", idLocalidad);
            const response = await axios.post('https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente', dataCliente);
            console.log(response.data)
            const cuitCuil = response.data.cuitCuil;
            console.log("se crea el cliente!!!")
            await crearCuenta();

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

    // Transaccion //
    
    var monto = 10000;
    console.log(monto);

    const dataTInicial = {
        Id: 0,
        Monto: 10000,
        Realizacion: fechaFormateada,
        IdTipoMotivo: 1,
        Referencia: 'Transferencia Inicial',
        IdCuentaOrigen: 131,
        IdCuentaDestino: idcuen,
        IdTipoTransaccion: 2
    };

    const transaccionInicial = async (monto) => {
        try{
            const response = await axios.post(`https://localhost:7042/Transaccion?numeroCuentaOrigen=111396740353&cbuDestino=${cbu}&monto=${monto}`, dataTInicial);
            console.log('Respuesta de la transacción:', response.data);
            console.log('Saldo data :', response.data.Monto, 'Saldo por parametro :', monto);
            console.log('TRANSACCION REALIZADA!!')
        } catch (error) {
            console.log("Error al realizar la transacción", error);
        }
    }

    //CREAR CUENTA
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
            const response = await axios.post('https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta', dataCuenta);
            console.log("numero de cuenta", response.data.numero)
            console.log(response.data)
            setNumeroCuenta(response.data.numero)
            setCbuDestino(response.data.cbu)  // Aquí cambia response.data.Cbu a response.data.cbu
            console.log("se seteo el cbu", response.data.cbu) // Aquí cambia response.data.Cbu a response.data.cbu
            console.log("se seteo el numero de cuenta:", response.data.numero)
            // cookies.set('idCuenta', response.Id, { path: '/' })
            // cookies.set('cbu', response.Cbu, { path: '/' })
            console.log("se crea la cuenta!!!")
            await crearClienteCuenta(response.data.numero); // Pasar el número de cuenta como argumento
            //console.log(numeroCuenta);
        } catch (error) {
            console.error('Error al crear la cuenta:', error.message);
        }
    };
    
    //CREAR CLIENTECUENTA 
    const crearClienteCuenta = async (numeroCuenta) => { // Solo pasar el número de cuenta como argumento
        try {
            // Obtener el id del cliente de manera asíncrona
            const idC = await idCliente();
    
            // Verificar si se obtuvo el id del cliente
            if (idC) {
                const idCu = await idCuenta(numeroCuenta); // Obtener el id de la cuenta utilizando el número de cuenta
    
                const dataClienteCuenta = {
                    Id: 0,
                    Titular: true,
                    Alta: fechaFormateada,
                    IdCliente: idC,
                    IdCuenta: idCu
                };
    
                // Crear la relación cliente-cuenta
                const response = await axios.post('https://colosal.duckdns.org:15001/MilagroFinanciero/ClienteCuenta', dataClienteCuenta);
                console.log(response.data);
                console.log("¡Se creó clienteXCuenta!");
                console.log(cbu)
                console.log(monto)
                console.log(dataTInicial)
                console.log(numeroCuenta)
                transaccionInicial(monto) // Solo pasar el monto como argumento
            } else {
                console.log('Error al obtener el ID del cliente.');
            }
        } catch (error) {
            console.error('Error al crear el cliente-cuenta:', error.message);
        }
    };

    // ---- //

    return (
        <div>
            <h2>Registro de Cliente</h2>
            <Form onSubmit={handleSubmit} className="input-group mt-4">
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
                <DropdownButton id="dropdown-basic-button" title={provinciaSeleccionada || 'Seleccionar'} onSelect={handleProvinciaSeleccionada}>
                    {provincias.map((provincia, index) => (
                        <Dropdown.Item key={index} eventKey={provincia} value={provincia}>
                            {provincia}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>

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
                    onClick={handleSubmit}>
                    Registrarse
                </Button>
            </Form>
        </div>
    );
}

export default RegistroCliente;
