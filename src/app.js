const express = require("express");
const app = express();
require("./database/conn");

const port = process.env.PORT || 3000;
const uploadRouter = require("./user");

app.use(express.json());
app.use("/", uploadRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
