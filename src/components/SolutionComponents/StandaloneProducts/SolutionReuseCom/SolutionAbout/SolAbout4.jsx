import React from "react";
import { Link } from "react-router-dom";

const SolAbout4 = ({ aboutData, nospace }) => {
  return (
    <div>
      <div
        className="container th-container4"
        style={{ marginTop: !nospace && "-120px" }}
      >
        {aboutData.map((item) => (
          <div
            className="row justify-content-between align-items-center flex-row-reverse"
            key={item.id}
          >
            <div className="col-xl-5">
              <div className="space">
                <div className="title-area mb-40 pe-xl-3">
                  <span className="sub-title">{item.title}</span>
                  <h2 className="sec-title">
                    {item.secTitle.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-theme">
                      {item.secTitle.split(" ").slice(-1)}
                    </span>
                  </h2>
                  <p>{item.description}</p>
                </div>
                <div className="two-column style2 justify-content-between mb-50 list-center ms-0">
                  {item.checklist.map((list, i) => (
                    <div className="checklist style9" key={i}>
                      <ul>
                        {list.map((point, idx) => (
                          <li key={idx}>
                            <i className="fa-solid fa-badge-check" /> {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="btn-wrap">
                  <Link to={"/contactUs"} className="th-btn style-radius">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="img-box15 mb-xl-0 mt-xl-0 mt-n4">
                <div className="img1">
                  <img
                    src={item.images[0]}
                    alt="About 1"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "600.99px",
                      height: "430.99px",
                    }}
                  />
                </div>
                <div className="img2">
                  <img
                    src={item.images[1]}
                    alt="About 2"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "270px",
                      height: "205px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="img3">
                  <img
                    src={item.images[2]}
                    alt="About 3"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "185px",
                      height: "145px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="about-shape15" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolAbout4;
