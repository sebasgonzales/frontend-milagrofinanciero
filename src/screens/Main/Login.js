import React from 'react';
import "./Login.css";
import logInIcon from '../../assets/images/login/login-icon.svg';
import userIcon from '../../assets/images/login/username-icon.svg';
import passwordIcon from '../../assets/images/login/password-icon.svg';
import utnLogo from '../../assets/images/login/UTN_logo_ancho.jpg';

const Login = () => {
  return (
    <div className='d-flex justify-content-center mt-50 '>
    <div className="bg-white p-5 rounded-5 text-secondary shadow" style={{ width: "25rem" }}>
      <div className="d-flex justify-content-center">
        <img
          src={logInIcon}
          alt="login-icon"
          style={{ height: "7rem" }}
        />
      </div>

      <div className="text-center fs-1 fw-bold ">MilagroFinanciero</div>
      {/*<div className="text-center fs-1 fw-bold">UTN-FRLP</div>*/}

      <div className="input-group mt-4">
        <div className="input-group-text bg-primary">
          <img
            src={userIcon}
            alt="user-icon"
            style={{ height: "1rem" }}
          />
        </div>
        <input
          className="form-control bg-light"
          type="text"
          placeholder="Usuario"
        />
      </div>
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
          type="password"
          placeholder="Contraseña"
        />
      </div>

      <button className="btn btn-primary text-white w-100 mt-4 fw-semibold shadow-sm">
        Iniciar sesión
      </button>

      {/*<div className="d-flex gap-2 justify-content-center mt-3">
        <img
          src={utnLogo}
          alt="utn-icon"
          style={{ height: "3rem" }}
        />
  </div>*/}
    </div>
    </div>
  );
}

export default Login;
