"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(n),u=r,h=c["".concat(d,".").concat(u)]||c[u]||k[u]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={id:"gcm",title:"GCM",sidebar_label:"GCM"},d=void 0,o={unversionedId:"cryptojs/gcm",id:"cryptojs/gcm",title:"GCM",description:"GCM",source:"@site/../docs/cryptojs/gcm.md",sourceDirName:"cryptojs",slug:"/cryptojs/gcm",permalink:"/docs/cryptojs/gcm",draft:!1,tags:[],version:"current",frontMatter:{id:"gcm",title:"GCM",sidebar_label:"GCM"},sidebar:"docs",previous:{title:"FP48",permalink:"/docs/cryptojs/fp48"},next:{title:"HASH256",permalink:"/docs/cryptojs/hash256"}},m={},c=[{value:"GCM",id:"gcm",level:2},{value:"new GCM()",id:"new-gcm",level:3},{value:"gcM.init(nk, key, niv, iv)",id:"gcminitnk-key-niv-iv",level:3},{value:"gcM.add_header(header, len)",id:"gcmadd_headerheader-len",level:3},{value:"gcM.add_plain(plain, len) \u21d2",id:"gcmadd_plainplain-len-",level:3},{value:"gcM.add_cipher(cipher, len) \u21d2",id:"gcmadd_ciphercipher-len-",level:3}],k={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"GCM"}),(0,l.kt)("h2",{id:"gcm"},"GCM"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"this"),": ",(0,l.kt)("code",null,'{"{"}GCM{"}"}'),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#GCM"},"GCM"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new_GCM_new"},"new GCM()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#GCM+init"},".init(nk, key, niv, iv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#GCM+add_header"},".add_header(header, len)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#GCM+add_plain"},".add_plain(plain, len)")," \u21d2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#GCM+add_cipher"},".add_cipher(cipher, len)")," \u21d2")))),(0,l.kt)("a",{name:"new_GCM_new"}),(0,l.kt)("h3",{id:"new-gcm"},"new GCM()"),(0,l.kt)("p",null,"Creates an instance of GCM"),(0,l.kt)("a",{name:"GCM+init"}),(0,l.kt)("h3",{id:"gcminitnk-key-niv-iv"},"gcM.init(nk, key, niv, iv)"),(0,l.kt)("p",null,"Initialize GCM mode"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#GCM"},(0,l.kt)("code",null,"GCM")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"this"),": ",(0,l.kt)("code",null,'{"{"}GCM{"}"}'),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nk"),(0,l.kt)("td",{parentName:"tr",align:null},"is the key length in bytes, 16, 24 or 32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"the AES key as an array of 16 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"niv"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of bytes in the Initialisation Vector (IV)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iv"),(0,l.kt)("td",{parentName:"tr",align:null},"the IV")))),(0,l.kt)("a",{name:"GCM+add_header"}),(0,l.kt)("h3",{id:"gcmadd_headerheader-len"},"gcM.add_header(header, len)"),(0,l.kt)("p",null,"Add header (material to be authenticated but not encrypted)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#GCM"},(0,l.kt)("code",null,"GCM")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"this"),": ",(0,l.kt)("code",null,'{"{"}GCM{"}"}'),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"is the header material to be added")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"len"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of bytes in the header")))),(0,l.kt)("a",{name:"GCM+add_plain"}),(0,l.kt)("h3",{id:"gcmadd_plainplain-len-"},"gcM.add_plain(plain, len) \u21d2"),(0,l.kt)("p",null,"Add plaintext and extract ciphertext"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#GCM"},(0,l.kt)("code",null,"GCM")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": cipher is the ciphertext generated",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"this"),": ",(0,l.kt)("code",null,'{"{"}GCM{"}"}'),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plain"),(0,l.kt)("td",{parentName:"tr",align:null},"is the plaintext material to be added")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"len"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of bytes in the plaintext")))),(0,l.kt)("a",{name:"GCM+add_cipher"}),(0,l.kt)("h3",{id:"gcmadd_ciphercipher-len-"},"gcM.add_cipher(cipher, len) \u21d2"),(0,l.kt)("p",null,"Add Ciphertext - decrypts to plaintext"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#GCM"},(0,l.kt)("code",null,"GCM")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": plain is the plaintext material generated",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"this"),": ",(0,l.kt)("code",null,'{"{"}GCM{"}"}'),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cipher"),(0,l.kt)("td",{parentName:"tr",align:null},"is the ciphertext to be added")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"len"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of bytes in the plaintext")))))}u.isMDXComponent=!0}}]);