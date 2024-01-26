import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarPrincipal from "./components/navegacion/navbarPrincipal"
import Login from './screens/Main/Login';

function App(){
    return (
        <Router>
            <NavbarPrincipal />
            <Routes>
                <Route path="/screens/Main/Login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App;
