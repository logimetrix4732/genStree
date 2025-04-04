import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import quote_3d from "../../../../assets/img/icon/quote_3d.png";
import testi_bg_4 from "../../../../assets/img/bg/testi_bg_4.png";
import title_shape_2_white from "../../../../assets/img/theme-img/title_shape_2_white.svg";
import "swiper/css";
import "swiper/css/pagination";
const KeyFeatures = ({ testimonials }) => {
  return (
    <section>
      <div
        className="round-container"
        style={{
          backgroundImage: `url(${testi_bg_4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#4786E6",
        }}
      >
        <div className="container">
          <div
            className="title-area"
            style={{ marginTop: "60px", marginBottom: "-50px" }}
          >
            <div className="shadow-title">Key Features</div>
            <span className="sub-title" style={{ color: "white" }}>
              <div className="icon-masking me-2">
                <img src={title_shape_2_white} alt="shape" loading="lazy" />
              </div>
              Key Features
            </span>
          </div>
          <div className="testi-block-area">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                992: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
              }}
              className="swiper th-slider has-shadow testi-block-slide"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    padding: "0px 20px 0px 20px",
                    height: "350px",
                  }}
                >
                  <div className="testi-block">
                    <p className="testi-block_text">{testimonial.text}</p>
                    <div className="testi-block_profile">
                      <div className="testi-block_avater">
                        <img
                          src={testimonial.img}
                          alt="Avatar"
                          loading="lazy"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">{testimonial.name}</h3>
                        <p className="testi-block_desig">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testi-block-quote">
              <img src={quote_3d} alt="quote" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
