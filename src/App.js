import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";  
import NavbarPrincipal from "./components/navegacion/navbarPrincipal"
import Login from './screens/Main/Login';
import Principal from "./screens/Main/Principal";
import Home from "./screens/home/Home";
import ActividadReciente from "./screens/home/ActividadReciente";
import Transferencia from "./screens/transferencia/Transferencia";
import NuevaTransferencia from "./screens/transferencia/NuevaTransferencia"; 
import SolicitarPago from "./screens/transferencia/SolicitarPago";
import CuentasAgendadas from "./screens/transferencia/CuentasAgendadas";
import AgregarCuenta from "./screens/transferencia/AgregarCuenta";
import MiCuenta from "./screens/miCuenta/MiCuenta";
import Configuracion from "./screens/configuracion/Configuracion";
import Register from "./screens/Main/Register";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home/>} path="/BancoMilagroFinanciero/Home" exact />
            <Route element={<ActividadReciente/>} path="/BancoMilagroFinanciero/ActividadReciente" exact/>
            <Route element={<Transferencia/>} path="/BancoMilagroFinanciero/Transferencia" exact/>
            <Route element={<NuevaTransferencia/>} path="/BancoMilagroFinanciero/Transferencia/NuevaTransferencia" exact/>
            <Route element={<SolicitarPago/>} path="/BancoMilagroFinanciero/Transferencia/SolicitarPago" exact/>
            <Route element={<CuentasAgendadas/>} path="/BancoMilagroFinanciero/Transferencia/CuentasAgendadas" exact/>
            <Route element={<AgregarCuenta/>}  path="/BancoMilagroFinanciero/Transferencia/AgregarCuenta" exact/>
            <Route element={<MiCuenta/>} path="/BancoMilagroFinanciero/MiCuenta" exact/>
            <Route element={<Configuracion/>} path="/BancoMilagroFinanciero/Configuracion" exact/>
          </Route>
          <Route element={<Login/>} path="/BancoMilagroFinanciero/Login" exact/>
          <Route element={<Register/>} path="/BancoMilagroFinanciero/Registro" exact/>
          <Route element={<Principal/>} path="/BancoMilagroFinanciero" exact/>
          {/* 
          <Route path="/MilagroFinanciero/Login" element={<Login/>} />
          <Route path="/MilagroFinanciero/Transferencia" element={<ProtectedRoute><Transferencia /></ProtectedRoute>}/>
          <Route path="/MilagroFinanciero/Transferencia/NuevaTransferencia" element={<ProtectedRoute><NuevaTransferencia /></ProtectedRoute>}/>
          <Route path="/MilagroFinanciero/Transferencia/SolicitarPago" element={<ProtectedRoute><SolicitarPago /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/Transferencia/CuentasAgendadas" element={<ProtectedRoute><CuentasAgendadas /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/Transferencia/AgregarCuenta" element={<ProtectedRoute><AgregarCuenta /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/MiCuenta" element={<ProtectedRoute><MiCuenta /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/Configuracion" element={<ProtectedRoute><Configuracion /></ProtectedRoute>}/> */}

          {/* la sig linea hace que en vez de arrancar en http://localhost:3000 arranco desde principal*/}
          <Route path="/" element={<Navigate to="/BancoMilagroFinanciero" />} />
        </Routes>  
      </Router>

    </div>
  )
}

export default App;