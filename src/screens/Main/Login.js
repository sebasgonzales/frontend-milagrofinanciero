import React from 'react'
import "./Login.css";

const Login = () => {
  return (
    <div class="bg-white p-5 rounded-5 text-secondary shadow" style="width: 25rem">
            <div class="d-flex justify-content-center">
                <img
                src="./img/login-icon.svg"
                alt="login-icon"
                style="height: 7rem"
                />
            </div>

            <div class="text-center fs-1 fw-bold">SiGeSi</div>
            <div class="text-center fs-1 fw-bold">UTN-FRLP</div>

            <div class="input-group mt-4">
                <div class="input-group-text bg-primary">
                    <img
                        src="./img/username-icon.svg"
                        alt="user-icon"
                        style="height: 1rem"
                    />
                </div>
                <input
                class="form-control bg-light"
                type="text"
                placeholder="Legajo"
                />
            </div>
            <div class="input-group mt-1">
                <div class="input-group-text bg-primary">
                    <img
                        src="./img/password-icon.svg"
                        alt="password-icon"
                        style="height: 1rem"
                    />
                </div>
                <input
                class="form-control bg-light"
                type="password"
                placeholder="Contraseña"
                />
            </div>
            {/* <!-- <div class="d-flex justify-content-around mt-1">
                <div class="d-flex align-items-center gap-1">
                    <input class="form-check-input" type="checkbox" />
                    <div class="pt-1" style="font-size: 0.9rem">Remember me</div>
                </div>
                <div class="pt-1">
                    <a
                        href="#"
                        class="text-decoration-none text-info fw-semibold fst-italic"
                        style="font-size: 0.9rem"
                        >Forgot your password?</a
                    >
                </div>
            </div> --> */}
            <div class="btn btn-primary text-white w-100 mt-4 fw-semibold shadow-sm">
                Iniciar sesión
            </div>
            {/* <!-- <div class="d-flex gap-1 justify-content-center mt-1">
                <div>Don't have an account?</div>
                <a href="#" class="text-decoration-none text-info fw-semibold"
                >Register</a
                >
            </div>
            <div class="p-3">
                <div class="border-bottom text-center" style="height: 0.9rem">
                <span class="bg-white px-3">or</span>
                </div>
            </div> --> */}
            <div
                class="d-flex gap-2 justify-content-center mt-3"
            >
                <img
                src="./img/UTN_logo_ancho.jpg"
                alt="utn-icon"
                style="height: 3rem"
                />
            </div>
        </div>
  )
}

export default Login