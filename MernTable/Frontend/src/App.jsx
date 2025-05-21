import { Box, Button } from "@mui/material";
import "./App.css";
import UserTable from "./components/UserTable";
import { useEffect, useState } from "react";
import axios from "axios";
import UserModal from "./components/UserModal";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const baseUrl = "http://localhost:5000/user/v1";
  const [userResp, setUserResp] = useState({});
  const [editResp, setEditResp] = useState({});
  const [openAddModel, setOpenAddModel] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const resetState = () => {
    setEditResp({});
    setOpenAddModel(false);
    setIsEdit(false);
    setOpenDeleteModal(false);
    setDeleteId("");
  };

  // API CALLS
  const fetchData = async () => {
    const users = await axios.get(`${baseUrl}/getUser`);
    setUserResp(users.data);
  };
  // Delete user state management
  const handelDeleteConfirmation = (id) => {
    setOpenDeleteModal(true);
    setDeleteId(id);
  };
  // Delete user
  const deleteUser = async (id) => {
    await axios.delete(`${baseUrl}/deleteUser/${id}`);
    await fetchData();
    resetState();
  };

  // Add User and Edit User
  const handelSubmit = async (data) => {
    if (!isEdit) {
      await axios.post(`${baseUrl}/createUser`, data);
    } else {
      await axios.put(`${baseUrl}/editUser/${editResp._id}`, data);
    }
    await fetchData();
    resetState();
  };

  // Edit state management
  const handelEdit = (data) => {
    setEditResp(data);
    setIsEdit(true);
    setOpenAddModel(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userRow = userResp?.data?.map((item) => {
    return { id: JSON.stringify(item._id), ...item };
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button
        onClick={() => {
          setOpenAddModel(true);
        }}
      >
        Add New User
      </Button>
      <UserTable
        users={userRow}
        deleteUser={handelDeleteConfirmation}
        handelEdit={handelEdit}
      />
      <UserModal
        open={openAddModel}
        handleClose={() => {
          setOpenAddModel(false);
        }}
        submit={handelSubmit}
        seleCtedCellValue={editResp}
      />
      <ConfirmationModal
        open={openDeleteModal}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
        handleDelete={() => deleteUser(deleteId)}
      />
    </Box>
  );
}

export default App;
