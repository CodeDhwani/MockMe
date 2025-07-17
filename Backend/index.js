const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse application/json

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "MockMe backend is running!" });
});

// Mount your routes here
// app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`MockMe server started on port ${PORT}`);
});
