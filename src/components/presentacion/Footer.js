import React from 'react';
import WhatsappImage from '../../assets/images/whatsapp.svg';
import styles from '../../styles/componentes/Footer.module.css'; // Importa el archivo CSS

const Footer2 = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles["footer-top"]}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-4 footer__widget footer__widget-about">
                                <div className="footer__widget-content mt-50">
                                    {/*<img src="assets/images/logo/logo-footer.png" alt="logo" className="mb-30" style={{width: '50% !important'}}></img>*/}
                                    <p className={`${styles.mb20} ${styles.blackText}`}style={{ backgroundColor: 'grey', padding: '20px', width: '90%', borderRadius: '15px' }}>Tu banco online de confianza desde 2023. Simplificamos tus finanzas con servicios bancarios seguros y accesibles. Donde sea que estés, estamos contigo en cada transacción.</p>
                                    <ul className="social__icons list-unstyled mt-70">
                                        <li><a href="."><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="."><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="."><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                                <h6 className={`${styles["footer__widget-title"]} ${styles.underlined}`}>Guías</h6>
                                <div className="footer__widget-content">
                                    <nav>
                                    <ul className="list-unstyled">
                                        <li><a href="." style={{ color: '#336699' }}>Simulación de transferencia</a></li>
                                        <li><a href="." style={{ color: '#336699' }}>Cómo cambiar de cuenta</a></li>
                                        <li><a href="." style={{ color: '#336699' }}>Gestión de tarjetas de crédito</a></li>
                                        <li><a href="." style={{ color: '#336699' }}>Configuración de alertas de seguridad</a></li>
                                        <li><a href="." style={{ color: '#336699' }}>Cómo realizar pagos en línea</a></li>
                                    </ul>

                                    </nav>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                                <h6 className={`${styles["footer__widget-title"]} ${styles.underlined}`}>Contacto</h6>
                                <div className="footer__widget-content text-light">
                                    <nav>
                                    <p>Atención de 9:00 a 15:00 horas</p>
                                        <ul className="list-unstyled">
                                            <li><a>Teléfono: +123 456 789</a></li>
                                            <li><a>Correo electrónico: info@milagro-financiero.com</a></li>
                                            <li><a>Dirección: Calle Ficticia #123, Buenos Aires</a></li>
                                        
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 footer__widget footer__widget-newsletter">
                                <h6 className={`${styles["footer__widget-title"]} ${styles.underlined}`}>Boletín semanal</h6>
                                <div className="footer__widget-content">
                                <p className={`${styles.mb20} ${styles.blackText}`}style={{ backgroundColor: 'grey', padding: '20px', width: '90%', borderRadius: '15px' }}>Mantente actualizado con las últimas novedades financieras y consejos útiles. Suscríbete a nuestro boletín semanal para recibir información exclusiva sobre servicios bancarios, tendencias económicas y consejos financieros.</p>
                                    <form className="widget__newsletter-form">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control"style={{ backgroundColor: 'white', padding: '20px', width: '90%', borderRadius: '15px' }} placeholder="Su Correo Electrónico"></input>
                                            <button type="submit" className="btn btn__primary">
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <p className={`${styles.mb20} ${styles.blackText}`}style={{ backgroundColor: 'grey', padding: '10px', width: '45%', borderRadius: '15px' }}>¿Tiene dudas? <a href="faq.php"style={{ color: '#336699' }}>Clic aquí</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["footer-bottom"]}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <nav>
                    <ul className={`${styles["footer__copyright-links"]} list-unstyled mb-0`}>
                        <li><a href="." style={{ color: '#336699' }}>Términos y Condiciones</a></li>
                        <li><a href="." style={{ color: '#336699' }}>Políticas de Privacidad</a></li>
                        <li><a href="." style={{ color: '#336699' }}>Preguntas Frecuentes</a></li>
                    </ul>
                </nav>
                <div className="d-flex align-items-center justify-content-between"> {/* Contenedor para alinear verticalmente */}
                    <p className={`${styles.mb0} color-white`}>Milagro Financiero &copy; Todos los derechos reservados 2024. Hecho con <i className="fa fa-heart"></i> por el Grupo 1</p>
                    <div className={styles.whatsapp} style={{ marginLeft: '20px' }}> {/* Añade un margen a la izquierda */}
                        <a href="https://api.whatsapp.com/send?phone=51964458524&amp;text=Hola,%20quiero%20saber%20m&.225;s." target="_blank" rel="noreferrer">
                            <img src={WhatsappImage} alt="Envíanos un mensaje personal." />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            </footer>
        </div>
    );
}

export default Footer2;
