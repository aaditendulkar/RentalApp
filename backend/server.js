const express = require('express');
const cors = require('cors');
require('dotenv').config();

// 🔌 Connect to MongoDB
const connectDB = require('./config/db');

// 🔗 Import Routes
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const adminRoutes = require('./routes/adminRoutes');
const trustRoutes = require('./routes/trustRoutes');
const aboutUsRoutes = require('./routes/aboutUsRoutes');

// 🚀 Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// 🧰 Middleware
app.use(cors());
app.use(express.json());

// 🌐 API Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/trust', trustRoutes);
app.use('/api/about-us', aboutUsRoutes);

// ✅ Connect to Database & Start Server
connectDB();
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
