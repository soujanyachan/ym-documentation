(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(189)),c={},i={unversionedId:"delayedMessage",id:"delayedMessage",isDocsHomePage:!1,title:"delayedMessage",description:"app.delayedMessage",source:"@site/docs/delayedMessage.md",slug:"/delayedMessage",permalink:"/ym-documentation/docs/delayedMessage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/delayedMessage.md",version:"current",sidebar:"docs",previous:{title:"decrypt",permalink:"/ym-documentation/docs/decrypt"},next:{title:"deleteContextParam",permalink:"/ym-documentation/docs/deleteContextParam"}},l=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"app.delayedMessage"),Object(o.b)("h1",{id:"sampleformat"},"sampleFormat"),Object(o.b)("p",null,"\u200b\nThe function shares an event to bot post a delay mentioned in the timeout param.\n\u200b"),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Event to be delayed, or event to be delayed"),Object(o.b)("li",{parentName:"ol"},"some data code: it's a JSON object"),Object(o.b)("li",{parentName:"ol"},"the delay in miliseconds."),Object(o.b)("li",{parentName:"ol"},"some callback function./optional\n\u200b")),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"none\n\u200b"),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"\u200b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\napp.delayedMessage('second-time-send-delayed-message-for-session', {}, 60000, function () { });\n\n\n")),Object(o.b)("p",null,"\u200b"),Object(o.b)("blockquote",null))}s.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);