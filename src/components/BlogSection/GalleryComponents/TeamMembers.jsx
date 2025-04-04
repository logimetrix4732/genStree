import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import team_bg_5 from "../../../assets/img/bg/team_bg_5.jpg";
import vivek from "../../../Imges/vivek.jpg";
import amankr from "../../../Imges/amankr.jpg";
import vishal from "../../../Imges/vishal.jpg";
import sumit from "../../../Imges/sumit.jpg";
import ajay from "../../../Imges/ajay.jpg";
import deepak from "../../../Imges/deepak.jpg";
import harsh from "../../../Imges/harsh.jpg";
import infraemp from "../../../Imges/infraemp.jpg";
import amansingh from "../../../Imges/amansingh.jpg";
import hr from "../../../Imges/hr.jpg";
import Anoop from "../../../Imges/Anoop.jpg";
import { Link } from "react-router-dom";

const teamMembers = [
  { img: hr, name: "Astha Shukla", role: "HR" },
  { img: vivek, name: "Vivek Kumar Shukla", role: "Senior PHP Developer" },
  { img: amankr, name: "Aman Kumar", role: "Senior Backend Developer" },
  { img: amansingh, name: "Aman Singh", role: "Senior Frontend Developer" },
  { img: sumit, name: "Sumit Verma", role: "Senior Frontend Developer" },
  { img: vishal, name: "Vishal Lengare", role: "Angular Developer" },
  { img: ajay, name: "Ajay Pathak ", role: "PHP Developer" },
  { img: deepak, name: "Deepak Sahu", role: "PHP Developer" },
  { img: harsh, name: "Harsh Gupta", role: "Android Developer" },
  { img: infraemp, name: "Saroj Singh", role: "Project Coordinator" },
  { img: Anoop, name: "Anoop Chaudhary", role: "PHP Developer" },
];

const TeamMembers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section
        className="overflow-hidden bg-top-center th-radius3 m-4 mt-0 mb-0 space position-relative space-bottom"
        id="testi-sec"
      >
        <div
          className="position-absolute top-0 start-0 w-100"
          style={{
            backgroundImage: `url(${team_bg_5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "515px",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem",
          }}
        ></div>
        <div className="container th-container4">
          <div className="title-area text-center">
            <span className="sub-title sub-title3">Team Members</span>
            <h2 className="sec-title text-white">Meet Our Dedicated Team</h2>
          </div>
          <div className="slider-area">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="team-slider"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="th-team team-card3 style2">
                    <div className="team-img" style={{ flexShrink: 0 }}>
                      <img
                        src={member.img}
                        alt="Team"
                        loading="lazy"
                        style={{
                          objectFit: "cover",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "300px",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </div>
                    <div
                      className="box-content"
                      style={{ padding: "15px", textAlign: "center" }}
                    >
                      <div
                        className="social-links"
                        style={{ marginBottom: "10px" }}
                      >
                        <a target="_blank" href="https://linkedin.com/">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </div>

                      <div className="media-body">
                        <h3
                          className="box-title"
                          style={{ marginBottom: "5px" }}
                        >
                          <Link to="/contactUs">{member.name}</Link>
                        </h3>
                        <span className="team-desig">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button ref={prevRef} className="slider-arrow style3 slider-prev">
              <i className="far fa-arrow-left" />
            </button>
            <button ref={nextRef} className="slider-arrow style3 slider-next">
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
