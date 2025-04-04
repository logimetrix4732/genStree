import React from "react";
import download_bg_83 from "../../../../../assets/img/bg/download_bg_8-3.png";
import playstorebtn from "../../../../../assets/img/theme-img/play-store-btn.png";
import applebtn from "../../../../../assets/img/theme-img/apple-btn.png";
import { Link } from "react-router-dom";

const MobileAbout3 = ({ aboutData }) => {
  return (
    <div
      className="about-sec-8 overflow-hidden th-radius3"
      style={{
        backgroundImage: `url(${download_bg_83})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container th-container4">
        {aboutData.map((item) => (
          <div className="row justify-content-between" key={item.id}>
            <div className="col-xl-6">
              <div className="space">
                <div className="title-area mb-30">
                  <span className="sub-title">{item.title}</span>
                  <h2 className="sec-title mb-4">{item.heading}</h2>
                  <p>{item.description1}</p>
                  <p>{item.description2}</p>
                </div>
                <div className="btn-group mt-30">
                  <Link
                    to={item.playStoreLink}
                    className="th-btn style7 style-radius"
                  >
                    <img src={playstorebtn} alt="Play Store" loading="lazy" />
                  </Link>
                  <Link
                    to={item.appleStoreLink}
                    className="th-btn style7 style-radius"
                  >
                    <img src={applebtn} alt="App Store" loading="lazy" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 align-self-end">
              <div className="thumb text-center mt-xl-0 mt-n5">
                <div className="img1">
                  <img src={item.image} alt="About" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAbout3;
