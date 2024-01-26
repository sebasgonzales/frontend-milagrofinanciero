import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarPrincipal from "./components/navegacion/navbarPrincipal"
import Login from './screens/Main/Login';
import Banner from './components/Banner'

function App(){
    return (
        <div>
            <Router>
                <NavbarPrincipal>
                    
                </NavbarPrincipal>
                <Routes>
                    <Route path="/screens/Main/Login" element={<Login />} />
                </Routes>
            </Router>
            <Banner>

            </Banner>
        </div>
    )
}

export default App;
