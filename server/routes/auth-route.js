const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user-model");
const registrationVal = require("../validation").registrationVal;
const loginVal = require("../validation").loginVal;

// router.get("/register") {

// }

router.post("/register", async(req, res) => {
    let { username, email, password } = req.body;
    console.log(email, email.length);
    await User.findOne({ email })
    .then((d) => {
        if (d) {
            return res.status(400).send("這個 email 已經註冊過囉");
        } else if (!d) {
            let result = registrationVal(req.body);
            if (result.error) {
                return res.status(400).send(result.error.details[0].message);
            } else if (typeof result === "string" && result !== "通過檢驗") { //有通過 Joi 的檢驗，但是沒有通過我們自訂的其它檢驗規定
                return res.status(400).send(result);
            } else {
                bcrypt.hash(password, 10, (err, hashed) => {
                    if (err) {
                        console.log(err);
                        return res.status(400).send("對不起，出了一點問題...");
                    } else {
                        let newUser = new User({ username, email, password: hashed});
                        newUser.save()
                        .then((d) => {
                            // console.log("successful!");
                            return res.send("註冊成功 !");
                        })
                        .catch((e) => {
                            console.log(e);
                            return res.status(400).send("對不起，出了一點問題...");
                        })
                    }
                })    
            }
        }
    })
    .catch((e) => {
        console.log(e);
        return res.status(400).send("對不起，出了一點問題...");
    })
})

router.post("/login", async(req, res) => {
    let { email, password } = req.body;
    await User.findOne({ email })
    .then((d) => {
        if (!d) {
            return res.status(400).send("這個 email 還沒有被註冊過哦");
        } else if (d) {
            let result = loginVal(req.body);
            if (result.error) {
                return res.status(400).send(result.error.details[0].message);
            }
            bcrypt.compare(password, d.password, (err, result) => {
                if (err) {
                    return res.status(400).send("對不起，出了一點問題...");
                } else { 
                    if (!result) {
                        return res.status(401).send("帳號或密碼錯誤");
                    } else {
                        //製作 token
                        const tokenObj = { id: d._id, email: d.email };
                        const sentTokenObj = jwt.sign(tokenObj, process.env.PASSPORT_SECRET);
                        return res.send({ msg: "成功登入 !", token: `JWT ${sentTokenObj}`, data: d });
                    }
                }
            })
        }
    })
    .catch((e) => {
        console.log(e);
        return res.status(400).send("對不起，出了一點問題...");
    })
})

// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
//     return res.send("login successfully");
// })

module.exports = router;