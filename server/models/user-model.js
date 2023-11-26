const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        maxLength: 60,
    },
    password: {
        type: String,
        // required: true,
        maxLength: 1024,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    googleID: {
        type: Number,
    },
    facebookID: {
        type: Number,
    },
    order: {
        type: Array,
    }
}) 

const User = mongoose.model("User", userSchema);
module.exports = User;