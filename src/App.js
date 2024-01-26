import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarPrincipal from "./components/navegacion/navbarPrincipal"
import Login from './screens/Main/Login';
import Banner from './components/Banner'
import Hexa from './assets/images/hexa.png'
import Map from './assets/images/backgrounds/map.png'
import Portfolio1 from './assets/images/features/1.jpg'
import Portfolio2 from './assets/images/features/2.jpg'
import Portfolio3 from './assets/images/features/3.jpg'
import Background from './assets/images/backgrounds/1.jpg'
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
            <section class="about-layout2 pt-50 pb-0">
      <div class="container-fluid">
        <div class="row">
          <div class="text-block">
            <div class="heading-layout2 mb-30">
              <span class="heading__subtitle">Más de 30 años de experiencia nos respaldan</span>
              <h2 class="heading__title">Especialistas en metal mecánica desde 1988</h2>
              <p class="heading__desc mb-30 mt-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quae eveniet cum laboriosam unde commodi praesentium accusantium voluptates nisi aliquid quas qui, magnam exercitationem eligendi libero quibusdam quisquam et molestiae!</p>
            </div>
            <ul class="list-items list-unstyled mb-40">
              <li>Aluminio</li>
              <li>Cobrre</li>
              <li>Galvanizado</li>
              <li>Fibra de Vidrio</li>
              <li>Acero</li>
              <li>Otros</li>
            </ul>
            <a href="#" class="btn btn__primary btn__icon mr-20 mt-20">
              <span>Ver más</span><i class="icon-arrow-right"></i>
            </a>

            <a href="#" class="btn btn__secondary btn__icon mt-20">
              <span>Descargar brochure</span><i class="icon-arrow-right"></i>
            </a>
          </div>
          <div class="imgs-block">
            <div class="about__img">
              <img src={Hexa} alt="about" class="img-fluid w-100"></img>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-layout1 bg-gray pt-50 pb-0">
      <div class="fetures-bg">
        <div class="bg-img"><img src={Map} alt="background"></img></div>
      </div>
      <div class="container col-padding-0">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <span class="heading__subtitle">Empresa Certificada</span>
              <h2 class="heading__title">El mejor servicio de procesamiento de metales</h2>
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
                <h4 class="feature__title">Metal <br></br> Mecánica</h4>
                <p class="feature__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam perferendis ab beatae amet nostrum nam dolore.</p>
                <ul class="list-items list-items-layout2 list-unstyled mb-30">
                  <li>Metales</li>
                  <li>Acero inoxidable</li>
                  <li>Galvanizado</li>
                </ul>
                <a href="#" class="btn btn__secondary"><span>Ver más</span><i
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
                <h4 class="feature__title">Fibra <br></br> de Vidrio</h4>
                <p class="feature__desc">También conocido por el acrónimo GFRP, o GRP, es un material compuesto, formado por una matriz de plástico o resina reforzada con fibras de vidrio.</p>
                <ul class="list-items list-items-layout2 list-unstyled mb-30">
                  <li>Laminado de Fibra Lisa</li>
                  <li>Laminado Fibra Gofrado</li>
                  <li>Laminado Fibra Estriado</li>
                </ul>
                <a href="#" class="btn btn__secondary"><span>Ver más</span><i
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
                <h4 class="feature__title">Otros <br></br> Servicios</h4>
                <p class="feature__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam perferendis ab beatae amet nostrum nam dolore.</p>
                <ul class="list-items list-items-layout2 list-unstyled mb-30">
                  <li>Servicio de procesamiento</li>
                  <li>Servicio de corte</li>
                  <li>Servicio de transporte</li>
                </ul>
                <a href="#" class="btn btn__secondary"><span>Ver más</span><i
                    class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="banner-layout3 bg-overlay bg-parallax mt--130">
      <div class="bg-img"><img src={Background} alt="background"></img></div>
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
        </div>
    )
}

export default App;
