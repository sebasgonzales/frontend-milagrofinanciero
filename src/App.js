import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import NavbarPrincipal from "./components/navegacion/navbarPrincipal"
import Login from './screens/Main/Login';
import Principal from "./screens/Main/Principal";
import HomePrincipal from "./screens/HomePrincipal";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/screens/Main/Principal" element={<Principal/>} />
          <Route path="/screens/Main/Login" element={<Login/>} />
          <Route path="/screens/HomePrincipal" element={<HomePrincipal/>} />
          {/* la sig linea hace que en vez de arrancar en http://localhost:3000 arranco desde principal*/}
          <Route path="/" element={<Navigate to="/screens/Main/Principal" />} />
        </Routes>  
      </Router>

    </div>
  )
}

export default App;
