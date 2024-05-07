// server/routes/dataRoutes.js
import express from "express"
//const express = require('express');
const router = express.Router();
import Data from "../models/data.js"
//const Data = require('../models/data'); // Import your data model here

// Route to fetch all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find(); // Fetch all data from MongoDB
    res.json(data);
    console.log(Data)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
