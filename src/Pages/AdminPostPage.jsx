import React, { useEffect, useState } from "react";
import MainHeading from "../components/MainHeading";
import JobPost from "../components/CarrerComponents/JobPost";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import JobCard from "../components/CarrerComponents/JobCard";
import {
  getFetch,
  getOneFetchByUrl,
  postFetchData,
  putFetch,
  putFetchById,
  putFetchData,
} from "../api/Api";
import JobExplain from "../components/CarrerComponents/JobExplain";
import ApplicantTable from "../components/CarrerComponents/ApplicantTable";
import { toast, ToastContainer } from "react-toastify";
import ConfirmationModal from "../components/ConfirmationModal";

const AdminPostPage = () => {
  const [open, setOpen] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [ApplicantsTrue, setApplicantsTrue] = useState(false);
  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
    setApplicantsTrue(true);
    fetchAppliedList(job.id);
  };
  const handleCardBack = () => {
    setShowDetails(false);
    setSelectedJob(null);
  };
  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    setOpen(false);
    handleReset();
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

  // --------------------------------Job Post
  const [errors, setErrors] = useState({});
  const [responsibilities, setResponsibilities] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editID, setEditID] = useState(0);
  const [formData, setFormData] = useState({
    JobName: "",
    JobExperience: "",
    SalaryRange: "",
    EndDate: "",
    JobType: "",
    JobLocation: "",
    JobDescription: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await postFetchData(
          `${import.meta.env.VITE_API_URL_LOCAL}/createJob`,
          {
            ...formData,
            JobResponsibilities: responsibilities,
            JobQualifications: qualifications,
          }
        );
        toast.success(response.message, { autoClose: 2000 });
        handleFormClose();
        fetchData();
      } catch (error) {
        console.error("Error posting job:", error);
        toast.error(error.response.data.message, { autoClose: 2000 });
      } finally {
        setLoading(false);
      }
    }
  };
  const handleUpdateJob = async () => {
    if (!editID) {
      console.error("Job ID is required for update!");
      return;
    }

    const updatedData = {
      ...formData,
      JobResponsibilities: responsibilities,
      JobQualifications: qualifications,
    };

    const url = `${import.meta.env.VITE_API_URL_LOCAL}/updateJob/${editID}`;

    try {
      const response = await putFetch(url, updatedData);
      if (response?.status === 200) {
        toast.success(response.data.message, { autoClose: 2000 });
        handleFormClose();
        fetchData();
      } else {
        toast.error(response.data.message, { autoClose: 2000 });
      }
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error(error.response.data.message, { autoClose: 2000 });
    }
  };
  const handleEditJob = (jobData) => {
    if (jobData) {
      setOpen(true);
      setFormData({
        JobName: jobData.JobName || "",
        JobExperience: jobData.JobExperience || "",
        SalaryRange: jobData.SalaryRange || "",
        JobName: jobData.JobName || "",
        JobExperience: jobData.JobExperience || "",
        SalaryRange: jobData.SalaryRange || "",
        EndDate: jobData.EndDate || "",
        JobType: jobData.JobType || "",
        JobLocation: jobData.JobLocation || "",
        JobDescription: jobData.JobDescription || "",
      });
      setEditID(jobData.id);
      setResponsibilities(jobData.JobResponsibilities);
      setQualifications(jobData.JobQualifications);
    }
  };
  const handleReset = () => {
    setFormData({
      JobName: "",
      JobExperience: "",
      SalaryRange: "",
      EndDate: "",
      JobType: "",
      JobLocation: "",
      JobDescription: "",
    });
    setEditID(0);
    setErrors({});
    setQualifications([]);
    setResponsibilities([]);
  };
  const tableHeader = [
    {
      id: "Sr No",
      numeric: false,
      disablePadding: true,
      label: "Sr No",
    },
    {
      id: "Name",
      numeric: false,
      disablePadding: true,
      label: "Name",
    },
    {
      id: "ApplicationDate",
      numeric: false,
      disablePadding: true,
      label: "ApplicationDate",
    },
    {
      id: "Email",
      numeric: false,
      disablePadding: true,
      label: "Email",
    },
    {
      id: "Mobile",
      numeric: false,
      disablePadding: true,
      label: "Mobile",
    },
    {
      id: "Status",
      numeric: false,
      disablePadding: true,
      label: "Status",
    },
    {
      id: "Scheduled_Date",
      numeric: false,
      disablePadding: true,
      label: "Scheduled_Date",
    },
    {
      id: "Action",
      numeric: false,
      disablePadding: true,
      label: "Action",
      style: { marginLeft: "18px" },
    },
    {
      id: "Resume",
      numeric: false,
      disablePadding: true,
      label: "Resume",
    },
  ];
  // --------------------------------Applicants
  const [approveOpen, setApproveOpen] = useState({
    status: false,
    data: {},
  });
  const handleOpen = (id, status, scheduledDate) => {
    console.log("sdfsf");
    setApproveOpen({
      status: true,
      data: { id, status, scheduledDate },
    });
  };
  const handleClose = () => {
    setApproveOpen({
      status: false,
      data: {},
    });
  };
  const [appliedList, setAppliedList] = useState([]);
  const fetchAppliedList = async (id) => {
    const Applyid = selectedJob?.id ? selectedJob?.id : id;
    const url = `${import.meta.env.VITE_API_URL_LOCAL}/appliedList/${Applyid}`;
    try {
      const response = await getFetch(url);
      if (response?.status === 200) {
        setAppliedList(response.data.data);
      } else {
        toast.error("Error fetching data", { autoClose: 2000 });
      }
    } catch (error) {
      toast.error("Error fetching data", { autoClose: 2000 });
    }
  };
  const handleStatusChange = async () => {
    const { id, status, scheduledDate } = approveOpen.data;
    try {
      const url = `${import.meta.env.VITE_API_URL_LOCAL}/updateStatus/${selectedJob.id}`;
      const response = await putFetchData(url, {
        ApplicantId: id,
        Status: status,
        ScheduledDate: scheduledDate,
      });
      if (response?.status === 200) {
        console.log(response);
        toast.success(response.data.message, { autoClose: 2000 });
        fetchAppliedList(id);
        handleClose();
      } else {
        toast.error(response?.message || "Failed to update status.", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!", {
        autoClose: 2000,
      });
    }
  };
  const userToken = localStorage.getItem("token");

  const downloadResume = async (id, name) => {
    console.log("Downloading resume...");

    const url = `${import.meta.env.VITE_API_URL_LOCAL}/downloadResume/${id}?JobId=${selectedJob.id}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Response Headers:", response.headers.get("content-type"));

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error Response Data:", errorData);
        if (errorData?.message === "No Applicant Found") {
          toast.warning("No applicant found for this job!");
          return;
        }
        throw new Error("Failed to download the resume.");
      }

      const blob = await response.blob();

      if (blob.size === 0) {
        console.error("Empty file received.");
        toast.error("Received an empty file.");
        return;
      }

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);

      toast.success("Resume downloaded successfully!");

      // Ensure fetchAppliedList runs after download completion
      await fetchAppliedList(selectedJob?.id);
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Failed to download the resume.");
    }
  };

  return (
    <div>
      <ConfirmationModal
        open={approveOpen}
        handleClose={handleClose}
        data={approveOpen.data}
        handleConfirm={handleStatusChange}
        message={`Are you sure you want to ${approveOpen?.data?.status?.toLowerCase() || ""} this Applicants?`}
      />
      <MainHeading
        title="Job Post"
        subtitle="Job Post"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <JobPost
        open={open}
        editID={editID}
        errors={errors}
        loading={loading}
        formData={formData}
        onClose={handleFormClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        qualifications={qualifications}
        handleUpdateJob={handleUpdateJob}
        responsibilities={responsibilities}
        setQualifications={setQualifications}
        setResponsibilities={setResponsibilities}
      />
      <div className="job">
        <div className="wrapper">
          <div className="main-container">
            <div className="searched-jobs">
              <Grid container>
                {!showDetails ? (
                  <Grid item xs={12}>
                    <Grid
                      item
                      xs={10.7}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px",
                        height: "90px",
                      }}
                    >
                      <div className="th-btn" onClick={handleFormOpen}>
                        Add New Opening
                      </div>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.6 }}
                      >
                        <JobCard
                          admin={true}
                          jobData={jobData}
                          handleCardClick={handleCardClick}
                          handleEditJob={handleEditJob}
                        />
                      </motion.div>
                    </Grid>
                  </Grid>
                ) : (
                  <React.Fragment>
                    <Grid item lg={12} sm={12} xs={12} order={{ xs: 1, sm: 2 }}>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.8 }}
                      >
                        <JobExplain
                          handleFormOpen={handleFormOpen}
                          selectedJob={selectedJob}
                          ApplicantsTrue={ApplicantsTrue}
                          handleCardBack={handleCardBack}
                        />
                      </motion.div>
                      <Grid
                        item
                        lg={12}
                        sm={12}
                        xs={12}
                        order={{ xs: 1, sm: 2 }}
                        marginTop={5}
                      >
                        <ApplicantTable
                          headCells={tableHeader}
                          rows={appliedList || []}
                          handleOpen={handleOpen}
                          downloadResume={downloadResume}
                        />
                      </Grid>
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
};

export default AdminPostPage;
