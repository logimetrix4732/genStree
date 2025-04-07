import React from "react";
import "./style.css";
import newsRoom from "../../Imges/newsRoom.png";
const Awards = () => {
  return (
    <div className="main-container">
      <main className="responsive-wrapper">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <div className="title-area mb-35 text-center">
                <div className="shadow-title">Newsroom</div>
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                      loading="lazy"
                    />
                  </div>
                  News & Recognition
                </span>
                <h2 className="sec-title">
                  Celebrating Achievements &
                  <span className="text-theme"> Contributions.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="magazine-layout">
          <div className="magazine-column">
            <article className="article">
              <h2 className="article-title article-title--large">
                <a href="#" className="article-link">
                  GenStree:{" "}
                  <mark className="mark mark--primary">
                    Transforming Businesses
                  </mark>{" "}
                  Through Scalable SaaS Solutions
                </a>
              </h2>
              <div className="article-excerpt">
                <p>
                  Recognized as one of the{" "}
                  <strong>
                    20 Most Promising SaaS Solutions Providers – 2017
                  </strong>
                  , GenStree specializes in delivering scalable, easily
                  deployable, and ready-to-use SaaS solutions for enterprises.
                </p>
                <p>
                  With a strong focus on AI, IoT, and cloud computing, GenStree
                  offers products like <strong>TrakMob</strong> (Workforce
                  Performance Management), <strong>TrakFuel</strong> (Fuel
                  Monitoring System), and <strong>Eklavya</strong> (School
                  Management System).
                </p>
              </div>
              <div className="article-author">
                <div className="article-author-img">
                  <img
                    src="https://assets.codepen.io/285131/author-3.png"
                    alt="Shantanu Kumar"
                    loading="lazy"
                  />
                </div>
                <div className="article-author-info">
                  <dl>
                    <dt>Shantanu Kumar</dt>
                    <dd>Founder & CEO</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="article">
              <h2 className="article-title article-title--medium">
                <a href="#" className="article-link">
                  GenStree: Driving Innovation in{" "}
                  <mark className="mark mark--primary">SaaS Solutions</mark>
                </a>
              </h2>
              <div className="article-creditation">
                <p>By Vipul Rai, CEO, GenStree</p>
              </div>
            </article>
          </div>
          <div className="magazine-column">
            <article className="article">
              <figure className="article-img">
                <img src={newsRoom} loading="lazy" />
              </figure>
              <h2 className="article-title article-title--medium">
                <a href="#" className="article-link">
                  GenStree: Transforming{" "}
                  <mark className="mark mark--primary">SaaS Landscape</mark>
                </a>
              </h2>
              <div className="article-excerpt">
                <p>
                  GenStree is revolutionizing the SaaS industry with scalable,
                  AI-powered solutions that cater to diverse business needs. By
                  leveraging cutting-edge technologies like IoT, AI, and cloud
                  computing, they help businesses streamline operations and
                  boost efficiency.
                </p>
                <p>
                  Their flagship products, such as TrakMob for workforce
                  performance management, TrakFuel for fuel monitoring, and
                  Eklavya for school management, have set new standards in
                  digital transformation. These solutions empower organizations
                  by providing real-time analytics, automation, and enhanced
                  decision-making capabilities.
                </p>
                <p>
                  Founded by Shantanu Kumar, GenStree remains at the forefront
                  of innovation, continually adapting to the ever-evolving
                  technological landscape. Their commitment to delivering
                  cost-effective, high-performance SaaS applications has earned
                  them a reputation as a leading technology provider.
                </p>
              </div>
              <div className="article-author">
                <div className="article-author-img">
                  <img
                    src="https://assets.codepen.io/285131/author-2.png"
                    loading="lazy"
                  />
                </div>
                <div className="article-author-info">
                  <dl>
                    <dt>Richa Rai</dt>
                    <dd>Founder, GenStree</dd>
                  </dl>
                </div>
              </div>
            </article>
          </div>
          <div className="magazine-column">
            <article className="article">
              <figure className="article-img">
                <img
                  src="https://images.unsplash.com/photo-1512521743077-a42eeaaa963c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  loading="lazy"
                />
              </figure>
              <h2 className="article-title article-title--small">
                <a href="#" className="article-link">
                  To Become{" "}
                  <mark className="mark mark--secondary">Happier</mark>, Ask
                  Yourself These Two Questions Every Night
                </a>
              </h2>
              <div className="article-creditation">
                <p>By Shantanu Kumar</p>
              </div>
            </article>
            <article className="article">
              <figure className="article-img">
                <img
                  src="https://images.unsplash.com/photo-1569234817121-a2552baf4fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  loading="lazy"
                />
              </figure>
              <h2 className="article-title article-title--small">
                <a href="#" className="article-link">
                  10 Things I Stole From People Smarter Than Me
                </a>
              </h2>
              <div className="article-creditation">
                <p>By Shantanu Kumar</p>
              </div>
            </article>
          </div>

          <div className="magazine-column">
            <article className="article">
              <h2 className="article-title article-title--medium">
                <a href="#" className="article-link">
                  Cutting-Edge Software Solutions Transforming Businesses
                </a>
              </h2>
              <div className="article-excerpt">
                <p>
                  GenStree specializes in delivering innovative and customized
                  software solutions that empower businesses to scale
                  efficiently and stay ahead in the digital era.
                </p>
              </div>
              <div className="article-author">
                <div className="article-author-img">
                  <img
                    src="https://assets.codepen.io/285131/author-2.png"
                    loading="lazy"
                  />
                </div>
                <div className="article-author-info">
                  <dl>
                    <dt>Rahul Sharma</dt>
                    <dd>Senior Developer</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="article">
              <small className="article-category">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={28}
                  height={22}
                  viewBox="0 0 28 22"
                >
                  <defs>
                    <clipPath id="clip-headphones">
                      <rect width={28} height={22} />
                    </clipPath>
                  </defs>
                  <g id="headphones" clipPath="url(#clip-headphones)">
                    <g
                      id="Group_2"
                      data-name="Group 2"
                      transform="translate(-3680 -609)"
                    >
                      <path
                        id="Subtraction_1"
                        data-name="Subtraction 1"
                        d="M5,12H5A5.274,5.274,0,0,1,0,6.5,5.274,5.274,0,0,1,5,1V12Z"
                        transform="translate(3680 619)"
                      />
                      <rect
                        id="Rectangle_18"
                        data-name="Rectangle 18"
                        width={2}
                        height={11}
                        transform="translate(3686 620)"
                      />
                      <path
                        id="Subtraction_5"
                        data-name="Subtraction 5"
                        d="M1.243,12H.045C.015,11.67,0,11.334,0,11A11,11,0,0,1,18.778,3.222,10.925,10.925,0,0,1,22,11c0,.331-.015.667-.045,1h-1.2a14.108,14.108,0,0,0-2.685-6.241A8.982,8.982,0,0,0,11,2,8.982,8.982,0,0,0,3.929,5.759,14.109,14.109,0,0,0,1.243,12Z"
                        transform="translate(3683 609)"
                      />
                      <path
                        id="Subtraction_6"
                        data-name="Subtraction 6"
                        d="M5,0H5A5.274,5.274,0,0,0,0,5.5,5.274,5.274,0,0,0,5,11V0Z"
                        transform="translate(3708 631) rotate(180)"
                      />
                      <rect
                        id="Rectangle_23"
                        data-name="Rectangle 23"
                        width={2}
                        height={11}
                        transform="translate(3700 620)"
                      />
                      <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M.156-.031,2.125-1.687,2,2H0Z"
                        transform="translate(3683 619)"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M1.969-.031,0-1.687.125,2h2Z"
                        transform="translate(3702.875 619)"
                      />
                    </g>
                  </g>
                </svg>
                <span>Technology Insights / Software Development</span>
              </small>
              <h2 className="article-title article-title--medium">
                <a href="#" className="article-link">
                  The Future of AI in Business: How Automation is Reshaping
                  Industries
                </a>
              </h2>
              <div className="article-podcast-player">
                <button className="podcast-play-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={192}
                    height={192}
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width={256} height={256} fill="none" />
                    <path d="M232.3125,114.34375,88.34375,26.35937A15.99781,15.99781,0,0,0,64,40.00781V215.99219a16.00521,16.00521,0,0,0,24.34375,13.64843L232.3125,141.65625a16.00727,16.00727,0,0,0,0-27.3125Z" />
                  </svg>
                </button>
                <div className="podcast-progression"></div>
                <span className="podcast-time">18:30</span>
              </div>
              <div className="article-podcast-info">
                Available on Spotify, Apple Podcasts, and Google Podcasts
              </div>
              <div className="article-author">
                <div className="article-author-img">
                  <img
                    src="https://assets.codepen.io/285131/author-3.png"
                    loading="lazy"
                  />
                </div>
                <div className="article-author-info">
                  <dl>
                    <dt>Neha Verma</dt>
                    <dd>Technology Journalist</dd>
                  </dl>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Awards;
