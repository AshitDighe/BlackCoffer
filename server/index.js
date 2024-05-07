// server.js
import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dataRoutes from "./routes/dataRoutes.js"
//const express = require("express");
//const mongoose = require("mongoose");
//const cors = require("cors"); // Import the cors middleware
//const dataRoutes = require("./routes/dataRoutes"); // Import your data routes

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin2:admin123@cluster0.gebc28g.mongodb.net/Blackcoffer?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use data routes
app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
