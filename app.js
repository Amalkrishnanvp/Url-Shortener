const express = require("express");

const app = express();
const port = 1000;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// view engine setup
app.set("view engine", "hbs");

app.use(express.json());

app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/shorten", usersRouter);

app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
