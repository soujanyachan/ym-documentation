(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{177:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return g}));var n=r(2),a=r(6),o=(r(0),r(189)),i={},c={unversionedId:"getTargetLanguage",id:"getTargetLanguage",isDocsHomePage:!1,title:"getTargetLanguage",description:"app.getTargetLanguage() gets the default language the bot is responding with.",source:"@site/docs/getTargetLanguage.md",slug:"/getTargetLanguage",permalink:"/ym-documentation/docs/getTargetLanguage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getTargetLanguage.md",version:"current",sidebar:"docs",previous:{title:"getSessionMessageLogUrl",permalink:"/ym-documentation/docs/getSessionMessageLogUrl"},next:{title:"getTimeStampMessagesLogUrl",permalink:"/ym-documentation/docs/getTimeStampMessagesLogUrl"}},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Note:",id:"note",children:[]}],p={rightToc:u};function g(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"app.getTargetLanguage() gets the default language the bot is responding with."),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("p",null,"None"),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"String: A two letter ISO 639-1 code representing the langauge (eg: 'fr' for French) or ",Object(o.b)("inlineCode",{parentName:"p"},"null")),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'app.getTargetLanguage().then(langauge => {\n   app.log(langauge); //en (assuming the default bot language is English)\n}).catch(err => {\n    app.log("Error fetching the language");\n});\n')),Object(o.b)("h2",{id:"note"},"Note:"),Object(o.b)("p",null,"For a detailed list on all the codes for the langauges supported by our platform, please refer to: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"}),"List of ISO 639-1 codes")))}g.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),g=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=g(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=g(r),d=n,m=l["".concat(i,".").concat(d)]||l[d]||s[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);