
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Button, Alert, InputGroup, Dropdown, DropdownButton, Col, Row, Container, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/componentes/postTransferencia.css';
import Cookies from 'universal-cookie';


function PostTransferenciaV2() {
  const cookies = new Cookies();
  //valor de la cookie
  const cuentaSeleccionada = cookies.get('cuentaSeleccionada');

  //--Variables--//

  const [CbuDestino, setCbuDestino] = useState('');
  const [monto, setMonto] = useState('');
  const [referencia, setReferencia] = useState('');
  const [idTipoTransaccion, setIdTipoTransaccion] = useState('');
  const [idCuentaDestino, setIdCuentaDestino] = useState(null);
  const [dataIdCuenta, setDataIdCuenta] = useState('')
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);
  const [idTipoMotivo, setIdTipoMotivo] = useState('')

  const [motivoSeleccionado, setMotivoSeleccionado] = useState(''); // Estado para el motivo seleccionado
  const [dataMotivo, setDataMotivo] = useState([]);

  const [contactoSeleccionado, setContactoSeleccionado] = useState(''); // Estado para el motivo seleccionado
  const [dataContacto, setDataContacto] = useState([]);

  const [showCuentasAgendadas, setShowCuentasAgendadas] = useState(false);

  const [search, setSearch] = useState("")

  const handleCloseCuentasAgendadas = () => setShowCuentasAgendadas(false);
  const handleShowCuentasAgendadas = () => setShowCuentasAgendadas(true);
  //----//

  //--Datos--//
  //Para obtener los contactos en el modal
  const getDataContactos = () => {
    axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/cuentas/Numero/${cuentaSeleccionada}/Contacto`)
      .then((result) => {
        const dataWithIds = result.data.map((contacto, indexContacto) => ({ id: indexContacto + 1, nombre: contacto.nombre, cbu: contacto.cbu }));
        setDataContacto(dataWithIds);
      })
      .catch((error) => {
        console.log("Error al obtener la información de los contactos");
      });
  }
  //Para obtener el nombre de los motivos en el dropdown
  const getDataTipoMotivo = () => {
    axios.get('https://colosal.duckdns.org:15001/MilagroFinanciero/TipoMotivo')
      .then((result) => {
        // Asignamos identificadores únicos a los motivos en el frontend porque el dto no muestra el id
        const dataWithIds = result.data.map((motivo, index) => ({ id: index + 1, nombre: motivo.nombre }));
        setDataMotivo(dataWithIds);
      })
      .catch((error) => {
        console.log("Error al obtener la información de los tipos de motivo");
      });
  };
  const getIdDataCuenta = () => {
    axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/IdxNumeroCuenta/${cuentaSeleccionada}`)
        .then((result) => {
            setDataIdCuenta(result.data.id)
        })
        .catch((error) => {
            console.log(console.error('Error al obtener ids de la cuenta:', error.message))
            toast.error('Error al obtener la informacion de la cuenta');
        });
};

  useEffect(() => {
    getDataContactos();
    getDataTipoMotivo();
    getIdDataCuenta();
  }, [])

  // OBTENGO EL ID DE LA CUENTA DESTINO A TRAVES DEL CBU --------------
  const obtenerCuentaDestino = async (CbuDestino) => {
    try {
      //la var response almacena la respuesta del servidor
      const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/IdxCbu/${CbuDestino}`);
      const cuentaId = response.data.id;
      console.log('ID de la cuenta destino:', cuentaId); // Mostrar en consola
      return cuentaId;
    } catch (error) {
      throw new Error(`Error al obtener la cuenta destino: ${error.message}`);
    }
  };

  //--FECHA--//

  // Obtener la fecha actual
  const fechaActual = new Date();

  // Obtener los componentes individuales de la fecha
  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
  const dia = fechaActual.getDate();
  const horas = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();
  // Obtener milisegundos y formatear los segundos con dos dígitos
  const milisegundos = fechaActual.getMilliseconds();
  const horasFormateadas = horas < 10 ? '0' + horas : horas;
  const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
  const segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
  // Formatear la fecha como YYYY-MM-DDTHH:MM:SS.sssZ, así lo pide el json del swagger
  const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}T${horasFormateadas}:${minutosFormateados}:${segundosFormateados}.${milisegundos}Z`;

  //----//

  //--HANDLES--//

  //funcion para manejar cambios en el campo de entrada del cbu
  const handleChangeCbuDestino = async (e) => {
    const nuevoCbuDestino = e.target.value; //almaceno el cbu que escribi
    setCbuDestino(nuevoCbuDestino); //modifico el valor del cbu

    try {
      const idCuentaBuscaXCBU = await obtenerCuentaDestino(nuevoCbuDestino); //busco el Id de la cuenta con el cbu ingresado
      setIdCuentaDestino(idCuentaBuscaXCBU); //guardo el Id hallado
      setError(null); // Restablecer el estado de error si se resuelve correctamente
    } catch (error) {
      // Manejar errores en la obtención de la cuenta
      console.error(error.message);
      console.error("Setee CuentaID en NULL")
      setError(error.message);
      //setCuentaId(null); // Restablecer el ID de la cuenta en caso de error
    }
    console.log(idCuentaDestino)

  };

  const handleChangeMonto = (e) => {
    const nuevoMonto = (e.target.value);
    if (parseFloat(nuevoMonto) <= 0) {
      // Muestra un mensaje de error 
      toast.error('El monto debe ser mayor o igual a $1');
      return;
    }
    setMonto(nuevoMonto); //seteo con el monto del evento E (q es el evento de cambio d un campo d entrada)


  };
  const handleChangeReferencia = (e) => {
    setReferencia(e.target.value);
  };


  const handleChangeIdTipoMotivo = (motivo) => {
    setIdTipoMotivo(motivo.id);
    handleMotivoSeleccionado(motivo.nombre);
  };
  // Para que el nombre del dropdown cambie cuando se selecciona el motivo
  // Más visual que otra cosa
  const handleMotivoSeleccionado = (motivo) => {
    setMotivoSeleccionado(motivo)
  }

  //--CLEAR DATA--//
  const clear = () => { //limpiar los input 
    setCbuDestino('');
    setIdCuentaDestino(null);
    setMonto('');
    setReferencia('');
    setIdTipoTransaccion(2);
    setError('');
    setValidated(false);
    setIdTipoMotivo(1)
  }
  //----//

  //--VALIDACION--//

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    //if (form.checkValidity() === true) {

    // realizarTransaccion();
    //}
    setValidated(true);
  };


  //FUNCION PARA CANCELAR LA TRANSFERENCIA----------
  const CancelarTransaccion = () => {
    // vuelvo a la pagina anterior
    window.history.back();
  }

  //FUNCION PARA HACER LA TRANSFERENCIA----------
  const realizarTransaccion = async () => {
    try {

      // // Verifica si referencia tienen valores
      if (!referencia) {
        // Muestra un mensaje de error utilizando react-toastify o cualquier otra forma de manejar errores
        toast.error('Por favor, complete todos los campos antes de realizar la transferencia');
        console.log('Por favor, complete todos los campos antes de realizar la transferencia');
        return;
      }

      const dataTransaccion = {
        Id: 0,
        Monto: monto,
        Realizacion: fechaFormateada,
        IdTipoMotivo: idTipoMotivo,
        Referencia: referencia,
        IdCuentaOrigen: dataIdCuenta,
        IdCuentaDestino: idCuentaDestino,
        IdTipoTransaccion: 2

      };


      // Realizar la solicitud POST de transacción
      //cuenta origen hardcodeada hasta que logremos el login
      console.log(dataTransaccion)
      const response = await axios.post(`https://colosal.duckdns.org:15001/MilagroFinanciero/Transaccion?numeroCuentaOrigen=${cuentaSeleccionada}&cbuDestino=${CbuDestino}&monto=${monto}`, dataTransaccion);

      console.log('Respuesta de la transacción:', response.data);

      // Muestra un mensaje de éxito utilizando react-toastify
      toast.success('Transferencia realizada con éxito')
      clear();
    } catch (error) {
      console.error('Error al realizar la transacción:', error.message);
      // Muestra un mensaje de error utilizando react-toastify
      toast.error('Error al realizar la transferencia');

    }

  };

  //FUNCION DE BUSQUEDA----------
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }
  //MÉTODO FILTRADO----------
  let results = [];
  if (!search) {
    results = dataContacto
  } else {
    results = dataContacto.filter((dato) =>
      dato.nombre.toLowerCase().includes(search.toLowerCase())
    )
  }
  //----//


  //----//

  return (
    <div>

      <ToastContainer></ToastContainer>
      <Form
        className="labelPersonalizado"
        noValidate
        validated={validated}
        onSubmit={(event) => {
          event.preventDefault(); // Evita la recarga de la página
          handleSubmit(event); // Llama a tu función handleSubmit
          realizarTransaccion(); // Llama a tu función realizarTransaccion
        }}
      >
        {/* <Form className="labelPersonalizado">  */}
        <Form.Group as={Col} controlId="validationCustom01" className="align-items-start" >
          <Form.Label>Cuenta Destino</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              placeholder="Ingrese el cbu"
              name="Cbu"
              value={CbuDestino}
              onChange={handleChangeCbuDestino}
              aria-describedby="basic-addon2"
              required
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleShowCuentasAgendadas}>
              Buscar cuentas agendadas
            </Button>
            <Modal show={showCuentasAgendadas} onHide={handleCloseCuentasAgendadas}>
              <Modal.Header closeButton>
                <Container>
                  <Row>
                    <Col>
                      <Modal.Title>Contactos</Modal.Title>
                    </Col>
                    <Col>
                      <InputGroup className="">
                        <Form.Control
                          value={search}
                          onChange={searcher}
                          placeholder="Buscar contacto"
                          aria-label="Buscar contacto"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Container>

              </Modal.Header>
              <Modal.Body className="grid-example">
                <Container>
                  {/* results son los resultados del filtrado en el search */}
                  {results.map((item, index) => (
                    <Row key={index}>
                      <Col xs={12} md={6}>
                        {item.nombre}
                      </Col>
                      <Col xs={6} md={6} className='d-flex justify-content-end'>
                        {<Button className='mb-2' variant="success" size="sm" onClick={() => {
                          // Actualiza el cbu seleccionado
                          setContactoSeleccionado(item.cbu);
                          // Llama a la función de transferencia
                          console.log('Nombre Contacto:  ', item.nombre)
                          console.log('Cbu Contacto:  ', contactoSeleccionado);
                          // Actualiza el valor en el formulario
                          handleChangeCbuDestino({
                            target: {
                              value: item.cbu
                            }
                          });
                          handleCloseCuentasAgendadas();
                        }}
                        >
                          Transferir</Button>}&nbsp;
                      </Col>
                      <hr></hr>
                    </Row>
                  ))}
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseCuentasAgendadas}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </InputGroup>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <div>
            {idCuentaDestino !== null && (
              <Alert variant="success">
                ID de la cuenta destino: {idCuentaDestino}
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
            type="number"
            placeholder="Ingrese el monto"
            name="monto"
            value={monto}
            onChange={handleChangeMonto}
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor, ingrese un monto válido. El monto minimo para transferir es $1.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <br></br>
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
          <Form.Control.Feedback type="invalid">
            Por favor, ingrese una referencia.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <br></br>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Motivo</Form.Label>
        </Form.Group>
        <Form.Group as={Col} controlId='validationCustom01'>
          <DropdownButton id="dropdown-basic-button" title={motivoSeleccionado || 'Seleccionar'}>
            {dataMotivo.map((motivo, index) => (
              <Dropdown.Item key={index} onClick={() => handleChangeIdTipoMotivo(motivo)}>
                {motivo.nombre}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Form.Group>


        <div className="botonesAlPie mb-2">
          <Button className="Btn2" variant="secondary" size="lg" onClick={CancelarTransaccion}>
            Cancelar
          </Button>{' '}
          <Button
            className="Btn1"
            type="submit"
            variant="primary"
            size="lg"
          >
            Transferir
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PostTransferenciaV2;