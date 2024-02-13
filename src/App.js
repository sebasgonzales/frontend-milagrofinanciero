import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import NavbarPrincipal from "./components/navegacion/navbarPrincipal"
import Login from './screens/Main/Login';
import Principal from "./screens/Main/Principal";
import HomePrincipal from "./screens/HomePrincipal";
import Home from "./screens/home/Home";
import ActividadReciente from "./screens/home/ActividadReciente";
import Transferencia from "./screens/transferencia/Transferencia";
import NuevaTransferencia from "./screens/transferencia/NuevaTransferencia"; 
import SolicitarPago from "./screens/transferencia/SolicitarPago";
import CuentasAgendadas from "./screens/transferencia/CuentasAgendadas";
import AgregarCuenta from "./screens/transferencia/AgregarCuenta";
import MiCuenta from "./screens/MiCuenta";
import Configuracion from "./screens/Configuracion";


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/MilagroFinanciero" element={<Principal/>} />
          <Route path="/MilagroFinanciero/Login" element={<Login/>} />
          <Route path="/screens/HomePrincipal" element={<HomePrincipal/>} />
          <Route path="/MilagroFinanciero/Home" element={<Home />} />
          <Route path="/MilagroFinanciero/Home/ActividadReciente" element={<ActividadReciente />} />
          <Route path="/MilagroFinanciero/Transferencia" element={<Transferencia />}/>
          <Route path="/MilagroFinanciero/Transferencia/NuevaTransferencia" element={<NuevaTransferencia />}/>
          <Route path="/MilagroFinanciero/Transferencia/SolicitarPago" element={<SolicitarPago/>} />
          <Route path="/MilagroFinanciero/Transferencia/CuentasAgendadas" element={<CuentasAgendadas/>} />
          <Route path="/MilagroFinanciero/Transferencia/AgregarCuenta" element={<AgregarCuenta/>} />
          <Route path="/MilagroFinanciero/MiCuenta" element={<MiCuenta />} />
          <Route path="/MilagroFinanciero/Configuracion" element={<Configuracion/>}/>
          {/* la sig linea hace que en vez de arrancar en http://localhost:3000 arranco desde principal*/}
          <Route path="/" element={<Navigate to="/MilagroFinanciero" />} />
        </Routes>  
      </Router>

    </div>
  )
}

export default App;
