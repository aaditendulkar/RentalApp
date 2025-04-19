const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const cors = require("cors");

// 🔍 STEP TRACKER LOGS
console.log("🔥 Server file started");

dotenv.config();
console.log("✅ Env loaded");

connectDB();
console.log("📡 DB connection attempted");

const app = express();
console.log("🚀 Express app created");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
const connectDB = require('../config/db');
