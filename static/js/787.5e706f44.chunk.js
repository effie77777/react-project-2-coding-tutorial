"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[787],{7787:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var s=n(9439),o=n(2791),a=n(7689),i=n(562),l=n(1243),c=n(6526);var r=n.p+"static/media/icon_fb.2e02184f0e9670d6a01f25ca0d4b4d3b.svg",d=n(184),u=function(e){var t=e.currentUser,n=e.setCurrentUser,u=(0,a.s0)(),m=(0,o.useState)(""),p=(0,s.Z)(m,2),f=p[0],h=p[1],g=(0,o.useState)(""),x=(0,s.Z)(g,2),b=x[0],v=x[1],w=(0,o.useState)(null),y=(0,s.Z)(w,2),j=y[0],N=y[1],k=(0,o.useState)(null),S=(0,s.Z)(k,2),_=S[0],F=S[1];(0,o.useEffect)((function(){t&&t.access_token&&l.Z.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token=".concat(t.access_token),{headers:{Authorization:"Bearer ".concat(t.access_token),Accept:"application/json"}}).then((function(e){console.log("res: ",e)})).catch((function(e){console.log(e)}))}),[t]),(0,o.useEffect)((function(){t?(N("\u60a8\u5df2\u7d93\u767b\u5165\u904e\u56c9 ! \u5c07\u70ba\u60a8\u5c0e\u5411\u500b\u4eba\u9801\u9762"),setTimeout((function(){N(null),u("/profile")}),2e3)):(window.fbAsyncInit=function(){window.FB.init({appId:"1581851269287930",cookie:!0,xfbml:!0,version:"v18.0"}),window.FB.AppEvents.logPageView()},function(e,t,n){var s,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((s=e.createElement(t)).id=n,s.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(s,o))}(document,"script","facebook-jssdk"))}),[]);var Z=document.querySelector("#ssJRIf");return console.log(Z),(0,d.jsxs)("div",{className:"container-fluid",children:[j&&(0,d.jsx)("div",{className:"error_msg",children:j}),_&&(0,d.jsx)("div",{className:"success_msg",children:_}),!t&&(0,d.jsxs)("div",{children:[(0,d.jsx)("section",{className:"my-11",children:(0,d.jsxs)("form",{children:[(0,d.jsxs)("div",{className:"mb-6",children:[(0,d.jsx)("label",{htmlFor:"email",className:"form-label",children:"\u4fe1\u7bb1"}),(0,d.jsx)("input",{type:"email",className:"form-control px-3 py-2",id:"email",name:"email",placeholder:"example@gmail.com",required:!0,max:"60",pattern:".+@.+\\.+.{2,}",onChange:function(e){h(e.target.value)}})]}),(0,d.jsxs)("div",{className:"mb-11",children:[(0,d.jsxs)("div",{className:"position-relative",children:[(0,d.jsx)("label",{htmlFor:"password",className:"form-label",children:"\u5bc6\u78bc"}),(0,d.jsx)("input",{type:"password",className:"form-control py-2 ps-3",id:"password",name:"password",required:!0,min:"8",onChange:function(e){v(e.target.value)}}),(0,d.jsx)("button",{type:"button",className:"btn p-0 position-absolute end-0 ms-2 me-2 me-sm-4",style:{top:"46%"},children:(0,d.jsx)("span",{class:"material-symbols-outlined font-fill-1 p-2",onClick:function(e){console.log(e.target);var t=document.querySelector("#password");"password"===t.type?t.type="text":t.type="password"},children:"visibility"})})]}),(0,d.jsxs)("p",{className:"mt-3",children:["8\u4f4d\u6578\u4ee5\u4e0a\uff0c\u81f3\u5c11\u4e00\u500b\u5927\u5beb\u82f1\u6587\u5b57\u6bcd\u3001\u4e00\u500b\u6578\u5b57\u3001\u4e00\u500b\u7279\u6b8a\u7b26\u865f(\u50c5\u9650",(0,d.jsx)("span",{className:"text-warning",children:"!@#%&=_?"}),")\u4e14",(0,d.jsx)("span",{className:"text-warning",children:"\u4e0d\u53ef\u6709\u7a7a\u683c"})]})]}),(0,d.jsx)("button",{type:"submit",className:"btn bg-linear text-white border-0 rounded-1",style:{paddingTop:"0.625rem",paddingBottom:"0.625rem",width:"200px",height:"40px"},onClick:function(e){e.preventDefault();var t=document.querySelector("#email");return console.log(t.validity),0===f.length||t.validity.patternMismatch?N("\u4fe1\u7bb1\u683c\u5f0f\u932f\u8aa4"):b.length<8?N("\u5bc6\u78bc\u81f3\u5c11\u9700\u70ba 8 \u4f4d\u6578"):void c.Z.login(f,b).then((function(e){N(null),F(e.data.msg),setTimeout((function(){localStorage.setItem("user_data",JSON.stringify(e.data));var t=c.Z.getCurrentUser();n(t),F(null),u("/profile")}),2e3)})).catch((function(e){console.log(e),N(e.response.data)}))},children:"\u767b\u5165"})]})}),(0,d.jsxs)("section",{children:[(0,d.jsx)("div",{className:"border-top position-relative d-flex justify-content-center",children:(0,d.jsx)("p",{className:"position-absolute px-5 bg-fourth",style:{transform:"translateY(-50%)"},children:"\u5176\u5b83\u767b\u5165\u65b9\u5f0f"})}),(0,d.jsxs)("div",{className:"d-flex mt-12 flex-wrap",children:[(0,d.jsxs)("button",{type:"button",className:"btn border bg-white text-dark me-5 mb-4 mb-sm-0 rounded-1",style:{fontSize:"14px",width:"200px",height:"40px",fontFamily:"sans-serif",paddingRight:"6px",paddingLeft:"6px"},onClick:function(){window.FB.login((function(e){var t=e.authResponse.accessToken;"connected"===e.status&&window.FB.api("/me","GET",{fields:"name,email"},(function(e){c.Z.loginWithFacebook(t,e).then((function(e){n(e.data),localStorage.setItem("user_data",JSON.stringify(e.data)),u("/profile")})).catch((function(e){console.log(e)}))}))}),{scope:"public_profile,email"})},children:[(0,d.jsx)("img",{src:r,alt:"Facebook icon",style:{marginRight:"8px",height:"18px"}}),"\u4f7f\u7528 Facebook \u5e33\u6236\u767b\u5165"]}),(0,d.jsx)(i.kZ,{onSuccess:function(e){c.Z.loginWithGoogle(e.credential).then((function(e){localStorage.setItem("user_data",JSON.stringify(e.data)),n(c.Z.getCurrentUser()),N(null),u("/profile")})).catch((function(e){console.log(e)}))},onError:function(){console.log("Login Failed")},width:"200px"})]})]})]})]})}}}]);
//# sourceMappingURL=787.5e706f44.chunk.js.map