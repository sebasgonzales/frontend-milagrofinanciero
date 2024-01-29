import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarPrincipal from "./components/navegacion/navbarPrincipal"
import Login from './screens/Main/Login';
import Banner from './components/Banner2'
import Finanza from './assets/images/Finanza-hexa.png'
import Map from './assets/images/backgrounds/map.png'
import Portfolio1 from './assets/images/features/navidad.jpg'
import Portfolio2 from './assets/images/features/tarjeta.jpg'
import Portfolio3 from './assets/images/features/transferencia.jpg'
import Background from './assets/images/backgrounds/1.jpg'
import Footer  from "./components/Footer2";
function App() {
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
      <section class="about-layout2 pt-50 pb-0">
        <div class="container-fluid">
          <div class="row">
            <div class="text-block">
              <div class="heading-layout2 mb-30">
                <span class="heading__subtitle">Más de 100.000 personas nos eligen</span>
                <h2 class="heading__title mt-30">Especialistas en hacer crecer tu dinero</h2>
                <p class="heading__desc mb-30 mt-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quae eveniet cum laboriosam unde commodi praesentium accusantium voluptates nisi aliquid quas qui, magnam exercitationem eligendi libero quibusdam quisquam et molestiae!</p>
              </div>
              <ul class="list-items list-unstyled mb-40">
                <li><strong>Tus claves.</strong><br></br>Conocé como generar tu clave y Usuario, clave Banelco y Token.</li>
                <li><strong>Tutoriales.</strong><br></br>Turnos, clave, blanqueo, transferencias y más.</li>
                <li><strong>¡No caigas en la estafa!</strong> <br></br>Conocé cómo evitar engaños</li>
                <li><strong>Educación financiera.</strong><br></br>Te ayudamos a tomar decisiones de manera informada y responsable.</li>
              </ul>
              <div className="row">
                <div className="col">
                </div>
                <div className="col">
                <a href="." class="btn btn__secondary btn__icon mr-20 mt-20">
                  <span>Ver más</span><i class="icon-arrow-right"></i>
                </a>
                </div>
                <div className="col">
                </div>

              </div>


              {/*<a href="." class="btn btn__secondary btn__icon mt-20">
                <span>Descargar brochure</span><i class="icon-arrow-right"></i>
  </a>*/}
            </div>
            <div class="imgs-block">
              <div class="about__img">
                <img src={Finanza} alt="about" class="img-fluid w-100"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features-layout1 pt-50 pb-0" style={{backgroundColor:'#ebebeb'}} >
        {/* <div class="fetures-bg">
          <div class="bg-img"><img src={Map} alt="background"></img></div>
        </div> */}
        <div class="container col-padding-0">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div class="heading text-center mb-50">
                <span class="heading__subtitle">Banco Certificado</span>
                <h2 class="heading__title">El mejor servicio al alcance de tu mano</h2>
              </div>
            </div>
          </div>
          <div class="row features-wrapper">
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="feature-item">
                <div class="feature__img">
                  <img src={Portfolio1} alt="portfolio img"></img>
                </div>
                <div class="feature__content">
                  <h4 class="feature__title">Las fiestas, son en Milagro Financiero</h4>
                  <p class="feature__desc">¡Conocé todas las promos navideñas que tenemos! Son por tiempo limitado.</p>
                  {/* <ul class="list-items list-items-layout2 list-unstyled mb-30">
                    <li>Metales</li>
                    <li>Acero inoxidable</li>
                    <li>Galvanizado</li>
                  </ul> */}
                  <a href="." class="btn btn__secondary"><span>Ver más</span><i
                    class="icon-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="feature-item">
                <div class="feature__img">
                  <img src={Portfolio2} alt="portfolio img"></img>
                </div>
                <div class="feature__content">
                  <h4 class="feature__title">Tarjetas sin complicaciones</h4>
                  <p class="feature__desc">Pedí tus tarjetas de débito y crédito VISA de Milagro Financiero y arrancá a disfrutar de todos sus beneficios.</p>
                  {/* <ul class="list-items list-items-layout2 list-unstyled mb-30">
                    <li>Laminado de Fibra Lisa</li>
                    <li>Laminado Fibra Gofrado</li>
                    <li>Laminado Fibra Estriado</li>
                  </ul> */}
                  <a href="." class="btn btn__secondary"><span>Ver más</span><i
                    class="icon-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="feature-item">
                <div class="feature__img">
                  <img src={Portfolio3} alt="portfolio img"></img>
                </div>
                <div class="feature__content">
                  <h4 class="feature__title">Recibí transferencias inmediatas</h4>
                  <p class="feature__desc">Con nosotros podés recibir transferencias de quien quieras, enterarte cuándo llegó y cuándo fue vista.</p>
                  {/* <ul class="list-items list-items-layout2 list-unstyled mb-30">
                    <li>Servicio de procesamiento</li>
                    <li>Servicio de corte</li>
                    <li>Servicio de transporte</li>
                  </ul> */}
                  <a href="." class="btn btn__secondary"><span>Ver más</span><i
                    class="icon-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="banner-layout3 bg-overlay bg-parallax mt--130">
        {/* <div class="bg-img"><img src={Background} alt="background"></img></div> */}
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="heading-layout2 heading-light mb-50">
                <span class="heading__subtitle">Números que hablan por sí mismos</span>
                <h2 class="heading__title">Más de 30 años de experiencia nos respaldan</h2>
              </div>
            </div>
          </div>
          <div class="row counter-light">
            <div class="col-6 col-sm-3">
              <div class="counter-item">
                <h4 class="counter">6,154</h4>
                <p class="counter__desc">Horas operando</p>
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="counter-item">
                <h4 class="counter">2,512</h4>
                <p class="counter__desc">Controles de calidad</p>
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="counter-item">
                <h4 class="counter">1,784</h4>
                <p class="counter__desc">Proyectos ejecutados</p>
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="counter-item">
                <h4 class="counter">0,46</h4>
                <p class="counter__desc">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default App;
