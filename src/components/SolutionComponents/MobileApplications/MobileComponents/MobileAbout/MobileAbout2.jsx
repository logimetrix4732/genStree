import React from "react";
import download82 from "../../../../../assets/img/normal/download-8-2.png";
import download821 from "../../../../../assets/img/normal/download-8-2.1.png";
import { Link } from "react-router-dom";
const sections = [
  {
    image1: download82,
    image2: download821,
    subtitle: "Easy User Experience",
    title: "Better cash control with",
    highlight: "logimetrix Flow",
    description: [
      "Provide a brief overview of the app's purpose and key features.",
      "Use concise descriptions or bullet points to emphasize what sets your app apart from others in the market.",
    ],
    primaryButton: {
      text: "Explore More",
      link: "/contactUs",
    },
    secondaryButton: {
      text: "Download app",
      link: "/contactUs",
    },
  },
];
const MobileAbout2 = () => {
  return (
    <section className="space-bottom">
      <div className="container th-container4">
        {sections.map((section, index) => (
          <div className="row gy-40 align-items-center" key={index}>
            <div className="col-lg-6">
              <div className="img-box12">
                <div className="img1">
                  <img src={section.image1} alt="img" loading="lazy" />
                </div>
                <div className="img2 jump">
                  <img src={section.image2} alt="img" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area mb-40">
                <span className="sub-title">{section.subtitle}</span>
                <h2 className="sec-title">
                  {section.title} <br className="d-xl-block d-none" />
                  <span className="text-theme">{section.highlight}</span>
                </h2>
                {section.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <div className="btn-wrap">
                <Link
                  to={`/${section.primaryButton.link}`}
                  className="th-btn style-radius"
                >
                  {section.primaryButton.text}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileAbout2;
