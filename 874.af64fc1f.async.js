"use strict";(self.webpackChunklx_document=self.webpackChunklx_document||[]).push([[874,486],{2874:function(X,L,c){c.r(L),c.d(L,{Icon:function(){return E},UploadOss:function(){return ut},iconConfig:function(){return ot}});var B=c(97857),R=c.n(B),Y=c(15009),x=c.n(Y),k=c(99289),T=c.n(k),b=c(5574),M=c.n(b),U=c(67294),q=c(96974),_=c(32512),tt=c(82925),nt=c(45360),et=c(28459),st=c(50115),G=c(38703),it={doc:"application/msword",ppt:"application/vnd.ms-powerpoint",xls:"application/vnd.ms-excel",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",rar:"application/x-rar-compressed",zip:"application/zip",pdf:"application/pdf",mp4:"video/mp4",mp3:"audio/mpeg",jpg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",tiff:"image/tiff",psd:"image/vnd.adobe.photoshop",html:"text/html",css:"text/css",js:"text/javascript",json:"application/json",txt:"text/plain",md:"text/markdown",xml:"application/xml",csv:"text/csv",rtf:"application/rtf"},H=c(16941),n=c(85893),m=[],d=[],z=!0;function at(a){var mt=(0,q.TH)(),dt=nt.ZP.useMessage(),W=M()(dt,2),A=W[0],ft=W[1],vt=(0,U.useState)([]),Q=M()(vt,2),O=Q[0],N=Q[1],pt=(0,U.useState)([]),V=M()(pt,2),P=V[0],C=V[1],gt={normal:"icon-jiazai--xian",success:"icon-order",exception:"icon-yujing"},D=a.type?a.type.map(function(t){return it[t]}):[],j=function(){var t=T()(x()().mark(function r(u,e,s){var l,i;return x()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:u.type.includes("image")||u.type.includes("video")?(e||e===0?(l=m[e],l.uploadPercent=s||-1,s&&s<0?l.status="exception":s&&s===100?l.status="success":l.status="normal",m.splice(e,1,l)):m.push(u),N(m.map(function(o,p){return o.id=p,o}))):(e||e===0?(i=d[e],i.uploadPercent=s||-1,s&&s<0?i.status="exception":s&&s===100?i.status="success":i.status="normal",d.splice(e,1,i)):d.push(u),C(d.map(function(o,p){return o.id=p,o})));case 1:case"end":return v.stop()}},r)}));return function(u,e,s){return t.apply(this,arguments)}}(),Z=function(r){var u=Math.ceil(r/1024);return u<1024?u.toFixed(2)+"kb":(u/1024).toFixed(2)+"M"},S=function(r,u){r===1?m=u:d=u};(0,U.useEffect)(function(){a.fileLists&&(C(a.fileLists),S(2,a.fileLists)),a.imgLists&&(N(a.imgLists),S(1,a.imgLists))},[a]);var ht=function(r,u){r.type.includes("image")||r.type.includes("video")?(m[u].url=r.url,N(m.map(function(e,s){return e.id=s,e}))):(d[u].url=r.url,C(d.map(function(e,s){return e.id=s,e})))},$=function(r,u){var e=r.map(function(){var s=T()(x()().mark(function l(i,h){var v,o,p,F,f;return x()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return console.log(D,D.includes(i.type),i.type),v=i.type.includes("image")||i.type.includes("video")?m:d,o=r.filter(function(y){return y.type.includes("image")||y.type.includes("video")}).length,p=r.length-o,F=i.type.includes("image")||i.type.includes("video")?o:p,f=u||v.length-F+h,I.abrupt("return",new Promise(function(y,w){if(a.type&&!D.includes(i.type))return A.open({type:"error",content:"\u53EA\u80FD\u4E0A\u4F20".concat(a.type,"\u7C7B\u578B\u7684\u6587\u4EF6")}),z=!1,j(i,f,-1),w(i);if(a.size&&a.size<i.size/1024)return A.open({type:"error",content:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7".concat(Z(a.size*1024))}),z=!1,j(i,f,-1),w(i);z=!0,window.$UPLOAD.oneUpload(i,0,function(g){return g[0]&&g[0].type?(ht(g[0],f),y(g[0])):(j(i,f,-1),w(g))},"sl-web-react",mt.key,"","",function(g){var Lt=Math.round(g.loaded*100/g.total);j(i,f,Lt)})}).catch(function(){var y=i;return j(i,f,-1),y.rejectType="reject",y}));case 7:case"end":return I.stop()}},l)}));return function(l,i){return s.apply(this,arguments)}}());Promise.all(e).then(function(s){var l=s.filter(function(o){return o.rejectType!=="reject"}).length,i=s.length-l,h=l>0?"\u6210\u529F\u4E0A\u4F20".concat(l,"\u4E2A\u6587\u4EF6,\u5931\u8D25").concat(i,"\u4E2A"):"\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\uFF01";z&&A.open({type:l?"success":"error",content:h});var v={imgLists:m.filter(function(o){return D.includes(o.type)}),fileLists:d.filter(function(o){return D.includes(o.type)})};l?a.success(v):a.fail(s)}).catch(function(s){a.fail(s)})},yt=(0,U.useCallback)(function(t){a.quantity&&a.quantity<t.length&&(A.open({type:"error",content:"\u53EA\u80FD\u4E0A\u4F20".concat(a.quantity,"\u4E2A\u6587\u4EF6")}),t=t.filter(function(u,e){return a.quantity?e<a.quantity:u}));var r=t.map(function(){var u=T()(x()().mark(function e(s,l){var i,h;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=s.type.includes("image")||s.type.includes("video")?m:d,h=i.length+l,o.abrupt("return",new Promise(function(p){var F=new FileReader;F.readAsDataURL(s),F.onload=function(){var f={url:F.result||"",size:t[l].size,name:t[l].name,type:t[l].type,uploadPercent:0,id:h,status:a.quantity&&a.quantity<l?"exception":"normal",file:t[l]};j(f),p(f)}}));case 3:case"end":return o.stop()}},e)}));return function(e,s){return u.apply(this,arguments)}}());Promise.all(r).then(function(){$(t)})},[]),J=(0,_.uI)({onDrop:yt}),xt=J.getRootProps,jt=J.getInputProps,Ft=J.isDragActive;return(0,n.jsx)("div",{children:(0,n.jsxs)(et.ZP,{theme:{token:{colorPrimary:"#000000"}},locale:tt.Z,children:[ft,(0,n.jsxs)("div",R()(R()({},xt()),{},{className:"uploadOss",children:[(0,n.jsx)("input",R()({},jt())),(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)(E,{type:"icon-shangchuan"})}),Ft?(0,n.jsx)("p",{children:"\u5C06\u6587\u4EF6\u62D6\u653E\u5230\u6B64\u5904..."}):(0,n.jsx)("p",{children:"\u5C06\u4E00\u4E9B\u6587\u4EF6\u62D6\u653E\u5230\u6B64\u5904\uFF0C\u6216\u5355\u51FB\u4EE5\u9009\u62E9\u6587\u4EF6"})]})),(0,n.jsx)("div",{className:"imgUrls",children:(0,n.jsx)(H.ReactSortable,{list:O,setList:N,className:"imgUrls",children:O.map(function(t,r){return(0,n.jsxs)("div",{className:"imgUrlItem",children:[(0,n.jsxs)("div",{children:[t.type.includes("image")?(0,n.jsx)(st.Z,{src:t.url}):(0,n.jsx)("video",{muted:!0,controls:!0,src:t.url}),t.status==="normal"?(0,n.jsx)("div",{className:"progressBox",children:(0,n.jsx)(G.Z,{type:"circle",percent:t.uploadPercent,status:t.status,className:"progress",size:"small"})}):t.status&&t.status==="exception"?(0,n.jsx)("div",{className:"imgException",children:(0,n.jsx)("div",{className:"imgExceptionBtn",onClick:function(){$([t.file],r)},children:t.status==="exception"?"\u91CD\u65B0\u4E0A\u4F20":""})}):""]}),(0,n.jsx)("div",{className:"iconDelete",onClick:function(){var e=JSON.parse(JSON.stringify(O));e.splice(r,1),N(e),S(1,e)},children:(0,n.jsx)(E,{type:"icon-delete"})})]},r)})})}),(0,n.jsx)("div",{className:"fileLists",children:(0,n.jsx)(H.ReactSortable,{list:P,setList:C,className:"fileList",children:P.map(function(t,r){return(0,n.jsxs)("div",{className:"fileItems",children:[(0,n.jsxs)("div",{className:"fileItemLeft",children:[(0,n.jsxs)("div",{className:"fileItemContent",children:[(0,n.jsx)("span",{className:t.status==="normal"?"loader":"",children:(0,n.jsx)(E,{type:t.status?gt[t.status]:"icon-jiazai--xian"})}),(0,n.jsx)("a",{className:(t.status?t.status:"normal")+"_color",href:t.url,children:t.name})]}),t.status?(0,n.jsx)("div",{className:(t.status?t.status:"normal")+"_color",onClick:function(){$([t.file],r)},children:t.status==="exception"?"\u91CD\u65B0\u4E0A\u4F20(".concat(Z(t.size),")"):t.status==="success"?"\u4E0A\u4F20\u6210\u529F(".concat(Z(t.size),")"):""}):""]}),t.status==="normal"?(0,n.jsx)(G.Z,{percent:t.uploadPercent,status:t.status,className:"progress",strokeWidth:2}):"",(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"delete",onClick:function(){var e=JSON.parse(JSON.stringify(P));e.splice(r,1),C(e),S(2,e)},children:(0,n.jsx)(E,{type:"icon-delete2"})})})]},r)})})})]})})}var ut=at,ct=c(36683),K=c(5486),rt=(0,ct.Z)({scriptUrl:K.iconUrl});function lt(a){return(0,n.jsx)(rt,{type:a.type})}var E=lt,ot=K.iconUrl},5486:function(X,L,c){c.r(L),c.d(L,{iconUrl:function(){return B}});var B="//at.alicdn.com/t/c/font_3656163_lb3zsi0tdm.js"}}]);
