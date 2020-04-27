(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{379:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return m})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return f}));var a=t(1),i=t(9),r=(t(0),t(508)),o=t(511),c=(t(518),t(514)),s=(t(516),t(510)),l=t(513),p=t(536),h=t(522),m={id:"achieving-better-performance-with-cacheable-container",title:"Achieving Better Performance with CacheableContainer"},d={id:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",title:"Achieving Better Performance with CacheableContainer",description:"import Property from '@site/components/Property'",source:"@site/docs\\development\\ui-development\\scenarios\\achieving-better-performance-with-cacheable-container.mdx",permalink:"/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",sidebar:"docs",previous:{title:"General UI Component Performance",permalink:"/docs/development/ui-development/ui-components/general-ui-component-performance"},next:{title:"Loading Images at Runtime",permalink:"/docs/development/ui-development/scenarios/loading-images-at-runtime"}},u=[{value:"Performance Impact",id:"performance-impact",children:[]},{value:"Test Application",id:"test-application",children:[]},{value:"Performance of Redrawing Complex Containers",id:"performance-of-redrawing-complex-containers",children:[]},{value:"Improving Performance Through Caching",id:"improving-performance-through-caching",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],b={rightToc:u},g="wrapper";function f(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(g,Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section you will see how to achieve better performance in\nsome animation scenarios by using RAM to save some reusable drawings."),Object(r.b)("p",null,"When moving widgets in your application (like Image or TextArea),\neither through dragging or animation, TouchGFX needs to redraw these\nwidgets in their new positions in every frame, while also in most cases\nredraw part of the background that was previously covered by these\nwidgets."),Object(r.b)("p",null,"When these widgets are computationally complex such as the\nTextureMapper widget, Shapes, and also large transparent\nImages it is hard for the MCU to render effeciently, as these\nare rendered without hardware acceleration.\nThis results in a screen redraw that takes many milliseconds and\nimpacts the performance of the application."),Object(r.b)("p",null,"In this we will now see how to use the CacheableContainer to speed up\nanimations that involve computationally complex elements by avoiding\ncostly redrawing.  While measurements in this article were performed\nusing an STM32F429Discovery board, the CacheableContainer technique\napplies generally to other hardware platforms. Some available RAM is\nrequired for creation of a bitmap cache."),Object(r.b)(c.a,{mdxType:"FurtherReading"},"Read also about ",Object(r.b)(s.a,{to:"/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"Dynamic Bitmaps"),"."),Object(r.b)("h2",{id:"performance-impact"},"Performance Impact"),Object(r.b)("p",null,"Due to the performance implications of moving computationally\nexpensive widgets with the MCU, an animation that evolves in many\nsmall steps will appear slow and sluggish due to a high render time\nfor each frame.\nProgramming the animation to complete faster (in time) will cause\nindividual steps to be large, and the animation will not appear smooth\nto the user."),Object(r.b)("p",null,"The following is an example running on an STM32F429-DISCO board\n(240x320), where a fullscreen Container is moved up vertically, while\na similar Container is moved in from the bottom."),Object(r.b)("p",null,"In the video below, the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/buttons/toggle-button"}),"ToggleButton"),"\nswitches between CacheableContainer being enabled and disabled. The performance\ndifference is clearly visible."),Object(r.b)(p.a,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",mdxType:"Video"}),Object(r.b)("p",null,"The two Containers that are moved each consist of a background\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/shapes/box"}),"Box"),", a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/miscellaneous/text-area"}),"TextArea"),",\nand a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/images/texture-mapper"}),"TextureMapper"),". The\nTextureMapper is configured to use the bilinear rendering algorithm\nand a global alpha of 174, making it very expensive to draw. The\nrendering time for the whole screen is around 100 ms on the\nSTM32F429-DISCO board."),Object(r.b)("h2",{id:"test-application"},"Test Application"),Object(r.b)("p",null,"In order to move the two elements relative to each other, they are put\nin a parent Container named ",Object(r.b)("inlineCode",{parentName:"p"},"masterContainer")," which is given twice the height of either child Container, giving it a\nsize of ",Object(r.b)("inlineCode",{parentName:"p"},"240 x 640 (2*320)"),". By declaring the container as a move\nanimator in TouchGFX Designer, it will be able to receive application\nticks and animate over time during which performance can be measured."),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview.png",caption:"CacheableContainer test application overview",mdxType:"Figure"}),Object(r.b)("p",null,"The upper container named ",Object(r.b)("inlineCode",{parentName:"p"},"container1")," is placed at position x=0, y=0. The\nlower container named ",Object(r.b)("inlineCode",{parentName:"p"},"container2")," is placed at position x=0, y=320 directly\nbelow container1 in the parent ",Object(r.b)("inlineCode",{parentName:"p"},"masterContainer"),"."),Object(r.b)("p",null,"Since ",Object(r.b)("inlineCode",{parentName:"p"},"container1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"container2")," are placed in the ",Object(r.b)("inlineCode",{parentName:"p"},"masterContainer"),", the\ntwo elements will move together when we move the ",Object(r.b)("inlineCode",{parentName:"p"},"masterContainer"),". For example, if\nwe move the ",Object(r.b)("inlineCode",{parentName:"p"},"masterContainer")," to position x=0, y=-320, ",Object(r.b)("inlineCode",{parentName:"p"},"container1"),"\nwill be invisible, but ",Object(r.b)("inlineCode",{parentName:"p"},"container2")," will be fully visible.\nThe animation between these two states can be created using an\ninteraction in TouchGFX Designer."),Object(r.b)("p",null,"The code below will move the ",Object(r.b)("inlineCode",{parentName:"p"},"masterContainer")," up if it is down, and\ndown if it is already up. For simplicity, the code is inserted into the\n",Object(r.b)("inlineCode",{parentName:"p"},"handleClickEvent")," eventhandler of the view, and is therefore executed\nwhenever the user touches anywhere on the screen (below the ToggleButton):"),Object(r.b)(l.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{9-12}","{9-12}":!0}),"void Screen1View::handleClickEvent(const ClickEvent& evt)\n{\n    //Forward event to base View (for the ToggleButton to work)\n    View::handleClickEvent(evt);\n    //If touch is released and y > 50 (below the ToggleButton), move masterContainer\n    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)\n    {\n        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;\n        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,\n                            20 /* ticks */,\n                            EasingEquations::cubicEaseInOut,\n                            EasingEquations::cubicEaseInOut);\n    }\n}\n")),Object(r.b)("h2",{id:"performance-of-redrawing-complex-containers"},"Performance of Redrawing Complex Containers"),Object(r.b)("p",null,"As mentioned, the render time for one frame is around 100 ms when the\nMCU has to redraw the expensive TextureMapper at each small step of\nthe animation. This gives us 10 frames per second (fps). The whole\nanimation is 20 frames and will therefore take around two seconds."),Object(r.b)("p",null,"On the STM32F429-DISCO evaluation kit, the rendering time is available\nas a digital signal on GPIO G14. The VSYNC signal is available on\nG13. The GPIO configuration is set up in the ",Object(r.b)("inlineCode",{parentName:"p"},"GPIO.cpp")," file."),Object(r.b)("p",null,"The following image is a measurement of VSYNC and RENDER_TIME for the\napplication when moving the ",Object(r.b)("inlineCode",{parentName:"p"},"masterContainer")," upwards:"),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.png",caption:"Saleae Logic Software vsync and render time measurement",mdxType:"Figure"}),Object(r.b)("p",null,"The rendering time is the first signal (active low). We can see that\nthe rendering time for the first frame in the move animation is 99.29\nms."),Object(r.b)("p",null,"The lower signal is the VSYNC, which transitions high to low on every\nframe when pixels are clocked out to the display. We can see on the\nmeasurement above that drawing a single frame covers the time for 7\nframes on the display. On the 8th VSYNC signal the rendering of the\nnext frame starts. During the rendering, the display is repeatedly\nshowing the previously drawn frame (in the other framebuffer)."),Object(r.b)("h2",{id:"improving-performance-through-caching"},"Improving Performance Through Caching"),Object(r.b)("p",null,"We can improve the performance of the above move animation by caching\nthe rendering of the container to memory. After doing that we can\nsimply move the pixels located in that memory (using DMA) to the\nframebuffer, rather than redrawing a complex widget using the MCU.\nEven if an application could achieve 60 frames per second using the\nMCU alone it would be busy (perhaps with 100% MCU load) making the same\ncalculations repeatedly rather than doing something more important."),Object(r.b)("p",null,'This "in-memory-image" of the Container can now be shown on the screen\nat different places, instead of re-rendering the Container.'),Object(r.b)("p",null,"The first thing to do is to enable caching through TouchGFX Designer by checking the ",Object(r.b)(h.a,{name:"Cacheable",mdxType:"Property"})," property on the two Containers ",Object(r.b)("inlineCode",{parentName:"p"},"container1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"container2"),":"),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer.png",caption:"CacheableContainer option on Container widget",mdxType:"Figure"}),Object(r.b)("p",null,"The next step is to create two dynamic bitmaps in RAM that the Containers can be cached into."),Object(r.b)("p",null,"Decide on an address in RAM where the bitmap cache should be located. In this particular example, we placed it in SDRAM (starts at address 0xd0000000 on an STM32F429) just after the framebuffers."),Object(r.b)("p",null,"For the Windows simulator, the cache is allocated in a global variable:"),Object(r.b)(l.a,{mdxType:"CodeHeader"},"Screen1View.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n    uint32_t sdramBuffer[8*1024*1024/4];\n    uint16_t* sdram = (uint16_t*)sdramBuffer;\n#else\n    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);\n#endif\n")),Object(r.b)("p",null,"Initialize the bitmap cache and create two dynamic bitmaps for caching:"),Object(r.b)(l.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{2-2}","{2-2}":!0}),"//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb\nBitmap::setCache(sdram, 320*1024, 2); //320Kb cache\ndynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\ndynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\n")),Object(r.b)("p",null,"Assign the dynamic bitmaps to the Containers and set them in caching mode:"),Object(r.b)(l.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"//Assign the bitmaps to the CacheableContainers\ncontainer1.setCacheBitmap(dynamicBitmap1);\ncontainer2.setCacheBitmap(dynamicBitmap2);\n\n//Enable caching\ncontainer1.enableCachedMode(true);\ncontainer2.enableCachedMode(true);\n\n//Finally update the cached bitmaps\ncontainer1.updateCache();\ncontainer2.updateCache();\n")),Object(r.b)("p",null,"Calls to ",Object(r.b)("inlineCode",{parentName:"p"},"Container::updateCache()")," will render the two Containers\ninto their respective bitmaps. Call this method whenever an updated\nstate of the containers is needed. This must be handled in application\ncode by the developer."),Object(r.b)("p",null,"With caching enabled for ",Object(r.b)("inlineCode",{parentName:"p"},"container1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"container2"),", performance\nmeasurements now show a factor 20 improvement in render time from\n~99ms to ~5ms meaning we can easily render in 60 frames per second\ncompleting the entire animation within 20 frames."),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.png",caption:"Saleae Logic Software vsync and render time measurement",mdxType:"Figure"}),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"Using CacheableContainer with DynamicBitmap when animating (frequent\nmoves) can improve the render time dramatically when the subject is\ncomputationally complex and does not change between animation\nsteps. In the event that the cache must update (e.g. a watch face when\nthe time is updated) the contents of the cache can be recomputed at\ncertain points during the animation controlled by the application."),Object(r.b)(c.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,Object(r.b)(s.a,{to:"/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"Dynamic Bitmaps")),Object(r.b)("li",null,Object(r.b)(s.a,{to:"/docs/development/ui-development/scenarios/loading-images-at-runtime",mdxType:"Link"},"Dynamic Bitmaps: Load images at runtime"))))}f.isMDXComponent=!0},509:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children)))},n}(i.Component);n.a=o},511:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){var e=this.props.noShadow||!1,n=this.props.width,t=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:n,height:t,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:n,height:t,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},n}(i.Component);n.a=o},513:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement("div",{class:"code-header"},r.a.createElement("div",null,r.a.createElement("h5",null,this.props.children)))},n}(i.Component);n.a=o},514:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=t(509),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),s=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},n}(i.Component);n.a=s},516:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},n}(i.Component);n.a=o},518:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=t(509),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),s=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},n}(i.Component);n.a=s},522:function(e,n,t){"use strict";t(523);var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement("i",null,this.props.name)},n}(i.Component);n.a=o},523:function(e,n,t){var a=t(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||t(10)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},536:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement("p",null,r.a.createElement("div",{class:"videoWrapper"},r.a.createElement("video",{controls:!0},r.a.createElement("source",{src:this.props.url,type:"video/mp4"}))))},n}(i.Component);n.a=o}}]);