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
                id: 'Text',
                type: 'text',
                rect: ['596px', '531px','auto','auto','auto', 'auto'],
                text: "Cross brand marketing<br>to support cross sales",
                align: "center",
                font: ['raleway, sans-serif', 18, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'balls_claw',
                type: 'rect',
                rect: ['158', '-578','auto','auto','auto', 'auto']
            },
            {
                id: 'light',
                type: 'rect',
                rect: ['457', '252','auto','auto','auto', 'auto']
            },
            {
                id: 'whistle2',
                type: 'rect',
                rect: ['314', '163','auto','auto','auto', 'auto']
            },
            {
                id: 'Funnel',
                type: 'image',
                rect: ['136px', '194px','147px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Funnel.svg",'0px','0px']
            },
            {
                id: 'conveyor',
                type: 'rect',
                rect: ['154', '484','auto','auto','auto', 'auto']
            },
            {
                id: 'Machine2',
                type: 'image',
                rect: ['135px', '301px','148px','289px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Machine.svg",'0px','0px']
            },
            {
                id: 'Machine2Copy',
                type: 'image',
                rect: ['282px', '301px','148px','289px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Machine.svg",'0px','0px']
            },
            {
                id: 'Machine2Copy2',
                type: 'image',
                rect: ['429px', '301px','148px','289px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Machine.svg",'0px','0px']
            },
            {
                id: 'top_dial2',
                type: 'rect',
                rect: ['172', '302','auto','auto','auto', 'auto']
            },
            {
                id: 'top_dial2Copy',
                type: 'rect',
                rect: ['172', '302','auto','auto','auto', 'auto']
            },
            {
                id: 'top_dial2Copy2',
                type: 'rect',
                rect: ['172', '302','auto','auto','auto', 'auto']
            },
            {
                id: 'SliderBGs',
                type: 'group',
                rect: ['151px', '441px','411','43','auto', 'auto'],
                c: [
                {
                    id: 'slider_bgCopy',
                    type: 'image',
                    rect: ['146px', '0px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy2',
                    type: 'image',
                    rect: ['146px', '13px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy3',
                    type: 'image',
                    rect: ['146px', '26px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy4',
                    type: 'image',
                    rect: ['146px', '39px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy13',
                    type: 'image',
                    rect: ['0px', '0px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy12',
                    type: 'image',
                    rect: ['0px', '13px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy11',
                    type: 'image',
                    rect: ['0px', '26px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy10',
                    type: 'image',
                    rect: ['0px', '39px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy8',
                    type: 'image',
                    rect: ['293px', '0px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy7',
                    type: 'image',
                    rect: ['293px', '13px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy6',
                    type: 'image',
                    rect: ['293px', '26px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                },
                {
                    id: 'slider_bgCopy5',
                    type: 'image',
                    rect: ['293px', '39px','118px','4px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"slider%20bg.svg",'0px','0px']
                }]
            },
            {
                id: 'left_slides',
                type: 'rect',
                rect: ['131', '428','auto','auto','auto', 'auto']
            },
            {
                id: 'middle_slides',
                type: 'rect',
                rect: ['277', '428','auto','auto','auto', 'auto']
            },
            {
                id: 'right_slides',
                type: 'rect',
                rect: ['424', '428','auto','auto','auto', 'auto']
            },
            {
                id: 'gauges',
                type: 'rect',
                rect: ['176', '497','auto','auto','auto', 'auto']
            },
            {
                id: 'Attract_Leads',
                type: 'text',
                rect: ['156px', '370px','106px','44px','auto', 'auto'],
                text: "Attract<br>Leads",
                align: "center",
                font: ['raleway, sans-serif', 18, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Nurture_Leads',
                type: 'text',
                rect: ['156px', '370px','106px','44px','auto', 'auto'],
                text: "Nurture<br>Leads",
                align: "center",
                font: ['raleway, sans-serif', 18, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Nurture_LeadsCopy',
                type: 'text',
                rect: ['156px', '370px','106px','44px','auto', 'auto'],
                text: "Convert<br>Leads",
                align: "center",
                font: ['raleway, sans-serif', 18, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['173px', '552px','auto','auto','auto', 'auto'],
                text: "ENGAGEMENT",
                align: "center",
                font: ['raleway, sans-serif', 10, "rgba(51,51,51,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                type: 'text',
                rect: ['315px', '552px','auto','auto','auto', 'auto'],
                text: "CONSIDERATION",
                align: "center",
                font: ['raleway, sans-serif', 10, "rgba(51,51,51,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Text3Copy2',
                type: 'text',
                rect: ['460px', '552px','auto','auto','auto', 'auto'],
                text: "SALES &amp; LOYALTY",
                align: "center",
                font: ['raleway, sans-serif', 10, "rgba(51,51,51,1.00)", "700", "none", "normal"]
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
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['25px', '42px','975px','1px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy2',
                type: 'rect',
                rect: ['450px', '25px','125px','35px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['25px', '688px','auto','auto','auto', 'auto'],
                text: "Customer Acquisition &amp; Retention",
                align: "center",
                font: ['raleway, sans-serif', 14, "rgba(201,201,201,1.00)", "300", "none", "normal"]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['25px', '665px','auto','auto','auto', 'auto'],
                text: "Gallagher Insurance Solutions",
                align: "center",
                font: ['raleway, sans-serif', 18, "rgba(255,255,255,1)", "300", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['461px', '32px','auto','auto','auto', 'auto'],
                text: "What we do",
                align: "center",
                font: ['raleway, sans-serif', 18, "rgba(32,47,53,1.00)", "300", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'conveyor',
                symbolName: 'conveyor',
                autoPlay: {

                }
            },
            {
                id: 'top_dial2',
                symbolName: 'top_dial',
                autoPlay: {

                }
            },
            {
                id: 'middle_slides',
                symbolName: 'middle_slides',
                autoPlay: {

                }
            },
            {
                id: 'top_dial2Copy2',
                symbolName: 'top_dial',
                autoPlay: {

                }
            },
            {
                id: 'right_slides',
                symbolName: 'right_slides',
                autoPlay: {

                }
            },
            {
                id: 'left_slides',
                symbolName: 'left_slides',
                autoPlay: {

                }
            },
            {
                id: 'whistle2',
                symbolName: 'whistle',
                autoPlay: {

                }
            },
            {
                id: 'gauges',
                symbolName: 'gauges',
                autoPlay: {

                }
            },
            {
                id: 'top_dial2Copy',
                symbolName: 'top_dial',
                autoPlay: {

                }
            },
            {
                id: 'balls_claw',
                symbolName: 'balls_claw',
                autoPlay: {

                }
            },
            {
                id: 'light',
                symbolName: 'light',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Funnel}": [
                ["style", "left", '136px'],
                ["style", "top", '194px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '665px'],
                ["style", "font-weight", '300'],
                ["style", "left", '25px'],
                ["style", "font-family", 'raleway, sans-serif']
            ],
            "${_Text2}": [
                ["style", "top", '688px'],
                ["style", "font-weight", '300'],
                ["color", "color", 'rgba(201,201,201,1.00)'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "left", '25px'],
                ["style", "font-size", '14px']
            ],
            "${_slider_bgCopy6}": [
                ["style", "left", '293px'],
                ["style", "top", '26px']
            ],
            "${_left_slides}": [
                ["style", "top", '438px'],
                ["style", "left", '151px']
            ],
            "${_slider_bgCopy13}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Nurture_LeadsCopy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '450px'],
                ["style", "font-size", '18px'],
                ["style", "top", '373px'],
                ["transform", "scaleY", '0.5'],
                ["style", "height", '44px'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "width", '106px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_slider_bgCopy}": [
                ["style", "left", '146px'],
                ["style", "top", '0px']
            ],
            "${_top_dial2Copy2}": [
                ["style", "left", '486px'],
                ["style", "top", '312px']
            ],
            "${_Machine2}": [
                ["style", "left", '135px'],
                ["style", "top", '301px']
            ],
            "${_slider_bgCopy10}": [
                ["style", "left", '0px'],
                ["style", "top", '39px']
            ],
            "${_TextCopy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '531px'],
                ["style", "left", '388px'],
                ["style", "font-size", '18px']
            ],
            "${_SliderBGs}": [
                ["style", "top", '441px'],
                ["style", "left", '151px']
            ],
            "${_slider_bgCopy7}": [
                ["style", "left", '293px'],
                ["style", "top", '13px']
            ],
            "${_middle_slides}": [
                ["style", "top", '438px'],
                ["style", "left", '297px']
            ],
            "${_GradBG}": [
                ["style", "top", '0px'],
                ["style", "height", '730px'],
                ["gradient", "background-image", [270,[['rgba(22,32,36,1.00)',0],['rgba(32,47,53,1.00)',22]]]],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_Machine2Copy2}": [
                ["style", "left", '429px'],
                ["style", "top", '301px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '1px'],
                ["style", "top", '42px'],
                ["style", "left", '25px'],
                ["style", "width", '975px']
            ],
            "${_Machine2Copy}": [
                ["style", "left", '282px'],
                ["style", "top", '301px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '32px'],
                ["color", "color", 'rgba(32,47,53,1.00)'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "left", '461px'],
                ["style", "font-weight", '300']
            ],
            "${_conveyor}": [
                ["style", "top", '494px'],
                ["style", "left", '174px']
            ],
            "${_slider_bgCopy3}": [
                ["style", "left", '146px'],
                ["style", "top", '26px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '35px'],
                ["style", "top", '25px'],
                ["style", "left", '450px'],
                ["style", "width", '125px']
            ],
            "${_right_slides}": [
                ["style", "top", '438px'],
                ["style", "left", '444px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '1px'],
                ["style", "top", '645px'],
                ["style", "left", '25px'],
                ["style", "width", '975px']
            ],
            "${_top_dial2}": [
                ["style", "top", '312px'],
                ["style", "left", '192px']
            ],
            "${_whistle2}": [
                ["style", "top", '173px'],
                ["style", "left", '334px']
            ],
            "${_slider_bgCopy5}": [
                ["style", "left", '293px'],
                ["style", "top", '39px']
            ],
            "${_slider_bgCopy12}": [
                ["style", "left", '0px'],
                ["style", "top", '13px']
            ],
            "${_slider_bgCopy11}": [
                ["style", "left", '0px'],
                ["style", "top", '26px']
            ],
            "${_light}": [
                ["style", "top", '262px'],
                ["style", "left", '477px']
            ],
            "${_slider_bgCopy2}": [
                ["style", "left", '146px'],
                ["style", "top", '13px']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '552px'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '460px'],
                ["style", "font-size", '10px']
            ],
            "${_slider_bgCopy8}": [
                ["style", "left", '293px'],
                ["style", "top", '0px']
            ],
            "${_slider_bgCopy4}": [
                ["style", "left", '146px'],
                ["style", "top", '39px']
            ],
            "${_Attract_Leads}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '156px'],
                ["style", "font-size", '18px'],
                ["style", "top", '373px'],
                ["transform", "scaleY", '0.5'],
                ["style", "height", '44px'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "width", '106px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_Text3Copy}": [
                ["style", "top", '552px'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '315px'],
                ["style", "font-size", '10px']
            ],
            "${_Text}": [
                ["style", "top", '531px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "left", '388px'],
                ["style", "font-size", '18px']
            ],
            "${_Text3}": [
                ["style", "top", '552px'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '173px'],
                ["style", "font-size", '10px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(52,101,127,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '730px'],
                ["style", "width", '1024px']
            ],
            "${_AJG-logo}": [
                ["style", "height", '39px'],
                ["style", "top", '665px'],
                ["style", "left", '726px'],
                ["style", "width", '275px']
            ],
            "${_Nurture_Leads}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '303px'],
                ["style", "font-size", '18px'],
                ["style", "top", '373px'],
                ["transform", "scaleY", '0.5'],
                ["style", "height", '44px'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["transform", "scaleX", '0.5'],
                ["style", "width", '106px']
            ],
            "${_top_dial2Copy}": [
                ["style", "left", '339px'],
                ["style", "top", '312px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 169246,
            autoPlay: true,
            labels: {
                "stop": 0
            },
            timeline: [
                { id: "eid601", tween: [ "style", "${_top_dial2}", "left", '192px', { fromValue: '192px'}], position: 0, duration: 0 },
                { id: "eid552", tween: [ "style", "${_left_slides}", "top", '438px', { fromValue: '438px'}], position: 0, duration: 0 },
                { id: "eid563", tween: [ "style", "${_top_dial2Copy}", "top", '312px', { fromValue: '312px'}], position: 0, duration: 0 },
                { id: "eid607", tween: [ "style", "${_middle_slides}", "left", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
                { id: "eid610", tween: [ "style", "${_right_slides}", "left", '444px', { fromValue: '444px'}], position: 0, duration: 0 },
                { id: "eid561", tween: [ "style", "${_conveyor}", "top", '494px', { fromValue: '494px'}], position: 0, duration: 0 },
                { id: "eid557", tween: [ "style", "${_top_dial2Copy2}", "top", '312px', { fromValue: '312px'}], position: 0, duration: 0 },
                { id: "eid604", tween: [ "style", "${_light}", "left", '477px', { fromValue: '477px'}], position: 0, duration: 0 },
                { id: "eid636", tween: [ "style", "${_Attract_Leads}", "opacity", '1', { fromValue: '0.000000'}], position: 3250, duration: 231 },
                { id: "eid643", tween: [ "transform", "${_Attract_Leads}", "scaleY", '1', { fromValue: '0.5'}], position: 3250, duration: 572, easing: "easeOutElastic" },
                { id: "eid646", tween: [ "style", "${_Nurture_Leads}", "opacity", '1', { fromValue: '0.000000'}], position: 4940, duration: 231 },
                { id: "eid558", tween: [ "style", "${_whistle2}", "top", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "eid609", tween: [ "style", "${_conveyor}", "left", '174px', { fromValue: '174px'}], position: 0, duration: 0 },
                { id: "eid606", tween: [ "style", "${_whistle2}", "left", '334px', { fromValue: '334px'}], position: 0, duration: 0 },
                { id: "eid562", tween: [ "style", "${_right_slides}", "top", '438px', { fromValue: '438px'}], position: 0, duration: 0 },
                { id: "eid556", tween: [ "style", "${_light}", "top", '262px', { fromValue: '262px'}], position: 0, duration: 0 },
                { id: "eid647", tween: [ "transform", "${_Nurture_Leads}", "scaleY", '1', { fromValue: '0.5'}], position: 4940, duration: 572, easing: "easeOutElastic" },
                { id: "eid559", tween: [ "style", "${_middle_slides}", "top", '438px', { fromValue: '438px'}], position: 0, duration: 0 },
                { id: "eid553", tween: [ "style", "${_top_dial2}", "top", '312px', { fromValue: '312px'}], position: 0, duration: 0 },
                { id: "eid645", tween: [ "transform", "${_Nurture_Leads}", "scaleX", '1', { fromValue: '0.5'}], position: 4940, duration: 572, easing: "easeOutElastic" },
                { id: "eid652", tween: [ "style", "${_Nurture_LeadsCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 6660, duration: 231 },
                { id: "eid605", tween: [ "style", "${_top_dial2Copy2}", "left", '486px', { fromValue: '486px'}], position: 0, duration: 0 },
                { id: "eid611", tween: [ "style", "${_top_dial2Copy}", "left", '339px', { fromValue: '339px'}], position: 0, duration: 0 },
                { id: "eid600", tween: [ "style", "${_left_slides}", "left", '151px', { fromValue: '151px'}], position: 0, duration: 0 },
                { id: "eid644", tween: [ "transform", "${_Attract_Leads}", "scaleX", '1', { fromValue: '0.5'}], position: 3250, duration: 572, easing: "easeOutElastic" },
                { id: "eid1127", tween: [ "style", "${_Text}", "left", '596px', { fromValue: '388px'}], position: 6660, duration: 10275, easing: "easeOutQuad" },
                { id: "eid653", tween: [ "transform", "${_Nurture_LeadsCopy}", "scaleY", '1', { fromValue: '0.5'}], position: 6660, duration: 572, easing: "easeOutElastic" },
                { id: "eid651", tween: [ "transform", "${_Nurture_LeadsCopy}", "scaleX", '1', { fromValue: '0.5'}], position: 6660, duration: 572, easing: "easeOutElastic" },
                { id: "eid16", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_top_dial2Copy2}', [] ], ""], position: 0 },
                { id: "eid17", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_top_dial2Copy}', [] ], ""], position: 0 },
                { id: "eid14", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_top_dial2Copy}', [] ], ""], position: 331.54296875 },
                { id: "eid15", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_top_dial2Copy2}', [] ], ""], position: 647.52734375 }            ]
        }
    }
},
"top_dial": {
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
                    id: 'top_dial_gauge',
                    type: 'image',
                    rect: ['0px', '0px', '33px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/top_dial_gauge.svg', '0px', '0px']
                },
                {
                    id: 'top_dial_finger',
                    type: 'image',
                    rect: ['0px', '0px', '33px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/top_dial_finger.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '33px'],
                ["style", "width", '33px']
            ],
            "${_top_dial_finger}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_top_dial_gauge}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4009,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "transform", "${_top_dial_finger}", "rotateZ", '128deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInQuad" },
                { id: "eid6", tween: [ "transform", "${_top_dial_finger}", "rotateZ", '43deg', { fromValue: '128deg'}], position: 750, duration: 500, easing: "easeInOutQuad" },
                { id: "eid7", tween: [ "transform", "${_top_dial_finger}", "rotateZ", '174deg', { fromValue: '43deg'}], position: 1250, duration: 500, easing: "easeInBack" },
                { id: "eid8", tween: [ "transform", "${_top_dial_finger}", "rotateZ", '85deg', { fromValue: '174deg'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
                { id: "eid9", tween: [ "transform", "${_top_dial_finger}", "rotateZ", '207deg', { fromValue: '85deg'}], position: 2250, duration: 750, easing: "easeOutBack" },
                { id: "eid10", tween: [ "transform", "${_top_dial_finger}", "rotateZ", '0deg', { fromValue: '207deg'}], position: 3000, duration: 1009, easing: "easeInOutQuad" }            ]
        }
    }
},
"blue_slide": {
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
                    id: 'slider_fill',
                    type: 'image',
                    rect: ['0px', '3px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'Blue_handle',
                    type: 'image',
                    rect: ['0px', '0px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Blue_handle.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Blue_handle}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '119px']
            ],
            "${_slider_fill}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '4px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid27", tween: [ "style", "${_slider_fill}", "width", '116px', { fromValue: '4px'}], position: 0, duration: 1002, easing: "easeInOutExpo" },
                { id: "eid28", tween: [ "style", "${_slider_fill}", "width", '3px', { fromValue: '116px'}], position: 1002, duration: 1512, easing: "easeInOutExpo" },
                { id: "eid29", tween: [ "style", "${_slider_fill}", "width", '23px', { fromValue: '3px'}], position: 2514, duration: 986, easing: "easeInOutExpo" },
                { id: "eid30", tween: [ "style", "${_slider_fill}", "width", '4px', { fromValue: '23px'}], position: 3500, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid31", tween: [ "style", "${_slider_fill}", "width", '90px', { fromValue: '4px'}], position: 4500, duration: 1037, easing: "easeInOutExpo" },
                { id: "eid35", tween: [ "style", "${_slider_fill}", "width", '4px', { fromValue: '90px'}], position: 5537, duration: 1463, easing: "easeInOutExpo" },
                { id: "eid21", tween: [ "style", "${_Blue_handle}", "left", '114px', { fromValue: '0px'}], position: 0, duration: 1002, easing: "easeInOutExpo" },
                { id: "eid22", tween: [ "style", "${_Blue_handle}", "left", '0px', { fromValue: '114px'}], position: 1002, duration: 1512, easing: "easeInOutExpo" },
                { id: "eid23", tween: [ "style", "${_Blue_handle}", "left", '20px', { fromValue: '0px'}], position: 2514, duration: 986, easing: "easeInOutExpo" },
                { id: "eid24", tween: [ "style", "${_Blue_handle}", "left", '0px', { fromValue: '20px'}], position: 3500, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid33", tween: [ "style", "${_Blue_handle}", "left", '86px', { fromValue: '0px'}], position: 4500, duration: 1037, easing: "easeInOutExpo" },
                { id: "eid34", tween: [ "style", "${_Blue_handle}", "left", '0px', { fromValue: '86px'}], position: 5537, duration: 1463, easing: "easeInOutExpo" }            ]
        }
    }
},
"yellow_slide": {
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
                    id: 'slider_fill3',
                    type: 'image',
                    rect: ['0px', '3px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'yellow_handle',
                    type: 'image',
                    rect: ['0px', '0px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/yellow_handle.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yellow_handle}": [
                ["style", "left", '80px'],
                ["style", "top", '0px']
            ],
            "${_slider_fill3}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '118px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7008,
            autoPlay: true,
            timeline: [
                { id: "eid37", tween: [ "style", "${_yellow_handle}", "left", '30px', { fromValue: '80px'}], position: 0, duration: 750, easing: "easeInOutQuint" },
                { id: "eid38", tween: [ "style", "${_yellow_handle}", "left", '56px', { fromValue: '30px'}], position: 750, duration: 1276, easing: "easeInOutQuint" },
                { id: "eid39", tween: [ "style", "${_yellow_handle}", "left", '26px', { fromValue: '56px'}], position: 2026, duration: 724, easing: "easeInOutQuint" },
                { id: "eid40", tween: [ "style", "${_yellow_handle}", "left", '106px', { fromValue: '26px'}], position: 2750, duration: 1287, easing: "easeInOutQuint" },
                { id: "eid41", tween: [ "style", "${_yellow_handle}", "left", '10px', { fromValue: '106px'}], position: 4037, duration: 1213, easing: "easeInOutQuint" },
                { id: "eid42", tween: [ "style", "${_yellow_handle}", "left", '30px', { fromValue: '10px'}], position: 5250, duration: 750, easing: "easeInOutQuint" },
                { id: "eid43", tween: [ "style", "${_yellow_handle}", "left", '80px', { fromValue: '30px'}], position: 6000, duration: 1008, easing: "easeInOutQuint" },
                { id: "eid46", tween: [ "style", "${_slider_fill3}", "width", '33px', { fromValue: '83px'}], position: 0, duration: 750, easing: "easeInOutQuint" },
                { id: "eid47", tween: [ "style", "${_slider_fill3}", "width", '59px', { fromValue: '33px'}], position: 750, duration: 1276, easing: "easeInOutQuint" },
                { id: "eid48", tween: [ "style", "${_slider_fill3}", "width", '29px', { fromValue: '59px'}], position: 2026, duration: 724, easing: "easeInOutQuint" },
                { id: "eid49", tween: [ "style", "${_slider_fill3}", "width", '109px', { fromValue: '29px'}], position: 2750, duration: 1287, easing: "easeInOutQuint" },
                { id: "eid50", tween: [ "style", "${_slider_fill3}", "width", '13px', { fromValue: '109px'}], position: 4037, duration: 1213, easing: "easeInOutQuint" },
                { id: "eid51", tween: [ "style", "${_slider_fill3}", "width", '33px', { fromValue: '13px'}], position: 5250, duration: 750, easing: "easeInOutQuint" },
                { id: "eid52", tween: [ "style", "${_slider_fill3}", "width", '83px', { fromValue: '33px'}], position: 6000, duration: 1008, easing: "easeInOutQuint" }            ]
        }
    }
},
"light_slide": {
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
                    id: 'slider_fill4',
                    type: 'image',
                    rect: ['0px', '3px', '63px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'light_handle',
                    type: 'image',
                    rect: ['60px', '0px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/light_handle.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '116px']
            ],
            "${_slider_fill4}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '63px']
            ],
            "${_light_handle}": [
                ["style", "left", '60px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7005,
            autoPlay: true,
            timeline: [
                { id: "eid60", tween: [ "style", "${_slider_fill4}", "width", '3px', { fromValue: '63px'}], position: 0, duration: 1267, easing: "easeInOutCubic" },
                { id: "eid61", tween: [ "style", "${_slider_fill4}", "width", '33px', { fromValue: '3px'}], position: 1267, duration: 1738, easing: "easeInOutCubic" },
                { id: "eid62", tween: [ "style", "${_slider_fill4}", "width", '103px', { fromValue: '33px'}], position: 3005, duration: 2003, easing: "easeInOutCubic" },
                { id: "eid63", tween: [ "style", "${_slider_fill4}", "width", '113px', { fromValue: '103px'}], position: 5008, duration: 230, easing: "easeInOutCubic" },
                { id: "eid64", tween: [ "style", "${_slider_fill4}", "width", '63px', { fromValue: '113px'}], position: 5238, duration: 1767, easing: "easeInOutCubic" },
                { id: "eid54", tween: [ "style", "${_light_handle}", "left", '0px', { fromValue: '60px'}], position: 0, duration: 1267, easing: "easeInOutCubic" },
                { id: "eid55", tween: [ "style", "${_light_handle}", "left", '30px', { fromValue: '0px'}], position: 1267, duration: 1738, easing: "easeInOutCubic" },
                { id: "eid56", tween: [ "style", "${_light_handle}", "left", '100px', { fromValue: '30px'}], position: 3005, duration: 2003, easing: "easeInOutCubic" },
                { id: "eid57", tween: [ "style", "${_light_handle}", "left", '110px', { fromValue: '100px'}], position: 5008, duration: 230, easing: "easeInOutCubic" },
                { id: "eid58", tween: [ "style", "${_light_handle}", "left", '60px', { fromValue: '110px'}], position: 5238, duration: 1767, easing: "easeInOutCubic" }            ]
        }
    }
},
"dark_slide": {
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
                    id: 'slider_fill5',
                    type: 'image',
                    rect: ['0px', '3px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'dark_handle',
                    type: 'image',
                    rect: ['27px', '0px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dark_handle.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_slider_fill5}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '30px']
            ],
            "${_dark_handle}": [
                ["style", "left", '27px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '116px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid66", tween: [ "style", "${_dark_handle}", "left", '77px', { fromValue: '27px'}], position: 0, duration: 1396, easing: "easeInOutExpo" },
                { id: "eid67", tween: [ "style", "${_dark_handle}", "left", '17px', { fromValue: '77px'}], position: 1396, duration: 857, easing: "easeInOutExpo" },
                { id: "eid68", tween: [ "style", "${_dark_handle}", "left", '37px', { fromValue: '17px'}], position: 2253, duration: 497, easing: "easeInOutExpo" },
                { id: "eid69", tween: [ "style", "${_dark_handle}", "left", '67px', { fromValue: '37px'}], position: 2750, duration: 480, easing: "easeInOutExpo" },
                { id: "eid70", tween: [ "style", "${_dark_handle}", "left", '97px', { fromValue: '67px'}], position: 3230, duration: 779, easing: "easeInOutExpo" },
                { id: "eid71", tween: [ "style", "${_dark_handle}", "left", '77px', { fromValue: '97px'}], position: 4009, duration: 991, easing: "easeInOutExpo" },
                { id: "eid72", tween: [ "style", "${_dark_handle}", "left", '97px', { fromValue: '77px'}], position: 5000, duration: 812, easing: "easeInOutExpo" },
                { id: "eid73", tween: [ "style", "${_dark_handle}", "left", '27px', { fromValue: '97px'}], position: 5812, duration: 1188, easing: "easeInOutExpo" },
                { id: "eid76", tween: [ "style", "${_slider_fill5}", "width", '80px', { fromValue: '30px'}], position: 0, duration: 1396, easing: "easeInOutExpo" },
                { id: "eid77", tween: [ "style", "${_slider_fill5}", "width", '20px', { fromValue: '80px'}], position: 1396, duration: 857, easing: "easeInOutExpo" },
                { id: "eid78", tween: [ "style", "${_slider_fill5}", "width", '40px', { fromValue: '20px'}], position: 2253, duration: 497, easing: "easeInOutExpo" },
                { id: "eid79", tween: [ "style", "${_slider_fill5}", "width", '70px', { fromValue: '40px'}], position: 2750, duration: 480, easing: "easeInOutExpo" },
                { id: "eid80", tween: [ "style", "${_slider_fill5}", "width", '100px', { fromValue: '70px'}], position: 3230, duration: 779, easing: "easeInOutExpo" },
                { id: "eid81", tween: [ "style", "${_slider_fill5}", "width", '80px', { fromValue: '100px'}], position: 4009, duration: 991, easing: "easeInOutExpo" },
                { id: "eid82", tween: [ "style", "${_slider_fill5}", "width", '100px', { fromValue: '80px'}], position: 5000, duration: 812, easing: "easeInOutExpo" },
                { id: "eid83", tween: [ "style", "${_slider_fill5}", "width", '30px', { fromValue: '100px'}], position: 5812, duration: 1188, easing: "easeInOutExpo" }            ]
        }
    }
},
"middle_slides": {
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
                    id: 'slider_fill6',
                    type: 'image',
                    rect: ['0px', '3px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'Blue_handle3',
                    type: 'image',
                    rect: ['89px', '0px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Blue_handle.svg', '0px', '0px']
                },
                {
                    id: 'slider_fill6Copy',
                    type: 'image',
                    rect: ['0px', '16px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'yellow_handle2',
                    type: 'image',
                    rect: ['99px', '13px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/yellow_handle.svg', '0px', '0px']
                },
                {
                    id: 'slider_fill6Copy2',
                    type: 'image',
                    rect: ['0px', '29px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'light_handle2',
                    type: 'image',
                    rect: ['24px', '26px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/light_handle.svg', '0px', '0px']
                },
                {
                    id: 'slider_fill6Copy3',
                    type: 'image',
                    rect: ['0px', '42px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'dark_handle2',
                    type: 'image',
                    rect: ['83px', '39px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dark_handle.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dark_handle2}": [
                ["style", "left", '83px'],
                ["style", "top", '39px']
            ],
            "${_yellow_handle2}": [
                ["style", "left", '99px'],
                ["style", "top", '13px']
            ],
            "${_slider_fill6Copy}": [
                ["style", "top", '16px'],
                ["style", "left", '0px'],
                ["style", "width", '102px']
            ],
            "${_slider_fill6Copy3}": [
                ["style", "top", '42px'],
                ["style", "left", '0px'],
                ["style", "width", '86px']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '116px']
            ],
            "${_Blue_handle3}": [
                ["style", "left", '89px'],
                ["style", "top", '0px']
            ],
            "${_light_handle2}": [
                ["style", "left", '29px'],
                ["style", "top", '26px']
            ],
            "${_slider_fill6Copy2}": [
                ["style", "top", '29px'],
                ["style", "left", '0px'],
                ["style", "width", '32px']
            ],
            "${_slider_fill6}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '92px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid156", tween: [ "style", "${_slider_fill6Copy2}", "width", '27px', { fromValue: '32px'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid157", tween: [ "style", "${_slider_fill6Copy2}", "width", '57px', { fromValue: '27px'}], position: 250, duration: 500, easing: "easeInOutQuad" },
                { id: "eid158", tween: [ "style", "${_slider_fill6Copy2}", "width", '106px', { fromValue: '57px'}], position: 750, duration: 1188, easing: "easeInOutQuad" },
                { id: "eid159", tween: [ "style", "${_slider_fill6Copy2}", "width", '17px', { fromValue: '106px'}], position: 1938, duration: 1255, easing: "easeInOutQuad" },
                { id: "eid160", tween: [ "style", "${_slider_fill6Copy2}", "width", '54px', { fromValue: '17px'}], position: 3193, duration: 999, easing: "easeInOutQuad" },
                { id: "eid161", tween: [ "style", "${_slider_fill6Copy2}", "width", '72px', { fromValue: '54px'}], position: 4192, duration: 962, easing: "easeInOutQuad" },
                { id: "eid162", tween: [ "style", "${_slider_fill6Copy2}", "width", '65px', { fromValue: '72px'}], position: 5154, duration: 912, easing: "easeInOutQuad" },
                { id: "eid163", tween: [ "style", "${_slider_fill6Copy2}", "width", '32px', { fromValue: '65px'}], position: 6066, duration: 934, easing: "easeInQuad" },
                { id: "eid132", tween: [ "style", "${_slider_fill6Copy}", "width", '82px', { fromValue: '102px'}], position: 0, duration: 498, easing: "easeInOutCubic" },
                { id: "eid133", tween: [ "style", "${_slider_fill6Copy}", "width", '22px', { fromValue: '82px'}], position: 498, duration: 1002, easing: "easeInOutCubic" },
                { id: "eid134", tween: [ "style", "${_slider_fill6Copy}", "width", '62px', { fromValue: '22px'}], position: 1500, duration: 586, easing: "easeInOutCubic" },
                { id: "eid135", tween: [ "style", "${_slider_fill6Copy}", "width", '22px', { fromValue: '62px'}], position: 2086, duration: 664, easing: "easeInOutCubic" },
                { id: "eid136", tween: [ "style", "${_slider_fill6Copy}", "width", '72px', { fromValue: '22px'}], position: 2750, duration: 991, easing: "easeInOutCubic" },
                { id: "eid137", tween: [ "style", "${_slider_fill6Copy}", "width", '92px', { fromValue: '72px'}], position: 3741, duration: 626, easing: "easeInOutCubic" },
                { id: "eid138", tween: [ "style", "${_slider_fill6Copy}", "width", '72px', { fromValue: '92px'}], position: 4367, duration: 633, easing: "easeInOutCubic" },
                { id: "eid139", tween: [ "style", "${_slider_fill6Copy}", "width", '52px', { fromValue: '72px'}], position: 5000, duration: 528, easing: "easeInOutCubic" },
                { id: "eid140", tween: [ "style", "${_slider_fill6Copy}", "width", '42px', { fromValue: '52px'}], position: 5528, duration: 648, easing: "easeInOutCubic" },
                { id: "eid141", tween: [ "style", "${_slider_fill6Copy}", "width", '102px', { fromValue: '42px'}], position: 6176, duration: 824, easing: "easeInOutCubic" },
                { id: "eid184", tween: [ "style", "${_slider_fill6Copy3}", "width", '115px', { fromValue: '86px'}], position: 0, duration: 871, easing: "easeInOutQuint" },
                { id: "eid183", tween: [ "style", "${_slider_fill6Copy3}", "width", '105px', { fromValue: '115px'}], position: 871, duration: 477, easing: "easeInOutQuint" },
                { id: "eid182", tween: [ "style", "${_slider_fill6Copy3}", "width", '75px', { fromValue: '105px'}], position: 1348, duration: 949, easing: "easeInOutQuint" },
                { id: "eid181", tween: [ "style", "${_slider_fill6Copy3}", "width", '15px', { fromValue: '75px'}], position: 2297, duration: 626, easing: "easeInOutQuint" },
                { id: "eid180", tween: [ "style", "${_slider_fill6Copy3}", "width", '35px', { fromValue: '15px'}], position: 2923, duration: 515, easing: "easeInOutQuint" },
                { id: "eid179", tween: [ "style", "${_slider_fill6Copy3}", "width", '5px', { fromValue: '35px'}], position: 3438, duration: 1190, easing: "easeInOutQuint" },
                { id: "eid178", tween: [ "style", "${_slider_fill6Copy3}", "width", '75px', { fromValue: '5px'}], position: 4628, duration: 1133, easing: "easeInOutQuint" },
                { id: "eid177", tween: [ "style", "${_slider_fill6Copy3}", "width", '105px', { fromValue: '75px'}], position: 5761, duration: 631, easing: "easeInOutQuint" },
                { id: "eid176", tween: [ "style", "${_slider_fill6Copy3}", "width", '86px', { fromValue: '105px'}], position: 6392, duration: 608, easing: "easeInOutQuint" },
                { id: "eid153", tween: [ "style", "${_light_handle2}", "left", '24px', { fromValue: '29px'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_light_handle2}", "left", '54px', { fromValue: '24px'}], position: 250, duration: 500, easing: "easeInOutQuad" },
                { id: "eid145", tween: [ "style", "${_light_handle2}", "left", '103px', { fromValue: '54px'}], position: 750, duration: 1188, easing: "easeInOutQuad" },
                { id: "eid146", tween: [ "style", "${_light_handle2}", "left", '14px', { fromValue: '103px'}], position: 1938, duration: 1255, easing: "easeInOutQuad" },
                { id: "eid147", tween: [ "style", "${_light_handle2}", "left", '51px', { fromValue: '14px'}], position: 3193, duration: 995, easing: "easeInOutQuad" },
                { id: "eid148", tween: [ "style", "${_light_handle2}", "left", '69px', { fromValue: '51px'}], position: 4188, duration: 966, easing: "easeInOutQuad" },
                { id: "eid149", tween: [ "style", "${_light_handle2}", "left", '62px', { fromValue: '69px'}], position: 5154, duration: 912, easing: "easeInOutQuad" },
                { id: "eid150", tween: [ "style", "${_light_handle2}", "left", '29px', { fromValue: '62px'}], position: 6066, duration: 934, easing: "easeInQuad" },
                { id: "eid111", tween: [ "style", "${_slider_fill6}", "width", '12px', { fromValue: '92px'}], position: 0, duration: 1004, easing: "easeInOutQuint" },
                { id: "eid112", tween: [ "style", "${_slider_fill6}", "width", '41px', { fromValue: '12px'}], position: 1004, duration: 755, easing: "easeInOutQuint" },
                { id: "eid113", tween: [ "style", "${_slider_fill6}", "width", '75px', { fromValue: '41px'}], position: 1759, duration: 743, easing: "easeInOutQuint" },
                { id: "eid114", tween: [ "style", "${_slider_fill6}", "width", '3px', { fromValue: '75px'}], position: 2502, duration: 1517, easing: "easeInOutQuint" },
                { id: "eid115", tween: [ "style", "${_slider_fill6}", "width", '110px', { fromValue: '3px'}], position: 4019, duration: 1231, easing: "easeInOutQuint" },
                { id: "eid116", tween: [ "style", "${_slider_fill6}", "width", '89px', { fromValue: '110px'}], position: 5250, duration: 765, easing: "easeInOutQuint" },
                { id: "eid117", tween: [ "style", "${_slider_fill6}", "width", '79px', { fromValue: '89px'}], position: 6015, duration: 737, easing: "easeInOutQuint" },
                { id: "eid118", tween: [ "style", "${_slider_fill6}", "width", '92px', { fromValue: '79px'}], position: 6752, duration: 248, easing: "easeInOutQuint" },
                { id: "eid101", tween: [ "style", "${_Blue_handle3}", "left", '9px', { fromValue: '89px'}], position: 0, duration: 1004, easing: "easeInOutQuint" },
                { id: "eid102", tween: [ "style", "${_Blue_handle3}", "left", '38px', { fromValue: '9px'}], position: 1004, duration: 755, easing: "easeInOutQuint" },
                { id: "eid103", tween: [ "style", "${_Blue_handle3}", "left", '72px', { fromValue: '38px'}], position: 1759, duration: 743, easing: "easeInOutQuint" },
                { id: "eid104", tween: [ "style", "${_Blue_handle3}", "left", '0px', { fromValue: '72px'}], position: 2502, duration: 1517, easing: "easeInOutQuint" },
                { id: "eid105", tween: [ "style", "${_Blue_handle3}", "left", '107px', { fromValue: '0px'}], position: 4019, duration: 1231, easing: "easeInOutQuint" },
                { id: "eid106", tween: [ "style", "${_Blue_handle3}", "left", '86px', { fromValue: '107px'}], position: 5250, duration: 765, easing: "easeInOutQuint" },
                { id: "eid107", tween: [ "style", "${_Blue_handle3}", "left", '76px', { fromValue: '86px'}], position: 6015, duration: 737, easing: "easeInOutQuint" },
                { id: "eid108", tween: [ "style", "${_Blue_handle3}", "left", '89px', { fromValue: '76px'}], position: 6752, duration: 248, easing: "easeInOutQuint" },
                { id: "eid165", tween: [ "style", "${_dark_handle2}", "left", '112px', { fromValue: '83px'}], position: 0, duration: 871, easing: "easeInOutQuint" },
                { id: "eid166", tween: [ "style", "${_dark_handle2}", "left", '102px', { fromValue: '112px'}], position: 871, duration: 477, easing: "easeInOutQuint" },
                { id: "eid167", tween: [ "style", "${_dark_handle2}", "left", '72px', { fromValue: '102px'}], position: 1348, duration: 949, easing: "easeInOutQuint" },
                { id: "eid168", tween: [ "style", "${_dark_handle2}", "left", '12px', { fromValue: '72px'}], position: 2297, duration: 626, easing: "easeInOutQuint" },
                { id: "eid169", tween: [ "style", "${_dark_handle2}", "left", '32px', { fromValue: '12px'}], position: 2923, duration: 515, easing: "easeInOutQuint" },
                { id: "eid170", tween: [ "style", "${_dark_handle2}", "left", '2px', { fromValue: '32px'}], position: 3438, duration: 1190, easing: "easeInOutQuint" },
                { id: "eid171", tween: [ "style", "${_dark_handle2}", "left", '72px', { fromValue: '2px'}], position: 4628, duration: 1133, easing: "easeInOutQuint" },
                { id: "eid172", tween: [ "style", "${_dark_handle2}", "left", '102px', { fromValue: '72px'}], position: 5761, duration: 631, easing: "easeInOutQuint" },
                { id: "eid173", tween: [ "style", "${_dark_handle2}", "left", '83px', { fromValue: '102px'}], position: 6392, duration: 608, easing: "easeInOutQuint" },
                { id: "eid120", tween: [ "style", "${_yellow_handle2}", "left", '79px', { fromValue: '99px'}], position: 0, duration: 498, easing: "easeInOutCubic" },
                { id: "eid121", tween: [ "style", "${_yellow_handle2}", "left", '19px', { fromValue: '79px'}], position: 498, duration: 1002, easing: "easeInOutCubic" },
                { id: "eid122", tween: [ "style", "${_yellow_handle2}", "left", '59px', { fromValue: '19px'}], position: 1500, duration: 586, easing: "easeInOutCubic" },
                { id: "eid123", tween: [ "style", "${_yellow_handle2}", "left", '19px', { fromValue: '59px'}], position: 2086, duration: 664, easing: "easeInOutCubic" },
                { id: "eid124", tween: [ "style", "${_yellow_handle2}", "left", '69px', { fromValue: '19px'}], position: 2750, duration: 991, easing: "easeInOutCubic" },
                { id: "eid125", tween: [ "style", "${_yellow_handle2}", "left", '89px', { fromValue: '69px'}], position: 3741, duration: 626, easing: "easeInOutCubic" },
                { id: "eid126", tween: [ "style", "${_yellow_handle2}", "left", '69px', { fromValue: '89px'}], position: 4367, duration: 633, easing: "easeInOutCubic" },
                { id: "eid127", tween: [ "style", "${_yellow_handle2}", "left", '49px', { fromValue: '69px'}], position: 5000, duration: 528, easing: "easeInOutCubic" },
                { id: "eid128", tween: [ "style", "${_yellow_handle2}", "left", '39px', { fromValue: '49px'}], position: 5528, duration: 648, easing: "easeInOutCubic" },
                { id: "eid129", tween: [ "style", "${_yellow_handle2}", "left", '99px', { fromValue: '39px'}], position: 6176, duration: 824, easing: "easeInOutCubic" }            ]
        }
    }
},
"right_slides": {
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
                    id: 'slider_fill7Copy3',
                    type: 'image',
                    rect: ['0px', '42px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'dark_handle3',
                    type: 'image',
                    rect: ['105px', '39px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dark_handle.svg', '0px', '0px']
                },
                {
                    id: 'slider_fill7Copy2',
                    type: 'image',
                    rect: ['0px', '29px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'light_handle3',
                    type: 'image',
                    rect: ['94px', '26px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/light_handle.svg', '0px', '0px']
                },
                {
                    id: 'slider_fill7Copy',
                    type: 'image',
                    rect: ['0px', '16px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'yellow_handle3',
                    type: 'image',
                    rect: ['12px', '13px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/yellow_handle.svg', '0px', '0px']
                },
                {
                    id: 'slider_fill7',
                    type: 'image',
                    rect: ['0px', '3px', '116px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/slider_fill.svg', '0px', '0px']
                },
                {
                    id: 'Blue_handle4',
                    type: 'image',
                    rect: ['52px', '0px', '6px', '9px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Blue_handle.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_slider_fill7Copy}": [
                ["style", "top", '16px'],
                ["style", "left", '0px'],
                ["style", "width", '15px']
            ],
            "${_yellow_handle3}": [
                ["style", "left", '12px'],
                ["style", "top", '13px']
            ],
            "${_slider_fill7Copy3}": [
                ["style", "top", '42px'],
                ["style", "left", '0px'],
                ["style", "width", '108px']
            ],
            "${_dark_handle3}": [
                ["style", "left", '105px'],
                ["style", "top", '39px']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '116px']
            ],
            "${_slider_fill7Copy2}": [
                ["style", "top", '29px'],
                ["style", "left", '0px'],
                ["style", "width", '108px']
            ],
            "${_Blue_handle4}": [
                ["style", "left", '62px'],
                ["style", "top", '0px']
            ],
            "${_light_handle3}": [
                ["style", "left", '104px'],
                ["style", "top", '26px']
            ],
            "${_slider_fill7}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7006,
            autoPlay: true,
            timeline: [
                { id: "eid247", tween: [ "style", "${_dark_handle3}", "left", '5px', { fromValue: '105px'}], position: 0, duration: 1200, easing: "easeInOutExpo" },
                { id: "eid248", tween: [ "style", "${_dark_handle3}", "left", '45px', { fromValue: '5px'}], position: 1200, duration: 975, easing: "easeInOutExpo" },
                { id: "eid249", tween: [ "style", "${_dark_handle3}", "left", '25px', { fromValue: '45px'}], position: 2175, duration: 825, easing: "easeInOutExpo" },
                { id: "eid250", tween: [ "style", "${_dark_handle3}", "left", '55px', { fromValue: '25px'}], position: 3000, duration: 663, easing: "easeInOutExpo" },
                { id: "eid251", tween: [ "style", "${_dark_handle3}", "left", '105px', { fromValue: '55px'}], position: 3663, duration: 1587, easing: "easeInOutExpo" },
                { id: "eid252", tween: [ "style", "${_dark_handle3}", "left", '75px', { fromValue: '105px'}], position: 5250, duration: 750, easing: "easeInOutExpo" },
                { id: "eid253", tween: [ "style", "${_dark_handle3}", "left", '105px', { fromValue: '75px'}], position: 6000, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid238", tween: [ "style", "${_slider_fill7Copy2}", "width", '97px', { fromValue: '108px'}], position: 0, duration: 637, easing: "easeOutQuad" },
                { id: "eid239", tween: [ "style", "${_slider_fill7Copy2}", "width", '27px', { fromValue: '97px'}], position: 637, duration: 1214, easing: "easeInOutQuad" },
                { id: "eid240", tween: [ "style", "${_slider_fill7Copy2}", "width", '47px', { fromValue: '27px'}], position: 1851, duration: 747, easing: "easeInOutQuad" },
                { id: "eid241", tween: [ "style", "${_slider_fill7Copy2}", "width", '7px', { fromValue: '47px'}], position: 2598, duration: 816, easing: "easeInOutQuad" },
                { id: "eid242", tween: [ "style", "${_slider_fill7Copy2}", "width", '17px', { fromValue: '7px'}], position: 3414, duration: 473, easing: "easeInOutQuad" },
                { id: "eid243", tween: [ "style", "${_slider_fill7Copy2}", "width", '67px', { fromValue: '17px'}], position: 3887, duration: 613, easing: "easeInOutQuad" },
                { id: "eid244", tween: [ "style", "${_slider_fill7Copy2}", "width", '116px', { fromValue: '67px'}], position: 4500, duration: 1603, easing: "easeInOutQuad" },
                { id: "eid245", tween: [ "style", "${_slider_fill7Copy2}", "width", '108px', { fromValue: '116px'}], position: 6103, duration: 897, easing: "easeInQuad" },
                { id: "eid198", tween: [ "style", "${_slider_fill7}", "width", '55px', { fromValue: '65px'}], position: 0, duration: 357, easing: "easeOutExpo" },
                { id: "eid199", tween: [ "style", "${_slider_fill7}", "width", '75px', { fromValue: '55px'}], position: 357, duration: 607, easing: "easeInOutExpo" },
                { id: "eid200", tween: [ "style", "${_slider_fill7}", "width", '5px', { fromValue: '75px'}], position: 964, duration: 1037, easing: "easeInOutExpo" },
                { id: "eid201", tween: [ "style", "${_slider_fill7}", "width", '25px', { fromValue: '5px'}], position: 2001, duration: 753, easing: "easeInOutExpo" },
                { id: "eid202", tween: [ "style", "${_slider_fill7}", "width", '75px', { fromValue: '25px'}], position: 2754, duration: 1255, easing: "easeInOutExpo" },
                { id: "eid203", tween: [ "style", "${_slider_fill7}", "width", '55px', { fromValue: '75px'}], position: 4009, duration: 637, easing: "easeInOutExpo" },
                { id: "eid204", tween: [ "style", "${_slider_fill7}", "width", '105px', { fromValue: '55px'}], position: 4646, duration: 981, easing: "easeInOutExpo" },
                { id: "eid205", tween: [ "style", "${_slider_fill7}", "width", '75px', { fromValue: '105px'}], position: 5627, duration: 754, easing: "easeInOutExpo" },
                { id: "eid206", tween: [ "style", "${_slider_fill7}", "width", '65px', { fromValue: '75px'}], position: 6381, duration: 625, easing: "easeInExpo" },
                { id: "eid235", tween: [ "style", "${_light_handle3}", "left", '94px', { fromValue: '104px'}], position: 0, duration: 637, easing: "easeOutQuad" },
                { id: "eid228", tween: [ "style", "${_light_handle3}", "left", '24px', { fromValue: '94px'}], position: 637, duration: 1214, easing: "easeInOutQuad" },
                { id: "eid229", tween: [ "style", "${_light_handle3}", "left", '44px', { fromValue: '24px'}], position: 1851, duration: 747, easing: "easeInOutQuad" },
                { id: "eid230", tween: [ "style", "${_light_handle3}", "left", '4px', { fromValue: '44px'}], position: 2598, duration: 816, easing: "easeInOutQuad" },
                { id: "eid231", tween: [ "style", "${_light_handle3}", "left", '14px', { fromValue: '4px'}], position: 3414, duration: 473, easing: "easeInOutQuad" },
                { id: "eid232", tween: [ "style", "${_light_handle3}", "left", '64px', { fromValue: '14px'}], position: 3887, duration: 613, easing: "easeInOutQuad" },
                { id: "eid233", tween: [ "style", "${_light_handle3}", "left", '114px', { fromValue: '64px'}], position: 4500, duration: 1603, easing: "easeInOutQuad" },
                { id: "eid234", tween: [ "style", "${_light_handle3}", "left", '104px', { fromValue: '114px'}], position: 6103, duration: 897, easing: "easeInQuad" },
                { id: "eid256", tween: [ "style", "${_slider_fill7Copy3}", "width", '8px', { fromValue: '108px'}], position: 0, duration: 1200, easing: "easeInOutExpo" },
                { id: "eid257", tween: [ "style", "${_slider_fill7Copy3}", "width", '48px', { fromValue: '8px'}], position: 1200, duration: 975, easing: "easeInOutExpo" },
                { id: "eid258", tween: [ "style", "${_slider_fill7Copy3}", "width", '28px', { fromValue: '48px'}], position: 2175, duration: 825, easing: "easeInOutExpo" },
                { id: "eid259", tween: [ "style", "${_slider_fill7Copy3}", "width", '58px', { fromValue: '28px'}], position: 3000, duration: 663, easing: "easeInOutExpo" },
                { id: "eid260", tween: [ "style", "${_slider_fill7Copy3}", "width", '108px', { fromValue: '58px'}], position: 3663, duration: 1587, easing: "easeInOutExpo" },
                { id: "eid261", tween: [ "style", "${_slider_fill7Copy3}", "width", '78px', { fromValue: '108px'}], position: 5250, duration: 750, easing: "easeInOutExpo" },
                { id: "eid262", tween: [ "style", "${_slider_fill7Copy3}", "width", '108px', { fromValue: '78px'}], position: 6000, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid195", tween: [ "style", "${_Blue_handle4}", "left", '52px', { fromValue: '62px'}], position: 0, duration: 357, easing: "easeOutExpo" },
                { id: "eid187", tween: [ "style", "${_Blue_handle4}", "left", '72px', { fromValue: '52px'}], position: 357, duration: 607, easing: "easeInOutExpo" },
                { id: "eid188", tween: [ "style", "${_Blue_handle4}", "left", '2px', { fromValue: '72px'}], position: 964, duration: 1037, easing: "easeInOutExpo" },
                { id: "eid189", tween: [ "style", "${_Blue_handle4}", "left", '22px', { fromValue: '2px'}], position: 2001, duration: 753, easing: "easeInOutExpo" },
                { id: "eid190", tween: [ "style", "${_Blue_handle4}", "left", '72px', { fromValue: '22px'}], position: 2754, duration: 1255, easing: "easeInOutExpo" },
                { id: "eid191", tween: [ "style", "${_Blue_handle4}", "left", '52px', { fromValue: '72px'}], position: 4009, duration: 637, easing: "easeInOutExpo" },
                { id: "eid192", tween: [ "style", "${_Blue_handle4}", "left", '102px', { fromValue: '52px'}], position: 4646, duration: 981, easing: "easeInOutExpo" },
                { id: "eid193", tween: [ "style", "${_Blue_handle4}", "left", '72px', { fromValue: '102px'}], position: 5627, duration: 754, easing: "easeInOutExpo" },
                { id: "eid194", tween: [ "style", "${_Blue_handle4}", "left", '62px', { fromValue: '72px'}], position: 6381, duration: 625, easing: "easeInExpo" },
                { id: "eid218", tween: [ "style", "${_slider_fill7Copy}", "width", '45px', { fromValue: '15px'}], position: 0, duration: 805, easing: "easeInOutQuad" },
                { id: "eid219", tween: [ "style", "${_slider_fill7Copy}", "width", '75px', { fromValue: '45px'}], position: 805, duration: 799, easing: "easeInOutQuad" },
                { id: "eid220", tween: [ "style", "${_slider_fill7Copy}", "width", '55px', { fromValue: '75px'}], position: 1604, duration: 759, easing: "easeInOutQuad" },
                { id: "eid221", tween: [ "style", "${_slider_fill7Copy}", "width", '94px', { fromValue: '55px'}], position: 2363, duration: 800, easing: "easeInOutQuad" },
                { id: "eid222", tween: [ "style", "${_slider_fill7Copy}", "width", '35px', { fromValue: '94px'}], position: 3163, duration: 1192, easing: "easeInOutQuad" },
                { id: "eid223", tween: [ "style", "${_slider_fill7Copy}", "width", '15px', { fromValue: '35px'}], position: 4355, duration: 548, easing: "easeInOutQuad" },
                { id: "eid224", tween: [ "style", "${_slider_fill7Copy}", "width", '55px', { fromValue: '15px'}], position: 4903, duration: 969, easing: "easeInOutQuad" },
                { id: "eid225", tween: [ "style", "${_slider_fill7Copy}", "width", '15px', { fromValue: '55px'}], position: 5872, duration: 1128, easing: "easeInOutQuad" },
                { id: "eid208", tween: [ "style", "${_yellow_handle3}", "left", '42px', { fromValue: '12px'}], position: 0, duration: 805, easing: "easeInOutQuad" },
                { id: "eid209", tween: [ "style", "${_yellow_handle3}", "left", '72px', { fromValue: '42px'}], position: 805, duration: 799, easing: "easeInOutQuad" },
                { id: "eid210", tween: [ "style", "${_yellow_handle3}", "left", '52px', { fromValue: '72px'}], position: 1604, duration: 759, easing: "easeInOutQuad" },
                { id: "eid211", tween: [ "style", "${_yellow_handle3}", "left", '92px', { fromValue: '52px'}], position: 2363, duration: 800, easing: "easeInOutQuad" },
                { id: "eid212", tween: [ "style", "${_yellow_handle3}", "left", '32px', { fromValue: '92px'}], position: 3163, duration: 1192, easing: "easeInOutQuad" },
                { id: "eid213", tween: [ "style", "${_yellow_handle3}", "left", '12px', { fromValue: '32px'}], position: 4355, duration: 548, easing: "easeInOutQuad" },
                { id: "eid214", tween: [ "style", "${_yellow_handle3}", "left", '52px', { fromValue: '12px'}], position: 4903, duration: 969, easing: "easeInOutQuad" },
                { id: "eid215", tween: [ "style", "${_yellow_handle3}", "left", '12px', { fromValue: '52px'}], position: 5872, duration: 1128, easing: "easeInOutQuad" }            ]
        }
    }
},
"left_slides": {
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
                    id: 'blue_slide',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'yellow_slide',
                    type: 'rect',
                    rect: ['0px', '13px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'light_slide',
                    type: 'rect',
                    rect: ['0px', '26px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'dark_slide',
                    type: 'rect',
                    rect: ['0px', '39px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'dark_slide',
                symbolName: 'dark_slide'
            },
            {
                id: 'light_slide',
                symbolName: 'light_slide'
            },
            {
                id: 'yellow_slide',
                symbolName: 'yellow_slide'
            },
            {
                id: 'blue_slide',
                symbolName: 'blue_slide'
            }            ]
        },
    states: {
        "Base State": {
            "${_blue_slide}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_light_slide}": [
                ["style", "left", '0px'],
                ["style", "top", '26px']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '119px']
            ],
            "${_dark_slide}": [
                ["style", "left", '0px'],
                ["style", "top", '39px']
            ],
            "${_yellow_slide}": [
                ["style", "left", '0px'],
                ["style", "top", '13px']
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
"conveyor": {
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
                    id: 'conveyor',
                    type: 'image',
                    rect: ['0px', '4px', '722px', '21px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/conveyor.svg', '0px', '0px']
                },
                {
                    id: 'belt_line',
                    type: 'rect',
                    rect: ['312', '3', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'belt_lineCopy2',
                    type: 'rect',
                    rect: ['312', '3', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cog',
                    type: 'image',
                    rect: ['696px', '0px', '30px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cog.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'belt_line',
                symbolName: 'belt_line',
                autoPlay: {

               }
            },
            {
                id: 'belt_lineCopy2',
                symbolName: 'belt_line',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_belt_lineCopy2}": [
                ["style", "top", '25px'],
                ["style", "left", '400px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_conveyor}": [
                ["style", "left", '0px'],
                ["style", "top", '4px']
            ],
            "${_cog}": [
                ["style", "top", '0px'],
                ["style", "left", '696px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '30px'],
                ["style", "width", '726px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid430", tween: [ "transform", "${_belt_lineCopy2}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 1837, duration: 0 },
                { id: "eid264", tween: [ "transform", "${_cog}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 5000 },
                { id: "eid435", tween: [ "style", "${_belt_lineCopy2}", "left", '406px', { fromValue: '400px'}], position: 0, duration: 1837 },
                { id: "eid431", tween: [ "style", "${_belt_lineCopy2}", "top", '25px', { fromValue: '25px'}], position: 1837, duration: 0 }            ]
        }
    }
},
"belt_line": {
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
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy48',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy47',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy46',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy45',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy44',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy43',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy42',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy41',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy2',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy3',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy4',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy5',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy6',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy7',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy8',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy9',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy10',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy11',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy12',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy13',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy14',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy15',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy16',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy17',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy18',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy19',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy20',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy30',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy29',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy28',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy27',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy26',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy25',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy24',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy23',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    id: 'belt2Copy22',
                    type: 'image',
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy21',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy40',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy39',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy38',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy37',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy36',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy35',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy34',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy33',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy32',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                },
                {
                    rect: ['340px', '0px', '5px', '1px', 'auto', 'auto'],
                    id: 'belt2Copy31',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/belt.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_belt2Copy11}": [
                ["style", "top", '0px'],
                ["style", "left", '232px']
            ],
            "${_belt2Copy19}": [
                ["style", "top", '0px'],
                ["style", "left", '168px']
            ],
            "${_belt2Copy41}": [
                ["style", "top", '0px'],
                ["style", "left", '328px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy44}": [
                ["style", "top", '0px'],
                ["style", "left", '352px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy16}": [
                ["style", "top", '0px'],
                ["style", "left", '192px']
            ],
            "${_belt2Copy9}": [
                ["style", "top", '0px'],
                ["style", "left", '248px']
            ],
            "${_belt2Copy29}": [
                ["style", "top", '0px'],
                ["style", "left", '144px']
            ],
            "${_belt2Copy30}": [
                ["style", "top", '0px'],
                ["style", "left", '152px']
            ],
            "${_belt2Copy15}": [
                ["style", "top", '0px'],
                ["style", "left", '200px']
            ],
            "${_belt2Copy13}": [
                ["style", "top", '0px'],
                ["style", "left", '216px']
            ],
            "${_belt2Copy28}": [
                ["style", "top", '0px'],
                ["style", "left", '136px']
            ],
            "${_belt2Copy47}": [
                ["style", "top", '0px'],
                ["style", "left", '376px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '296px']
            ],
            "${_belt2Copy24}": [
                ["style", "top", '0px'],
                ["style", "left", '104px']
            ],
            "${_belt2Copy18}": [
                ["style", "top", '0px'],
                ["style", "left", '176px']
            ],
            "${_belt2Copy48}": [
                ["style", "top", '0px'],
                ["style", "left", '384px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '320px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy46}": [
                ["style", "top", '0px'],
                ["style", "left", '368px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy42}": [
                ["style", "top", '0px'],
                ["style", "left", '336px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy40}": [
                ["style", "top", '0px'],
                ["style", "left", '72px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy20}": [
                ["style", "top", '0px'],
                ["style", "left", '160px']
            ],
            "${_belt2}": [
                ["style", "top", '0px'],
                ["style", "left", '312px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy10}": [
                ["style", "top", '0px'],
                ["style", "left", '240px']
            ],
            "${_belt2Copy27}": [
                ["style", "top", '0px'],
                ["style", "left", '128px']
            ],
            "${_belt2Copy14}": [
                ["style", "top", '0px'],
                ["style", "left", '208px']
            ],
            "${_belt2Copy36}": [
                ["style", "top", '0px'],
                ["style", "left", '40px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy34}": [
                ["style", "top", '0px'],
                ["style", "left", '24px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy32}": [
                ["style", "top", '0px'],
                ["style", "left", '8px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy35}": [
                ["style", "top", '0px'],
                ["style", "left", '32px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '1px'],
                ["style", "width", '389px']
            ],
            "${_belt2Copy17}": [
                ["style", "top", '0px'],
                ["style", "left", '184px']
            ],
            "${_belt2Copy33}": [
                ["style", "top", '0px'],
                ["style", "left", '16px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy45}": [
                ["style", "top", '0px'],
                ["style", "left", '360px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy37}": [
                ["style", "top", '0px'],
                ["style", "left", '48px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy38}": [
                ["style", "top", '0px'],
                ["style", "left", '56px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy43}": [
                ["style", "top", '0px'],
                ["style", "left", '344px'],
                ["style", "display", 'block']
            ],
            "${_belt2Copy39}": [
                ["style", "top", '0px'],
                ["style", "left", '64px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy21}": [
                ["style", "display", 'none'],
                ["style", "left", '80px'],
                ["style", "top", '0px']
            ],
            "${_belt2Copy22}": [
                ["style", "top", '0px'],
                ["style", "left", '88px']
            ],
            "${_belt2Copy23}": [
                ["style", "top", '0px'],
                ["style", "left", '96px']
            ],
            "${_belt2Copy7}": [
                ["style", "top", '0px'],
                ["style", "left", '264px']
            ],
            "${_belt2Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '304px']
            ],
            "${_belt2Copy25}": [
                ["style", "top", '0px'],
                ["style", "left", '112px']
            ],
            "${_belt2Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '288px']
            ],
            "${_belt2Copy8}": [
                ["style", "top", '0px'],
                ["style", "left", '256px']
            ],
            "${_belt2Copy26}": [
                ["style", "top", '0px'],
                ["style", "left", '120px']
            ],
            "${_belt2Copy6}": [
                ["style", "top", '0px'],
                ["style", "left", '272px']
            ],
            "${_belt2Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '280px']
            ],
            "${_belt2Copy31}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_belt2Copy12}": [
                ["style", "top", '0px'],
                ["style", "left", '224px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid380", tween: [ "style", "${_belt2}", "display", 'block', { fromValue: 'block'}], position: 4657, duration: 0 },
                { id: "eid381", tween: [ "style", "${_belt2}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
                { id: "eid348", tween: [ "style", "${_belt2Copy33}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid303", tween: [ "style", "${_belt2Copy35}", "left", '120px', { fromValue: '32px'}], position: 0, duration: 5000 },
                { id: "eid283", tween: [ "style", "${_belt2Copy15}", "left", '288px', { fromValue: '200px'}], position: 0, duration: 5000 },
                { id: "eid410", tween: [ "style", "${_belt2Copy38}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid417", tween: [ "style", "${_belt2Copy38}", "display", 'block', { fromValue: 'none'}], position: 1622, duration: 0 },
                { id: "eid308", tween: [ "style", "${_belt2Copy40}", "left", '160px', { fromValue: '72px'}], position: 0, duration: 5000 },
                { id: "eid343", tween: [ "style", "${_belt2Copy29}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid403", tween: [ "style", "${_belt2Copy31}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid424", tween: [ "style", "${_belt2Copy31}", "display", 'block', { fromValue: 'none'}], position: 4795, duration: 0 },
                { id: "eid358", tween: [ "style", "${_belt2Copy46}", "left", '456px', { fromValue: '368px'}], position: 0, duration: 5000 },
                { id: "eid295", tween: [ "style", "${_belt2Copy27}", "left", '216px', { fromValue: '128px'}], position: 0, duration: 5000 },
                { id: "eid282", tween: [ "style", "${_belt2Copy14}", "left", '296px', { fromValue: '208px'}], position: 0, duration: 5000 },
                { id: "eid280", tween: [ "style", "${_belt2Copy12}", "left", '312px', { fromValue: '224px'}], position: 0, duration: 5000 },
                { id: "eid344", tween: [ "style", "${_belt2Copy28}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid360", tween: [ "style", "${_belt2Copy48}", "left", '472px', { fromValue: '384px'}], position: 0, duration: 5000 },
                { id: "eid341", tween: [ "style", "${_belt2Copy22}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid368", tween: [ "style", "${_belt2Copy45}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid369", tween: [ "style", "${_belt2Copy45}", "display", 'none', { fromValue: 'block'}], position: 2126, duration: 0 },
                { id: "eid289", tween: [ "style", "${_belt2Copy21}", "left", '168px', { fromValue: '80px'}], position: 0, duration: 5000 },
                { id: "eid413", tween: [ "style", "${_belt2Copy21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid414", tween: [ "style", "${_belt2Copy21}", "display", 'block', { fromValue: 'none'}], position: 185, duration: 0 },
                { id: "eid307", tween: [ "style", "${_belt2Copy39}", "left", '152px', { fromValue: '64px'}], position: 0, duration: 5000 },
                { id: "eid406", tween: [ "style", "${_belt2Copy34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid421", tween: [ "style", "${_belt2Copy34}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid353", tween: [ "style", "${_belt2Copy41}", "left", '416px', { fromValue: '328px'}], position: 0, duration: 5000 },
                { id: "eid281", tween: [ "style", "${_belt2Copy13}", "left", '304px', { fromValue: '216px'}], position: 0, duration: 5000 },
                { id: "eid276", tween: [ "style", "${_belt2Copy8}", "left", '344px', { fromValue: '256px'}], position: 0, duration: 5000 },
                { id: "eid334", tween: [ "style", "${_belt2Copy25}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid407", tween: [ "style", "${_belt2Copy35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid420", tween: [ "style", "${_belt2Copy35}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid342", tween: [ "style", "${_belt2Copy30}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid340", tween: [ "style", "${_belt2Copy40}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid296", tween: [ "style", "${_belt2Copy28}", "left", '224px', { fromValue: '136px'}], position: 0, duration: 5000 },
                { id: "eid347", tween: [ "style", "${_belt2Copy31}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid404", tween: [ "style", "${_belt2Copy32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid423", tween: [ "style", "${_belt2Copy32}", "display", 'block', { fromValue: 'none'}], position: 4366, duration: 0 },
                { id: "eid411", tween: [ "style", "${_belt2Copy39}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid416", tween: [ "style", "${_belt2Copy39}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0 },
                { id: "eid269", tween: [ "style", "${_belt2Copy}", "left", '408px', { fromValue: '320px'}], position: 0, duration: 5000 },
                { id: "eid346", tween: [ "style", "${_belt2Copy38}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid338", tween: [ "style", "${_belt2Copy37}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid305", tween: [ "style", "${_belt2Copy37}", "left", '136px', { fromValue: '48px'}], position: 0, duration: 5000 },
                { id: "eid335", tween: [ "style", "${_belt2Copy21}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid336", tween: [ "style", "${_belt2Copy34}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid361", tween: [ "style", "${_belt2Copy48}", "display", 'block', { fromValue: 'block'}], position: 667, duration: 0 },
                { id: "eid362", tween: [ "style", "${_belt2Copy48}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid351", tween: [ "style", "${_belt2Copy32}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid286", tween: [ "style", "${_belt2Copy18}", "left", '264px', { fromValue: '176px'}], position: 0, duration: 5000 },
                { id: "eid272", tween: [ "style", "${_belt2Copy4}", "left", '376px', { fromValue: '288px'}], position: 0, duration: 5000 },
                { id: "eid285", tween: [ "style", "${_belt2Copy17}", "left", '272px', { fromValue: '184px'}], position: 0, duration: 5000 },
                { id: "eid293", tween: [ "style", "${_belt2Copy25}", "left", '200px', { fromValue: '112px'}], position: 0, duration: 5000 },
                { id: "eid279", tween: [ "style", "${_belt2Copy11}", "left", '320px', { fromValue: '232px'}], position: 0, duration: 5000 },
                { id: "eid306", tween: [ "style", "${_belt2Copy38}", "left", '144px', { fromValue: '56px'}], position: 0, duration: 5000 },
                { id: "eid277", tween: [ "style", "${_belt2Copy9}", "left", '336px', { fromValue: '248px'}], position: 0, duration: 5000 },
                { id: "eid349", tween: [ "style", "${_belt2Copy23}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid287", tween: [ "style", "${_belt2Copy19}", "left", '256px', { fromValue: '168px'}], position: 0, duration: 5000 },
                { id: "eid405", tween: [ "style", "${_belt2Copy33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid422", tween: [ "style", "${_belt2Copy33}", "display", 'block', { fromValue: 'none'}], position: 3911, duration: 0 },
                { id: "eid302", tween: [ "style", "${_belt2Copy34}", "left", '112px', { fromValue: '24px'}], position: 0, duration: 5000 },
                { id: "eid284", tween: [ "style", "${_belt2Copy16}", "left", '280px', { fromValue: '192px'}], position: 0, duration: 5000 },
                { id: "eid304", tween: [ "style", "${_belt2Copy36}", "left", '128px', { fromValue: '40px'}], position: 0, duration: 5000 },
                { id: "eid370", tween: [ "style", "${_belt2Copy44}", "display", 'block', { fromValue: 'block'}], position: 2428, duration: 0 },
                { id: "eid371", tween: [ "style", "${_belt2Copy44}", "display", 'none', { fromValue: 'block'}], position: 2536, duration: 0 },
                { id: "eid274", tween: [ "style", "${_belt2Copy6}", "left", '360px', { fromValue: '272px'}], position: 0, duration: 5000 },
                { id: "eid300", tween: [ "style", "${_belt2Copy32}", "left", '96px', { fromValue: '8px'}], position: 0, duration: 5000 },
                { id: "eid288", tween: [ "style", "${_belt2Copy20}", "left", '248px', { fromValue: '160px'}], position: 0, duration: 5000 },
                { id: "eid299", tween: [ "style", "${_belt2Copy31}", "left", '88px', { fromValue: '0px'}], position: 0, duration: 5000 },
                { id: "eid271", tween: [ "style", "${_belt2Copy3}", "left", '384px', { fromValue: '296px'}], position: 0, duration: 5000 },
                { id: "eid345", tween: [ "style", "${_belt2Copy26}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid339", tween: [ "style", "${_belt2Copy24}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid298", tween: [ "style", "${_belt2Copy30}", "left", '240px', { fromValue: '152px'}], position: 0, duration: 5000 },
                { id: "eid408", tween: [ "style", "${_belt2Copy36}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid419", tween: [ "style", "${_belt2Copy36}", "display", 'block', { fromValue: 'none'}], position: 2536, duration: 0 },
                { id: "eid376", tween: [ "style", "${_belt2Copy41}", "display", 'block', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid377", tween: [ "style", "${_belt2Copy41}", "display", 'none', { fromValue: 'block'}], position: 3861, duration: 0 },
                { id: "eid412", tween: [ "style", "${_belt2Copy40}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid415", tween: [ "style", "${_belt2Copy40}", "display", 'block', { fromValue: 'none'}], position: 620, duration: 0 },
                { id: "eid374", tween: [ "style", "${_belt2Copy42}", "display", 'block', { fromValue: 'block'}], position: 3319, duration: 0 },
                { id: "eid375", tween: [ "style", "${_belt2Copy42}", "display", 'none', { fromValue: 'block'}], position: 3434, duration: 0 },
                { id: "eid333", tween: [ "style", "${_belt2Copy36}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid378", tween: [ "style", "${_belt2Copy}", "display", 'block', { fromValue: 'block'}], position: 4199, duration: 0 },
                { id: "eid379", tween: [ "style", "${_belt2Copy}", "display", 'none', { fromValue: 'block'}], position: 4329, duration: 0 },
                { id: "eid355", tween: [ "style", "${_belt2Copy43}", "left", '432px', { fromValue: '344px'}], position: 0, duration: 5000 },
                { id: "eid354", tween: [ "style", "${_belt2Copy42}", "left", '424px', { fromValue: '336px'}], position: 0, duration: 5000 },
                { id: "eid409", tween: [ "style", "${_belt2Copy37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid418", tween: [ "style", "${_belt2Copy37}", "display", 'block', { fromValue: 'none'}], position: 2126, duration: 0 },
                { id: "eid290", tween: [ "style", "${_belt2Copy22}", "left", '176px', { fromValue: '88px'}], position: 0, duration: 5000 },
                { id: "eid350", tween: [ "style", "${_belt2Copy20}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid291", tween: [ "style", "${_belt2Copy23}", "left", '184px', { fromValue: '96px'}], position: 0, duration: 5000 },
                { id: "eid270", tween: [ "style", "${_belt2Copy2}", "left", '392px', { fromValue: '304px'}], position: 0, duration: 5000 },
                { id: "eid331", tween: [ "style", "${_belt2Copy27}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid363", tween: [ "style", "${_belt2Copy47}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid364", tween: [ "style", "${_belt2Copy47}", "display", 'none', { fromValue: 'block'}], position: 1087, duration: 0 },
                { id: "eid365", tween: [ "style", "${_belt2Copy46}", "display", 'block', { fromValue: 'block'}], position: 1566, duration: 0 },
                { id: "eid366", tween: [ "style", "${_belt2Copy46}", "display", 'none', { fromValue: 'block'}], position: 1668, duration: 0 },
                { id: "eid292", tween: [ "style", "${_belt2Copy24}", "left", '192px', { fromValue: '104px'}], position: 0, duration: 5000 },
                { id: "eid357", tween: [ "style", "${_belt2Copy45}", "left", '448px', { fromValue: '360px'}], position: 0, duration: 5000 },
                { id: "eid297", tween: [ "style", "${_belt2Copy29}", "left", '232px', { fromValue: '144px'}], position: 0, duration: 5000 },
                { id: "eid332", tween: [ "style", "${_belt2Copy35}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid294", tween: [ "style", "${_belt2Copy26}", "left", '208px', { fromValue: '120px'}], position: 0, duration: 5000 },
                { id: "eid372", tween: [ "style", "${_belt2Copy43}", "display", 'block', { fromValue: 'block'}], position: 2825, duration: 0 },
                { id: "eid373", tween: [ "style", "${_belt2Copy43}", "display", 'none', { fromValue: 'block'}], position: 2916, duration: 0 },
                { id: "eid359", tween: [ "style", "${_belt2Copy47}", "left", '464px', { fromValue: '376px'}], position: 0, duration: 5000 },
                { id: "eid278", tween: [ "style", "${_belt2Copy10}", "left", '328px', { fromValue: '240px'}], position: 0, duration: 5000 },
                { id: "eid356", tween: [ "style", "${_belt2Copy44}", "left", '440px', { fromValue: '352px'}], position: 0, duration: 5000 },
                { id: "eid352", tween: [ "style", "${_belt2Copy19}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid337", tween: [ "style", "${_belt2Copy39}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid268", tween: [ "style", "${_belt2}", "left", '400px', { fromValue: '312px'}], position: 0, duration: 5000 },
                { id: "eid275", tween: [ "style", "${_belt2Copy7}", "left", '352px', { fromValue: '264px'}], position: 0, duration: 5000 },
                { id: "eid273", tween: [ "style", "${_belt2Copy5}", "left", '368px', { fromValue: '280px'}], position: 0, duration: 5000 },
                { id: "eid301", tween: [ "style", "${_belt2Copy33}", "left", '104px', { fromValue: '16px'}], position: 0, duration: 5000 }            ]
        }
    }
},
"light": {
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
                    id: 'light_off',
                    type: 'image',
                    rect: ['0px', '0px', '51px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/light_off.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '51px', '68px', 'auto', 'auto'],
                    id: 'light_on',
                    opacity: 0,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/light_on.svg', '0px', '0px']
                },
                {
                    id: 'flash',
                    type: 'image',
                    rect: ['-27px', '-28px', '106px', '54px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flash.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_light_on}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_light_off}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flash}": [
                ["style", "top", '-23px'],
                ["style", "opacity", '0'],
                ["style", "left", '-27px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '51px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1348,
            autoPlay: true,
            timeline: [
                { id: "eid451", tween: [ "style", "${_flash}", "top", '-28px', { fromValue: '-23px'}], position: 894, duration: 454 },
                { id: "eid438", tween: [ "style", "${_light_on}", "opacity", '1', { fromValue: '0.000000'}], position: 894, duration: 57 },
                { id: "eid440", tween: [ "style", "${_light_on}", "opacity", '0', { fromValue: '1'}], position: 1189, duration: 61 },
                { id: "eid445", tween: [ "style", "${_flash}", "opacity", '1', { fromValue: '0'}], position: 894, duration: 156 },
                { id: "eid444", tween: [ "style", "${_flash}", "opacity", '0', { fromValue: '1'}], position: 1189, duration: 159 }            ]
        }
    }
},
"whistle": {
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
                    transform: [[0, 0], [], [], [], ['50%', '83%']],
                    id: 'whistle',
                    type: 'image',
                    rect: ['0px', '0px', '44px', '158px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/whistle.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], [], ['0%', '92%']],
                    id: 'puff',
                    type: 'image',
                    rect: ['37px', 'auto', '126px', '69px', 'auto', '104px'],
                    fill: ['rgba(0,0,0,0)', 'images/puff.svg', '0px', '0px']
                },
                {
                    rect: ['163px', '20px', '27px', '27px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'block',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['177px', '-4px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'EllipseCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'block',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_whistle}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,83], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.45'],
                ["style", "top", '22px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '68px'],
                ["transform", "scaleX", '0.55']
            ],
            "${symbolSelector}": [
                ["style", "height", '158px'],
                ["style", "width", '44px']
            ],
            "${_puff}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '0.24'],
                ["style", "bottom", '104px'],
                ["transform", "scaleX", '0.24'],
                ["style", "opacity", '0'],
                ["style", "left", '37px'],
                ["style", "-webkit-transform-origin", [0,92], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,92],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleX", '0.43'],
                ["style", "opacity", '0'],
                ["style", "left", '77px'],
                ["style", "width", '12px'],
                ["style", "top", '26px'],
                ["transform", "scaleY", '0.47'],
                ["style", "height", '12px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2750,
            autoPlay: true,
            timeline: [
                { id: "eid500", tween: [ "style", "${_Ellipse}", "top", '22px', { fromValue: '22px'}], position: 1383, duration: 125, easing: "easeInQuart" },
                { id: "eid496", tween: [ "style", "${_Ellipse}", "top", '16px', { fromValue: '20px'}], position: 1508, duration: 1242, easing: "easeOutQuint" },
                { id: "eid518", tween: [ "style", "${_EllipseCopy}", "left", '77px', { fromValue: '77px'}], position: 1383, duration: 0, easing: "easeInQuart" },
                { id: "eid481", tween: [ "style", "${_EllipseCopy}", "left", '205px', { fromValue: '177px'}], position: 1508, duration: 1242, easing: "easeOutQuart" },
                { id: "eid504", tween: [ "style", "${_EllipseCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid505", tween: [ "style", "${_EllipseCopy}", "display", 'block', { fromValue: 'none'}], position: 1318, duration: 0 },
                { id: "eid484", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1', { fromValue: '0.47'}], position: 1383, duration: 125, easing: "easeInQuart" },
                { id: "eid479", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1.2', { fromValue: '1'}], position: 1508, duration: 1242, easing: "easeOutQuart" },
                { id: "eid508", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 1383, duration: 125, easing: "easeInQuart" },
                { id: "eid497", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 1508, duration: 992, easing: "easeOutQuint" },
                { id: "eid517", tween: [ "style", "${_Ellipse}", "left", '68px', { fromValue: '68px'}], position: 1383, duration: 0, easing: "easeInQuart" },
                { id: "eid512", tween: [ "style", "${_Ellipse}", "left", '163px', { fromValue: '70px'}], position: 1383, duration: 125, easing: "easeInQuart" },
                { id: "eid495", tween: [ "style", "${_Ellipse}", "left", '188px', { fromValue: '163px'}], position: 1508, duration: 1242, easing: "easeOutQuint" },
                { id: "eid462", tween: [ "style", "${_puff}", "opacity", '1', { fromValue: '0'}], position: 1186, duration: 224, easing: "easeInOutQuart" },
                { id: "eid476", tween: [ "style", "${_puff}", "opacity", '0', { fromValue: '1'}], position: 1508, duration: 1242, easing: "easeOutQuart" },
                { id: "eid485", tween: [ "transform", "${_EllipseCopy}", "scaleX", '1', { fromValue: '0.43'}], position: 1383, duration: 125, easing: "easeInQuart" },
                { id: "eid480", tween: [ "transform", "${_EllipseCopy}", "scaleX", '1.2', { fromValue: '1'}], position: 1508, duration: 1242, easing: "easeOutQuart" },
                { id: "eid502", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid503", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 1318, duration: 0 },
                { id: "eid458", tween: [ "transform", "${_puff}", "scaleX", '1', { fromValue: '0.24'}], position: 1186, duration: 322, easing: "easeInQuart" },
                { id: "eid477", tween: [ "transform", "${_puff}", "scaleX", '1.2', { fromValue: '1'}], position: 1508, duration: 1242, easing: "easeOutQuart" },
                { id: "eid499", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '0.45'}], position: 1383, duration: 125, easing: "easeInQuart" },
                { id: "eid494", tween: [ "transform", "${_Ellipse}", "scaleY", '1.2', { fromValue: '1'}], position: 1508, duration: 1242, easing: "easeOutQuint" },
                { id: "eid498", tween: [ "transform", "${_Ellipse}", "scaleX", '1', { fromValue: '0.55'}], position: 1383, duration: 125, easing: "easeInQuart" },
                { id: "eid493", tween: [ "transform", "${_Ellipse}", "scaleX", '1.2', { fromValue: '1'}], position: 1508, duration: 1242, easing: "easeOutQuint" },
                { id: "eid521", tween: [ "transform", "${_whistle}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1186, duration: 64, easing: "easeInOutQuint" },
                { id: "eid522", tween: [ "transform", "${_whistle}", "rotateZ", '-3deg', { fromValue: '3deg'}], position: 1250, duration: 68, easing: "easeInOutQuint" },
                { id: "eid523", tween: [ "transform", "${_whistle}", "rotateZ", '3deg', { fromValue: '-3deg'}], position: 1318, duration: 65, easing: "easeInOutQuint" },
                { id: "eid524", tween: [ "transform", "${_whistle}", "rotateZ", '-3deg', { fromValue: '3deg'}], position: 1383, duration: 62, easing: "easeInOutQuint" },
                { id: "eid525", tween: [ "transform", "${_whistle}", "rotateZ", '3deg', { fromValue: '-3deg'}], position: 1445, duration: 63, easing: "easeInOutQuint" },
                { id: "eid526", tween: [ "transform", "${_whistle}", "rotateZ", '-3deg', { fromValue: '3deg'}], position: 1508, duration: 62, easing: "easeInOutQuint" },
                { id: "eid527", tween: [ "transform", "${_whistle}", "rotateZ", '3deg', { fromValue: '-3deg'}], position: 1570, duration: 51, easing: "easeInOutQuint" },
                { id: "eid528", tween: [ "transform", "${_whistle}", "rotateZ", '-2deg', { fromValue: '3deg'}], position: 1621, duration: 51, easing: "easeInOutQuint" },
                { id: "eid529", tween: [ "transform", "${_whistle}", "rotateZ", '2deg', { fromValue: '-2deg'}], position: 1672, duration: 39, easing: "easeInOutQuint" },
                { id: "eid530", tween: [ "transform", "${_whistle}", "rotateZ", '-1deg', { fromValue: '2deg'}], position: 1711, duration: 39, easing: "easeInOutQuint" },
                { id: "eid531", tween: [ "transform", "${_whistle}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 1750, duration: 42, easing: "easeInOutQuint" },
                { id: "eid532", tween: [ "transform", "${_whistle}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1792, duration: 44, easing: "easeInOutQuint" },
                { id: "eid509", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 1383, duration: 125, easing: "easeInQuart" },
                { id: "eid483", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 1508, duration: 807, easing: "easeOutQuart" },
                { id: "eid459", tween: [ "transform", "${_puff}", "scaleY", '1', { fromValue: '0.24'}], position: 1186, duration: 322, easing: "easeInQuart" },
                { id: "eid478", tween: [ "transform", "${_puff}", "scaleY", '1.2', { fromValue: '1'}], position: 1508, duration: 1242, easing: "easeOutQuart" },
                { id: "eid519", tween: [ "style", "${_EllipseCopy}", "top", '26px', { fromValue: '26px'}], position: 1383, duration: 0, easing: "easeInQuart" },
                { id: "eid482", tween: [ "style", "${_EllipseCopy}", "top", '-21px', { fromValue: '-4px'}], position: 1508, duration: 1242, easing: "easeOutQuart" }            ]
        }
    }
},
"bottom_gauge": {
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
                    id: 'bottom_gauge',
                    type: 'image',
                    rect: ['0px', '0px', '65px', '44px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bottom_gauge.svg', '0px', '0px']
                },
                {
                    id: 'bottom_gauge_needle',
                    type: 'image',
                    rect: ['1px', '1px', '63px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bottom_gauge_needle.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bottom_gauge_needle}": [
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_bottom_gauge}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '44px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
                { id: "eid534", tween: [ "transform", "${_bottom_gauge_needle}", "rotateZ", '175deg', { fromValue: '0deg'}], position: 0, duration: 692, easing: "easeInOutExpo" },
                { id: "eid535", tween: [ "transform", "${_bottom_gauge_needle}", "rotateZ", '0deg', { fromValue: '175deg'}], position: 692, duration: 1058, easing: "easeInOutQuart" }            ]
        }
    }
},
"Data_Purchase": {
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
                    id: 'Ball',
                    type: 'image',
                    rect: ['0px', '0px', '67px', '67px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Ball.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '20px', '67px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'Data Purchase',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["style", "height", '27px'],
                ["style", "font-size", '12px'],
                ["style", "left", '0px'],
                ["style", "width", '67px']
            ],
            "${_Ball}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px']
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
"Aggregators": {
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
                    id: 'Ball',
                    type: 'image',
                    rect: ['0px', '0px', '67px', '67px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Ball.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '27px', '67px', '14px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'Aggregators',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '27px'],
                ["style", "text-align", 'center'],
                ["style", "height", '14px'],
                ["style", "width", '67px'],
                ["style", "left", '0px'],
                ["style", "font-size", '11px']
            ],
            "${_Ball}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px']
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
"Digital_Marketing": {
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
                    id: 'Ball',
                    type: 'image',
                    rect: ['0px', '0px', '67px', '67px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Ball.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '20px', '67px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'Digital<br>Marketing',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["style", "height", '27px'],
                ["style", "width", '67px'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_Ball}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px']
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
"Offline_targeted_marketing": {
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
                    id: 'Ball',
                    type: 'image',
                    rect: ['0px', '0px', '67px', '67px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Ball.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '16px', '67px', '40px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'Offline<br>Targeted<br>Marketing',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '16px'],
                ["style", "text-align", 'center'],
                ["style", "height", '40px'],
                ["style", "font-size", '11px'],
                ["style", "left", '0px'],
                ["style", "width", '67px']
            ],
            "${_Ball}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px']
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
"Affinity_Partners": {
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
                    id: 'Ball',
                    type: 'image',
                    rect: ['0px', '0px', '67px', '67px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Ball.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '20px', '67px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'Affinity<br>Partners',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["style", "height", '27px'],
                ["style", "width", '67px'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_Ball}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px']
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
"GIS_corporate_strat": {
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
                    id: 'Ball',
                    type: 'image',
                    rect: ['0px', '0px', '67px', '67px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Ball.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '16px', '67px', '40px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'GIS<br>Corporate<br>Strategy',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '16px'],
                ["style", "text-align", 'center'],
                ["style", "height", '40px'],
                ["style", "width", '67px'],
                ["style", "left", '0px'],
                ["style", "font-size", '11px']
            ],
            "${_Ball}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px']
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
"AJG_corporate_strat": {
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
                    id: 'Ball',
                    type: 'image',
                    rect: ['0px', '0px', '67px', '67px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Ball.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '16px', '67px', '40px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'AJG<br>Corporate<br>Strategy',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '16px'],
                ["style", "text-align", 'center'],
                ["style", "height", '40px'],
                ["style", "font-size", '11px'],
                ["style", "left", '0px'],
                ["style", "width", '67px']
            ],
            "${_Ball}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px']
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
"claw": {
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
                    id: 'long_arm',
                    type: 'image',
                    rect: ['41px', '0px', '21px', '357px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/long%20arm.svg', '0px', '0px']
                },
                {
                    id: 'bend_arm',
                    type: 'image',
                    rect: ['34px', '339px', '49px', '108px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bend%20arm.svg', '0px', '0px']
                },
                {
                    id: 'small_arm',
                    type: 'image',
                    rect: ['41px', '426px', '21px', '76px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/small%20arm.svg', '0px', '0px']
                },
                {
                    id: 'left_claw',
                    type: 'image',
                    rect: ['0px', '493px', '67px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/left%20claw.svg', '0px', '0px']
                },
                {
                    id: 'right_claw',
                    type: 'image',
                    rect: ['41px', '500px', '61px', '78px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/right%20claw.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bend_arm}": [
                ["style", "top", '339px'],
                ["style", "-webkit-transform-origin", [35,14], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [35,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [35,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [35,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [35,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [35,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '34px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_left_claw}": [
                ["style", "top", '491px'],
                ["style", "-webkit-transform-origin", [76,19], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [76,19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [76,19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [76,19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [76,19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [76,19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '30deg']
            ],
            "${_long_arm}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [49,2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [49,2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [49,2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [49,2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [49,2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [49,2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '41px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_small_arm}": [
                ["style", "top", '426px'],
                ["style", "-webkit-transform-origin", [49,5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [49,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [49,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [49,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [49,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [49,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '41px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '578px'],
                ["style", "width", '102px']
            ],
            "${_right_claw}": [
                ["style", "top", '498px'],
                ["style", "-webkit-transform-origin", [17,12], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [17,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '41px'],
                ["transform", "rotateZ", '-30deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2734,
            autoPlay: true,
            timeline: [
                { id: "eid786", tween: [ "transform", "${_right_claw}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 0, duration: 353, easing: "easeInOutExpo" },
                { id: "eid848", tween: [ "transform", "${_right_claw}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 2500, duration: 234, easing: "easeInOutCubic" },
                { id: "eid890", tween: [ "style", "${_left_claw}", "left", '1px', { fromValue: '1px'}], position: 0, duration: 0, easing: "easeInOutExpo" },
                { id: "eid889", tween: [ "style", "${_right_claw}", "left", '41px', { fromValue: '41px'}], position: 0, duration: 0, easing: "easeInOutExpo" },
                { id: "eid790", tween: [ "transform", "${_left_claw}", "rotateZ", '0deg', { fromValue: '30deg'}], position: 0, duration: 353, easing: "easeInOutExpo" },
                { id: "eid849", tween: [ "transform", "${_left_claw}", "rotateZ", '30deg', { fromValue: '0deg'}], position: 2500, duration: 234, easing: "easeInOutCubic" }            ]
        }
    }
},
"process": {
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
                    id: 'Data_Purchase',
                    type: 'rect',
                    rect: ['0px', '502px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Aggregators',
                    type: 'rect',
                    rect: ['125px', '632px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Digital_Marketing',
                    type: 'rect',
                    rect: ['59px', '601px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Offline_targeted_marketing',
                    type: 'rect',
                    rect: ['199px', '685px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Affinity_Partners',
                    type: 'rect',
                    rect: ['189px', '715px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'GIS_corporate_strat',
                    type: 'rect',
                    rect: ['95px', '607px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'AJG_corporate_strat',
                    type: 'rect',
                    rect: ['112px', '622px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'claw',
                    type: 'rect',
                    rect: ['620px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Offline_targeted_marketing',
                symbolName: 'Offline_targeted_marketing',
                autoPlay: {

               }
            },
            {
                id: 'claw',
                symbolName: 'claw',
                autoPlay: {

               }
            },
            {
                id: 'AJG_corporate_strat',
                symbolName: 'AJG_corporate_strat',
                autoPlay: {

               }
            },
            {
                id: 'Aggregators',
                symbolName: 'Aggregators',
                autoPlay: {

               }
            },
            {
                id: 'Digital_Marketing',
                symbolName: 'Digital_Marketing',
                autoPlay: {

               }
            },
            {
                id: 'Data_Purchase',
                symbolName: 'Data_Purchase',
                autoPlay: {

               }
            },
            {
                id: 'Affinity_Partners',
                symbolName: 'Affinity_Partners',
                autoPlay: {

               }
            },
            {
                id: 'GIS_corporate_strat',
                symbolName: 'GIS_corporate_strat',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Offline_targeted_marketing}": [
                ["style", "left", '60px'],
                ["style", "top", '510px']
            ],
            "${_Affinity_Partners}": [
                ["style", "left", '0px'],
                ["style", "top", '510px']
            ],
            "${_GIS_corporate_strat}": [
                ["style", "left", '60px'],
                ["style", "top", '510px']
            ],
            "${_Data_Purchase}": [
                ["style", "left", '0px'],
                ["style", "top", '510px']
            ],
            "${symbolSelector}": [
                ["style", "height", '578px'],
                ["style", "width", '722px']
            ],
            "${_AJG_corporate_strat}": [
                ["style", "top", '510px'],
                ["style", "left", '0px']
            ],
            "${_claw}": [
                ["style", "left", '620px'],
                ["style", "top", '0px']
            ],
            "${_Aggregators}": [
                ["style", "left", '60px'],
                ["style", "top", '510px']
            ],
            "${_Digital_Marketing}": [
                ["style", "top", '510px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 116746,
            autoPlay: true,
            timeline: [
                { id: "eid729", tween: [ "style", "${_GIS_corporate_strat}", "top", '750px', { fromValue: '510px'}], position: 6438, duration: 1750, easing: "easeOutBounce" },
                { id: "eid730", tween: [ "style", "${_GIS_corporate_strat}", "top", '799px', { fromValue: '750px'}], position: 8188, duration: 1000, easing: "easeInSine" },
                { id: "eid728", tween: [ "style", "${_GIS_corporate_strat}", "top", '1008px', { fromValue: '799px'}], position: 45000, duration: 0, easing: "easeOutElastic" },
                { id: "eid929", tween: [ "style", "${_GIS_corporate_strat}", "top", '668px', { fromValue: '1008px'}], position: 54000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid930", tween: [ "style", "${_GIS_corporate_strat}", "top", '778px', { fromValue: '668px'}], position: 55750, duration: 996, easing: "easeOutBounce" },
                { id: "eid1047", tween: [ "style", "${_GIS_corporate_strat}", "top", '1008px', { fromValue: '778px'}], position: 97500, duration: 0, easing: "easeOutElastic" },
                { id: "eid1048", tween: [ "style", "${_GIS_corporate_strat}", "top", '668px', { fromValue: '1008px'}], position: 106500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1049", tween: [ "style", "${_GIS_corporate_strat}", "top", '778px', { fromValue: '668px'}], position: 108250, duration: 996, easing: "easeOutBounce" },
                { id: "eid732", tween: [ "style", "${_GIS_corporate_strat}", "left", '50px', { fromValue: '60px'}], position: 6438, duration: 1750, easing: "easeOutBounce" },
                { id: "eid733", tween: [ "style", "${_GIS_corporate_strat}", "left", '17px', { fromValue: '50px'}], position: 8188, duration: 1000, easing: "easeInSine" },
                { id: "eid731", tween: [ "style", "${_GIS_corporate_strat}", "left", '498px', { fromValue: '347px'}], position: 45000, duration: 8498 },
                { id: "eid931", tween: [ "style", "${_GIS_corporate_strat}", "left", '20px', { fromValue: '498px'}], position: 54750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1045", tween: [ "style", "${_GIS_corporate_strat}", "left", '498px', { fromValue: '347px'}], position: 97500, duration: 8498 },
                { id: "eid1046", tween: [ "style", "${_GIS_corporate_strat}", "left", '20px', { fromValue: '498px'}], position: 107250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid719", tween: [ "style", "${_Affinity_Partners}", "top", '750px', { fromValue: '510px'}], position: 5250, duration: 1750, easing: "easeOutBounce" },
                { id: "eid720", tween: [ "style", "${_Affinity_Partners}", "top", '779px', { fromValue: '750px'}], position: 7000, duration: 1000, easing: "easeInSine" },
                { id: "eid727", tween: [ "style", "${_Affinity_Partners}", "top", '1008px', { fromValue: '779px'}], position: 37500, duration: 0 },
                { id: "eid921", tween: [ "style", "${_Affinity_Partners}", "top", '668px', { fromValue: '1008px'}], position: 46500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid922", tween: [ "style", "${_Affinity_Partners}", "top", '778px', { fromValue: '668px'}], position: 48250, duration: 996, easing: "easeOutBounce" },
                { id: "eid1052", tween: [ "style", "${_Affinity_Partners}", "top", '1008px', { fromValue: '778px'}], position: 90000, duration: 0 },
                { id: "eid1053", tween: [ "style", "${_Affinity_Partners}", "top", '668px', { fromValue: '1008px'}], position: 99000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1054", tween: [ "style", "${_Affinity_Partners}", "top", '778px', { fromValue: '668px'}], position: 100750, duration: 996, easing: "easeOutBounce" },
                { id: "eid688", tween: [ "style", "${_Aggregators}", "top", '750px', { fromValue: '510px'}], position: 1750, duration: 1750, easing: "easeOutBounce" },
                { id: "eid689", tween: [ "style", "${_Aggregators}", "top", '799px', { fromValue: '750px'}], position: 3500, duration: 1000, easing: "easeInSine" },
                { id: "eid690", tween: [ "style", "${_Aggregators}", "top", '1008px', { fromValue: '799px'}], position: 15000, duration: 0, easing: "easeOutElastic" },
                { id: "eid859", tween: [ "style", "${_Aggregators}", "top", '668px', { fromValue: '1008px'}], position: 24004, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid863", tween: [ "style", "${_Aggregators}", "top", '778px', { fromValue: '668px'}], position: 25754, duration: 996, easing: "easeOutBounce" },
                { id: "eid1065", tween: [ "style", "${_Aggregators}", "top", '1008px', { fromValue: '778px'}], position: 67500, duration: 0, easing: "easeOutElastic" },
                { id: "eid1066", tween: [ "style", "${_Aggregators}", "top", '668px', { fromValue: '1008px'}], position: 76504, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1067", tween: [ "style", "${_Aggregators}", "top", '778px', { fromValue: '668px'}], position: 78254, duration: 996, easing: "easeOutBounce" },
                { id: "eid630", tween: [ "style", "${_Data_Purchase}", "left", '-10px', { fromValue: '0px'}], position: 600, duration: 1750, easing: "easeOutBounce" },
                { id: "eid631", tween: [ "style", "${_Data_Purchase}", "left", '17px', { fromValue: '-10px'}], position: 2350, duration: 1000, easing: "easeInSine" },
                { id: "eid671", tween: [ "style", "${_Data_Purchase}", "left", '498px', { fromValue: '347px'}], position: 7500, duration: 8513 },
                { id: "eid803", tween: [ "style", "${_Data_Purchase}", "left", '21px', { fromValue: '498px'}], position: 17250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1073", tween: [ "style", "${_Data_Purchase}", "left", '498px', { fromValue: '347px'}], position: 60000, duration: 8513 },
                { id: "eid1074", tween: [ "style", "${_Data_Purchase}", "left", '21px', { fromValue: '498px'}], position: 69750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid766", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '0px'}], position: 12750, duration: 3263, easing: "easeInOutCubic" },
                { id: "eid778", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 16500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid852", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 21895, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid853", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 24004, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid894", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 29391, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid895", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 31500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid905", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 36891, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid906", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 39000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid919", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 44391, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid920", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 46500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid927", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 51891, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid928", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 54000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid935", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 59391, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid936", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 61500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1087", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 66895, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid1088", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 69004, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1122", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 74395, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid1123", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 76504, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1091", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 81891, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid1092", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 84000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1093", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 89391, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid1094", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 91500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1095", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 96891, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid1096", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 99000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1097", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 104391, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid1098", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 106500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1101", tween: [ "style", "${_claw}", "top", '478px', { fromValue: '138px'}], position: 111891, duration: 1622, easing: "easeInOutCubic" },
                { id: "eid1102", tween: [ "style", "${_claw}", "top", '138px', { fromValue: '478px'}], position: 114000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid767", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '620px'}], position: 12750, duration: 3263, easing: "easeInOutCubic" },
                { id: "eid782", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 17250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid854", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 20433, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid856", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 24754, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid892", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 27929, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid893", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 32250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid903", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 35429, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid904", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 39750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid917", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 42929, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid918", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 47250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid925", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 50429, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid926", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 54750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid933", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 57929, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid934", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 62250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1075", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 65433, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid1076", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 69754, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1120", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 72933, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid1121", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 77254, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1079", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 80429, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid1080", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 84750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1081", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 87929, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid1082", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 92250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1083", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 95429, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid1084", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 99750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1085", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 102929, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid1086", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 107250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1099", tween: [ "style", "${_claw}", "left", '480px', { fromValue: '3px'}], position: 110429, duration: 3084, easing: "easeInOutCubic" },
                { id: "eid1100", tween: [ "style", "${_claw}", "left", '3px', { fromValue: '480px'}], position: 114750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid629", tween: [ "style", "${_Data_Purchase}", "top", '750px', { fromValue: '510px'}], position: 600, duration: 1750, easing: "easeOutBounce" },
                { id: "eid632", tween: [ "style", "${_Data_Purchase}", "top", '779px', { fromValue: '750px'}], position: 2350, duration: 1000, easing: "easeInSine" },
                { id: "eid670", tween: [ "style", "${_Data_Purchase}", "top", '1008px', { fromValue: '779px'}], position: 7500, duration: 0, easing: "easeOutElastic" },
                { id: "eid800", tween: [ "style", "${_Data_Purchase}", "top", '667px', { fromValue: '1008px'}], position: 16500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid851", tween: [ "style", "${_Data_Purchase}", "top", '787px', { fromValue: '667px'}], position: 18250, duration: 1000, easing: "easeOutBounce" },
                { id: "eid1070", tween: [ "style", "${_Data_Purchase}", "top", '1008px', { fromValue: '787px'}], position: 60000, duration: 0, easing: "easeOutElastic" },
                { id: "eid1071", tween: [ "style", "${_Data_Purchase}", "top", '667px', { fromValue: '1008px'}], position: 69000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1072", tween: [ "style", "${_Data_Purchase}", "top", '787px', { fromValue: '667px'}], position: 70750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid716", tween: [ "style", "${_Affinity_Partners}", "left", '-10px', { fromValue: '0px'}], position: 5250, duration: 1750, easing: "easeOutBounce" },
                { id: "eid717", tween: [ "style", "${_Affinity_Partners}", "left", '17px', { fromValue: '-10px'}], position: 7000, duration: 1000, easing: "easeInSine" },
                { id: "eid723", tween: [ "style", "${_Affinity_Partners}", "left", '498px', { fromValue: '347px'}], position: 37500, duration: 8516 },
                { id: "eid923", tween: [ "style", "${_Affinity_Partners}", "left", '20px', { fromValue: '498px'}], position: 47250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1050", tween: [ "style", "${_Affinity_Partners}", "left", '498px', { fromValue: '347px'}], position: 90000, duration: 8516 },
                { id: "eid1051", tween: [ "style", "${_Affinity_Partners}", "left", '20px', { fromValue: '498px'}], position: 99750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid706", tween: [ "style", "${_Offline_targeted_marketing}", "top", '750px', { fromValue: '510px'}], position: 4094, duration: 1750, easing: "easeOutBounce" },
                { id: "eid707", tween: [ "style", "${_Offline_targeted_marketing}", "top", '799px', { fromValue: '750px'}], position: 5844, duration: 1000, easing: "easeInSine" },
                { id: "eid708", tween: [ "style", "${_Offline_targeted_marketing}", "top", '1008px', { fromValue: '799px'}], position: 30000, duration: 0, easing: "easeOutElastic" },
                { id: "eid913", tween: [ "style", "${_Offline_targeted_marketing}", "top", '668px', { fromValue: '1008px'}], position: 39000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid914", tween: [ "style", "${_Offline_targeted_marketing}", "top", '778px', { fromValue: '668px'}], position: 40750, duration: 996, easing: "easeOutBounce" },
                { id: "eid1057", tween: [ "style", "${_Offline_targeted_marketing}", "top", '1008px', { fromValue: '778px'}], position: 82500, duration: 0, easing: "easeOutElastic" },
                { id: "eid1058", tween: [ "style", "${_Offline_targeted_marketing}", "top", '668px', { fromValue: '1008px'}], position: 91500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1059", tween: [ "style", "${_Offline_targeted_marketing}", "top", '778px', { fromValue: '668px'}], position: 93250, duration: 996, easing: "easeOutBounce" },
                { id: "eid740", tween: [ "style", "${_AJG_corporate_strat}", "top", '750px', { fromValue: '510px'}], position: 7650, duration: 1750, easing: "easeOutBounce" },
                { id: "eid741", tween: [ "style", "${_AJG_corporate_strat}", "top", '779px', { fromValue: '750px'}], position: 9400, duration: 1000, easing: "easeInSine" },
                { id: "eid742", tween: [ "style", "${_AJG_corporate_strat}", "top", '1008px', { fromValue: '779px'}], position: 52500, duration: 0 },
                { id: "eid937", tween: [ "style", "${_AJG_corporate_strat}", "top", '668px', { fromValue: '1008px'}], position: 61500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid938", tween: [ "style", "${_AJG_corporate_strat}", "top", '778px', { fromValue: '668px'}], position: 63250, duration: 996, easing: "easeOutBounce" },
                { id: "eid1042", tween: [ "style", "${_AJG_corporate_strat}", "top", '1008px', { fromValue: '778px'}], position: 105000, duration: 0 },
                { id: "eid1043", tween: [ "style", "${_AJG_corporate_strat}", "top", '668px', { fromValue: '1008px'}], position: 114000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1044", tween: [ "style", "${_AJG_corporate_strat}", "top", '778px', { fromValue: '668px'}], position: 115750, duration: 996, easing: "easeOutBounce" },
                { id: "eid743", tween: [ "style", "${_AJG_corporate_strat}", "left", '-10px', { fromValue: '0px'}], position: 7650, duration: 1750, easing: "easeOutBounce" },
                { id: "eid744", tween: [ "style", "${_AJG_corporate_strat}", "left", '17px', { fromValue: '-10px'}], position: 9400, duration: 1000, easing: "easeInSine" },
                { id: "eid745", tween: [ "style", "${_AJG_corporate_strat}", "left", '498px', { fromValue: '347px'}], position: 52500, duration: 8500 },
                { id: "eid939", tween: [ "style", "${_AJG_corporate_strat}", "left", '20px', { fromValue: '498px'}], position: 62250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1040", tween: [ "style", "${_AJG_corporate_strat}", "left", '498px', { fromValue: '347px'}], position: 105000, duration: 8500 },
                { id: "eid1041", tween: [ "style", "${_AJG_corporate_strat}", "left", '20px', { fromValue: '498px'}], position: 114750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid709", tween: [ "style", "${_Offline_targeted_marketing}", "left", '50px', { fromValue: '60px'}], position: 4094, duration: 1750, easing: "easeOutBounce" },
                { id: "eid710", tween: [ "style", "${_Offline_targeted_marketing}", "left", '17px', { fromValue: '50px'}], position: 5844, duration: 1000, easing: "easeInSine" },
                { id: "eid713", tween: [ "style", "${_Offline_targeted_marketing}", "left", '498px', { fromValue: '347px'}], position: 30000, duration: 8504 },
                { id: "eid915", tween: [ "style", "${_Offline_targeted_marketing}", "left", '20px', { fromValue: '498px'}], position: 39750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1055", tween: [ "style", "${_Offline_targeted_marketing}", "left", '498px', { fromValue: '347px'}], position: 82500, duration: 8504 },
                { id: "eid1056", tween: [ "style", "${_Offline_targeted_marketing}", "left", '20px', { fromValue: '498px'}], position: 92250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid699", tween: [ "style", "${_Digital_Marketing}", "left", '-10px', { fromValue: '0px'}], position: 2910, duration: 1750, easing: "easeOutBounce" },
                { id: "eid700", tween: [ "style", "${_Digital_Marketing}", "left", '17px', { fromValue: '-10px'}], position: 4660, duration: 1000, easing: "easeInSine" },
                { id: "eid703", tween: [ "style", "${_Digital_Marketing}", "left", '498px', { fromValue: '347px'}], position: 22500, duration: 8527 },
                { id: "eid901", tween: [ "style", "${_Digital_Marketing}", "left", '20px', { fromValue: '498px'}], position: 32250, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1063", tween: [ "style", "${_Digital_Marketing}", "left", '498px', { fromValue: '347px'}], position: 75000, duration: 8527 },
                { id: "eid1064", tween: [ "style", "${_Digital_Marketing}", "left", '20px', { fromValue: '498px'}], position: 84750, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid691", tween: [ "style", "${_Aggregators}", "left", '50px', { fromValue: '60px'}], position: 1750, duration: 1750, easing: "easeOutBounce" },
                { id: "eid692", tween: [ "style", "${_Aggregators}", "left", '17px', { fromValue: '50px'}], position: 3500, duration: 1000, easing: "easeInSine" },
                { id: "eid695", tween: [ "style", "${_Aggregators}", "left", '498px', { fromValue: '347px'}], position: 15000, duration: 8517 },
                { id: "eid861", tween: [ "style", "${_Aggregators}", "left", '20px', { fromValue: '498px'}], position: 24754, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid1068", tween: [ "style", "${_Aggregators}", "left", '498px', { fromValue: '347px'}], position: 67500, duration: 8517 },
                { id: "eid1069", tween: [ "style", "${_Aggregators}", "left", '20px', { fromValue: '498px'}], position: 77254, duration: 1000, easing: "easeInOutQuint" },
                { id: "eid696", tween: [ "style", "${_Digital_Marketing}", "top", '750px', { fromValue: '510px'}], position: 2910, duration: 1750, easing: "easeOutBounce" },
                { id: "eid697", tween: [ "style", "${_Digital_Marketing}", "top", '779px', { fromValue: '750px'}], position: 4660, duration: 1000, easing: "easeInSine" },
                { id: "eid698", tween: [ "style", "${_Digital_Marketing}", "top", '1008px', { fromValue: '779px'}], position: 22500, duration: 0, easing: "easeOutElastic" },
                { id: "eid896", tween: [ "style", "${_Digital_Marketing}", "top", '668px', { fromValue: '1008px'}], position: 31500, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid897", tween: [ "style", "${_Digital_Marketing}", "top", '778px', { fromValue: '668px'}], position: 33250, duration: 996, easing: "easeOutBounce" },
                { id: "eid1060", tween: [ "style", "${_Digital_Marketing}", "top", '1008px', { fromValue: '778px'}], position: 75000, duration: 0, easing: "easeOutElastic" },
                { id: "eid1061", tween: [ "style", "${_Digital_Marketing}", "top", '668px', { fromValue: '1008px'}], position: 84000, duration: 1750, easing: "easeInOutQuint" },
                { id: "eid1062", tween: [ "style", "${_Digital_Marketing}", "top", '778px', { fromValue: '668px'}], position: 85750, duration: 996, easing: "easeOutBounce" },
                { id: "eid864", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_claw}', [] ], ""], position: 0 },
                { id: "eid865", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 15750 },
                { id: "eid866", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 23250 },
                { id: "eid940", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 30746.011664958 },
                { id: "eid941", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 38246.011664958 },
                { id: "eid942", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 45746.011664958 },
                { id: "eid943", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 53246.011664958 },
                { id: "eid944", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 60746.011664958 },
                { id: "eid1103", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 68250 },
                { id: "eid1124", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 75750.011664958 },
                { id: "eid1105", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 83246.011664958 },
                { id: "eid1106", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 90746.011664958 },
                { id: "eid1107", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 98246.011664958 },
                { id: "eid1108", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 105746.01166496 },
                { id: "eid1109", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_claw}', [] ], ""], position: 113246.01166496 }            ]
        }
    }
},
"balls_claw": {
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
                    id: 'process2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'process2',
                symbolName: 'process',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_process2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '578px'],
                ["style", "width", '722px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 169246,
            autoPlay: true,
            labels: {
                "loop": 16250
            },
            timeline: [
                { id: "eid1111", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_process2}', [16250] ], ""], position: 68750 }            ]
        }
    }
},
"gauge_process": {
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
                    id: 'bottom_gauge2',
                    type: 'rect',
                    rect: ['-20px', '-10px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'bottom_gauge2Copy',
                    type: 'rect',
                    rect: ['-20px', '-10px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'bottom_gauge2Copy2',
                    type: 'rect',
                    rect: ['-20px', '-10px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'bottom_gauge2Copy',
                symbolName: 'bottom_gauge',
                autoPlay: {

               }
            },
            {
                id: 'bottom_gauge2',
                symbolName: 'bottom_gauge',
                autoPlay: {

               }
            },
            {
                id: 'bottom_gauge2Copy2',
                symbolName: 'bottom_gauge',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bottom_gauge2Copy}": [
                ["style", "left", '148px'],
                ["style", "top", '0px']
            ],
            "${_bottom_gauge2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '44px'],
                ["style", "width", '359px']
            ],
            "${_bottom_gauge2Copy2}": [
                ["style", "left", '294px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 68487,
            autoPlay: true,
            timeline: [
                { id: "eid602", tween: [ "style", "${_bottom_gauge2Copy2}", "left", '294px', { fromValue: '294px'}], position: 0, duration: 0 },
                { id: "eid608", tween: [ "style", "${_bottom_gauge2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid603", tween: [ "style", "${_bottom_gauge2Copy}", "left", '148px', { fromValue: '148px'}], position: 0, duration: 0 },
                { id: "eid554", tween: [ "style", "${_bottom_gauge2Copy2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid560", tween: [ "style", "${_bottom_gauge2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid555", tween: [ "style", "${_bottom_gauge2Copy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid536", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bottom_gauge2}', [] ], ""], position: 0 },
                { id: "eid613", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bottom_gauge2Copy2}', [] ], ""], position: 0 },
                { id: "eid612", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bottom_gauge2Copy}', [] ], ""], position: 0 },
                { id: "eid633", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 2855.1953125 },
                { id: "eid656", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 4566 },
                { id: "eid657", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 6279 },
                { id: "eid748", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 13101.966805566 },
                { id: "eid750", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 13649.623826672 },
                { id: "eid752", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 14119.534765194 },
                { id: "eid751", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 20699.98946627 },
                { id: "eid753", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 21257.646487377 },
                { id: "eid755", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 21713.557425899 },
                { id: "eid754", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 28263.352912187 },
                { id: "eid756", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 28812.009933293 },
                { id: "eid758", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 29276.920871815 },
                { id: "eid757", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 35749.665595251 },
                { id: "eid759", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 36287.322616358 },
                { id: "eid761", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 36753.733400581 },
                { id: "eid760", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 43274.949819519 },
                { id: "eid762", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 43804.606840625 },
                { id: "eid763", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 44265.517779147 },
                { id: "eid746", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 50761.218042163 },
                { id: "eid747", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 51279.69824171 },
                { id: "eid749", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 51747.786001791 },
                { id: "eid1112", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 58250 },
                { id: "eid1113", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 58768.480199547 },
                { id: "eid1114", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 59236.567959628 },
                { id: "eid1115", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2}', [] ], ""], position: 65750 },
                { id: "eid1116", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy}', [] ], ""], position: 66268.480199547 },
                { id: "eid1117", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bottom_gauge2Copy2}', [] ], ""], position: 66736.567959628 }            ]
        }
    }
},
"gauges": {
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
                    id: 'gauge_process',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'gauge_process',
                symbolName: 'gauge_process',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_gauge_process}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '44px'],
                ["style", "width", '359px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 119237,
            autoPlay: true,
            timeline: [
                { id: "eid1118", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_gauge_process}', [16250] ], ""], position: 68750 }            ]
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
                    type: 'rect',
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '125px', '35px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    font: ['raleway, sans-serif', 18, 'rgba(32,47,53,1.00)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy3',
                    text: 'Continue »',
                    align: 'center',
                    rect: ['11px', '7px', '103px', 'auto', 'auto', 'auto']
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
                ["style", "height", '35px'],
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '125px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '7px'],
                ["color", "color", 'rgba(32,47,53,1)'],
                ["transform", "scaleY", '1'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '300'],
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
                { id: "eid111", tween: [ "transform", "${_RectangleCopy3}", "scaleX", '0.75', { fromValue: '1'}], position: 0, duration: 750, easing: "easeInOutQuint" },
                { id: "eid110", tween: [ "transform", "${_Text2Copy3}", "scaleY", '0.75', { fromValue: '1'}], position: 0, duration: 750, easing: "easeInOutQuint" },
                { id: "eid109", tween: [ "transform", "${_Text2Copy3}", "scaleX", '0.75', { fromValue: '1'}], position: 0, duration: 750, easing: "easeInOutQuint" },
                { id: "eid112", tween: [ "transform", "${_RectangleCopy3}", "scaleY", '0.75', { fromValue: '1'}], position: 0, duration: 750, easing: "easeInOutQuint" }            ]
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
})(jQuery, AdobeEdge, "AJG_006");
