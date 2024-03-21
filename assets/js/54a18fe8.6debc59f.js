"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3591],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),y=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=y(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=y(n),d=a,m=g["".concat(i,".").concat(d)]||g[d]||c[d]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[g]="string"==typeof e?e:a,o[1]=p;for(var y=2;y<l;y++)o[y]=n[y];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>y,toc:()=>g});var r=n(8168),a=n(8587),l=(n(6540),n(5680)),o=["components"],p={id:"unit64",title:"UInt64",sidebar_label:"UInt64"},i=void 0,y={unversionedId:"cryptojs/unit64",id:"cryptojs/unit64",title:"UInt64",description:"UInt64",source:"@site/../docs/cryptojs/uint64.md",sourceDirName:"cryptojs",slug:"/cryptojs/unit64",permalink:"/docs/cryptojs/unit64",draft:!1,tags:[],version:"current",frontMatter:{id:"unit64",title:"UInt64",sidebar_label:"UInt64"},sidebar:"docs",previous:{title:"SHA3",permalink:"/docs/cryptojs/sha3"},next:{title:"D-TA Overview",permalink:"/docs/d-ta-overview"}},u={},g=[{value:"UInt64",id:"uint64",level:2},{value:"new UInt64(top, bot)",id:"new-uint64top-bot",level:3},{value:"uInt64.add(y)",id:"uint64addy",level:3},{value:"uInt64.copy()",id:"uint64copy",level:3},{value:"uInt64.shlb()",id:"uint64shlb",level:3}],c={toc:g},d="wrapper";function m(e){var t=e.components,n=(0,a.A)(e,o);return(0,l.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("a",{name:"UInt64"}),(0,l.yg)("h2",{id:"uint64"},"UInt64"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": global class",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"this"),": ",(0,l.yg)("code",null,'{"{"}UInt64{"}"}'),"  "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#UInt64"},"UInt64"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#new_UInt64_new"},"new UInt64(top, bot)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#UInt64+add"},".add(y)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#UInt64+copy"},".copy()")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#UInt64+shlb"},".shlb()"))))),(0,l.yg)("a",{name:"new_UInt64_new"}),(0,l.yg)("h3",{id:"new-uint64top-bot"},"new UInt64(top, bot)"),(0,l.yg)("p",null,"Creates an instance of UInt64. Rudimentary unsigned 64-bit type for SHA384 and SHA512"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"top"),(0,l.yg)("td",{parentName:"tr",align:null},"Top 32 bits")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bot"),(0,l.yg)("td",{parentName:"tr",align:null},"Bottom 32 bits")))),(0,l.yg)("a",{name:"UInt64+add"}),(0,l.yg)("h3",{id:"uint64addy"},"uInt64.add(y)"),(0,l.yg)("p",null,"Add value"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.yg)("a",{parentName:"p",href:"#UInt64"},(0,l.yg)("code",null,"UInt64")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"this"),": ",(0,l.yg)("code",null,'{"{"}UInt64{"}"}'),"  "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"y"),(0,l.yg)("td",{parentName:"tr",align:null},"UInt64 value")))),(0,l.yg)("a",{name:"UInt64+copy"}),(0,l.yg)("h3",{id:"uint64copy"},"uInt64.copy()"),(0,l.yg)("p",null,"Copy value"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.yg)("a",{parentName:"p",href:"#UInt64"},(0,l.yg)("code",null,"UInt64")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"this"),": ",(0,l.yg)("code",null,'{"{"}UInt64{"}"}'),"  "),(0,l.yg)("a",{name:"UInt64+shlb"}),(0,l.yg)("h3",{id:"uint64shlb"},"uInt64.shlb()"),(0,l.yg)("p",null,"Shift left"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.yg)("a",{parentName:"p",href:"#UInt64"},(0,l.yg)("code",null,"UInt64")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"this"),": ",(0,l.yg)("code",null,'{"{"}UInt64{"}"}')))}m.isMDXComponent=!0}}]);