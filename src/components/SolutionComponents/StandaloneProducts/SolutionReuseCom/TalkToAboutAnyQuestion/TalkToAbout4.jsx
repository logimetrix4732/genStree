import React from "react";
import faq_7_1 from "../../../../../assets/img/normal/faq_7_1.jpg";
import faq_7_2 from "../../../../../assets/img/normal/faq_7_2.jpg";
const TalkToAbout4 = () => {
  return (
    <section>
      <div
        class="faq-area position-relative overflow-hidden space"
        id="faq-sec"
      >
        <div class="container th-container4">
          <div class="row">
            <div class="col-xl-6">
              <div class="title-area pe-xl-5 me-xl-4 text-center text-xl-start">
                <span class="sub-title">Frequently Ask Question</span>
                <h2 class="sec-title">
                  Talk To About Any
                  <span className="text-theme"> Question?</span>
                </h2>
              </div>
              <div class="accordion style2" id="faqAccordion">
                <div class="accordion-card style2 th-radius1">
                  <div class="accordion-header" id="collapse-item-1">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      How does this system help in tracking vehicles?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    class="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      <p class="faq-text">
                        Our system provides real-time tracking of vehicles,
                        showing when they start, stop, and their exact route,
                        ensuring complete visibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-card style2 th-radius1">
                  <div class="accordion-header" id="collapse-item-2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      Can I monitor fuel consumption and expenses?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    class="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      <p class="faq-text">
                        Yes! The system includes fuel tracking and reporting,
                        helping you manage consumption and reduce operational
                        costs.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-card style2 th-radius1">
                  <div class="accordion-header" id="collapse-item-3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Does the system support trip history and reporting?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    class="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      <p class="faq-text">
                        Absolutely! You can access detailed trip reports,
                        including distance covered, stops made, and passenger
                        drop-offs, all exportable in CSV format.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-card style2 th-radius1">
                  <div class="accordion-header" id="collapse-item-4">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      How secure is the data stored in the system?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    class="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      <p class="faq-text">
                        We implement secure cloud storage, role-based access
                        controls, and encrypted data transmission, ensuring your
                        information stays protected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="faq-img8 mb-xl-0 mt-xl-0 ps-xl-5 ms-xl-1">
                <div class="img1">
                  <img src={faq_7_1} alt="About" loading="lazy" />
                  <div class="img2 jump">
                    <img src={faq_7_2} alt="About" loading="lazy" />
                  </div>
                  <div class="faq8-shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToAbout4;
