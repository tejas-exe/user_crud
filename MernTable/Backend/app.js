const express = require("express");
const dbConnect = require("./utils/dbConnection");
const cors = require("cors");
const PORT = 5000;
const app = express();
// For Accepting json
app.use(express.json());
// db connection
dbConnect();

// to avoid corse error
app.use(cors());

// router that are required from controllers
const userRouter = require("./router/userRouter");

//routs in api
app.use("/user/v1", userRouter);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
