const express = require("express");
const router = express.Router();
const Instructor = require("../models/index").Instructor;
const Course = require("../models/index").Course;

// router.get("/post", async(req, res) => {
//     let newCourse = new Course({
//         title: "基礎 PHP",
//         category: "後端語言",
//         description: "用淺顯易懂的方式詳細講解 PHP，並搭配例題實作，讓學員檢核自己對各個概念的認識。",
//         expectToObtain: "1.PHP基本技術 2.PHP程式邏輯 3.PHP新手常犯的錯誤 4. 能實際活用學習到的PHP知識技術",
//         importance: "1.PHP是後端常見、非常實用的語言之一。 2.當你掌握了PHP，你會發現一個全新的世界!",
//         plan: "NT$2000 1堂45分鐘/NT$1800 3堂45分鐘/NT$1500 10堂45分鐘/NT$1100 20堂45分鐘/洽談報價 客製化課程/專案製作",
//         instructor: "65420f62d966db1898f1b054"
//     })
//     await newCourse.save()
//     .then((d) => {
//         console.log("saved! ", d);
//         res.send("thanks!");
//     })
//     .catch((e) => {
//         console.log(e);
//         res.send("ah-oh!");
//     })
// })

/*
Belinda 6541f8c34730d9298d037d06
Venessa 65420e772af8e0eaf674065b
Andy 65420f62d966db1898f1b054
Chloe 6542112f69e75e7ea5b71e3b
*/

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

// app.get("/instructor", async(req, res) => {
//     let newInstructor = new Instructor({
//         name: "Chloe",
//         simpleBio: "1.目前為UI設計師，在設計領域已累積行業將近十年的工作經驗，領域橫跨廣告業、影視業、平面設計、產品視覺設計等，近五年則是主要著重在UI設計上，但同時也跨足一些前端工程的領域。2.興趣是天馬行空地幻想，依照產品或網站性質的不同，去發想適合的設計風格，我相信，若能搭配合適的視覺設計效果，一定能讓宣傳效果事半功倍。",
//         profile: fs.readFileSync("./images/chloe.jpg"),
//         education: "OOO科技大學設計系學士畢業",
//         workingExp: "2015.2-迄今 UI設計師、前端工程師",
//         language: "中文、英文",
//         languageLevel: "(中)精通、(英)普通"
//     });
//     await newInstructor.save()
//     .then((d) => {
//         console.log("saved! ", d);
//     })
//     .catch((e) => {
//         console.log(e);
//     })
//     res.send("thanks!");
// })


module.exports = router;