import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'; // Cookie parser
import Food from './Model/food.model.js'; // Food model
import userModel from './Model/auth.model.js'; // User model
import isLoggedIn from './middleware/login.js'; // Authentication middleware

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser()); // Use cookie parser middleware

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',  // Replace with React app URL in production
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  credentials: true,  // Allow cookies
};
app.use(Cors(corsOptions));

const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURI;

// MongoDB connection
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB connection error', err));

// Routes
app.get("/", isLoggedIn, async (req, res) => {
  try {
    const food = await Food.find();
    res.status(200).json({ message: "Food fetched successfully", data: food });
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  const { name, price, description, img } = req.body;
  await Food.create({ name, price, description, img });
  res.status(200).json({ message: "Food created successfully" });
});

app.get("/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json({ message: "Data fetched successfully", data: food });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/:id", async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Deleted successfully" });
});

app.patch("/:id", async (req, res) => {
  const { name, price, description, img } = req.body;
  await Food.findByIdAndUpdate(req.params.id, { name, price, description, img }, { new: true });
  res.status(200).json({ message: "Updated successfully" });
});

// User Registration
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({ name, email, password: hashedPassword });
    res.status(201).send("User created");
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).send("Error creating user");
  }
});

// User Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).send('User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).send('Invalid password');

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.cookie('authToken', token, {
      httpOnly: true, // Prevent access via JavaScript
      secure: process.env.NODE_ENV === 'production', // Enable in production
      maxAge: 3600000 // 1 hour
    });

    res.status(200).json({ message: "User logged in successfully", data: { email: user.email } });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal server error");
  }
});

// User Logout
app.post('/logout', (req, res) => {
  res.clearCookie('authToken');
  res.status(200).json({ message: "User logged out successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
