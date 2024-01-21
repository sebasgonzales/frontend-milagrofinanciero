
import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
//import { Form, Button } from 'react-bootstrap';
import './postTransferencia.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';

function PostTransferenciaV2() {


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


  const [CbuDestino, setCbuDestino] = useState('');
  const [monto, setMonto] = useState('');
  const [referencia, setReferencia] = useState('');
  const [cuentaId, setCuentaId] = useState(null);


// OBTENGO EL ID DE LA CUENTA DESTINO A TRAVES DEL CBU --------------
const obtenerCuentaDestino = async (CbuDestino) => {
    try {
      const response = await axios.get(`https://localhost:7042/Cuenta/IdxCbu/${CbuDestino}`);
      const cuentaId = response.data.cuentaId;
      console.log('ID de la cuenta destino:', cuentaId); // Mostrar en consola
      return cuentaId;
    } catch (error) {
      throw new Error(`Error al obtener la cuenta destino: ${error.message}`);
    }
  };

  const handleChangeCbuDestino = async (e) => {
    const nuevoCbuDestino = e.target.value;
    setCbuDestino(nuevoCbuDestino);

    try {
      const idCuenta = await obtenerCuentaDestino(nuevoCbuDestino);
      setCuentaId(idCuenta);
      setError(null); // Restablecer el estado de error si se resuelve correctamente
    } catch (error) {
      // Manejar errores en la obtención de la cuenta
      console.error(error.message);
      setError(error.message);
      setCuentaId(null); // Restablecer el ID de la cuenta en caso de error
    }
  };

  const handleChangeMonto = (e) => {
    setMonto(e.target.value);
  };
  const handleChangeReferencia = (e) => {
    setReferencia(e.target.value);
  };

// Obtener la fecha actual
const fechaActual = new Date();

// Obtener los componentes individuales de la fecha
const año = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
const dia = fechaActual.getDate();

// Formatear la fecha como YYYY-MM-DD
const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;

// Imprimir la fecha formateada
console.log(fechaFormateada);


//   // Uso de la función
//   obtenerCuentaDestino("1234567890123456")
//     .then(cuenta => {
//       // Aquí puedes manejar la data de la cuenta según tus necesidades
//       console.log('ID Cuenta destino:', cuenta);
//     })
//     .catch(error => {
//       // Manejar errores en la cadena de promesas
//       console.error(error.message);
//     });
  
// //OBTENGO EL ID DE LA CUENTA ORIGEN A TRAVES DEL NUMERO DE CUENTA -----------
// const obtenerCuentaOrigen = (NumeroCuentaOrigen) => {
//   return axios.get(`https://localhost:7042/Cuenta/IdxNumeroCuenta/${NumeroCuentaOrigen}`)
//   .then(response => response.data)
//     .catch(error => {
//       throw new Error(`Error al obtener la cuenta Origen: ${error.message}`);
//     });
// };


// // Uso de la función
// obtenerCuentaOrigen("123456789")
//   .then(cuenta => {
//     // Aquí puedes manejar la data de la cuenta según tus necesidades
//     console.log(' ID Cuenta origen:', cuenta);
//   })
//   .catch(error => {
//     // Manejar errores en la cadena de promesas
//     console.error(error.message);
//   });

// POST TRANSACCION ---------------------
// Definir la función para realizar la transacción
const realizarTransaccion = async () => {
  try {
    // Construir el objeto de datos para la solicitud POST de transacción
    const dataTransaccion = {
      Id: 99,
      Monto: monto,
      Acreditacion: fechaFormateada,
      Realizacion: fechaFormateada,
      Motivo: "a ver confecha",
      Referencia: referencia,
      IdCuentaOrigen: 3,
      IdCuentaDestino: cuentaId,
      IdTipoTransaccion: 1
      // Otras propiedades según sea necesario
    };
    

    // Realizar la solicitud POST de transacción
    //const response = await axios.post('https://localhost:7042/Transaccion',  dataTransaccion, dataFront);
    const response = await axios.post(`https://localhost:7042/Transaccion?numeroCuentaOrigen=1122334455&cbuDestino=${CbuDestino}&monto=${monto}`, dataTransaccion);

    console.log('Respuesta de la transacción:', response.data);
} catch (error) {
  console.error('Error al realizar la transacción:', error.message);
}
};

// Llamar a la función para realizar la transacción con los datos escritos manualmente



//--VALIDACION
const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [error, setError] = useState(null);

return (

     <Form className="labelPersonalizado" noValidate validated={validated} onSubmit={handleSubmit}>
    {/* <Form className="labelPersonalizado">  */}
      <Form.Group as={Col} controlId="validationCustom01" className="align-items-start" >
      <Form.Label>Cuenta Destino</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
         type="text"
         placeholder="Ingrese el cbu"
         name="Cbu"
        value={CbuDestino}
         onChange={handleChangeCbuDestino}
        aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <div>
       {cuentaId !== null && (
        <Alert variant="success">
          ID de la cuenta destino: {cuentaId}
        </Alert>
      )}

      {error && (
        <Alert variant="danger">
          Error al obtener la cuenta destino: {error}
        </Alert>
      )}
       </div>
      </Form.Group>

      <Form.Group as={Col} controlId="validationCustom02">
        <Form.Label>Monto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el monto"
          name="monto"
         value={monto}
         onChange={handleChangeMonto}
          required
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} controlId="validationCustomUsername">
        <Form.Label>Motivo</Form.Label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Seleccionar</option>
          <option value="1">Varios</option>
          <option value="2">Alquiler</option>
          <option value="3">Three</option>
        </select>
      </Form.Group>
      <Form.Group as={Col} controlId="validationCustom01">
        <Form.Label>Referencia</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la referencia"
          name="referencia"
          value={referencia}
          onChange={handleChangeReferencia}
          
          required
        />
      </Form.Group>



      <div className="botonesAlPie mb-2">
        <Button className="Btn2" variant="secondary" size="lg">
          Cancelar
        </Button>{' '}
        <Button className="Btn1" type="submit" variant="primary" size="lg" onClick={realizarTransaccion}
         >Transferir
        </Button>

        
       </div>

       
     </Form>
    



  );
}

export default PostTransferenciaV2;