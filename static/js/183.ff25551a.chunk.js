"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[183],{7183:function(e,t,s){s.r(t);var a=s(9439),r=s(2791),l=s(7689),c=s(1087),n=(s(4313),s(184));t.default=function(e){var t=e.currentUser,s=e.currentSearch,i=e.setCurrentSearch,d=e.purchase,m=e.setPurchase,o=e.orderFromCustomer,x=e.setOrderFromCustomer,h=e.orderFromECPAY,u=(e.setOrderFromECPAY,(0,l.s0)()),p=(0,r.useState)(null),j=(0,a.Z)(p,2),b=j[0],N=j[1];return(0,r.useEffect)((function(){if(t){i(JSON.parse(localStorage.getItem("current_search"))),x([JSON.parse(localStorage.getItem("order_from_customer"))]);var e=JSON.parse(localStorage.getItem("purchase"))[0],s=JSON.parse(localStorage.getItem("purchase"))[1];"\u6d3d\u8ac7\u5831\u50f9"!==e&&(e=Number(e),s=Number(s)),m([e,s])}else N("\u8acb\u5148\u767b\u5165\u6216\u8a3b\u518a"),setTimeout((function(){u("/login")}),1500)}),[]),(0,n.jsx)("div",{className:"container-fluid",children:t?(0,n.jsxs)("div",{children:[(0,n.jsx)("section",{className:"py-11",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-12 d-flex justify-content-center",children:(0,n.jsxs)("div",{className:"progress_bar",children:[(0,n.jsx)("div",{className:"border-top"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:(0,n.jsx)("small",{children:"1"})}),(0,n.jsx)("p",{children:"\u586b\u5beb\u8cfc\u8cb7\u8cc7\u6599"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"bg-linear border-0",children:(0,n.jsx)("small",{className:"text-dark",children:"2"})}),(0,n.jsx)("p",{children:"\u78ba\u8a8d\u8a02\u55ae\u8cc7\u8a0a"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"border border-1 border-third bg-fourth",children:(0,n.jsx)("small",{className:"text-third",children:"3"})}),(0,n.jsx)("p",{children:"\u6210\u529f\u8a3b\u518a\u8ab2\u7a0b"})]})]})})})}),(0,n.jsx)("section",{className:"mt-12",children:(0,n.jsx)("div",{className:"row align-items-center",children:(0,n.jsxs)("div",{className:"col-12 d-flex flex-wrap justify-content-center",children:[(0,n.jsx)("h3",{className:"fs-4 text-white fw-bold text-center w-100",children:"\u8a02\u55ae\u8cc7\u8a0a"}),o.length>0&&s.length>0&&(0,n.jsxs)("form",{className:"col-12 col-sm-10 col-md-8 d-flex flex-wrap justify-content-between text-white",children:[(0,n.jsxs)("div",{className:"w-100 w-sm-48 mt-6 bg-third bg-opacity-25 px-4 py-2",children:[(0,n.jsx)("label",{htmlFor:"name",className:"me-3",children:"\u59d3\u540d"}),(0,n.jsx)("input",{type:"text",name:"name",id:"name",value:o[0].name,className:"bg-transparent border-0 text-white px-0",disabled:!0})]}),(0,n.jsxs)("div",{className:"w-100 w-sm-48 mt-6 bg-third bg-opacity-25 px-4 py-2",children:[(0,n.jsx)("label",{htmlFor:"tel",className:"me-3",children:"\u624b\u6a5f\u865f\u78bc"}),(0,n.jsx)("input",{type:"tel",name:"tel",id:"tel",value:o[0].tel,className:"bg-transparent border-0 text-white px-0",disabled:!0})]}),(0,n.jsxs)("div",{className:"mt-6 w-100 w-sm-48 bg-third bg-opacity-25 px-4 py-2",children:[(0,n.jsx)("label",{htmlFor:"email",className:"me-3",children:"Email"}),(0,n.jsx)("input",{type:"email",name:"email",id:"email",value:o[0].email,className:"bg-transparent border-0 text-white px-0",disabled:!0})]}),(0,n.jsxs)("div",{className:"mt-6 w-100 w-sm-48 bg-third bg-opacity-25 px-4 py-2",children:[(0,n.jsx)("label",{htmlFor:"date",className:"me-3",children:"\u4e0a\u8ab2\u65e5\u671f"}),(0,n.jsx)("input",{type:"date",name:"date",id:"date",value:o[0].date,className:"bg-transparent border-0 text-white px-0",disabled:!0})]}),(0,n.jsxs)("div",{className:"w-100 mt-6 bg-third bg-opacity-25 px-4 py-2",children:[(0,n.jsx)("label",{htmlFor:"address",className:"me-3",children:"\u4e0a\u8ab2\u5730\u9ede"}),(0,n.jsx)("input",{type:"text",name:"address",id:"address",value:o[0].address,className:"bg-transparent border-0 text-white px-0 overflow-auto d-inline-block w-100 w-sm-fit-content",disabled:!0})]}),(0,n.jsxs)("div",{className:"w-100 mt-6 bg-third bg-opacity-25 px-4 py-2 d-flex flex-wrap",children:[(0,n.jsx)("label",{htmlFor:"address",className:"me-3",children:"\u8ab2\u7a0b\u540d\u7a31"}),(0,n.jsxs)("p",{children:[s[0].title," (",s[0].instructor.name," \u8001\u5e2b)"]})]}),(0,n.jsxs)("div",{className:"mt-9 mt-sm-12 d-flex flex-column justify-content-between w-100",children:[d&&"\u6d3d\u8ac7\u5831\u50f9"!==d[0]&&(0,n.jsxs)("div",{className:"text-white d-flex align-items-sm-center",children:[(0,n.jsx)("p",{className:"me-5",children:"NT$".concat(d[0],"x").concat(d[1],"\u5802")}),(0,n.jsx)("p",{className:"text-warning",children:"\u5408\u8a08NT$".concat(d[0]*d[1])})]}),d&&"\u6d3d\u8ac7\u5831\u50f9"===d[0]&&(0,n.jsxs)("div",{className:"text-white d-flex fw-bold",children:[(0,n.jsx)("p",{className:"me-2",children:"\u65b9\u6848:"}),(0,n.jsx)("p",{className:"me-1",children:"\u5ba2\u88fd\u5316\u8ab2\u7a0b"}),(0,n.jsx)("p",{className:"text-warning",children:"(\u6d3d\u8ac7\u5831\u50f9)"})]}),(0,n.jsxs)("div",{className:"mt-3 d-flex flex-column flex-sm-row justify-content-sm-between",children:[(0,n.jsx)(c.rU,{className:"btn border px-12 py-2 text-white w-sm-48",to:"/placeOrder",children:"\u4fee\u6539\u8a02\u55ae"}),(0,n.jsx)("button",{type:"button",className:"btn bg-linear px-12 py-2 text-white w-sm-48 mt-3 mt-sm-0",onClick:function(){var e=document.getElementById("parentElement");e&&(e.innerHTML=h);var t=document.getElementById("_form_aiochk");t&&(window.alert("\u5c07\u70ba\u60a8\u5c0e\u5411\u7da0\u754c\u91d1\u6d41\u9801\u9762\u3002\n\u63d0\u9192\u60a8\uff0c\u672c\u5c08\u6848\u50c5\u70ba demo \u6027\u8cea\uff0c\u5207\u52ff\u8f38\u5165\u771f\u5be6\u4fe1\u7528\u5361\u5361\u865f\u7b49\u6a5f\u654f\u8cc7\u6599\u3002\n\u5982\u60a8\u4f7f\u7528\u300c\u7db2\u8def ATM \u300d\u4ed8\u6b3e\uff0c\u5efa\u8b70\u9078\u64c7\u300c\u53f0\u7063\u571f\u5730\u9280\u884c\u300d\u6216\u300c\u53f0\u65b0\u9280\u884c\u300d\uff0c\u7121\u9808\u5b89\u88dd\u8edf\u9ad4\u5373\u53ef\u89c0\u770b\u6a21\u64ec\u7684\u4ea4\u6613\u7d50\u679c\u3002"),t.submit())},children:"\u524d\u5f80\u4ed8\u6b3e"})]})]})]})]})})}),(0,n.jsx)("section",{id:"parentElement"})]}):(0,n.jsx)("div",{className:"error_msg",children:b})})}},4313:function(e,t,s){var a=s(5671),r=s(3144),l=s(1243),c="https://react-project-2-coding-tutorial-backend.onrender.com/api/course",n=new(function(){function e(){(0,a.Z)(this,e)}return(0,r.Z)(e,[{key:"searchAllCourses",value:function(){var e;return e=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.get("".concat(c,"/search"),{headers:{Authorization:e}})}},{key:"checkOut",value:function(e,t){var s;return s=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.get("".concat(c,"/payment/").concat(e,"/").concat(t),{headers:{Authorization:s}})}},{key:"enroll",value:function(e,t){var s;return s=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.post("".concat(c,"/enroll"),{studentId:e,courseId:t},{headers:{Authorization:s}})}}]),e}());t.Z=n}}]);
//# sourceMappingURL=183.ff25551a.chunk.js.map