import React from "react";

const TalkToAbout5 = ({ TalkToAbout5Array }) => {
  return (
    <div
      className="position-relative z-index-3 overflow-hidden space"
      id="faq-sec"
    >
      <div className="container th-container4">
        <div className="row gy-5">
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title sub-title5">
                {TalkToAbout5Array.subtitle}
              </span>
              <h2 className="sec-title">
                {TalkToAbout5Array.title}{" "}
                <span className="text-theme fw-normal">
                  {TalkToAbout5Array.highlight}
                </span>
              </h2>
            </div>
            <div className="accordion-area style5 accordion" id="faqAccordion">
              {TalkToAbout5Array.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion-card style11 ${
                    faq.defaultOpen ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    id={`collapse-item-${index}`}
                  >
                    <button
                      className={`accordion-button ${
                        faq.defaultOpen ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}`}
                      aria-expanded={faq.defaultOpen ? "true" : "false"}
                      aria-controls={`collapse-${index}`}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse-${index}`}
                    className={`accordion-collapse collapse ${
                      faq.defaultOpen ? "show" : ""
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
            <div className="faq-image11">
              <img
                src={TalkToAbout5Array.image}
                alt="FAQ"
                loading="lazy"
                style={{
                  // transform: "scaleX(-1)",
                  borderRadius: "10px",
                  objectFit: "cover",
                  height: "560px",
                  width: "703px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToAbout5;
