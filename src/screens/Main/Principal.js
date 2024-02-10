import React from 'react'
import Banner from "../../components/presentacion/Banner"
import Footer from "../../components/presentacion/Footer"
import Body from "../../components/presentacion/Body"
import NavbarPrincipal from "../../components/navegacion/navbarPrincipal"


const Principal = () => {
  return (
    <div>
      <NavbarPrincipal></NavbarPrincipal>
      <Banner></Banner>
      <Body></Body>
      <Footer></Footer>
    </div>

  )
}

export default Principal