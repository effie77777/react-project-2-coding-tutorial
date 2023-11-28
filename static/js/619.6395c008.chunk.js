"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[619],{7619:function(e,t,s){s.r(t);var a=s(3433),r=s(9439),l=s(2791),c=s(7689),n=s(1087),i=s(184);t.default=function(e){var t=e.currentUser,s=e.orderFromCustomer,m=e.setOrderFromCustomer,o=e.currentSearch,d=e.setCurrentSearch,x=e.purchase,h=e.setPurchase,u=(0,l.useState)(null),f=(0,r.Z)(u,2),p=f[0],j=f[1],N=(0,l.useState)(null),g=(0,r.Z)(N,2),b=g[0],v=g[1],w=(0,c.s0)(),y=function(e){if(localStorage.getItem("order_from_customer")){var t=JSON.parse(localStorage.getItem("order_from_customer")),r=t.data;t.isValid;localStorage.setItem("order_from_customer",JSON.stringify({data:r,isValid:!1}))}var l=e.target.name,c=e.target.value,n=(0,a.Z)(s);n.forEach((function(e){for(var t in e)if(l===t){e[t]=c,m(n);break}}))};function S(){localStorage.getItem("current_search")?(d(JSON.parse(localStorage.getItem("current_search"))),function(){if(localStorage.getItem("purchase")){var e=Number(JSON.parse(localStorage.getItem("purchase"))[0]),s=Number(JSON.parse(localStorage.getItem("purchase"))[1]);if(h([e,s]),localStorage.getItem("order_from_customer")&&JSON.parse(localStorage.getItem("order_from_customer")).isValid){var a=JSON.parse(localStorage.getItem("order_from_customer")).data;m([a])}else m([{name:t.data.username,tel:"",email:t.data.email,date:"",address:""}])}else j("\u60a8\u9084\u6c92\u6709\u9078\u64c7\u8cfc\u8cb7\u65b9\u6848\u54e6\uff0c\u5c07\u70ba\u60a8\u5c0e\u5411\u8ab2\u7a0b\u9801\u9762"),setTimeout((function(){w("/detail")}),2e3)}()):(j("\u60a8\u9084\u6c92\u6709\u9078\u64c7\u8981\u8cfc\u8cb7\u7684\u8ab2\u7a0b\u54e6\uff0c\u5c07\u70ba\u60a8\u5c0e\u5411\u8ab2\u7a0b\u9801\u9762"),setTimeout((function(){w("/class")}),2e3))}return(0,l.useEffect)((function(){t?S():(j("\u8acb\u5148\u767b\u5165\u6216\u8a3b\u518a"),setTimeout((function(){w("/login")}),2e3))}),[]),(0,i.jsx)("div",{className:"container-fluid",children:p?(0,i.jsx)("div",{className:"error_msg",children:p}):(0,i.jsxs)("div",{children:[(0,i.jsx)("section",{className:"py-11",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12 d-flex justify-content-center",children:(0,i.jsxs)("div",{className:"progress_bar",children:[(0,i.jsx)("div",{className:"border-top"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("small",{children:"1"})}),(0,i.jsx)("p",{children:"\u586b\u5beb\u8cfc\u8cb7\u8cc7\u6599"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"border border-1 border-third bg-fourth",children:(0,i.jsx)("small",{className:"text-third",children:"2"})}),(0,i.jsx)("p",{children:"\u78ba\u8a8d\u8a02\u55ae\u8cc7\u8a0a"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"border border-1 border-third bg-fourth",children:(0,i.jsx)("small",{className:"text-third",children:"3"})}),(0,i.jsx)("p",{children:"\u6210\u529f\u8a3b\u518a\u8ab2\u7a0b"})]})]})})})}),o.length>0&&s.length>0&&(0,i.jsx)("section",{className:"mt-12",children:(0,i.jsxs)("div",{className:"row align-items-center justify-content-center",children:[(0,i.jsx)("div",{className:"col-12 col-sm-8 col-md-4 mb-11 mb-md-0",children:(0,i.jsxs)("div",{className:"py-12 px-8 d-flex flex-column align-items-center bg-opacity-25 bg-third rounded-0 position-relative ms-md-6 me-md-n6",children:[(0,i.jsx)("img",{src:o[0].instructorPhoto,alt:"the instructor",className:"border border-primary border-3 profile_img"}),(0,i.jsx)("p",{className:"fw-bold text-white mt-6",children:o[0].title}),(0,i.jsx)("p",{className:"mt-1 text-primary",children:o[0].category}),(0,i.jsx)("p",{className:"mt-2 text-white",children:o[0].description}),(0,i.jsx)("div",{className:"right-arrow position-absolute opacity-25 top-50 d-none d-md-block end-n4",style:{transform:"translateY(-50%)"}}),(0,i.jsx)("div",{className:"right-arrow position-absolute opacity-25 left-0 d-md-none bottom-n4",style:{transform:"rotate(90deg) translateX(30%)"}})]})}),(0,i.jsx)("div",{className:"col-12 col-md-8",children:(0,i.jsxs)("form",{action:"",className:"py-12 px-8 ps-md-18 d-flex flex-row flex-wrap bg-opacity-10 bg-third rounded-0 justify-content-between ms-md-n6 me-md-6",children:[(0,i.jsx)("h3",{className:"fs-4 mb-12 text-white fw-bold text-center w-100",children:"\u8ab2\u7a0b\u5831\u540d"}),b&&(0,i.jsx)("div",{className:"error_msg w-100 mt-n3",children:b}),(0,i.jsxs)("div",{className:"w-100 w-sm-48 mt-3",children:[(0,i.jsx)("label",{htmlFor:"name",className:"mb-1",children:"\u59d3\u540d"}),(0,i.jsx)("input",{type:"text",name:"name",id:"name",className:"form-control",value:s[0].name,onChange:y})]}),(0,i.jsxs)("div",{className:"w-100 w-sm-48 mt-6 mt-sm-3",children:[(0,i.jsx)("label",{htmlFor:"tel",className:"mb-1",children:"\u624b\u6a5f\u865f\u78bc"}),(0,i.jsx)("input",{type:"tel",name:"tel",id:"tel",className:"form-control",value:s[0].tel,placeholder:"\u683c\u5f0f: 09xxxxxxxx",onChange:y})]}),(0,i.jsxs)("div",{className:"mt-6 w-100 w-sm-48",children:[(0,i.jsx)("label",{htmlFor:"email",className:"mb-1",children:"Email"}),(0,i.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control",value:s[0].email,onChange:y})]}),(0,i.jsxs)("div",{className:"mt-6 w-100 w-sm-48",children:[(0,i.jsx)("label",{htmlFor:"date",className:"mb-1",children:"\u60f3\u9810\u7d04\u7684\u65e5\u671f(\u7576\u5730\u6642\u9593)"}),(0,i.jsx)("input",{type:"date",name:"date",id:"date",className:"form-control",value:s[0].date,onChange:y})]}),(0,i.jsxs)("div",{className:"w-100 mt-6",children:[(0,i.jsx)("label",{htmlFor:"address",className:"mb-1",children:"\u4e0a\u8ab2\u5730\u9ede(\u8a73\u7d30\u5730\u5740)"}),(0,i.jsx)("input",{type:"text",name:"address",id:"address",className:"form-control",value:s[0].address,onChange:y})]}),(0,i.jsxs)("div",{className:"mt-9 d-flex flex-column justify-content-between w-100",children:[(0,i.jsx)("p",{className:"text-warning",children:"NT$".concat(x[0]," x ").concat(x[1],"\u5802 = NT$").concat(x[0]*x[1])}),(0,i.jsxs)("div",{className:"mt-3 d-flex flex-column flex-sm-row justify-content-sm-between",children:[(0,i.jsx)(n.rU,{className:"btn border px-12 py-2 text-white w-sm-48",to:"/detail",children:"\u91cd\u9078\u65b9\u6848"}),(0,i.jsx)("button",{type:"button",className:"btn bg-linear px-12 py-2 text-white w-sm-48 mt-3 mt-sm-0",onClick:function(){var e=function(){for(var e in s[0])if(0===s[0][e].length)switch(e){case"name":return"\u59d3\u540d";case"tel":return"\u624b\u6a5f\u865f\u78bc";case"email":return"Email";case"date":return"\u60f3\u9810\u7d04\u7684\u65e5\u671f";case"address":return"\u4e0a\u8ab2\u5730\u9ede"}return"true"}(),t=Number(s[0].date.replaceAll("-","")),a=(new Date).toLocaleDateString();a=Number(a.replaceAll("/","")),"true"!==e?v("\u8acb\u586b\u5beb\u300c".concat(e,"\u300d\u6b04\u4f4d")):/^09\d{8}$/.test(s[0].tel)?/^\w{2,}@\w{2,}\.\w{2,}/.test(s[0].email)?t<=a?v("\u9810\u7d04\u65e5\u671f\u4e0d\u53ef\u5c0f\u65bc\u6216\u7b49\u65bc\u4eca\u65e5\u65e5\u671f"):s[0].address.length<8?v("\u8acb\u586b\u5beb\u8a73\u7d30\u7684\u4e0a\u8ab2\u5730\u9ede"):(localStorage.setItem("order_from_customer",JSON.stringify({data:s[0],isValid:!0})),v(null),w("/checkOut")):v("\u8acb\u78ba\u8a8d Email \u662f\u5426\u6b63\u78ba\u3002\u683c\u5f0f\u7bc4\u4f8b\u70ba example@gmail.com"):v("\u624b\u6a5f\u865f\u78bc\u683c\u5f0f\u70ba 09xxxxxxxx\uff0c\u5171 10 \u4f4d\u6578\u5b57")},children:"\u78ba\u8a8d\u8a02\u55ae"})]})]})]})})]})})]})})}}}]);
//# sourceMappingURL=619.6395c008.chunk.js.map