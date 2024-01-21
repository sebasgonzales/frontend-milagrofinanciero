
import React,{useState,useEffect, Fragment} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './postTransferencia.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';

function PostTransferencia() {
  const [validated, setValidated] = useState(false);

  // Para setear la informacion de la BD
  const [dataTransaccion,setDataTransaccion] = useState([]);

  // Data Transaccion
  const [idTransaccion, setId] = useState(0)
  const [monto, setMonto] = useState('')
  const [numero, setNumero] = useState('')
  const [acreditacion, setAcreditacion] = useState ('')
  const [realizacion, setRealizacion] = useState ('')
  const [motivo, setMotivo] = useState ('')
  const [referencia, setReferencia] = useState ('')
  const [idCuentaOrigen, setIdCuentaOrigen] = useState ('')
  const [idCuentaDestino, setIdCuentaDestino] = useState ('')
  const [idTipoTransaccion, setIdTipoTransaccion] = useState ('')

  // Data Cuenta
  const [idCuenta, setIdCuenta] = useState(0)
  const [numeroCuenta, setNumeroCuenta] = useState('')
  const [cbu,setCbu] = useState('')
  const [tipoCuenta, setTipoCuenta] = useState('')
  const [banco,setBanco]  = useState('')
  const [sucursal,setSucursal] = useState('')

  useEffect(()=>{
    getDataCuenta();
    getDataTransaccion();
  },[])

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // Conexion con la base de datos
  const getDataTransaccion = () =>{
    axios.get('https://localhost:7042/Transaccion/$')
    .then((result)=>{
        setDataTransaccion(result.data)
    })
    .catch((error)=>{
        console.log("Error al obtener la información de las transacciones")
    })
  }


  // Handle Realizar Transaccion

  const handleSave =(cbu,monto) =>{ //para crear nuevas notas
        
    const url = 'https://localhost:7259/Notes'
    const data = {
        "id":0,
        "monto": monto,
        "numero": numero,
        "acreditacion": acreditacion,
        "realizacion": realizacion,
        "motivo": motivo,
        "referencia": referencia,
        "idCuentaOrigen": idCuentaOrigen,
        "idCuentaDestino": idCuentaDestino,
        "idTipoTransaccion": idTipoTransaccion
    }
    axios.post(url,data)
    .then((result) => {
        clear();
        toast.success('La transacción se realizó con éxito')
        
    })
    .catch((error) => {
        console.error("Error creating transact:", error);
        toast.error("Verifique la información.");
    });
}
  // Limpiar inputs
  const clear = () => { 
    setId(0);
    setMonto('');
    setNumero('');
    setAcreditacion('')
    setRealizacion('');
    setMotivo('')
    setReferencia('');
    setIdCuentaOrigen(2);
    setIdCuentaDestino(1);
    setIdTipoTransaccion('')
  }


  return (

    <Form className="labelPersonalizado" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="validationCustom01" className="align-items-start" >
        <Form.Label className="mb-2 ">Cuenta Destino
        </Form.Label>
        <Form.Control
          value={idCuentaDestino}
          required
          type="text"
          placeholder="Cbu/Alias"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Button variant="primary" className="ms-2" >
          Buscar
        </Button>
      </Form.Group>

      <Form.Group as={Col} controlId="validationCustom02">
        <Form.Label>Monto</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="00,00"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} controlId="validationCustomUsername">
        <Form.Label>Motivo</Form.Label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Seleccionar</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </Form.Group>
      <Form.Group as={Col} controlId="validationCustom01">
        <Form.Label>Referencia</Form.Label>
        <Form.Control
          type="text"
          placeholder="descripcion"
          required
        />
      </Form.Group>



      <div className="botonesAlPie mb-2">
        <Button className="Btn2"  variant="secondary" size="lg">
          Cancelar
        </Button>{' '}
        <Button className="Btn1" type="submit"variant="primary" size="lg">
          Transferir
        </Button>
      
      </div>
    </Form>



  );
}

export default PostTransferencia;