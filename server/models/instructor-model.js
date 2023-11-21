const mongoose = require("mongoose");
const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    simpleBio: {
        type: String,
        required: true,
    },
    profile: {
        type: Buffer,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    workingExp: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    languageLevel: {
        type: String,
        required: true,
    }
})

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;