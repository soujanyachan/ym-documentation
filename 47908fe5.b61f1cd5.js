(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{189:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,d=l["".concat(s,".").concat(b)]||l[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(189)),s={},c={unversionedId:"maskBotMessage",id:"maskBotMessage",isDocsHomePage:!1,title:"maskBotMessage",description:"Input Parameters",source:"@site/docs/maskBotMessage.md",slug:"/maskBotMessage",permalink:"/ym-documentation/docs/maskBotMessage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/maskBotMessage.md",version:"current",sidebar:"docs",previous:{title:"knowledge",permalink:"/ym-documentation/docs/knowledge"},next:{title:"maskUserMessage",permalink:"/ym-documentation/docs/maskUserMessage"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],u={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"None")),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"The variable will enable masking the bot messages globally instead of specifying it at each response."),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.maskBotMessage = true;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The masked bot messages show up as ",Object(o.b)("inlineCode",{parentName:"p"},"Sensitive Information")," to someone looking in the Messages section of Support module.")))}p.isMDXComponent=!0}}]);