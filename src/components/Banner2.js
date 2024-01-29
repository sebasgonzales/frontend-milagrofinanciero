import React from 'react';
import bannerImagen from '../assets/images/banners/pareja-laptop.jpg';
import { GrTransaction } from "react-icons/gr";
import { FaHouseLaptop } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className="pt-5 ps-5 bg-primary" style={{ height: '70vh' }}>
            <div>
                <div className="align-v-h">
                    <div className="bg-img col-4 col-md-5">
                        <img src={bannerImagen} alt="qr img" className='rounded' />
                    </div>
                    <div className="container col-8 col-md-8">
                        <div className="row">
                            <div className="col-6">
                                <div>
                                    <h2 >Tus finanzas, al alcance de tu mano</h2>
                                    <p >
                                        Con nuestro banco digital, puedes acceder a tus cuentas, realizar transacciones y administrar tus finanzas desde cualquier lugar. Somos un banco seguro y confiable, con una amplia gama de productos y servicios para satisfacer tus necesidades financieras.
                                    </p>
                                    <p>¿Estás listo para tomar el control de tus finanzas?</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 " style={{ height: '50vh' }}>
                                <div className="bg-light m-0 p-0">
                                    <div >
                                        <div>
                                            <div>
                                                <h1><FaHouseLaptop /></h1>
                                                <h5 >Tu banco, desde tu hogar.</h5>
                                            </div>
                                            <div>
                                                <h1><GrTransaction /></h1>
                                                <h5>Transacciones fáciles, finanzas bajo control.</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;
