"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[183],{7183:function(e,t,s){s.r(t);var a=s(9439),r=s(2791),l=s(7689),c=s(1087),n=s(4313),i=s(184);t.default=function(e){var t=e.currentUser,s=e.currentSearch,o=e.setCurrentSearch,d=e.purchase,m=e.setPurchase,h=e.orderFromCustomer,u=e.setOrderFromCustomer,x=(e.orderFromECPAY,e.setOrderFromECPAY,(0,l.s0)()),p=(0,r.useState)(null),g=(0,a.Z)(p,2),f=g[0],j=g[1];return(0,r.useEffect)((function(){if(t)if(function(){if(localStorage.getItem("current_search"))return o(JSON.parse(localStorage.getItem("current_search"))),!0;j("\u60a8\u9084\u6c92\u6709\u9078\u64c7\u8981\u8cfc\u8cb7\u7684\u8ab2\u7a0b\u54e6\uff0c\u5c07\u70ba\u60a8\u5c0e\u5411\u8ab2\u7a0b\u9801\u9762"),setTimeout((function(){x("/class")}),2e3)}()&&function(){if(localStorage.getItem("purchase")){var e=JSON.parse(localStorage.getItem("purchase"))[0],t=JSON.parse(localStorage.getItem("purchase"))[1];return"\u6d3d\u8ac7\u5831\u50f9"!==e&&(e=Number(e),t=Number(t)),m([e,t]),!0}j("\u60a8\u9084\u6c92\u6709\u9078\u64c7\u8cfc\u8cb7\u65b9\u6848\u54e6\uff0c\u5c07\u70ba\u60a8\u5c0e\u5411\u8ab2\u7a0b\u9801\u9762"),setTimeout((function(){x("/detail")}),2e3)}(),localStorage.getItem("order_from_customer")&&JSON.parse(localStorage.getItem("order_from_customer")).isValid){u([JSON.parse(localStorage.getItem("order_from_customer")).data]);var e=document.getElementById("parentElement");if(console.log(e),e){var s=JSON.parse(localStorage.getItem("purchase")),a=s[0]*s[1];n.Z.checkOut(JSON.parse(localStorage.getItem("current_search"))[0].title,a).then((function(t){console.log(t.data),e.innerHTML=t.data.substring(0,t.data.indexOf("<script"))+"</form>"})).catch((function(e){console.log(e)}))}}else j("\u76ee\u524d\u9084\u6c92\u6709\u6709\u6548\u8a02\u55ae\u54e6\uff0c\u5c07\u70ba\u60a8\u5c0e\u5411\u8a02\u55ae\u9801\u9762"),setTimeout((function(){x("/placeOrder")}),2e3);else j("\u8acb\u5148\u767b\u5165\u6216\u8a3b\u518a"),setTimeout((function(){x("/login")}),2e3)}),[]),(0,i.jsx)("div",{className:"container-fluid",children:f?(0,i.jsx)("div",{className:"error_msg",children:f}):(0,i.jsxs)("div",{children:[(0,i.jsx)("section",{className:"py-11",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12 d-flex justify-content-center",children:(0,i.jsxs)("div",{className:"progress_bar",children:[(0,i.jsx)("div",{className:"border-top"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("small",{children:"1"})}),(0,i.jsx)("p",{children:"\u586b\u5beb\u8cfc\u8cb7\u8cc7\u6599"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"bg-linear border-0",children:(0,i.jsx)("small",{className:"text-dark",children:"2"})}),(0,i.jsx)("p",{children:"\u78ba\u8a8d\u8a02\u55ae\u8cc7\u8a0a"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"border border-1 border-third bg-fourth",children:(0,i.jsx)("small",{className:"text-third",children:"3"})}),(0,i.jsx)("p",{children:"\u6210\u529f\u8a3b\u518a\u8ab2\u7a0b"})]})]})})})}),(0,i.jsx)("section",{className:"mt-12",children:(0,i.jsx)("div",{className:"row align-items-center",children:(0,i.jsxs)("div",{className:"col-12 d-flex flex-wrap justify-content-center",children:[(0,i.jsx)("h3",{className:"fs-4 text-white fw-bold text-center w-100",children:"\u8a02\u55ae\u8cc7\u8a0a"}),h&&h.length>0&&(0,i.jsxs)("form",{className:"col-12 col-sm-10 col-md-8 d-flex flex-wrap justify-content-between text-white",children:[(0,i.jsxs)("div",{className:"w-100 w-sm-48 mt-6 bg-third bg-opacity-25 px-4 py-2",children:[(0,i.jsx)("label",{htmlFor:"name",className:"me-3",children:"\u59d3\u540d"}),(0,i.jsx)("input",{type:"text",name:"name",id:"name",value:h[0].name,className:"bg-transparent border-0 text-white px-0",disabled:!0})]}),(0,i.jsxs)("div",{className:"w-100 w-sm-48 mt-6 bg-third bg-opacity-25 px-4 py-2",children:[(0,i.jsx)("label",{htmlFor:"tel",className:"me-3",children:"\u624b\u6a5f\u865f\u78bc"}),(0,i.jsx)("input",{type:"tel",name:"tel",id:"tel",value:h[0].tel,className:"bg-transparent border-0 text-white px-0",disabled:!0})]}),(0,i.jsxs)("div",{className:"mt-6 w-100 w-sm-48 bg-third bg-opacity-25 px-4 py-2",children:[(0,i.jsx)("label",{htmlFor:"email",className:"me-3",children:"Email"}),(0,i.jsx)("input",{type:"email",name:"email",id:"email",value:h[0].email,className:"bg-transparent border-0 text-white px-0",disabled:!0})]}),(0,i.jsxs)("div",{className:"mt-6 w-100 w-sm-48 bg-third bg-opacity-25 px-4 py-2",children:[(0,i.jsx)("label",{htmlFor:"date",className:"me-3",children:"\u4e0a\u8ab2\u65e5\u671f"}),(0,i.jsx)("input",{type:"date",name:"date",id:"date",value:h[0].date,className:"bg-transparent border-0 text-white px-0",disabled:!0})]}),(0,i.jsxs)("div",{className:"w-100 mt-6 bg-third bg-opacity-25 px-4 py-2",children:[(0,i.jsx)("label",{htmlFor:"address",className:"me-3",children:"\u4e0a\u8ab2\u5730\u9ede"}),(0,i.jsx)("input",{type:"text",name:"address",id:"address",value:h[0].address,className:"bg-transparent border-0 text-white px-0 overflow-auto d-inline-block w-100 w-sm-fit-content",disabled:!0})]}),(0,i.jsxs)("div",{className:"w-100 mt-6 bg-third bg-opacity-25 px-4 py-2 d-flex flex-wrap",children:[(0,i.jsx)("label",{htmlFor:"address",className:"me-3",children:"\u8ab2\u7a0b\u540d\u7a31"}),(0,i.jsxs)("p",{children:[s[0].title," (",s[0].instructor.name," \u8001\u5e2b)"]})]}),(0,i.jsxs)("div",{className:"mt-9 mt-sm-12 d-flex flex-column justify-content-between w-100",children:[d&&"\u6d3d\u8ac7\u5831\u50f9"!==d[0]&&(0,i.jsxs)("div",{className:"text-white d-flex align-items-sm-center",children:[(0,i.jsx)("p",{className:"me-5",children:"NT$".concat(d[0],"x").concat(d[1],"\u5802")}),(0,i.jsx)("p",{className:"text-warning",children:"\u5408\u8a08NT$".concat(d[0]*d[1])})]}),d&&"\u6d3d\u8ac7\u5831\u50f9"===d[0]&&(0,i.jsxs)("div",{className:"text-white d-flex fw-bold",children:[(0,i.jsx)("p",{className:"me-2",children:"\u65b9\u6848:"}),(0,i.jsx)("p",{className:"me-1",children:"\u5ba2\u88fd\u5316\u8ab2\u7a0b"}),(0,i.jsx)("p",{className:"text-warning",children:"(\u6d3d\u8ac7\u5831\u50f9)"})]}),(0,i.jsxs)("div",{className:"mt-3 d-flex flex-column flex-sm-row justify-content-sm-between",children:[(0,i.jsx)(c.rU,{className:"btn border px-12 py-2 text-white w-sm-48",to:"/placeOrder",children:"\u4fee\u6539\u8a02\u55ae"}),(0,i.jsx)("button",{type:"button",className:"btn bg-linear px-12 py-2 text-white w-sm-48 mt-3 mt-sm-0",onClick:function(){var e=document.getElementById("_form_aiochk");console.log(e),e&&(window.alert("\u5c07\u70ba\u60a8\u5c0e\u5411\u7da0\u754c\u91d1\u6d41\u9801\u9762\u3002\n\u63d0\u9192\u60a8\uff0c\u672c\u5c08\u6848\u50c5\u70ba demo \u6027\u8cea\uff0c\u5207\u52ff\u8f38\u5165\u771f\u5be6\u4fe1\u7528\u5361\u5361\u865f\u7b49\u6a5f\u654f\u8cc7\u6599\u3002\n\u5982\u60a8\u4f7f\u7528\u300c\u7db2\u8def ATM \u300d\u4ed8\u6b3e\uff0c\u5efa\u8b70\u9078\u64c7\u300c\u53f0\u7063\u571f\u5730\u9280\u884c\u300d\u6216\u300c\u53f0\u65b0\u9280\u884c\u300d\uff0c\u7121\u9808\u5b89\u88dd\u8edf\u9ad4\u5373\u53ef\u89c0\u770b\u6a21\u64ec\u7684\u4ea4\u6613\u7d50\u679c\u3002"),e.submit())},children:"\u524d\u5f80\u4ed8\u6b3e"})]})]})]})]})})}),(0,i.jsx)("section",{id:"parentElement"})]})})}},4313:function(e,t,s){var a=s(5671),r=s(3144),l=s(1243),c="http://localhost:8080/api/course",n=function(){function e(){(0,a.Z)(this,e)}return(0,r.Z)(e,[{key:"searchAllCourses",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return console.log(t),e=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.get("".concat(c,"/search/").concat(t),{headers:{Authorization:e}})}},{key:"checkOut",value:function(e,t){var s;return s=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",console.log("ask for html from the server"),l.Z.get("".concat(c,"/payment/").concat(e,"/").concat(t),{headers:{Authorization:s}})}},{key:"enroll",value:function(e,t){var s;return s=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.post("".concat(c,"/enroll"),{studentId:e,courseId:t},{headers:{Authorization:s}})}}]),e}(),i=new n;t.Z=i}}]);
//# sourceMappingURL=183.b843814d.chunk.js.map