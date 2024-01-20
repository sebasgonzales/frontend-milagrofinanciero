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
   
    <Form className="labelPersonalizado" mt="4" noValidate validated={validated} onSubmit={handleSubmit}>
      
        <Form.Group  as={Col}  controlId="validationCustom01">
          <Form.Label>Cuenta Destino
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Cbu/Alias"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group  as={Col} controlId="validationCustom02">
          <Form.Label>Monto</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="00,00"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label>Referencia</Form.Label>
            <Form.Control
              type="text"
              placeholder="descripcion"
              required
            />    
        </Form.Group>
      
      
      <div className="botonesAlPie mb-2">
        <Button className="Btn2" variant="secondary" size="lg">
          Cancelar
        </Button>{' '}
        <Button className="Btn1" variant="primary" size="lg">
          Transferir
        </Button>
      </div>
    </Form>
    
   

  );
}

export default PostTransferencia;