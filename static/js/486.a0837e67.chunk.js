"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[486],{1486:function(e,s,t){t.r(s),t.d(s,{default:function(){return o}});var l=t(9439),a=t(2791),n=t(7689),r=(t(5872),t(6526));t.p;t.p;var i=t(184),o=function(e){var s=e.currentUser,t=e.setCurrentUser,o=(e.profile,e.setProfile,(0,n.s0)()),c=(0,a.useState)(""),m=(0,l.Z)(c,2),u=m[0],d=m[1],p=(0,a.useState)(""),f=(0,l.Z)(p,2),h=f[0],x=f[1],g=(0,a.useState)(null),v=(0,l.Z)(g,2),b=v[0],j=v[1],y=(0,a.useState)(null),N=(0,l.Z)(y,2),w=N[0],C=N[1];return(0,a.useEffect)((function(){s&&(j("\u60a8\u5df2\u7d93\u767b\u5165\u904e\u56c9 ! \u5c07\u70ba\u60a8\u5c0e\u5411\u500b\u4eba\u9801\u9762"),setTimeout((function(){j(null),o("/profile")}),2e3))}),[]),(0,i.jsxs)("div",{className:"container-fluid",children:[b&&(0,i.jsx)("div",{className:"error_msg",children:b}),w&&(0,i.jsx)("div",{className:"success_msg",children:w}),!s&&(0,i.jsx)("div",{children:(0,i.jsx)("section",{className:"my-11",children:(0,i.jsxs)("form",{children:[(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)("label",{htmlFor:"email",className:"form-label",children:"\u4fe1\u7bb1"}),(0,i.jsx)("input",{type:"email",className:"form-control p-3",id:"email",name:"email",placeholder:"example@gmail.com",required:!0,max:"60",pattern:".+@.+\\.+.{2,}",onChange:function(e){d(e.target.value)}})]}),(0,i.jsxs)("div",{className:"mb-11",children:[(0,i.jsxs)("div",{className:"position-relative",children:[(0,i.jsx)("label",{htmlFor:"password",className:"form-label",children:"\u5bc6\u78bc"}),(0,i.jsx)("input",{type:"password",className:"form-control py-3 ps-3",id:"password",name:"password",required:!0,min:"8",onChange:function(e){x(e.target.value)}}),(0,i.jsx)("button",{type:"button",className:"btn p-0 position-absolute end-0 ms-2 me-2 me-sm-4",style:{top:"46%"},children:(0,i.jsx)("span",{class:"material-symbols-outlined font-fill-1 p-2",onClick:function(e){console.log(e.target);var s=document.querySelector("#password");"password"===s.type?s.type="text":s.type="password"},children:"visibility"})})]}),(0,i.jsxs)("p",{className:"mt-3",children:["8\u4f4d\u6578\u4ee5\u4e0a\uff0c\u81f3\u5c11\u4e00\u500b\u5927\u5beb\u82f1\u6587\u5b57\u6bcd\u3001\u4e00\u500b\u6578\u5b57\u3001\u4e00\u500b\u7279\u6b8a\u7b26\u865f(\u50c5\u9650",(0,i.jsx)("span",{className:"text-warning",children:"!@#%&=_?"}),")\u4e14",(0,i.jsx)("span",{className:"text-warning",children:"\u4e0d\u53ef\u6709\u7a7a\u683c"})]})]}),(0,i.jsx)("button",{type:"submit",className:"btn bg-linear text-white px-6 w-100 w-sm-40 w-md-30 w-lg-25 border-0",style:{paddingTop:"0.625rem",paddingBottom:"0.625rem"},onClick:function(e){e.preventDefault();var s=document.querySelector("#email");return console.log(s.validity),0===u.length||s.validity.patternMismatch?j("\u4fe1\u7bb1\u683c\u5f0f\u932f\u8aa4"):h.length<8?j("\u5bc6\u78bc\u81f3\u5c11\u9700\u70ba 8 \u4f4d\u6578"):void r.Z.login(u,h).then((function(e){console.log("successful! ",e),j(null),C(e.data.msg),setTimeout((function(){localStorage.setItem("user_data",JSON.stringify(e.data));var s=r.Z.getCurrentUser();t(s),C(null),o("/profile")}),2e3)})).catch((function(e){console.log(e),j(e.response.data)}))},children:"\u767b\u5165"})]})})})]})}}}]);
//# sourceMappingURL=486.a0837e67.chunk.js.map