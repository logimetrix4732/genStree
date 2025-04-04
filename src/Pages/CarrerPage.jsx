import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import MainHeading from "../components/MainHeading";
import JobCard from "../components/CarrerComponents/JobCard";
import JobOverView from "../components/CarrerComponents/JobOverView";
import JobExplain from "../components/CarrerComponents/JobExplain";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import CarrerAbout from "../components/CarrerComponents/CarrerAbout";
import CarrerForm from "../components/CarrerComponents/CarrerForm";
import { getFetch } from "../api/Api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function CarrerPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobData, setJobData] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const jobDetailRef = useRef(null);
  const { id } = useParams();

  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
    navigate(`/career/${job.id}`, { replace: true });
  };

  useEffect(() => {
    if (id && jobData.length > 0) {
      const job = jobData.find((job) => job.id.toString() === id);
      if (job) {
        setSelectedJob(job);
        setShowDetails(true);

        requestAnimationFrame(() => {
          jobDetailRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    }
  }, [id, jobData]);

  const handleCardBack = () => {
    setShowDetails(false);
    setSelectedJob(null);
    navigate("/CarrerPage");
  };

  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    setOpen(false);
  };
  const fetchData = async () => {
    const url = `${import.meta.env.VITE_API_URL_LOCAL}/getjob`;
    try {
      const response = await getFetch(url);
      if (response?.status === 200) {
        setJobData(response.data.data);
      } else {
        console.error("API Error:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // ----------------------------------
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorText = "";

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errorText = emailPattern.test(value) ? "" : "Enter a valid email";
    }

    if (name === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      errorText = phonePattern.test(value)
        ? ""
        : "Enter a valid 10-digit phone number";
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: errorText,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setErrors((prev) => ({
        ...prev,
        selectedFile: "Only PDF files are allowed",
      }));
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
      setErrors((prev) => ({ ...prev, selectedFile: "" }));
    }
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
    formDataToSend.append("Name", formData.name);
    formDataToSend.append("Email", formData.email);
    formDataToSend.append("PhoneNumber", formData.phone);
    formDataToSend.append("CoverLetter", formData.message);

    if (selectedFile) {
      formDataToSend.append("file", selectedFile);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL_LOCAL}/apply/${selectedJob.id}`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();
      console.log(result);
      if (result.status) {
        toast.success(result.message, { autoClose: 2000 });
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setSelectedFile(null);
        setErrors({});
        handleFormClose();
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.response.data.message, { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#ffffff" }}>
      <CarrerForm
        open={open}
        onClose={handleFormClose}
        formData={formData}
        loading={loading}
        errors={errors}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        selectedFile={selectedFile}
        handleSubmit={handleSubmit}
      />
      <MainHeading
        title="Carrer"
        subtitle="Carrer"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      {!showDetails && <CarrerAbout />}
      <div className="job">
        <div className="wrapper">
          <div className="main-container">
            <div className="searched-jobs">
              <Grid container>
                {!showDetails ? (
                  <Grid item xs={12}>
                    <Grid item xs={12} display="flex" justifyContent="center">
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.6 }}
                      >
                        <JobCard
                          handleCardClick={handleCardClick}
                          jobData={jobData}
                        />
                      </motion.div>
                    </Grid>
                  </Grid>
                ) : (
                  <React.Fragment>
                    <Grid
                      item
                      lg={3}
                      sm={5}
                      xs={12}
                      order={{ xs: 2, sm: 1 }}
                      sx={{
                        height: "915px",
                        overflowY: "auto",
                        scrollbarWidth: "thin",
                        scrollbarColor: "#4786e6 #f1f1f1",
                        "&::-webkit-scrollbar": {
                          width: "6px",
                        },
                        "&::-webkit-scrollbar-track": {
                          background: "#f1f1f1",
                          borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#ff6b6b",
                          borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                          background: "#e63946",
                        },
                      }}
                    >
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.6 }}
                      >
                        <JobOverView
                          jobData={jobData}
                          showDetails={showDetails}
                          handleCardBack={handleCardBack}
                          handleCardClick={handleCardClick}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item lg={9} sm={7} xs={12} order={{ xs: 1, sm: 2 }}>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.8 }}
                      >
                        <JobExplain
                          handleFormOpen={handleFormOpen}
                          selectedJob={selectedJob}
                          handleCardBack={handleCardBack}
                        />
                      </motion.div>
                    </Grid>
                  </React.Fragment>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </div>
  );
}
