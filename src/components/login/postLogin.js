import React, { useState, useEffect, Fragment } from 'react';
import {Navigate } from "react-router-dom"
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

  //const token = sessionStorage.getItem('token');

  //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


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
        let res = await axios.post("https://colosal.duckdns.org:15001/MilagroFinanciero/Login/authenticate", data);
        console.log(res.data);
        console.log("Has iniciado sesión con éxito!");
        //guardo el token
        sessionStorage.setItem('token', JSON.stringify(res.token)) 
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
      const response = await axios.post("https://colosal.duckdns.org:15001/MilagroFinanciero/Login/authenticate", { username: data.username, password: sha256(data.password) });
      const cuitCuil = await axios.post("https://colosal.duckdns.org:15001/MilagroFinanciero/Login/GetCuitCuil", { username: data.username, password: sha256(data.password) });
      console.log("cuit cuil post:", cuitCuil.data) //devuelve cuit cuil del endpoint post nuevo
      cookies.set('cuitCuil', cuitCuil.data, { path: '/' })
     // console.log("cuitcuil cuki: ", cookies.get('cuitCuil'));
      const token = response.data.token; // Suponiendo que response.data contiene solo el número de CUIT/CUIL
  
      if (token) {
        cookies.set('token', token, { path: '/' });
        console.log("token:", token);
        //console.log("token cuki: ", cookies.get('token'));
        //<Navigate to ="/MilagroFinanciero/Home" />
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