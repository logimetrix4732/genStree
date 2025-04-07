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
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";

const CreateBlog = ({
  open,
  onClose,
  loading,
  formData,
  handleChange,
  errors,
  handleSubmit,
  selectedFile,
  fileError,
  handleFileChange,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
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
          <Typography>Loading...</Typography>
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
            Create New Blog Post
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ overflowY: "auto" }}>
        <label>Blog Title</label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          name="BlogTitle"
          value={formData.BlogTitle}
          onChange={handleChange}
          error={!!errors.BlogTitle}
          helperText={errors.BlogTitle}
          sx={{ mb: 2, backgroundColor: "white" }}
        />

        <label>Blog Category</label>
        <select
          name="BlogCategory"
          value={formData.BlogCategory}
          onChange={handleChange}
          style={{
            height: "40px",
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "13px",
            background: "#ffffff",
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            paddingRight: "30px",
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='gray'><path d='M7 10l5 5 5-5z'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center",
            backgroundSize: "16px",
          }}
        >
          <option value="" disabled selected hidden></option>
          <option value="Technology">Company & Industry Updates</option>
          <option value="Health">Technology & Innovation</option>
          <option value="Education">Product & Service Insights</option>
          <option value="Business">Developer & Engineering Corner</option>
          <option value="Business">Business & Digital Transformation</option>
          <option value="Business">AI, Data Science & Analytics</option>
          <option value="Business">Career & Work Culture</option>
          <option value="Business">Cybersecurity & Ethical Hacking</option>
        </select>

        {errors.BlogCategory && <p>{errors.BlogCategory}</p>}

        <label>Author Name</label>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          name="AuthorName"
          value={formData.AuthorName}
          onChange={handleChange}
          error={!!errors.AuthorName}
          helperText={errors.AuthorName}
          sx={{ mb: 2, backgroundColor: "white" }}
        />

        <label>Author Email</label>
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

        <TextField
          fullWidth
          multiline
          variant="outlined"
          placeholder="Write a Blog Content..."
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
            "&:hover": { backgroundColor: "#e4f1d3" },
          }}
        >
          <input
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            style={{ display: "none" }}
            id="image-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="image-upload">
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
                {selectedFile ? selectedFile.name : "Click to Upload Image"}
              </Typography>
              {fileError && <Typography color="error">{fileError}</Typography>}
            </Box>
          </label>
        </Box>
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
            backgroundColor: "#7db432",
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          Publish Blog
        </Button>
      </DialogActions>
    </Drawer>
  );
};

export default CreateBlog;
