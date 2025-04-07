import React from "react";
import breadcumbbg from "../../assets/img/bg/breadcumb-bg.jpg";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
import title_shape_2_white from "../../assets/img/theme-img/title_shape_2_white.svg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
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
        }}
      >
        <div className="container">
          <div className="breadcumb-content text-center">
            <div className="title-area mb-35">
              <div className="shadow-title">Contact Us</div>
              <span className="sub-title" style={{ color: "white" }}>
                <div className="icon-masking me-2">
                  <img src={title_shape_2_white} alt="shape" loading="lazy" />
                </div>
                Contact Us
              </span>
            </div>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-location-dot" />
                </div>

                <div className="media-body">
                  <span className="contact-info_text">
                    Krishna Sadan, 3/204, 3rd Floor, Vikas Khand, Gomti Nagar,
                    Lucknow, Uttar Pradesh 226010
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="media-body">
                  <h4 className="box-title">Call Us Anytime</h4>
                  <span className="contact-info_text">
                    <a href="tel:+9935540006">(+91) - 99355 - 40006</a>
                    <a href="tel:+9935876555">(+91) - 99358-76555</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="media-body">
                  <h4 className="box-title">Send An Email</h4>
                  <span className="contact-info_text">
                    <a href="mailto:info@genStree.co.in">info@genStree.co.in</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-smoke space"
        data-bg-src="assets/img/bg/contact_bg_1.png"
        id="contact-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="title-area mb-35 text-xl-start text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <img src={title_shape_2} alt="shape" loading="lazy" />
                  </div>
                  contact with us!
                </span>
                <h2 className="sec-title">Have Any Questions?</h2>
                <p className="sec-text">
                  Enthusiastically disintermediate one-to-one leadership via
                  business e-commerce. Dramatically reintermediate compelling
                  process improvements rather than empowered relationships.
                </p>
              </div>
              <form
                action="https://html.themeholy.com/webteck/demo/mail.php"
                method="POST"
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                    <i className="fal fa-user" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Phone Number"
                    />
                    <i className="fal fa-phone" />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={3}
                      className="form-control"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                    <i className="fal fa-comment" />
                  </div>
                  <div className="form-btn text-xl-start text-center col-12">
                    <button className="th-btn">
                      Send Message
                      <i className="fa-regular fa-arrow-right ms-2" />
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.919198726276!2d80.9966!3d26.8545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4d4d4d4d4d%3A0x4d4d4d4d4d4d4d4d!2sLogimetrix%20Techsolutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ContactUs;
