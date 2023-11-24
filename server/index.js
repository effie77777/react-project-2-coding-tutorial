require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const fs = require("fs");
const courseRoute = require("./routes/index").courseRoute;
const authRoute = require("./routes/index").authRoute;
const Instructor = require("./models/index").Instructor;
require("./config/passport");
const ecpay_payment = require('ecpay_aio_nodejs');
const { totalmem } = require("os");
const { MERCHANTID, HASHKEY, HASHIV, FRONTEND_HOST, BACKEND_HOST } = process.env;
const options = {
    OperationMode: 'Test', //Test or Production
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

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/google/course", courseRoute);

app.get("/api/course/payment/:ItemName/:TotalAmount", (req, res) => {
    console.log("inside route");
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
    let TradeNo = "test000" + new Date().getTime().toString().slice(0, 13);
    let base_param = {
        MerchantTradeNo: TradeNo, //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
        MerchantTradeDate,
        TotalAmount,
        TradeDesc: ItemName,
        ItemName,
        ReturnURL: `${BACKEND_HOST}/return`,
        ClientBackURL: `${FRONTEND_HOST}/#/finished`,
    };
    const create = new ecpay_payment(options);
    const html = create.payment_client.aio_check_out_all(base_param);
    console.log("html: ", html);
    return res.send(html);
})

app.use("/api/course", passport.authenticate("jwt", { session: false }), courseRoute);

//尚未解決
app.post("/return", async(req, res) => {
    console.log("req.body: ", req.body);
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

app.listen(8080, () => {
    console.log("server listening on port 8080");
})