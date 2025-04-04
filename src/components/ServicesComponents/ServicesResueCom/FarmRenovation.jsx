import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import { Link } from "react-router-dom";

const FarmRenovation = ({ projects, space }) => {
  useEffect(() => {
    new Swiper("#projectSlider2", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
    });
  }, []);

  return (
    <section className={space ? "" : "space"} id="project-sec">
      <div className="container">
        <div className="title-area text-center mb-5">
          <div className="shadow-title">PROJECTS</div>
          <span className="sub-title d-flex align-items-center justify-content-center mb-3">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" loading="lazy" />
            </div>
            LATEST PROJECTS
          </span>
          <h2 className="sec-title">
            Farm Renovation <span className="text-theme">Highlights</span>
          </h2>
        </div>

        <div className="slider-area">
          <div className="swiper th-slider has-shadow" id="projectSlider2">
            <div className="swiper-wrapper">
              {projects.map((project, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="project-grid p-3">
                    <div className="project-grid_img">
                      <img
                        src={project.img}
                        alt="project image"
                        loading="lazy"
                        className="img-fluid"
                        style={{ height: "300px" }}
                      />
                    </div>
                    <div className="project-grid_content">
                      <h3 className="box-title">
                        <Link to="/contactUs">{project.title}</Link>
                      </h3>
                      <p className="project-grid_text text-muted">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmRenovation;
