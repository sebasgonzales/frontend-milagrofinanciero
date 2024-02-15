import React from 'react'
import WhatsappImage from '../assets/images/whatsapp.svg'

const Footer2 = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-top pt-50 pb-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-4  footer__widget footer__widget-about">
                                <div className="footer__widget-content mt-50">
                                    {/*<img src="assets/images/logo/logo-footer.png" alt="logo" className="mb-30" style={{width: '50% !important'}}></img>*/}
                                    <p className="mb-20 white">Tu banco online de confianza desde 2023. Simplificamos tus finanzas con servicios bancarios seguros y accesibles. Donde sea que estés, estamos contigo en cada transacción.</p>
                                    <ul className="social__icons list-unstyled mt-70">
                                        <li><a href="."><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="."><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="."><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                                <h6 className="footer__widget-title">Guías</h6>
                                <div className="footer__widget-content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href=".">Simulación de transferencia</a></li>
                                            <li><a href=".">Cómo cambiar de cuenta</a></li>
                                            <li><a href=".">Gestión de tarjetas de crédito</a></li>
                                            <li><a href=".">Configuración de alertas de seguridad</a></li>
                                            <li><a href=".">Cómo realizar pagos en línea</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                                <h6 className="footer__widget-title">Contacto</h6>
                                <div className="footer__widget-content text-light">
                                    <nav>
                                    <p>Atención de 9:00 a 15:00 horas</p>
                                        <ul className="list-unstyled">
                                            <li><a >Teléfono: +123 456 789</a></li>
                                            <li><a>Correo electrónico: info@milagro-financiero.com</a></li>
                                            <li><a>Dirección: Calle Ficticia #123, Buenos Aires</a></li>
                                        
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 footer__widget footer__widget-newsletter">
                                <h6 className="footer__widget-title">Boletín semanal</h6>
                                <div className="footer__widget-content">
                                    <p className="white">Mantente actualizado con las últimas novedades financieras y consejos útiles. Suscríbete a nuestro boletín semanal para recibir información exclusiva sobre servicios bancarios, tendencias económicas y consejos financieros.</p>
                                    <form className="widget__newsletter-form">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="Su Correo Electrónico"></input>
                                            <button type="submit" className="btn btn__primary">
                                                <i className="icon-arrow-right"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <p className="text-right footer__more-info mt-20 mb-0 white">¿Tiene dudas? <a href="faq.php">Clic aquí</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap justify-content-between">
                                <nav>
                                    <ul className="footer__copyright-links list-unstyled d-flex flex-wrap mb-0">
                                        <li><a href=".">Términos y Condiciones </a></li>
                                        <li><a href=".">Políticas de Privacidad</a></li>
                                        <li><a href=".">Preguntas Frecuentes</a></li>
                                    </ul>
                                </nav>
                                <p className="mb-0 color-white"> Milagro Financiero &copy; Todos los derechos reservados 2024.  Hecho con <i className="fa fa-heart"></i> por el Grupo 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
            <button id="scrollTopBtn"><i className="fa fa-long-arrow-up"></i></button>
            <div className="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=51964458524&amp;text=Hola,%20quiero%20saber%20m&.225;s." target="_blank" rel="noreferrer">
                    <img style={{ width: '56px;height: 56px' }} src={WhatsappImage} alt="Envíanos un mensaje personal."></img>
                </a>
            </div>
        </div >
    )
}

export default Footer2