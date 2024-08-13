const express = require("express");

const app = express();
const port = 1000;

const indexRouter = require("./routes/index");

// view engine setup
app.set("view engine", "hbs");

app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
