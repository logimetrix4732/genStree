import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import breadcumbbg from "../../assets/img/bg/breadcumb-bg.jpg";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
import title_shape_2_white from "../../assets/img/theme-img/title_shape_2_white.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const ContactUs = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    CountryCode: "",
    Message: "",
  });
  const isValidEmail = (email) => {
    // Basic regex to check email format
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) return false;

    // Prevent consecutive dots anywhere in email
    if (email.includes("..")) return false;

    // Prevent space in email
    if (email.includes(" ")) return false;

    // Prevent leading or trailing dot in local part
    const [local, domain] = email.split("@");
    if (local.startsWith(".") || local.endsWith(".")) return false;

    // Prevent leading or trailing hyphen in domain
    if (domain.startsWith("-") || domain.endsWith("-")) return false;

    // Check domain part format and prevent invalid cases
    const domainParts = domain.split(".");
    if (domainParts.length < 2 || domainParts.length > 3) return false;

    // Ensure domain only contains valid ASCII characters
    if (!/^[a-zA-Z0-9.-]+$/.test(domain) || /[^\x00-\x7F]/.test(domain))
      return false;

    // Ensure no underscore (_) in domain (invalid in real domains)
    if (domain.includes("_")) return false;

    // Prevent emails with Unicode hidden characters
    if (/[\u200B-\u200D\uFEFF]/.test(email)) return false;

    // Prevent quoted strings in local part
    if (local.startsWith('"') && local.endsWith('"')) return false;

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    setFormData({ ...formData, [name]: value });

    if (!value.trim()) {
      newErrors[name] = "This field is required";
    } else {
      delete newErrors[name];
    }

    if (name === "Email" && !isValidEmail(value)) {
      newErrors.Email = "Invalid email format";
    }

    setErrors(newErrors);
  };
  const isValidPhoneNumber = (phone) => {
    if (!phone) return false;
    const numericPhone = phone.replace(/\D/g, "");
    return numericPhone.length >= 8 && numericPhone.length <= 15;
  };
  const handlePhoneChange = (value, country) => {
    const phoneNumber = value.replace(`+${country.dialCode}`, "").trim();
    let newErrors = { ...errors };

    setFormData({
      ...formData,
      Phone: phoneNumber,
      CountryCode: country.dialCode,
    });

    if (!isValidPhoneNumber(phoneNumber)) {
      newErrors.Phone = "Invalid phone number";
    } else {
      delete newErrors.Phone;
    }

    setErrors(newErrors);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.Email && !isValidEmail(formData.Email)) {
      newErrors.Email = "Invalid email format";
    }

    if (!isValidPhoneNumber(formData.Phone)) {
      newErrors.Phone = "Invalid phone number";
    }

    setErrors(newErrors);

    // If there are errors, stop submission
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL_LOCAL}/inquiry`,
        formData
      );
      toast.success("Message sent successfully!", { autoClose: 2000 });
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        CountryCode: "",
        Message: "",
      });
      setErrors({});
    } catch (error) {
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to send message", { autoClose: 2000 });
    }
  };

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
                    <a href="mailto:info@GenStree.co.in">info@GenStree.co.in</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-smoke space" id="contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="title-area mb-35 text-xl-start text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <img src={title_shape_2} alt="shape" loading="lazy" />
                  </div>
                  Contact Our Company!
                </span>
                <h2 className="sec-title">How Can We Help You?</h2>
                <p className="sec-text">
                  We are dedicated to providing innovative solutions for your
                  business needs.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className={`form-control ${errors.Name ? "border-danger" : ""}`}
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                    <i
                      className="fal fa-user"
                      style={{ color: errors.Name ? "red" : "" }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className={`form-control ${errors.Email ? "border-danger" : ""}`}
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                    <i
                      className="fal fa-envelope"
                      style={{ color: errors.Email ? "red" : "" }}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <PhoneInput
                      country={"in"}
                      value={formData.Phone}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: "Phone",
                        className: `form-control ${errors.Phone ? "border-danger" : ""}`,
                        required: true,
                      }}
                      placeholder="Phone Number"
                      containerStyle={{
                        zIndex: 10,
                        position: "relative",
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "50px",
                        border: errors.Phone ? "1px solid red" : "none",
                        borderRadius: "5px",
                      }}
                      buttonStyle={{
                        background: "#fff",
                        borderRight: "none",
                        border: errors.Phone ? "1px solid red" : "none",
                      }}
                      dropdownStyle={{
                        maxHeight: "250px",
                        overflowY: "auto",
                        minWidth: "200px",
                      }}
                      searchStyle={{
                        padding: "8px 35px 8px 12px",
                        height: "35px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "90%",
                      }}
                      searchPlaceholder="Search country..."
                      enableSearch={true}
                    />

                    <i
                      className="fal fa-phone"
                      style={{
                        position: "absolute",
                        zIndex: 11,
                        color: errors.Phone ? "red" : "",
                      }}
                    />
                    {errors.Phone && (
                      <small className="text-danger">
                        Invalid phone number
                      </small>
                    )}
                  </div>

                  <div className="form-group col-12">
                    <textarea
                      name="Message"
                      value={formData.Message}
                      onChange={handleChange}
                      className={`form-control ${errors.Message ? "border-danger" : ""}`}
                      placeholder="Your Message"
                      rows={3}
                    />
                    <i
                      className="fal fa-comment"
                      style={{ color: errors.Message ? "red" : "" }}
                    />
                  </div>
                  <div className="form-btn text-xl-start text-center col-12">
                    <button className="th-btn">
                      Send Message
                      <i className="fa-regular fa-arrow-right ms-2" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="map-sec">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7081834203223!2d80.9952047!3d26.849232399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d015555555%3A0xcae70fb47564e174!2sKrishna%20Sadan%2C%203%2F204%2C%203rd%20Floor%2C%20Vikas%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1738389814449!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default ContactUs;
