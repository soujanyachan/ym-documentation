(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(6),o=(t(0),t(189)),i={},c={unversionedId:"app.options",id:"app.options",isDocsHomePage:!1,title:"app.options",description:"This object contains all the data about minConfidence, targetLanguage,",source:"@site/docs/app.options.md",slug:"/app.options",permalink:"/ym-documentation/docs/app.options",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app.options.md",version:"current"},s=[{value:"Objects",id:"objects",children:[{value:"authOptions",id:"authoptions",children:[]},{value:"excludeKeywordsForPrediction",id:"excludekeywordsforprediction",children:[]},{value:"excludeParamsForSwitching",id:"excludeparamsforswitching",children:[]},{value:"intentSwitchExclusions",id:"intentswitchexclusions",children:[]}]},{value:"Methods",id:"methods",children:[]},{value:"onInvalidCountExceeded",id:"oninvalidcountexceeded",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example-4",children:[]}]}],l={rightToc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This object contains all the data about minConfidence, targetLanguage,\netc. The object passed in ",Object(o.b)("inlineCode",{parentName:"p"},"app.start")," method is stored as ",Object(o.b)("inlineCode",{parentName:"p"},"app.options"),"\nobject, if any values not passed in the object then the default value is\ntaken."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'{\n  "minConfidence": 0.8,\n  "contextConfidence": 0.9,\n  "entityThreshold": 0.96,\n  "suggestionConfidence": 0.65,\n  "suggestionQuestion": "Did you mean ?",\n  "enableSuggestion": false,\n  "unknownMessage": "I think you are looking for something I cannot help you with.",\n  "transferToAgent": false,\n  "transferToAgentMessage": "I am unable to help you with your query at the moment but I can transfer our conversation to my human friend who can help you out.",\n  "targetLanguage": "en",\n  "listenLanguage": "en",\n  "autoResponse": true,\n  "spellCorrection": true,\n  "intentSwitchExclusions": [],\n  "secondaryModelConfidence": 0.84,\n  "FAQQuery": "",\n  "i18n": false,\n  "authOptions": {\n      "type": "custom",\n      "intents": [],\n      "faq": true\n  },\n  "shouldFAQSessionEnd": true,\n  "enableContextForPrediction": false,\n  "excludeKeywordsForPrediction": [],\n  "excludeParamsForSwitching": [],\n  "translateInputMessages": true,\n  "saveSuggestions": false\n}\n')),Object(o.b)("h2",{id:"objects"},"Objects"),Object(o.b)("h3",{id:"authoptions"},"authOptions"),Object(o.b)("p",null,"This object contains the type and intents"),Object(o.b)("h4",{id:"example"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"authOptions": {\n      "type": "custom",\n      "intents": [],\n      "faq": true\n  }\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"excludekeywordsforprediction"},"excludeKeywordsForPrediction"),Object(o.b)("p",null,"This is an array containing values for excluding in prediction"),Object(o.b)("h4",{id:"example-1"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"excludeKeywordsForPrediction": [\n  "car",\n  "account"\n]\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"excludeparamsforswitching"},"excludeParamsForSwitching"),Object(o.b)("p",null,"This is an array containing values for excluding in context (intent)\nswitching"),Object(o.b)("h4",{id:"example-2"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"\"excludeParamsForSwitching\" : [\n  'final-check', \n  'marital-status', \n  'loan-type', \n  'company-name'\n]\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"intentswitchexclusions"},"intentSwitchExclusions"),Object(o.b)("p",null,"This is also an array containing values for excluding in switching\nintents"),Object(o.b)("h4",{id:"example-3"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"\"intentSwitchExclusions\" : [\n    'refund-issues',\n    'login-issues',\n    'get-all-data'\n]\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h2",{id:"oninvalidcountexceeded"},"onInvalidCountExceeded"),Object(o.b)("p",null,"This method is executed whenever ",Object(o.b)("inlineCode",{parentName:"p"},"invalidCount")," reached. invalidCount\ncontains a max number of validations failed (number of times user\nentered wrong data) in a step to trigger this method. This needs to be\nset in ",Object(o.b)("inlineCode",{parentName:"p"},"app.start")," options object."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"onInvalidCountExceeded: () => {\n    //your code\n}\n")),Object(o.b)("h3",{id:"example-4"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"onInvalidCountExceeded: (context) => {\n    return new Promise(resolve => {\n        app.sendTextMessage(`Seems like you're stuck, so I am going to take you to main menu.`).then(() => {\n            app.triggerIntent('default')\n            app.start();\n            return;\n        })\n    })\n}\n")))}u.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);