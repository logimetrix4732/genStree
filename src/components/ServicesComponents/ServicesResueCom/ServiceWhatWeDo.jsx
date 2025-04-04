import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import { Link } from "react-router-dom";

const ServiceWhatWeDo = ({ services }) => {
  return (
    <section>
      <div className="title-area text-center">
        <span className="sub-title">
          <div className="icon-masking me-2">
            <img src={title_shape_2} alt="shape" loading="lazy" />
          </div>
          Transform your business
        </span>
        <h2 className="sec-title">
          with tailored software solutions built on decades of expertise
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "90%",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div className="slider-area">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 2500 }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 5 },
                576: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                992: { slidesPerView: 3, spaceBetween: 15 },
                1200: { slidesPerView: 4, spaceBetween: 25 },
              }}
              pagination={{ clickable: true }}
              className="swiper th-slider has-shadow"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="service-featured"
                    style={{ textAlign: "center", padding: "10px" }}
                  >
                    <div
                      className="service-featured_content"
                      style={{ borderRadius: "8px", padding: "15px" }}
                    >
                      <div className="shape-icon">
                        <img
                          src={service.img}
                          alt="Icon"
                          loading="lazy"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <h3 className="box-title">
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                      <p className="service-featured_text">
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="icon-btn"
                        style={{
                          position: "absolute",
                          top: "87%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                        }}
                      >
                        <i className="fa-regular fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWhatWeDo;
