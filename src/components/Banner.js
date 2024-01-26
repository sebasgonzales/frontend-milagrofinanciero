import React from 'react'
import { Link } from 'react-router-dom'
import bannerImagen from '../assets/images/banners/banner.jpg';

const Banner = () => {
  return (
    // <!-- ============================
    //              Slider
    //  ============================== -->
    <section class="slider slider-layout2">
      <div class="slick-carousel carousel-arrows-light m-slides-0"
        data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear"}'>
        <div class="slide-item align-v-h bg-overlay bg-overlay-2">
          <div class="bg-img">
            <img src={bannerImagen} alt="qr img"></img>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                <div class="slide__content">
                  <h2 class="slide__title">Procesamiento de Metales</h2>
                  <p class="slide__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <a href="services.html" class="btn btn__white btn__icon btn__lg mr-30">
                    <span>Ver Servicio</span><i class="icon-arrow-right"></i>
                  </a>
                  <a class="video__btn popup-video" href="https://www.youtube.com/watch?v=gdmZI-jqJG0">
                    <div class="video__player">
                      <span class="video__player-animation"></span>
                      <span class="video__player-animation video__player-animation-2"></span>
                      <i class="fa fa-play"></i>
                    </div>
                    <span class="video__btn-title color-white ml-20">Ver Video</span>
                  </a>
                  {/* /.slide-content  */}
                </div>
                {/* /.col-xl-8 */}
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 d-none d-xl-block">
                <div class="info__slider-wrap d-flex justify-content-end mt-30">
                  <div class="info__slider">
                    <div class="slick-carousel" data-slick='{"slidesToShow": 1, "arrows": false, "dots": true}'>
                      <div class="info__slider-item">
                        <div class="info__slider-icon"><i class="icon-wrench5"></i></div>
                        <h5 class="info__slider-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</h5>
                      </div>
                      <div class="info__slider-item">
                        <div class="info__slider-icon"><i class="icon-wheelbarrow"></i></div>
                        <h5 class="info__slider-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</h5>
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
  )
}
export default Banner;