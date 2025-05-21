import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

const ConfirmationModal = ({ open, handleClose, handleDelete }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>Are you sure you want to delete this user?</Typography>
        <Button onClick={handleDelete}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
