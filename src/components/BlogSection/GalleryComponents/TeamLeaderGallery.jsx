import React from "react";
import project_11_4 from "../../../assets/img/project/project_11_4.jpg";
import shan from "../../../Imges/GalleryImg/shan.png";
import photo21 from "../../../Imges/GalleryImg/photo21.jpeg";
import photo22 from "../../../Imges/GalleryImg/photo23.jpeg";
import { Link } from "react-router-dom";
import TeamLead from "../../../Imges/GalleryImg/TeamLead.jpeg";
const TeamLeaderGallery = () => {
  return (
    <section className="overflow-hidden space-bottom" id="project-sec">
      <div className="container th-container4">
        <div className="title-area text-center">
          <span className="sub-title sub-title5">Our Gallery</span>
          <h2 className="sec-title">Explore Our Visual Journey</h2>
        </div>

        <div className="row d-flex">
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card style3">
              <div className="project-img">
                <img
                  src={photo21}
                  alt="project image"
                  loading="lazy"
                  style={{
                    width: "678px",
                    height: "682px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="project-content-wrap">
                <div className="project-content">
                  <p className="project-subtitle">Founder</p>
                  <h3 className="box-title">
                    <a href="/contactus"> Shantanu Kumar</a>
                  </h3>
                </div>
              </div>
              <a
                href={photo21}
                className="icon-btn popup-image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xxl filter-item">
            <div className="row gy-4">
              <div className="col-md-12">
                <div className="project-card style3">
                  <div className="project-img">
                    <img src={shan} alt="project image" loading="lazy" />
                  </div>
                  <div className="project-content-wrap">
                    <div className="project-content">
                      <p className="project-subtitle">Jammu</p>
                      <h3 className="box-title">
                        <Link to="/JammuSmartCityProject">
                          Smart City Initiative
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <a
                    href={shan}
                    className="icon-btn popup-image"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-card style3">
                  <div className="project-img">
                    <img
                      src={photo22}
                      alt="project image"
                      loading="lazy"
                      style={{
                        width: "327px",
                        height: "278px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="project-content-wrap">
                    <div className="project-content">
                      <p className="project-subtitle">CEO</p>
                      <h3 className="box-title">
                        <a
                          href="/contactus"
                          style={{ textTransform: "uppercase" }}
                        >
                          Vipul Rai
                        </a>
                      </h3>
                    </div>
                  </div>
                  <a
                    href={photo22}
                    className="icon-btn popup-image"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-card style3">
                  <div className="project-img">
                    <img src={TeamLead} alt="gallery image" loading="lazy" />
                  </div>
                  <div className="project-content-wrap">
                    <div className="project-content">
                      <p className="project-subtitle">NDS Meeting</p>
                      <h3 className="box-title">
                        <a href="/contactus">Cropnet</a>
                      </h3>
                    </div>
                  </div>
                  <a
                    href={TeamLead}
                    className="icon-btn popup-image"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLeaderGallery;
