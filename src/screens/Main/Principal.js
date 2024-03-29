import React from 'react'
import Banner from "../../components/presentacion/Banner"
import Footer from "../../components/presentacion/Footer"
import Body from "../../components/presentacion/Body"
import NavbarPrincipal from "../../components/navegacion/navbarPrincipal"
import Cookies from 'universal-cookie'



const Principal = () => {
  const cookies = new Cookies();
  const cuitCuil = cookies.get('cuitCuil');
  if (cookies.get('cuitCuil') == null) {
    console.log('Cookie Borrada');
  } else {
    console.log('Cookie: ', cookies.get('cuitCuil'));
  }

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