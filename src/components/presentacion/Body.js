import React from 'react';
import InfoDolar from './InfoDolar';
import styles from '../../styles/componentes/Body.module.css'
import Finanza from '../../assets/images/body/Finanza-hexa.png';
import Portfolio1 from '../../assets/images/features/navidad.jpg';
import Portfolio2 from '../../assets/images/features/tarjeta.jpg';
import Portfolio3 from '../../assets/images/features/transferencia.jpg';

const Body = () => {
    return (
        <div>
            <section className="about-layout2 pt-50 pb-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="text-block">
                            <div className="heading-layout2 mb-30">
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
                                </div>
                                <div className="col">
                                    <a href="." className="btn btn__secondary btn__icon mr-20 mt-20">
                                        <span>Ver más</span><i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                        <div className="imgs-block">
                            <div className="about__img">
                                <img src={Finanza} alt="about" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-layout1 pt-50 pb-0" style={{ backgroundColor: '#ebebeb' }}>
                <div className="container col-padding-0">
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
                                    <img src={Portfolio1} alt="portfolio img" />
                                </div>
                                <div className="feature__content">
                                    <h4 className="feature__title">Las fiestas, son en Milagro Financiero</h4>
                                    <p className="feature__desc">¡Conocé todas las promos navideñas que tenemos! Son por tiempo limitado.</p>
                                    <a href="." className="btn btn__secondary"><span>Ver más</span><i
                                        className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="feature-item">
                                <div className="feature__img">
                                    <img src={Portfolio2} alt="portfolio img" />
                                </div>
                                <div className="feature__content">
                                    <h4 className="feature__title">Tarjetas sin complicaciones</h4>
                                    <p className="feature__desc">Pedí tus tarjetas de débito y crédito VISA de Milagro Financiero y arrancá a disfrutar de todos sus beneficios.</p>
                                    <a href="." className="btn btn__secondary"><span>Ver más</span><i
                                        className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="feature-item">
                                <div className="feature__img">
                                    <img src={Portfolio3} alt="portfolio img" />
                                </div>
                                <div className="feature__content">
                                    <h4 className="feature__title">Recibí transferencias inmediatas</h4>
                                    <p className="feature__desc">Con nosotros podés recibir transferencias de quien quieras, enterarte cuándo llegó y cuándo fue vista.</p>
                                    <a href="." className="btn btn__secondary"><span>Ver más</span><i
                                        className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banner-layout3 bg-overlay bg-parallax mt--130">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="heading-layout2 heading-light mb-50">
                                <span className="heading__subtitle">Números que hablan por sí mismos</span>
                                <h1 className="text-light text-left" style={{ textTransform: 'none' }}>Descubre las mejores tasas de cambio en tiempo real para tus Operaciones Financieras</h1>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='row justify-content-center'>
                            <div className='col-md-4'>
                                <div className={`card text-center ${styles.dolar}`}>
                                    <div className='card-body p-5'>
                                        <h2 className='card-title'>Dolar Oficial</h2>
                                        <h5 className='card-text'>
                                            <InfoDolar nombre='Dolar Oficial' />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className={`card text-center ${styles.dolar}`}>
                                    <div className='card-body p-5'>
                                        <h2 className='card-title'>Dolar Blue</h2>
                                        <h5 className='card-text'>
                                            <InfoDolar nombre='Dolar Blue' />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className={`card text-center ${styles.dolar}`}>
                                    <div className='card-body p-5'>
                                        <h2 className='card-title'>Dolar Turista</h2>
                                        <h5 className='card-text'>
                                            <InfoDolar nombre='Dolar turista' />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section >

        </div >
    );
}

export default Body;
