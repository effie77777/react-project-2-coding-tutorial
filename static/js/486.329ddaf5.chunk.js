"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[486],{1486:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});var n=t(9439),o=t(2791),l=t(7689),a=t(9738),c=t(1243),i=t(6526);var r=t.p+"static/media/icon_fb.2e02184f0e9670d6a01f25ca0d4b4d3b.svg";var d=t.p+"static/media/icon_google.bbce75f8c7f6cd3d1c0db56d81258450.svg",m=t(184),u=function(e){var s=e.currentUser,t=e.setCurrentUser,u=(0,l.s0)(),p=(0,o.useState)(""),f=(0,n.Z)(p,2),g=f[0],h=f[1],b=(0,o.useState)(""),w=(0,n.Z)(b,2),x=w[0],j=w[1],v=(0,o.useState)(null),y=(0,n.Z)(v,2),N=y[0],k=y[1],_=(0,o.useState)(null),S=(0,n.Z)(_,2),C=S[0],F=S[1],Z=(0,a.Nq)({onSuccess:function(e){t(e),console.log("codeResponse: ",e)},onError:function(e){return console.log("Login Failed: ",e)}});return(0,o.useEffect)((function(){s?(k("\u60a8\u5df2\u7d93\u767b\u5165\u904e\u56c9 ! \u5c07\u70ba\u60a8\u5c0e\u5411\u500b\u4eba\u9801\u9762"),setTimeout((function(){k(null),u("/profile")}),2e3)):(window.fbAsyncInit=function(){window.FB.init({appId:"1581851269287930",cookie:!0,xfbml:!0,version:"v18.0"}),console.log("after init"),window.FB.AppEvents.logPageView()},function(e,s,t){var n,o=e.getElementsByTagName(s)[0];e.getElementById(t)||((n=e.createElement(s)).id=t,n.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(n,o))}(document,"script","facebook-jssdk"))}),[]),(0,o.useEffect)((function(){s&&s.access_token&&c.Z.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token=".concat(s.access_token),{headers:{Authorization:"Bearer ".concat(s.access_token),Accept:"application/json"}}).then((function(e){console.log("res: ",e)})).catch((function(e){console.log(e)}))}),[s]),(0,m.jsxs)("div",{className:"container-fluid",children:[N&&(0,m.jsx)("div",{className:"error_msg",children:N}),C&&(0,m.jsx)("div",{className:"success_msg",children:C}),!s&&(0,m.jsxs)("div",{children:[(0,m.jsx)("section",{className:"my-11",children:(0,m.jsxs)("form",{children:[(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{htmlFor:"email",className:"form-label",children:"\u4fe1\u7bb1"}),(0,m.jsx)("input",{type:"email",className:"form-control p-3",id:"email",name:"email",placeholder:"example@gmail.com",required:!0,max:"60",pattern:".+@.+\\.+.{2,}",onChange:function(e){h(e.target.value)}})]}),(0,m.jsxs)("div",{className:"mb-11",children:[(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("label",{htmlFor:"password",className:"form-label",children:"\u5bc6\u78bc"}),(0,m.jsx)("input",{type:"password",className:"form-control py-3 ps-3",id:"password",name:"password",required:!0,min:"8",onChange:function(e){j(e.target.value)}}),(0,m.jsx)("button",{type:"button",className:"btn p-0 position-absolute end-0 ms-2 me-2 me-sm-4",style:{top:"46%"},children:(0,m.jsx)("span",{class:"material-symbols-outlined font-fill-1 p-2",onClick:function(e){console.log(e.target);var s=document.querySelector("#password");"password"===s.type?s.type="text":s.type="password"},children:"visibility"})})]}),(0,m.jsxs)("p",{className:"mt-3",children:["8\u4f4d\u6578\u4ee5\u4e0a\uff0c\u81f3\u5c11\u4e00\u500b\u5927\u5beb\u82f1\u6587\u5b57\u6bcd\u3001\u4e00\u500b\u6578\u5b57\u3001\u4e00\u500b\u7279\u6b8a\u7b26\u865f(\u50c5\u9650",(0,m.jsx)("span",{className:"text-warning",children:"!@#%&=_?"}),")\u4e14",(0,m.jsx)("span",{className:"text-warning",children:"\u4e0d\u53ef\u6709\u7a7a\u683c"})]})]}),(0,m.jsx)("button",{type:"submit",className:"btn bg-linear text-white px-6 w-100 w-sm-40 w-md-30 w-lg-25 border-0",style:{paddingTop:"0.625rem",paddingBottom:"0.625rem"},onClick:function(e){e.preventDefault();var s=document.querySelector("#email");return console.log(s.validity),0===g.length||s.validity.patternMismatch?k("\u4fe1\u7bb1\u683c\u5f0f\u932f\u8aa4"):x.length<8?k("\u5bc6\u78bc\u81f3\u5c11\u9700\u70ba 8 \u4f4d\u6578"):void i.Z.login(g,x).then((function(e){console.log("successful! ",e),k(null),F(e.data.msg),setTimeout((function(){localStorage.setItem("user_data",JSON.stringify(e.data));var s=i.Z.getCurrentUser();t(s),F(null),u("/profile")}),2e3)})).catch((function(e){console.log(e),k(e.response.data)}))},children:"\u767b\u5165"})]})}),(0,m.jsxs)("section",{children:[(0,m.jsx)("div",{className:"border-top position-relative d-flex justify-content-center",children:(0,m.jsx)("p",{className:"position-absolute px-5 bg-fourth",style:{transform:"translateY(-50%)"},children:"\u5176\u5b83\u767b\u5165\u65b9\u5f0f"})}),(0,m.jsxs)("div",{className:"d-flex mt-12 flex-wrap",children:[(0,m.jsxs)("button",{type:"button",className:"btn border text-white py-3 w-100 w-sm-40 w-md-30 w-lg-25 me-sm-5 mb-4 mb-sm-0",onClick:function(){window.FB.login((function(e){console.log(e),t(e.authResponse.userID),"connected"===e.status&&window.FB.api("/me","GET",{fields:"name,email"},(function(e){console.log(e)}))}),{scope:"public_profile,email"})},children:[(0,m.jsx)("img",{src:r,alt:"Facebook icon",className:"w-6 h-6 me-4",style:{marginTop:"-0.25rem"}}),"Facebook \u767b\u5165"]}),(0,m.jsxs)("button",{type:"button",className:"btn border text-white py-3 w-100 w-sm-40 w-md-30 w-lg-25",onClick:function(){return Z()},children:[(0,m.jsx)("img",{src:d,alt:"Google icon",className:"w-5 h-5 me-4",style:{marginTop:"-0.125rem"}}),"Google \u767b\u5165"]}),(0,m.jsx)(a.kZ,{onSuccess:function(e){console.log(e),i.Z.loginWithGoogle(e.credential).then((function(e){console.log(e),localStorage.setItem("user_data",JSON.stringify(e.data)),t(i.Z.getCurrentUser()),k(null),u("/profile")})).catch((function(e){console.log(e)}))},onError:function(){console.log("Login Failed")}})]})]})]})]})}}}]);
//# sourceMappingURL=486.329ddaf5.chunk.js.map