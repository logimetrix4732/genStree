import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import project_4_1 from "../../../assets/img/project/project_4_1.jpg";
import project_4_2 from "../../../assets/img/project/project_4_2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const projects = [
  {
    img: project_4_1,
    title: "Technology Growth",
    tags: ["Marketing", "Service", "Solution"],
  },
  {
    img: project_4_2,
    title: "IT Consultancy",
    tags: ["Marketing", "Service", "Solution"],
  },
  {
    img: project_4_1,
    title: "Technology Growth",
    tags: ["Marketing", "Service", "Solution"],
  },
  {
    img: project_4_2,
    title: "IT Consultancy",
    tags: ["Marketing", "Service", "Solution"],
  },
];

const Ourworkthatinspired = () => {
  return (
    <section className="overflow-hidden bg-white space" id="project-sec">
      <div className="container th-container5">
        <div className="row">
          <div className="col-xl-4">
            <div className="title-area mb-50 text-center text-md-start">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" loading="lazy" />
                </div>
                Success Stories
              </span>
              <h2 className="sec-title">
                Our work that inspired you to work with us
              </h2>
            </div>
            <div className="project-btn">
              <Link
                to="/contactUs"
                className="th-btn style-border style-radius"
              >
                View All Stories
              </Link>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="slider-area project-slider4">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                spaceBetween={30}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 2 },
                }}
                className="swiper th-slider has-shadow"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-box4">
                      <div className="project-img">
                        <img src={project.img} alt="project" loading="lazy" />
                      </div>
                      <div className="project-content">
                        <div className="media-body">
                          <h3 className="box-title">
                            <Link to="/contactUs">{project.title}</Link>
                          </h3>
                          <div className="project-tags">
                            {project.tags.map((tag, idx) => (
                              <Link key={idx} to="/contactUs">
                                {tag}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourworkthatinspired;
