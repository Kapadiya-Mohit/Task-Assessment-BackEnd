const express = require("express");
const app = express();
require("./database/conn");
const cors = require("cors");

const port = process.env.PORT || 3000;
const taskRouter = require("./router/task");
const authRouter = require("./router/auth");

app.use(express.json());

// cors origin
const corsOrigin = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOrigin));

// Add router
app.use("/", taskRouter);
app.use("/", authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
