"use strict";(self.webpackChunkcode_tutorial=self.webpackChunkcode_tutorial||[]).push([[892],{3892:function(e,s,t){t.r(s);var l=t(9439),r=t(2791),i=t(7689),a=(t(9874),t(4313)),n=t(184);s.default=function(e){var s=e.currentUser,t=e.allCourses,c=e.setAllCourses,d=e.currentSearch,o=e.setCurrentSearch,m=(e.purchase,e.setPurchase),h=(0,r.useState)([]),x=(0,l.Z)(h,2),u=x[0],f=x[1],p=(0,r.useState)(null),j=(0,l.Z)(p,2),b=j[0],g=j[1],N=(0,i.s0)(),v=function(e){var s;s=e.target.id?e.target:e.target.closest("button");var l=t.filter((function(e){return e._id===s.id}));o(l),localStorage.setItem("current_search",JSON.stringify(l)),window.scrollTo({top:"0",behavior:"smooth"})},w=function(e){console.log(e.target);var s=e.target.id;s||(s=e.target.closest("button").id);var t=s.substring(s.indexOf(" ")+1,s.indexOf("\u5802")),l=s.substring(s.indexOf("$")+1,s.indexOf(" "));localStorage.setItem("purchase",JSON.stringify([l,t])),m([l,t]),N("/placeOrder")};return(0,r.useEffect)((function(){s?(g(null),a.Z.searchAllCourses().then((function(e){for(var s=e.data,t=s.newData,l=s.profile,r=0;r<t.length;r++)t[r].instructorPhoto=l[r];c(t);var i=JSON.parse(localStorage.getItem("current_search"));o(i)})).catch((function(e){console.log(e)}))):g("\u8acb\u5148\u767b\u5165\u6216\u8a3b\u518a")}),[]),(0,r.useEffect)((function(){var e=function(e,s){var t=[];return e.map((function(e){if(s[0]&&e._id!==s[0]._id)if(e.category===s[0].category)t.unshift({completelyMatch:!0,i:e});else{for(var l=0,r=0;r<s[0].category.split("\u3001").length;r++)e.category.includes(s[0].category.split("\u3001")[r])&&(l+=1);l>0&&t.push({matchCount:l,i:e})}})),t.sort((function(e,s){if(!e.completelyMatch&&!s.completelyMatch)return s.matchCount-e.matchCount})),t=t.map((function(e){return e.i})),t}(t,d);f(e)}),[d]),(0,n.jsxs)("div",{children:[b&&(0,n.jsx)("div",{className:"error_msg",children:b}),!b&&d.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("section",{className:"section",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-12 d-flex flex-wrap",children:[(0,n.jsxs)("div",{className:"col-12 col-md-7",children:[(0,n.jsxs)("div",{className:"card p-12 d-flex flex-column flex-md-row justify-content-between bg-third bg-opacity-10 rounded-24",children:[(0,n.jsxs)("div",{className:"w-md-35 w-lg-30 d-flex flex-column justify-content-center",children:[(0,n.jsx)("img",{src:d[0].instructorPhoto,alt:"the instructor",className:"mb-2 profile_img"}),(0,n.jsx)("p",{className:"detail-card-instructor-name",children:d[0].instructor.name})]}),(0,n.jsxs)("div",{className:"w-md-65 w-lg-70 d-flex flex-column",children:[(0,n.jsx)("h3",{class:"card-title fw-bold fs-4 text-white mb-1",children:d[0].title}),(0,n.jsx)("p",{className:"text-primary mb-3",children:d[0].category}),(0,n.jsx)("p",{children:d[0].description})]})]}),(0,n.jsx)("h3",{className:"title mt-15 mb-3 ms-6",children:"\u8b1b\u5e2b\u4ecb\u7d39"}),(0,n.jsxs)("div",{className:"card p-12 d-flex flex-column align-items-between bg-opacity-10 bg-third rounded-24",children:[(0,n.jsxs)("div",{className:"mb-sm-4 d-flex flex-wrap justify-content-between",children:[(0,n.jsxs)("div",{className:"d-flex w-100 mb-4 mb-sm-0 w-sm-60",children:[(0,n.jsx)("span",{class:"material-symbols-outlined me-2 text-primary fs-3 font-fill-1",children:"school"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"text-white",children:"\u5b78\u6b77"})," ",d[0].instructor.education]})]}),(0,n.jsxs)("div",{className:"d-flex w-100 mb-4 mb-sm-0 w-sm-37",children:[(0,n.jsx)("span",{class:"material-symbols-outlined me-2 text-primary fs-3 font-fill-1",children:"translate"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"text-white",children:"\u8a9e\u8a00"})," ",d[0].instructor.language]})]})]}),(0,n.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[(0,n.jsxs)("div",{className:"d-flex w-100 mb-4 mb-sm-0 w-sm-60",children:[(0,n.jsx)("span",{class:"material-symbols-outlined me-2 text-primary fs-3 font-fill-1",children:"work"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"text-white",children:"\u7d93\u6b77"})," ",d[0].instructor.workingExp]})]}),(0,n.jsxs)("div",{className:"d-flex w-100 w-sm-37",children:[(0,n.jsx)("span",{class:"material-symbols-outlined me-2 text-primary fs-3 font-fill-1",children:"workspace_premium"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"text-white",children:"\u7b49\u7d1a"})," ",d[0].instructor.languageLevel]})]})]}),(0,n.jsx)("div",{className:"w-100 h-1 border-bottom my-9"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"mb-4",children:d[0].instructor.simpleBio.substring(2,d[0].instructor.simpleBio.indexOf("2"))}),(0,n.jsx)("p",{children:d[0].instructor.simpleBio.substring(d[0].instructor.simpleBio.indexOf("2.")+2)})]})]}),(0,n.jsx)("h3",{className:"title mt-15 mb-3 ms-6",children:"\u8ab2\u7a0b\u7c21\u4ecb"}),(0,n.jsxs)("div",{className:"card p-12 d-flex flex-column align-items-between bg-opacity-10 bg-third text-white rounded-24",children:[(0,n.jsxs)("div",{className:"mb-9",children:[(0,n.jsx)("h4",{className:"border-start border-primary border-3 px-2 fs-3 mb-4",children:"\u9019\u5802\u8ab2\u4f60\u5c07\u6703\u5b78\u5230"}),(0,n.jsx)("ul",{children:d[0].expectToObtain.split(" ").map((function(e){return(0,n.jsxs)("li",{className:"d-flex",children:[(0,n.jsx)("span",{class:"material-symbols-outlined detail-square",style:{marginTop:"0.375rem"},children:"square"}),(0,n.jsx)("p",{children:e.substring(2)})]})}))})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{className:"border-start border-primary border-3 px-2 fs-3 mb-4",children:"\u70ba\u4ec0\u9ebc\u9019\u5802\u8ab2\u91cd\u8981\uff1f"}),(0,n.jsx)("ul",{children:d[0].importance.split(" ").map((function(e){return(0,n.jsxs)("li",{className:"d-flex",children:[(0,n.jsx)("span",{class:"material-symbols-outlined detail-square",style:{marginTop:"0.375rem"},children:"square"}),(0,n.jsx)("p",{children:e.substring(2)})]})}))})]})]})]}),(0,n.jsxs)("div",{className:"col-12 col-md-4 offset-md-1 d-flex flex-column position-md-fixed mt-15 mt-md-0",style:{top:"10.75rem",right:"3.5%"},children:[(0,n.jsxs)("div",{className:"d-flex flex-column flex-lg-row mb-3",children:[(0,n.jsx)("h3",{className:"title ms-6",children:"\u65b9\u6848\u9078\u64c7"}),(0,n.jsx)("small",{className:"ms-5 text-warning align-self-lg-end mb-lg-1",children:"(\u4ee5\u4e0b\u50f9\u683c\u5747\u70ba\u55ae\u5802\u8cbb\u7528)"})]}),(0,n.jsx)("ul",{className:"w-100 py-8 px-6 bg-opacity-10 bg-third h-fit-content rounded-24 detail-ul",style:{width:"85%"},children:d[0].plan.split("/").map((function(e,s){return(0,n.jsx)("li",{className:"detail-li",children:(0,n.jsxs)("button",{type:"button",className:"btn",id:e,onClick:w,children:[(0,n.jsx)("p",{children:e.substring(0,e.indexOf(" "))}),(0,n.jsx)("p",{children:e.substring(e.indexOf(" ")+1)})]})},s)}))})]})]})})})}),(0,n.jsx)("div",{className:"bg-fourth position-relative z-1",children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsxs)("section",{className:"d-flex flex-column align-items-center py-15 py-md-22",children:[(0,n.jsx)("h3",{className:"title text-center",children:"\u5176\u4ed6\u4eba\u4e5f\u770b\u4e86\u9019\u4e9b\u8ab2\u7a0b"}),(0,n.jsx)("div",{className:"title-vr mb-6 mb-md-18"}),(0,n.jsx)("div",{className:"row w-100",children:(0,n.jsx)("div",{className:"col-12 d-flex flex-wrap flex-md-nowrap overflow-md-auto",children:u.length>0&&u.map((function(e){return(0,n.jsxs)("button",{type:"button",className:"class-card btn",id:e._id,onClick:v,children:[(0,n.jsxs)("div",{className:"class-card-header",children:[(0,n.jsx)("img",{src:e.instructorPhoto,alt:"the instructor",className:"profile_img mb-2"}),(0,n.jsx)("p",{children:e.instructor.name})]}),(0,n.jsxs)("div",{className:"class-card-body text-start",children:[(0,n.jsx)("h3",{className:"fw-bold fs-3 text-white",children:e.title}),(0,n.jsx)("div",{className:"",children:e.category.split("\u3001").map((function(e){return(0,n.jsx)("p",{className:"text-primary border border-primary d-inline-block p-1 rounded-0 me-1",style:{fontSize:"0.9rem"},children:e})}))}),(0,n.jsx)("p",{className:"h-60 h-sm-50 h-md-60 mb-2",children:e.description})]}),(0,n.jsxs)("div",{className:"class-card-footer",children:[(0,n.jsx)("p",{className:"align-self-end mb-1",children:e.plan.slice(e.plan.indexOf("\u5206\u9418")-2,e.plan.indexOf("/"))}),(0,n.jsx)("p",{className:"fs-4 text-white",children:e.plan.slice(0,e.plan.indexOf(" "))})]})]},e._id)}))})})]})})})]})]})}},4313:function(e,s,t){var l=t(5671),r=t(9466),i=t(1243),a="http://localhost:8000/api/course",n=new(function(){function e(){(0,l.Z)(this,e)}return(0,r.Z)(e,[{key:"searchAllCourses",value:function(){var e;localStorage.getItem("user_data")?e=JSON.parse(localStorage.getItem("user_data")).token:e="";return i.Z.get("".concat(a,"/search"),{headers:{Authorization:e}})}},{key:"checkOut",value:function(e,s){var t;return t=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"",i.Z.get("".concat(a,"/payment/").concat(e,"/").concat(s),{headers:{Authorization:t}})}}]),e}());s.Z=n},9874:function(e,s,t){e.exports=t.p+"static/media/instructor.044aa957c1186ddacffc.jpg"}}]);
//# sourceMappingURL=892.c74226e5.chunk.js.map