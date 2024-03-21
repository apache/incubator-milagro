"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5969],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||i;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=r(8168),n=r(8587),i=(r(6540),r(5680)),o=["components"],l={id:"api",title:"API",sidebar_label:"API"},p=void 0,c={unversionedId:"dta-details/api",id:"dta-details/api",title:"API",description:'Open-API specifications are provided for the core "vanilla" Milagro D-TA HTTP REST services and for both the shipped plugins: Bitcoin Wallet Security and Safeguard Secret.',source:"@site/../docs/dta-details/api.md",sourceDirName:"dta-details",slug:"/dta-details/api",permalink:"/docs/dta-details/api",draft:!1,tags:[],version:"current",frontMatter:{id:"api",title:"API",sidebar_label:"API"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/dta-details/quickstart"},next:{title:"Configuration",permalink:"/docs/dta-details/configuration"}},s={},u=[{value:"Testing The API",id:"testing-the-api",level:2}],g={toc:u},d="wrapper";function m(e){var t=e.components,r=(0,n.A)(e,o);return(0,i.yg)(d,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,'Open-API specifications are provided for the core "vanilla" Milagro D-TA HTTP REST services and for both the shipped plugins: Bitcoin Wallet Security and Safeguard Secret.'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/open-api.yaml"},"Standard API")," The ",(0,i.yg)("a",{parentName:"li",href:"/swagger/index.html"},"Swagger UI is available at this link."),"   "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/pkg/bitcoinplugin/open-api.yaml"},"Bitcoin Wallet Security Plugin API"),"   "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/pkg/safeguardsecret/open-api.yaml"},"Safeguard Secret API"),"   ")),(0,i.yg)("h2",{id:"testing-the-api"},"Testing The API"),(0,i.yg)("p",null,"This assumes that your local DTA is running on port 5556 as described in the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dta-details/quickstart"},"quick start guide"),"."),(0,i.yg)("p",null,"Instructions for installing Swagger UI can be found ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/installation.md"},"here"),"."),(0,i.yg)("p",null,"For example..."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\ndocker pull swaggerapi/swagger-ui  \n\ndocker run -p 80:8080 swaggerapi/swagger-ui\n\n\n")),(0,i.yg)("p",null,"In your browser hit http://localhost:80"),(0,i.yg)("p",null,"Paste the URL of one of the API docs above into the text box at the top of the screen. "),(0,i.yg)("p",null,"Please let us know your comments by subscribing to ",(0,i.yg)("a",{parentName:"p",href:"mailto:dev@milagro.apache.org"},"dev@milagro.apache.org")," by sending an email to ",(0,i.yg)("a",{parentName:"p",href:"mailto:dev-subscribe@milagro.apache.org"},"dev-subscribe@milagro.apache.org"),"."))}m.isMDXComponent=!0}}]);