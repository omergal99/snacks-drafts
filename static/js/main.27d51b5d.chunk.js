(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t(38)},31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(21),r=t.n(l),i=(t(31),t(32),t(7)),s=t(8),o=t(10),m=t(9),d=t(11),f=t(3),u=t(12),b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={isOverlayOpen:!1,imgNumber:"1"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"imgSelected",value:function(e){console.log("hiii",e.target.dataset.number),this.setState({isOverlayOpen:!0,imgNumber:e.target.dataset.number})}},{key:"closeOverlay",value:function(){this.setState({isOverlayOpen:!1})}},{key:"render",value:function(){return c.a.createElement("section",{className:"main"},c.a.createElement("header",null,c.a.createElement("h2",null,"New Zeland"),c.a.createElement("p",null,"The project may be tricier then it seems, look aroud carfully.")),c.a.createElement("div",{className:"img-container flex wrap space-even align-center"},c.a.createElement("div",{onClick:this.imgSelected.bind(this),"data-number":"1",className:"circle"}),c.a.createElement("div",{onClick:this.imgSelected.bind(this),"data-number":"2",className:"reactangle"}),c.a.createElement("div",{onClick:this.imgSelected.bind(this),"data-number":"3",className:"square"}),c.a.createElement("div",{onClick:this.imgSelected.bind(this),"data-number":"4",className:"triangle"}," ")),this.state.isOverlayOpen&&c.a.createElement("div",{className:"overlay"},c.a.createElement("h2",null,"New Zeland"),c.a.createElement("div",{className:"btn-close",onClick:this.closeOverlay.bind(this)},"X"),c.a.createElement("div",{className:"img-Extended",style:{backgroundImage:'url("assets/img/new-zealand-'.concat(this.state.imgNumber,'.jpg")')}})))}}]),a}(n.Component),h=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={i:0,colors:["red","green","blue"]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"main2"},c.a.createElement("div",null,c.a.createElement("div",{style:{backgroundColor:this.state.colors[this.state.i],color:"#fff"},className:"poligon"})))}}]),a}(n.Component),p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"main3"},c.a.createElement("div",{className:"all-pic"},c.a.createElement("div",{className:"full"},c.a.createElement("div",{className:"head"}),c.a.createElement("div",{className:"stomec"}),c.a.createElement("div",{className:"hands"}),c.a.createElement("div",{className:"legs"})),c.a.createElement("div",{className:"hole"})))}}]),a}(n.Component),v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"main4"},c.a.createElement("div",{className:"wrap"},c.a.createElement("div",{className:"tommy"},c.a.createElement("div",{className:"first-line"},"we never close"),c.a.createElement("div",{className:"second-line"},"shop online @ tommy.com"),c.a.createElement("div",null,c.a.createElement("div",{className:"circle left-top"}),c.a.createElement("div",{className:"cover left-top"}),c.a.createElement("div",{className:"circle left-bottom"}),c.a.createElement("div",{className:"cover left-bottom"}),c.a.createElement("div",{className:"circle right-top"}),c.a.createElement("div",{className:"cover right-top"}),c.a.createElement("div",{className:"circle right-bottom"}),c.a.createElement("div",{className:"cover right-bottom"})))))}}]),a}(n.Component),E=t(5);var g=c.a.memo(function(e){var a=e.isChecked,t=e.idx,l=(e.onHandleChanged,Object(n.useRef)(null)),r=new Audio("assets/sounds/pilot/switch on.mp3"),i=new Audio("assets/sounds/pilot/switch off.mp3");return r.volume=.5,i.volume=.7,c.a.createElement("div",{className:"pilot-switch"},c.a.createElement("span",{className:"switch"},c.a.createElement("span",{className:"switch-border1"},c.a.createElement("span",{className:"switch-border2"},c.a.createElement("input",{id:"switch".concat(t),ref:l,onClick:function(e){e.target.checked?r.play():i.play()}.bind(this),type:"checkbox",defaultChecked:a}),c.a.createElement("label",{htmlFor:"switch".concat(t)}),c.a.createElement("span",{className:"switch-top"}),c.a.createElement("span",{className:"switch-shadow"}),c.a.createElement("span",{className:"switch-handle"}),c.a.createElement("span",{className:"switch-handle-left"}),c.a.createElement("span",{className:"switch-handle-right"}),c.a.createElement("span",{className:"switch-handle-top"}),c.a.createElement("span",{className:"switch-handle-bottom"}),c.a.createElement("span",{className:"switch-handle-base"}),c.a.createElement("span",{className:"switch-led switch-led-green"},c.a.createElement("span",{className:"switch-led-border"},c.a.createElement("span",{className:"switch-led-light"},c.a.createElement("span",{className:"switch-led-glow"})))),c.a.createElement("span",{className:"switch-led switch-led-red"},c.a.createElement("span",{className:"switch-led-border"},c.a.createElement("span",{className:"switch-led-light"},c.a.createElement("span",{className:"switch-led-glow"}))))))))});var N=c.a.memo(function(){var e=this,a=Object(n.useState)("Hello CodeSandbox"),t=Object(E.a)(a,2);t[0],t[1],Object(n.useEffect)(function(){document.title="Pilot Table"});var l=function(e){},r=[!0,!0,!1].map(function(a,t){return c.a.createElement("div",{key:t},c.a.createElement(g,{isChecked:a,idx:t,onHandleChanged:l.bind(e)}))});return c.a.createElement("div",{className:"pilot-table"},r)}),w=t(22);var y=t.n(w)()({autoStart:!1,continuous:!0})(function(e){var a=e.transcript,t=e.resetTranscript,l=e.startListening,r=e.stopListening,i=e.recognition,s=e.listening,o=Object(n.useRef)(null),m=Object(n.useState)(""),d=Object(E.a)(m,2),f=d[0],u=d[1],b=Object(n.useState)("Auto"),h=Object(E.a)(b,2),p=h[0],v=h[1],g={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};Object(n.useEffect)(function(){document.title="Voice Recorder";var e=String(a).toLowerCase();return N(e),console.log(o.current),function(){document.title="Snacks-Drafts"}});var N=function(e){"undefined"!=typeof g[e]&&u(g[e])};return c.a.createElement("div",{className:"voice-recorder"},c.a.createElement("div",{ref:o,style:{backgroundColor:"".concat(f,"10")},mycustomattribute:f},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"Color recorder"),c.a.createElement("p",null,"Record your color Theme and the app change the color")),c.a.createElement("div",{className:"showing"},c.a.createElement("div",{className:"circle-color",style:{backgroundColor:"".concat(f)}},f),c.a.createElement("div",null,"Your Text Record:"),c.a.createElement("span",null,a)),c.a.createElement("div",{style:{backgroundColor:"".concat(f,"38")}},c.a.createElement("div",{className:"is-recording"},s&&c.a.createElement("div",null,c.a.createElement("div",{className:"text"},"recording... "),c.a.createElement("div",{className:"red-animation"}))),c.a.createElement("div",{className:"buttons flex wrap space-center"},c.a.createElement("button",{onClick:t},c.a.createElement("span",null,"Reset"),c.a.createElement("img",{src:"assets/img/record/icon.png",alt:""})),c.a.createElement("button",{onClick:l},c.a.createElement("span",null,"Start Record"),c.a.createElement("img",{src:"assets/img/record/microphone.png",alt:""})),c.a.createElement("button",{onClick:r},c.a.createElement("span",null,"Stop"),c.a.createElement("img",{src:"assets/img/record/stop.png",alt:""})),c.a.createElement("button",{className:"lang-btn flex-col space-around align-center",onClick:function(){"Auto"===p||"Hebrew"===p?(v("English"),i.lang="en-US"):(v("Hebrew"),i.lang="he-IL")}},c.a.createElement("span",null,p),c.a.createElement("span",null,"HE / EN"))))))}),k=t(25);var O=c.a.memo(function(){document.title="Table";var e=Object(n.useState)([0,1,2,3,4,5]),a=Object(E.a)(e,2),t=a[0],l=a[1],r=t.map(function(e,a){return c.a.createElement("div",{mycustomattribute:a,key:a,onClick:function(){return function(e){var a=Object(k.a)(t);a[e]++,l(a)}(a)}},e)});return c.a.createElement("div",{className:"table"},r)});var j=c.a.memo(function(){var e=Object(n.useState)("Hello CodeSandbox"),a=Object(E.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,t),c.a.createElement("input",{onChange:function(e){l(e.target.value)},name:"test"}))});var C=c.a.memo(function(){var e=Object(n.useState)([0,1,2,3,4,5]),a=Object(E.a)(e,2),t=a[0],l=a[1],r=t.map(function(e,a){return c.a.createElement("div",{mycustomattribute:a,key:a,onClick:function(){return function(e){var a=JSON.parse(JSON.stringify(t));a[e]++,l(a)}(a)}},e)});return c.a.createElement("div",{className:"Table"},r)}),x=function(){return c.a.createElement("div",{className:"nav-bar flex wrap space-around align-center"},c.a.createElement(f.b,{exact:!0,to:"/",activeClassName:"activeRoute"},"Main"),c.a.createElement(f.b,{to:"/Main2",activeClassName:"activeRoute"},"Square"),c.a.createElement(f.b,{to:"/Human",activeClassName:"activeRoute"},"Human"),c.a.createElement(f.b,{to:"/Tommy",activeClassName:"activeRoute"},"Tommy"),c.a.createElement(f.b,{to:"/PilotTable",activeClassName:"activeRoute"},"Pilot"),c.a.createElement(f.b,{to:"/VoiceRecorder",activeClassName:"activeRoute"},"VoiceRecorder"),c.a.createElement(f.b,{to:"/Table",activeClassName:"activeRoute"},"table"),c.a.createElement(f.b,{to:"/Example2",activeClassName:"activeRoute"},"stackoverflow"),c.a.createElement(f.b,{to:"/Example3",activeClassName:"activeRoute"},"Example3"))},S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement("div",{className:"app-nav-route"},c.a.createElement("div",null,c.a.createElement(x,null)),c.a.createElement("div",{className:"route"},c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/",component:b}),c.a.createElement(u.a,{exact:!0,path:"/Main2",component:h}),c.a.createElement(u.a,{exact:!0,path:"/Human",component:p}),c.a.createElement(u.a,{exact:!0,path:"/Tommy",component:v}),c.a.createElement(u.a,{exact:!0,path:"/PilotTable",component:N}),c.a.createElement(u.a,{exact:!0,path:"/VoiceRecorder",component:y}),c.a.createElement(u.a,{exact:!0,path:"/Table",component:O}),c.a.createElement(u.a,{exact:!0,path:"/Example2",component:j}),c.a.createElement(u.a,{exact:!0,path:"/Example3",component:C})))))}}]),a}(n.Component);var R=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.27d51b5d.chunk.js.map