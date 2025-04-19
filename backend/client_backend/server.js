const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const adminRoutes = require('./routes/adminRoutes');
const trustRoutes = require('./routes/trustRoutes');
const aboutUsRoutes = require('./routes/aboutUsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(cors());
/*app.use(express.json());

// Verify if routes are correct
console.log(itemRoutes); // <-- Add this to debug

app.use('/api/items', itemRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/trust', trustRoutes);
app.use('/api/about-us', aboutUsRoutes);
*/
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rentalDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});

console.log(itemRoutes);
console.log(reviewRoutes);
console.log(adminRoutes);
console.log(trustRoutes);
console.log(aboutUsRoutes);
