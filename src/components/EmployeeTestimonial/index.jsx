import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testi_bg_2 from "../../assets/img/bg/testi_bg_2.png";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
import testi_2_1 from "../../assets/img/testimonial/testi_2_1.jpg";
import testi_2_2 from "../../assets/img/testimonial/testi_2_2.jpg";
import testi_2_3 from "../../assets/img/testimonial/testi_2_3.jpg";
import quote_left_2 from "../../assets/img/icon/quote_left_2.svg";
import amansingh from "../../Imges/amansingh.jpg";

const EmployeeTestimonial = () => {
  const testimonials = [
    {
      image: amansingh,
      name: "Aman Singh",
      designation: "Developer",
      desc: "GenStree excels in IT solutions, offering innovation, reliability, and top-notch technology services with professional expertise and excellence.",
    },
    {
      image: testi_2_2,
      name: "Jackline Techie",
      designation: "CEO at Kormola",
      desc: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
    },
    {
      image: testi_2_3,
      name: "Abraham Khalil",
      designation: "CEO at Rimasu",
      desc: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
    },
  ];

  return (
    <section
      className="bg-auto space"
      style={{
        backgroundImage: `url(${testi_bg_2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget
          .querySelectorAll(".slider-arrow")
          .forEach((btn) => (btn.style.opacity = "1"));
      }}
      onMouseLeave={(e) => {
        e.currentTarget
          .querySelectorAll(".slider-arrow")
          .forEach((btn) => (btn.style.opacity = "0"));
      }}
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title d-flex align-items-center justify-content-center">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="decorative shape" loading="lazy" />
            </div>
            Hear From Our Team
          </span>
          <h2 className="sec-title">
            What Our Happy Employees
            <br />
            <span className="text-theme fw-normal">Say About Us</span>
          </h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            className="th-slider has-shadow"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testi-box">
                  <div className="testi-box_img">
                    <img
                      src={testimonial.image}
                      alt="Avatar"
                      loading="lazy"
                      style={{
                        width: "180px",
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="testi-box_quote">
                      <img src={quote_left_2} alt="quote" loading="lazy" />
                    </div>
                  </div>
                  <div className="testi-box_content">
                    <p className="testi-box_text">{testimonial.desc}</p>
                    <div className="testi-box_review">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <i key={i} className="fa-solid fa-star-sharp" />
                        ))}
                    </div>
                    <h3 className="box-title">{testimonial.name}</h3>
                    <p className="testi-box_desig">{testimonial.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="slider-arrow style3 slider-prev">
            <i className="far fa-arrow-left" />
          </button>
          <button className="slider-arrow style3 slider-next">
            <i className="far fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonial;
