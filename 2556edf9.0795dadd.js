(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(508)),i=n(513),c=(n(519),{id:"touchgfx-al-development-introduction",title:"Introduction"}),l={id:"development/touchgfx-hal-development/touchgfx-al-development-introduction",title:"Introduction",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\development\\touchgfx-hal-development\\touchgfx-al-development-introduction.mdx",permalink:"/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",sidebar:"docs",previous:{title:"11. Flash Loader",permalink:"/docs/development/board-bring-up/how-to/11-flash-loader"},next:{title:"Abstraction Layer Architecture",permalink:"/docs/development/touchgfx-hal-development/touchgfx-architecture"}},s=[{value:"Responsibilities of the Abstraction Layer",id:"responsibilities-of-the-abstraction-layer",children:[]},{value:"Example setup: Two framebuffers - MCU with LTDC",id:"example-setup-two-framebuffers---mcu-with-ltdc",children:[]}],h={rightToc:s},p="wrapper";function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/activities-selected-002.png",caption:"Project activity",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)("p",null,"The TouchGFX Abstraction Layer (AL), in a TouchGFX application, is the software component that sits between the Board Initialization Code, developed during the Board Bring-Up phase, and the TouchGFX Engine. Its main task is to tie together the Engine with the underlying hardware and operating system. This is done by abstracting the specifics of the underlying hardware and OS such that it can be treated in a unified way by the Engine."),Object(o.b)("p",null,"The AL consists of two different parts, the Hardware Abstraction Layer (HAL) and the Operating System Abstraction Layer (OSAL)."),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/components-selected-002.png",caption:"Project component",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)("p",null,"In this section you will get a general introduction to the principles and responsibilities of the abstraction layer and how it interacts with the TouchGFX Engine. Details on how this is achieved for particular hardware is described in the following sections."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/development/touchgfx-hal-development/touchgfx-architecture"}),"Abstraction Layer Architecture")," details the architecture of the AL and shows you how to implement each of the interaction points, called hooks, between the TouchGFX Engine and the AL."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/development/touchgfx-hal-development/touchgfx-generator"}),"Generator User Guide")," shows you how to use TouchGFX Generator to create the basis for your AL implementation as well as details on more complex issues."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/development/touchgfx-hal-development/scenarios/scenarios-introduction"}),"Scenarios")," gives you concrete detailed examples on how to create ALs for specific hardware setups.")),Object(o.b)("h2",{id:"responsibilities-of-the-abstraction-layer"},"Responsibilities of the Abstraction Layer"),Object(o.b)("p",null,"As explaned in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/basic-concepts/rendering"}),"Main Loop")," section in the Basic Concepts chapter, the TouchGFX Engine has a main loop that performs three basic steps."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Collect input (Touch coordinates, Buttons)"),Object(o.b)("li",{parentName:"ol"},"Update the Scene Model"),Object(o.b)("li",{parentName:"ol"},"Render the Scene Model to the Framebuffer")),Object(o.b)("p",null,"These three steps ensure the main responsibility of the TouchGFX engine, which is to update the framebuffer to reflect the current state of the application."),Object(o.b)("p",null,"The actual transfer of framebuffer data to the display as well as the collection of external input is not directly handled by the engine, but instead delegated from the engine to the TouchGFX AL."),Object(o.b)("p",null,"The main loop will continuously update the framebuffer(s) over and over again. This process must be synchronized with the actual update frequency and readyness of the display to ensure that all frames will be transferred and displayed correctly on the display. If no synchronization takes place the main loop will continuously update and potentionally overwrite the framebuffer(s) before it has been transferred. This synchronization is the responsibility of the AL."),Object(o.b)("p",null,"The TouchGFX AL also has the responsibility of controlling the framebuffer memory area and the access to it. This means that all accesses of the framebuffer will go through the AL."),Object(o.b)("p",null,"To detail, the responsibilities of the TouchGFX AL are:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Responsibility"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Synchronize TouchGFX Engine main loop with display transfer"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When the next frame has been calculated and rendered in the available framebuffer, the engine main loop must be halted to make sure that it does not overwrite the newly assembled framebuffer before it has been transferred to the display.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Report touch and physical button events"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sample if a touch event has occurred and the corresponding coordinates hereof. Sample whether or not any physical button or similar has been activated. Report these events to the engine. ",Object(o.b)("br",null),"Note that other external events are to be propageted to the TouchGFX application through a different mechanism. Read more on this in the section on ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/development/ui-development/touchgfx-engine-features/backend-communication"}),"backend communication"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Synchronize framebuffer access"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The framebuffer memory is the responsibility of the TouchGFX AL and since it can be accessed by different actors, like the main loop thread and the DMA, TouchGFX AL must offer a way to protect this memory.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Report the next available framebuffer area"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The AL must be able to answer which part of the current framebuffer can be updated next. In a standard two framebuffer setup, this will always be the complete framebuffer, since in that case you always have one entire framebuffer dedicated for rendering and one for transferring to the display. In a one or partial framebuffer setup this is more complex.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Perform render operations"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"While rendering the scene model, the engine main loop will ask the AL to render parts hereof. A specific TouchGFX AL implementation will utilize the underlying hardware to render graphics primitives. One example is rendering bitmaps on MCUs with the Chrom-ART graphics accelarator. TouchGFX comes builtin with optimized rendering methods for all available platforms, so no need to customize this.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Handle framebuffer transfer to display"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The engine informs the AL which part of which framebuffer must be transferred. The AL should initiate this transfer making sure that the pixels eventually ends up on the physical display.")))),Object(o.b)("p",null,"Since TouchGFX AL is a passive software module, not having its own thread or similar, it must perform its actions through certain hooks (functions) called from the TouchGFX Engine main loop or through interrupts."),Object(o.b)("p",null,"The available set of hooks and interrupts are depicted below."),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.png",caption:"Available hooks and interrupts",noShadow:!0,mdxType:"Figure"}),Object(o.b)("p",null,"It is up to the AL developer to implement these hooks so that the responsibilities of the AL are covered given the underlying hardware and operating system. If the AL developer needs other means to support the  responsibilities, he can setup interrupts to activate at certain points. Examples of this is LTDC vertical synchronization interrupt and a hardware timer. The ",Object(o.b)("em",{parentName:"p"},"I1: Display ready")," interrupt is an example of a vertical synchronization interrupt. Note that the setup of these interrupts is considered a part of the AL development."),Object(o.b)("h2",{id:"example-setup-two-framebuffers---mcu-with-ltdc"},"Example setup: Two framebuffers - MCU with LTDC"),Object(o.b)("p",null,"One common setup is having two framebuffers with an MCU with LTDC. The AL actions for each hook will in this setup most often be as follows."),Object(o.b)("p",null,"Setup the AL to react to the LTDC VSYNC interrupt such that I1 is executed each time the display is ready to receive a new frame. This is used to synchronize the main loop with the display."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Hooks and Interrupts"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Actions"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"I1: Display ready"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Setup the LTDC VSYNC interrupt to trigger this.",Object(o.b)("br",null)," Unblock the main loop and initiate framebuffer transfer of the framebuffer prepared in previous frame")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"H1: Report touch and physical button events"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return any information on touch events or physical button clicks")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"H2: Get next available framebuffer area"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Using the double buffer setup simply return the entire framebuffer area of the framebuffer not currently being transferred to the display")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"H3: Perform render operations"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Depends on the capabilities of the MCU. Perform the hardware assisted render operations and software fallback for the rest")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"H4: Rendering of area complete"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No action")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"H5: Rendering done"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Block the main loop")))),Object(o.b)("p",null,"This setup gives the following execution flow:"),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-actions-00.png",caption:"Execution flow in setup with two framebuffers and an MCU with LTDC",noShadow:!0,mdxType:"Figure"}),Object(o.b)("p",null,"This describes the overall design of the AL for this setup. The following sections goes into depth on how to implement Abstraction Layers."))}b.isMDXComponent=!0},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),h=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=h(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=h(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[b]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},512:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=i},513:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=i},519:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(512),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(r.Component);t.a=l}}]);