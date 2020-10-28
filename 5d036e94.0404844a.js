(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{174:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,m=l["".concat(o,".").concat(b)]||l[b]||d[b]||c;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(174)),o={id:"app.createdUserMessageObject",title:"app.createdUserMessageObject",sidebar_label:"app.createdUserMessageObject"},s={unversionedId:"app.createdUserMessageObject",id:"app.createdUserMessageObject",isDocsHomePage:!1,title:"app.createdUserMessageObject",description:"Object containing current message details",source:"@site/docs/app-createdUserMessageObject.md",slug:"/app.createdUserMessageObject",permalink:"/docs/app.createdUserMessageObject",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/app-createdUserMessageObject.md",version:"current",sidebar_label:"app.createdUserMessageObject",sidebar:"docs",previous:{title:"app.contextEndTime",permalink:"/docs/app.contextEndTime"},next:{title:"app.data",permalink:"/docs/app.data"}},i=[{value:"Properties",id:"properties",children:[]}],p={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Object containing current message details"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "uid": "1174930546074378257196901378",\n    "_id": "5e31c40ee42d3f00106a104e",\n    "botId": "x1550573885043",\n    "sessionId": "5e31c40accbeae0010228388",\n    "messageType": "USER",\n    "message": "12345",\n    "source": "yellowmessenger",\n    "created": "2020-01-29T17:42:38.239Z",\n    "updated": "2020-01-29T17:42:38.239Z"\n}\n\n')),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("p",null,"uid | string - A  unique numerical string used to represent a user currently accessing the chatbot."),Object(c.b)("p",null,"botid | string - A unique value to identify a bot. Every bot has a unique id."),Object(c.b)("p",null,"created | string - The timestamp of message creation."),Object(c.b)("p",null,"updated | string - The timestamp of last message modification."))}u.isMDXComponent=!0}}]);