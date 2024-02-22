import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button, InputGroup, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import userIcon from '../../assets/images/login/username-icon.svg';
import passwordIcon from '../../assets/images/login/password-icon.svg';
import Cookie from 'universal-cookie';
import { sha256 } from 'js-sha256';

const cookies = new Cookie();

const PostLogin = () => {

  const [data, setData] = useState({
    username: "",
    password: ""
  })


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...data, [name]: value };
    setData(newDatos);
  }

  const handleSubmit = async (event) => {
    try{
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        console.log("no funciona");
      } else {
        let res = await axios.post("https://colosal.duckdns.org:15001/MilagroFinanciero/Login", data);
        console.log(res.data);
        console.log("Has iniciado sesión con éxito!");
      }
    }catch (error) {
      console.error('Error al iniciar sesion:', error.message);
      // Muestra un mensaje de error utilizando react-toastify
      //toast.error('Error al iniciar sesion');

  }
    
    // setValidated(true);
  };
  const iniciarSesion = async () => {
    try {
      const response = await axios.post("https://colosal.duckdns.org:15001/MilagroFinanciero/Login", { username: data.username, password: sha256(data.password) });
      const cuitCuil = response.data; // Suponiendo que response.data contiene solo el número de CUIT/CUIL
  
      if (cuitCuil) {
        cookies.set('cuitCuil', cuitCuil, { path: '/' });
        console.log("Número de CUIT/CUIL guardado en la cookie:", cuitCuil);
        console.log("Valor de la cookie: ", cookies.get('cuitCuil'));
        window.location.href='/MilagroFinanciero/Home'

        // Redireccionar a la página de inicio o realizar otras acciones según sea necesario
      } else 
      {
        console.log("No se recibió un número de CUIT/CUIL en la respuesta.");
      } }catch (error) {
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
      }} className="input-group mt-4">
        <div className="input-group-text bg-primary">
          <img
            src={userIcon}
            alt="user-icon"
            style={{ height: "1rem" }}
          />
        </div>

        <input
          className="form-control bg-light"
          id="username"
          type="text"
          placeholder='Usuario'
          onChange={handleInputChange}
          value={data.username}
          name="username"
          required
        />


        <div className="input-group mt-1">
          <div className="input-group-text bg-primary">
            <img
              src={passwordIcon}
              alt="password-icon"
              style={{ height: "1rem" }}
            />
          </div>
          <input
            className="form-control bg-light"
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
        className="btn btn-primary text-white w-100 mt-4 fw-semibold shadow-sm"
        onClick={iniciarSesion}>
          Iniciar sesión
        </Button>
      </Form>
    </div>
  )
};

export default PostLogin