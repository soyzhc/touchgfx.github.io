(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return g}));var o=n(1),r=n(9),a=(n(0),n(261)),i=n(262),c=n(271),l=n(264),b=(n(272),n(273)),u=n(277),d={id:"01-create-project",title:"1. Create Project",sidebar_label:"1. Create Project"},s={id:"development/board-bring-up/how-to/01-create-project",title:"1. Create Project",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\development\\board-bring-up\\how-to\\01-create-project.mdx",permalink:"/docs/development/board-bring-up/how-to/01-create-project",sidebar_label:"1. Create Project",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/development/board-bring-up/board-introduction"},next:{title:"2. CPU Running",permalink:"/docs/development/board-bring-up/how-to/02-cpu-running"}},p=[{value:"Motivation",id:"motivation",children:[]},{value:"Goal",id:"goal",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Do",id:"do",children:[]},{value:"User Code sections",id:"user-code-sections",children:[]},{value:"Verification",id:"verification",children:[]}],h={rightToc:p},m="wrapper";function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(m,Object(o.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"In this section we will use CubeMX to generate a working project for\nthe specific MCU. This project will be the basis for the rest of the\nsteps in this how-to guide."),Object(a.b)("p",null,"We will refine the project using CubeMX in coming steps and write and\nintegrate code to make all required peripherals work."),Object(a.b)("p",null,"This project will be long lived and should be kept. You should also\ndecide on a strategy to keep the different versions available, so that\nyou can go back and run them again. Either on new hardware or just to\nrecheck the hardware."),Object(a.b)("h3",{id:"goal"},"Goal"),Object(a.b)("p",null,"The goal is to create a project in CubeMX that can be flashed to your\nboard and executed. If you have an IDE with a debugger (e.g\nSTM32CubeIDE or IAR Embedded Workbench) you should also check that you\ncan debug and step your project on the MCU."),Object(a.b)("p",null,"If you do not have a debugger you should find a way to print out debug\nstatements from various places in your project. E.g. on a serial port."),Object(a.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"The following are the prerequisites for this step:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"STM32 based board"),Object(a.b)("li",{parentName:"ul"},"Programming / debugging interface - ST-LINK, JLINK or similar"),Object(a.b)("li",{parentName:"ul"},"CubeMX installed"),Object(a.b)("li",{parentName:"ul"},"IDE installed - STM32CubeIDE, IAR Embedded Workbench, Keil uVision or similar")),Object(a.b)("h3",{id:"do"},"Do"),Object(a.b)("p",null,"We will now go through the steps of creating a new project in\nCubeMX. In this example we will use the STM32F429 mcu. You should of\ncourse select the mcu on your hardware."),Object(a.b)("p",null,'In CubeMx click "ACCESS TO MCU SELECTOR" in the "Start My Project from MCU":'),Object(a.b)(i.a,{imageSource:"/img/development/board-bring-up/create/cubemx01.png",caption:"Create new Project",noShadow:!1,width:"600",mdxType:"Figure"}),Object(a.b)("p",null,"It is also possible to start a new project based on a STM32 evaluation kit, e.g. the STM32F429Discovery board. You can/should do this if your hardware design is based on one of the evaluation kits."),Object(a.b)("p",null,"We then select the relevant mcu. Here we select the STM32F429ZIT6U:"),Object(a.b)(i.a,{imageSource:"/img/development/board-bring-up/create/cubemx02.png",caption:"Select the MCU",noShadow:!1,width:"600",mdxType:"Figure"}),Object(a.b)("p",null,'Change to the "Project Manager" tab, and give your project a name. You\ncan of course also select a new project location. Under "Application\nStructure", select Advanced. Under "Toolchain / IDE" you must select\nyour IDE. For this example we select IAR:'),Object(a.b)(i.a,{imageSource:"/img/development/board-bring-up/create/cubemx03.png",caption:"Set project name and IDE",noShadow:!1,width:"600",mdxType:"Figure"}),Object(a.b)("p",null,'Now click the "Generate Code" button in upper right corner. If this is\nyour first project for the selected mcu family (F4/F7/H7) CubeMX\nautomatically proposes to download the relevant Cube Firmware\npackage. Accept that to get the latest version for later use.'),Object(a.b)(i.a,{imageSource:"/img/development/board-bring-up/create/cubemx04.png",caption:"CubeMX can download Cube Firmware",noShadow:!1,width:"600",mdxType:"Figure"}),Object(a.b)("p",null,'Click "Open Project" to open the project in your IDE:'),Object(a.b)(i.a,{imageSource:"/img/development/board-bring-up/create/cubemx05.png",caption:"The project is generated",noShadow:!1,width:"600",mdxType:"Figure"}),Object(a.b)(i.a,{imageSource:"/img/development/board-bring-up/create/cubemx06.png",caption:"The project is opened in IAR Embedded Workbench",noShadow:!1,width:"600",mdxType:"Figure"}),Object(a.b)("p",null,"The project generated by CubeMX contains startup code specific to the mcu, interrupt table, system initialisation code, and HAL drivers for all the peripherals in the mcu."),Object(a.b)("p",null,"The project can now be compiled and debugged from your IDE. In IAR we click Project->Make to compile the project, and Project->Download and Debug to debug the project:"),Object(a.b)(i.a,{imageSource:"/img/development/board-bring-up/create/cubemx07.png",caption:"Debugging the project in IAR Embedded Workbench",noShadow:!1,width:"600",mdxType:"Figure"}),Object(a.b)("p",null,"The IAR project is setup to use the STLink debugger. If you are using something else, then change the Debugger properties for the project in your IDE."),Object(a.b)("h3",{id:"user-code-sections"},"User Code sections"),Object(a.b)("p",null,"At this step it is important to understand the concept of User Code\nsections used by CubeMX before you start editing your project.\nAll of the source files in the Core/Src folder in your project are\ngenerated by CubeMX. When you later change the project configuration\nin CubeMX, e.g. enable a UART, some of these files will be\nregenerated. You have probably also inserted code in some of these\nfiles. Your code will be lost when CubeMX regenerates the project unless\nyou follow one single rule:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Only write code in User Code sections"))),Object(a.b)("p",null,"Any code that you write outside of a User Code section will be deleted by CubeMX."),Object(a.b)("p",null,"As an example, let us look at the first few lines in Core/Src/main.c:"),Object(a.b)(b.a,{mdxType:"CodeHeader"},"main.c"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{3-5}","{3-5}":!0}),"int main(void)\n{\n  /* USER CODE BEGIN 1 */\n\n  /* USER CODE END 1 */\n\n\n  /* MCU Configuration--------------------------------------------------------*/\n\n  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */\n  HAL_Init();\n  ...\n}\n")),Object(a.b)("p",null,"If you want to insert code here in the beginning of the main function,\nyou must put it between USER CODE BEGIN 1 and USER CODE END 1. If you put code\noutside this block it will be deleted by CubeMX."),Object(a.b)("h3",{id:"verification"},"Verification"),Object(a.b)("p",null,"Here are the verification points for this section:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Verification Point"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Rationale"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Project opens in IDE"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"The project was generated correct by CubeMX and can be used as starting point for further board bring up development.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Project compiles"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"The project is setup correctly with drivers and include paths. We can write more code and recompile the project repeatedly.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Breakpoints are hit"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"The project can be debugged and stops at breakpoints. We can examine the project state and investigate errors.")))),Object(a.b)(i.a,{imageSource:"/img/development/board-bring-up/create/cubemx07.png",caption:"The main loop is running continously",noShadow:!1,width:"600",mdxType:"Figure"}),Object(a.b)("p",null,"It is recommended to browse the project in your IDE to get familiar with\nthe structure. Try also to step from SystemInit to main."),Object(a.b)(c.a,{mdxType:"FurtherReading"},Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(l.a,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX User Manual")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"https://www.st.com/en/development-tools/stm32cubeide.html#resource",mdxType:"Link"},"STM32CubeIDE resources")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",mdxType:"Link"},"Massive Open Online Course on STM32CubeMX and STM32Cube")))),Object(a.b)(u.a,{mdxType:"Caution"},"Do not write code outside User Code sections. Such code will be removed when CubeMX generates code."))}g.isMDXComponent=!0},272:function(e,t,n){"use strict";var o=n(5),r=n(0),a=n.n(r),i=n(265),c=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(r.Component);t.a=l},277:function(e,t,n){"use strict";var o=n(5),r=n(0),a=n.n(r),i=n(265),c=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement(i.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:c},this.props.children)},t}(r.Component);t.a=l}}]);