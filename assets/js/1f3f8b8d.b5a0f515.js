"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3590],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var k=n.createContext({}),m=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(k.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,k=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),u=m(a),s=l,N=u["".concat(k,".").concat(s)]||u[s]||d[s]||r;return a?n.createElement(N,p(p({ref:e},o),{},{components:a})):n.createElement(N,p({ref:e},o))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=s;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i[u]="string"==typeof t?t:l,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6640:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>k,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),p=["components"],i={id:"fp4",title:"FP4",sidebar_label:"FP4"},k=void 0,m={unversionedId:"cryptojs/fp4",id:"cryptojs/fp4",title:"FP4",description:"FP4",source:"@site/../docs/cryptojs/fp4.md",sourceDirName:"cryptojs",slug:"/cryptojs/fp4",permalink:"/docs/cryptojs/fp4",draft:!1,tags:[],version:"current",frontMatter:{id:"fp4",title:"FP4",sidebar_label:"FP4"},sidebar:"docs",previous:{title:"FP2",permalink:"/docs/cryptojs/fp2"},next:{title:"FP8",permalink:"/docs/cryptojs/fp8"}},o={},u=[{value:"FP4",id:"fp4",level:2},{value:"new FP4()",id:"new-fp4",level:3},{value:"fP4.reduce()",id:"fp4reduce",level:3},{value:"fP4.norm()",id:"fp4norm",level:3},{value:"fP4.iszilch()",id:"fp4iszilch",level:3},{value:"fP4.isunity()",id:"fp4isunity",level:3},{value:"fP4.cmove(g, d)",id:"fp4cmoveg-d",level:3},{value:"fP4.isreal()",id:"fp4isreal",level:3},{value:"fP4.real()",id:"fp4real",level:3},{value:"fP4.geta()",id:"fp4geta",level:3},{value:"fP4.getb()",id:"fp4getb",level:3},{value:"fP4.equals(x)",id:"fp4equalsx",level:3},{value:"fP4.copy(x)",id:"fp4copyx",level:3},{value:"fP4.zero()",id:"fp4zero",level:3},{value:"fP4.one(x)",id:"fp4onex",level:3},{value:"fP4.set(c, d)",id:"fp4setc-d",level:3},{value:"fP4.seta(c)",id:"fp4setac",level:3},{value:"fP4.neg()",id:"fp4neg",level:3},{value:"fP4.conj()",id:"fp4conj",level:3},{value:"fP4.nconj()",id:"fp4nconj",level:3},{value:"fP4.add(x)",id:"fp4addx",level:3},{value:"fP4.sub(x)",id:"fp4subx",level:3},{value:"fP4.pmul(s)",id:"fp4pmuls",level:3},{value:"fP4.imul(s)",id:"fp4imuls",level:3},{value:"fP4.sqr()",id:"fp4sqr",level:3},{value:"fP4.mul(y)",id:"fp4muly",level:3},{value:"fP4.toString()",id:"fp4tostring",level:3},{value:"fP4.inverse()",id:"fp4inverse",level:3},{value:"fP4.times_i()",id:"fp4times_i",level:3},{value:"fP4.frob(f)",id:"fp4frobf",level:3},{value:"fP4.pow(e)",id:"fp4powe",level:3},{value:"fP4.xtr_A(w, y, z)",id:"fp4xtr_aw-y-z",level:3},{value:"fP4.xtr_D()",id:"fp4xtr_d",level:3},{value:"fP4.xtr_pow(n)",id:"fp4xtr_pown",level:3},{value:"fP4.xtr_pow2()",id:"fp4xtr_pow2",level:3},{value:"fP4.div2()",id:"fp4div2",level:3},{value:"fP4.div_i()",id:"fp4div_i",level:3},{value:"fP4.div_2i()",id:"fp4div_2i",level:3},{value:"fP4.qmul(s)",id:"fp4qmuls",level:3},{value:"fP4.sqrt()",id:"fp4sqrt",level:3}],d={toc:u};function s(t){var e=t.components,a=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"FP4"}),(0,r.kt)("h2",{id:"fp4"},"FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4"},"FP4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_FP4_new"},"new FP4()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+reduce"},".reduce()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+norm"},".norm()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+iszilch"},".iszilch()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+isunity"},".isunity()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+cmove"},".cmove(g, d)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+isreal"},".isreal()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+real"},".real()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+geta"},".geta()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+getb"},".getb()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+equals"},".equals(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+copy"},".copy(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+zero"},".zero()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+one"},".one(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+set"},".set(c, d)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+seta"},".seta(c)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+neg"},".neg()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+conj"},".conj()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+nconj"},".nconj()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+add"},".add(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+sub"},".sub(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+pmul"},".pmul(s)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+imul"},".imul(s)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+sqr"},".sqr()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+mul"},".mul(y)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+toString"},".toString()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+inverse"},".inverse()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+times_i"},".times_i()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+frob"},".frob(f)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+pow"},".pow(e)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+xtr_A"},".xtr_A(w, y, z)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+xtr_D"},".xtr_D()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+xtr_pow"},".xtr_pow(n)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+xtr_pow2"},".xtr_pow2()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+div2"},".div2()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+div_i"},".div_i()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+div_2i"},".div_2i()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+qmul"},".qmul(s)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP4+sqrt"},".sqrt()"))))),(0,r.kt)("a",{name:"new_FP4_new"}),(0,r.kt)("h3",{id:"new-fp4"},"new FP4()"),(0,r.kt)("p",null,"Creates an instance of FP4"),(0,r.kt)("a",{name:"FP4+reduce"}),(0,r.kt)("h3",{id:"fp4reduce"},"fP4.reduce()"),(0,r.kt)("p",null,"Reduces all components of possibly unreduced FP4 mod Modulus"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+norm"}),(0,r.kt)("h3",{id:"fp4norm"},"fP4.norm()"),(0,r.kt)("p",null,"Normalises the components of an FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+iszilch"}),(0,r.kt)("h3",{id:"fp4iszilch"},"fP4.iszilch()"),(0,r.kt)("p",null,"Tests for FP4 equal to zero"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+isunity"}),(0,r.kt)("h3",{id:"fp4isunity"},"fP4.isunity()"),(0,r.kt)("p",null,"Tests for FP4 equal to unity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+cmove"}),(0,r.kt)("h3",{id:"fp4cmoveg-d"},"fP4.cmove(g, d)"),(0,r.kt)("p",null,"Conditional copy of FP4 number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"copy depends on this value")))),(0,r.kt)("a",{name:"FP4+isreal"}),(0,r.kt)("h3",{id:"fp4isreal"},"fP4.isreal()"),(0,r.kt)("p",null,"test is w real? That is in a+ib test b is zero"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+real"}),(0,r.kt)("h3",{id:"fp4real"},"fP4.real()"),(0,r.kt)("p",null,"extract real part a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+geta"}),(0,r.kt)("h3",{id:"fp4geta"},"fP4.geta()"),(0,r.kt)("p",null,"extract a from this"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+getb"}),(0,r.kt)("h3",{id:"fp4getb"},"fP4.getb()"),(0,r.kt)("p",null,"extract b from this"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+equals"}),(0,r.kt)("h3",{id:"fp4equalsx"},"fP4.equals(x)"),(0,r.kt)("p",null,"Tests for equality of two FP4s"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance to compare")))),(0,r.kt)("a",{name:"FP4+copy"}),(0,r.kt)("h3",{id:"fp4copyx"},"fP4.copy(x)"),(0,r.kt)("p",null,"Copy FP4 to another FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance to be copied")))),(0,r.kt)("a",{name:"FP4+zero"}),(0,r.kt)("h3",{id:"fp4zero"},"fP4.zero()"),(0,r.kt)("p",null,"Set FP4 to zero"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+one"}),(0,r.kt)("h3",{id:"fp4onex"},"fP4.one(x)"),(0,r.kt)("p",null,"Set FP4 to unity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance to be set to one")))),(0,r.kt)("a",{name:"FP4+set"}),(0,r.kt)("h3",{id:"fp4setc-d"},"fP4.set(c, d)"),(0,r.kt)("p",null,"Set FP4 from two FP2 values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance")))),(0,r.kt)("a",{name:"FP4+seta"}),(0,r.kt)("h3",{id:"fp4setac"},"fP4.seta(c)"),(0,r.kt)("p",null,"Set FP4 from one FP2 value"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance")))),(0,r.kt)("a",{name:"FP4+neg"}),(0,r.kt)("h3",{id:"fp4neg"},"fP4.neg()"),(0,r.kt)("p",null,"Negation of FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+conj"}),(0,r.kt)("h3",{id:"fp4conj"},"fP4.conj()"),(0,r.kt)("p",null,"Conjugation of FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+nconj"}),(0,r.kt)("h3",{id:"fp4nconj"},"fP4.nconj()"),(0,r.kt)("p",null,"Negative conjugation of FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+add"}),(0,r.kt)("h3",{id:"fp4addx"},"fP4.add(x)"),(0,r.kt)("p",null,"addition of two FP4s"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance")))),(0,r.kt)("a",{name:"FP4+sub"}),(0,r.kt)("h3",{id:"fp4subx"},"fP4.sub(x)"),(0,r.kt)("p",null,"subtraction of two FP4s"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance")))),(0,r.kt)("a",{name:"FP4+pmul"}),(0,r.kt)("h3",{id:"fp4pmuls"},"fP4.pmul(s)"),(0,r.kt)("p",null,"Multiplication of an FP4 by an FP8"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"FP8 instance")))),(0,r.kt)("a",{name:"FP4+imul"}),(0,r.kt)("h3",{id:"fp4imuls"},"fP4.imul(s)"),(0,r.kt)("p",null,"Multiplication of an FP4 by an integer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"integer multiplier")))),(0,r.kt)("a",{name:"FP4+sqr"}),(0,r.kt)("h3",{id:"fp4sqr"},"fP4.sqr()"),(0,r.kt)("p",null,"Fast Squaring of an FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+mul"}),(0,r.kt)("h3",{id:"fp4muly"},"fP4.mul(y)"),(0,r.kt)("p",null,"Full unconditional Multiplication of two FP4s"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance, the multiplier")))),(0,r.kt)("a",{name:"FP4+toString"}),(0,r.kt)("h3",{id:"fp4tostring"},"fP4.toString()"),(0,r.kt)("p",null,"convert to hex string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+inverse"}),(0,r.kt)("h3",{id:"fp4inverse"},"fP4.inverse()"),(0,r.kt)("p",null,"Inverting an FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+times_i"}),(0,r.kt)("h3",{id:"fp4times_i"},"fP4.times_i()"),(0,r.kt)("p",null,"multiplies an FP4 instance by irreducible polynomial sqrt(1+sqrt(-1))"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+frob"}),(0,r.kt)("h3",{id:"fp4frobf"},"fP4.frob(f)"),(0,r.kt)("p",null,"Raises an FP4 to the power of the internal modulus p, using the Frobenius"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f"),(0,r.kt)("td",{parentName:"tr",align:null},"Modulus")))),(0,r.kt)("a",{name:"FP4+pow"}),(0,r.kt)("h3",{id:"fp4powe"},"fP4.pow(e)"),(0,r.kt)("p",null,"Raises an FP4 to the power of a BIG"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"BIG instance exponent")))),(0,r.kt)("a",{name:"FP4+xtr_A"}),(0,r.kt)("h3",{id:"fp4xtr_aw-y-z"},"fP4.xtr_A(w, y, z)"),(0,r.kt)("p",null,"Calculates the XTR addition function r=w_x-conj(x)_y+z"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"w"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"FP4 instance")))),(0,r.kt)("a",{name:"FP4+xtr_D"}),(0,r.kt)("h3",{id:"fp4xtr_d"},"fP4.xtr_D()"),(0,r.kt)("p",null,"Calculates the XTR doubling function r=x^2-2","*","conj(x)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+xtr_pow"}),(0,r.kt)("h3",{id:"fp4xtr_pown"},"fP4.xtr_pow(n)"),(0,r.kt)("p",null,"Calculates FP4 trace of an FP4 raised to the power of a BIG number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Big number")))),(0,r.kt)("a",{name:"FP4+xtr_pow2"}),(0,r.kt)("h3",{id:"fp4xtr_pow2"},"fP4.xtr_pow2()"),(0,r.kt)("p",null,"Calculates FP4 trace of c^a.d^b, where c and d are derived from FP4 traces of FP4s"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+div2"}),(0,r.kt)("h3",{id:"fp4div2"},"fP4.div2()"),(0,r.kt)("p",null,"Divide an FP4 by 2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+div_i"}),(0,r.kt)("h3",{id:"fp4div_i"},"fP4.div_i()"),(0,r.kt)("p",null,"Divide FP4 number by QNR"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+div_2i"}),(0,r.kt)("h3",{id:"fp4div_2i"},"fP4.div_2i()"),(0,r.kt)("p",null,"Divide an FP4 by QNR/2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("a",{name:"FP4+qmul"}),(0,r.kt)("h3",{id:"fp4qmuls"},"fP4.qmul(s)"),(0,r.kt)("p",null,"Multiplication of an FP4 by an FP"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"FP multiplier")))),(0,r.kt)("a",{name:"FP4+sqrt"}),(0,r.kt)("h3",{id:"fp4sqrt"},"fP4.sqrt()"),(0,r.kt)("p",null,"Calculate square root of an FP4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP4"},(0,r.kt)("code",null,"FP4")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP4{"}"}')))}s.isMDXComponent=!0}}]);