import React, { useState, useEffect } from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Table } from 'reactstrap';
import ListadoCuentasySaldo from '../../components/miCuenta/ListadoCuentasySaldo';
import NavbarHome from '../../components/navegacion/navbarHome'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const cuitCuil = cookies.get('cuitCuil');

const MiCuenta = () => {
  const [nombreCliente, setNombreCliente] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [dataClienteCuentas, setDataClienteCuentas] = useState([]);

  useEffect(() => {
    getDataNombreCliente();
    getDataCuentasCliente();
  }, []);

  const getDataNombreCliente = () => {
    axios.get(`https://localhost:7042/Cliente/clientes/Nombre/${cuitCuil}/Cliente`)
      .then((result) => {
        console.log("Result", result.data);
        setNombreCliente(result.data);
      })
      .catch((error) => {
        console.log("Error al obtener la información del cliente");
      });
  }

  const getDataCuentasCliente = () => {
    axios.get(`https://localhost:7042/Cliente/clientes/CuitCuil/${cuitCuil}/ClienteCuenta`)
    .then((result) => {
        const cuentas = result.data.map(cuenta => cuenta.numeroCuenta);
        setDataClienteCuentas(cuentas);
        console.log(cuentas)
    })
    .catch((error) => {
        console.log("Error al obtener la información de las cuentas");
    });
    // axios.get(`https://localhost:7042/Home/Cuentas/deamon16`)
    //   .then((result) => {
    //     if (Array.isArray(result.data)) {
    //       setDataClienteCuentas(result.data);
    //     } else {
    //       console.log("La información de las cuentas no es un array");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error al obtener la información de las cuentas");
    //   });
  }
  const [editIndex, setEditIndex] = useState(null); // Nuevo estado para almacenar el índice de la cuenta en edición

  const [form, setForm] = useState({
    tipoCuenta: '',
    rol: '',
    sucursal: 'Sucursal A'
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleInsertar = () => {
    // Lógica para insertar una nueva cuenta
    axios.post('https://localhost:7042/crear-cuenta', form)
      .then((response) => {
        // Aquí puedes manejar la respuesta de la creación de la cuenta
        console.log("Cuenta creada exitosamente:", response.data);
        // Actualiza las cuentas con la nueva cuenta
        setDataClienteCuentas([...dataClienteCuentas, response.data]);
        // Oculta el modal después de insertar
        setModalVisible(false);
      })
      .catch((error) => {
        // En caso de error al crear la cuenta
        console.error("Error al crear la cuenta:", error);
      });
  };
  const handleEditar = (index) => {
    const cuenta = dataClienteCuentas[index];
    setForm({
      tipoCuenta: cuenta.tipoCuenta,
      rol: cuenta.rol,
      sucursal: 'Sucursal A'
    });
    setEditIndex(index); // Establece el índice de la cuenta en edición
    setModalVisible(true);
  };

  const handleEliminar = (index) => {
    const nuevasCuentas = [...dataClienteCuentas];
    nuevasCuentas.splice(index, 1);
    setDataClienteCuentas(nuevasCuentas);
  };

  return (
    <div>
      <NavbarHome></NavbarHome>
      <div className='container mt-5'>
        <div>
          <div className='row'>
            <div className='col'>
              <h1>{nombreCliente}, estas son tus cuentas:</h1>
            </div>
            <div className='col-md-4'>
            <Container>
        <div>
          <Button color="primary" onClick={() => setModalVisible(true)}>Nueva cuenta</Button>
        </div>
      </Container>
            </div>
          </div>
          <br></br>
        </div>
        <div className='p-5 shadow rounded-5' style={{ backgroundColor: '#CAF0F8' }}>
      {dataClienteCuentas.map((numeroCuenta, index) => (
        <ListadoCuentasySaldo key={index} numeroCuenta={numeroCuenta} />
      ))}
    </div>
      </div>
      <Modal isOpen={modalVisible}>
        <ModalHeader>
          <div><h3>Insertar Nueva Cuenta</h3></div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Tipo de cuenta:</label>
            <select className="form-control" name="tipoCuenta" onChange={handleChange} value={form.tipoCuenta}>
              <option value="corriente">Corriente</option>
              <option value="ahorro">Ahorro</option>
              <option value="nomina">Nómina</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Rol:</label>
            <select className="form-control" name="rol" onChange={handleChange} value={form.rol}>
              <option value="propia">Propia</option>
              <option value="extension">Extensión</option>
            </select>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleInsertar}>Insertar</Button>
          <Button color="secondary" onClick={() => setModalVisible(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MiCuenta;
