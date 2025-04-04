import React from "react";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";

const AbsoluteStudyPage = () => {
  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(${breadcumbbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Absolute Study</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Absolute Study</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-bottom" id="about-sec">
        <div className="container th-container4">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="img-box14">
                <div className="img1">
                  <img
                    src="assets/img/normal/about_12_1.jpg"
                    alt="About"
                    loading="lazy"
                  />
                </div>
                <div className="img2">
                  <img
                    src="assets/img/normal/about_12_3.jpg"
                    alt="About"
                    loading="lazy"
                  />
                </div>
                <div className="img3">
                  <img
                    src="assets/img/normal/about_12_2.jpg"
                    alt="About"
                    loading="lazy"
                  />
                </div>
                <div className="shape1">
                  <img
                    src="assets/img/normal/about_12_shape.png"
                    alt="About"
                    loading="lazy"
                  />
                </div>
                <div className="shape2">
                  <img
                    src="assets/img/normal/about_12_1_shape.png"
                    alt="About"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="title-area mb-35">
                <span className="sub-title sub-title3 style1">Who We Are</span>
                <h2 className="sec-title">
                  We’re Building Modern And Hight Quality
                  <span className="text-theme">Software</span>
                </h2>
              </div>
              <p className="mt-n2 mb-25">
                IT companies stay abreast of emerging technologies and industry
                trends to remain competitive and provide innovative solutions to
                their clients. This includes trends such as artificial
                intelligence, machine learning, Internet of Things (IoT),
                blockchain, edge computing, and 5G networks.
              </p>
              <h6 className="text-theme fw-semibold mb-30">
                We are making every business grow!
              </h6>
              <div className="checklist style8 mb-40">
                <ul>
                  <li>
                    <i className="fa-light fa-square-check" />
                    Super user and easy to use interface
                  </li>
                  <li>
                    <i className="fa-light fa-square-check" />
                    Easiest way to grow your business in days
                  </li>
                </ul>
              </div>
              <div className="btn-group">
                <a
                  href="https://www.youtube.com/@logimetrixtechsolutions4572"
                  className="th-btn popup-video style-radius fs-16 text-capitalize"
                >
                  <i className="fa-solid fa-circle-play me-2" />
                  View Demo
                </a>
                <a
                  href="/contactUs"
                  className="th-btn style10 fs-16 text-capitalize"
                >
                  Try for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteStudyPage;
