import React from 'react'
import Navbar from "../components/navegacion/navbarHome";
import Home from './home/Home';
import Transferencia from './transferencia/Transferencia';
import NuevaTransferencia from './transferencia/NuevaTransferencia';
import SolicitarPago from './transferencia/SolicitarPago';
import CuentasAgendadas from './transferencia/CuentasAgendadas';
import MiCuenta from "./MiCuenta";
import Configuracion from "./Configuracion";
import AgregarCuenta from "./transferencia/AgregarCuenta"
import ActividadReciente from "./home/ActividadReciente";
import { Routes, Route } from 'react-router-dom';

const HomePrincipal = () => {
    return (
        <div>
        <Navbar>  
        </Navbar>
         <Routes>
            <Route path="/MilagroFinanciero/Home" element={<Home />} />
            <Route path="/screens/home/ActividadReciente" element={<ActividadReciente />} />
            <Route path="/screens/transferencia/Transferencia" element={<Transferencia />}/>
            <Route path="/screens/transferencia/NuevaTransferencia" element={<NuevaTransferencia />}/>
            <Route path="/screens/transferencia/SolicitarPago" element={<SolicitarPago/>} />
            <Route path="/screens/transferencia/CuentasAgendadas" element={<CuentasAgendadas/>} />
            <Route path="/screens/transferencia/AgregarCuenta" element={<AgregarCuenta/>} />
            <Route path="/MilagroFinanciero/MiCuenta" element={<MiCuenta />} />
            <Route path="/MilagroFinanciero/Configuracion" element={<Configuracion/>}/>
         </Routes> 

        {/* <Home></Home>
        <Transferencia></Transferencia>
        <NuevaTransferencia></NuevaTransferencia>
        <SolicitarPago></SolicitarPago>
        <CuentasAgendadas></CuentasAgendadas>
        <MiCuenta></MiCuenta>
        <Configuracion></Configuracion>
        <AgregarCuenta></AgregarCuenta>
        <ActividadReciente></ActividadReciente>  */}
        </div>
    
      )
}

export default HomePrincipal