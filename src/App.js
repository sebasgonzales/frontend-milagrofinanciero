import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Login from "./screens/Main/Login";
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
          <Route path="/" element={<Navigate to="/BancoMilagroFinanciero" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
