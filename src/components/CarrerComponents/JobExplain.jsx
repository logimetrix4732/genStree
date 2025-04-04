import React from "react";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import CarrerBackgound from "../../Imges/CarrerBackgound.png";

const JobExplain = ({
  handleFormOpen,
  selectedJob,
  ApplicantsTrue,
  handleCardBack,
}) => {
  function getDaysLeft(endDate) {
    const end = new Date(endDate);
    const today = new Date();

    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 0;
  }

  return (
    <div className="job-explain">
      <img
        src={CarrerBackgound}
        className="job-bg"
        alt=""
        loading="lazy"
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <div className="job-logos">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            backgroundColor: "#f76754",
            padding: 5,
          }}
        >
          <path d="M0 .5h4.2v23H0z" fill="#042b48" />
          <path
            d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
            fill="#fefefe"
          />
        </svg>
      </div>
      <div className="job-explain-content">
        <div className="job-title-wrapper">
          <Typography variant="h5" fontWeight={500}>
            {selectedJob.JobName}
          </Typography>
          <div className="job-action">
            <IconButton>
              <svg
                className="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
              </svg>
            </IconButton>

            <span
              className="th-btn"
              onClick={
                ApplicantsTrue === true ||
                new Date(selectedJob.EndDate) < new Date()
                  ? handleCardBack
                  : handleFormOpen
              }
            >
              {ApplicantsTrue === true ||
              new Date(selectedJob.EndDate) < new Date()
                ? "Go Back"
                : "Apply Now"}
            </span>
          </div>
        </div>
        <div className="job-subtitle-wrapper">
          <Typography variant="subtitle1" color="textSecondary">
            GenStree{" "}
            <span className="comp-location">
              Lucknow, Uttar Pradesh 226010.
            </span>
          </Typography>

          <Typography variant="body2" color="textSecondary">
            &nbsp; Post &nbsp;
            {getDaysLeft(selectedJob.EndDate) > 0
              ? `${getDaysLeft(selectedJob.EndDate)} days left`
              : "Expired"}
          </Typography>
        </div>
        <Grid container spacing={2} sx={{ my: 0.4 }}>
          {[
            { title: "Experience", value: `Min ${selectedJob.JobExperience}` },
            { title: "Job ID", value: selectedJob.JobId },
            { title: "Employee Type", value: `${selectedJob.JobType} Jobs` },
            { title: "Offer Salary", value: selectedJob.SalaryRange },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box p={2} border={1} borderColor="#ddd" borderRadius={2}>
                <Typography variant="body2" fontWeight={500}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" fontWeight={500} sx={{ mt: 5, mb: 0.4 }}>
          Job Description
        </Typography>
        <Typography
          variant="body2"
          sx={{
            lineHeight: "2em",
            color: "#6c757d",
            letterSpacing: "0.5px",
          }}
        >
          {selectedJob.JobDescription}
        </Typography>
        <Typography variant="h6" fontWeight={500} sx={{ mt: 2, mb: 0.4 }}>
          Responsibilities
        </Typography>
        {selectedJob.JobResponsibilities.map((point, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}
          >
            <Typography variant="body2" color="textSecondary">
              🔹
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {point}
            </Typography>
          </Box>
        ))}
        <Typography variant="h6" fontWeight={500} sx={{ mt: 2, mb: 0.4 }}>
          Qualification
        </Typography>
        {selectedJob.JobQualifications.map((point, index) => (
          <Typography
            key={index}
            variant="body2"
            color="textSecondary"
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              🔹
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {point}
            </Typography>
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default JobExplain;
