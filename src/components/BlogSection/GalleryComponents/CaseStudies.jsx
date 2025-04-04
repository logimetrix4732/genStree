import React from "react";
import project_8_1 from "../../../assets/img/project/project_8_1.jpg";
import project_8_2 from "../../../assets/img/project/project_8_2.jpg";
import project_8_3 from "../../../assets/img/project/project_8_3.jpg";
import project_8_4 from "../../../assets/img/project/project_8_4.jpg";
import project_8_5 from "../../../assets/img/project/project_8_5.jpg";
import project_8_6 from "../../../assets/img/project/project_8_6.jpg";
import { Link } from "react-router-dom";
import shan7 from "../../../Imges/GalleryImg/shan7.png";
import shan8 from "../../../Imges/GalleryImg/shan8.png";
import shan12 from "../../../Imges/GalleryImg/shan12.png";
import shan13 from "../../../Imges/GalleryImg/shan13.png";
import shan3 from "../../../Imges/GalleryImg/shan3.png";
import vipul from "../../../Imges/GalleryImg/vipul.png";
const CaseStudies = () => {
  return (
    <section className="overflow-hidden space" id="project-sec">
      <div className="container th-container4">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title sub-title3 style1">Gallery</span>
              <h2 className="sec-title">Explore Our Latest Moments</h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <Link
                to="/Gallery"
                className="th-btn style-radius text-capitalize"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
        <div className="row gy-4 filter-active">
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img
                  src={shan8}
                  alt="project image"
                  loading="lazy"
                  style={{
                    width: "327px",
                    height: "438px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img
                  src={shan3}
                  alt="project image"
                  loading="lazy"
                  style={{
                    width: "678px",
                    height: "438px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img
                  src={vipul}
                  alt="project image"
                  loading="lazy"
                  style={{
                    width: "327px",
                    height: "438px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img
                  src={shan7}
                  alt="project image"
                  loading="lazy"
                  style={{
                    width: "444px",
                    height: "394px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img
                  src={shan13}
                  alt="project image"
                  loading="lazy"
                  style={{
                    width: "444px",
                    height: "394px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img
                  src={shan12}
                  alt="project image"
                  loading="lazy"
                  style={{
                    width: "444px",
                    height: "394px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
