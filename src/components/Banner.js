import React from 'react';
import { Link } from 'react-router-dom';
import bannerImagen from '../assets/images/banners/pareja-laptop.jpg';
import { GrTransaction } from "react-icons/gr";
import { FaHouseLaptop } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="slider slider-layout2">
  <div
    className="slick-carousel carousel-arrows-light m-slides-0"
    data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700, "fade": true, "cssEase": "linear"}'
  >
    <div className="slide-item align-v-h bg-overlay bg-overlay-2">
      <div className="bg-img col-12 col-md-5">
        <img src={bannerImagen} alt="qr img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="slide__content">
              <h2 className="slide__title">Tus finanzas, al alcance de tu mano</h2>
              <p className="slide__desc">
                Con nuestro banco digital, puedes acceder a tus cuentas, realizar transacciones y administrar tus finanzas desde cualquier lugar. Somos un banco seguro y confiable, con una amplia gama de productos y servicios para satisfacer tus necesidades financieras.
              </p>
              <p className="slide__desc">¿Estás listo para tomar el control de tus finanzas?</p>
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-xl-block">
            <div className="info__slider-wrap d-flex justify-content-end mt-30">
            <div className="info__slider height-100">
                <div className="slick-carousel" data-slick='{"slidesToShow": 1, "arrows": false, "dots": true}'>
                  <div className="info__slider-item">
                    <h1><FaHouseLaptop /></h1>
                    <h5 >Tu banco, desde tu hogar.</h5>
                  </div>
                  <div className="info__slider-item">
                    <h1><GrTransaction /></h1>
                    <h5 className="info__slider-title">Transacciones fáciles, finanzas bajo control.</h5>
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
