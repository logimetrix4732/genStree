import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const ConfirmationModal = ({
  open,
  handleClose,
  data,
  handleConfirm,
  message,
}) => {
  return (
    <Dialog
      open={open.status}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <DialogTitle id="alert-dialog-title">
        {`Confirm ${data?.status}?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
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
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          style={{
            backgroundColor: "#4786e6",
            color: "#fff",
            border: "none",
            height: "40px",
            width: "90px",
            borderRadius: "6px",
            fontWeight: "bold",
            boxShadow: "0px 4px 12px rgba(70, 130, 180, 0.3)",
          }}
          onClick={() => handleConfirm(data.id, data.status)}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
