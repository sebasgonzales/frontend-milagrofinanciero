import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './postTransferencia.css';

function PostTransferencia() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (

    <Form className="labelPersonalizado" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="validationCustom01" className="align-items-start" >
        <Form.Label className="mb-2 ">Cuenta Destino
        </Form.Label>
        <Form.Control
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