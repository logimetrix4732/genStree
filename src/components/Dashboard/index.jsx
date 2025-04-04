import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import hero_shape_2_2 from "../../assets/img/hero/hero_shape_2_2.png";
import hero_shape_2_3 from "../../assets/img/hero/hero_shape_2_3.png";
import dashboardbg1 from "../../Imges/dashboardbg1.png";
import dashboardbg2 from "../../Imges/dashboardbg2.png";
import dashboardbg3 from "../../Imges/dashboardbg3.png";
import dashboardbg4 from "../../Imges/dashboardbg4.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const preloadImages = (imageArray) => {
  imageArray.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};

const slides = [
  {
    id: 1,
    bg: dashboardbg1,
    subtitle: "GenStree Overview",
    title1: "Your Trusted Partner in Software Delivery",
    text: "We combine cutting-edge technology with industry expertise to design and develop full-cycle, custom software solutions that bring your vision to life.",
  },
  {
    id: 2,
    bg: dashboardbg2,
    subtitle: "Data & AI",
    title1: "Unlock the Power of Data and AI",
    text: "Leverage advanced analytics to gain deep insights into customer behavior and maximize your business potential.",
  },
  {
    id: 3,
    bg: dashboardbg3,
    subtitle: "IT Services",
    title1: "Deliver Industry-Leading IT Services",
    text: "Strategically address risks while unlocking the full potential of Big Data for the IT services sector with our custom software solutions",
  },
  {
    id: 4,
    bg: dashboardbg4,
    subtitle: "Infrastructure Services",
    title1: "Robust Enterprise-Grade Network Solutions",
    text: "Ensure seamless operations with 24/7 monitoring, management, and implementation of critical infrastructure.",
  },
];

export default function HeroSection({ scrollToAbout }) {
  useEffect(() => {
    preloadImages([dashboardbg1, dashboardbg2, dashboardbg3, dashboardbg4]);
  }, []);

  return (
    <div className="th-hero-wrapper hero-2" id="hero">
      <div className="slider-area">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ prevEl: ".slider-prev", nextEl: ".slider-next" }}
          slidesPerView={1}
          loop={true}
          speed={1200}
          className="swiper hero-slider-2"
        >
          {slides.map(({ id, bg, subtitle, title1, title2, text }) => (
            <SwiperSlide key={id}>
              <div className="th-hero-slide">
                <div
                  className="th-hero-bg"
                  style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "1000px",
                  }}
                />
                <div className="container">
                  <motion.div
                    className="hero-style2"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <span className="hero-subtitle">{subtitle}</span>
                    <h1 className="hero-title">{title1}</h1>
                    {title2 && <h1 className="hero-title">{title2}</h1>}
                    <p className="hero-text">{text}</p>
                    <div className="btn-group">
                      <button onClick={scrollToAbout} className="th-btn style3">
                        DISCOVER MORE{" "}
                        <i className="fa-regular fa-arrow-right ms-2" />
                      </button>
                      <Link to="/contactUs" className="th-btn style2">
                        CONTACT US{" "}
                        <i className="fa-regular fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </motion.div>
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

      <div className="hero-shape1" />
      <div className="hero-shape2">
        <img src={hero_shape_2_2} alt="shape" loading="lazy" />
      </div>
      <div className="hero-shape3">
        <img src={hero_shape_2_3} alt="shape" loading="lazy" />
      </div>
    </div>
  );
}
