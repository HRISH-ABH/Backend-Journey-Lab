const express = require("express");
const userRouter = require("./routes/user.routes");
const dotenv = require("dotenv");
const connectToDb = require("./config/db");
dotenv.config(); //pure app me access.  ----ye top pr rakha karo
connectToDb();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); //accessing html pages

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server started at 3000");
});
