require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const ecpay_payment = require('ecpay_aio_nodejs');
require("./config/passport");
const courseRoute = require("./routes/index").courseRoute;
const authRoute = require("./routes/index").authRoute;
const { MERCHANTID, HASHKEY, HASHIV } = process.env;
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

mongoose.connect(process.env.DB_CONNECT)
.then(() => {
    console.log("connect to db");
})
.catch((e) => {
    console.log(e);
})

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/auth", authRoute);
app.use("/api/course", passport.authenticate("jwt", { session: false }), courseRoute);

// 交易完成後綠界回傳的資料
app.post("/return", async(req, res) => {
    const { CheckMacValue } = req.body;
    const data = req.body;
    delete data.CheckMacValue;
    const create = new ecpay_payment(options);
    const checkValue = create.payment_client.helper.gen_chk_mac_value(data);
    console.log(
        "確認交易正確性: ",
        CheckMacValue === checkValue,
        "CheckMacValue: " + CheckMacValue,
        "checkValue: " + checkValue
    );
    if (CheckMacValue === checkValue) {
        return res.send("1|OK");
    }
})

app.get("/", (req, res) => {
    return res.send("welcome");
})

app.get("/*", (req, res) => {
    return res.status(400).send("not found");
})

app.listen(8080, () => {
    console.log("server listening on port 8080");
})