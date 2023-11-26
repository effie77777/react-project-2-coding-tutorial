const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    category: {
        type: String,
        required: true,
        // enum: ["前端語言", "後端語言", "UI設計", "JavaScript", "HTML", "CSS/SCSS", "React", "Vue", "Angular", "Node.js", "SQL", "Python", "Java", "C++", "PHP"]
    },
    description: {
        type: String,
        required: true,
        // maxLength: 60,
    },
    expectToObtain: {
        type: String,
        required: true,
    },
    importance: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instructor",
        required: true,
    },
    // students: {
    //     type: [String],
    //     required: true,
    // }
})

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;