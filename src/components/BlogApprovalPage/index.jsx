import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainHeading from "../MainHeading";
import noBlog from "../../Imges/noBlog.gif";
import ConfirmationModal from "../ConfirmationModal";
import { getFetch, putFetchData } from "../../api/Api";
import { toast, ToastContainer } from "react-toastify";
import blogs11 from "../../assets/img/blog/blog-s-1-1.jpg";
import author11 from "../../assets/img/blog/author-1-1.png";

const blogsPerPage = 6;

const BlogApprovalPage = () => {
  const blogImg = [
    {
      id: 1,
      img: blogs11,
      title: "Understanding React Hooks",
      desc: "A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development",
      date: "21 June, 2024",
      comments: 5,
    },
    {
      id: 2,
      img: blogs11,
      title: "JavaScript ES6 Features",
      desc: "Explore the most useful features of ES6 that make JavaScript development easier Explore the most useful features of ES6 that make JavaScript development easier Explore the most useful features of ES6 that make JavaScript development easier",
      date: "18 June, 2024",
      comments: 8,
    },
    {
      id: 1,
      img: blogs11,
      title: "Understanding React Hooks",
      desc: "A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development",
      date: "21 June, 2024",
      comments: 5,
    },
    {
      id: 2,
      img: blogs11,
      title: "JavaScript ES6 Features",
      desc: "Explore the most useful features of ES6 that make JavaScript development easier Explore the most useful features of ES6 that make JavaScript development easier Explore the most useful features of ES6 that make JavaScript development easier",
      date: "18 June, 2024",
      comments: 8,
    },
    {
      id: 1,
      img: blogs11,
      title: "Understanding React Hooks",
      desc: "A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development",
      date: "21 June, 2024",
      comments: 5,
    },
    {
      id: 2,
      img: blogs11,
      title: "JavaScript ES6 Features",
      desc: "Explore the most useful features of ES6 that make JavaScript development easier A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development",
      date: "18 June, 2024",
      comments: 8,
    },
    {
      id: 1,
      img: blogs11,
      title: "Understanding React Hooks",
      desc: "A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development",
      date: "21 June, 2024",
      comments: 5,
    },
    {
      id: 2,
      img: blogs11,
      title: "JavaScript ES6 Features",
      desc: "Explore the most useful features of ES6 that make JavaScript development easier A deep dive into React hooks and how they can be used effectively in modern web development A deep dive into React hooks and how they can be used effectively in modern web development",
      date: "18 June, 2024",
      comments: 8,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState([]);
  const [approveOpen, setApproveOpen] = useState({
    status: false,
    data: "",
  });
  const handleOpen = (id, status) => {
    setApproveOpen({
      status: true,
      data: { id, status },
    });
  };
  const handleClose = () => {
    setApproveOpen({
      status: false,
      data: "",
    });
  };
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url = `${import.meta.env.VITE_API_URL_LOCAL}/getAllPost`;
    try {
      const response = await getFetch(url);
      console.log(response.data.data, "==response");
      if (response && response.data) {
        setBlogData(response.data.data || []);
      } else {
        console.error("API Error: No data received");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleStatusChange = async (id, status) => {
    try {
      const url = `${import.meta.env.VITE_API_URL_LOCAL}/blogStatus/${id}?Status=${status}`;
      const response = await putFetchData(url, { Status: status });
      console.log(response, "=response");
      if (response) {
        toast.success(response.data.message, {
          autoClose: 2000,
        });
        fetchData();
        handleClose();
      } else {
        toast.error(
          response.message || `Failed to ${status.toLowerCase()} blog.`,
          { autoClose: 2000 }
        );
      }
    } catch (error) {
      console.error(`Error ${status.toLowerCase()}ing blog:`, error);
      toast.error(error.response?.data?.message || "Something went wrong!", {
        autoClose: 2000,
      });
    }
  };
  const [expandedBlog, setExpandedBlog] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  return (
    <div>
      <MainHeading
        title="Admin Blog Approval"
        subtitle="Admin Blog Approval"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />
      <ConfirmationModal
        open={approveOpen}
        handleClose={handleClose}
        data={approveOpen.data}
        handleConfirm={handleStatusChange}
        message={`Are you sure you want to ${approveOpen?.data?.status?.toLowerCase() || ""} this blog?`}
      />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
                  <div className="th-blog blog-single has-post-thumbnail d-flex flex-column">
                    {blog.imageBase64 && (
                      <div
                        className="blog-img"
                        style={{
                          height: "210px",
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`data:image/jpeg;base64,${blog.imageBase64}`}
                          loading="lazy"
                          alt="Blog Image"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}
                    <div className="blog-content d-flex flex-column flex-grow-1">
                      <div className="blog-meta">
                        <Link to="/contactUs">
                          <i className="fa-light fa-calendar-days" />{" "}
                          {formatDate(blog.createdAt)}
                        </Link>
                        <Link to="/contactUs">
                          {blog.Status === "Approved" ? (
                            <i
                              className="fas fa-circle-check"
                              style={{ color: "green" }}
                            ></i>
                          ) : blog.Status === "Rejected" ? (
                            <i
                              className="fas fa-circle-xmark"
                              style={{ color: "red" }}
                            ></i>
                          ) : (
                            <i
                              className="fas fa-clock"
                              style={{ color: "orange" }}
                            ></i>
                          )}
                          <span>Status: {blog.Status}</span>
                        </Link>
                      </div>
                      <h6>
                        <span>{blog.title}</span>
                      </h6>
                      <p
                        className={`blog-text ${expandedBlog === blog.id ? "expanded" : ""}`}
                        onClick={() => toggleReadMore(blog.id)}
                        style={{
                          height: expandedBlog === blog.id ? "auto" : "110px",
                          transition: "height 0.3s ease-in-out",
                        }}
                      >
                        {blog.Content}
                      </p>

                      <div className="mt-auto">
                        <div className="blog-actions d-flex align-items-center justify-content-between">
                          {blog.Content.length > 150 && (
                            <p
                              className="line-btn"
                              onClick={() => toggleReadMore(blog.id)}
                            >
                              {expandedBlog === blog.id
                                ? "Read Less"
                                : "Read More"}
                            </p>
                          )}
                          <div className="d-flex">
                            <button
                              className="btn btn-success ms-2"
                              onClick={() => handleOpen(blog.id, "Approved")}
                              disabled={blog.Status === "Approved"}
                            >
                              <i className="fas fa-check-circle"></i>
                            </button>
                            <button
                              className="btn btn-danger ms-2"
                              onClick={() => handleOpen(blog.id, "Rejected")}
                              disabled={blog.Status === "Rejected"}
                            >
                              <i className="fas fa-times-circle"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center"
                style={{ minHeight: "300px" }}
              >
                <img
                  src="/noBlog.png"
                  loading="lazy"
                  alt="No Blogs Available"
                  style={{ width: "500px" }}
                />
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#444",
                    marginTop: "10px",
                  }}
                >
                  No Blogs Available
                </h3>
              </div>
            )}
          </div>
          <div className="th-pagination text-center">
            <ul>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={currentPage === index + 1 ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      paginate(index + 1);
                    }}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              {currentPage < totalPages && (
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      paginate(currentPage + 1);
                    }}
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-right" autoClose={3000} />
      {/* CSS for multi-line text ellipsis */}
      <style>
        {`
            .blog-text {
              display: -webkit-box;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
            }
            .expanded {
              -webkit-line-clamp: unset;
            }
          `}
      </style>
    </div>
  );
};

export default BlogApprovalPage;
