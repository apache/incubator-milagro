"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3479],{5680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>s});var t=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function g(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=t.createContext({}),i=function(e){var a=t.useContext(y),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},m=function(e){var a=i(e.components);return t.createElement(y.Provider,{value:a},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),o=i(n),d=l,s=o["".concat(y,".").concat(d)]||o[d]||u[d]||r;return n?t.createElement(s,p(p({ref:a},m),{},{components:n})):t.createElement(s,p({ref:a},m))}));function s(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=d;var g={};for(var y in a)hasOwnProperty.call(a,y)&&(g[y]=a[y]);g.originalType=e,g[o]="string"==typeof e?e:l,p[1]=g;for(var i=2;i<r;i++)p[i]=n[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4191:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>y,default:()=>s,frontMatter:()=>g,metadata:()=>i,toc:()=>o});var t=n(8168),l=n(8587),r=(n(6540),n(5680)),p=["components"],g={id:"fp2",title:"FP2",sidebar_label:"FP2"},y=void 0,i={unversionedId:"cryptojs/fp2",id:"cryptojs/fp2",title:"FP2",description:"FP2",source:"@site/../docs/cryptojs/fp2.md",sourceDirName:"cryptojs",slug:"/cryptojs/fp2",permalink:"/docs/cryptojs/fp2",draft:!1,tags:[],version:"current",frontMatter:{id:"fp2",title:"FP2",sidebar_label:"FP2"},sidebar:"docs",previous:{title:"FP",permalink:"/docs/cryptojs/fp"},next:{title:"FP4",permalink:"/docs/cryptojs/fp4"}},m={},o=[{value:"FP2",id:"fp2",level:2},{value:"new FP2()",id:"new-fp2",level:3},{value:"fP2.reduce()",id:"fp2reduce",level:3},{value:"fP2.norm()",id:"fp2norm",level:3},{value:"fP2.iszilch()",id:"fp2iszilch",level:3},{value:"fP2.isunity()",id:"fp2isunity",level:3},{value:"fP2.cmove(g, d)",id:"fp2cmoveg-d",level:3},{value:"fP2.equals(x)",id:"fp2equalsx",level:3},{value:"fP2.getA()",id:"fp2geta",level:3},{value:"fP2.getB()",id:"fp2getb",level:3},{value:"fP2.set(c, d)",id:"fp2setc-d",level:3},{value:"fP2.seta(c)",id:"fp2setac",level:3},{value:"fP2.bset(c, d)",id:"fp2bsetc-d",level:3},{value:"fP2.bseta(c)",id:"fp2bsetac",level:3},{value:"fP2.copy(x)",id:"fp2copyx",level:3},{value:"fP2.zero()",id:"fp2zero",level:3},{value:"fP2.one(x)",id:"fp2onex",level:3},{value:"fP2.neg(x)",id:"fp2negx",level:3},{value:"fP2.conj()",id:"fp2conj",level:3},{value:"fP2.add(x)",id:"fp2addx",level:3},{value:"fP2.sub(x)",id:"fp2subx",level:3},{value:"fP2.pmul(s)",id:"fp2pmuls",level:3},{value:"fP2.imul(s)",id:"fp2imuls",level:3},{value:"fP2.sqr()",id:"fp2sqr",level:3},{value:"fP2.mul(y)",id:"fp2muly",level:3},{value:"fP2.sqrt() \u21d2",id:"fp2sqrt-",level:3},{value:"fP2.toString()",id:"fp2tostring",level:3},{value:"fP2.inverse()",id:"fp2inverse",level:3},{value:"fP2.div2()",id:"fp2div2",level:3},{value:"fP2.times_i()",id:"fp2times_i",level:3},{value:"fP2.mul_ip()",id:"fp2mul_ip",level:3},{value:"fP2.div_ip2()",id:"fp2div_ip2",level:3},{value:"fP2.div_ip()",id:"fp2div_ip",level:3},{value:"fP2.pow(e)",id:"fp2powe",level:3}],u={toc:o},d="wrapper";function s(e){var a=e.components,n=(0,l.A)(e,p);return(0,r.yg)(d,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("a",{name:"FP2"}),(0,r.yg)("h2",{id:"fp2"},"FP2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": global class",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2"},"FP2"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#new_FP2_new"},"new FP2()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+reduce"},".reduce()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+norm"},".norm()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+iszilch"},".iszilch()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+isunity"},".isunity()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+cmove"},".cmove(g, d)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+equals"},".equals(x)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+getA"},".getA()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+getB"},".getB()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+set"},".set(c, d)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+seta"},".seta(c)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+bset"},".bset(c, d)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+bseta"},".bseta(c)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+copy"},".copy(x)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+zero"},".zero()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+one"},".one(x)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+neg"},".neg(x)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+conj"},".conj()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+add"},".add(x)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+sub"},".sub(x)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+pmul"},".pmul(s)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+imul"},".imul(s)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+sqr"},".sqr()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+mul"},".mul(y)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+sqrt"},".sqrt()")," \u21d2"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+toString"},".toString()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+inverse"},".inverse()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+div2"},".div2()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+times_i"},".times_i()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+mul_ip"},".mul_ip()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+div_ip2"},".div_ip2()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+div_ip"},".div_ip()")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#FP2+pow"},".pow(e)"))))),(0,r.yg)("a",{name:"new_FP2_new"}),(0,r.yg)("h3",{id:"new-fp2"},"new FP2()"),(0,r.yg)("p",null,"Creates an instance of FP2."),(0,r.yg)("a",{name:"FP2+reduce"}),(0,r.yg)("h3",{id:"fp2reduce"},"fP2.reduce()"),(0,r.yg)("p",null,"Reduces all components of possibly unreduced FP2 mod Modulus"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+norm"}),(0,r.yg)("h3",{id:"fp2norm"},"fP2.norm()"),(0,r.yg)("p",null,"Normalises the components of an FP2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+iszilch"}),(0,r.yg)("h3",{id:"fp2iszilch"},"fP2.iszilch()"),(0,r.yg)("p",null,"Tests for FP2 equal to zero"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+isunity"}),(0,r.yg)("h3",{id:"fp2isunity"},"fP2.isunity()"),(0,r.yg)("p",null,"Tests for FP2 equal to unity"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+cmove"}),(0,r.yg)("h3",{id:"fp2cmoveg-d"},"fP2.cmove(g, d)"),(0,r.yg)("p",null,"Conditional copy of FP2 number"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"g"),(0,r.yg)("td",{parentName:"tr",align:null},"FP2 instance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"copy depends on this value")))),(0,r.yg)("a",{name:"FP2+equals"}),(0,r.yg)("h3",{id:"fp2equalsx"},"fP2.equals(x)"),(0,r.yg)("p",null,"Tests for equality of two FP2 instances"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x"),(0,r.yg)("td",{parentName:"tr",align:null},"FP2 instance to compare")))),(0,r.yg)("a",{name:"FP2+getA"}),(0,r.yg)("h3",{id:"fp2geta"},"fP2.getA()"),(0,r.yg)("p",null,"extract a from this"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+getB"}),(0,r.yg)("h3",{id:"fp2getb"},"fP2.getB()"),(0,r.yg)("p",null,"extract b from this"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+set"}),(0,r.yg)("h3",{id:"fp2setc-d"},"fP2.set(c, d)"),(0,r.yg)("p",null,"Set FP2 from two FP values"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"c"),(0,r.yg)("td",{parentName:"tr",align:null},"FP instance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"FP instance")))),(0,r.yg)("a",{name:"FP2+seta"}),(0,r.yg)("h3",{id:"fp2setac"},"fP2.seta(c)"),(0,r.yg)("p",null,"Set FP2 from one FP value"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"c"),(0,r.yg)("td",{parentName:"tr",align:null},"FP instance")))),(0,r.yg)("a",{name:"FP2+bset"}),(0,r.yg)("h3",{id:"fp2bsetc-d"},"fP2.bset(c, d)"),(0,r.yg)("p",null,"Set FP2 from two BIG values"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"c"),(0,r.yg)("td",{parentName:"tr",align:null},"BIG instance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"BIG instance")))),(0,r.yg)("a",{name:"FP2+bseta"}),(0,r.yg)("h3",{id:"fp2bsetac"},"fP2.bseta(c)"),(0,r.yg)("p",null,"Set FP2 from one BIG value"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"c"),(0,r.yg)("td",{parentName:"tr",align:null},"BIG instance")))),(0,r.yg)("a",{name:"FP2+copy"}),(0,r.yg)("h3",{id:"fp2copyx"},"fP2.copy(x)"),(0,r.yg)("p",null,"Copy FP2 to another FP2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x"),(0,r.yg)("td",{parentName:"tr",align:null},"FP2 instance to be copied")))),(0,r.yg)("a",{name:"FP2+zero"}),(0,r.yg)("h3",{id:"fp2zero"},"fP2.zero()"),(0,r.yg)("p",null,"Set FP2 to zero"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+one"}),(0,r.yg)("h3",{id:"fp2onex"},"fP2.one(x)"),(0,r.yg)("p",null,"Set FP2 to unity"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x"),(0,r.yg)("td",{parentName:"tr",align:null},"FP2 instance to be set to one")))),(0,r.yg)("a",{name:"FP2+neg"}),(0,r.yg)("h3",{id:"fp2negx"},"fP2.neg(x)"),(0,r.yg)("p",null,"negate this"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x"),(0,r.yg)("td",{parentName:"tr",align:null},"FP2 instance to be set to one")))),(0,r.yg)("a",{name:"FP2+conj"}),(0,r.yg)("h3",{id:"fp2conj"},"fP2.conj()"),(0,r.yg)("p",null,"Conjugation of FP2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+add"}),(0,r.yg)("h3",{id:"fp2addx"},"fP2.add(x)"),(0,r.yg)("p",null,"addition of two FP2s"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x"),(0,r.yg)("td",{parentName:"tr",align:null},"FP2 instance")))),(0,r.yg)("a",{name:"FP2+sub"}),(0,r.yg)("h3",{id:"fp2subx"},"fP2.sub(x)"),(0,r.yg)("p",null,"subtraction of two FP2s"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x"),(0,r.yg)("td",{parentName:"tr",align:null},"FP2 instance")))),(0,r.yg)("a",{name:"FP2+pmul"}),(0,r.yg)("h3",{id:"fp2pmuls"},"fP2.pmul(s)"),(0,r.yg)("p",null,"Multiplication of an FP2 by an FP8"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"s"),(0,r.yg)("td",{parentName:"tr",align:null},"FP8 instance")))),(0,r.yg)("a",{name:"FP2+imul"}),(0,r.yg)("h3",{id:"fp2imuls"},"fP2.imul(s)"),(0,r.yg)("p",null,"Multiplication of an FP2 by a small integer"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"s"),(0,r.yg)("td",{parentName:"tr",align:null},"integer")))),(0,r.yg)("a",{name:"FP2+sqr"}),(0,r.yg)("h3",{id:"fp2sqr"},"fP2.sqr()"),(0,r.yg)("p",null,"Fast Squaring of an FP2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+mul"}),(0,r.yg)("h3",{id:"fp2muly"},"fP2.mul(y)"),(0,r.yg)("p",null,"Full unconditional Multiplication of two FP2s"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"y"),(0,r.yg)("td",{parentName:"tr",align:null},"FP2 instance, the multiplier")))),(0,r.yg)("a",{name:"FP2+sqrt"}),(0,r.yg)("h3",{id:"fp2sqrt-"},"fP2.sqrt() \u21d2"),(0,r.yg)("p",null,"sqrt(a+ib) = sqrt(a+sqrt(a_a-n_b_b)/2)+ib/(2_sqrt(a+sqrt(a_a-n_b","*","b)/2))"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Returns"),": true if this is QR",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+toString"}),(0,r.yg)("h3",{id:"fp2tostring"},"fP2.toString()"),(0,r.yg)("p",null,"convert this to hex string"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+inverse"}),(0,r.yg)("h3",{id:"fp2inverse"},"fP2.inverse()"),(0,r.yg)("p",null,"Inverting an FP2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+div2"}),(0,r.yg)("h3",{id:"fp2div2"},"fP2.div2()"),(0,r.yg)("p",null,"Divide an FP2 by 2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+times_i"}),(0,r.yg)("h3",{id:"fp2times_i"},"fP2.times_i()"),(0,r.yg)("p",null,"Multiply an FP2 by sqrt(-1)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+mul_ip"}),(0,r.yg)("h3",{id:"fp2mul_ip"},"fP2.mul_ip()"),(0,r.yg)("p",null,"Multiply an FP2 by (1+sqrt(-1))"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+div_ip2"}),(0,r.yg)("h3",{id:"fp2div_ip2"},"fP2.div_ip2()"),(0,r.yg)("p",null,"Divide an FP2 by (1+sqrt(-1))/2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+div_ip"}),(0,r.yg)("h3",{id:"fp2div_ip"},"fP2.div_ip()"),(0,r.yg)("p",null,"Divide an FP2 by (1+sqrt(-1))"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("a",{name:"FP2+pow"}),(0,r.yg)("h3",{id:"fp2powe"},"fP2.pow(e)"),(0,r.yg)("p",null,"Raises an FP2 to the power of a BIG"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"#FP2"},(0,r.yg)("code",null,"FP2")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"this"),": ",(0,r.yg)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"e"),(0,r.yg)("td",{parentName:"tr",align:null},"BIG instance exponent")))))}s.isMDXComponent=!0}}]);