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
  Backdrop,
  Dialog,
  DialogTitle,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";
import carrerLoder from "../../Imges/carrerLoder.gif";
import checkStatus from "../../Imges/checkStatus.gif";
import { getFetch } from "../../api/Api";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CarrerForm = ({
  open,
  onClose,
  loading,
  formData,
  handleChange,
  errors,
  handleFileChange,
  selectedFile,
  handleSubmit,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [statusForm, setStatusForm] = useState({ jobId: "", phone: "" });
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [errorCheck, setErrorCheck] = useState(false);

  const handleCloseCheck = () => {
    setStatusDialogOpen(false);
    setStatusForm({ jobId: "", phone: "" });
    setApplicationStatus(null);
    setErrorCheck(false);
  };

  const handleStatusChange = (e) => {
    setStatusForm({ ...statusForm, [e.target.name]: e.target.value });
    setErrorCheck(false);
  };

  const validateForm = () => {
    if (!statusForm.jobId.trim() || !/^\d{10}$/.test(statusForm.phone)) {
      setErrorCheck(true);
      return false;
    }
    return true;
  };

  const handleCheckStatus = async () => {
    if (!validateForm()) return;

    const { jobId, phone } = statusForm;

    try {
      const url = `${import.meta.env.VITE_API_URL_LOCAL}/getApplicationStatus/?PhoneNumber=${phone}&JobId=${jobId}`;
      const response = await getFetch(url);

      console.log(response);
      if (response.data.custom) {
        setApplicationStatus(response.data.data.Status);
      } else {
        setApplicationStatus(response.response.data.message);
      }
    } catch (error) {
      setApplicationStatus("Application not found");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Success":
        return "#d4edda";
      case "Pending":
        return "#fff3cd";
      case "Rejected":
        return "#f8d7da";
      case "Scheduled":
        return "#d1ecf1";
      default:
        return "#ffecb3";
    }
  };

  return (
    <>
      <Drawer
        anchor={isLargeScreen ? "right" : "bottom"}
        open={open}
        onClose={onClose}
        TransitionComponent={Slide}
        transitionDuration={300}
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
        {loading && (
          <Backdrop
            open={loading}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={carrerLoder}
              alt="Loading..."
              loading="lazy"
              style={{ width: "180px", height: "180px" }}
            />
          </Backdrop>
        )}
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
              Apply for this Job
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ overflowY: "auto" }}>
          <label>Full Name</label>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ mb: 2, backgroundColor: "white" }}
          />

          <label>Last Name</label>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={{ mb: 2, backgroundColor: "white" }}
          />

          <label>Email</label>
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            size="small"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2, backgroundColor: "white" }}
          />

          <label>Phone Number</label>
          <TextField
            fullWidth
            variant="outlined"
            type="tel"
            size="small"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{ mb: 2, backgroundColor: "white" }}
          />
          <TextField
            fullWidth
            multiline
            variant="outlined"
            placeholder="Write a message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
          />
          <Box
            sx={{
              border: "2px dashed #86abe4",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              mb: 2,
              "&:hover": { backgroundColor: "#e1eaff" },
            }}
          >
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }}
              id="cv-upload"
              onChange={handleFileChange}
            />
            <label htmlFor="cv-upload">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CloudUploadIcon color="primary" fontSize="large" />
                <Typography color="gray">
                  {selectedFile
                    ? selectedFile.name
                    : "Click to Upload CV (PDF only)"}
                </Typography>
                {errors.selectedFile && (
                  <Typography color="error">{errors.selectedFile}</Typography>
                )}
              </Box>
            </label>
          </Box>
          <p
            style={{
              textAlign: "center",
              fontSize: "16px",
              color: "#3f3f42",
              marginTop: "10px",
              padding: "5px",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#4786e6")}
            onMouseLeave={(e) => (e.target.style.color = "#3f3f42")}
            onClick={() => setStatusDialogOpen(true)}
          >
            Already applied? Check status here
          </p>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              maxWidth: "310px",
              fontWeight: "bold",
              p: 1.5,
              borderRadius: "10px",
              backgroundColor: "#4786e6",
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            Apply Job
          </Button>
        </DialogActions>
      </Drawer>
      {/* Status Check Dialog */}
      <Dialog
        open={statusDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseCheck}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: 2,
            padding: 1,
            width: "400px",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          Check Application Status
        </DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={checkStatus} alt="Check Status" loading="lazy" />
        </Box>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <label>Job ID</label>
            <TextField
              fullWidth
              name="jobId"
              size="small"
              value={statusForm.jobId}
              onChange={handleStatusChange}
              variant="outlined"
              sx={{ mb: 2, backgroundColor: "white" }}
              error={errorCheck && !statusForm.jobId.trim()}
              helperText={
                errorCheck && !statusForm.jobId.trim()
                  ? "Job ID is required."
                  : ""
              }
            />
            <label>Phone Number</label>
            <TextField
              fullWidth
              name="phone"
              size="small"
              value={statusForm.phone}
              onChange={handleStatusChange}
              variant="outlined"
              sx={{ mb: 2, backgroundColor: "white" }}
              error={errorCheck && !/^\d{10}$/.test(statusForm.phone)}
              helperText={
                errorCheck && !/^\d{10}$/.test(statusForm.phone)
                  ? "Phone number must be 10 digits."
                  : ""
              }
            />
          </Box>
          {applicationStatus && (
            <Box
              sx={{
                backgroundColor: getStatusColor(applicationStatus),
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "800",
                color: "#545148",
              }}
            >
              Application Status: {applicationStatus}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              backgroundColor: "#e05c43",
              color: "#fff",
              border: "none",
              height: "40px",
              width: "90px",
              borderRadius: "6px",
            }}
            onClick={handleCloseCheck}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#4786e6",
              color: "#fff",
              border: "none",
              height: "40px",
              width: "130px",
              borderRadius: "6px",
              fontWeight: "bold",
              boxShadow: "0px 4px 12px rgba(70, 130, 180, 0.3)",
            }}
            onClick={handleCheckStatus}
          >
            Check Status
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CarrerForm;
