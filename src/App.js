import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarPrincipal from "./components/navegacion/navbarPrincipal"
import Login from './screens/Main/Login2';
import Banner from './components/Banner'
import Footer  from "./components/Footer";
import Body from "./components/Body"


function App() {
  return (
    <div>
      <Router>
        <NavbarPrincipal>
        </NavbarPrincipal>
        <Routes>
          <Route path="/screens/Main/Login2" element={<Login />} />
        </Routes>  
      </Router>
      <Banner>
      </Banner>
      <Body>
      </Body>
      <Footer></Footer>

    </div>
  )
}

export default App;
