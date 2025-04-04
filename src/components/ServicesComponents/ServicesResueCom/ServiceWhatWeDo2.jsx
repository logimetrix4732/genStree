import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import { Link } from "react-router-dom";

const ServiceWhatWeDo2 = ({ sectionTitle, services }) => {
  return (
    <section className="service-sec15 space-bottom" id="service-sec">
      <div className="container th-container4">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-7 col-sm-10 px-xl-4">
            <div className="title-area text-center">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" loading="lazy" />
                </div>
                Benefit management
              </span>
              <h2 className="sec-title">{sectionTitle}</h2>
            </div>
          </div>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="th-slider has-shadow"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service_card4">
                  <div className="box-icon">
                    <img src={service.img} alt="Icon" loading="lazy" />
                  </div>
                  <h3 className="box-title">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p className="service_card4_text">{service.desc}</p>
                  <Link to={service.link} className="line-btn">
                    Read Details{" "}
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceWhatWeDo2;
