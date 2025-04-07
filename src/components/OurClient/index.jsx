import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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

const OurClient = () => {
  const testimonials = [
    {
      id: 1,
      img: logo1,
      text: "The DMS solution provided by GenStree has enhanced our document handling processes and significantly improved our efficiency. Highly recommended!",
      avatar: "assets/img/testimonial/testi_2_1.png",
      name: "ACME",
      designation: "Manager",
      width: "100px",
    },
    {
      id: 2,
      img: logo2,
      text: "Your team’s expertise and dedication made all the difference. The custom software you built for us has significantly improved our workflow efficiency!",
      avatar: "assets/img/testimonial/testi_2_2.png",
      name: "Brooklyn Simmons",
      designation: "CTO of Portfolio",
      width: "100px",
    },
    {
      id: 3,
      img: logo3,
      text: "We were struggling with outdated systems, but your innovative IT solutions transformed our business. Seamless integration and outstanding support!",
      avatar: "assets/img/testimonial/testi_2_1.png",
      name: "Andrew D. Smith",
      designation: "Manager",
      width: "100px",
    },
    {
      id: 4,
      img: logo4,
      text: "The website and backend solution you provided have helped us scale effortlessly. Your team’s technical knowledge and responsiveness are commendable!",
      avatar: "assets/img/testimonial/testi_2_2.png",
      name: "Brooklyn Simmons",
      designation: "CTO of Portfolio",
      width: "100px",
    },
    {
      id: 5,
      img: logo5,
      text: "Security was a major concern for us, but your cybersecurity solutions gave us peace of mind. Thank you for making our system more secure and efficient!",
      avatar: "assets/img/testimonial/testi_2_1.png",
      name: "Andrew D. Smith",
      designation: "Manager",
      width: "190px",
    },
    {
      id: 6,
      img: logo6,
      text: "The SAG project was executed flawlessly by GenStree. Their innovative approach has brought a new level of precision to our operations.",
      avatar: "assets/img/testimonial/testi_2_2.png",
      name: "SAG",
      designation: "CTO of Portfolio",
      width: "100px",
    },
    {
      id: 7,
      img: logo7,
      text: "Working with your team was a pleasure! The cloud-based solution you implemented has boosted our productivity and simplified operations.",
      avatar: "assets/img/testimonial/testi_2_1.png",
      name: "Andrew D. Smith",
      designation: "Manager",
      width: "100px",
    },
    {
      id: 8,
      img: logo8,
      text: "The Sterlite project was completed with remarkable precision, expertise, and efficiency. GenStree's innovative solutions have truly optimized our workflows seamlessly.",
      avatar: "assets/img/testimonial/testi_2_2.png",
      name: "Sterlite Power",
      designation: "CTO of Portfolio",
      width: "190px",
    },
    {
      id: 9,
      img: logo9,
      text: "GenStree's expertise in the Indus Tower project delivered unparalleled results and innovation. Their commitment, dedication, and solutions exceeded all expectations.",
      avatar: "assets/img/testimonial/testi_2_2.png",
      name: "Indus Tower",
      designation: "CTO of Portfolio",
      width: "100px",
    },
    {
      id: 10,
      img: logo10,
      text: "The NDDB project was executed with unparalleled expertise and precision by the GenStree team. Their innovative solutions are truly top-notch.",
      avatar: "assets/img/testimonial/testi_2_1.png",
      name: "Dummy Client 1",
      designation: "CEO",
      width: "120px",
    },
    {
      id: 11,
      img: logo11,
      text: "Your team delivered a top-notch CRM solution that has revolutionized how we manage our clients. The seamless user experience and automation features are game-changers!",
      avatar: "assets/img/testimonial/testi_2_2.png",
      name: "Dummy Client 2",
      designation: "Product Manager",
      width: "100px",
    },
    {
      id: 12,
      img: logo12,
      text: "GenStree delivered exceptional solutions for our Solar and CMS needs. Their professionalism, dedication, innovation, and attention to detail are truly unmatched.",
      avatar: "assets/img/testimonial/testi_2_1.png",
      name: "Dummy Client 3",
      designation: "Lead Engineer",
      width: "100px",
    },
  ];

  return (
    <section
      className="overflow-hidden bg-top-center th-radius3 m-4 mt-0 mb-0 space position-relative"
      id="testi-sec"
    >
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          backgroundImage: "url('assets/img/bg/testimonial_bg_5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }}
      ></div>

      <div
        className="container th-container4 position-relative"
        style={{ zIndex: 1, marginTop: "-50px" }}
      >
        <div className="row justify-content-between align-items-end">
          <div className="col-xl-6">
            <div className="title-area text-center text-lg-start">
              <div class="title-area mb-35 text-center text-xl-start">
                <div class="shadow-title">Our Clients</div>
                <span class="sub-title" style={{ color: "white" }}>
                  <div class="icon-masking me-2">
                    <img
                      src="assets/img/theme-img/title_shape_2_1.svg"
                      alt="shape"
                      loading="lazy"
                    />
                  </div>
                  Our Clients
                </span>
                <h2 className="sec-title text-white">
                  Hear from Our Satisfied Clients
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-auto d-none d-xl-block">
            <div className="sec-btn">
              <button
                className="slider-arrow style2 default"
                id="prev-btn"
                style={{ marginBottom: "10px" }}
              >
                <i className="far fa-arrow-left" />
              </button>
              <button className="slider-arrow style2 default" id="next-btn">
                <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: "#next-btn",
            prevEl: "#prev-btn",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="swiper th-slider has-shadow"
          style={{
            width: "100%",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="testi-box5 th-ani"
                style={{
                  transition: "all 0.3s ease-in-out",
                  opacity: 1,
                  transform: "scale(1)",
                  height: "350px",
                }}
              >
                <div className="testi-box5_image">
                  <img
                    src={item.img}
                    alt="testimonial"
                    loading="lazy"
                    style={{
                      width: item.width,
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="testi-box5_text">{item.text}</p>
                <div className="testi-box5_wrapper">
                  <div className="testi-box5_profile"></div>
                  <div className="testi-quote">
                    <img
                      src="assets/img/icon/quote.svg"
                      alt="quote"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClient;
