import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import { Link } from "react-router-dom";

const OurApplicationDevelopment = ({ applicationservices }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section className="service-area6 space" id="service-sec">
      <div className="container th-container4">
        <div className="title-area text-center">
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" loading="lazy" />
            </div>
            Service benefits
          </span>
          <h2 className="sec-title">
            What You Can Achieve with Logimetrix Custom App Development
          </h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {applicationservices.map((service) => (
              <SwiperSlide key={service.id}>
                <div
                  className="service-item th-ani"
                  style={{
                    height: expandedCard === service.id ? "auto" : "390px",
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                  }}
                  onMouseLeave={() => setExpandedCard(null)}
                >
                  <div className="service-item_icon">
                    <img src={service.icon} alt="Icon" loading="lazy" />
                  </div>
                  <div className="service-item_content">
                    <h3
                      className="box-title"
                      style={{
                        whiteSpace:
                          expandedCard === service.id ? "normal" : "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Link to="/contactUs">{service.title}</Link>
                    </h3>

                    <p
                      className="service-item_text"
                      style={{
                        display:
                          expandedCard === service.id ? "block" : "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 5,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {service.description}
                    </p>
                    {expandedCard === service.id ? (
                      <button
                        className="line-btn see-less"
                        onClick={() => setExpandedCard(null)}
                      >
                        See Less
                      </button>
                    ) : (
                      <button
                        className="line-btn see-more"
                        onClick={() => setExpandedCard(service.id)}
                      >
                        See More
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="slider-arrow slider-prev">
            <i className="far fa-arrow-left" />
          </button>
          <button className="slider-arrow slider-next">
            <i className="far fa-arrow-right" />
          </button>
        </div>
      </div>
      <style jsx>{`
        .see-more,
        .see-less {
          background: #4786e6;
          color: #fff;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease;
          color: "#ffffff";
        }
        .see-more:hover,
        .see-less:hover {
          background: #4786e6;
        }
      `}</style>
    </section>
  );
};

export default OurApplicationDevelopment;
