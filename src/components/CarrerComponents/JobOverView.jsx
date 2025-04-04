import React from "react";
import { Box, Chip } from "@mui/material";

const chipStyle = {
  bgcolor: "#e3f2fd",
  color: "#1976d2",
  fontWeight: 500,
  borderRadius: "7px",
  px: 1,
  transition: "all 0.2s ease",
  "&:hover": {
    bgcolor: "#bbdefb",
    transform: "scale(1.03)",
  },
};

const JobOverView = ({
  showDetails,
  handleCardBack,
  jobData,
  handleCardClick,
}) => {
  function getDaysLeft(endDate) {
    const end = new Date(endDate);
    const today = new Date();

    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 0;
  }
  return (
    <div>
      <div
        className="th-btn"
        style={{ cursor: "pointer", marginBottom: "10px" }}
        onClick={showDetails ? handleCardBack : ""}
      >
        {showDetails ? "← Return to Overview" : "Explore opportunities →"}
      </div>
      {jobData.map((job) => (
        <div
          key={job.id}
          className="job-overview-card"
          style={{
            width: "100%",
            maxWidth: "410px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            marginBottom: "16px",
          }}
          onClick={() => handleCardClick(job)}
        >
          <div
            className="job-card overview-card"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              className="overview-wrapper"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <svg
                viewBox="0 -13 512 512"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#2e2882",
                  padding: "8px",
                  borderRadius: "5px",
                }}
              >
                <g fill="#feb0a5">
                  <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                  <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                </g>
              </svg>

              <div className="overview-detail" style={{ flex: 1 }}>
                <div
                  className="job-card-title"
                  style={{ fontSize: "16px", fontWeight: "550" }}
                >
                  {job.JobName || "No Title"}
                </div>
                <div className="job-card-subtitle" style={{ fontSize: "13px" }}>
                  {job.JobLocation || "No description available."}
                </div>
              </div>
            </div>
            <div
              className="job-overview-buttons"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip label={job.JobType} size="small" sx={chipStyle} />
                <Chip label={job.JobExperience} size="small" sx={chipStyle} />
              </Box>
              <div
                className="job-stat"
                style={{ fontSize: "12px", fontWeight: "500" }}
              >
                {job.JobStatus}
              </div>
              <div className="job-day" style={{ fontSize: "12px" }}>
                {getDaysLeft(job.EndDate) > 0
                  ? `${getDaysLeft(job.EndDate)}d`
                  : "Expired"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobOverView;
