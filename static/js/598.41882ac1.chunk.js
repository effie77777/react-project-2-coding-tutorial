"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[598],{6598:function(e,t,r){r.r(t);var a=r(9439),s=r(2791),l=r(7689),c=r(4313),o=r(184);t.default=function(e){var t=e.currentUser,r=e.currentSearch,n=(e.setCurrentSearch,(0,l.s0)()),i=(0,s.useState)(null),d=(0,a.Z)(i,2),m=d[0],u=d[1],h=function(e){console.log(e.target.textContent),"\u63a2\u7d22\u66f4\u591a\u8ab2\u7a0b"===e.target.textContent?n("/class"):"\u56de\u5230\u500b\u4eba\u9801\u9762"===e.target.textContent&&n("/profile")};return(0,s.useEffect)((function(){if(t)if(localStorage.getItem("submitted_ecpay_form")){var e=t.data._id,r=JSON.parse(localStorage.getItem("current_search"))[0]._id,a=JSON.parse(localStorage.getItem("order_from_customer")),s=JSON.parse(localStorage.getItem("purchase"));c.Z.enroll(e,r,a,s).then((function(e){console.log("successfully enrolled",e)})).catch((function(e){console.log(e)})),localStorage.removeItem("submitted_ecpay_form"),localStorage.removeItem("form_from_ecpay"),localStorage.removeItem("order_from_customer"),localStorage.removeItem("purchase")}else localStorage.getItem("purchase")?(u("\u8a02\u55ae\u5c1a\u672a\u5b8c\u6210\uff0c\u5c07\u70ba\u60a8\u91cd\u65b0\u5c0e\u5411"),setTimeout((function(){localStorage.getItem("order_from_customer")&&JSON.parse(localStorage.getItem("order_from_customer")).isValid?n("/checkOut"):n("/placeOrder")}),2e3)):u("\u76ee\u524d\u6c92\u6709\u9032\u884c\u4e2d\u7684\u8a02\u55ae\u54e6\uff0c\u5982\u6b32\u67e5\u8a62\u5df2\u5b8c\u6210\u7684\u8a02\u55ae\u8acb\u81f3\u500b\u4eba\u9801\u9762");else u("\u8acb\u5148\u767b\u5165\u6216\u8a3b\u518a"),setTimeout((function(){n("/login")}),2e3)}),[]),(0,o.jsx)("div",{className:"container-fluid",children:m?(0,o.jsx)("div",{className:"error_msg",children:m}):(0,o.jsxs)("div",{children:[(0,o.jsx)("section",{className:"py-11",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12 d-flex justify-content-center",children:(0,o.jsxs)("div",{className:"progress_bar",children:[(0,o.jsx)("div",{className:"border-top"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)("small",{children:"1"})}),(0,o.jsx)("p",{children:"\u586b\u5beb\u8cfc\u8cb7\u8cc7\u6599"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"bg-linear border-0",children:(0,o.jsx)("small",{className:"text-dark",children:"2"})}),(0,o.jsx)("p",{children:"\u78ba\u8a8d\u8a02\u55ae\u8cc7\u8a0a"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"bg-linear border-0",children:(0,o.jsx)("small",{className:"text-dark",children:"3"})}),(0,o.jsx)("p",{children:"\u6210\u529f\u8a3b\u518a\u8ab2\u7a0b"})]})]})})})}),(0,o.jsx)("section",{className:"mt-12",children:(0,o.jsx)("div",{className:"row align-items-center",children:(0,o.jsx)("div",{className:"col-12 d-flex justify-content-center",children:(0,o.jsxs)("div",{className:"col-sm-8 col-lg-4 px-8 py-12 bg-third bg-opacity-10 d-flex flex-column align-items-center",style:{maxWidth:"450px"},children:[(0,o.jsxs)("div",{className:"d-flex align-items-center mb-8",children:[(0,o.jsx)("span",{class:"material-symbols-outlined text-primary me-3",style:{fontSize:"2.75rem",transform:"translateY(-10%)"},children:"new_releases"}),(0,o.jsx)("h3",{className:"text-white fw-bold fs-4",children:"\u5b8c\u6210\u8a02\u8cfc"})]}),r.length>0&&(0,o.jsx)("p",{className:"mb-10 text-white",children:"\u606d\u559c\u60a8\u5df2\u6210\u529f\u8cfc\u8cb7\u8ab2\u7a0b\uff0c\u8acb\u6ce8\u610f\u90f5\u4ef6\u8a0a\u606f\uff0c\u5bb6\u6559\u8001\u5e2b\u5c07\u8207\u60a8\u806f\u7e6b\uff01\u60a8\u53ef\u81f3\u500b\u4eba\u9801\u9762\u67e5\u770b\u5df2\u8cfc\u8cb7\u7684\u8ab2\u7a0b\u3002"}),(0,o.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[(0,o.jsx)("button",{type:"button",className:"btn bg-linear text-dark px-12 py-2 mb-3",onClick:h,children:"\u63a2\u7d22\u66f4\u591a\u8ab2\u7a0b"}),(0,o.jsx)("button",{type:"button",className:"btn text-white border px-12 py-2",onClick:h,children:"\u56de\u5230\u500b\u4eba\u9801\u9762"})]})]})})})})]})})}},4313:function(e,t,r){var a=r(5671),s=r(3144),l=r(1243),c="https://react-project-2-coding-tutorial-backend.onrender.com/api/course",o=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,[{key:"searchAllCourses",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return console.log(t),e=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.get("".concat(c,"/search/").concat(t),{headers:{Authorization:e}})}},{key:"checkOut",value:function(e,t){var r;return r=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",console.log("ask for html from the server"),l.Z.get("".concat(c,"/payment/").concat(e,"/").concat(t),{headers:{Authorization:r}})}},{key:"enroll",value:function(e,t,r,a){var s;return s=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.post("".concat(c,"/enroll"),{studentId:e,courseId:t,orderDetail:r,orderPrice:a},{headers:{Authorization:s}})}}]),e}(),n=new o;t.Z=n}}]);
//# sourceMappingURL=598.41882ac1.chunk.js.map