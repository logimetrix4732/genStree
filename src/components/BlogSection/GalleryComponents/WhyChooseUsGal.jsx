import React from "react";
import shan14 from "../../../Imges/GalleryImg/shan14.png";

const WhyChooseUsGal = () => {
  return (
    <div className="why-sec-v5 overflow-hidden py-5">
      <div className="container th-container4">
        <div className="row align-items-center justify-content-between">
          {/* Left Content */}
          <div className="col-lg-4 text-lg-start text-center mb-4 mb-lg-0">
            <div className="title-area">
              <span className="sub-title text-primary fw-bold">
                Why Choose Us
              </span>
              <h3 className="sec-title fw-bold text-dark mt-2">
                Innovation & Excellence for Your Success
              </h3>
              <p className="text-muted mt-3">
                At <b>GenStree</b>, we are committed to helping businesses grow
                through cutting-edge technology and seamless digital
                transformation. Our team specializes in providing customized
                solutions that enhance operational efficiency, improve
                collaboration, and drive measurable success.
              </p>
              <p className="text-muted mt-3">
                With years of expertise in technology-driven innovations, we
                understand the challenges businesses face in today's fast-paced
                digital world. Our solutions are designed to streamline
                processes, enhance productivity, and ensure a competitive edge.
                From automation to data-driven insights, we bring the tools that
                empower organizations to scale and succeed.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-8 text-center">
            <div className="gallery-box d-flex flex-wrap justify-content-center gap-3">
              <img
                src={shan14}
                alt="Gallery"
                loading="lazy"
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsGal;
