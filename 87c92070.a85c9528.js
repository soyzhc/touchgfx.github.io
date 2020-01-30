(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(208)),o=n(211),s=n(212),l=n(209),c={id:"EmbeddedGraphics",title:"Embedded Graphics Primer"},p={id:"BasicConcepts/EmbeddedGraphics",title:"Embedded Graphics Primer",description:"import Link from '@docusaurus/Link';",source:"@site/docs\\BasicConcepts\\EmbeddedGraphics.mdx",permalink:"/docs/BasicConcepts/EmbeddedGraphics",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/Introduction/Installation"},next:{title:"Graphics Engine",permalink:"/docs/BasicConcepts/GraphicsEngine"}},d=[{value:"The four parts",id:"the-four-parts",children:[{value:"MCU",id:"mcu",children:[]},{value:"RAM",id:"ram",children:[]},{value:"Flash",id:"flash",children:[]},{value:"Display",id:"display",children:[]}]},{value:"Performance",id:"performance",children:[{value:"General strategy",id:"general-strategy",children:[]},{value:"Setup specific strategy",id:"setup-specific-strategy",children:[]}]}],h={rightToc:d},u="wrapper";function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Graphics is ultimately about getting something to show up on a physical display. Fast.")),Object(i.b)("p",null,"The term embedded graphics means many things."),Object(i.b)("p",null,"First of, the word embedded means different things to different people.\nTo some an embedded system means a very dependable old 8 bit microcontroller, with no operating system, and virtually no RAM, ROM or GPIO.\nTo others it might mean a modern day smart phone with gigabytes of everything.  "),Object(i.b)("p",null,"Secondly, the word graphics has many interpretations.\nTo some it means drawing your own pixels in your favourite painting program.\nTo others again it means the 3D rendering software running on your gaming console."),Object(i.b)("p",null,"To TouchGFX embedded systems mean any system based on an STM32 microcontroller.\nAnd graphics means interactive applications running at 60 frames per second."),Object(i.b)("h2",{id:"the-four-parts"},"The four parts"),Object(i.b)("p",null,"In order to do graphics applications on such setups, we consider four main components directly involved.\nNaturally many more components might be present in an embedded system, but these are less related to the display of graphics."),Object(i.b)(l.a,{imageSource:"/img/BasicConcepts/four_parts.svg",caption:"MCU, RAM, Flash and display",noShadow:"true",width:480,mdxType:"Figure"}),Object(i.b)("p",null,"In short, TouchGFX, using the MCU, creates and updates an image in RAM, by assembling parts from flash. The assembled image is transferred to the display. This process is repeated as often as possible and needed."),Object(i.b)("h3",{id:"mcu"},"MCU"),Object(i.b)("p",null,"The MCU is doing all the heavy lifting in this process.\nIt reads images in flash and writes them to RAM.\nIt calculates the resulting colors when merging a semi-transparent red text onto an image and saves these to RAM.\nIt renders and stores all the pixels of a circle to RAM.\nAnd so on."),Object(i.b)("p",null,"STM32 MCUs have specific capabilities that help in the realization of graphics.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/HardwareSelection/HardwareComponents/HardwareSelectionMCU"}),"MCU")," for details on different MCUs. "),Object(i.b)("h3",{id:"ram"},"RAM"),Object(i.b)("p",null,"RAM is where the calculated image is stored.\nThe RAM is being read and written by the MCU.\nAnd read again when the resulting image is transferred to the display."),Object(i.b)("p",null,"In many cases the RAM is internal to the MCU.\nIn cases where it is not feasible to have the resulting image in internal RAM, external RAM can be added to the setup."),Object(i.b)("h3",{id:"flash"},"Flash"),Object(i.b)("p",null,"Flash is where all static data is placed. Images, fonts and texts.\nThe flash is read by the MCU and the contents written to or combined with the RAM."),Object(i.b)("p",null,"Most often an external flash is added to the setup, as the internal flash is seldomly large enough to hold all graphics assets."),Object(i.b)("p",null,"Ideally the flash is memory mapped, such that pixels can be read directly from the flash and written to RAM. Otherwise, the contents of the flash can be buffered in RAM and then read from there instead."),Object(i.b)("h3",{id:"display"},"Display"),Object(i.b)("p",null,"The display is where the image is actually displayed to the eyes of a person."),Object(i.b)("p",null,"The image stored in RAM is sent by the MCU to the display at regular intervals. "),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"In order to achieve smooth animations on this setup and ultimately on the display, some care must be taken when doing embedded graphics."),Object(i.b)("h3",{id:"general-strategy"},"General strategy"),Object(i.b)("p",null,"A few general points to always consider:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do not spend time drawing things that do not change"),Object(i.b)("li",{parentName:"ul"},"Transfer as little as possible from flash to RAM"),Object(i.b)("li",{parentName:"ul"},"Transfer as little as possible from RAM to display"),Object(i.b)("li",{parentName:"ul"},"Find the right balance between quality of graphics and speed of animations"),Object(i.b)("li",{parentName:"ul"},"Utilize hardware capabilities")),Object(i.b)("p",null,"The TouchGFX Engine helps address all of these points, but care must be taken by the developer as well."),Object(i.b)("h3",{id:"setup-specific-strategy"},"Setup specific strategy"),Object(i.b)("p",null,"The vast amount of possible embedded setups means that what can be realized on a specific setup is very different to what is possible on another setup."),Object(i.b)("p",null,"A ballpark'ish overview of possible setups are"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"STM32 MCU",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"50 to 500 MHz clock rate"),Object(i.b)("li",{parentName:"ul"},"A possible range of graphics related IP's: Chrom-ART, Chrom-GRC, JPEG codec, ..."))),Object(i.b)("li",{parentName:"ul"},"RAM",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"0 to 1 MB internal"),Object(i.b)("li",{parentName:"ul"},"0 to 100 MB external"))),Object(i.b)("li",{parentName:"ul"},"Flash",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"0 to 1 MB internal"),Object(i.b)("li",{parentName:"ul"},"0 to 1 GB external"))),Object(i.b)("li",{parentName:"ul"},"Display",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"1 to 24 bit colors"),Object(i.b)("li",{parentName:"ul"},"100x100 to 1000x1000 pixels")))),Object(i.b)("p",null,"It is evident that the UI applications that are realizable on one possible setup, might not be nowhere near realizable on another. Therefore great care must be taken to align the desired UI application with the actual setup."),Object(i.b)("p",null,"TouchGFX is designed from the ground up for these setups, focusing on making the most of the STM32 MCU capabilities and minimizing the amount of RAM and flash needed. "),Object(i.b)(s.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,"See ",Object(i.b)(o.a,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs")," for available STM32 microcontrollers."),Object(i.b)("li",null,"See ",Object(i.b)(o.a,{to:"/docs/Development/HardwareSelection/HardwareComponents/HardwareSelectionDisplay",mdxType:"Link"},"Display")," for details on the possible display choices."),Object(i.b)("li",null,"See ",Object(i.b)(o.a,{to:"/docs/Development/HardwareSelection/HardwareComponents/HardwareSelectionMCU",mdxType:"Link"},"MCU")," for details on the possible MCU choices."),Object(i.b)("li",null,"TODO find the right links, either to main section or flash and ram also.")))}b.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,b=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return n?r.a.createElement(b,s({ref:t},c,{components:n})):r.a.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=o},210:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(r.Component);t.a=o},211:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),o=n(34),s=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,l=e.href,c=n||l,p=s.test(c),d=Object(r.useRef)(!1),h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(r.useEffect)((function(){return!h&&p&&window.docusaurus.prefetch(c),function(){h&&t&&t.disconnect()}}),[c,h,p]),c&&p?i.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(c),d.current=!0)},innerRef:function(e){var n,a;h&&e&&p&&(n=e,a=function(){window.docusaurus.prefetch(c)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:c})):i.a.createElement("a",Object(a.a)({},e,{href:c}))}},212:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=n(210),s=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:s},this.props.children)},t}(r.Component);t.a=l}}]);