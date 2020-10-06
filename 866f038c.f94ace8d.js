(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{126:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return o})),t.d(e,"rightToc",(function(){return r})),t.d(e,"default",(function(){return d}));var a=t(2),i=t(6),p=(t(0),t(189)),s={id:"app.ai",title:"app.ai",slug:"/"},o={unversionedId:"app.ai",id:"app.ai",isDocsHomePage:!1,title:"app.ai",description:"This object contains methods to access some of the NLP features in the platform to process sentences/words or to train ML models.",source:"@site/docs/app-ai.md",slug:"/",permalink:"/ym-documentation/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app-ai.md",version:"current",sidebar:"docs",next:{title:"app.allSteps",permalink:"/ym-documentation/docs/app.allSteps"}},r=[{value:"Methods",id:"methods",children:[]},{value:"predict",id:"predict",children:[]},{value:"predictMultiple",id:"predictmultiple",children:[{value:"Syntax",id:"syntax",children:[]},{value:"parameters",id:"parameters",children:[]},{value:"Return Value | <code>Promise</code>",id:"return-value--promise",children:[]},{value:"Example",id:"example",children:[]}]},{value:"predictHack",id:"predicthack",children:[{value:"Syntax",id:"syntax-1",children:[]},{value:"parameters",id:"parameters-1",children:[]},{value:"Return Value | <code>Promise</code>",id:"return-value--promise-1",children:[]},{value:"Example",id:"example-1",children:[]}]},{value:"nlp",id:"nlp",children:[{value:"Syntax",id:"syntax-2",children:[]},{value:"parameters",id:"parameters-2",children:[]},{value:"Return Value | <code>Promise</code>",id:"return-value--promise-2",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"addTraining",id:"addtraining",children:[{value:"Syntax",id:"syntax-3",children:[]},{value:"parameters",id:"parameters-3",children:[]},{value:"Return Value | <code>Promise</code>",id:"return-value--promise-3",children:[]},{value:"Example",id:"example-3",children:[]}]},{value:"trainIntents",id:"trainintents",children:[{value:"Syntax",id:"syntax-4",children:[]},{value:"Return Value | <code>Promise</code>",id:"return-value--promise-4",children:[]},{value:"Example",id:"example-4",children:[]}]},{value:"addToUnIdentifiedList",id:"addtounidentifiedlist",children:[{value:"Syntax",id:"syntax-5",children:[]},{value:"Return Value | <code>Promise</code>",id:"return-value--promise-5",children:[]},{value:"Example",id:"example-5",children:[]}]}],l={rightToc:r};function d(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(p.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(p.b)("p",null,"This object contains methods to access some of the NLP features in the platform to process sentences/words or to train ML models."),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("h2",{id:"predict"},"predict"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"app.ai.predict")," method accepts a string and returns the prediction to the string."),Object(p.b)("p",null," Syntax"),Object(p.b)("p",null,"app.ai.predict(text, context, entityThreshold, source='yellowmessenger')"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"parameters")),Object(p.b)("p",null," text | ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"A word or sentence to which we want the prediction."),Object(p.b)("p",null," source | ",Object(p.b)("inlineCode",{parentName:"p"},"optional")," | ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"A string representing the source of the message"),Object(p.b)("p",null," Return Value | ",Object(p.b)("inlineCode",{parentName:"p"},"Promise")),Object(p.b)("p",null,"Returns a promise. Promises resolve an object representing the result of the prediction."),Object(p.b)("p",null," Example"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),'app.ai.predict(\'what is my ip?\')\n  .then(result => app.log(reslut));\n  \n// the output will look like\n{\n    "core": false,\n    "intents": {\n        "geo-location": 0.997\n    },\n    "language\\_detected": "en",\n    "sentiment": "neutral",\n    "text": "what is my ip?",\n    "parser": {\n        "noun\\_chunks": \\[\n            {\n                "dep": "attr",\n                "chunk": "what",\n                "root\\_text": "is",\n                "tag": "WP",\n                "pos": "PRON"\n            },\n            {\n                "dep": "nsubj",\n                "chunk": "my ip",\n                "root\\_text": "is",\n                "tag": "NN",\n                "pos": "NOUN"\n            }\n        \\],\n        "lemmas": \\[\n            "what",\n            "-PRON-",\n            "ip",\n            "?"\n        \\],\n        "sentences": \\[\n            "what is my ip?"\n        \\],\n        "tokens": \\[\n            {\n                "text": "what",\n                "pos": "PRON",\n                "lemma": "what"\n            },\n            {\n                "text": "is",\n                "pos": "VERB",\n                "lemma": "be"\n            },\n            {\n                "text": "my",\n                "pos": "DET",\n                "lemma": "-PRON-"\n            },\n            {\n                "text": "ip",\n                "pos": "NOUN",\n                "lemma": "ip"\n            },\n            {\n                "text": "?",\n                "pos": "PUNCT",\n                "lemma": "?"\n            }\n        \\],\n        "entities": \\[\\],\n        "other\\_keywords": \\[\n            {\n                "text": "what",\n                "pos": "PRON",\n                "lemma": "what"\n            },\n            {\n                "text": "my",\n                "pos": "DET",\n                "lemma": "-PRON-"\n            },\n            {\n                "text": "ip",\n                "pos": "NOUN",\n                "lemma": "ip"\n            },\n            {\n                "text": "?",\n                "pos": "PUNCT",\n                "lemma": "?"\n            }\n        \\],\n        "parsed\\_tree": \\[\n            {\n                "head\\_pos": 100,\n                "dep": "attr",\n                "text": "what",\n                "pos": "PRON",\n                "head\\_text": "is",\n                "children": \\[\\]\n            },\n            {\n                "head\\_pos": 100,\n                "dep": "ROOT",\n                "text": "is",\n                "pos": "VERB",\n                "head\\_text": "is",\n                "children": \\[\n                    "what",\n                    "ip",\n                    "?"\n                \\]\n            },\n            {\n                "head\\_pos": 92,\n                "dep": "poss",\n                "text": "my",\n                "pos": "DET",\n                "head\\_text": "ip",\n                "children": \\[\\]\n            },\n            {\n                "head\\_pos": 100,\n                "dep": "nsubj",\n                "text": "ip",\n                "pos": "NOUN",\n                "head\\_text": "is",\n                "children": \\[\n                    "my"\n                \\]\n            },\n            {\n                "head\\_pos": 100,\n                "dep": "punct",\n                "text": "?",\n                "pos": "PUNCT",\n                "head\\_text": "is",\n                "children": \\[\\]\n            }\n        \\],\n        "lemma\\_list": \\[\n            {\n                "lemma": "what",\n                "pos": "PRON",\n                "text": "what"\n            },\n            {\n                "lemma": "-PRON-",\n                "pos": "DET",\n                "text": "my"\n            },\n            {\n                "lemma": "ip",\n                "pos": "NOUN",\n                "text": "ip"\n            },\n            {\n                "lemma": "?",\n                "pos": "PUNCT",\n                "text": "?"\n            }\n        \\]\n    },\n    "confidence": 0.997,\n    "global\\_entities": \\[\\],\n    "synonym\\_detected": false,\n    "intent": "geo-location",\n    "global\\_model": {\n        "confidence": 0.8341319561004639,\n        "intent": "what"\n    }\n}\n')),Object(p.b)("hr",null),Object(p.b)("h2",{id:"predictmultiple"},"predictMultiple"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"app.ai.predictMultiple")," method accepts a string representing a sentence/words and a list of bot IDs as a second parameter. It returns the prediction of the given sentence/words by each bot."),Object(p.b)("h3",{id:"syntax"},"Syntax"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"app.ai.predictMultiple(text, \\[botId,...\\])\n")),Object(p.b)("h3",{id:"parameters"},"parameters"),Object(p.b)("h4",{id:"text--string"},"text | ",Object(p.b)("inlineCode",{parentName:"h4"},"string")),Object(p.b)("p",null,"A word or sentence to which we want the prediction."),Object(p.b)("h4",{id:"botids--array"},"botIds | ",Object(p.b)("inlineCode",{parentName:"h4"},"Array")),Object(p.b)("p",null,"An array representing the list of bot IDs."),Object(p.b)("h3",{id:"return-value--promise"},"Return Value | ",Object(p.b)("inlineCode",{parentName:"h3"},"Promise")),Object(p.b)("p",null,"Returns a promise. Promises resolve an Array of objects representing each bot prediction."),Object(p.b)("h3",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),'app.ai.predictMultiple(\'what is my ip?\', \\[\'x123456789\', \'x987654321\'\\])\n    .then(result => app.log(reslut));\n\n// the output will look like\n\\[\n    {\n        "core": false,\n        "intents": {\n            "geo-location": 0.997\n        },\n        "language\\_detected": "en",\n        "sentiment": "neutral",\n        "text": "what is my ip?",\n        "parser": {\n            "noun\\_chunks": \\[\n                {\n                    "dep": "attr",\n                    "chunk": "what",\n                    "root\\_text": "is",\n                    "tag": "WP",\n                    "pos": "PRON"\n                },\n                {\n                    "dep": "nsubj",\n                    "chunk": "my ip",\n                    "root\\_text": "is",\n                    "tag": "NN",\n                    "pos": "NOUN"\n                }\n            \\],\n            "lemmas": \\[\n                "what",\n                "-PRON-",\n                "ip",\n                "?"\n            \\],\n            "sentences": \\[\n                "what is my ip?"\n            \\],\n            "tokens": \\[\n                {\n                    "text": "what",\n                    "pos": "PRON",\n                    "lemma": "what"\n                },\n                {\n                    "text": "is",\n                    "pos": "VERB",\n                    "lemma": "be"\n                },\n                {\n                    "text": "my",\n                    "pos": "DET",\n                    "lemma": "-PRON-"\n                },\n                {\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "lemma": "ip"\n                },\n                {\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "lemma": "?"\n                }\n            \\],\n            "entities": \\[\\],\n            "other\\_keywords": \\[\n                {\n                    "text": "what",\n                    "pos": "PRON",\n                    "lemma": "what"\n                },\n                {\n                    "text": "my",\n                    "pos": "DET",\n                    "lemma": "-PRON-"\n                },\n                {\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "lemma": "ip"\n                },\n                {\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "lemma": "?"\n                }\n            \\],\n            "parsed\\_tree": \\[\n                {\n                    "head\\_pos": 100,\n                    "dep": "attr",\n                    "text": "what",\n                    "pos": "PRON",\n                    "head\\_text": "is",\n                    "children": \\[\\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "ROOT",\n                    "text": "is",\n                    "pos": "VERB",\n                    "head\\_text": "is",\n                    "children": \\[\n                        "what",\n                        "ip",\n                        "?"\n                    \\]\n                },\n                {\n                    "head\\_pos": 92,\n                    "dep": "poss",\n                    "text": "my",\n                    "pos": "DET",\n                    "head\\_text": "ip",\n                    "children": \\[\\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "nsubj",\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "head\\_text": "is",\n                    "children": \\[\n                        "my"\n                    \\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "punct",\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "head\\_text": "is",\n                    "children": \\[\\]\n                }\n            \\],\n            "lemma\\_list": \\[\n                {\n                    "lemma": "what",\n                    "pos": "PRON",\n                    "text": "what"\n                },\n                {\n                    "lemma": "-PRON-",\n                    "pos": "DET",\n                    "text": "my"\n                },\n                {\n                    "lemma": "ip",\n                    "pos": "NOUN",\n                    "text": "ip"\n                },\n                {\n                    "lemma": "?",\n                    "pos": "PUNCT",\n                    "text": "?"\n                }\n            \\]\n        },\n        "confidence": 0.997,\n        "global\\_entities": \\[\\],\n        "synonym\\_detected": false,\n        "intent": "geo-location",\n        "global\\_model": {\n            "confidence": 0.8341319561004639,\n            "intent": "what"\n        }\n    },\n    {\n        "core": false,\n        "intents": {\n            "geo-location": 0.997\n        },\n        "language\\_detected": "en",\n        "sentiment": "neutral",\n        "text": "what is my ip?",\n        "parser": {\n            "noun\\_chunks": \\[\n                {\n                    "dep": "attr",\n                    "chunk": "what",\n                    "root\\_text": "is",\n                    "tag": "WP",\n                    "pos": "PRON"\n                },\n                {\n                    "dep": "nsubj",\n                    "chunk": "my ip",\n                    "root\\_text": "is",\n                    "tag": "NN",\n                    "pos": "NOUN"\n                }\n            \\],\n            "lemmas": \\[\n                "what",\n                "-PRON-",\n                "ip",\n                "?"\n            \\],\n            "sentences": \\[\n                "what is my ip?"\n            \\],\n            "tokens": \\[\n                {\n                    "text": "what",\n                    "pos": "PRON",\n                    "lemma": "what"\n                },\n                {\n                    "text": "is",\n                    "pos": "VERB",\n                    "lemma": "be"\n                },\n                {\n                    "text": "my",\n                    "pos": "DET",\n                    "lemma": "-PRON-"\n                },\n                {\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "lemma": "ip"\n                },\n                {\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "lemma": "?"\n                }\n            \\],\n            "entities": \\[\\],\n            "other\\_keywords": \\[\n                {\n                    "text": "what",\n                    "pos": "PRON",\n                    "lemma": "what"\n                },\n                {\n                    "text": "my",\n                    "pos": "DET",\n                    "lemma": "-PRON-"\n                },\n                {\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "lemma": "ip"\n                },\n                {\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "lemma": "?"\n                }\n            \\],\n            "parsed\\_tree": \\[\n                {\n                    "head\\_pos": 100,\n                    "dep": "attr",\n                    "text": "what",\n                    "pos": "PRON",\n                    "head\\_text": "is",\n                    "children": \\[\\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "ROOT",\n                    "text": "is",\n                    "pos": "VERB",\n                    "head\\_text": "is",\n                    "children": \\[\n                        "what",\n                        "ip",\n                        "?"\n                    \\]\n                },\n                {\n                    "head\\_pos": 92,\n                    "dep": "poss",\n                    "text": "my",\n                    "pos": "DET",\n                    "head\\_text": "ip",\n                    "children": \\[\\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "nsubj",\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "head\\_text": "is",\n                    "children": \\[\n                        "my"\n                    \\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "punct",\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "head\\_text": "is",\n                    "children": \\[\\]\n                }\n            \\],\n            "lemma\\_list": \\[\n                {\n                    "lemma": "what",\n                    "pos": "PRON",\n                    "text": "what"\n                },\n                {\n                    "lemma": "-PRON-",\n                    "pos": "DET",\n                    "text": "my"\n                },\n                {\n                    "lemma": "ip",\n                    "pos": "NOUN",\n                    "text": "ip"\n                },\n                {\n                    "lemma": "?",\n                    "pos": "PUNCT",\n                    "text": "?"\n                }\n            \\]\n        },\n        "confidence": 0.997,\n        "global\\_entities": \\[\\],\n        "synonym\\_detected": false,\n        "intent": "geo-location",\n        "global\\_model": {\n            "confidence": 0.8341319561004639,\n            "intent": "what"\n        }\n    }\n\\]\n\n')),Object(p.b)("h2",{id:"predicthack"},"predictHack"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"app.ai.predictHack")," method accepts a string representing a sentence/words and a bot ID as a second parameter. It returns the prediction of the given sentence/words."),Object(p.b)("h3",{id:"syntax-1"},"Syntax"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"app.ai.predictHack(text, botId)\n")),Object(p.b)("h3",{id:"parameters-1"},"parameters"),Object(p.b)("h4",{id:"text--string-1"},"text | ",Object(p.b)("inlineCode",{parentName:"h4"},"string")),Object(p.b)("p",null,"A word or sentence to which we want the prediction."),Object(p.b)("h4",{id:"botid--string"},"botId | ",Object(p.b)("inlineCode",{parentName:"h4"},"String")),Object(p.b)("p",null,"A string representing the list of bot IDs. eg. ",Object(p.b)("inlineCode",{parentName:"p"},"x123456789")),Object(p.b)("h3",{id:"return-value--promise-1"},"Return Value | ",Object(p.b)("inlineCode",{parentName:"h3"},"Promise")),Object(p.b)("p",null,"Returns a promise. Promises resolve an object representing the result of the prediction."),Object(p.b)("h3",{id:"example-1"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n        "core": false,\n        "intents": {\n            "geo-location": 0.997\n        },\n        "language\\_detected": "en",\n        "sentiment": "neutral",\n        "text": "what is my ip?",\n        "parser": {\n            "noun\\_chunks": \\[\n                {\n                    "dep": "attr",\n                    "chunk": "what",\n                    "root\\_text": "is",\n                    "tag": "WP",\n                    "pos": "PRON"\n                },\n                {\n                    "dep": "nsubj",\n                    "chunk": "my ip",\n                    "root\\_text": "is",\n                    "tag": "NN",\n                    "pos": "NOUN"\n                }\n            \\],\n            "lemmas": \\[\n                "what",\n                "-PRON-",\n                "ip",\n                "?"\n            \\],\n            "sentences": \\[\n                "what is my ip?"\n            \\],\n            "tokens": \\[\n                {\n                    "text": "what",\n                    "pos": "PRON",\n                    "lemma": "what"\n                },\n                {\n                    "text": "is",\n                    "pos": "VERB",\n                    "lemma": "be"\n                },\n                {\n                    "text": "my",\n                    "pos": "DET",\n                    "lemma": "-PRON-"\n                },\n                {\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "lemma": "ip"\n                },\n                {\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "lemma": "?"\n                }\n            \\],\n            "entities": \\[\\],\n            "other\\_keywords": \\[\n                {\n                    "text": "what",\n                    "pos": "PRON",\n                    "lemma": "what"\n                },\n                {\n                    "text": "my",\n                    "pos": "DET",\n                    "lemma": "-PRON-"\n                },\n                {\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "lemma": "ip"\n                },\n                {\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "lemma": "?"\n                }\n            \\],\n            "parsed\\_tree": \\[\n                {\n                    "head\\_pos": 100,\n                    "dep": "attr",\n                    "text": "what",\n                    "pos": "PRON",\n                    "head\\_text": "is",\n                    "children": \\[\\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "ROOT",\n                    "text": "is",\n                    "pos": "VERB",\n                    "head\\_text": "is",\n                    "children": \\[\n                        "what",\n                        "ip",\n                        "?"\n                    \\]\n                },\n                {\n                    "head\\_pos": 92,\n                    "dep": "poss",\n                    "text": "my",\n                    "pos": "DET",\n                    "head\\_text": "ip",\n                    "children": \\[\\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "nsubj",\n                    "text": "ip",\n                    "pos": "NOUN",\n                    "head\\_text": "is",\n                    "children": \\[\n                        "my"\n                    \\]\n                },\n                {\n                    "head\\_pos": 100,\n                    "dep": "punct",\n                    "text": "?",\n                    "pos": "PUNCT",\n                    "head\\_text": "is",\n                    "children": \\[\\]\n                }\n            \\],\n            "lemma\\_list": \\[\n                {\n                    "lemma": "what",\n                    "pos": "PRON",\n                    "text": "what"\n                },\n                {\n                    "lemma": "-PRON-",\n                    "pos": "DET",\n                    "text": "my"\n                },\n                {\n                    "lemma": "ip",\n                    "pos": "NOUN",\n                    "text": "ip"\n                },\n                {\n                    "lemma": "?",\n                    "pos": "PUNCT",\n                    "text": "?"\n                }\n            \\]\n        },\n        "confidence": 0.997,\n        "global\\_entities": \\[\\],\n        "synonym\\_detected": false,\n        "intent": "geo-location",\n        "global\\_model": {\n            "confidence": 0.8341319561004639,\n            "intent": "what"\n        }\n    }\n\n')),Object(p.b)("h2",{id:"nlp"},"nlp"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"app.ai.nlp")," method accepts a string and returns the processed information of the string by the internal NLP engine."),Object(p.b)("h3",{id:"syntax-2"},"Syntax"),Object(p.b)("p",null,"app.ai.nlp(text)"),Object(p.b)("h3",{id:"parameters-2"},"parameters"),Object(p.b)("h4",{id:"text--string-2"},"text | ",Object(p.b)("inlineCode",{parentName:"h4"},"string")),Object(p.b)("p",null,"A word or sentence to which we want to process with NLP engine."),Object(p.b)("h3",{id:"return-value--promise-2"},"Return Value | ",Object(p.b)("inlineCode",{parentName:"h3"},"Promise")),Object(p.b)("p",null,"Returns a promise. Promises resolve an object representing the processed information of the string by the internal NLP engine."),Object(p.b)("h3",{id:"example-2"},"Example"),Object(p.b)("p",null,'{\n"noun',"_",'chunks": ',"[",'\n{\n"dep": "attr",\n"chunk": "what",\n"root',"_",'text": "is",\n"tag": "WP",\n"pos": "PRON"\n},\n{\n"dep": "nsubj",\n"chunk": "my ip",\n"root',"_",'text": "is",\n"tag": "NN",\n"pos": "NOUN"\n}\n',"]",',\n"lemmas": ',"[",'\n"what",\n"-PRON-",\n"ip",\n"?"\n',"]",',\n"sentences": ',"[",'\n"what is my ip?"\n',"]",',\n"tokens": ',"[",'\n{\n"text": "what",\n"pos": "PRON",\n"lemma": "what"\n},\n{\n"text": "is",\n"pos": "VERB",\n"lemma": "be"\n},\n{\n"text": "my",\n"pos": "DET",\n"lemma": "-PRON-"\n},\n{\n"text": "ip",\n"pos": "NOUN",\n"lemma": "ip"\n},\n{\n"text": "?",\n"pos": "PUNCT",\n"lemma": "?"\n}\n',"]",',\n"entities": ',"[","]",',\n"other',"_",'keywords": ',"[",'\n{\n"text": "what",\n"pos": "PRON",\n"lemma": "what"\n},\n{\n"text": "my",\n"pos": "DET",\n"lemma": "-PRON-"\n},\n{\n"text": "ip",\n"pos": "NOUN",\n"lemma": "ip"\n},\n{\n"text": "?",\n"pos": "PUNCT",\n"lemma": "?"\n}\n',"]",',\n"parsed',"_",'tree": ',"[",'\n{\n"head',"_",'pos": 100,\n"dep": "attr",\n"text": "what",\n"pos": "PRON",\n"head',"_",'text": "is",\n"children": ',"[","]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "ROOT",\n"text": "is",\n"pos": "VERB",\n"head',"_",'text": "is",\n"children": ',"[",'\n"what",\n"ip",\n"?"\n',"]",'\n},\n{\n"head',"_",'pos": 92,\n"dep": "poss",\n"text": "my",\n"pos": "DET",\n"head',"_",'text": "ip",\n"children": ',"[","]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "nsubj",\n"text": "ip",\n"pos": "NOUN",\n"head',"_",'text": "is",\n"children": ',"[",'\n"my"\n',"]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "punct",\n"text": "?",\n"pos": "PUNCT",\n"head',"_",'text": "is",\n"children": ',"[","]","\n}\n","]",',\n"lemma',"_",'list": ',"[",'\n{\n"lemma": "what",\n"pos": "PRON",\n"text": "what"\n},\n{\n"lemma": "-PRON-",\n"pos": "DET",\n"text": "my"\n},\n{\n"lemma": "ip",\n"pos": "NOUN",\n"text": "ip"\n},\n{\n"lemma": "?",\n"pos": "PUNCT",\n"text": "?"\n}\n',"]","\n}"),Object(p.b)("hr",null),Object(p.b)("h2",{id:"addtraining"},"addTraining"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"app.ai.addTraining")," method accepts text & intent name as parameters and adds the text under the user expressions of the specified intent. it returns an object contains the status and id of the added user expression."),Object(p.b)("h3",{id:"syntax-3"},"Syntax"),Object(p.b)("p",null,"app.ai.addTraining(text, intent)"),Object(p.b)("h3",{id:"parameters-3"},"parameters"),Object(p.b)("h4",{id:"text--string-3"},"text | ",Object(p.b)("inlineCode",{parentName:"h4"},"string")),Object(p.b)("p",null,"A word or sentence to which we want the prediction."),Object(p.b)("h4",{id:"intent--string"},"intent | ",Object(p.b)("inlineCode",{parentName:"h4"},"string")),Object(p.b)("p",null,"A string representing the intent in the bot to which the current text to be added under user expressions."),Object(p.b)("h3",{id:"return-value--promise-3"},"Return Value | ",Object(p.b)("inlineCode",{parentName:"h3"},"Promise")),Object(p.b)("p",null,"Returns a promise. Promises resolve an object representing the status of addition."),Object(p.b)("h3",{id:"example-3"},"Example"),Object(p.b)("p",null,"app.ai.addTraining('what is my ip?','ip-list')\n.then(result => app.log(result))"),Object(p.b)("p",null,"// the output will look like"),Object(p.b)("p",null,'{\n"noun',"_",'chunks": ',"[",'\n{\n"dep": "attr",\n"chunk": "what",\n"root',"_",'text": "is",\n"tag": "WP",\n"pos": "PRON"\n},\n{\n"dep": "nsubj",\n"chunk": "my ip",\n"root',"_",'text": "is",\n"tag": "NN",\n"pos": "NOUN"\n}\n',"]",',\n"lemmas": ',"[",'\n"what",\n"-PRON-",\n"ip",\n"?"\n',"]",',\n"sentences": ',"[",'\n"what is my ip?"\n',"]",',\n"tokens": ',"[",'\n{\n"text": "what",\n"pos": "PRON",\n"lemma": "what"\n},\n{\n"text": "is",\n"pos": "VERB",\n"lemma": "be"\n},\n{\n"text": "my",\n"pos": "DET",\n"lemma": "-PRON-"\n},\n{\n"text": "ip",\n"pos": "NOUN",\n"lemma": "ip"\n},\n{\n"text": "?",\n"pos": "PUNCT",\n"lemma": "?"\n}\n',"]",',\n"entities": ',"[","]",',\n"other',"_",'keywords": ',"[",'\n{\n"text": "what",\n"pos": "PRON",\n"lemma": "what"\n},\n{\n"text": "my",\n"pos": "DET",\n"lemma": "-PRON-"\n},\n{\n"text": "ip",\n"pos": "NOUN",\n"lemma": "ip"\n},\n{\n"text": "?",\n"pos": "PUNCT",\n"lemma": "?"\n}\n',"]",',\n"parsed',"_",'tree": ',"[",'\n{\n"head',"_",'pos": 100,\n"dep": "attr",\n"text": "what",\n"pos": "PRON",\n"head',"_",'text": "is",\n"children": ',"[","]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "ROOT",\n"text": "is",\n"pos": "VERB",\n"head',"_",'text": "is",\n"children": ',"[",'\n"what",\n"ip",\n"?"\n',"]",'\n},\n{\n"head',"_",'pos": 92,\n"dep": "poss",\n"text": "my",\n"pos": "DET",\n"head',"_",'text": "ip",\n"children": ',"[","]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "nsubj",\n"text": "ip",\n"pos": "NOUN",\n"head',"_",'text": "is",\n"children": ',"[",'\n"my"\n',"]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "punct",\n"text": "?",\n"pos": "PUNCT",\n"head',"_",'text": "is",\n"children": ',"[","]","\n}\n","]",',\n"lemma',"_",'list": ',"[",'\n{\n"lemma": "what",\n"pos": "PRON",\n"text": "what"\n},\n{\n"lemma": "-PRON-",\n"pos": "DET",\n"text": "my"\n},\n{\n"lemma": "ip",\n"pos": "NOUN",\n"text": "ip"\n},\n{\n"lemma": "?",\n"pos": "PUNCT",\n"text": "?"\n}\n',"]","\n}\naddTraining\n15 minutes ago\nfunction (text, intent) {\nreturn new Promise(function (resolve, reject) {\nrequest.post({\nurl: ","`","${bpConfig.urls.ML}/add-training-internal","`",',\nqs: {\nbot: bot\n},\njson: {\ntext: text,\nintent: intent\n}\n}, (err, response, resp) => {\nif (err) {\nreject(err);\n} else {\nresolve(resp);\n}\n});\n});\n}\npredictHack\n15 minutes ago\n{\n"noun',"_",'chunks": ',"[",'\n{\n"dep": "attr",\n"chunk": "what",\n"root',"_",'text": "is",\n"tag": "WP",\n"pos": "PRON"\n},\n{\n"dep": "nsubj",\n"chunk": "my ip",\n"root',"_",'text": "is",\n"tag": "NN",\n"pos": "NOUN"\n}\n',"]",',\n"lemmas": ',"[",'\n"what",\n"-PRON-",\n"ip",\n"?"\n',"]",',\n"sentences": ',"[",'\n"what is my ip?"\n',"]",',\n"tokens": ',"[",'\n{\n"text": "what",\n"pos": "PRON",\n"lemma": "what"\n},\n{\n"text": "is",\n"pos": "VERB",\n"lemma": "be"\n},\n{\n"text": "my",\n"pos": "DET",\n"lemma": "-PRON-"\n},\n{\n"text": "ip",\n"pos": "NOUN",\n"lemma": "ip"\n},\n{\n"text": "?",\n"pos": "PUNCT",\n"lemma": "?"\n}\n',"]",',\n"entities": ',"[","]",',\n"other',"_",'keywords": ',"[",'\n{\n"text": "what",\n"pos": "PRON",\n"lemma": "what"\n},\n{\n"text": "my",\n"pos": "DET",\n"lemma": "-PRON-"\n},\n{\n"text": "ip",\n"pos": "NOUN",\n"lemma": "ip"\n},\n{\n"text": "?",\n"pos": "PUNCT",\n"lemma": "?"\n}\n',"]",',\n"parsed',"_",'tree": ',"[",'\n{\n"head',"_",'pos": 100,\n"dep": "attr",\n"text": "what",\n"pos": "PRON",\n"head',"_",'text": "is",\n"children": ',"[","]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "ROOT",\n"text": "is",\n"pos": "VERB",\n"head',"_",'text": "is",\n"children": ',"[",'\n"what",\n"ip",\n"?"\n',"]",'\n},\n{\n"head',"_",'pos": 92,\n"dep": "poss",\n"text": "my",\n"pos": "DET",\n"head',"_",'text": "ip",\n"children": ',"[","]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "nsubj",\n"text": "ip",\n"pos": "NOUN",\n"head',"_",'text": "is",\n"children": ',"[",'\n"my"\n',"]",'\n},\n{\n"head',"_",'pos": 100,\n"dep": "punct",\n"text": "?",\n"pos": "PUNCT",\n"head',"_",'text": "is",\n"children": ',"[","]","\n}\n","]",',\n"lemma',"_",'list": ',"[",'\n{\n"lemma": "what",\n"pos": "PRON",\n"text": "what"\n},\n{\n"lemma": "-PRON-",\n"pos": "DET",\n"text": "my"\n},\n{\n"lemma": "ip",\n"pos": "NOUN",\n"text": "ip"\n},\n{\n"lemma": "?",\n"pos": "PUNCT",\n"text": "?"\n}\n',"]","\n}"),Object(p.b)("hr",null),Object(p.b)("h2",{id:"trainintents"},"trainIntents"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"app.ai.trainIntents")," method trains the ML model with the user expressions added to Journeys"),Object(p.b)("h3",{id:"syntax-4"},"Syntax"),Object(p.b)("p",null,"app.ai.trainIntents()"),Object(p.b)("h3",{id:"return-value--promise-4"},"Return Value | ",Object(p.b)("inlineCode",{parentName:"h3"},"Promise")),Object(p.b)("p",null,"Returns a promise. Promises resolve an object representing the status of the training."),Object(p.b)("h3",{id:"example-4"},"Example"),Object(p.b)("p",null,"app.ai.trainIntents()\n.then((status) => {\napp.log(status');})"),Object(p.b)("p",null,'// the output will look like\n{\n"status": "started"\n}'),Object(p.b)("hr",null),Object(p.b)("h2",{id:"addtounidentifiedlist"},"addToUnIdentifiedList"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"app.ai.addToUnIdentifiedList")," method adds given text to the unidentifed list of words of the current user of the bot. It accepts a text, userId, source, app.profile object and sessionID."),Object(p.b)("h3",{id:"syntax-5"},"Syntax"),Object(p.b)("p",null,"app.ai.addToUnIdentifiedList('praneth kumar reddy', '', app.source, app.profile, sessionId)"),Object(p.b)("h3",{id:"return-value--promise-5"},"Return Value | ",Object(p.b)("inlineCode",{parentName:"h3"},"Promise")),Object(p.b)("p",null,"Returns a promise. Promises resolve an object representing the status of the addition of given text to the unidentified list."),Object(p.b)("h3",{id:"example-5"},"Example"),Object(p.b)("p",null,"app.ai.addToUnIdentifiedList('this is an unknown word', '', app.source, app.profile, sessionId)\n.then((status) => app.log(status));"),Object(p.b)("p",null,"// the output will look like"),Object(p.b)("p",null,'{\n"status": "success",\n"',"_",'id": "5e32a7',"*","*","*","*","*","*","*","*","*",'45e"\n}'))}d.isMDXComponent=!0},189:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return b}));var a=t(0),i=t.n(a);function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){p(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},p=Object.keys(n);for(a=0;a<p.length;a++)t=p[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(a=0;a<p.length;a++)t=p[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=i.a.createContext({}),d=function(n){var e=i.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=d(n.components);return i.a.createElement(l.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},h=i.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,p=n.originalType,s=n.parentName,l=r(n,["components","mdxType","originalType","parentName"]),c=d(t),h=a,b=c["".concat(s,".").concat(h)]||c[h]||m[h]||p;return t?i.a.createElement(b,o(o({ref:e},l),{},{components:t})):i.a.createElement(b,o({ref:e},l))}));function b(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var p=t.length,s=new Array(p);s[0]=h;var o={};for(var r in e)hasOwnProperty.call(e,r)&&(o[r]=e[r]);o.originalType=n,o.mdxType="string"==typeof n?n:a,s[1]=o;for(var l=2;l<p;l++)s[l]=t[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);