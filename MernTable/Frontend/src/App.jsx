import { Box, Button } from "@mui/material";
import "./App.css";
import UserTable from "./components/UserTable";
import { useEffect, useState } from "react";
import axios from "axios";
import UserModal from "./components/UserModal";

function App() {
  const [userResp, setUserResp] = useState({});
  const [editResp, setEditResp] = useState({});
  const [openAddModel, setOpenAddModel] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // API CALLS
  const fetchData = async () => {
    const users = await axios.get("http://localhost:5000/user/v1/getUser");
    setUserResp(users.data);
  };
  // Delete user
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/user/v1/deleteUser/${id}`);
    await fetchData();
  };
  // Add User
  const handelSubmit = async (data) => {
    if (!isEdit) {
      await axios.post(`http://localhost:5000/user/v1/createUser`, data);
    } else {
      await axios.put(
        `http://localhost:5000/user/v1/editUser/${editResp._id}`,
        data
      );
    }
    setEditResp({});
    await fetchData();
    setOpenAddModel(false);
    setIsEdit(false);
  };
  // Edit
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
        deleteUser={deleteUser}
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
    </Box>
  );
}

export default App;
