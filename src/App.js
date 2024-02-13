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
        <Route path="/screens/Main/Principal" element={<Principal/>} />
          <Route path="/screens/Main/Login" element={<Login/>} />
          <Route path="/screens/HomePrincipal" element={<HomePrincipal/>} />
          <Route path="/screens/Home" element={<Home />} />
          <Route path="/screens/home/ActividadReciente" element={<ActividadReciente />} />
          <Route path="/screens/transferencia/Transferencia" element={<Transferencia />}/>
          <Route path="/screens/transferencia/NuevaTransferencia" element={<NuevaTransferencia />}/>
          <Route path="/screens/transferencia/SolicitarPago" element={<SolicitarPago/>} />
          <Route path="/screens/transferencia/CuentasAgendadas" element={<CuentasAgendadas/>} />
          <Route path="/screens/transferencia/AgregarCuenta" element={<AgregarCuenta/>} />
          <Route path="/screens/MiCuenta" element={<MiCuenta />} />
          <Route path="/screens/Configuracion" element={<Configuracion/>}/>
          {/* la sig linea hace que en vez de arrancar en http://localhost:3000 arranco desde principal*/}
          <Route path="/" element={<Navigate to="/screens/Main/Principal" />} />
        </Routes>  
      </Router>

    </div>
  )
}

export default App;
