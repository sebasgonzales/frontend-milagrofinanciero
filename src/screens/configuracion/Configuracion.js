import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies  from 'universal-cookie';
import NavbarHome from '../../components/navegacion/navbarHome'
const cookies = new Cookies();
const cuitCuil = cookies.get('cuitCuil');

const Configuracion = () => {
  // Estados para almacenar los datos
  //se traeria nombre, apellido, cuitCuil
  // calle, nro y departamento lo setea con lo demas
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('Cuit');
  //const [cuitCuil, setNumeroDocumento] = useState('');
  const [pais, setPais] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [localidades, setLocalidades] = useState([]);
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [paises, setPaises] = useState([]);


  // Función para obtener los datos del cliente
  const obtenerDatosCliente = async () => {
    try {
      const response = await axios.get('https://localhost:7042/Cliente/');
      const cliente = response.data.find(cliente => cliente.cuitCuil === `${cuitCuil}`);

      // Verifico si la respuesta contiene datos
      if (cliente) {
        const { nombre, apellido, cuitCuil, calle, alturaCalle, departamento } = cliente;
        console.log(response.data)
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Cuit/Cuil:', cuitCuil);
        console.log('Calle:', calle);
        console.log('Número:', alturaCalle);
        console.log('Departamento:', departamento);
  
        // seteo los estados con los datos del cliente
        setNombre(nombre);
        setApellido(apellido);
        setTipoDocumento('DNI'); // Supongo que el tipo de documento es fijo, es lo comun
        //setNumeroDocumento(cuitCuil);
        setCalle(calle);
        setNumero(alturaCalle);
        setDepartamento(departamento);
      } else {
        console.error('La respuesta no contiene datos');
      }
    } catch (error) {
      console.error('Error al obtener los datos del cliente:', error);
    }
  };
  

  // Función para obtener las localidades
  const obtenerLocalidades = async () => {
    try {
      const response = await axios.get('https://localhost:7042/Localidad');
      setLocalidades(response.data);
    } catch (error) {
      console.error('Error al obtener las localidades:', error);
    }
  };

  // Función para obtener los países
  const obtenerPaises = async () => {
    try {
      const response = await axios.get('https://localhost:7042/Pais');
      setPaises(response.data);
    } catch (error) {
      console.error('Error al obtener los países:', error);
    }
  };

  // Efecto para cargar los datos una vez que el componente se monta
  useEffect(() => {
    obtenerDatosCliente();
    obtenerLocalidades();
    obtenerPaises();
  }, []);

  // Función para manejar el botón "Volver"
  const handleVolver = () => {
    window.history.back();
  };

  // Retorno del componente con los datos mostrados en los elementos de formulario
  return (
    <div>
      <NavbarHome></NavbarHome>
      <div className="container mt-5">
  <h1>Datos personales</h1>
  <form className="row g-3">
    <div className="col-md-6">
      <label className="form-label">Nombre:</label>
      <input type="text" className="form-control" value={nombre} disabled />
    </div>
    <div className="col-md-6">
      <label className="form-label">Apellido:</label>
      <input type="text" className="form-control" value={apellido} disabled />
    </div>
    <div className="col-md-6">
      <label className="form-label">Tipo y Número de documento:</label>
      <select className="form-select" value={tipoDocumento} disabled>
      <option value="DNI">DNI</option>
        <option value="Cuit">Cuit</option>
      </select>
      <input type="text" className="form-control mt-2" value={cuitCuil} disabled />
    </div>
    <div className="col-md-6">
      <label className="form-label">País:</label>
      <select className="form-select" value={pais} disabled>
        {paises.map(pais => (
          <option key={pais.id} value={pais.nombre}>{pais.nombre}</option>
        ))}
      </select>
    </div>
    <div className="col-md-6">
      <label className="form-label">Localidad:</label>
      <select className="form-select" value={localidad} disabled>
        {localidades.map(localidad => (
          <option key={localidad.id} value={localidad.nombre}>{localidad.nombre}</option>
        ))}
      </select>
    </div>
    <div className="col-md-6">
      <label className="form-label">Calle:</label>
      <input type="text" className="form-control" value={calle} disabled />
    </div>
    <div className="col-md-6">
      <label className="form-label">Número:</label>
      <input type="text" className="form-control" value={numero} disabled />
    </div>
    <div className="col-md-6">
      <label className="form-label">Departamento:</label>
      <input type="text" className="form-control" value={departamento} disabled />
    </div>
    <div className="col-12">
      <button type="button" className="btn btn-secondary" onClick={handleVolver}>Volver</button>
    </div>
  </form>
</div>
    </div>
    

  );
};

export default Configuracion;
