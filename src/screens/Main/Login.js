import React from 'react';
import "../../styles/screens/Login.css";
import logInIcon from '../../assets/images/login/login-icon.svg';
import PostLogin from '../../components/login/postLogin';

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

      <div class="text-center fs-1 fw-bold">MilagroFinanciero</div>
      <div class="text-center fs-1 fw-bold">UTN-FRLP</div>
      <PostLogin/>
    </div>
    </div>
    
  );
}

export default Login;
