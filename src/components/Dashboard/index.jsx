import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

import heroImg1 from "../../assets/img/hero/hero_img_11_1.jpg";
import heroImg2 from "../../assets/img/hero/hero_img_11_2.jpg";
import heroImg3 from "../../assets/img/hero/hero_img_11_3.jpg";
import hero_bg_1 from "../../assets/img/bg/hero_bg_1.png";

// Slide data configuration for hero section
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
    // Main hero wrapper with background image
    <div
      className="th-hero-wrapper hero-12"
      id="hero"
      style={{
        backgroundImage: `url(${hero_bg_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", // Added for proper stacking context
        overflow: "hidden", // Prevents content overflow during transitions
      }}
    >
      {/* Swiper configuration with improved fade effect */}
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={1000} // Smooth transition speed
        fadeEffect={{ crossFade: true }} // Improved fade effect
        className="swiper th-slider"
        style={{ position: "relative", zIndex: 1 }} // Base layer z-index
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} style={{ position: "relative" }}>
            <div
              className="hero-inner"
              style={{ position: "relative", zIndex: 2 }}
            >
              <div className="container th-container4">
                <div
                  className="row align-items-center"
                  style={{ minHeight: "80vh" }}
                >
                  {/* Left side content */}
                  <div className="col-lg-6 col-md-12">
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

                  {/* Right side image */}
                  <div className="col-lg-6 col-md-12">
                    <div className="th-hero-img">
                      <img
                        src={slide.img}
                        alt="Hero"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom section with highest z-index to stay on top */}
      <div
        className="container th-container4"
        style={{ position: "relative", zIndex: 3 }}
      >
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
