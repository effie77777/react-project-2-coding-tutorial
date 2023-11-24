const express = require("express");
const router = express.Router();
const Instructor = require("../models/index").Instructor;
const Course = require("../models/index").Course;


router.get("/search", async(req, res) => {
    await Course.find({}).populate("instructor")
    .then((data) => {
        let newData = [...data]; //專門傳 instructor profile 以外的所有資料
        let profile = []; //專門傳 instructor profile
        for (let i = 0; i < data.length; i ++) {

            //將 instructor profile 的資料類型從原本的 Buffer 轉成 String
            let rawBuffer = data[i].instructor.profile.toString("base64");
            let bufferToString = "data:image/png;base64," + rawBuffer;
            profile.push(bufferToString);

            // instructor profile 以外的資料的部分
            let { _id, name, simpleBio, education, workingExp, language, languageLevel } = newData[i].instructor; //原本 instructor 這個 object 當中包含 _id, name, profile 三個屬性，但我們只需要前兩個
            newData[i].instructor = { _id, name, simpleBio, education, workingExp, language, languageLevel }; //指定讓 { _id, name } 覆寫掉原本 instructor 的值，也就是拿掉 profile 這個屬性的意思
        }
        return res.json({ newData, profile }); //解構賦值的寫法，回傳一個 object
    })

    .catch((e) => {
        console.log("error");
        return res.status(400).send(e);
    })  
})


router.post("/enroll", async(req, res) => {
    let { studentId, courseId } = req.body;
    await Course.findOne({ _id: courseId })
    .then((foundCourse) => {
        if (!foundCourse) {
            return res.status(400).send("查無此課程");
        } else if (foundCourse && studentId) {
            let hasEnrolled = []; //只有當該課程學生人數 > 0 的時候才會跑下面的 if 區塊，若該課程學生人數 === 0 則會維持 empty array
            if (foundCourse.students.length > 0) {
                hasEnrolled = foundCourse.students.filter((i) => i === studentId);
            }
            if (hasEnrolled.length === 0) { // (1)該課程學生人數 === 0 或 (2)該課程學生人數 > 0 但這個學生之前還沒註冊過該課程
                foundCourse.students.push(studentId);
                foundCourse.save()
                .then((d) => {
                    console.log("saved successfully!");
                    return res.send(d);
                })
                .catch((e) => {
                    console.log(e);
                    return res.status(400).send("出了一些問題...");
                })    
            }    
        }
    })
    .catch((e) => {
        console.log(e);
        return res.status(400).send("出了一些問題...");
    })

})

module.exports = router;