import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Food from './Model/food.model.js';
import Cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'; // Add this import
import userModel from './Model/auth.model.js';
import isLoggedIn from './middleware/login.js';
import Feedback from './Model/feedback.model.js';
import axios from 'axios'; // Add axios import here
import { OpenAI } from 'openai'; // Add OpenAI integration

dotenv.config();

const app = express();
app.use(express.json());
app.use(Cors({
    origin: 'http://localhost:5173', // Frontend origin
    credentials: true, // Allow credentials (cookies)
}));
app.use(cookieParser()); // Use cookie parser middleware

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key
});

const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURI;

app.get("/", async (req, res) => {
    try {
        const food = await Food.find();
        res.status(200).json({
            message: "Food fetched successfully",
            data: food
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching food" });
    }
});

app.post("/", async (req, res) => {
    const { name, price, description, img } = req.body;
    try {
        await Food.create({
            name,
            price,
            description,
            img
        });
        res.status(200).json({
            message: "Food creation API hit successfully"
        });
    } catch (error) {
        console.error("Error creating food item:", error);
        res.status(500).json({ message: "Error creating food item" });
    }
});

// Update chatbot endpoint to use OpenAI API
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // You can also use "gpt-4" if you have access
      messages: [{ role: "user", content: message }],
    });

    const botReply = response.choices[0].message.content;
    res.status(200).json({ reply: botReply });
  } catch (error) {
    console.error("Error communicating with OpenAI API:", error.message);
    res.status(500).json({
      error: "Chatbot service is unavailable at the moment.",
      details: error.message,
    });
  }
});

// Feedback routes
app.get("/feedback", async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        console.log(feedbacks);
        
        res.status(200).json({
            message: "Feedbacks fetched successfully",
            data: feedbacks,
        });
    } catch (error) {
        console.error("Error fetching feedbacks:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/feedback", async (req, res) => {
    try {
        const { name, comment } = req.body;
        const feedback = await Feedback.create({
            name,
            comment,
        });

        res.status(201).json({
            message: "Feedback added successfully",
            data: feedback,
        });
    } catch (error) {
        console.error("Error adding feedback:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// User Authentication
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({ message: "User created", data: newUser });
    } catch (error) {
        console.error("Error in user registration service:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Compare the entered password with the stored hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send('Invalid password');
        }

        // Create a JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET, // Secret key
            { expiresIn: '1h' } // Expiration time
        );

        // Send the token as a cookie
        res.cookie('authToken', token, {
            httpOnly: true, // To prevent access from JavaScript
            secure: process.env.NODE_ENV === 'production', // Secure cookie in production
            maxAge: 3600000 // Cookie expires in 1 hour
        });

        res.status(200).json({
            message: "User logged in successfully",
            data: { email: user.email }
        });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal server error");
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('authToken');
    res.status(200).json({
        message: "User logged out successfully"
    });
});

// Cart Access Route (with authentication)
app.get('/cart', isLoggedIn, (req, res) => {
    res.status(200).json({
        message: "You are logged in and can access the cart.",
    });
});



// CRUD Operations for Food
app.delete("/:id", async (req, res) => {
    const id = req.params.id.trim();
    try {
        await Food.findByIdAndDelete(id);
        res.status(200).json({
            message: "Deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting food item:", error);
        res.status(500).json({ message: "Error deleting food item" });
    }
});

app.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const { name, img, price, description } = req.body;
    try {
        await Food.findByIdAndUpdate(id, {
            name,
            img,
            price,
            description
        }, { new: true });
        res.status(200).json({
            message: "Updated successfully"
        });
    } catch (error) {
        console.error("Error updating food item:", error);
        res.status(500).json({ message: "Error updating food item" });
    }
});

// MongoDB connection
try {
    mongoose.connect(URI);
    console.log("DB connected");
} catch (error) {
    console.log("Error", error);
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
