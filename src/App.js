import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navegacion/navbar";
import Home from './screens/Home';
import Transferencia from './screens/transferencia/Transferencia';
import NuevaTransferencia from './screens/transferencia/NuevaTransferencia';
import SolicitarPago from './screens/transferencia/SolicitarPago';
import CuentasAgendadas from './screens/transferencia/CuentasAgendadas';
import MiCuenta from "./screens/MiCuenta";
import Configuracion from "./screens/Configuracion";


function App(){
    return (
            <Router>
                <Navbar></Navbar>
            </Router>
    )
}

export default App;