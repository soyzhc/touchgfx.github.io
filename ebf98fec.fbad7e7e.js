(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return g}));var a=n(1),r=n(9),o=(n(0),n(261)),i=n(262),l=(n(272),n(274)),c=n(276),s=n(273),b=n(271),h=n(264),p={id:"touchgfx-architecture",title:"Abstraction Layer Architecture"},u={id:"development/touchgfx-hal-development/touchgfx-architecture",title:"Abstraction Layer Architecture",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\development\\touchgfx-hal-development\\touchgfx-architecture.mdx",permalink:"/docs/development/touchgfx-hal-development/touchgfx-architecture",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/development/touchgfx-hal-development/touchgfx-al-development-Introduction"},next:{title:"Generator User Guide",permalink:"/docs/development/touchgfx-hal-development/touchgfx-generator"}},d=[{value:"Abstraction Layer Classes",id:"abstraction-layer-classes",children:[]},{value:"Synchronize TouchGFX Engine main loop with display transfer",id:"synchronize-touchgfx-engine-main-loop-with-display-transfer",children:[{value:"Rendering Done",id:"rendering-done",children:[]},{value:"Display ready",id:"display-ready",children:[]}]},{value:"Report touch and physical button events",id:"report-touch-and-physical-button-events",children:[{value:"Touch Coordinates",id:"touch-coordinates",children:[]},{value:"Other External Events",id:"other-external-events",children:[]}]},{value:"Synchronize framebuffer access",id:"synchronize-framebuffer-access",children:[]},{value:"Report the next available framebuffer area",id:"report-the-next-available-framebuffer-area",children:[]},{value:"Perform Render Operations",id:"perform-render-operations",children:[]},{value:"Handle framebuffer transfer to display",id:"handle-framebuffer-transfer-to-display",children:[{value:"Rendering of area complete",id:"rendering-of-area-complete",children:[]}]}],m={rightToc:d},f="wrapper";function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(f,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As described in the previous section, the TouchGFX AL has a particular set of responsibilities.\nEach responsibility is either implemented in the hardware part of the AL or the operating system part of the AL. The table below summarizes this:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Responsibility"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Operating system or Hardware"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#synchronize-touchgfx-engine-main-loop-with-display-transfer"}),"Synchronize TouchGFX Engine main loop with display transfer")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Operating system and hardware")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#report-touch-and-physical-button-events"}),"Report touch and physical button events")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hardware")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#synchronize-framebuffer-access"}),"Synchronize framebuffer access")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Operating system")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#report-the-next-available-framebuffer-area"}),"Report the next available framebuffer area")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hardware")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#perform-render-operations"}),"Perform render operations")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hardware")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#handle-framebuffer-transfer-to-display"}),"Handle framebuffer transfer to display ")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hardware")))),Object(o.b)("p",null,"Each following subsection highlights what should be done to fulfill\neach of the above responsibilities. Many parts can be copied from existing TouchGFX projects or these projects can be used as reference\nimplementations."),Object(o.b)("p",null,"For custom hardware platforms the TouchGFX Generator,\ninside STM32CubeMX, can generate most of the AL and accompanying TouchGFX\nproject. The remaining parts, that the AL developer must implement\nmanually, is pointed out through code comments and warnings. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/touchgfx-hal-development/touchgfx-generator"}),"Read more"),"\nabout the TouchGFX Generator in the next section."),Object(o.b)("h3",{id:"abstraction-layer-classes"},"Abstraction Layer Classes"),Object(o.b)("p",null,"The hardware part of the AL is accessed by the TouchGFX Engine through the HAL class according to the diagram below."),Object(o.b)("p",null,"The operating system part of the AL is accessed by the TouchGFX Engine through the OSWrappers class."),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/architecture/hal-and-oswrappers.png",noShadow:!0,mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/touchgfx-hal-development/touchgfx-generator"}),"The TouchGFX Generator"),"\ncan generate a concrete subclass of HAL (GeneratedHAL) that reflects MCU configurations from CubeMX.\nTouchGFX Generator can provide a complete ",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers")," implementation for ",Object(o.b)("em",{parentName:"p"},"CMSIS OS V1"),", ",Object(o.b)("em",{parentName:"p"},"CMSIS OS V2")," and ",Object(o.b)("em",{parentName:"p"},"No operating system"),"."),Object(o.b)("h2",{id:"synchronize-touchgfx-engine-main-loop-with-display-transfer"},"Synchronize TouchGFX Engine main loop with display transfer"),Object(o.b)("p",null,"In order to fulfil this responsibility the typical way of a TouchGFX AL is to utilize the engine hook ",Object(o.b)("em",{parentName:"p"},"Rendering done")," and the interrupt ",Object(o.b)("em",{parentName:"p"},"Display Ready"),"."),Object(o.b)("p",null,"The main idea is to block the engine main loop when rendering is done - ensuring that no further frames are produces, and then when the display is ready unblock the main loop again, to continue producing frames."),Object(o.b)("h3",{id:"rendering-done"},"Rendering Done"),Object(o.b)("p",null,'The hook "Rendering done" is in engine code, denoted ',Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers::waitForVsync"),"."),Object(o.b)("p",null,"When implementing this AL method, the AL must block the graphics engine until it is time to render the next frame. The standard method to implement this block is to peform a blocking read from a message queue. Another method is to loop in a spinlock. The HAL developer is free to use any method to implement the block if neither of these methods are feasible."),Object(o.b)("p",null,"When the block is released (and the function returns) TouchGFX will\nstart rendering the next application frame."),Object(o.b)("p",null,"The following code causes the TouchGFX engine to block until an element is added to the queue by another part of the system."),Object(o.b)(s.a,{mdxType:"CodeHeader"},"RTOS_OSWrappers.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"static osMessageQId vsync_queue = 0; //Queue identifier is assigned elsewhere\n\nvoid OSWrappers::waitForVSync()\n{\n    //Wait for next VSYNC to occur, by reading from the queue\n    osMessageGet(vsync_queue, osWaitForever);\n}\n")),Object(o.b)("p",null,"If not using an RTOS, the TouchGFX Generator provides the following\nimplementation for ",Object(o.b)("inlineCode",{parentName:"p"},"waitForVSync")," using a volatile variable."),Object(o.b)(s.a,{mdxType:"CodeHeader"},"NO_OS_OSWrappers.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"static volatile uint8_t vsync_sem = 0;\n\nvoid OSWrappers::waitForVSync()\n{\n    while(!vsync_sem)\n    {\n        // Perform other work while waiting\n        ...\n    }\n}\n")),Object(o.b)(l.a,{mdxType:"Tip"},Object(o.b)("li",null,Object(o.b)("b",null,Object(o.b)("i",null,"While"))," TouchGFX Engine is waiting to produce the next frame other tasks can do important work.")),Object(o.b)("h3",{id:"display-ready"},"Display ready"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"Display ready")," signal to unblock the main loop should come from an\ninterrupt from a display controller, from the display itself or even\nfrom a hardware timer. The source of the signal is dependant on the\ntype of display."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers")," class defines a function for this signal:\n",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers::signalVsync"),". The implementation of the function must\nunblock the main loop by satisfying the wait condition used in\n",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers::waitForVSync"),"."),Object(o.b)("p",null,"Continuing with the above CMSIS RTOS example, we put a message into\nthe message queue. This will unblock the graphics engine."),Object(o.b)(s.a,{mdxType:"CodeHeader"},"RTOS_OSWrappers.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void OSWrappers::signalVSync()\n{\n    if (vsync_queue)\n    {\n        osMessagePut(vsync_queue, dummy, 0);\n    }\n}\n")),Object(o.b)("p",null,"This ",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync")," method must be hardware\nlevel. Typically this is from an interrupt handler for the LTDC\ncontroller, the external signal from the display, or a timer."),Object(o.b)("p",null,"If not using an RTOS, the implementation is also simple. Just assign a\nnon-zero value to break the while-loop:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"NO_OS_OSWrappers.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void OSWrappers::signalVSync()\n{\n    vsync_sem = 1;\n}\n")),Object(o.b)("h2",{id:"report-touch-and-physical-button-events"},"Report touch and physical button events"),Object(o.b)("p",null,"Before rendering a new frame, the TouchGFX Engine collects external input from the ",Object(o.b)("inlineCode",{parentName:"p"},"TouchController")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ButtonController")," interfaces."),Object(o.b)("h3",{id:"touch-coordinates"},"Touch Coordinates"),Object(o.b)("p",null,"Coordinates from the touch controller are translated into click-, drag- and gesture events by the engine and passed to the application. The following code is generated by the TouchGFX Generator:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{1-1,6-6}","{1-1,6-6}":!0}),"static STM32TouchController tc;\nstatic STM32L4DMA dma;\nstatic LCD24bpp display;\nstatic ApplicationFontProvider fontProvider;\nstatic Texts texts;\nstatic TouchGFXHAL hal(dma, display, tc, 390, 390);\n")),Object(o.b)("p",null,"During the TouchGFX Engine render cycle, when collecting input, the engine calls the ",Object(o.b)("inlineCode",{parentName:"p"},"sampleTouch()")," function on the ",Object(o.b)("em",{parentName:"p"},"tc")," object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)\n")),Object(o.b)("p",null,"The implementation, provided by the AL developer, should assign the\nread touch coordinate values to x and y and return whether or not a\ntouch was detected (true or false)."),Object(o.b)(l.a,{mdxType:"Tip"},"The TouchGFX Generator will generate a class that defines the TouchController interface functions as empty. The HAL developer must fill in the implementation."),Object(o.b)("p",null,"There are multiple ways of implementing this function:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"Polling in sampleTouch()"),"\nRead touch status from the hardware touch controller (typically I2C)\nby sending a request and polling for the result. This impacts the\noverall render time of the application as the i2C round-trip is often\nup to 1ms during which the graphics enging is blocked."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"Interrupt based"),"\nAnother possibility is to use interrupts. The read to the I2C\ncontroller is started regularly by a timer or as a response to an\nexternal interrupt from the touch hardware. When the I2C data is\navailable (another interrupt) the data is made available to the\nSTM32TouchController. E.g. through a message queue or global\nvariables. Below is the code generated by the TouchGFX Generator:")),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)\n{\n    if (osMessageQueueGet(mid_MsgQueue, &msg, NULL, 0U) == osOK)\n    {\n        x = msg.x;\n        y = msg.y;\n        return true;\n    }\n    return false;\n}\n")),Object(o.b)("h3",{id:"other-external-events"},"Other External Events"),Object(o.b)("p",null,"The Button Controller interface, ",Object(o.b)("inlineCode",{parentName:"p"},"touchgfx::ButtonController"),", can be\nused to map hardware signals (buttons or other) to events to the the\napplication. The reaction to these events can be configured within\nTouchGFX Designer."),Object(o.b)("p",null,"The use of this interface is similar to the TouchController above,\nexcept that it is not mandatory to have a ButtonController. To use it,\ncreate an instance of a class implementing the ButtonController\ninterface, and pass the instance to HAL:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,9-9,15-15}","{5-5,9-9,15-15}":!0}),"class MyButtonController : public touchgfx::ButtonController\n{\n  bool sample(uint8_t& key)\n  {\n    ... //Sample IO, set key, return true/false\n  }\n};\n\nstatic MyButtonController bc;\n...\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"sample")," method in your ButtonController class is called before\neach frame. If you return true, the key value will be passed to the\n",Object(o.b)("em",{parentName:"p"},"handleKeyEvent")," eventhandler of the current Screen."),Object(o.b)(l.a,{mdxType:"Tip"},'See "Board bringup" for how to configure GPIOs / buttons in CubeMX.'),Object(o.b)(c.a,{mdxType:"Try"},"Use the value assigned to the `key` reference as the trigger for an interaction in TouchGFX Designer."),Object(o.b)(b.a,{mdxType:"FurtherReading"},"See the ",Object(o.b)(h.a,{to:"/docs/development/ui-development/designer-user-guide/interactions-view",mdxType:"Link"},"Interactions")," article for further information on how to use values sampled through the ButtonController as triggers for interactions in the designer."),Object(o.b)("h2",{id:"synchronize-framebuffer-access"},"Synchronize framebuffer access"),Object(o.b)("p",null,"Multiple actors may be interested in accessing the framebuffer memory."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CPU"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Reads and writes pixels during drawing")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DMA2D"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Reads and writes pixels during hardware assisted drawing")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LTDC"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Reads pixels during transfer to display")))),Object(o.b)("p",null,"If you are using a SPI display or similar, another DMA may be reading\npixels for transfer (replacing the LTDC)."),Object(o.b)("p",null,"The TouchGFX Engine synchronizes framebuffer access through the\n",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers")," interface and peripherals (e.g. DMA2D) that also wish to access the framebuffer must do the same. The normal design is to use a semaphore to guard the access to the framebuffer, but other synchronization mechanisms can be used."),Object(o.b)("p",null,"The following table shows a list of functions in the ",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers")," class (OSWrappers.cpp) that can be generated by the TouchGFX Generator or manually by the user."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"takeFrameBufferSemaphore"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called by graphics engine to get exclusive access to the framebuffer. This will block the engine until the DMA2D is done (if running)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryTakeFrameBufferSemaphore"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ensure that the lock is taken. This method does not block, but ensures that the next call to takeFrameBufferSemaphore will block its caller")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"giveFrameBufferSemaphore"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Releases the framebuffer lock")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"giveFrameBufferSemaphoreFromISR"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Releases the framebuffer lock from an interrupt context")))),Object(o.b)(l.a,{mdxType:"Tip"},"The TouchGFX Generator can generate a ChromART driver that synchronizes using the OSWrappers interface as well as implementations for functions that perform this synchronization depending on choice of RTOS."),Object(o.b)("h2",{id:"report-the-next-available-framebuffer-area"},"Report the next available framebuffer area"),Object(o.b)("p",null,"Regardless of rendering strategy TouchGFX Engine must know, in each\ntick, which memory area it should render pixels to. Using single- or\ndouble framebuffer strategies the TouchGFX Engine will write pixel\ndata to a memory area according to the full width, height, and bit\ndepth, of the framebuffer. The graphics engine takes care of swapping\nbetween the two buffers in a double buffer setup."),Object(o.b)("p",null,"It is possible to limit the access to the framebuffer to part of the\nframebuffer. The method ",Object(o.b)("em",{parentName:"p"},"HAL::getTFTCurrentLine()")," can be\nreimplemented in your HAL subclass. Return the line number above which\nit is save for the graphics engine to draw."),Object(o.b)("p",null,"Using a Partial Framebuffer strategy the developer defines one or more\nblocks of memory that TouchGFX Engine will use when rendering. Read\nmore about that\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer"}),"here"),"."),Object(o.b)(l.a,{mdxType:"Tip"},"TouchGFX Generator can provide configurations for all supported framebuffer strategies."),Object(o.b)("h2",{id:"perform-render-operations"},"Perform Render Operations"),Object(o.b)("p",null,"Rendering and displaying graphics are rarely the sole purposes of an\napplication. Other tasks also need to use the cpu. One goal of\nTouchGFX is to draw the user interface using as few cpu cycles as\npossible. The HAL class abstracts the DMA2D found on many STM32\nmicrocontrollers (or other hardware capabilities) and makes this\navailable to the graphics engine."),Object(o.b)("p",null,"When rendering assets such as bitmaps to the framebuffer, the TouchGFX\nEngine checks if the HAL has the capability to 'blit' a portion of- or\nall of the bitmap into to the framebuffer. If so, the drawing\noperation is delegated to the HAL rather than being handled by the\nCPU."),Object(o.b)("p",null,"The engine calls the method ",Object(o.b)("em",{parentName:"p"},"HAL::getBlitCaps()")," to get a description\nof the capabilities of the hardware. You HAL subclass can reimplement\nthis to add the capabilities."),Object(o.b)("p",null,"When the engine is drawing the user interface it will call operations\non the HAL class, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"HAL::blitCopy"),", that queue the operations for\nthe DMA. If the HAL does not report the required capability, the\ngraphics engine will use a software rendering fallback."),Object(o.b)(l.a,{mdxType:"Tip"}," A lot of STM32 MCUs have a ChromART chip which can move data from e.g. external Flash memory into the framebuffer while alpha blending all the pixels.",Object(o.b)("p",null,"For many MCUs, TouchGFX Generator can generate a driver which adds the\ncapability of several 'blit' operations using the ChromART chip.")),Object(o.b)("h2",{id:"handle-framebuffer-transfer-to-display"},"Handle framebuffer transfer to display"),Object(o.b)("p",null,'In order to transfer the framebuffer to the display the hook "Rendering of area complete" is often utilized in a TouchGFX AL.\nThe engine signals the AL once rendering of a part of the framebuffer has been completed. The AL can choose how to transfer this part of the framebuffer to the display.'),Object(o.b)("h3",{id:"rendering-of-area-complete"},"Rendering of area complete"),Object(o.b)("p",null,"In code this hook is the virtual function\n",Object(o.b)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)"),"."),Object(o.b)("p",null,"On STM32 microcontrollers with LTDC controllers we don't need to do\nanything to transmit the framebuffer after every rendering. This\nhappens continuously with a given frequency after the LTDC has been\ninitialized and therefore we can leave the implementation of this method empty."),Object(o.b)("p",null,"For other display types like SPI or 8080 you need to transfer the\nframebuffer manually."),Object(o.b)("p",null,"The implementation of this function allows developers to initiate a\nmanual transfer of that area of the framebuffer to a display with\nGRAM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{9-9}","{9-9}":!0}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& r)\n{\n    HAL::flushFrameBuffer(rect); //call superclass\n\n    //start transfer if not running already!\n    if (!IsTransmittingData())\n    {\n        const uint8_t* pixels = ...; // Calculate pixel address\n        SendFrameBufferRect((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n    else\n    {\n       ... // Queue rect for later or wait here\n    }\n}\n")),Object(o.b)(b.a,{mdxType:"FurtherReading"},"Read through the scenarios for concrete examples of how to support various display interfaces."))}g.isMDXComponent=!0},272:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(265),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)},t}(r.Component);t.a=c},276:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(265),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:l},this.props.children)},t}(r.Component);t.a=c}}]);