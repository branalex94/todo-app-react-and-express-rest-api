require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
const userRoute = require("./routes/user");
const todosRoute = require("./routes/todo");

// middleware
app.use(express.json());
app.use(cors("*"));

// routes
app.use("/api/user", userRoute);
app.use("/api/todos", todosRoute);

// db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

app.listen(PORT, () => {
  console.log("Server listening");
});
