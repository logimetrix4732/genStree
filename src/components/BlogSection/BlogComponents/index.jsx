import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import author11 from "../../../assets/img/blog/author-1-1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import noBlog from "../../../Imges/noBlog1.jpg";
import CreateBlog from "./CreateBlog";
import { toast, ToastContainer } from "react-toastify";
const blogsPerPage = 3;
const BlogComponents = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileError, setFileError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    BlogTitle: "",
    BlogCategory: "",
    email: "",
    AuthorName: "",
    message: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url = `${import.meta.env.VITE_API_URL_LOCAL}/getBlogs`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setBlogData(data?.data || []);
      } else {
        console.error("API Error:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    setOpen(false);
    setFormData({
      BlogTitle: "",
      BlogCategory: "",
      email: "",
      AuthorName: "",
      message: "",
    });
    setSelectedFile(null);
    setErrors({});
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorText = "";

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errorText = emailPattern.test(value) ? "" : "Enter a valid email";
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: errorText }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validFormats = ["image/jpeg", "image/jpg", "image/png"];
    if (!validFormats.includes(file.type)) {
      setFileError("Only JPG, JPEG, and PNG files are allowed.");
      setSelectedFile(null);
      return;
    }

    setFileError("");
    setSelectedFile(file);
  };
  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim() && key !== "message") {
        newErrors[key] = "This field is required";
      }
    });

    if (!selectedFile) {
      newErrors.selectedFile = "CV is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("Title", formData.BlogTitle);
    formDataToSend.append("AuthorEmail", formData.email);
    formDataToSend.append("AuthorName", formData.AuthorName);
    formDataToSend.append("Content", formData.message);

    if (selectedFile) {
      formDataToSend.append("Image", selectedFile);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL_LOCAL}/postBlog`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();
      if (result.status) {
        toast.success(result.message, { autoClose: 2000 });
        handleFormClose();
        fetchData();
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Error submitting form", { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  const blogImg = blogData;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogImg.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogImg.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };
  return (
    <div>
      <CreateBlog
        open={open}
        onClose={handleFormClose}
        formData={formData}
        loading={loading}
        errors={errors}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        selectedFile={selectedFile}
        handleSubmit={handleSubmit}
        fileError={fileError}
      />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog, index) => (
                  <div
                    className="th-blog blog-single has-post-thumbnail"
                    key={index}
                  >
                    {blog.imageBase64 && (
                      <div className="blog-img">
                        <img
                          src={`data:image/jpeg;base64,${blog.imageBase64}`}
                          alt="Blog Image"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link className="author" to="/contactUs">
                          <img src={author11} alt="avatar" loading="lazy" /> By
                          GenStree
                        </Link>
                        <Link to="/contactUs">
                          <i className="fa-light fa-calendar-days" />{" "}
                          {formatDate(blog.createdAt)}
                        </Link>
                      </div>
                      <h2 className="blog-title">
                        <span>{blog.Title}</span>
                      </h2>
                      <p className="blog-text">{blog.Content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="d-flex flex-column align-items-center justify-content-center text-center"
                  style={{ minHeight: "300px" }}
                >
                  <img
                    src={noBlog}
                    alt="No Blogs Available"
                    loading="lazy"
                    style={{ width: "600px" }}
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
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_categories">
                  <button
                    onClick={handleFormOpen}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "0 0 10px 0",
                      padding: "16px 25px",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "1.313",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                      transition: "all 0.3s ease",
                      backgroundColor: "white",
                      color: "#2f2f33",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#4786e6";
                      e.target.style.color = "white";
                      e.target.querySelector("svg").style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = "#2f2f33";
                      e.target.querySelector("svg").style.color = "#4786e6";
                    }}
                  >
                    Create Blog
                    <ArrowForwardIcon
                      style={{
                        marginLeft: "10px",
                        color: "#4786e6",
                        transition: "color 0.3s",
                      }}
                    />
                  </button>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <Link to="/qblock">IT Solution</Link>
                    </li>
                    <li>
                      <Link to="/IndusTowersLimited">Infra Services</Link>
                    </li>
                    <li>
                      <Link to="/MOVCDNER">Accomplishments</Link>
                    </li>
                    <li>
                      <Link to="/FieldQuotationSystemPage">Data Analytics</Link>
                    </li>
                    <li>
                      <Link to="/PhotonPage">Internet of Things (IoT)</Link>
                    </li>
                    <li>
                      <Link to="/HowWeDoIt">How we do it</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <Link to="/contactUs">Technology</Link>
                    <Link to="/contactUs">Advice</Link>
                    <Link to="/contactUs">Solution</Link>
                    <Link to="/contactUs">Consultion</Link>
                    <Link to="/contactUs">Business</Link>
                    <Link to="/contactUs">Services</Link>
                    <Link to="/contactUs">Start Up</Link>
                    <Link to="/contactUs">Agency</Link>
                    <Link to="/contactUs">Software</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </div>
  );
};

export default BlogComponents;
