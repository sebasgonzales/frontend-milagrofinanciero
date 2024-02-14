import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Table } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const MiCuenta = ({ onCuentaSeleccionada }) => {
  const [clienteCuentas, setClienteCuentas] = useState([]);
  const [form, setForm] = useState({
    tipoCuenta: '',
    rol: '',
    sucursal: 'Sucursal A'
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Nuevo estado para almacenar el índice de la cuenta en edición

  useEffect(() => {
    // Lógica para cargar las cuentas del cliente desde la API
    axios.get('https://localhost:7042/clientexcuenta/cliente/deamon16')
      .then((result) => {
        setClienteCuentas(result.data);
      })
      .catch((error) => {
        console.log("Error al obtener la información de las cuentas");
      });
  }, []);

  const handleInsertar = () => {
    // Lógica para insertar una nueva cuenta
    axios.post('https://localhost:7042/crear-cuenta', form)
      .then((response) => {
        // Aquí puedes manejar la respuesta de la creación de la cuenta
        console.log("Cuenta creada exitosamente:", response.data);
        // Actualiza las cuentas con la nueva cuenta
        setClienteCuentas([...clienteCuentas, response.data]);
        // Oculta el modal después de insertar
        setModalVisible(false);
      })
      .catch((error) => {
        // En caso de error al crear la cuenta
        console.error("Error al crear la cuenta:", error);
      });
  };

  const handleEditar = (index) => {
    const cuenta = clienteCuentas[index];
    setForm({
      tipoCuenta: cuenta.tipoCuenta,
      rol: cuenta.rol,
      sucursal: 'Sucursal A'
    });
    setEditIndex(index); // Establece el índice de la cuenta en edición
    setModalVisible(true);
  };

  const handleEliminar = (index) => {
    const nuevasCuentas = [...clienteCuentas];
    nuevasCuentas.splice(index, 1);
    setClienteCuentas(nuevasCuentas);
  };

  const insertar = () => {
    if (editIndex !== null) {
      // Si hay un índice en edición, reemplaza la cuenta existente
      const nuevasCuentas = [...clienteCuentas];
      nuevasCuentas[editIndex] = form;
      setClienteCuentas(nuevasCuentas);
      setEditIndex(null); // Restablece el índice de edición a null
    } else {
      // Si no hay un índice en edición, inserta una nueva cuenta
      setClienteCuentas([...clienteCuentas, form]);
    }
    setModalVisible(false);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container>
        <div>
          <Button color="primary" onClick={() => setModalVisible(true)}>Nueva cuenta</Button>
        </div>
      </Container>

      <Table>
        <thead>
          <tr>
            <th>Número de Cuenta</th>
            <th>CBU</th>
            <th>Tipo de Cuenta</th>
            <th>Rol</th>
            <th>Sucursal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clienteCuentas.map((cuenta, index) => (
            <tr key={index}>
              <td>{cuenta.numeroCuenta}</td>
              <td>{cuenta.cbu}</td>
              <td>{cuenta.tipoCuenta}</td>
              <td>{cuenta.rol}</td>
              <td>{cuenta.sucursal}</td>
              <td>
                <Button color="primary" onClick={() => handleEditar(index)}>Editar</Button>{' '}
                <Button color="danger" onClick={() => handleEliminar(index)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

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
          <Button color="primary" onClick={insertar}>Insertar</Button>
          <Button color="secondary" onClick={() => setModalVisible(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default MiCuenta;
