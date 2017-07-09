/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'whistle',
                            symbolName: 'whistle',
                            type: 'rect',
                            rect: ['288', '260', '21', '52', 'auto', 'auto']
                        },
                        {
                            id: 'light',
                            symbolName: 'light',
                            type: 'rect',
                            rect: ['344', '254', '32', '56', 'auto', 'auto']
                        },
                        {
                            id: 'funnel-arm2',
                            symbolName: 'funnel-arm',
                            type: 'rect',
                            rect: ['173', '401', '87', '83', 'auto', 'auto']
                        },
                        {
                            id: 'machine',
                            type: 'image',
                            rect: ['255', '269', '258px', '309px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"machine.svg",'0px','0px']
                        },
                        {
                            id: 'gnics_logo',
                            type: 'image',
                            rect: ['890', '679', '104px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gnics_logo.png",'0px','0px']
                        },
                        {
                            id: 'cog13',
                            symbolName: 'cog1',
                            type: 'rect',
                            rect: ['283', '428', '42', '46', 'auto', 'auto']
                        },
                        {
                            id: 'cog2',
                            symbolName: 'cog2',
                            type: 'rect',
                            rect: ['272', '396', '36', '38', 'auto', 'auto']
                        },
                        {
                            id: 'cog3',
                            symbolName: 'cog3',
                            type: 'rect',
                            rect: ['283', '359', '46', '42', 'auto', 'auto']
                        },
                        {
                            id: 'cog4',
                            symbolName: 'cog4',
                            type: 'rect',
                            rect: ['317', '324', '59', '55', 'auto', 'auto']
                        },
                        {
                            id: 'cog5',
                            symbolName: 'cog5',
                            type: 'rect',
                            rect: ['345', '366', '75', '69', 'auto', 'auto']
                        },
                        {
                            id: 'cog6',
                            symbolName: 'cog6',
                            type: 'rect',
                            rect: ['342', '433', '81', '87', 'auto', 'auto']
                        },
                        {
                            id: 'card3',
                            symbolName: 'card',
                            type: 'rect',
                            rect: ['481', '328', '34', '28', 'auto', 'auto'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'left-funnel',
                            symbolName: 'left-funnel',
                            type: 'rect',
                            rect: ['-60', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'belt',
                            type: 'image',
                            rect: ['463', '502', '561px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"belt.svg",'0px','0px']
                        },
                        {
                            id: 'cog7',
                            symbolName: 'cog7',
                            type: 'rect',
                            rect: ['478', '510', '51', '56', 'auto', 'auto']
                        },
                        {
                            id: 'cog82',
                            symbolName: 'cog8',
                            type: 'rect',
                            rect: ['554', '519', '39', '41', 'auto', 'auto']
                        },
                        {
                            id: 'btn1',
                            symbolName: 'btn1',
                            type: 'rect',
                            rect: ['314', '546', '10', '10', 'auto', 'auto']
                        },
                        {
                            id: 'btn2',
                            symbolName: 'btn2',
                            type: 'rect',
                            rect: ['327', '547', '9', '9', 'auto', 'auto']
                        },
                        {
                            id: 'btn3',
                            symbolName: 'btn3',
                            type: 'rect',
                            rect: ['339', '547', '10', '9', 'auto', 'auto']
                        },
                        {
                            id: 'btn4',
                            symbolName: 'btn4',
                            type: 'rect',
                            rect: ['352', '547', '9', '9', 'auto', 'auto'],
                            opacity: 0.98
                        },
                        {
                            id: 'btn5',
                            symbolName: 'btn5',
                            type: 'rect',
                            rect: ['364', '547', '9', '10', 'auto', 'auto']
                        },
                        {
                            id: 'btn62',
                            symbolName: 'btn6',
                            type: 'rect',
                            rect: ['376', '547', '9', '10', 'auto', 'auto']
                        },
                        {
                            id: 'new',
                            type: 'image',
                            rect: ['1052', '106', '96px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"new.svg",'0px','0px'],
                            transform: [[],['25']]
                        },
                        {
                            id: 'product',
                            type: 'image',
                            rect: ['1035', '148', '167px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"product.svg",'0px','0px'],
                            transform: [[],['-18']]
                        },
                        {
                            id: 'development',
                            type: 'image',
                            rect: ['1030', '214', '283px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"development.svg",'0px','0px'],
                            transform: [[],['13']]
                        },
                        {
                            id: 'excellence',
                            type: 'image',
                            rect: ['1034', '244', '235px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"excellence.svg",'0px','0px'],
                            transform: [[],['-16']]
                        },
                        {
                            id: 'toolkit',
                            type: 'image',
                            rect: ['1041', '359', '154px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"toolkit.svg",'0px','0px'],
                            transform: [[],['22']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024', '730', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8750,
                    autoPlay: true,
                    data: [
                        [
                            "eid416",
                            "scaleY",
                            2750,
                            1500,
                            "easeInOutQuint",
                            "${card3}",
                            '0.4',
                            '0.75'
                        ],
                        [
                            "eid417",
                            "scaleY",
                            4250,
                            750,
                            "easeOutBounce",
                            "${card3}",
                            '0.75',
                            '1'
                        ],
                        [
                            "eid243",
                            "left",
                            0,
                            0,
                            "easeInQuart",
                            "${cog13}",
                            '283px',
                            '283px'
                        ],
                        [
                            "eid332",
                            "left",
                            2000,
                            1000,
                            "easeInOutCubic",
                            "${toolkit}",
                            '1041px',
                            '715px'
                        ],
                        [
                            "eid334",
                            "rotateZ",
                            2000,
                            1000,
                            "easeInOutBack",
                            "${toolkit}",
                            '22deg',
                            '0deg'
                        ],
                        [
                            "eid242",
                            "left",
                            0,
                            0,
                            "easeInQuart",
                            "${whistle}",
                            '288px',
                            '288px'
                        ],
                        [
                            "eid296",
                            "rotateZ",
                            1000,
                            1000,
                            "easeInOutBack",
                            "${new}",
                            '25deg',
                            '0deg'
                        ],
                        [
                            "eid324",
                            "left",
                            1750,
                            1000,
                            "easeInOutCubic",
                            "${excellence}",
                            '1034px',
                            '646px'
                        ],
                        [
                            "eid453",
                            "rotateZ",
                            3750,
                            68,
                            "linear",
                            "${card3}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid454",
                            "rotateZ",
                            3818,
                            68,
                            "linear",
                            "${card3}",
                            '-5deg',
                            '5deg'
                        ],
                        [
                            "eid455",
                            "rotateZ",
                            3886,
                            68,
                            "linear",
                            "${card3}",
                            '5deg',
                            '-4deg'
                        ],
                        [
                            "eid456",
                            "rotateZ",
                            3955,
                            68,
                            "linear",
                            "${card3}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid457",
                            "rotateZ",
                            4023,
                            68,
                            "linear",
                            "${card3}",
                            '4deg',
                            '-3deg'
                        ],
                        [
                            "eid458",
                            "rotateZ",
                            4091,
                            68,
                            "linear",
                            "${card3}",
                            '-3deg',
                            '3deg'
                        ],
                        [
                            "eid459",
                            "rotateZ",
                            4159,
                            68,
                            "linear",
                            "${card3}",
                            '3deg',
                            '-2deg'
                        ],
                        [
                            "eid460",
                            "rotateZ",
                            4227,
                            68,
                            "linear",
                            "${card3}",
                            '-2deg',
                            '2deg'
                        ],
                        [
                            "eid461",
                            "rotateZ",
                            4295,
                            69,
                            "linear",
                            "${card3}",
                            '2deg',
                            '-1deg'
                        ],
                        [
                            "eid462",
                            "rotateZ",
                            4364,
                            68,
                            "linear",
                            "${card3}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid463",
                            "rotateZ",
                            4432,
                            68,
                            "linear",
                            "${card3}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid295",
                            "top",
                            1000,
                            1000,
                            "easeInOutCubic",
                            "${new}",
                            '106px',
                            '108px'
                        ],
                        [
                            "eid306",
                            "rotateZ",
                            1250,
                            1000,
                            "easeInOutBack",
                            "${product}",
                            '-18deg',
                            '0deg'
                        ],
                        [
                            "eid264",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuint",
                            "${btn4}",
                            '0.98',
                            '0.98'
                        ],
                        [
                            "eid323",
                            "rotateZ",
                            1750,
                            1000,
                            "easeInOutBack",
                            "${excellence}",
                            '-16deg',
                            '0deg'
                        ],
                        [
                            "eid307",
                            "top",
                            1250,
                            1000,
                            "easeInOutCubic",
                            "${product}",
                            '148px',
                            '158px'
                        ],
                        [
                            "eid315",
                            "top",
                            1500,
                            1000,
                            "easeInOutCubic",
                            "${development}",
                            '214px',
                            '196px'
                        ],
                        [
                            "eid239",
                            "left",
                            0,
                            0,
                            "easeInQuart",
                            "${cog6}",
                            '342px',
                            '342px'
                        ],
                        [
                            "eid241",
                            "left",
                            0,
                            0,
                            "easeInQuart",
                            "${cog3}",
                            '283px',
                            '283px'
                        ],
                        [
                            "eid414",
                            "scaleX",
                            2750,
                            1500,
                            "easeInOutQuint",
                            "${card3}",
                            '0.4',
                            '0.75'
                        ],
                        [
                            "eid415",
                            "scaleX",
                            4250,
                            750,
                            "easeOutBounce",
                            "${card3}",
                            '0.75',
                            '1'
                        ],
                        [
                            "eid314",
                            "left",
                            1500,
                            1000,
                            "easeInOutCubic",
                            "${development}",
                            '1030px',
                            '602px'
                        ],
                        [
                            "eid305",
                            "left",
                            1250,
                            1000,
                            "easeInOutCubic",
                            "${product}",
                            '1035px',
                            '529px'
                        ],
                        [
                            "eid316",
                            "rotateZ",
                            1500,
                            1000,
                            "easeInOutBack",
                            "${development}",
                            '13deg',
                            '0deg'
                        ],
                        [
                            "eid294",
                            "left",
                            1000,
                            1000,
                            "easeInOutCubic",
                            "${new}",
                            '1052px',
                            '573px'
                        ],
                        [
                            "eid325",
                            "top",
                            1750,
                            1000,
                            "easeInOutCubic",
                            "${excellence}",
                            '244px',
                            '274px'
                        ],
                        [
                            "eid333",
                            "top",
                            2000,
                            1000,
                            "easeInOutCubic",
                            "${toolkit}",
                            '359px',
                            '341px'
                        ],
                        [
                            "eid240",
                            "left",
                            0,
                            0,
                            "easeInQuart",
                            "${cog5}",
                            '345px',
                            '345px'
                        ],
                        [
                            "eid237",
                            "left",
                            0,
                            0,
                            "easeInQuart",
                            "${cog4}",
                            '317px',
                            '317px'
                        ],
                        [
                            "eid418",
                            "left",
                            2750,
                            1500,
                            "easeInOutQuint",
                            "${card3}",
                            '481px',
                            '470px'
                        ],
                        [
                            "eid419",
                            "left",
                            4500,
                            4250,
                            "swing",
                            "${card3}",
                            '470px',
                            '694px'
                        ],
                        [
                            "eid412",
                            "top",
                            2750,
                            1500,
                            "easeInOutQuint",
                            "${card3}",
                            '328px',
                            '351px'
                        ],
                        [
                            "eid413",
                            "top",
                            4250,
                            750,
                            "easeOutBounce",
                            "${card3}",
                            '351px',
                            '430px'
                        ],
                        [
                            "eid238",
                            "left",
                            0,
                            0,
                            "easeInQuart",
                            "${cog2}",
                            '272px',
                            '272px'
                        ],
                            [ "eid429", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${card3}', [] ] ],
                            [ "eid430", "trigger", 5250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${card3}', [] ] ]
                    ]
                }
            },
            "cog6": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '81px', '87px', 'auto', 'auto'],
                            id: 'cog6',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cog6.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 81, 87]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${cog6}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "cog5": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '75px', '69px', 'auto', 'auto'],
                            id: 'cog5',
                            transform: [[0, 0, 0], ['360', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cog5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 75, 69]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${cog5}",
                            '360deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "cog4": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '59px', '55px', 'auto', 'auto'],
                            id: 'cog4',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cog4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 59, 55]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${cog4}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "cog3": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '46px', '42px', 'auto', 'auto'],
                            id: 'cog3',
                            transform: [[0, 0, 0], ['360', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cog3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 46, 42]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${cog3}",
                            '360deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "cog2": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '36px', '38px', 'auto', 'auto'],
                            id: 'cog2',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cog2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 36, 38]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${cog2}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "cog1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '42px', '46px', 'auto', 'auto'],
                            id: 'cog1',
                            transform: [[0, 0, 0], ['360', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cog1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 42, 46]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid20",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${cog1}",
                            '360deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "whistle": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [2, 16, '16px', '36px', 'auto', 'auto'],
                            id: 'whistle-body',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '100%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/whistle-body.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '21px', '18px', 'auto', 'auto'],
                            id: 'whistle-top',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '100%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/whistle-top.svg', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.75', '0.75', 1], ['50%', '50%']],
                            id: 'puff',
                            symbolName: 'puff',
                            type: 'rect',
                            rect: [-44, 3, 54, 114, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 21, 52]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid59",
                            "rotateZ",
                            1000,
                            78,
                            "linear",
                            "${whistle-body}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid60",
                            "rotateZ",
                            1078,
                            81,
                            "linear",
                            "${whistle-body}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid61",
                            "rotateZ",
                            1159,
                            74,
                            "linear",
                            "${whistle-body}",
                            '-5deg',
                            '4deg'
                        ],
                        [
                            "eid62",
                            "rotateZ",
                            1233,
                            69,
                            "linear",
                            "${whistle-body}",
                            '4deg',
                            '-4deg'
                        ],
                        [
                            "eid63",
                            "rotateZ",
                            1302,
                            56,
                            "linear",
                            "${whistle-body}",
                            '-4deg',
                            '-3deg'
                        ],
                        [
                            "eid64",
                            "rotateZ",
                            1359,
                            67,
                            "linear",
                            "${whistle-body}",
                            '-3deg',
                            '3deg'
                        ],
                        [
                            "eid65",
                            "rotateZ",
                            1425,
                            69,
                            "linear",
                            "${whistle-body}",
                            '3deg',
                            '-2deg'
                        ],
                        [
                            "eid66",
                            "rotateZ",
                            1494,
                            55,
                            "linear",
                            "${whistle-body}",
                            '-2deg',
                            '2deg'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            1549,
                            70,
                            "linear",
                            "${whistle-body}",
                            '2deg',
                            '-1deg'
                        ],
                        [
                            "eid68",
                            "rotateZ",
                            1619,
                            76,
                            "linear",
                            "${whistle-body}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid69",
                            "rotateZ",
                            1695,
                            55,
                            "linear",
                            "${whistle-body}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid72",
                            "rotateZ",
                            1000,
                            85,
                            "linear",
                            "${whistle-top}",
                            '0deg',
                            '26deg'
                        ],
                        [
                            "eid73",
                            "rotateZ",
                            1085,
                            89,
                            "linear",
                            "${whistle-top}",
                            '26deg',
                            '-7deg'
                        ],
                        [
                            "eid84",
                            "rotateZ",
                            1174,
                            81,
                            "linear",
                            "${whistle-top}",
                            '-7deg',
                            '5deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            1255,
                            75,
                            "linear",
                            "${whistle-top}",
                            '5deg',
                            '15deg'
                        ],
                        [
                            "eid93",
                            "rotateZ",
                            1393,
                            72,
                            "linear",
                            "${whistle-top}",
                            '15deg',
                            '-2deg'
                        ],
                        [
                            "eid97",
                            "rotateZ",
                            1465,
                            75,
                            "linear",
                            "${whistle-top}",
                            '-2deg',
                            '17deg'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            1600,
                            0,
                            "linear",
                            "${whistle-top}",
                            '17deg',
                            '17deg'
                        ],
                        [
                            "eid115",
                            "rotateZ",
                            1677,
                            143,
                            "linear",
                            "${whistle-top}",
                            '17deg',
                            '0deg'
                        ],
                        [
                            "eid80",
                            "left",
                            1000,
                            85,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid82",
                            "left",
                            1085,
                            89,
                            "linear",
                            "${whistle-top}",
                            '2px',
                            '-4px'
                        ],
                        [
                            "eid85",
                            "left",
                            1174,
                            81,
                            "linear",
                            "${whistle-top}",
                            '-4px',
                            '2px'
                        ],
                        [
                            "eid87",
                            "left",
                            1255,
                            75,
                            "linear",
                            "${whistle-top}",
                            '2px',
                            '-3px'
                        ],
                        [
                            "eid94",
                            "left",
                            1393,
                            72,
                            "linear",
                            "${whistle-top}",
                            '-3px',
                            '1px'
                        ],
                        [
                            "eid96",
                            "left",
                            1465,
                            75,
                            "linear",
                            "${whistle-top}",
                            '1px',
                            '-2px'
                        ],
                        [
                            "eid101",
                            "left",
                            1540,
                            60,
                            "linear",
                            "${whistle-top}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid110",
                            "left",
                            1677,
                            0,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid111",
                            "left",
                            1760,
                            0,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid81",
                            "top",
                            1000,
                            85,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid83",
                            "top",
                            1085,
                            89,
                            "linear",
                            "${whistle-top}",
                            '-1px',
                            '0px'
                        ],
                        [
                            "eid86",
                            "top",
                            1255,
                            0,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "top",
                            1330,
                            0,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "top",
                            1393,
                            0,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "top",
                            1465,
                            0,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid104",
                            "top",
                            1600,
                            0,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid109",
                            "top",
                            1677,
                            83,
                            "linear",
                            "${whistle-top}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid114",
                            "top",
                            1760,
                            60,
                            "linear",
                            "${whistle-top}",
                            '-1px',
                            '0px'
                        ]
                    ]
                }
            },
            "puff": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 'auto', '126px', '69px', 'auto', 94],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.24', '0.24', 1], ['0%', '92%']],
                            id: 'puffCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/puff.svg', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [33, -5, '27px', '27px', 'auto', 'auto'],
                            display: 'block',
                            opacity: '0',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.55', '0.45', 1], ['50%', '50%']],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [40, -1, 12, 12, 'auto', 'auto'],
                            display: 'block',
                            opacity: '0',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.43', '0.47', 1], ['50%', '50%']],
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 54, 114]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid219",
                            "scaleY",
                            995,
                            361,
                            "easeInQuart",
                            "${puffCopy}",
                            '0.24',
                            '1'
                        ],
                        [
                            "eid220",
                            "scaleY",
                            1356,
                            1394,
                            "easeOutQuart",
                            "${puffCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid192",
                            "scaleY",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy2}",
                            '0.47',
                            '1'
                        ],
                        [
                            "eid193",
                            "scaleY",
                            1356,
                            1394,
                            "easeOutQuart",
                            "${EllipseCopy2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid204",
                            "scaleY",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid205",
                            "scaleY",
                            1356,
                            1394,
                            "easeOutQuint",
                            "${EllipseCopy3}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid200",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            1127,
                            0,
                            "linear",
                            "${EllipseCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid217",
                            "opacity",
                            995,
                            251,
                            "easeInOutQuart",
                            "${puffCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid218",
                            "opacity",
                            1356,
                            1394,
                            "easeOutQuart",
                            "${puffCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid196",
                            "opacity",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "opacity",
                            1356,
                            906,
                            "easeOutQuart",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid213",
                            "scaleX",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy3}",
                            '0.55',
                            '1'
                        ],
                        [
                            "eid214",
                            "scaleX",
                            1356,
                            1394,
                            "easeOutQuint",
                            "${EllipseCopy3}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid211",
                            "left",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy3}",
                            '33px',
                            '126px'
                        ],
                        [
                            "eid212",
                            "left",
                            1356,
                            1394,
                            "easeOutQuint",
                            "${EllipseCopy3}",
                            '126px',
                            '151px'
                        ],
                        [
                            "eid208",
                            "opacity",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid209",
                            "opacity",
                            1356,
                            1113,
                            "easeOutQuint",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid194",
                            "scaleX",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy2}",
                            '0.43',
                            '1'
                        ],
                        [
                            "eid195",
                            "scaleX",
                            1356,
                            1394,
                            "easeOutQuart",
                            "${EllipseCopy2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid206",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            1127,
                            0,
                            "linear",
                            "${EllipseCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid215",
                            "scaleX",
                            995,
                            361,
                            "easeInQuart",
                            "${puffCopy}",
                            '0.24',
                            '1'
                        ],
                        [
                            "eid216",
                            "scaleX",
                            1356,
                            1394,
                            "easeOutQuart",
                            "${puffCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid221",
                            "top",
                            1216,
                            140,
                            "easeInSine",
                            "${EllipseCopy2}",
                            '-1px',
                            '-31px'
                        ],
                        [
                            "eid191",
                            "top",
                            1356,
                            1394,
                            "easeOutQuart",
                            "${EllipseCopy2}",
                            '-31px',
                            '-48px'
                        ],
                        [
                            "eid202",
                            "top",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy3}",
                            '-5px',
                            '-7px'
                        ],
                        [
                            "eid203",
                            "top",
                            1356,
                            1394,
                            "easeOutQuint",
                            "${EllipseCopy3}",
                            '-7px',
                            '-11px'
                        ],
                        [
                            "eid222",
                            "left",
                            1216,
                            140,
                            "easeInQuart",
                            "${EllipseCopy2}",
                            '40px',
                            '140px'
                        ],
                        [
                            "eid199",
                            "left",
                            1356,
                            1394,
                            "easeOutQuart",
                            "${EllipseCopy2}",
                            '140px',
                            '168px'
                        ]
                    ]
                }
            },
            "cog7": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '51px', '56px', 'auto', 'auto'],
                            id: 'cog7',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cog7.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 51, 56]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid245",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${cog7}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "cog8": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '39px', '41px', 'auto', 'auto'],
                            id: 'cog8',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cog8.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 39, 41]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid247",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${cog8}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "light": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '32px', '56px', 'auto', 'auto'],
                            id: 'light-off',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/light-off.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '32px', '56px', 'auto', 'auto'],
                            id: 'light-on',
                            opacity: '0.000000',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/light-on.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 32, 56]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid250",
                            "opacity",
                            1000,
                            952,
                            "easeOutElastic",
                            "${light-on}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid251",
                            "opacity",
                            1952,
                            548,
                            "easeInOutQuint",
                            "${light-on}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: [0, 0, '10px', '10px', 'auto', 'auto'],
                            id: 'btn1',
                            fill: ['rgba(0,0,0,0)', 'images/btn1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: [0, 0, '10px', '10px', 'auto', 'auto'],
                            id: 'lgt1',
                            fill: ['rgba(0,0,0,0)', 'images/lgt1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 10, 10]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid286",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${btn1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid287",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${btn1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid252",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${lgt1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid253",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${lgt1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            1000,
                            0,
                            "easeInOutQuint",
                            "${lgt1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "btn2": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: [0, 0, '9px', '9px', 'auto', 'auto'],
                            id: 'btn2',
                            fill: ['rgba(0,0,0,0)', 'images/btn2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: [0, 0, '9px', '9px', 'auto', 'auto'],
                            id: 'lgt2',
                            fill: ['rgba(0,0,0,0)', 'images/lgt2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 9]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid284",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid256",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${lgt2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid257",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${lgt2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            1000,
                            0,
                            "easeInOutQuint",
                            "${lgt2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "btn3": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: [0, 0, '10px', '9px', 'auto', 'auto'],
                            id: 'btn3',
                            fill: ['rgba(0,0,0,0)', 'images/btn3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: [0, 0, '10px', '9px', 'auto', 'auto'],
                            id: 'lgt3',
                            fill: ['rgba(0,0,0,0)', 'images/lgt3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 10, 9]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid282",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${btn3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${btn3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid260",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${lgt3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${lgt3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            1000,
                            0,
                            "easeInOutQuint",
                            "${lgt3}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "btn4": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: [0, 0, '9px', '9px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '1',
                            id: 'btn4',
                            fill: ['rgba(0,0,0,0)', 'images/btn4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: [0, 0, '9px', '9px', 'auto', 'auto'],
                            id: 'lgt4',
                            fill: ['rgba(0,0,0,0)', 'images/lgt4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 9]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid280",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${btn4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid281",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${btn4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${lgt4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid267",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${lgt4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid268",
                            "display",
                            1000,
                            0,
                            "easeInOutQuint",
                            "${lgt4}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "btn5": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: [0, 0, '9px', '10px', 'auto', 'auto'],
                            id: 'btn42',
                            fill: ['rgba(0,0,0,0)', 'images/btn42.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: [0, 0, '9px', '10px', 'auto', 'auto'],
                            id: 'lgt5',
                            fill: ['rgba(0,0,0,0)', 'images/lgt5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 10]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid278",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${btn42}",
                            'block',
                            'block'
                        ],
                        [
                            "eid279",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${btn42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid270",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${lgt5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid271",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${lgt5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            1000,
                            0,
                            "easeInOutQuint",
                            "${lgt5}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "btn6": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: [0, 0, '9px', '10px', 'auto', 'auto'],
                            id: 'btn6',
                            fill: ['rgba(0,0,0,0)', 'images/btn5.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: [0, 0, '9px', '10px', 'auto', 'auto'],
                            id: 'lgt6',
                            fill: ['rgba(0,0,0,0)', 'images/lgt6.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 10]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid276",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${btn6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid277",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${btn6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            0,
                            0,
                            "easeInOutQuint",
                            "${lgt6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            500,
                            0,
                            "easeInOutQuint",
                            "${lgt6}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "funnel-arm": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', 87, 83, 'auto', 'auto'],
                            id: 'funnel',
                            symbolName: 'funnel',
                            type: 'rect',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['100%', '14%']]
                        }
                    ],
                    style: {
                        '${left-funnel}': {
                            rect: [-60, 0, 0, 0]
                        },
                        '${symbolSelector}': {
                            rect: [null, null, 87, 83]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid365",
                            "rotateZ",
                            951,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid366",
                            "rotateZ",
                            1005,
                            53,
                            "easeInOutCubic",
                            "${funnel}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid367",
                            "rotateZ",
                            1058,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '-5deg',
                            '5deg'
                        ],
                        [
                            "eid368",
                            "rotateZ",
                            1112,
                            53,
                            "easeInOutCubic",
                            "${funnel}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid369",
                            "rotateZ",
                            1165,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '-5deg',
                            '5deg'
                        ],
                        [
                            "eid370",
                            "rotateZ",
                            1219,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '5deg',
                            '-4deg'
                        ],
                        [
                            "eid371",
                            "rotateZ",
                            1273,
                            53,
                            "easeInOutCubic",
                            "${funnel}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid372",
                            "rotateZ",
                            1326,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '4deg',
                            '-3deg'
                        ],
                        [
                            "eid373",
                            "rotateZ",
                            1380,
                            53,
                            "easeInOutCubic",
                            "${funnel}",
                            '-3deg',
                            '3deg'
                        ],
                        [
                            "eid374",
                            "rotateZ",
                            1433,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '3deg',
                            '-2deg'
                        ],
                        [
                            "eid375",
                            "rotateZ",
                            1487,
                            53,
                            "easeInOutCubic",
                            "${funnel}",
                            '-2deg',
                            '2deg'
                        ],
                        [
                            "eid376",
                            "rotateZ",
                            1540,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '2deg',
                            '-1deg'
                        ],
                        [
                            "eid377",
                            "rotateZ",
                            1594,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid378",
                            "rotateZ",
                            1648,
                            54,
                            "easeInOutCubic",
                            "${funnel}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid364",
                            "left",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '-60px',
                            '-60px'
                        ]
                    ]
                }
            },
            "funnel": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '87px', '83px', 'auto', 'auto'],
                            id: 'funnel-arm',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['100%', '14%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/funnel-arm.svg', '0px', '0px']
                        },
                        {
                            rect: [-59, -56, '122px', '71px', 'auto', 'auto'],
                            id: 'left-funnel',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['55%', '100%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left-funnel.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 87, 83]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid385",
                            "rotateZ",
                            1005,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid386",
                            "rotateZ",
                            1095,
                            88,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid387",
                            "rotateZ",
                            1182,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '-5deg',
                            '5deg'
                        ],
                        [
                            "eid388",
                            "rotateZ",
                            1272,
                            88,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid389",
                            "rotateZ",
                            1360,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '-5deg',
                            '5deg'
                        ],
                        [
                            "eid390",
                            "rotateZ",
                            1449,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '5deg',
                            '-4deg'
                        ],
                        [
                            "eid391",
                            "rotateZ",
                            1539,
                            88,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid392",
                            "rotateZ",
                            1627,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '4deg',
                            '-3deg'
                        ],
                        [
                            "eid393",
                            "rotateZ",
                            1716,
                            88,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '-3deg',
                            '3deg'
                        ],
                        [
                            "eid394",
                            "rotateZ",
                            1804,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '3deg',
                            '-2deg'
                        ],
                        [
                            "eid395",
                            "rotateZ",
                            1894,
                            88,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '-2deg',
                            '2deg'
                        ],
                        [
                            "eid396",
                            "rotateZ",
                            1981,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '2deg',
                            '-1deg'
                        ],
                        [
                            "eid397",
                            "rotateZ",
                            2071,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid398",
                            "rotateZ",
                            2160,
                            90,
                            "easeInOutCubic",
                            "${left-funnel}",
                            '1deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "card": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '86px', '70px', 'auto', 'auto'],
                            id: 'card2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, 1, 1], ['0%', '0%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/card.svg', '0px', '0px']
                        },
                        {
                            rect: [63, 0, '45px', '55px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['0.22', '0.22', 1], ['48%', '51%']],
                            id: 'sparkle',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sparkle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 34, 28]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid426",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sparkle}",
                            '0.22',
                            '1'
                        ],
                        [
                            "eid433",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${sparkle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid428",
                            "rotateZ",
                            0,
                            3000,
                            "easeOutElastic",
                            "${sparkle}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid427",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sparkle}",
                            '0.22',
                            '1'
                        ]
                    ]
                }
            },
            "left-funnel": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '65px', '37px', 'auto', 'auto'],
                            id: 'right-funnel',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['49%', '8%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-funnel.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 65, 37]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid435",
                            "rotateZ",
                            1000,
                            59,
                            "linear",
                            "${right-funnel}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid436",
                            "rotateZ",
                            1059,
                            59,
                            "linear",
                            "${right-funnel}",
                            '-8deg',
                            '8deg'
                        ],
                        [
                            "eid437",
                            "rotateZ",
                            1118,
                            59,
                            "linear",
                            "${right-funnel}",
                            '8deg',
                            '-7deg'
                        ],
                        [
                            "eid438",
                            "rotateZ",
                            1176,
                            59,
                            "linear",
                            "${right-funnel}",
                            '-7deg',
                            '7deg'
                        ],
                        [
                            "eid439",
                            "rotateZ",
                            1235,
                            59,
                            "linear",
                            "${right-funnel}",
                            '7deg',
                            '-6deg'
                        ],
                        [
                            "eid440",
                            "rotateZ",
                            1294,
                            59,
                            "linear",
                            "${right-funnel}",
                            '-6deg',
                            '6deg'
                        ],
                        [
                            "eid441",
                            "rotateZ",
                            1353,
                            59,
                            "linear",
                            "${right-funnel}",
                            '6deg',
                            '-5deg'
                        ],
                        [
                            "eid442",
                            "rotateZ",
                            1412,
                            59,
                            "linear",
                            "${right-funnel}",
                            '-5deg',
                            '5deg'
                        ],
                        [
                            "eid443",
                            "rotateZ",
                            1471,
                            59,
                            "linear",
                            "${right-funnel}",
                            '5deg',
                            '-4deg'
                        ],
                        [
                            "eid444",
                            "rotateZ",
                            1529,
                            59,
                            "linear",
                            "${right-funnel}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid445",
                            "rotateZ",
                            1588,
                            59,
                            "linear",
                            "${right-funnel}",
                            '4deg',
                            '-3deg'
                        ],
                        [
                            "eid446",
                            "rotateZ",
                            1647,
                            59,
                            "linear",
                            "${right-funnel}",
                            '-3deg',
                            '3deg'
                        ],
                        [
                            "eid447",
                            "rotateZ",
                            1706,
                            59,
                            "linear",
                            "${right-funnel}",
                            '3deg',
                            '-2deg'
                        ],
                        [
                            "eid448",
                            "rotateZ",
                            1765,
                            59,
                            "linear",
                            "${right-funnel}",
                            '-2deg',
                            '2deg'
                        ],
                        [
                            "eid449",
                            "rotateZ",
                            1824,
                            59,
                            "linear",
                            "${right-funnel}",
                            '2deg',
                            '-1deg'
                        ],
                        [
                            "eid450",
                            "rotateZ",
                            1882,
                            59,
                            "linear",
                            "${right-funnel}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid451",
                            "rotateZ",
                            1941,
                            59,
                            "linear",
                            "${right-funnel}",
                            '1deg',
                            '0deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("001_edgeActions.js");
})("AMEX_001-cover");
