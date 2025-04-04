import React from "react";
import faq_bg_2 from "../../../../../assets/img/bg/faq_bg_2.jpg";
import faq_shape_1 from "../../../../../assets/img/bg/faq_shape_1.jpg";

const TalkToAbout3 = ({ TalkToAbout3Array }) => {
  const marqueeItems = [
    "15M Customer Worldwide",
    "50+ Countries",
    "4000+ Partners",
    "Creative Innovation",
    "Engagement",
    "Ethical Practices",
    "Communication",
    "Personalization",
    "Expertise",
    "Inclusivity",
    "Diversity",
  ];

  return (
    <div
      className="bg-smoke position-relative z-index-3 overflow-hidden space"
      id="faq-sec"
      style={{
        backgroundImage: `url(${faq_bg_2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6">
            <div className="title-area style2">
              <span className="sub-title sub-title4 style1">FAQs</span>
              <h2 className="sec-title">Frequently Asked Questions</h2>
            </div>
            <div className="accordion" id="faqAccordion">
              {TalkToAbout3Array.map((faq, index) => (
                <div key={index} className="accordion-card style5">
                  <div
                    className="accordion-header"
                    id={`collapse-item-${index}`}
                  >
                    <button
                      className={`accordion-button ${
                        index === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse-${index}`}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse-${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`collapse-item-${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-6">
            <div className="marquee-wrapper style2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`marquee ${i % 2 ? "marquee--reverse" : ""}`}
                >
                  <div className="marquee-group">
                    {marqueeItems.map((text, idx) => (
                      <div key={idx} className="text">
                        {text}
                      </div>
                    ))}
                  </div>
                  <div aria-hidden="true" className="marquee-group">
                    {marqueeItems.map((text, idx) => (
                      <div key={idx} className="text">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="shape-mockup"
          data-top="0%"
          data-right="0%"
          style={{ position: "absolute", top: "0%", right: "0%" }}
        >
          <img
            className="faq-img6"
            loading="lazy"
            src={faq_shape_1}
            alt="shape"
            style={{
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TalkToAbout3;
