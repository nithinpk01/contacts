const { Schema, model, default: mongoose } = require("mongoose");

const Contacts = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: [true, "Please enter the name"]
    },
    mobile: {
        type: Number,
        required: [true, "Please enter the mobile"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: true
    }
}, { timestamps: true });

module.exports = model("Contact", Contacts);
