import jwt from 'jsonwebtoken';

// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {
    const token = req.cookies.authToken; // Get token from cookies

    if (!token) {
        return res.status(401).json({ message: "You must be logged in to access this route" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user info to the request object
        req.user = decoded;

        next(); // Allow access to the next middleware/route handler
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

export default isLoggedIn;
