import React, { useState, useEffect, Fragment } from 'react';
import { Navigate } from "react-router-dom"
import { Form, Button, InputGroup, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import userIcon from '../../assets/images/login/username-icon.svg';
import passwordIcon from '../../assets/images/login/password-icon.svg';
import Cookie from 'universal-cookie';
import { sha256 } from 'js-sha256';
import { delay } from 'q';
import { useNavigate } from "react-router-dom";



const cookies = new Cookie();

const PostLogin = () => {

  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate();
  // Obtener la URL actual
  var urlCompleta = window.location.href;
  console.log(urlCompleta)
    // Crear un objeto URL con la URL completa
    var urlObjeto = new URL(urlCompleta);
  console.log(urlObjeto)
    // Obtener el valor del parámetro de consulta
    var valorQueryParam = urlObjeto.searchParams.get("queryparam");
  
    console.log(valorQueryParam);


  //const token = sessionStorage.getItem('token');

  //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...data, [name]: value };
    setData(newDatos);
  }

  const handleSubmit = async (event) => {
    try {
      console.log("Se ha pulsado el boton de enviar");
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        console.log("no funciona");
      } else {
        await iniciarSesion();

      }
    } catch (error) {
      console.error('Error al iniciar sesion:', error.message);
      // Muestra un mensaje de error utilizando react-toastify
      toast.error('Error al iniciar sesion');

    }

    // setValidated(true);
  };
  const iniciarSesion = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/Login/authenticate/${valorQueryParam}`, { username: data.username, password: sha256(data.password)});
      const cuitCuil = await axios.post("https://colosal.duckdns.org:15001/MilagroFinanciero/Login/GetCuitCuil", { username: data.username, password: sha256(data.password) });
      console.log("cuit cuil post:", cuitCuil.data) //devuelve cuit cuil del endpoint post nuevo
      cookies.set('cuitCuil', cuitCuil.data, { path: '/' })
      // console.log("cuitcuil cuki: ", cookies.get('cuitCuil'));
      const token = response.data.token; // Suponiendo que response.data contiene solo el número de CUIT/CUIL

      if (token) {
        sessionStorage.setItem('token', JSON.stringify(token))
        cookies.set('token', token, { path: '/' });
        console.log("token:", token);
        console.log("token cuki: ", cookies.get('token'));
        //window.location.href='/BancoMilagroFinanciero/Home'
        navigate("/Home");

        // <Navigate to ="/MilagroFinanciero/Home" />

        // Redireccionar a la página de inicio o realizar otras acciones según sea necesario
      } else {
        console.log("No se recibió un número de CUIT/CUIL en la respuesta.");
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      // Manejar el error de inicio de sesión según sea necesario
    }
  };

  return (
    <div>
      <ToastContainer />
      <Form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event);
      }} className="input-group mt-4"  >
        <div className="input-group-text "style={{ backgroundColor: '#52489C' }}>
          <img
            src={userIcon}
            alt="user-icon"
            style={{ height: "1rem"}}
          />
        </div>

        <input
          className="form-control bg-light rounded-3"
          id="username"
          type="text"
          placeholder='Usuario'
          onChange={handleInputChange}
          value={data.username}
          name="username"
          required
        />


        <div className="input-group mt-1">
          <div className="input-group-text" style={{ backgroundColor: '#52489C' }}>
            <img
              src={passwordIcon}
              alt="password-icon"
              style={{ height: "1rem"  }}
            />
          </div>
          <input
            className="form-control bg-light rounded-3"
            id="password"
            type="password"
            placeholder='Contraseña'
            onChange={handleInputChange}
            value={data.password}
            name="password"
            required
          />
        </div>
        <Button 
        // href='../../screens/HomePrincipal'
        type="submit"
        className="btn text-white w-100 mt-4 fw-semibold shadow-sm rounded-3"
        style={{ backgroundColor: '#52489C', outline: 'none !important' }}
        onClick={iniciarSesion}
      >
        Iniciar sesión
      </Button>

      </Form>
    </div>
  )
};

export default PostLogin