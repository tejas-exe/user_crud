import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const UserTable = ({ users, deleteUser, handelEdit }) => {
  const columns = [
    { field: "name", headerName: "Name", width: 200, flex: 1 },
    { field: "email", headerName: "Email", width: 200, flex: 1 },
    { field: "mobile", headerName: "Mobile", width: 200, flex: 1 },
    { field: "dateOfBirth", headerName: "Date Of Birth", width: 200, flex: 1 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      flex: 1,
      renderCell: (record) => {
        return (
          <Box>
            <Button
              sx={{ background: "red", color: "white" }}
              onClick={() => {
                deleteUser(record?.row?._id);
              }}
            >
              Delete
            </Button>
            <Button
              sx={{ background: "blue", color: "white" }}
              onClick={() => {
                handelEdit(record?.row);
              }}
            >
              Edit
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={users} columns={columns} />
      </div>
    </Box>
  );
};

export default UserTable;
