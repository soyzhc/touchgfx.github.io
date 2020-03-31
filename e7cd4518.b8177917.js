(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return h}));var o=n(1),a=n(9),i=(n(0),n(261)),r=n(262),c=n(272),l=(n(274),n(276),n(273)),s=(n(271),{id:"10-physical-buttons",title:"10. Physical Buttons (optional)",sidebar_label:"10. Physical Buttons"}),b={id:"development/board-bring-up/how-to/10-physical-buttons",title:"10. Physical Buttons (optional)",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\development\\board-bring-up\\how-to\\10-physical-buttons.mdx",permalink:"/docs/development/board-bring-up/how-to/10-physical-buttons",sidebar_label:"10. Physical Buttons",sidebar:"docs",previous:{title:"9. Touch Controller (optional)",permalink:"/docs/development/board-bring-up/how-to/09-touch-controller"},next:{title:"11. Flash Loader",permalink:"/docs/development/board-bring-up/how-to/11-flash-loader"}},p=[{value:"Motivation",id:"motivation",children:[]},{value:"Goal",id:"goal",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Do",id:"do",children:[{value:"Performance is as expected",id:"performance-is-as-expected",children:[]}]},{value:"Verification",id:"verification",children:[]}],d={rightToc:p},u="wrapper";function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(u,Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"Physical buttons can function as external events usable as triggers from the TouchGFX Designer during application development, or simply used as events in the application backend."),Object(i.b)(c.a,{mdxType:"Note"},"Skip this step if physical buttons are not relevant for your board bring up."),Object(i.b)("h2",{id:"goal"},"Goal"),Object(i.b)("p",null,"The goal of this section is to develop code that can be used in subsequent TouchGFX HAL- and/or application development."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Physical buttons must be connected to GPIOs on the MCU")),Object(i.b)("h2",{id:"do"},"Do"),Object(i.b)("p",null,"The following images show how the schematics might look for a physical button and how it is connected to the MCU"),Object(i.b)(r.a,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.png",noShadow:!0,mdxType:"Figure"}),Object(i.b)(r.a,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.png",noShadow:!0,mdxType:"Figure"}),Object(i.b)("p",null,"In CubeMX GPIO Port C Pin 13 (PC13) can be configured as an input and configured as a pull-down in the ",Object(i.b)("strong",{parentName:"p"},"GPIO")," section of the ",Object(i.b)("strong",{parentName:"p"},"System Core")," category."),Object(i.b)(r.a,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.png",noShadow:!0,mdxType:"Figure"}),Object(i.b)(r.a,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.png",noShadow:!0,mdxType:"Figure"}),Object(i.b)("p",null,"The code generated by CubeMX will setup the appropriate GPIO port(s) which can now be read."),Object(i.b)(l.a,{mdxType:"CodeHeader"},"main.c"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"uint8_t key;\nif (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n{\n    key = 1;\n}\n")),Object(i.b)("h3",{id:"performance-is-as-expected"},"Performance is as expected"),Object(i.b)("p",null,"Polling the state of physical buttons should be possible within 1 ms if the code is executed in the same thread as the TouchGFX Appliaction. If not fast enough, consider moving the code to a seperate task, at a later stage or making it interrupt based."),Object(i.b)("h2",{id:"verification"},"Verification"),Object(i.b)("p",null,"Here are the verification points for this section:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Verification Point"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Rationale"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"MCU is configured"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"MCU GPIOs must be configured to read the state of connected physical buttons.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Connected GPIO can be read"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Once code has been developed to read the physical button state from a GPIO this can be used in sub-sequent TouchGFX HAL development.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Reading performs as expected"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Polling is a part of application render time. If polling takes too long this should be moved to a different thread or made interrupt based.")))))}h.isMDXComponent=!0},272:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=n(265),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement(r.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(a.Component);t.a=l},276:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=n(265),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement(r.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:c},this.props.children)},t}(a.Component);t.a=l}}]);