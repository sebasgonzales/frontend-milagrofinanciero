import React from 'react';
import bannerImagen from '../assets/images/banners/pareja-laptop.jpg';
import { GrTransaction } from "react-icons/gr";
import { FaHouseLaptop } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='p-5 d-flex justify-content-center align-items-center' style={{ width: '100%', backgroundColor:'#ebebeb'}}>
            <div className="bg-white p-0 rounded-4 text-secondary shadow w-100 w-md-65">
                <div className='container col-padding-5'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 col-lg-4 d-flex pt-5 pb-5'>
                            <img src={bannerImagen} alt="chicos laptop" className='rounded' style={{ width: '100%' }} />
                        </div>

                        <div className='col-sm-12 col-md-8 col-lg-5 pt-3'>
                            <h2>Tus finanzas, <br></br>al alcance de tu mano</h2>
                            <p>
                                Con nuestro banco digital, puedes acceder a tus cuentas, realizar transacciones y administrar tus finanzas desde cualquier lugar. Somos un banco seguro y confiable, con una amplia gama de productos y servicios para satisfacer tus necesidades financieras.
                            </p>
                            <p>¿Estás listo para tomar el control de tus finanzas?</p>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-3 mb-3 pl-10 pt-3 bg-light'>
                            <div className='row text-right bg-light'>
                                <h1><FaHouseLaptop /></h1>
                                <h5>Tu banco,<br></br> desde tu hogar.</h5>
                            </div>
                            <div className='row text-right bg-light'>
                                <h1><GrTransaction /></h1>
                                <h5>Transacciones fáciles,<br></br> finanzas bajo control.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
