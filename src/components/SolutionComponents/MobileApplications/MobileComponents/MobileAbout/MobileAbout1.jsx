import React from "react";
import download81 from "../../../../../assets/img/normal/download-8-1.png";
import download811 from "../../../../../assets/img/normal/download-8-1.1.png";
import { Link } from "react-router-dom";

const aboutData = {
  subtitle: "Made Easy Way",
  title: "Keep track of your expenses by the app",
  description:
    "Incorporate visually appealing elements such as high-quality images, videos, or graphics that resonate with the target audience and complement the overall design of the page. Ensure that the landing page is optimized for various devices.",
  checklist: [
    {
      title: "Customizable App",
      description:
        "Ensure that the landing page is optimized for various devices.",
    },
    {
      title: "Statistic Retroactively",
      description:
        "Ensure that the landing page is optimized for various devices.",
    },
  ],
  buttons: [
    {
      // text: "Get Started For Free 14 Days",
      text: "Explore More",
      link: "/contactUs",
      style: "th-btn style-radius",
    },
    // {
    //   text: "Download app",
    //   link: "contact.html",
    //   style: "th-btn style-border2 style-radius",
    //   icon: "far fa-cloud-arrow-down me-2",
    // },
  ],
  images: [download81, download811],
};

const MobileAbout1 = () => {
  return (
    <section className="space">
      <div className="container th-container4">
        <div className="row gy-40 align-items-center flex-row-reverse">
          <div className="col-lg-6 text-lg-end">
            <div className="img-box11">
              <div className="img1">
                <img src={aboutData.images[0]} alt="img" loading="lazy" />
              </div>
              <div className="img2 jump">
                <img src={aboutData.images[1]} alt="img" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-area">
              <span className="sub-title">{aboutData.subtitle}</span>
              <h2 className="sec-title">{aboutData.title}</h2>
              <p>{aboutData.description}</p>
              <div className="two-column mb-50 mt-30">
                {aboutData.checklist.map((item, index) => (
                  <div className="checklist style6" key={index}>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        <div className="details">
                          <h6>{item.title}</h6>
                          <p className="mb-n2">{item.description}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-wrap">
              {aboutData.buttons.map((button, index) => (
                <Link to={"/contactUs"} className={button.style} key={index}>
                  {button.icon && <i className={button.icon} />} {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAbout1;
