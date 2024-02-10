import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button, InputGroup, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import userIcon from '../../assets/images/login/username-icon.svg';
import passwordIcon from '../../assets/images/login/password-icon.svg';
import Cookie from 'universal-cookie';

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
        let res = await axios.post("https://localhost:7042/Login", data);
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
    const iniciarSesion = async () => {  // FALTA ARREGLAR ESTO , que me setee la cooki y que me redireccione
      await axios.post("https://localhost:7042/Login", {username: data.username, password: data.password})
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.lenght > 0){
          var respuesta = response;
          cookies.set('cuitCuil', respuesta, {path: '/'})
          alert(cookies.get('cuitCuil :' + cookies.get('cuitCuil')));
          // window.location.href = "../../screens/Home";
        } 
        else
          console.log("No cookies");
      }) 
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