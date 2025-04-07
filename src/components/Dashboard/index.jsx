import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

import heroImg1 from "../../assets/img/hero/hero_img_11_1.jpg";
import heroImg2 from "../../assets/img/hero/hero_img_11_2.jpg";
import heroImg3 from "../../assets/img/hero/hero_img_11_3.jpg";
import hero_bg_1 from "../../assets/img/bg/hero_bg_1.png";

const slideData = [
  {
    title: "Tech Made Simple",
    highlight: "Solutions,",
    subtitle: "Made Powerful",
    img: heroImg1,
  },
  {
    title: "Perfect IT",
    highlight: "Solutions",
    subtitle: "For Your Business",
    img: heroImg2,
  },
  {
    title: "Crafting Secure and Innovative IT",
    highlight: "Solutions",
    subtitle: "",
    img: heroImg3,
  },
];

export default function HeroSlider12() {
  return (
    <div
      className="th-hero-wrapper hero-12"
      id="hero"
      style={{
        backgroundImage: `url(${hero_bg_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="swiper th-slider"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-inner">
              <div className="container th-container4">
                <div className="hero-style12">
                  <h1 className="hero-title">
                    {slide.title}{" "}
                    <span className="text-theme fw-normal">
                      {slide.highlight}
                    </span>{" "}
                    {slide.subtitle}
                  </h1>

                  <div className="btn-group">
                    <Link
                      to="/about"
                      className="th-btn style3 style-radius text-capitalize"
                    >
                      Get In Touch
                    </Link>
                    <Link
                      to="/contact"
                      className="th-btn blue-border style-radius text-capitalize"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="th-hero-img">
              <img src={slide.img} alt="Hero" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container th-container4">
        <div className="row">
          <div className="col-12">
            <div className="hero-watch-area">
              <div className="btn-group justify-content-center justify-content-md-between">
                <div className="call-btn hero-btn">
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-play" />
                  </a>
                  <div className="media-body">
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="btn-title popup-video"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Empowering Tech Innovators with Next-Gen IT Solutions
                    </a>
                  </div>
                </div>
                <Link
                  to="/about"
                  className="th-btn style5 style-radius text-capitalize"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
