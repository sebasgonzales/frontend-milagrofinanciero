import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/navegacion/navbar";

import Home from './screens/home/Home';
import Transferencia from './screens/transferencia/Transferencia';
import NuevaTransferencia from './screens/transferencia/NuevaTransferencia';
import SolicitarPago from './screens/transferencia/SolicitarPago';
import CuentasAgendadas from './screens/transferencia/CuentasAgendadas';
import MiCuenta from "./screens/MiCuenta";
import Configuracion from "./screens/Configuracion";
import AgregarCuenta from "./screens/transferencia/AgregarCuenta"
import ActividadReciente from "./screens/home/ActividadReciente";
// import Login from './screens/Main/Login';

// import Login2 from './screens/Main/Login2';


function AppPrincipal(){
    return (
            <Router>
                <Navbar>  
                </Navbar>
                <Routes>
                    {/* <Route path="/screens/Main/Login2" element={<Login2 />} /> */}
                    <Route path="/screens/Home" element={<Home />} />
                    <Route path="/screens/home/ActividadReciente" element={<ActividadReciente />} />
                    <Route path="/screens/transferencia/Transferencia" element={<Transferencia />}/>
                    <Route path="/screens/transferencia/NuevaTransferencia" element={<NuevaTransferencia />}/>
                    <Route path="/screens/transferencia/SolicitarPago" element={<SolicitarPago/>} />
                    <Route path="/screens/transferencia/CuentasAgendadas" element={<CuentasAgendadas/>} />
                    <Route path="/screens/transferencia/AgregarCuenta" element={<AgregarCuenta/>} />
                    <Route path="/screens/MiCuenta" element={<MiCuenta />} />
                    <Route path="/screens/Configuracion" element={<Configuracion/>}/>
                </Routes>
               {/* <NuevaTransferencia></NuevaTransferencia> */}
            </Router>
    )
}

export default AppPrincipal;