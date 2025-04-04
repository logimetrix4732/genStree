import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import logo1 from "../../Imges/logo1.png";
import logo2 from "../../Imges/logo2.png";
import logo3 from "../../Imges/logo3.png";
import logo4 from "../../Imges/logo4.png";
import logo5 from "../../Imges/logo5.png";
import logo6 from "../../Imges/logo6.png";
import logo7 from "../../Imges/logo7.png";
import logo8 from "../../Imges/logo8.png";
import logo9 from "../../Imges/logo9.png";
import logo10 from "../../Imges/logo10.png";
import logo11 from "../../Imges/logo11.png";
import logo12 from "../../Imges/logo12.png";
import tech_shape_1 from "../../assets/img/shape/tech_shape_1.png";
import square_1 from "../../assets/img/shape/square_1.png";
const brandImages = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const BrandSlider = () => {
  return (
    <div className="overflow-hidden space-top" id="faq-sec">
      <section id="team-sec">
        <div className="brand-sec1">
          <div className="container py-5">
            <div className="slider-area text-center">
              <Swiper
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 },
                  1400: { slidesPerView: 6 },
                }}
                loop={true}
                freeMode={true}
                speed={2500}
                centeredSlides={true}
                modules={[Autoplay, FreeMode, Navigation]}
                navigation={{
                  prevEl: ".slider-prev",
                  nextEl: ".slider-next",
                }}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
              >
                {brandImages.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="brand-box" style={{ padding: "10px" }}>
                      <img
                        src={item}
                        alt="Brand Logo"
                        loading="lazy"
                        style={{
                          width: "150px",
                          height: "100px",
                          objectFit: "contain",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          background: "white",
                          borderRadius: "7px",
                          padding: "10px",
                        }}
                        className="brand-logo"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="shape-mockup" data-top={0} data-right={0}>
          <img src={tech_shape_1} alt="shape" loading="lazy" />
        </div>
        <div className="shape-mockup" data-top="0%" data-left="0%">
          <img src={square_1} alt="shape" loading="lazy" />
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .brand-logo:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .slider-arrow {
          background: #fff;
          border: none;
          cursor: pointer;
          padding: 10px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .slider-arrow:hover {
          background: #ddd;
        }
      `}</style>
    </div>
  );
};

export default BrandSlider;
