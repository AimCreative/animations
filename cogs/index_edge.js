/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['raleway, sans-serif']='<script src=\"http://use.edgefonts.net/raleway:n1,n7,n4,n5,n3,n8,n9,n2,n6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'GradBG',
                type: 'rect',
                rect: ['0px', '0px','1024px','730px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)",[270,[['rgba(22,32,36,1.00)',0],['rgba(32,47,53,1.00)',22]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'AJG-logo',
                type: 'image',
                rect: ['726px', '665px','275px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AJG-logo.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['25px', '645px','975px','1px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['25px', '688px','auto','auto','auto', 'auto'],
                text: "Customer Acquisition &amp; Retention",
                align: "center",
                font: ['raleway, sans-serif', 14, "rgba(201,201,201,1.00)", "300", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['25px', '665px','auto','auto','auto', 'auto'],
                text: "Gallagher Insurance Solutions",
                align: "center",
                font: ['raleway, sans-serif', 18, "rgba(255,255,255,1)", "300", "none", "normal"]
            },
            {
                id: 'RectangleCopy2',
                type: 'rect',
                rect: ['25px', '42px','975px','1px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['450px', '25px','125px','35px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['461px', '32px','103px','auto','auto', 'auto'],
                text: "Our vision",
                align: "center",
                font: ['raleway, sans-serif', 18, "rgba(32,47,53,1.00)", "300", "none", "normal"]
            },
            {
                id: 'CogAnim1',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'CogAnim2',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'CogAnim3',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'PopAnim1',
                type: 'rect',
                rect: ['683', '151','auto','auto','auto', 'auto']
            },
            {
                id: 'PopAnim2',
                type: 'rect',
                rect: ['89', '248','auto','auto','auto', 'auto']
            },
            {
                id: 'PopAnim3',
                type: 'rect',
                rect: ['683', '407','auto','auto','auto', 'auto']
            },
            {
                id: 'button',
                display: 'none',
                type: 'rect',
                rect: ['450', '667','auto','auto','auto', 'auto'],
                cursor: ['pointer'],
                userClass: "button"
            }],
            symbolInstances: [
            {
                id: 'PopAnim3',
                symbolName: 'PopAnim3'
            },
            {
                id: 'CogAnim2',
                symbolName: 'CogAnim2'
            },
            {
                id: 'PopAnim2',
                symbolName: 'PopAnim2'
            },
            {
                id: 'button',
                symbolName: 'button'
            },
            {
                id: 'PopAnim1',
                symbolName: 'PopAnim1'
            },
            {
                id: 'CogAnim1',
                symbolName: 'CogAnim1'
            },
            {
                id: 'CogAnim3',
                symbolName: 'CogAnim3'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy}": [
                ["style", "top", '688px'],
                ["style", "font-weight", '300'],
                ["color", "color", 'rgba(201,201,201,1)'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "left", '25px'],
                ["style", "font-size", '14px']
            ],
            "${_GradBG}": [
                ["style", "top", '0px'],
                ["style", "height", '730px'],
                ["gradient", "background-image", [270,[['rgba(22,32,36,1.00)',0],['rgba(32,47,53,1.00)',22]]]],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_Text2}": [
                ["style", "top", '665px'],
                ["style", "font-weight", '300'],
                ["style", "left", '25px'],
                ["style", "font-family", 'raleway, sans-serif']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '32px'],
                ["style", "font-weight", '300'],
                ["color", "color", 'rgba(32,47,53,1)'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "left", '461px'],
                ["style", "width", '103px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '35px'],
                ["style", "top", '25px'],
                ["style", "left", '450px'],
                ["style", "width", '125px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '1px'],
                ["style", "top", '42px'],
                ["style", "left", '25px'],
                ["style", "width", '975px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '1px'],
                ["style", "top", '645px'],
                ["style", "left", '25px'],
                ["style", "width", '975px']
            ],
            "${_button}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '730px'],
                ["style", "overflow", 'hidden']
            ],
            "${_AJG-logo}": [
                ["style", "height", '39px'],
                ["style", "top", '665px'],
                ["style", "left", '726px'],
                ["style", "width", '275px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid115", tween: [ "style", "${_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuint" },
                { id: "eid92", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CogAnim1}', [] ], ""], position: 0 },
                { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_PopAnim2}', [] ], ""], position: 0 },
                { id: "eid97", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_PopAnim1}', [] ], ""], position: 0 },
                { id: "eid95", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_PopAnim3}', [] ], ""], position: 0 },
                { id: "eid93", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CogAnim2}', [] ], ""], position: 0 },
                { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CogAnim3}', [] ], ""], position: 0 },
                { id: "eid102", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button}', [] ], ""], position: 0 }            ]
        }
    }
},
"cog": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cog',
                    type: 'image',
                    rect: ['0px', '0px', '230px', '230px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cog.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cog}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '230px'],
                ["style", "width", '230px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "transform", "${_cog}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 4000 }            ]
        }
    }
},
"cog2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'cog3',
                    rect: ['36px', '36px', '230px', '230px', 'auto', 'auto'],
                    transform: [[0, 0], ['23']],
                    fill: ['rgba(0,0,0,0)', 'images/cog.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '302px'],
                ["style", "width", '302px']
            ],
            "${_cog3}": [
                ["style", "top", '36px'],
                ["style", "left", '36px'],
                ["transform", "rotateZ", '383deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "transform", "${_cog3}", "rotateZ", '23deg', { fromValue: '383deg'}], position: 0, duration: 4000 }            ]
        }
    }
},
"mid_pop": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'mid_pop3',
                    type: 'image',
                    rect: ['0px', '0px', '257px', '274px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/mid%20pop.svg', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['17px', '10px', '215px', '254px', 'auto', 'auto'],
                    id: 'Text3Copy2',
                    text: 'Achieve operational <br>excellence via a new <br>target operating model <br>which crystallises our <br>processes and <br>technology platforms <br>for growth in the volume sector.  Continue to push volume through the rugby ball model and <br>into other Gallagher businesses.',
                    align: 'left',
                    font: ['raleway, sans-serif', 18, 'rgba(32,47,53,1.00)', '300', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy2}": [
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "height", '254px'],
                ["color", "color", 'rgba(32,47,53,1.00)'],
                ["style", "left", '17px'],
                ["style", "width", '215px']
            ],
            "${symbolSelector}": [
                ["style", "height", '274px'],
                ["style", "width", '257px']
            ],
            "${_mid_pop3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"bot_pop": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bot_pop',
                    type: 'image',
                    rect: ['0px', '0px', '317px', '254px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bot%20pop.svg', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['27px', '20px', '267px', '213px', 'auto', 'auto'],
                    id: 'Text3Copy3',
                    text: 'Be the most effective innovator and distributor of insurance products in the Direct and Partnerships markets with a focus on niche areas for <br>Direct and mainstream for Partnerships.  We will continue to acquire businesses offering new products and/or routes <br>to market.',
                    align: 'left',
                    font: ['raleway, sans-serif', 18, 'rgba(32,47,53,1.00)', '300', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bot_pop}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '254px'],
                ["style", "width", '317px']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '20px'],
                ["style", "text-align", 'left'],
                ["style", "height", '213px'],
                ["color", "color", 'rgba(32,47,53,1.00)'],
                ["style", "left", '27px'],
                ["style", "width", '267px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"top_pop": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'top_pop',
                    type: 'image',
                    rect: ['0px', '0px', '317px', '140px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/top%20pop.svg', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['27px', '17px', '275px', '107px', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'Embed the Gallagher Way into all of our businesses, including acquired businesses and locations to ensure staff live and breathe the Gallagher values.',
                    align: 'left',
                    font: ['raleway, sans-serif', 18, 'rgba(32,47,53,1.00)', '300', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'left'],
                ["style", "height", '107px'],
                ["color", "color", 'rgba(32,47,53,1.00)'],
                ["style", "left", '27px'],
                ["style", "width", '275px']
            ],
            "${_top_pop}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '140px'],
                ["style", "width", '317px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"button": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '125px', '35px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['11px', '7px', '103px', 'auto', 'auto', 'auto'],
                    font: ['raleway, sans-serif', 18, 'rgba(32,47,53,1.00)', '300', 'none', 'normal'],
                    id: 'Text2Copy3',
                    text: 'Continue »',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy3}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '125px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '7px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-weight", '300'],
                ["color", "color", 'rgba(32,47,53,1)'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "left", '11px'],
                ["style", "width", '103px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '125px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid110", tween: [ "transform", "${_Text2Copy3}", "scaleY", '0.75', { fromValue: '1'}], position: 0, duration: 750, easing: "easeInOutQuint" },
                { id: "eid111", tween: [ "transform", "${_RectangleCopy3}", "scaleX", '0.75', { fromValue: '1'}], position: 0, duration: 750, easing: "easeInOutQuint" },
                { id: "eid109", tween: [ "transform", "${_Text2Copy3}", "scaleX", '0.75', { fromValue: '1'}], position: 0, duration: 750, easing: "easeInOutQuint" },
                { id: "eid112", tween: [ "transform", "${_RectangleCopy3}", "scaleY", '0.75', { fromValue: '1'}], position: 0, duration: 750, easing: "easeInOutQuint" }            ]
        }
    }
},
"CogAnim1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cog2',
                    type: 'rect',
                    rect: ['298px', '88px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['527px', '179px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['raleway, sans-serif', 20, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    id: 'Text',
                    text: 'Our<br>People',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'cog2',
                symbolName: 'cog',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cog2}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '88px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '440px']
            ],
            "${_Text}": [
                ["style", "top", '179px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '522px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "transform", "${_cog2}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid29", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid30", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid22", tween: [ "transform", "${_cog2}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" }            ]
        }
    }
},
"CogAnim2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cog22',
                    type: 'rect',
                    rect: ['114px', '200px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['367px', '311px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['raleway, sans-serif', 20, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy',
                    text: 'Our<br>Target<br>Operating<br>Model',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'cog22',
                symbolName: 'cog2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ],
            "${_TextCopy}": [
                ["style", "top", '311px'],
                ["style", "line-height", '20px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '362px'],
                ["style", "font-size", '20px']
            ],
            "${_cog22}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '200px'],
                ["style", "left", '256px'],
                ["transform", "scaleY", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid27", tween: [ "transform", "${_cog22}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid28", tween: [ "transform", "${_cog22}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid32", tween: [ "transform", "${_TextCopy}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid31", tween: [ "transform", "${_TextCopy}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" }            ]
        }
    }
},
"CogAnim3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cog2Copy2',
                    type: 'rect',
                    rect: ['298px', '88px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['514px', '465px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['raleway, sans-serif', 18, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy2',
                    text: 'Our<br>Products &amp;<br>Routes To<br>Markets',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'cog2Copy2',
                symbolName: 'cog',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cog2Copy2}": [
                ["style", "top", '385px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '440px'],
                ["transform", "scaleY", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '465px'],
                ["style", "line-height", '18px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '509px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid34", tween: [ "transform", "${_TextCopy2}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid25", tween: [ "transform", "${_cog2Copy2}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid26", tween: [ "transform", "${_cog2Copy2}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid33", tween: [ "transform", "${_TextCopy2}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" }            ]
        }
    }
},
"PopAnim3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bot_pop2',
                    type: 'rect',
                    rect: ['0px', '-32px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'bot_pop2',
                symbolName: 'bot_pop',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '191px'],
                ["style", "width", '238px']
            ],
            "${_bot_pop2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.75'],
                ["transform", "scaleX", '0.75'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '-32px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid51", tween: [ "transform", "${_bot_pop2}", "scaleX", '1', { fromValue: '0.75'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid50", tween: [ "transform", "${_bot_pop2}", "scaleY", '1', { fromValue: '0.75'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid57", tween: [ "style", "${_bot_pop2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }            ]
        }
    }
},
"PopAnim2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'mid_pop4',
                    type: 'rect',
                    rect: ['-64px', '-34px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'mid_pop4',
                symbolName: 'mid_pop',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mid_pop4}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.75'],
                ["transform", "scaleX", '0.75'],
                ["style", "opacity", '0'],
                ["style", "left", '-64px'],
                ["style", "top", '-34px']
            ],
            "${symbolSelector}": [
                ["style", "height", '206px'],
                ["style", "width", '193px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid60", tween: [ "style", "${_mid_pop4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid47", tween: [ "transform", "${_mid_pop4}", "scaleX", '1', { fromValue: '0.75'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid48", tween: [ "transform", "${_mid_pop4}", "scaleY", '1', { fromValue: '0.75'}], position: 0, duration: 1000, easing: "easeOutElastic" }            ]
        }
    }
},
"PopAnim1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'top_pop2',
                    type: 'rect',
                    rect: ['0px', '-17px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'top_pop2',
                symbolName: 'top_pop',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_top_pop2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.75'],
                ["transform", "scaleX", '0.75'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '-17px']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '238px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid62", tween: [ "style", "${_top_pop2}", "opacity", '0.9746887703252', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid54", tween: [ "transform", "${_top_pop2}", "scaleX", '1', { fromValue: '0.75'}], position: 0, duration: 1000, easing: "easeOutElastic" },
                { id: "eid53", tween: [ "transform", "${_top_pop2}", "scaleY", '1', { fromValue: '0.75'}], position: 0, duration: 1000, easing: "easeOutElastic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-8295068");
