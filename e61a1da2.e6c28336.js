(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(2),a=r(6),p=(r(0),r(189)),o={},s={unversionedId:"setMultipleSteps",id:"setMultipleSteps",isDocsHomePage:!1,title:"setMultipleSteps",description:"app.setMultipleSteps() sets the step value for multiple steps at the same time",source:"@site/docs/setMultipleSteps.md",slug:"/setMultipleSteps",permalink:"/ym-documentation/docs/setMultipleSteps",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/setMultipleSteps.md",version:"current",sidebar:"docs",previous:{title:"sendOTP",permalink:"/ym-documentation/docs/sendOTP"},next:{title:"setStep",permalink:"/ym-documentation/docs/setStep"}},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],i={rightToc:u};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"app.setMultipleSteps() sets the step value for multiple steps at the same time"),Object(p.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(p.b)("p",null,"An object for multiple steps.\n\u200b"),Object(p.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(p.b)("p",null,"None\n\u200b"),Object(p.b)("h2",{id:"example-usage"},"Example Usage"),Object(p.b)("p",null,"\u200b"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'app.setMultipleSteps({"step1" : "step1Value", "step2" : "step2Value", "step3" : "step3Value"})\n')))}c.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=c(r),d=n,b=l["".concat(o,".").concat(d)]||l[d]||m[d]||p;return r?a.a.createElement(b,s(s({ref:t},i),{},{components:r})):a.a.createElement(b,s({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<p;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);