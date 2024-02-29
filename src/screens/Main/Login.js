import React from 'react';
import "../../styles/screens/Login.css";
import logInIcon from '../../assets/images/login/login-icon.svg';
import PostLogin from '../../components/login/postLogin';
import NavbarPrincipal from '../../components/navegacion/navbarPrincipal';
const Login = () => {
  return (
    <div >
      <NavbarPrincipal ></NavbarPrincipal>
      <div className='d-flex justify-content-center mt-5 '>

        <div className="bg-white p-5 rounded-5 text-secondary shadow" style={{ width: "25rem" }}>

          <div className='d-flex justify-content-center mt-50 '>
            <img
              src={logInIcon}
              alt="login-icon"
              style={{ height: "7rem" }}
            />
          </div>
          <div className='d-flex justify-content-center mt-50'>
          </div>
          <div class="text-center fs-1 fw-bold">Milagro</div>
          <div class="text-center fs-1 fw-bold">Financiero</div>
          <PostLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;
