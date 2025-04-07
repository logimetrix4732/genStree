import React, { useState } from "react";
import logimetrixlogo1 from "../../Imges/logimetrixlogo1.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import brochurePdf from "../../Brochure/Logimetrix Techsolutions Brochure (2)_compressed.pdf";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleDrawer = () => setOpen(!open);
  const handleSubmenuToggle = (index) =>
    setSubmenuOpen((prev) => ({ ...prev, [index]: !prev[index] }));

  const user_role = JSON.parse(localStorage.getItem("user_role"));
  const handleBrochureClick = (e) => {
    e.preventDefault();
    window.open(brochurePdf, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <header className="th-header header-layout2">
        <MobileMenu
          open={open}
          toggleDrawer={toggleDrawer}
          submenuOpen={submenuOpen}
          handleSubmenuToggle={handleSubmenuToggle}
        />
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-map-location" />
                      3/204, Vikas khand, Gomti Nagar ,Lucknow
                    </li>
                    <li>
                      <i className="fas fa-phone" />
                      <a href="tel:+9935540006">+993-554-0006</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <a href="mailto:info@genStree.co.in">
                        info@genStree.co.in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social" onClick={handleBrochureClick}>
                  <a href="" download>
                    <i className="fas fa-download" />
                    <span style={{ marginLeft: "8px" }}>Brochure</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link className="icon-masking" to="/">
                      <span
                        data-mask-src="assets/img/logo.svg"
                        className="mask-icon"
                      />
                      <img
                        src={logimetrixlogo1}
                        alt="GenStree"
                        loading="lazy"
                        style={{ width: "130px", height: "45px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <a href="#">What we do</a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">IT Services</a>
                            <ul style={{ marginBottom: "20px" }}>
                              <li>
                                <Link to="/ApplicationDevelopment">
                                  Application Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/POCDevelopment">
                                  POC Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/ProductOrientedDelivery">
                                  Product-Oriented Delivery
                                </Link>
                              </li>
                              <li>
                                <Link to="/EnterpriseApplication">
                                  Enterprise Application
                                </Link>
                              </li>
                              <li>
                                <Link to="/ApplicationReengineering">
                                  Application Re-engineering
                                </Link>
                              </li>
                              <li>
                                <Link to="/CloudMigration">
                                  Cloud Migration
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Infra Services</a>
                            <ul>
                              <li>
                                <Link to="/IndusTowersLimited">
                                  Indus Towers Limited
                                </Link>
                              </li>
                              <li>
                                <Link to="/OrganicHealthProductsInitiative">
                                  Organic Health Products Initiative
                                </Link>
                              </li>
                              <li>
                                <Link to="/CentralCattleBreedingFarm">
                                  Central Cattle Breeding Farm (CCBF) Renovation
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Accomplishments</a>
                            <ul>
                              <li>
                                <Link to="/MOVCDNER">MOVCDNER</Link>
                              </li>
                              <li>
                                <Link to="/JammuSmartCityProject">
                                  Jammu Smart City Project
                                </Link>
                              </li>
                              <li>
                                <Link to="/AcmeSolarCMSSystem">
                                  Acme Solar CMS System
                                </Link>
                              </li>
                              <li>
                                <Link to="/SAG">SAG</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/HowWeDoIt">How we do it</Link>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/Blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/Gallery">Gallery</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/CarrerPage">Carrer</Link>
                      </li>
                      {user_role == "Recruiter" && (
                        <li className="menu-item-has-children">
                          <a href="#">Admin</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/adminpost">Job Post</Link>
                            </li>
                            <li>
                              <Link to="/AdminDashboard">Dashboard</Link>
                            </li>
                            <li>
                              <button
                                onClick={() => {
                                  localStorage.removeItem("token");
                                  localStorage.removeItem("user_role");
                                  window.location.href = "/";
                                }}
                                style={{
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  color: "#141d38",
                                  font: "Barlow, sans-serif",
                                  padding: "0",
                                  margin: "0",
                                  textAlign: "left",
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  fontWeight: 500,
                                }}
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "#7db432")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#141d38")
                                }
                              >
                                <i
                                  className="fa fa-sign-out"
                                  style={{ color: "#7db432" }}
                                ></i>{" "}
                                Logout
                              </button>
                            </li>
                          </ul>
                        </li>
                      )}
                      {user_role == "Admin" && (
                        <li className="menu-item-has-children">
                          <a href="#">Admin</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/BlogApprovalPage">Blog Approval</Link>
                            </li>

                            <li>
                              <button
                                onClick={() => {
                                  localStorage.removeItem("token");
                                  localStorage.removeItem("user_role");
                                  window.location.href = "/";
                                }}
                                style={{
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  color: "#141d38",
                                  font: "Barlow, sans-serif",
                                  padding: "0",
                                  margin: "0",
                                  textAlign: "left",
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  fontWeight: 500,
                                }}
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "#7db432")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#141d38")
                                }
                              >
                                <i
                                  className="fa fa-sign-out"
                                  style={{ color: "#7db432" }}
                                ></i>{" "}
                                Logout
                              </button>
                            </li>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </nav>
                  <div className="header-button">
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                      onClick={toggleDrawer}
                    >
                      <i className="far fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <Link to="/contactUs" className="th-btn shadow-none">
                      Contact Us
                      <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <style jsx>{`
        .mega-menu::-webkit-scrollbar {
          width: 8px;
        }
        .mega-menu::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .mega-menu::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .mega-menu::-webkit-scrollbar-track {
          background-color: #f1f1f1;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default NavBar;
