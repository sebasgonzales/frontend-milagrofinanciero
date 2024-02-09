import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Configuracion = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('Cuit');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [pais, setPais] = useState('Argentina');
  const [localidad, setLocalidad] = useState('');
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [editando, setEditando] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [localidadesPorPais, setLocalidadesPorPais] = useState({});

  useEffect(() => {
    const obtenerLocalidades = async () => {
      try {
        const response = await axios.get('/Localidad');
        setLocalidadesPorPais(response.data);
      } catch (error) {
        console.error('Error al obtener las localidades:', error);
      }
    };
    obtenerLocalidades();

    const obtenerDatosCliente = async () => {
      try {
        const response = await axios.get('https://localhost:7042/cliente/configuracion');
        const cliente = response.data.find(cliente => cliente.cuitCuil === '1234567890');
        if (cliente) {
          const { razonSocial, tipoDocumento, numeroDocumento, pais, localidad, calle, alturaCalle, departamento } = cliente;
          setNombre(razonSocial.split(' ')[0]);
          setApellido(razonSocial.split(' ')[1]);
          setTipoDocumento(tipoDocumento);
          setNumeroDocumento(numeroDocumento);
          setPais(pais);
          setLocalidad(localidad);
          setCalle(calle);
          setNumero(alturaCalle);
          setDepartamento(departamento);
        }
      } catch (error) {
        console.error('Error al obtener la configuración del cliente:', error);
      }
    };
    obtenerDatosCliente();
  }, []);

  const handleModificar = () => {
    setEditando(true);
  };

  const handleGuardar = async () => {
    setGuardando(true);
    try {
      const datosModificados = { nombre, apellido, tipoDocumento, numeroDocumento, pais, localidad, calle, numero, departamento };
      await axios.post('https://localhost:7042/cliente/configuracion', datosModificados);
      console.log('Datos guardados exitosamente');
      setGuardando(false);
      setEditando(false);
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      setGuardando(false);
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="container mt-5">
      <h1>Datos personales</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => handleInputChange(e, setNombre)} disabled={!editando} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Apellido:</label>
          <input type="text" className="form-control" value={apellido} onChange={(e) => handleInputChange(e, setApellido)} disabled={!editando} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Tipo y Número de documento:</label>
          <select className="form-select" value={tipoDocumento} onChange={(e) => handleInputChange(e, setTipoDocumento)} disabled={!editando}>
            <option value="Cuit">Cuit</option>
            <option value="DNI">DNI</option>
          </select>
          <input type="text" className="form-control mt-2" value={numeroDocumento} onChange={(e) => handleInputChange(e, setNumeroDocumento)} disabled={!editando} />
        </div>
        <div className="col-md-6">
          <label className="form-label">País:</label>
          <select className="form-select" value={pais} onChange={(e) => handleInputChange(e, setPais)} disabled={!editando}>
            <option value="Argentina">Argentina</option>
            {/* aca se pueden agregar mas paises para hardcodear o llamarlo desde el axios*/}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Localidad:</label>
          <select className="form-select" value={localidad} onChange={(e) => handleInputChange(e, setLocalidad)} disabled={!editando}>
            {pais && localidadesPorPais[pais] && localidadesPorPais[pais].map(localidad => (
              <option key={localidad} value={localidad}>{localidad}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Calle:</label>
          <input type="text" className="form-control" value={calle} onChange={(e) => handleInputChange(e, setCalle)} disabled={!editando} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Número:</label>
          <input type="text" className="form-control" value={numero} onChange={(e) => handleInputChange(e, setNumero)} disabled={!editando} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Departamento:</label>
          <input type="text" className="form-control" value={departamento} onChange={(e) => handleInputChange(e, setDepartamento)} disabled={!editando} />
        </div>
        <div className="col-12">
          {editando ? (
            <button type="button" className="btn btn-primary me-2" onClick={handleGuardar} disabled={guardando}>
              Guardar
            </button>
          ) : (
            <button type="button" className="btn btn-primary me-2" onClick={handleModificar} disabled={guardando}>
              Modificar
            </button>
          )}
          <button type="button" className="btn btn-secondary">Volver</button>
        </div>
      </form>
    </div>
  );
};

export default Configuracion;