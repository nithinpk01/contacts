const { Schema, model } = require("mongoose");

const User = new Schema({
    username: {
        type: String,
        required: [true, "Please enter the name"]
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: [true,"Email address exist"]
    }
}, { timestamps: true });

module.exports = model("User", User);
