import { Box, Button, Modal, Typography } from "@mui/material";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

const inputDiv = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

import { useForm } from "react-hook-form";
const UserModal = ({ handleClose, open, submit, seleCtedCellValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: seleCtedCellValue.name || "",
      email: seleCtedCellValue.email || "",
      mobile: seleCtedCellValue.mobile || "",
      dateOfBirth: seleCtedCellValue.dateOfBirth || "",
    },
  });

  const handelSubmitReset = (data) => {
    submit(data);
    reset();
  };

  useEffect(() => {
    const user = {
      name: seleCtedCellValue.name || "",
      email: seleCtedCellValue.email || "",
      mobile: seleCtedCellValue.mobile || "",
      dateOfBirth: seleCtedCellValue.dateOfBirth || "",
    };
    reset(user);
  }, [seleCtedCellValue]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Or Edit
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit(handelSubmitReset)}>
            {/* Name */}
            <div style={inputDiv}>
              <label>Name</label>
              <input
                {...register("name", { required: "name is required" })}
                placeholder="Enter Your Name"
              />
              <p style={{ color: "red" }}>{errors.name?.message}</p>
            </div>
            {/*Email  */}
            <div style={inputDiv}>
              <label>Email</label>
              <input
                {...register("email", { required: "email is required" })}
                placeholder="Enter Your Email"
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>
            {/* Phone */}
            <div style={inputDiv}>
              <label>Phone</label>
              <input
                {...register("mobile", { required: "phone is required" })}
                placeholder="Enter Your Phone"
              />
              <p style={{ color: "red" }}>{errors.mobile?.message}</p>
            </div>
            {/* DOB */}
            <div style={inputDiv}>
              <label>Date of Birth</label>
              <input
                {...register("dateOfBirth", { required: "DOB is required" })}
                placeholder="Enter Your DOB"
              />
              <p style={{ color: "red" }}>{errors.dateOfBirth?.message}</p>
            </div>
            <Button type="submit">Submit</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default UserModal;
