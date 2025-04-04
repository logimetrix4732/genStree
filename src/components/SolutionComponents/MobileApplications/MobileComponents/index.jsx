import React from "react";
import MobileAbout from "./MobileAbout/MobileAbout";
import MobileAbout1 from "./MobileAbout/MobileAbout1";
import MobileAbout2 from "./MobileAbout/MobileAbout2";
import MobileAbout3 from "./MobileAbout/MobileAbout3";
import MobileWhyChooseUs from "./MobileWhyChooseUs";
import about_8_2 from "../../../../assets/img/normal/about_8_2.jpg";
import about_8_1 from "../../../../assets/img/normal/about_8_1.jpg";
import MobileKeyFeature from "./MobileKeyFeature";
const MobileComponents = () => {
  const aboutContent1 = {
    title: "Built for the next generation of small business",
    description:
      "Incorporate visually appealing elements such as high-quality images, videos, or graphics that resonate with the target audience and complement the overall design of the page. Ensure that the landing page is optimized for various devices.",
    checklist: [
      ["Easy Customize", "Free updates"],
      ["Fully Responsive", "Ultimate support"],
    ],
    buttonText: "Get Started For Free 14 Days",
    buttonLink: "/contactUs",
    images: [about_8_1, about_8_2],
  };
  const aboutData = [
    {
      id: 1,
      title: "Project Management App",
      heading:
        "Download our app and start your free trial to get started today!",
      description1:
        "Clearly communicate the benefits of using the app. Explain how it solves a problem or improves the user's life in some way. Focus on the value proposition and what makes the app worth downloading. Include a prominent call-to-action button that encourages visitors to download the app or sign up for a free trial.",
      description2:
        "Specify which platforms the app is available on (e.g., iOS, Android) and provide links to download from the respective app stores.",
      playStoreLink: "#",
      appleStoreLink: "#",
      image: "",
    },
  ];
  return (
    <>
      <MobileAbout aboutContent={aboutContent1} />
      <MobileWhyChooseUs />
      <MobileAbout1 />
      <MobileAbout2 />
      <MobileAbout3 aboutData={aboutData} />
      <section className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Customer Feedbacks</span>
            <h2 className="sec-title">Loved by our customer worldwide</h2>
          </div>
          <div className="slider-area testi-grid2-area">
            <div className="testi-indicator">
              <div
                className="swiper th-slider testi-grid2-thumb"
                data-slider-options='{"effect":"slide","slidesPerView":"5","spaceBetween":13,"loop":true,"breakpoints":{"0":{"slidesPerView":4},"576":{"slidesPerView":"5"}}}'
                data-slider-tab="#testiSlide1"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_1.png"
                        alt="Image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_2.png"
                        alt="Image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_3.png"
                        alt="Image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_4.png"
                        alt="Image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_5.png"
                        alt="Image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper th-slider"
              id="testiSlide7"
              data-slider-options='{"effect":"slide","loop":true,"thumbs":{"swiper":".testi-grid2-thumb"},"breakpoints":{"0":{"autoHeight":true},"576":{"autoHeight":false}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      I've had the pleasure of working with logimetrix for the
                      past year, and I can confidently say that they have been
                      instrumental in the success of our IT initiatives. As a
                      startup, we needed a technology partner that could not
                      only meet our immediate needs but also grow with us as we
                      expand our business. logimetrix has exceeded our
                      expectations on every front.
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Michel Jane Alum</h3>
                        <span className="testi-card2_desig">
                          CTO of Portfolio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      If you have specific questions about gathering or
                      analyzing customer feedback, or if you're looking for
                      general information on the importance of customer
                      feedback, feel free to ask. Additionally, if you have a
                      sample of customer feedback that you'd like assistance
                      with, you can share it, and I can provide insights or
                      suggestions based on you provide
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Alex Michel</h3>
                        <span className="testi-card2_desig">Founder CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      It sounds like you're expressing positive feedback or a
                      statement about a product or service being loved by
                      customers worldwide. If this is a statement you want to
                      share or discuss, it's great to highlight positive
                      feedback! Customer satisfaction and positive testimonials
                      can be powerful assets for a product or services
                      businesses I'm here to help!
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Jenny Wilson</h3>
                        <span className="testi-card2_desig">
                          Project Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      If you have a specific question or if there's more
                      information you'd like to provide or discuss regarding
                      your product or service being loved by customers
                      worldwide, feel free to share more details. Whether you're
                      looking for advice on how to leverage this positive
                      feedback, strategies to maintain customer satisfaction, or
                      any other related
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Savannah Nguyen</h3>
                        <span className="testi-card2_desig">
                          UI/UX Designer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      It's fantastic to hear that your product or service is
                      loved by customers worldwide! Positive customer feedback
                      is a strong indicator of satisfaction and can contribute
                      significantly to the success and reputation of a business.
                      If you're looking to capitalize on this positive
                      sentiment, here are a few as we expand our business topic,
                      Positive customer feedback I'm here
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Cameron Williamson</h3>
                        <span className="testi-card2_desig">
                          Disaster Recovery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-slider-prev="#testiSlide7"
                className="slider-arrow slider-prev"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slider-next="#testiSlide7"
                className="slider-arrow slider-next"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
            <div className="testi-line" />
          </div>
        </div>
      </section>
      <MobileKeyFeature />
    </>
  );
};

export default MobileComponents;
