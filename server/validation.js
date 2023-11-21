const Joi = require("joi");

const registrationVal = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().max(50),
        email: Joi.string().email().required().max(60),
        password: Joi.string().min(8).required()
    });
    let result = schema.validate(data);
    if (result.error) {
        result = translateErrorMsg(result);
    } else { // username、email、password 的長度都有符合規定，接著檢查 password 其它方面的規定
        let { password } = data;
        let upperCaseVal = /[A-Z]+/;
        let numberVal = /\d+/;
        let specialCharVal = /[!@#%&=_?]+/;
        if (!upperCaseVal.test(password)) {
            result = "密碼需要包含至少一個大寫英文字母";
        } else if (!numberVal.test(password)) {
            result = "密碼需要包含至少一個數字";
        } else if (!specialCharVal.test(password)) {
            result = "密碼需要包含一個特殊符號，僅限!@#%&=_?";
        } else { //檢查 password 當中是否包含「非規定範圍內的」特殊符號
            let specialCharInPwd = password.match(/[^\w]/g); //找出 password 當中所有特殊符號。[^\w] 代表非文字或數字(亦即特殊符號)，g代表符合條件的「全部」都要回傳
            specialCharInPwd = specialCharInPwd.join(""); //將回傳的 array 當中的每一項連接起來，變成一個 string
            if (/[^!@#%&=_?]/.test(specialCharInPwd)) { //如果 password 當中所有特殊符號裡面，有不符合規定的
                result = "密碼不可包含!@#%&=_?以外的特殊符號或空格"
            } else {
                result = "通過檢驗";
            }
        }
    }
    console.log("result: ", result);
    return result;
}

const loginVal = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().max(50),
        password: Joi.string().required().min(8)
    });
    let result = schema.validate(data);
    if (result.error) {
        result = translateErrorMsg(result);
    }
    return result;
}


function translateErrorMsg(result) {
    let errorMsg = "";
    let key = result.error.details[0].context.key;
    let limit = result.error.details[0].context.limit;
    switch (key) {
        case "username":
            key = "姓名";
            break;
        case "email":
            key = "信箱";
            break;
        case "password":
            key = "密碼";
            break;
    }
    switch(result.error.details[0].type) {
        case "any.required": 
        case "string.empty":
            errorMsg = "為必填欄位";
            break;
        case "string.email":
            errorMsg = "格式錯誤";
            break;
        case "string.max":
            errorMsg = `最多為 ${limit} 個字`;
            break;
        case "string.min":
            errorMsg = `最少為 ${limit} 個字`;
            break;
        case "number.base":
            errorMsg = `必須為數字`;
            break;
        case "number.max":
            errorMsg = `上限為 ${limit}`;
            break;
        case "number.min":
            errorMsg = `下限為 ${limit}`;
            break;                
    }
    if (errorMsg !== "") { //為上述所列的錯誤類型之一的話，就將原本 Joi 的錯誤訊息改成翻譯過後的
        errorMsg = key + errorMsg;
        result.error.details[0].message = errorMsg;
    }
    return result;
}

module.exports = { registrationVal, loginVal };