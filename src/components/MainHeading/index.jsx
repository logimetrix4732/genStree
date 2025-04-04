import React from "react";
import { Link } from "react-router-dom";
import breadcumbbg from "../../assets/img/bg/breadcumb-bg.jpg";
import title_shape_2_white from "../../assets/img/theme-img/title_shape_2_white.svg";

const MainHeading = ({ title, subtitle, breadcrumbs, marginBottom = 0 }) => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: `url(${breadcumbbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: marginBottom,
      }}
    >
      <div className="container">
        <div className="breadcumb-content text-center">
          <div className="title-area mb-35">
            <div className="shadow-title">{title}</div>
            <span className="sub-title" style={{ color: "white" }}>
              <div className="icon-masking me-2">
                <img src={title_shape_2_white} alt="shape" loading="lazy" />
              </div>
              {subtitle}
            </span>
          </div>
          <ul className="breadcumb-menu">
            {breadcrumbs.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainHeading;
