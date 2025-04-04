import React from "react";

// import faq_7_1 from "../../../../../assets/img/normal/faq_7_1.jpg";
import faq_7_1 from "../../../../../assets/img/normal/logbookBg.png";
import faq_7_2 from "../../../../../assets/img/normal/logbook.png";
// import faq_7_2 from "../../../../../assets/img/normal/faq_7_2.jpg";

const TalkToAbout = ({ TalkToAboutAnyQuestion }) => {
  return (
    <section>
      <div
        className="faq-area position-relative overflow-hidden space"
        id="faq-sec"
      >
        <div className="container th-container4">
          <div className="row">
            <div className="col-xl-6">
              <div className="title-area pe-xl-5 me-xl-4 text-center text-xl-start">
                <span className="sub-title">Frequently Asked Questions</span>
                <h2 className="sec-title">
                  Talk To Us About Any
                  <span className="text-theme"> Question?</span>
                </h2>
              </div>
              <div className="accordion style2" id="faqAccordion">
                {TalkToAboutAnyQuestion?.questionAns?.map((faq, index) => (
                  <div
                    className="accordion-card style2 th-radius1"
                    key={faq.id}
                  >
                    <div
                      className="accordion-header"
                      id={`collapse-item-${faq.id}`}
                    >
                      <button
                        className={`accordion-button ${
                          index === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${faq.id}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse-${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${faq.id}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`collapse-item-${faq.id}`}
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
              <div className="faq-img8 mb-xl-0 mt-xl-0 ps-xl-5 ms-xl-1">
                <div className="img1">
                  <img
                    src={TalkToAboutAnyQuestion.img}
                    alt="FAQ"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "520px",
                      height: "485px",
                    }}
                  />
                  <div className="img2 jump">
                    <img
                      src={TalkToAboutAnyQuestion.img1}
                      alt="FAQ"
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        width: "328px",
                        height: "250px",
                      }}
                    />
                  </div>
                  <div className="faq8-shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToAbout;
