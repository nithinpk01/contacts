const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc getAllUsers
// @route GET api/user
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}, '-password'); // Excluding the 'password' field
    res.status(200).json({ data: users, status: 'success' });
});

// @desc loginUser
// @route GET api/user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are both required." });
    }

    const user = await User.findOne({ email });

    if (user && bcrypt.compare(password, user.password)) {
        const { username, email, id } = user;
        const accessToken = jwt.sign({ user: { username, email, id } }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
        return res.status(200).json({ token: accessToken });
    }
    return res.status(401).json({ message: "Incorrect email or password." });
};


// @desc registerNewUser
// @route GET api/user
const registerUser = asyncHandler(async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ error: "All fields are mandatory" });
    }

    const isUserAvailable = await User.findOne({ email });
    if (isUserAvailable) {
        return res.status(400).json({ error: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, email });

    if (user) {
        const userResponse = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
        return res.status(201).json({ data: userResponse, status: 'success' });
    } else {
        return res.status(400).json({ error: "Unable to create user" });
    }
});

module.exports = { getUsers, loginUser, registerUser };