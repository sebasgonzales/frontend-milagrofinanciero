import React from 'react';
import InfoDolar from './InfoDolar';
import styles from '../../styles/componentes/Body.module.css'; // Importar los estilos CSS
import Finanza from '../../assets/images/body/Finanza-hexa.png';
import Portfolio1 from '../../assets/images/features/navidad.jpg';
import Portfolio2 from '../../assets/images/features/tarjeta.jpg';
import Portfolio3 from '../../assets/images/features/transferencia.jpg';

const Body = () => {
    return (
        <div>
<section className={`${styles['about-layout2']} pt-50 pb-0`}>
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-md-5 offset-md-1">
                <div className="text-block">
                    <div className={`${styles['heading-layout2']} mb-30`}>
                        <span className="heading__subtitle">Más de 100.000 personas nos eligen</span>
                        <h2 className="heading__title mt-30">Especialistas en hacer crecer tu dinero</h2>
                        <p className="heading__desc mb-30 mt-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quae eveniet cum laboriosam unde commodi praesentium accusantium voluptates nisi aliquid quas qui, magnam exercitationem eligendi libero quibusdam quisquam et molestiae!</p>
                    </div>
                    <ul className="list-items list-unstyled mb-40">
                        <li><strong>Tus claves.</strong><br />Conocé como generar tu clave y Usuario, clave Banelco y Token.</li>
                        <li><strong>Tutoriales.</strong><br />Turnos, clave, blanqueo, transferencias y más.</li>
                        <li><strong>¡No caigas en la estafa!</strong> <br />Conocé cómo evitar engaños</li>
                        <li><strong>Educación financiera.</strong><br />Te ayudamos a tomar decisiones de manera informada y responsable.</li>
                    </ul>
                    <div className="row">
                        <div className="col">
                            <div className="text-center mt-20">
                                <a href="." className="btn btn__secondary btn__icon mr-20 mt-20">
                                    <span className="justify-content-center align-items-center" style={{ marginRight: '5px', fontWeight: 'bold', backgroundColor: '#ebebeb', padding: '10px', width: '45%', borderRadius: '15px' }}>Ver más</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="imgs-block">
                    <div className="about__img">
                        <img src={Finanza} alt="about" className="img-fluid w-75" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className={`${styles['features-layout1']} pt-50 pb-100 `} style={{ backgroundColor: '#ebebeb' }}>
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div className="heading text-center mb-50">
                    <span className="heading__subtitle">Banco Certificado</span>
                    <h2 className="heading__title">El mejor servicio al alcance de tu mano</h2>
                </div>
            </div>
        </div>
        <div className="row features-wrapper">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="feature-item">
                    <div className="feature__img">
                        <img src={Portfolio1} alt="portfolio img" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div className="feature__content">
                        <h4 className="feature__title">Las fiestas, son en Milagro Financiero</h4>
                        <p className="feature__desc">¡Conocé todas las promos navideñas que tenemos! Son por tiempo limitado.</p>
                        <div className="text-center mt-20">
                        <a href="." className="btn btn__secondary btn__icon mr-20 mt-20">
                        <span style={{ marginRight: '5px', fontWeight: 'bold', backgroundColor: 'white', padding: '10px', width: '45%', borderRadius: '15px' }} >Ver más  </span>
                                </a>
                                </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="feature-item">
                    <div className="feature__img">
                        <img src={Portfolio2} alt="portfolio img" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div className="feature__content">
                        <h4 className="feature__title">Tarjetas sin complicaciones</h4>
                        <p className="feature__desc">Pedí tus tarjetas de débito y crédito VISA de Milagro Financiero y arrancá a disfrutar de todos sus beneficios.</p>
                        <div className="text-center mt-20">
                        <a href="." className="btn btn__secondary btn__icon mr-20 mt-20">
                        <span style={{ marginRight: '5px', fontWeight: 'bold', backgroundColor: 'white', padding: '10px', width: '45%', borderRadius: '15px' }} >Ver más  </span>

                                </a>
                                </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="feature-item">
                    <div className="feature__img">
                        <img src={Portfolio3} alt="portfolio img" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div className="feature__content">
                        <h4 className="feature__title">Recibí transferencias inmediatas</h4>
                        <p className="feature__desc">Con nosotros podés recibir transferencias de quien quieras, enterarte cuándo llegó y cuándo fue vista.</p>
                        <div className="text-center mt-20">
                        <a href="." className="btn btn__secondary btn__icon mr-20 mt-20">
                        <span style={{ marginRight: '5px', fontWeight: 'bold', backgroundColor: 'white', padding: '10px', width: '45%', borderRadius: '15px' }} >Ver más  </span>
                                </a>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


            <section className="banner-layout3 bg-overlay bg-parallax mt--130 mb-5">
                <div className="container">
                <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-6">
        <div className="heading-layout2 heading-light mb-5"> {/* Añadí mb-5 para un margen inferior mayor */}
        </div>
    </div>
</div>
<div className="row justify-content-center"> {/* Centra el texto */}
    <div className="col-lg-10"> {/* Tamaño del contenedor para centrar el texto */}
        <h1 className="text-center">Descubre las mejores tasas de cambio en tiempo real para tus Operaciones Financieras</h1>
    </div>
</div>

                    <div className='container-fluid'>
                        <div className='row justify-content-center'>
                            <div className='col-md-4'>
                                <div className={`card text-center ${styles.dolar}`}> {/* Aplicar la clase CSS */}
                                    <div className='card-body p-5'>
                                        <h2 className='card-title'>Dolar Oficial</h2>
                                        <h5 className='card-text'>
                                            <InfoDolar nombre='oficial' />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className={`card text-center ${styles.dolar}`}> {/* Aplicar la clase CSS */}
                                    <div className='card-body p-5'>
                                        <h2 className='card-title'>Dolar Blue</h2>
                                        <h5 className='card-text'>
                                            <InfoDolar nombre='blue' />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className={`card text-center ${styles.dolar}`}> {/* Aplicar la clase CSS */}
                                    <div className='card-body p-5'>
                                        <h2 className='card-title'>Dolar Cripto</h2>
                                        <h5 className='card-text'>
                                            <InfoDolar nombre='cripto' />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}

export default Body;
