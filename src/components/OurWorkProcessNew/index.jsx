import React from "react";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
import blog_12_3 from "../../assets/img/blog/blog_12_3.jpg";
import blog_12_1 from "../../assets/img/blog/blog_12_1.jpg";
import blog_1_2 from "../../assets/img/blog/blog_1_2.jpg";
const OurWorkProcessNew = () => {
  return (
    <section className="overflow-hidden space" id="blog-sec">
      <div className="container th-container4">
        <div className="title-area flex flex-col items-center text-center">
          <div className="shadow-title">PROCESS</div>
          <span className="sub-title flex items-center justify-center">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" />
            </div>
            PROCESS
          </span>
          <h2 className="sec-title">
            Our Work Process
            <span className="text-theme"> IT Solution</span>
          </h2>
        </div>
        <div className="row gx-30 gy-30">
          <div className="col-xl-6">
            <div className="blog-grid">
              <div className="blog-img">
                <img src={blog_12_3} alt="blog image" loading="lazy" />
              </div>
              <div className="blog-content">
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Many of those products offer the potential...
                  </a>
                </h3>
                <p className="blog-text">
                  Praesent tempor mollis aliquet rhoncus vestibulum ridiculus
                  vivamus, donec ac vehicula interdum congue scelerisque duis
                  lacinia, conubia egestas...
                </p>
                <a href="blog-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
                <hr className="blog-line" />
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="far fa-calendar" />
                    25 Feb , 2024
                  </a>
                  <a className="author" href="blog.html">
                    <i className="far fa-user" />
                    By Logimetrix
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="blog-grid style2">
              <div className="blog-img">
                <img src={blog_12_1} alt="blog image" loading="lazy" />
              </div>
              <div className="blog-content">
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Logimetrix Wins Award for Excellence in Cloud Migration
                    Services
                  </a>
                </h3>
                <a href="blog-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
                <hr className="blog-line" />
                <div className="blog-meta">
                  <a className="author" href="blog.html">
                    <i className="far fa-user" />
                    By Logimetrix
                  </a>
                  <a href="blog.html">
                    <i className="far fa-calendar" />
                    20 Apr 2024
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-grid style2 mt-30">
              <div className="blog-img">
                <img src={blog_1_2} alt="blog image" loading="lazy" />
              </div>
              <div className="blog-content">
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Logimetrix Announces Partnership with Leading Technology
                    Company
                  </a>
                </h3>
                <a href="blog-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
                <hr className="blog-line" />
                <div className="blog-meta">
                  <a className="author" href="blog.html">
                    <i className="far fa-user" />
                    By Logimetrix
                  </a>
                  <a href="blog.html">
                    <i className="far fa-calendar" />
                    20 Apr 2024
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

export default OurWorkProcessNew;
