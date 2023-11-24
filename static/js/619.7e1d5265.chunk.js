"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[619],{7619:function(e,t,s){s.r(t);var a=s(3433),r=s(9439),l=s(2791),c=s(7689),n=s(1087),i=(s(9874),s(4313)),o=s(184);t.default=function(e){var t=e.currentUser,s=(e.setCurrentUser,e.orderFromECPAY,e.setOrderFromECPAY),d=e.orderFromCustomer,m=e.setOrderFromCustomer,h=e.currentSearch,u=e.setCurrentSearch,x=e.purchase,f=e.setPurchase,p=(0,l.useState)(null),j=(0,r.Z)(p,2),N=j[0],g=j[1],b=(0,c.s0)();var v=function(e){var t=e.target.name,s=e.target.value,r=(0,a.Z)(d);r.forEach((function(e){for(var a in e)if(t===a){e[a]=s,m(r);break}}))};return(0,l.useEffect)((function(){if(t){u(JSON.parse(localStorage.getItem("current_search")));var e=JSON.parse(localStorage.getItem("purchase"))[0],s=JSON.parse(localStorage.getItem("purchase"))[1];"\u6d3d\u8ac7\u5831\u50f9"!==e&&(e=Number(e),s=Number(s)),f([e,s]),m([{name:t.data.username,tel:"",email:t.data.email,date:"",address:""}])}else g("\u8acb\u5148\u767b\u5165\u6216\u8a3b\u518a"),setTimeout((function(){b("/login")}),1500)}),[]),(0,o.jsx)("div",{className:"container-fluid",children:t?(0,o.jsxs)("div",{children:[(0,o.jsx)("section",{className:"py-11",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12 d-flex justify-content-center",children:(0,o.jsxs)("div",{className:"progress_bar",children:[(0,o.jsx)("div",{className:"border-top"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)("small",{children:"1"})}),(0,o.jsx)("p",{children:"\u586b\u5beb\u8cfc\u8cb7\u8cc7\u6599"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"border border-1 border-third bg-fourth",children:(0,o.jsx)("small",{className:"text-third",children:"2"})}),(0,o.jsx)("p",{children:"\u78ba\u8a8d\u8a02\u55ae\u8cc7\u8a0a"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"border border-1 border-third bg-fourth",children:(0,o.jsx)("small",{className:"text-third",children:"3"})}),(0,o.jsx)("p",{children:"\u6210\u529f\u8a3b\u518a\u8ab2\u7a0b"})]})]})})})}),h.length>0&&(0,o.jsx)("section",{className:"mt-12",children:(0,o.jsxs)("div",{className:"row align-items-center justify-content-center",children:[(0,o.jsx)("div",{className:"col-12 col-sm-8 col-md-4 mb-11 mb-md-0",children:(0,o.jsxs)("div",{className:"py-12 px-8 d-flex flex-column align-items-center bg-opacity-25 bg-third rounded-0 position-relative ms-md-6 me-md-n6",children:[(0,o.jsx)("img",{src:h[0].instructorPhoto,alt:"the instructor",className:"border border-primary border-3 profile_img"}),(0,o.jsx)("p",{className:"fw-bold text-white mt-6",children:h[0].title}),(0,o.jsx)("p",{className:"mt-1 text-primary",children:h[0].category}),(0,o.jsx)("p",{className:"mt-2 text-white",children:h[0].description}),(0,o.jsx)("div",{className:"right-arrow position-absolute opacity-25 top-50 d-none d-md-block end-n4",style:{transform:"translateY(-50%)"}}),(0,o.jsx)("div",{className:"right-arrow position-absolute opacity-25 left-0 d-md-none bottom-n4",style:{transform:"rotate(90deg) translateX(30%)"}})]})}),(0,o.jsx)("div",{className:"col-12 col-md-8",children:(0,o.jsxs)("form",{action:"",className:"py-12 px-8 ps-md-18 d-flex flex-row flex-wrap bg-opacity-10 bg-third rounded-0 justify-content-between ms-md-n6 me-md-6",children:[(0,o.jsx)("h3",{className:"fs-4 mb-12 text-white fw-bold text-center w-100",children:"\u8ab2\u7a0b\u5831\u540d"}),N&&(0,o.jsx)("div",{className:"error_msg w-100 mt-n3",children:N}),(0,o.jsxs)("div",{className:"w-100 w-sm-48 mt-3",children:[(0,o.jsx)("label",{htmlFor:"name",className:"mb-1",children:"\u59d3\u540d"}),(0,o.jsx)("input",{type:"text",name:"name",id:"name",className:"form-control",value:d[0].name,onChange:v})]}),(0,o.jsxs)("div",{className:"w-100 w-sm-48 mt-3",children:[(0,o.jsx)("label",{htmlFor:"tel",className:"mb-1",children:"\u624b\u6a5f\u865f\u78bc"}),(0,o.jsx)("input",{type:"tel",name:"tel",id:"tel",className:"form-control",value:d[0].tel,placeholder:"\u683c\u5f0f: 09xxxxxxxx",onChange:v})]}),(0,o.jsxs)("div",{className:"mt-6 w-100 w-sm-48",children:[(0,o.jsx)("label",{htmlFor:"email",className:"mb-1",children:"Email"}),(0,o.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control",value:d[0].email,onChange:v})]}),(0,o.jsxs)("div",{className:"mt-6 w-100 w-sm-48",children:[(0,o.jsx)("label",{htmlFor:"date",className:"mb-1",children:"\u60f3\u9810\u7d04\u7684\u65e5\u671f(\u7576\u5730\u6642\u9593)"}),(0,o.jsx)("input",{type:"date",name:"date",id:"date",className:"form-control",value:d[0].date,onChange:v})]}),(0,o.jsxs)("div",{className:"w-100 mt-6",children:[(0,o.jsx)("label",{htmlFor:"address",className:"mb-1",children:"\u4e0a\u8ab2\u5730\u9ede(\u8a73\u7d30\u5730\u5740)"}),(0,o.jsx)("input",{type:"text",name:"address",id:"address",className:"form-control",value:d[0].address,onChange:v})]}),(0,o.jsxs)("div",{className:"mt-9 mt-sm-15 d-flex flex-column justify-content-between w-100",children:[x&&"\u6d3d\u8ac7\u5831\u50f9"!==x[0]&&(0,o.jsxs)("div",{className:"text-white d-flex align-items-sm-center",children:[(0,o.jsx)("p",{className:"me-5",children:"NT$".concat(x[0],"x").concat(x[1],"\u5802")}),(0,o.jsx)("p",{className:"text-warning fs-sm-3",children:"\u5408\u8a08NT$".concat(x[0]*x[1])})]}),x&&"\u6d3d\u8ac7\u5831\u50f9"===x[0]&&(0,o.jsxs)("div",{className:"text-white d-flex fw-bold",children:[(0,o.jsx)("p",{className:"me-2",children:"\u65b9\u6848:"}),(0,o.jsx)("p",{className:"me-1",children:"\u5ba2\u88fd\u5316\u8ab2\u7a0b"}),(0,o.jsx)("p",{className:"text-warning",children:"(\u6d3d\u8ac7\u5831\u50f9)"})]}),(0,o.jsxs)("div",{className:"mt-3 d-flex flex-column flex-sm-row justify-content-sm-between",children:[(0,o.jsx)(n.rU,{className:"btn border px-12 py-2 text-white w-sm-48",to:"/detail",children:"\u91cd\u9078\u65b9\u6848"}),(0,o.jsx)("button",{type:"button",className:"btn bg-linear px-12 py-2 text-white w-sm-48 mt-3 mt-sm-0",onClick:function(){var e=function(){for(var e in d[0])if(0===d[0][e].length)switch(e){case"name":return"\u59d3\u540d";case"tel":return"\u624b\u6a5f\u865f\u78bc";case"email":return"Email";case"date":return"\u60f3\u9810\u7d04\u7684\u65e5\u671f";case"address":return"\u4e0a\u8ab2\u5730\u9ede"}return"true"}(),t=Number(d[0].date.replaceAll("-","")),a=(new Date).toLocaleDateString();if(a=Number(a.replaceAll("/","")),"true"!==e)g("\u8acb\u586b\u5beb\u300c".concat(e,"\u300d\u6b04\u4f4d"));else if(/^09\d{8}$/.test(d[0].tel))if(/^\w{2,}@\w{2,}\.\w{2,}$/.test(d[0].email))if(t<=a)g("\u9810\u7d04\u65e5\u671f\u4e0d\u53ef\u5c0f\u65bc\u6216\u7b49\u65bc\u4eca\u65e5\u65e5\u671f");else if(d[0].address.length<8)g("\u8acb\u586b\u5beb\u8a73\u7d30\u7684\u4e0a\u8ab2\u5730\u9ede");else{localStorage.setItem("order_from_customer",JSON.stringify(d[0])),g(null);var r=x[0]*x[1];i.Z.checkOut(h[0].title,r).then((function(e){console.log("inside checkout component. d is: ",e),s(e.data.substring(0,e.data.indexOf("<script"))+"</form>"),b("/checkOut")})).catch((function(e){console.log(e)}))}else g("\u8acb\u78ba\u8a8d Email \u662f\u5426\u6b63\u78ba\u3002\u683c\u5f0f\u7bc4\u4f8b\u70ba example@gmail.com");else g("\u624b\u6a5f\u865f\u78bc\u683c\u5f0f\u70ba 09xxxxxxxx\uff0c\u5171 10 \u4f4d\u6578\u5b57")},children:"\u78ba\u8a8d\u8a02\u55ae"})]})]})]})})]})})]}):(0,o.jsx)("div",{className:"error_msg",children:N})})}},4313:function(e,t,s){var a=s(5671),r=s(3144),l=s(1243),c="https://react-project-2-coding-tutorial-backend.onrender.com/api/course",n=new(function(){function e(){(0,a.Z)(this,e)}return(0,r.Z)(e,[{key:"searchAllCourses",value:function(){var e;return e=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.get("".concat(c,"/search"),{headers:{Authorization:e}})}},{key:"checkOut",value:function(e,t){var s;return s=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.get("".concat(c,"/payment/").concat(e,"/").concat(t),{headers:{Authorization:s}})}},{key:"enroll",value:function(e,t){var s;return s=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",l.Z.post("".concat(c,"/enroll"),{studentId:e,courseId:t},{headers:{Authorization:s}})}}]),e}());t.Z=n},9874:function(e,t,s){e.exports=s.p+"static/media/instructor.044aa957c1186ddacffc.jpg"}}]);
//# sourceMappingURL=619.7e1d5265.chunk.js.map