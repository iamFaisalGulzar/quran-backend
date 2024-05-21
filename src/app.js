require("dotenv").config();
const express = require('express');
const cors = require('cors');
const quranRoutes = require('./routes/quran.routes');
const userRouter = require('./routes/user.routes.js');
const connectDB = require('./db/index.js')

const app = express();

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/quran', quranRoutes);
app.use('/api/auth', userRouter);

module.exports = app;
