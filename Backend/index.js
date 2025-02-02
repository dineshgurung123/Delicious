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

const app = express();
app.use(express.json());
app.use(Cors());
app.use(cookieParser()); // Use cookie parser middleware

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

app.use(cookieParser());

app.get("/", isLoggedIn,  async(req, res) => {
    try {
        const food = await Food.find();
        res.status(200).json({
            message: "Food fetched successfully",
            data: food
        });
    } catch (error) {
        console.log(error);
    }Q
});

app.post("/", async(req, res) => {
    const { name, price, description, img } = req.body;
    await Food.create({
        name,
        price,
        description,
        img
    });
    res.status(200).json({
        message: "Food creation api hit successfully"
    });
});



app.get("/:id", async(req, res) => {
    try {
        const id = req.params.id.trim();
        const food = await Food.findById(id);
        res.status(200).json({
            message: "Data fetched successfully",
            data: food
        });
    } catch (error) {
        console.log(error);
    }
});

app.delete("/:id", async(req, res) => {
    const id = req.params.id.trim();
    await Food.findByIdAndDelete(id);
    res.status(200).json({
        message: "Deleted successfully"
    });
});

app.patch("/:id", async(req, res) => {
    const id = req.params.id;
    const { name, img, price, description } = req.body;
    await Food.findByIdAndUpdate(id, {
        name: name,
        img: img,
        price: price,
        description: description
    }, { new: true });
    res.status(200).json({
        message: "Updated successfully"
    });
});

app.post('/register', async(req, res) => {
    try {
        const { name, email, password } = req.body;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });
        res.send("User created");
    } catch (error) {
        console.error("Error in user registration service:", error);
    }
});

app.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });

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



app.post('/logout', (req, res)=>{


    res.clearCookie('authToken');
    res.status(200).json({
        message: "User logged out successfully"
    });
})

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
