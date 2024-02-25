import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
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
import Cookie from 'universal-cookie';

const cookies = new Cookie();

const ProtectedRoute = ({ element: Component}) => {
  const isAuthenticated = cookies.get('token');

  // if (path === "/MilagroFinanciero" || path === "/MilagroFinanciero/Login") {
  //   return <Route {...rest} element={<Component />} />;
  // }

  return isAuthenticated ? (
    console.log("se autentico")
    
  ) : (
    <Navigate to="/MilagroFinanciero/Login" replace />
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/MilagroFinanciero" element={<Principal/>} />
          <Route path="/MilagroFinanciero/Login" element={<Login/>} />
          <Route path="/MilagroFinanciero/Home" element={<Home /> }/>
          <Route path="/MilagroFinanciero/Home/ActividadReciente" element={<ProtectedRoute><ActividadReciente /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/Transferencia" element={<ProtectedRoute><Transferencia /></ProtectedRoute>}/>
          <Route path="/MilagroFinanciero/Transferencia/NuevaTransferencia" element={<ProtectedRoute><NuevaTransferencia /></ProtectedRoute>}/>
          <Route path="/MilagroFinanciero/Transferencia/SolicitarPago" element={<ProtectedRoute><SolicitarPago /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/Transferencia/CuentasAgendadas" element={<ProtectedRoute><CuentasAgendadas /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/Transferencia/AgregarCuenta" element={<ProtectedRoute><AgregarCuenta /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/MiCuenta" element={<ProtectedRoute><MiCuenta /></ProtectedRoute>} />
          <Route path="/MilagroFinanciero/Configuracion" element={<ProtectedRoute><Configuracion /></ProtectedRoute>}/>
          {/* la sig linea hace que en vez de arrancar en http://localhost:3000 arranco desde principal*/}
          <Route path="/" element={<Navigate to="/MilagroFinanciero" />} />
        </Routes>  
      </Router>

    </div>
  )
}

export default App;