const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { jwtDecode } = require("jwt-decode");
const FacebookStrategy = require("passport-facebook");
const axios = require("axios");
const User = require("../models/user-model");
const registrationVal = require("../validation").registrationVal;
const loginVal = require("../validation").loginVal;
// let accessToken = "";

// router.get("/register") {

// }

router.post("/register", async(req, res) => {
    let { username, email, password } = req.body;
    console.log(email, email.length);
    await User.findOne({ email })
    .then((d) => {
        if (d && d.password) {
            return res.status(400).send("這個 email 已經註冊過囉");
        } else if (d && !password) {
            return res.status(400).send("這個 email 已經存在，請改使用 google 登入");
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

router.post("/login/google", async(req, res) => {
    let { credential } = req.body;
    let decodedResult = jwtDecode(credential);
    if (decodedResult.iss && decodedResult.iss === "https://accounts.google.com" && decodedResult.email_verified && decodedResult.email_verified === true) {
        await User.findOne({ email: decodedResult.email })
        .then((foundUser) => {
            if (!foundUser) {
                let newUser = new User({
                    username: decodedResult.name,
                    email: decodedResult.email,
                    googleID: decodedResult.sub,
                })
                newUser.save()
                .then((d) => {
                    console.log(d);
                    const tokenObj = { id: d._id, email: d.email };
                    const sentTokenObj = jwt.sign(tokenObj, process.env.PASSPORT_SECRET);
                    return res.send({ msg: "成功登入 !", token: `JWT ${sentTokenObj}`, data: d });
                })
                .catch((e) => {
                    console.log(e);
                    return res.status(400).send("發生一些錯誤...");
                })
            } else { // db 當中已經有該名使用者，代表他之前有用 google 登入過了
                const tokenObj = { id: foundUser._id, email: foundUser.email };
                const sentTokenObj = jwt.sign(tokenObj, process.env.PASSPORT_SECRET);
                return res.send({ msg: "成功登入 !", token: `JWT ${sentTokenObj}`, data: foundUser });
            }
        })
        .catch((e) => {
            console.log(e);
            return res.status(400).send("發生一些錯誤...");
        })

    } else {
        return res.status(401).send("google 登入驗證失敗");
    }
});


router.post("/login/facebook", (req, res) => {
    let facebookAccessToken = req.body.accessToken;
    console.log(req.body);
    console.log(facebookAccessToken);
    axios.post(`https://graph.facebook.com/me?fields=id&access_token=${facebookAccessToken}`)
    .then((d) => {
        console.log(d);
    })
    .catch((e) => {
        console.log(e);
    })
    return facebookAccessToken;
    // passport.use(new FacebookStrategy(
    //     {
    //         clientID: process.env.FACEBOOK_APP_ID,
    //         clientSecret: process.env.FACEBOOK_APP_SECRET,
    //         callbackURL: "/auth/login/facebook/redirect"
    //     },
    //     function(accessToken, refreshToken, profile, cb) {
    //         accessToken = facebookAccessToken;
    //         console.log(`accessToken: ${accessToken}`);
    //         console.log(`profile: ${profile}`);
    //         return cb(null, profile);
    //     }
    // ))    
});

router.get("/login/facebook/redirect", (req, res) => {
    console.log(req);
    return res.send("finished");
})

// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
//     return res.send("login successfully");
// })

// module.exports = { router, accessToken };
module.exports = router;