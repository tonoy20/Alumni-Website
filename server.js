import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";

//db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";

// middleware
import notFoundMIddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
import mongoose from "mongoose";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", authenticateUser, jobsRoutes);

app.use(notFoundMIddleware);
app.use(errorHandlerMiddleware);

// strict query deprecation warning
mongoose.set("strictQuery", false);

const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Server running on port ${port}...`);
// })

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`MongoDB Connected on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
