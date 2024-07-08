const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI from .env file
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
app.use('/auth', authRoutes);
app.use('/users', authMiddleware.verifyToken, userRoutes); // protegido por autenticación
app.use('/products', productRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
