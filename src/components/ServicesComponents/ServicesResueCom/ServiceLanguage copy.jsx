import React from "react";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import process_line_2 from "../../../assets/img/bg/process_line_2.svg";

const ServiceLanguage = ({ languages }) => {
  return (
    <section
      style={{ background: "#ffffff", padding: "50px 0" }}
      id="process-sec"
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{ fontSize: "60px", fontWeight: "bold", color: "#f1f1f1" }}
          >
            PROCESS
          </div>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
              color: "#555",
            }}
          >
            <img
              src={title_shape_2}
              alt="shape"
              loading="lazy"
              style={{ marginRight: "10px" }}
            />
            WORK PROCESS
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#222" }}>
            How to work <span style={{ color: "#ff5722" }}>it!</span>
          </h2>
        </div>

        <div style={{ position: "relative", textAlign: "center" }}>
          {/* Process Line */}
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            <img
              src={process_line_2}
              alt="line"
              style={{ width: "90%" }}
              loading="lazy"
            />
          </div>

          <div
            className="row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {languages.map((lang, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                {/* Dots Above Cards */}
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#007bff",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                ></div>

                {/* Cards */}
                <div
                  style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <img
                      src={lang.img}
                      alt={lang.name}
                      loading="lazy"
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                  <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {lang.name}
                  </h2>
                  <p style={{ fontSize: "14px", color: "#666" }}>{lang.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLanguage;
