import React from 'react';
import "../../styles/screens/Login.css";
import logInIcon from '../../assets/images/login/login-icon.svg';
import PostRegister from '../../components/login/postRegister';
import NavbarPrincipal from '../../components/navegacion/navbarPrincipal';
const Register = () => {
  return (
    <div>
      <NavbarPrincipal></NavbarPrincipal>
    <div className='d-flex justify-content-center mt-50 '>
    <div className="bg-white p-5 rounded-5 text-secondary shadow" style={{ width: "25rem" }}>
      
      <div className="d-flex justify-content-center">
        <img
          src={logInIcon}
          alt="login-icon"
          style={{ height: "7rem" }}
        />
      </div>

      <div class="text-center fs-1 fw-bold">MilagroFinanciero</div>
      <div class="text-center fs-1 fw-bold">UTN-FRLP</div>
      <PostRegister />
      </div>
      </div>
      </div>
  )
}

export default Register