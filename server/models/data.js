// models/Data.js
import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String
});

export default mongoose.model('Data', dataSchema);
