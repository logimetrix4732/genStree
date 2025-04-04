import React from "react";
import faq_5_1 from "../../../../../assets/img/normal/faq_5_1.jpg";
import faq_5_2 from "../../../../../assets/img/normal/faq_5_2.jpg";
import faq_5_3 from "../../../../../assets/img/normal/faq_5_3.jpg";

const TalkToAbout1 = ({ TalkToAbout1Array }) => {
  return (
    <div className="faq-area position-relative space" id="faq-sec">
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6">
            <div className="faq-img5 mb-xl-0 mt-xl-0 mt-n4 me-xl-5 pe-xl-5">
              <div className="img1">
                <img src={TalkToAbout1Array.img} alt="FAQ" loading="lazy" />
                <div className="img2 jump">
                  <img src={TalkToAbout1Array.img1} alt="FAQ" loading="lazy" />
                </div>
                <div className="img3 movingX">
                  <img src={TalkToAbout1Array.img2} alt="FAQ" loading="lazy" />
                </div>
                <div className="faq-shape5" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area pe-xl-5 me-xl-4 text-center text-xl-start">
              <span className="sub-title style1">
                Frequently Asked Questions
              </span>
              <h2 className="sec-title">
                Have Any <span className="text-theme">Questions?</span>
              </h2>
            </div>
            <div className="accordion" id="faqAccordion">
              {TalkToAbout1Array?.TalkToAboutArray?.map((faq, index) => (
                <div className="accordion-card style7" key={index}>
                  <div className="accordion-header" id={`heading-${index}`}>
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
                    aria-labelledby={`heading-${index}`}
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
        </div>
      </div>
    </div>
  );
};

export default TalkToAbout1;
