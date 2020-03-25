(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{175:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return g})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return c}));var n=i(1),o=i(9),u=(i(0),i(244)),a=i(245),r={id:"Debugging",title:"Debugging"},g={id:"Development/UIDevelopment/WorkingWithTouchGFX/Debugging",title:"Debugging",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\UIDevelopment\\WorkingWithTouchGFX\\Debugging.mdx",permalink:"/docs/Development/UIDevelopment/WorkingWithTouchGFX/Debugging",sidebar:"docs",previous:{title:"Simulator",permalink:"/docs/Development/UIDevelopment/WorkingWithTouchGFX/simulator"},next:{title:"Startup Window",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/StartupWindow"}},s=[{value:"Target debugging",id:"target-debugging",children:[]},{value:"Simulator debugging",id:"simulator-debugging",children:[]}],d={rightToc:s},l="wrapper";function c(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(u.b)(l,Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"As a TouchGFX application is simply a set of C++ files either generated by TouchGFX Designer, TouchGFX Generator or written by the developer, it can be debugged as any other C++ application. "),Object(u.b)("h2",{id:"target-debugging"},"Target debugging"),Object(u.b)("p",null,"If you are using an IDE like IAR Workbench, Keil uVision or CubeIDE, debugging on target is straight forward using all the available mechanisms in that IDE. TouchGFX projects generated by TouchGFX Generator or directly from an Application Template is ready for debugging using the selected tool chain."),Object(u.b)("p",null,"Board bring up code and TouchGFX AL is naturally executed on your target board and needs to be debugged there. The UI part of your application can be debugged either on target or using the simulator. On target you will typically debug things like performance issues, suchs as animation speed, update frequency and responsiveness. Other UI specific issues can also be debugged on target but is often faster to debug using the simulator."),Object(u.b)("h2",{id:"simulator-debugging"},"Simulator debugging"),Object(u.b)("p",null,"Debugging UI related issues such as animation movements, transitions, element updates, program logic and so on, is in most cases much more efficient to test and debug using the simulator instead of flashing your target each time. "),Object(u.b)("p",null,"TouchGFX applications comes with support for Visual Studio and supplies and maintains a project file for it. Using Visual Studio you are able to run the simulator in debug mode, utilizing all the debug features it offers. You are not restricted to Visual Studio if you want to debug using the simulator. The application can be compiled with GCC and if you are using a different IDE this can most likely be set up to debug a GCC compiled project. However, you need to configure your IDE to do this on your own."),Object(u.b)(a.a,{imageSource:"/img/Development/UIDevelopment/WorkingWithTouchGFX/Debugging/visual_studio.png",caption:"Debugging in Visual Studio",width:"640",mdxType:"Figure"}))}c.isMDXComponent=!0}}]);