# Coding Tutorial
Coding Tutorial 是一個程式家教媒合平台，提供豐富及多種類程式語言的課程，學員可指定教學地點及進行一對一家教。  
Coding Tutorial is a platform where students can find courses with various coding languages. They can also specify a place to have a 1-to-1, face-to-face tutorial.

## 框架及系統說明 Framework and System
前端: React, Bootstrap 5  
後端: Node.js  
React and Bootstrap 5 for Front-end. Node.js for Back-end.

## 功能 Features
* 註冊、登入、登出
* OAuth (包含 Facebook 登入及 Google 登入)
* 利用程式語言的類別，篩選符合條件的課程
* 依據使用者查詢的課程，自動推薦他可能有興趣的其它課程
* 購買課程 (包含下訂單、模擬付款及金流過程，金流部分使用**綠界第三方支付**)
* Sign up, Log in, Log out.
* OAuth, including **Login With Facebook** and **Login with Google**.
* Filter courses according to the coding language.
* Recommend similar courses to the user based on the courses previously searched.
* Purchase courses, including placing orders and simulating the payment process. (use **ECPay**, a third-party payment provider in Taiwan)

## 技術 Technologies
* Axios
* bcrypt
* ecpay_aio_nodejs
* Facebook OAuth
* Google OAuth
* Joi
* Json Web Token
* Mongoose & Mongo DB
* Passport
* SASS 7 + 1 Pattern

## 資料夾結構 Structure of Folders
前端:
* client
  * assets
    * scss - scss 程式碼放置處
    * images - 圖片檔放置處
  * components - 自訂的 React 元件及共通區塊放置處
  * pages - React 頁面放置處
  * service - 介接後端 API 程式碼放置處

後端:
* server
  * config - Passport 及 JWT 驗證
  * images - 圖片檔放置處
  * models
  * routes
 
Front-end:
* client
  * assets
    * scss - scss codes
    * images - static images
  * components - customized React components and layouts 
  * pages - React pages
  * service - API calls to the back-end

後端:
* server
  * config - Passport and JWT authentication
  * images
  * models
  * routes
