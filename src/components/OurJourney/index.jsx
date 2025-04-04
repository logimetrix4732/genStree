import React, { useEffect, useState } from "react";
import "./OurJourney.css";

const timelineData = [
  {
    year: "2012",
    title: "Foundation Year",
    descr: "Company started its journey with a small team and big dreams.",
    color: "#41516C",
  },
  {
    year: "2013",
    title: "First Milestone",
    descr: "Achieved first major client project and expanded the team.",
    color: "#4CADAD",
  },
  {
    year: "2014",
    title: "Growth Phase",
    descr: "Expanded into new markets and added innovative solutions.",
    color: "#E24A68",
  },
  {
    year: "2015",
    title: "Technology Upgrade",
    descr: "Adopted new technologies to improve efficiency and scalability.",
    color: "#1B5F8C",
  },
  {
    year: "2016",
    title: "Recognition",
    descr: "Received industry recognition for outstanding performance.",
    color: "#FBCA3E",
  },
  {
    year: "2017",
    title: "New Office",
    descr: "Opened a new headquarters to accommodate growing operations.",
    color: "#41516C",
  },
  {
    year: "2018",
    title: "Product Launch",
    descr: "Introduced our first in-house product to the market.",
    color: "#4CADAD",
  },
  {
    year: "2019",
    title: "Global Expansion",
    descr: "Started serving international clients across multiple continents.",
    color: "#E24A68",
  },
  {
    year: "2020",
    title: "Surviving the Pandemic",
    descr: "Adapted to remote work and continued delivering excellent service.",
    color: "#1B5F8C",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    descr: "Implemented AI & automation for better service delivery.",
    color: "#FBCA3E",
  },
  {
    year: "2022",
    title: "Industry Leader",
    descr: "Recognized as a top performer in the industry.",
    color: "#41516C",
  },
  {
    year: "2023",
    title: "Sustainability Focus",
    descr: "Initiated eco-friendly practices in company operations.",
    color: "#4CADAD",
  },
  {
    year: "2024",
    title: "AI & Innovation",
    descr: "Launched AI-powered solutions for smarter business processes.",
    color: "#E24A68",
  },
  {
    year: "2025",
    title: "Future Vision",
    descr: "Planning for new innovations and future expansion.",
    color: "#1B5F8C",
  },
];

const Timeline = () => {
  const [activeYear, setActiveYear] = useState("2012");

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport as root
      rootMargin: "0px",
      threshold: 0.5, // 50% visible hone par trigger hoga
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveYear(entry.target.dataset.year);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll(".timeline-list-item");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleYearClick = (year, color) => {
    setActiveYear(year);
    document.documentElement.style.setProperty("--active-year-color", color);

    const section = document.getElementById(`year-${year}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="timeline-wrapper space-bottom">
      <h1 className="timeline-heading"></h1>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="title-area text-center">
            <div className="title-area mb-35 text-center">
              <div className="shadow-title">Our Journey</div>
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <img
                    src="assets/img/theme-img/title_shape_2.svg"
                    alt="shape"
                    loading="lazy"
                  />
                </div>
                Our Journey
              </span>
              <h2 className="sec-title">
                Embracing Growth
                <span className="text-theme"> Through.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flexYear">
        <ul className="timeline-list">
          {timelineData.map((item, index) => (
            <li
              key={index}
              id={`year-${item.year}`}
              data-year={item.year}
              className={`timeline-list-item ${activeYear === item.year ? "highlight" : ""}`}
              style={{ "--accent-color": item.color }}
            >
              <div className="timeline-date">{item.year}</div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-description">{item.descr}</div>
            </li>
          ))}
        </ul>
        <div className="timeline-container">
          {timelineData.map((item) => (
            <div
              key={item.year}
              className={`year-item ${activeYear === item.year ? "active-year" : ""}`}
              onClick={() => handleYearClick(item.year, item.color)}
              style={
                activeYear === item.year
                  ? { backgroundColor: item.color, color: "#fff" }
                  : {}
              }
            >
              {item.year}
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
    @media (max-width: 768px) {
      .year-item {
        display: none;
      }
    }
  `}
      </style>
    </div>
  );
};

export default Timeline;
