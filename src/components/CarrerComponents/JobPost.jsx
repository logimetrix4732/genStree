import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  DialogActions,
  DialogContent,
  useMediaQuery,
  Grid,
  MenuItem,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import Responsibilities from "./Responsibilities";

const JobPost = ({
  open,
  onClose,
  editID,
  formData,
  handleChange,
  errors,
  responsibilities,
  setResponsibilities,
  loading,
  qualifications,
  setQualifications,
  handleSubmit,
  handleUpdateJob,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <Drawer
      anchor={isLargeScreen ? "right" : "bottom"}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "90%", sm: "70%", md: "40%", lg: "20%" },
          height: { xs: "auto", md: "100%" },
          maxHeight: { xs: "80vh", md: "100%" },
          boxShadow: 4,
          borderRadius: { xs: "16px 16px 0 0", md: 0 },
          backgroundColor: "#ffffff",
          margin: "auto",
          bottom: 0,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={onClose}
        >
          <KeyboardBackspaceIcon sx={{ mr: 2 }} />
          <Typography variant="h6" fontWeight="bold">
            Post a Job
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ overflowY: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label>Job Name</label>
            <TextField
              fullWidth
              size="small"
              name="JobName"
              value={formData.JobName}
              onChange={handleChange}
              error={!!errors.JobName}
              helperText={errors.JobName}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Experience</label>
            <TextField
              fullWidth
              size="small"
              name="JobExperience"
              value={formData.JobExperience}
              onChange={handleChange}
              error={!!errors.JobExperience}
              helperText={errors.JobExperience}
            />
          </Grid>
          <Grid item xs={6}>
            <label>CTC</label>
            <TextField
              fullWidth
              size="small"
              name="SalaryRange"
              value={formData.SalaryRange}
              onChange={handleChange}
              error={!!errors.SalaryRange}
              helperText={errors.SalaryRange}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Last Date to Apply</label>
            <TextField
              fullWidth
              size="small"
              type="date"
              name="EndDate"
              value={formData.EndDate}
              onChange={handleChange}
              error={!!errors.EndDate}
              helperText={errors.EndDate}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Job Type</label>
            <TextField
              select
              fullWidth
              size="small"
              name="JobType"
              value={formData.JobType}
              onChange={handleChange}
              error={!!errors.JobType}
              helperText={errors.JobType}
            >
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <label>Location</label>
            <TextField
              fullWidth
              size="small"
              name="JobLocation"
              value={formData.JobLocation}
              onChange={handleChange}
              error={!!errors.JobLocation}
              helperText={errors.JobLocation}
            />
          </Grid>
          <Grid item xs={12}>
            <label>Description</label>
            <TextField
              fullWidth
              size="small"
              multiline
              name="JobDescription"
              value={formData.JobDescription}
              onChange={handleChange}
              error={!!errors.JobDescription}
              helperText={errors.JobDescription}
            />
          </Grid>
          <Grid item xs={12}>
            <Responsibilities
              title="Responsibilities"
              items={responsibilities}
              setItems={setResponsibilities}
              loading={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <Responsibilities
              title="Qualifications"
              items={qualifications}
              setItems={setQualifications}
              loading={loading}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            maxWidth: "310px",
            fontWeight: "bold",
            p: 1.5,
            borderRadius: "10px",
            backgroundColor: "#4786e6",
          }}
          disabled={loading}
          onClick={() => {
            if (editID) {
              handleUpdateJob();
            } else {
              handleSubmit();
            }
          }}
        >
          {editID ? "Update Job" : "Apply Job"}
        </Button>
      </DialogActions>
    </Drawer>
  );
};

export default JobPost;
