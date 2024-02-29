import React, { useState, useEffect } from 'react';
import { Button, Container, Modal, ModalBody, FormGroup, ModalFooter, DropdownButton, Dropdown } from 'react-bootstrap';
import ListadoCuentasySaldo from '../../components/miCuenta/ListadoCuentasySaldo';
import NavbarHome from '../../components/navegacion/navbarHome'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'universal-cookie';



const MiCuenta = () => {
  const cookies = new Cookies();

  const cuitCuil = cookies.get('cuitCuil');
  const token = cookies.get('token')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombreCliente, setNombreCliente] = useState('');
  const [dataClienteCuentas, setDataClienteCuentas] = useState([]);

  const [titular, setTitular] = useState(false)
  const [idCliente, setIdCliente] = useState('')

  const [dataTipoCuenta, setDataTipoCuenta] = useState([]);

  const [tipoCuentaSeleccionada, SetTipoCuentaSeleccionada] = useState(''); // Estado para el banco seleccionado
  const [idTipoCuenta, setIdTipoCuenta] = useState('')
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


  useEffect(() => {
    getDataNombreCliente();
    getDataCuentasCliente();
    getDataIdCliente();
    getDataTipoCuenta();
  }, []);

  const getDataNombreCliente = () => {
    axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/clientes/Nombre/${cuitCuil}/Cliente`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((result) => {
        console.log("Result", result.data);
        setNombreCliente(result.data);
      })
      .catch((error) => {
        console.log("Error al obtener la información del cliente");
      });
  }

  const getDataTipoCuenta = () => {
    axios.get('https://colosal.duckdns.org:15001/MilagroFinanciero/TipoCuenta', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((result) => {
        // Asignamos identificadores únicos a los bancos en el frontend porque el dto no muestra el id
        const dataWithIds = result.data.map((tipoCuenta, index) => ({ id: index + 1, nombre: tipoCuenta.nombre }));
        setDataTipoCuenta(dataWithIds);
      })
      .catch((error) => {
        console.log(console.error('Error al obtener datos de TipoCuenta:', error.message))
        toast.error('Error al obtener la informacion de TipoCuenta');
      });
  };

  const getDataCuentasCliente = () => {
    axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/clientes/CuitCuil/${cuitCuil}/ClienteCuenta`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((result) => {
        setDataClienteCuentas(result.data);
      })
      .catch((error) => {
        console.log("Error al obtener la información de las cuentas");
      });
  };

  const getDataIdCliente = () => {
    axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/IdxCuitCuil/${cuitCuil}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((result) => {
        console.log(result.data.id)
        setIdCliente(result.data.id);
      })
      .catch((error) => {
        console.log("Error al obtener la información de las cuentas");
      });
  };

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

  const generarNumeroAleatorio = (digitos) => {
    const min = 10 ** (digitos - 1);
    const max = 10 ** digitos - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const numeroAleatorio12Digitos = generarNumeroAleatorio(12);


  const agregarCuenta = async () => {
    try {
      const dataCuenta = {
        Id: 0,
        Numero: numeroAleatorio12Digitos,
        Cbu: "0000000001" + `${numeroAleatorio12Digitos}`,
        idTipoCuenta: idTipoCuenta,
        idBanco: 1,
        idSucursal: 1
      }
      const responseCuenta = await axios.post(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta`, dataCuenta, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Respuesta de la Cuenta:', responseCuenta.data);
      agregarClienteCuenta(responseCuenta.data.id);
    } catch (error) {
      console.error('Error al crear una nueva cuenta:', error.message);
      // Muestra un mensaje de error utilizando react-toastify
      toast.error('Error al crear una nueva cuenta');
    }
  };
  const agregarClienteCuenta = async (idNuevaCuenta) => {
    try {
      const dataClienteCuenta = {
        Id: 0,
        Titular: titular,
        Alta: fechaFormateada,
        IdCliente: idCliente,
        IdCuenta: idNuevaCuenta
      };


      // Realizar la solicitud POST de contacto
      console.log(dataClienteCuenta)
      const responseClienteCuenta = await axios.post(`https://colosal.duckdns.org:15001/MilagroFinanciero/ClienteCuenta`, dataClienteCuenta, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Respuesta de la ClienteCuenta:', responseClienteCuenta.data);
      setShow(false)
      // Muestra un mensaje de éxito utilizando react-toastify
      toast.success('Cuenta creada con éxito')
    } catch (error) {
      console.error('Error al crear una nueva cuenta:', error.message);
      // Muestra un mensaje de error utilizando react-toastify
      toast.error('Error al crear una nueva cuenta');

    }
  };

  //HANDLES
  const handleChangeIdTipoCuenta = (tipoCuenta) => {
    setIdTipoCuenta(tipoCuenta.id);
    handleTipoCuentaSeleccionado(tipoCuenta.nombre);
  };
  // Para que el nombre del dropdown cambie cuando se selecciona el banco
  // Más visual que otra cosa
  const handleTipoCuentaSeleccionado = (tipoCuenta) => {
    SetTipoCuentaSeleccionada(tipoCuenta)
  }


  return (
    <div>
      <ToastContainer></ToastContainer>
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
                  <Button className="button" variant="primary" onClick={handleShow}>
                    Nueva cuenta
                  </Button>
                </div>
              </Container>
            </div>
          </div>
          <br></br>
        </div>
        <div className='p-5 shadow rounded-5' style={{ backgroundColor: '#3a3273' }}>
          {dataClienteCuentas.length > 0 ? (
            dataClienteCuentas.map((item, index) => (
              <ListadoCuentasySaldo key={index} numeroCuenta={item.numeroCuenta} cbu={item.cbu} tipoCuenta={item.tipoCuenta} />
            ))
          ) : (
            <p className='text-center'>Usted no posee cuentas.  Agregue una nueva para comenzar.</p>
          )}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Insertar Nueva Cuenta</h3>
        </Modal.Header>
        <ModalBody>
          <FormGroup>
            <label>Tipo de Cuenta:</label>
            <DropdownButton id="dropdown-basic-button" title={tipoCuentaSeleccionada || 'Seleccionar'}>
              {dataTipoCuenta.map((tipoCuenta, index) => (
                <Dropdown.Item key={index} onClick={() => handleChangeIdTipoCuenta(tipoCuenta)}>
                  {tipoCuenta.nombre}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </FormGroup>
          <FormGroup>
            <label>Rol:</label>
            {/* Solo se permite Extensión porque ya tiene la titular */}
            <select className="form-control" name="rol" onChange={handleChange} value={form.rol} disabled>
              {/* <option value="propia" disabled>Propia</option> */}
              <option value="false">Extensión</option>
            </select>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={agregarCuenta}>Insertar</Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MiCuenta;
