import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const KeyFeature = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Customer Feedbacks</span>
          <h2 className="sec-title">Loved by our customer worldwide</h2>
        </div>
        <div className="slider-area testi-grid2-area">
          <Swiper
            modules={[Thumbs]}
            spaceBetween={13}
            slidesPerView={5}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 4 },
              576: { slidesPerView: 5 },
            }}
            className="testi-grid2-thumb"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <SwiperSlide key={num}>
                <div className="box-img">
                  <img
                    src={`assets/img/testimonial/testi_1_${num}.png`}
                    alt={`Testimonial ${num}`}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Navigation, Thumbs, Autoplay]}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
              prevEl: ".slider-prev",
              nextEl: ".slider-next",
            }}
            className="testi-grid2-main"
          >
            {[
              {
                text: "I've had the pleasure of working with logimetrix...",
                name: "Michel Jane Alum",
                role: "CTO of Portfolio",
              },
              {
                text: "If you have specific questions about gathering...",
                name: "Alex Michel",
                role: "Founder CEO",
              },
              {
                text: "It sounds like you're expressing positive feedback...",
                name: "Jenny Wilson",
                role: "Project Manager",
              },
              {
                text: "If you have a specific question regarding...",
                name: "Savannah Nguyen",
                role: "UI/UX Designer",
              },
              {
                text: "It's fantastic to hear that your product...",
                name: "Cameron Williamson",
                role: "Disaster Recovery",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card2">
                  <p className="testi-card2_text">{item.text}</p>
                  <div className="testi-card2_profile">
                    <div className="testi-card2_content">
                      <h3 className="box-title">{item.name}</h3>
                      <span className="testi-card2_desig">{item.role}</span>
                    </div>
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

          <div
            className="testi-line"
            style={{
              position: "absolute",
              bottom: "150px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "2px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
