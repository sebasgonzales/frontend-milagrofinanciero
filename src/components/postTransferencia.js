
import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
//import { Form, Button } from 'react-bootstrap';
import './postTransferencia.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';

function PostTransferencia() {

  //OBTENGO LOS DATOS DE LAS CUENTAS ------------
  const getDataCuentas = () => {
    return axios.get('https://localhost:7042/Cuenta')
      .then(response => {
        const data = response.data;
        console.log('Data de cuentas:', data);
        //return data; // Si deseas devolver la data para su posterior uso
      })
      .catch(error => {
        throw new Error(`Error al obtener la data de cuentas: ${error.message}`);
      });
  };
  getDataCuentas()
  .then(data => {
    // Aquí puedes manejar la data según tus necesidades
    // Por ejemplo, puedes renderizarla en la interfaz gráfica o realizar otras operaciones.
  })
  .catch(error => {
    // Manejar errores en la cadena de promesas
    console.error(error.message);
  });

//OBTENGO EL ID DE LA CUENTA DESTINO A TRAVES DEL CBU --------------
  const obtenerCuentaDestino = (CbuDestino) => {
    return axios.get(`https://localhost:7042/Cuenta/IdxCbu/${CbuDestino}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Error al obtener la cuenta destino: ${error.message}`);
      });
  };
  
  // Uso de la función
  obtenerCuentaDestino("1234567890123456")
    .then(cuenta => {
      // Aquí puedes manejar la data de la cuenta según tus necesidades
      console.log('ID Cuenta destino:', cuenta);
    })
    .catch(error => {
      // Manejar errores en la cadena de promesas
      console.error(error.message);
    });
  
//OBTENGO EL ID DE LA CUENTA ORIGEN A TRAVES DEL NUMERO DE CUENTA -----------
const obtenerCuentaOrigen = (NumeroCuentaOrigen) => {
  return axios.get(`https://localhost:7042/Cuenta/IdxNumeroCuenta/${NumeroCuentaOrigen}`)
  .then(response => response.data)
    .catch(error => {
      throw new Error(`Error al obtener la cuenta Origen: ${error.message}`);
    });
};


// Uso de la función
obtenerCuentaOrigen("123456789")
  .then(cuenta => {
    // Aquí puedes manejar la data de la cuenta según tus necesidades
    console.log(' ID Cuenta origen:', cuenta);
  })
  .catch(error => {
    // Manejar errores en la cadena de promesas
    console.error(error.message);
  });

// POST TRANSACCION ---------------------
// Definir la función para realizar la transacción
const realizarTransaccion = async () => {
  try {
    // Construir el objeto de datos para la solicitud POST de transacción
    const dataTransaccion = {
      Id: 99,
      Monto: 10,
      Acreditacion: "2024-01-21",
      Realizacion: "2024-01-21",
      Motivo: "intento front",
      Referencia: "ojala salga",
      IdCuentaOrigen: 3,
      IdCuentaDestino: 1,
      IdTipoTransaccion: 1
      // Otras propiedades según sea necesario
    };
    

    // Realizar la solicitud POST de transacción
    //const response = await axios.post('https://localhost:7042/Transaccion',  dataTransaccion, dataFront);
    const response = await axios.post('https://localhost:7042/Transaccion?numeroCuentaOrigen=1122334455&cbuDestino=1234567890123456&monto=1', dataTransaccion);

    // Manejar la respuesta del servidor
    console.log(response.data);
  } catch (error) {
    // Capturar y manejar errores en la cadena de promesas
    console.error('Error en la solicitud POST:', error.response.data);
  }
};

// Llamar a la función para realizar la transacción con los datos escritos manualmente
realizarTransaccion();


  // return (

  //    <Form className="labelPersonalizado" noValidate validated={validated} onSubmit={handleSubmit}>
  //   {/* <Form className="labelPersonalizado">  */}
  //     <Form.Group as={Col} controlId="validationCustom01" className="align-items-start" >
  //       <Form.Label className="mb-2 ">Cuenta Destino
  //       </Form.Label>
  //       <Form.Control
  //         type="text"
  //         placeholder="Ingrese el Cbu"
  //         name="cbu"
  //         value={cbuDestino}
  //         onChange={handleInputChange}
  //         required
  //       />
  //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  //       <Button variant="primary" className="ms-2" >
  //         Buscar
  //       </Button>
  //     </Form.Group>

  //     <Form.Group as={Col} controlId="validationCustom02">
  //       <Form.Label>Monto</Form.Label>
  //       <Form.Control
  //         type="text"
  //         placeholder="Ingrese el monto"
  //         name="monto"
  //         value={monto}
  //         onChange={handleInputChange}
  //         required
  //       />
  //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  //     </Form.Group>
  //     <Form.Group as={Col} controlId="validationCustomUsername">
  //       <Form.Label>Motivo</Form.Label>
  //       <select class="form-select" aria-label="Default select example">
  //         <option selected>Seleccionar</option>
  //         <option value="1">One</option>
  //         <option value="2">Two</option>
  //         <option value="3">Three</option>
  //       </select>
  //     </Form.Group>
  //     <Form.Group as={Col} controlId="validationCustom01">
  //       <Form.Label>Referencia</Form.Label>
  //       <Form.Control
  //         type="text"
  //         placeholder="Ingrese la referencia"
  //         name="referencia"
  //         value={referencia}
  //         onChange={handleInputChange}
  //         required
  //       />
  //     </Form.Group>



  //     <div className="botonesAlPie mb-2">
  //       <Button className="Btn2" variant="secondary" size="lg">
  //         Cancelar
  //       </Button>{' '}
  //       <Button className="Btn1" type="submit" variant="primary" size="lg" onClick={handlePostRequest}
  //         disabled={loading} >
  //         {loading ? 'Transfiriendo...' : 'Transferir'}
  //       </Button>

  //     </div>
  //   </Form>



  //);
}

export default PostTransferencia;