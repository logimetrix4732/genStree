import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import blog_bg_1 from "../../../assets/img/bg/blog_bg_1.png";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import author11 from "../../../assets/img/blog/author-1-1.png";
import { Link } from "react-router-dom";
const SuccessStories = ({ data }) => {
  return (
    <section
      className="bg-top-right bg-smoke overflow-hidden space"
      id="blog-sec"
      style={{
        backgroundImage: `url(${blog_bg_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title color3">{data.shadowTitle}</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" loading="lazy" />
            </div>
            {data.subtitle}
          </span>
          <h2 className="sec-title">
            {data.title} <span className="text-theme">Stories</span>
          </h2>
        </div>

        {data.posts.length > 0 ? (
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="th-slider has-shadow"
          >
            {data.posts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="blog-card">
                  <div
                    className="blog-img"
                    style={{ height: "200px", overflow: "hidden" }}
                  >
                    <img
                      src={post.img}
                      alt="blog"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="blog-content">
                    <h3 className="box-title">
                      <Link to={post.link}>{post.title}</Link>
                    </h3>
                    <p className="blog-text">{post.desc}</p>
                    <div className="blog-bottom">
                      <Link to="/contactUs" className="author">
                        <img src={author11} alt="author" loading="lazy" /> By
                        Logimetrix
                      </Link>
                      <Link to={post.link} className="line-btn">
                        Explore more <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center">No blog posts available</p>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;
