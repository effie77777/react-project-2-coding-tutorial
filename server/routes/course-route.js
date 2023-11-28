const express = require("express");
const router = express.Router();
const ecpay_payment = require('ecpay_aio_nodejs');
const Course = require("../models/index").Course;
const User = require("../models/index").User;
const { MERCHANTID, HASHKEY, HASHIV, FRONTEND_HOST, BACKEND_HOST } = process.env;
const { ORDER_HASH_SECRET } = process.env;
const options = {
    OperationMode: 'Test', // Test or Production
    MercProfile: {
      MerchantID: MERCHANTID,
      HashKey: HASHKEY,
      HashIV: HASHIV,
    },
    IgnorePayment: [
      //    "Credit",
      //    "WebATM",
      //    "ATM",
      //    "CVS",
      //    "BARCODE",
      //    "AndroidPay"
    ],
    IsProjectContractor: false,
};

router.get("/search", async(req, res) => {
    await Course.find({}).populate("instructor")
    .then((data) => {
        let newData = [...data]; // 專門傳 instructor profile 以外的所有資料
        let profile = []; // 專門傳 instructor profile
        for (let i = 0; i < data.length; i ++) {

            // 將 instructor profile 的資料類型從原本的 Buffer 轉成 String
            let rawBuffer = data[i].instructor.profile.toString("base64");
            let bufferToString = "data:image/png;base64," + rawBuffer;
            profile.push(bufferToString);

            // instructor profile 以外的資料的部分
            let { _id, name, simpleBio, education, workingExp, language, languageLevel } = newData[i].instructor; //原本 instructor 這個 object 當中包含 _id, name, profile 三個屬性，但我們只需要前兩個
            newData[i].instructor = { _id, name, simpleBio, education, workingExp, language, languageLevel }; //指定讓 { _id, name } 覆寫掉原本 instructor 的值，也就是拿掉 profile 這個屬性的意思
        }
        return res.json({ newData, profile }); // 解構賦值的寫法，回傳一個 object    
    })
    .catch((e) => {
        console.log("error");
        return res.status(400).send(e);
    })
})

// 產生訂單資料
router.get("/payment/:ItemName/:TotalAmount", (req, res) => {
    let { ItemName, TotalAmount } = req.params;
    const MerchantTradeDate = new Date().toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC',
    });
    let TradeNo = "test000" + new Date().getTime().toString().slice(0, 13); // 目前 new Date().getTime() 會得到 13 碼數字，而 MerchantTrade 要帶 20 碼，所以前面再隨便加 7 個字
    let base_param = {
        MerchantTradeNo: TradeNo, // 請帶 20 碼 uid, ex: f0a0d7e9fae1bb72bc93
        MerchantTradeDate,
        TotalAmount,
        TradeDesc: ItemName,
        ItemName,
        ReturnURL: `${BACKEND_HOST}/return`,
        ClientBackURL: `${FRONTEND_HOST}/#/finished`,
    };
    const create = new ecpay_payment(options);
    const html = create.payment_client.aio_check_out_all(base_param);
    bcrypt.hash(ORDER_HASH_SECRET, 10, (err, hashedResult) => {
        if (err) {
            console.log(err);
        } else {
            return res.send({ html, hashedResult });
        }
    })
})

// 註冊 (購買) 課程
router.post("/enroll", async(req, res) => {
    let { studentId, course, orderDetail, classAmounts } = req.body;
    User.findOne({ _id: studentId })
    .then((foundUser) => {
        if (!foundUser) {
            return res.status(400).send("查無這個使用者");
        } else {
            Course.findOne({ _id: course._id }).populate("instructor", ["name"])
            .then((foundCourse) => {
                foundUser.orders.push({ courseId: course._id, courseTitle: course.title, instructor: foundCourse.instructor.name, date: orderDetail.data.date, address: orderDetail.data.address, plan: classAmounts });
                foundUser.save()
                .then((d) => {
                    console.log(d);
                    return res.send("訂單儲存成功");
                })
                .catch((e) => {
                    console.log(e);
                    return res.send("訂單儲存失敗");
                })    
            })
        }
    })
    .catch((e) => {
        console.log(e);
        return res.status(400).send("出了一些問題...");
    })
})

// 查詢使用者已完成的訂單
router.get("/getMyOrders/:studentId", async(req, res) => {
    let { studentId } = req.params;
    await User.findOne({ _id: studentId })
    .then((foundUser) => {
        if (!foundUser) {
            return res.status(400).send("查無這個使用者");
        } else {
            return res.send(foundUser.orders);
        }
    })
    .catch((e) => {
        console.log(e);
        return res.status(400).send("發生一些問題...");
    })
})

module.exports = router;