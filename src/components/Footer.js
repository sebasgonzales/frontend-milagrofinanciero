import React from 'react'
import WhatsappImage from '../assets/images/whatsapp.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-top pt-50 pb-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-4 footer__widget footer__widget-about">
                                <div className="footer__widget-content">
                                    <img src="assets/images/logo/logo-footer.png" alt="logo" className="mb-30" style={{width: '50% !important'}}></img>
                                    <p className="mb-20 white">Empresa de la industria metal-mecánica con presencia en más de 30 países desde 1988, con centros de servicios y/o filiales en USA, Puerto Rico, Costa Rica y Perú.</p>
                                    <ul className="social__icons list-unstyled">
                                        <li><a href="."><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="."><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="."><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                                <h6 className="footer__widget-title">Metales</h6>
                                <div className="footer__widget-content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href=".">Metales</a></li>
                                            <li><a href=".">Galvalume</a></li>
                                            <li><a href=".">Galvanizado</a></li>
                                            <li><a href=".">Acero</a></li>
                                            <li><a href=".">Acero Inoxidable</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                                <h6 className="footer__widget-title">Fibra de Vidrio</h6>
                                <div className="footer__widget-content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href=".">Laminado Fibra Lisa</a></li>
                                            <li><a href=".">Laminado Fibra Gofrado</a></li>
                                            <li><a href=".">Laminado Fibra Estriado</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 footer__widget footer__widget-newsletter">
                                <h6 className="footer__widget-title">Boletín semanal</h6>
                                <div className="footer__widget-content">
                                    <p className="white">Mantente actualizado con las últimas novedades del mundo de los metales y la fibra de vidrio.</p>
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
                                <p className="mb-0 color-white"> Century Metals &copy; Todos los derechos reservados 2020. Hecho con <i className="fa fa-heart"></i> por
                                    <a href="https://linkreativo.com" target="_blank"  rel="noreferrer">Linkreativo</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
            <button id="scrollTopBtn"><i className="fa fa-long-arrow-up"></i></button>
            <div className="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=51964458524&amp;text=Hola,%20quiero%20saber%20m&.225;s." target="_blank"  rel="noreferrer">
                    <img style={{width: '56px;height: 56px'}} src={WhatsappImage} alt="Envíanos un mensaje personal."></img>
                </a>
            </div>
        </div >
    )
}

export default Footer