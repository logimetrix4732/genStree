import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
  Stack,
  Grid,
  Tooltip,
} from "@mui/material";
import jobNotFound from "../../Imges/jobNotFound.gif";
import { ContentCopy } from "@mui/icons-material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
const JobCard = ({ handleCardClick, jobData = [], admin, handleEditJob }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const jobs = Array.isArray(jobData) && jobData.length > 0 ? jobData : [];

  const [copiedState, setCopiedState] = useState({});

  const handleCopy = (jobId) => {
    const jobUrl = `${window.location.origin}/CarrerPage`;
    navigator.clipboard.writeText(jobUrl).then(() => {
      setCopiedState((prevState) => ({
        ...prevState,
        [jobId]: true,
      }));

      setTimeout(() => {
        setCopiedState((prevState) => ({
          ...prevState,
          [jobId]: false,
        }));
      }, 2000);
    });
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: 1450,
        margin: "auto",
        display: "flex",
        justifyContent: "start",
      }}
    >
      {jobs.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
          <Card
            sx={{
              width: "100%",
              transition: "all 0.3s ease",
              transform:
                hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
              boxShadow:
                hoveredIndex === index
                  ? "0 12px 24px rgba(0,0,0,0.12)"
                  : "0 2px 8px rgba(0,0,0,0.08)",
              borderRadius: 3,
              overflow: "hidden",
              border: "none",
              position: "relative",
              zIndex: hoveredIndex === index ? 10 : 1,
              margin: "10px 0",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#3730a3",
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    transform:
                      hoveredIndex === index ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="#feb0a5"
                    width="28"
                    height="28"
                  >
                    <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5z" />
                  </svg>
                </Box>
                <Tooltip
                  title={copiedState[job.id] ? "Copied!" : "Copy URL"}
                  arrow
                >
                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "color 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      "&:hover": {
                        color: "text.primary",
                      },
                    }}
                    onClick={() => handleCopy(job.id)}
                  >
                    {!copiedState[job.id] ? (
                      <ContentCopy fontSize="small" />
                    ) : (
                      <PlaylistAddCheckIcon fontSize="small" />
                    )}
                    {copiedState[job.id] ? "Copied!" : "Copy URL"}
                  </Typography>
                </Tooltip>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  mb: 1,
                  letterSpacing: "-0.01em",
                  fontSize: "1.25rem",
                }}
              >
                {job.JobName || "No Title"}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  lineHeight: 1.5,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  fontSize: "0.875rem",
                  maxWidth: "100%",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  flexGrow: 1,
                }}
              >
                {job.JobDescription || "No description available."}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  mb: 3,
                }}
              >
                <Chip
                  label={job.JobType || "Full-Time"}
                  size="small"
                  sx={{
                    bgcolor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: 500,
                    borderRadius: "16px",
                    px: 1,
                  }}
                />
                <Chip
                  label={job.JobExperience || "Experience Required"}
                  size="small"
                  sx={{
                    bgcolor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: 500,
                    borderRadius: "16px",
                    px: 1,
                  }}
                />
                <Chip
                  label={job.JobId || "Job Id"}
                  size="small"
                  sx={{
                    bgcolor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: 500,
                    borderRadius: "16px",
                    px: 1,
                  }}
                />
              </Box>

              <Stack direction="row" spacing={1}>
                <div
                  className="th-btn"
                  onClick={() => {
                    if (admin) {
                      handleEditJob(job);
                    } else {
                      handleCardClick(job);
                    }
                  }}
                >
                  {admin ? "Update Now" : "Apply Now"}
                </div>
                {admin && (
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: "text.secondary",
                      borderColor: "divider",
                      borderRadius: 2,
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      textTransform: "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: "#f5f5f5",
                        borderColor: "#bdbdbd",
                        transform: "scale(1.02)",
                      },
                    }}
                    onClick={() => handleCardClick(job)}
                  >
                    Applicants
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {!jobData.length > 0 && (
        <Box
          sx={{
            maxWidth: 1450,
            margin: "auto",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <img
            src={jobNotFound}
            alt="No Jobs Found"
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      )}
    </Grid>
  );
};

export default JobCard;
