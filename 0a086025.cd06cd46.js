(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(508)),i=n(513),c=n(515),l=n(509),s=n(519),p={id:"hardware-selection-mcu",title:"MCU"},d={id:"development/hardware-selection/hardware-components/hardware-selection-mcu",title:"MCU",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\development\\hardware-selection\\hardware-components\\hardware-selection-mcu.mdx",permalink:"/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",sidebar:"docs",previous:{title:"Preliminary Considerations",permalink:"/docs/development/hardware-selection/preliminary-considerations"},next:{title:"Display",permalink:"/docs/development/hardware-selection/hardware-components/hardware-selection-display"}},h=[{value:"Frequency",id:"frequency",children:[{value:"Graphic Subsystem Frequency",id:"graphic-subsystem-frequency",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Embedded Hardware Acceleration Features",id:"embedded-hardware-acceleration-features",children:[{value:"Chrom-ART",id:"chrom-art",children:[]},{value:"JPEG Hardware Codec",id:"jpeg-hardware-codec",children:[]},{value:"Chrom-GRC",id:"chrom-grc",children:[]}]},{value:"Internal Flash",id:"internal-flash",children:[]},{value:"Internal RAM",id:"internal-ram",children:[]},{value:"LCD Controller",id:"lcd-controller",children:[]},{value:"Packages &amp; I/O",id:"packages--io",children:[]},{value:"Memory Interfacing",id:"memory-interfacing",children:[{value:"Flexible Memory Controller &amp; Flexible Static Memory Controller (FMC/FSMC)",id:"flexible-memory-controller--flexible-static-memory-controller-fmcfsmc",children:[]},{value:"Serial Memory Interface",id:"serial-memory-interface",children:[]},{value:"STM32 Value Line products",id:"stm32-value-line-products",children:[]}]},{value:"Cortex\xae-M Cores",id:"cortex-m-cores",children:[{value:"Cortex\xae-M0+",id:"cortex-m0",children:[]},{value:"Cortex\xae-M4",id:"cortex-m4",children:[]},{value:"Cortex\xae-M7",id:"cortex-m7",children:[]},{value:"Feature overview",id:"feature-overview",children:[]},{value:"Level 1 cache:",id:"level-1-cache",children:[]},{value:"Dual core",id:"dual-core",children:[]}]},{value:"Bus architecture",id:"bus-architecture",children:[]},{value:"Price",id:"price",children:[]}],b={rightToc:h},m="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(m,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The microcontroller unit (MCU) is at the core of any embedded solution and there are a wide variety of options in both costs and features. "),Object(o.b)("p",null,"When selecting an MCU for graphics, one should consider the supported display interfaces, the MCU package, size and the achievable graphics performance which depends on two main points:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Image composition")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The availability of graphics accelerators integrated in the MCU."),Object(o.b)("li",{parentName:"ul"},"The availability of cache memory in the system.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Memory access and bandwidth")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The clock frequency and the subsystem bus frequency."),Object(o.b)("li",{parentName:"ul"},"The access to the internal flash and RAM memories.")),Object(o.b)("p",null,"It is also important to consider the other aspects of the application (motor control, wireless, etc.), which are running in addition to the graphics. These can influence the choice of MCU."),Object(o.b)("p",null,"This page will go through the different MCU options and which parameters should be considered when deciding on the STM32 MCU you should select for your GUI driven application."),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/mcu/mcu-portfolio-graphics.png",caption:"STM32 MCU",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)(c.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,"For a more complete overview of all product lines, peripherals, prices etc., ",Object(o.b)(l.a,{to:"https://www.st.com/en/development-tools/st-mcu-finder.html",mdxType:"Link"},"the ST MCU Finder is available here"),".")),Object(o.b)("h2",{id:"frequency"},"Frequency"),Object(o.b)("p",null,"The core frequency has a major impact on the performance of a graphical application in terms of screen refresh, fluidity of screens and animations."),Object(o.b)("p",null,"It impacts the amount of data that can be transferred from an internal or external memory to the display framebuffer and also the calculations and animations possible."),Object(o.b)("p",null,"The higher the frequency, the more data it is possible to transfer within a given timeframe and the more complex animations can be made."),Object(o.b)("p",null,"The core frequencies of the STM32 products is up to ",Object(o.b)("strong",{parentName:"p"},"480MHz"),"."),Object(o.b)(s.a,{mdxType:"Note"},"The higher the frequency, the greater the power consumption."),Object(o.b)("h3",{id:"graphic-subsystem-frequency"},"Graphic Subsystem Frequency"),Object(o.b)("p",null,"It is important to differentiate the core CPU frequency from the graphic subsystem frequency. The graphic subsystem frequency includes the frequency of the internal busses, the frequency of the graphics accelerator as well as the access speed of the internal and external memories. "),Object(o.b)("p",null,"The graphic subsystem frequency also has a major impact on the overall graphic performance."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"An example of assessing the theoretical core and subsystem performance when running from internal RAM on an STM32H7 can be seen next:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The CPU core is running at ",Object(o.b)("strong",{parentName:"li"},"480MHz"),". "),Object(o.b)("li",{parentName:"ul"},"The 64-bit AXI bus frequency at ",Object(o.b)("strong",{parentName:"li"},"240MHz"),". "),Object(o.b)("li",{parentName:"ul"},"The LCD-TFT display controller (LTDC) uses the 64-bit AXI bus, and does 8 transfers in 10 cycles. "),Object(o.b)("li",{parentName:"ul"},"The internal RAM poses no significant latency, i.e. 0 wait states.")),Object(o.b)("p",null,"The bandwidth of the internal RAM when accessed by the LTDC peripheral is then:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Bandwidth = 240 MHz x 8/10 x 8 bytes = ",Object(o.b)("strong",{parentName:"li"},"1.536Mbytes/s"),".")),Object(o.b)("p",null,"With such bandwidth, the internal RAM can ensure 1000 frames per second (fps) for 800x480 resolution at 32bpp color depth. Typically one would limit the transfer to the display (by adjusting pixel clock, porches, ...) to 60 frames per second, so the bandwidth of the LTDC and internal RAM is not a bottleneck."),Object(o.b)("h2",{id:"embedded-hardware-acceleration-features"},"Embedded Hardware Acceleration Features"),Object(o.b)("p",null,"Different STM32 MCUs have different built in hardware acceleration features that help in achieving high performing graphics applications."),Object(o.b)("h3",{id:"chrom-art"},"Chrom-ART"),Object(o.b)("p",null,"Chrom-ART is an advanced DMA that aids in doing graphical operations. It is also known as DMA2D."),Object(o.b)("p",null,"The Chrom-ART accelerator, integrated in many STM32 platforms, is able to manipulate and transfer images without CPU load. It has the capability to accelerate the majority of the graphic operations, such as color filling, image copying, blending, and pixel format conversions."),Object(o.b)("p",null,"The Chrom-ART accelerator is able to perform blending of two layers and convert the initial pixel formats to the desired output pixel format and transfer the result to the memory destination in only one operation. "),Object(o.b)("p",null,"The Chrom-ART accelerator also supports color formats with color look up tables (CLUT). This can help with saving memory."),Object(o.b)("p",null,"Example of an application running on the ",Object(o.b)("strong",{parentName:"p"},"STM32F496-EVAL")," board where the CPU load is decreased from ",Object(o.b)("strong",{parentName:"p"},"82%")," to ",Object(o.b)("strong",{parentName:"p"},"4%")," when the Chrom-ART is enabled:"),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/mcu/birdeatcoin.gif",caption:"Bird-Eat-Coin Chrom-ART example",mdxType:"Figure"}),Object(o.b)("p",null,"In addition, the capability to convert from ",Object(o.b)("strong",{parentName:"p"},"YCbCr")," format to ",Object(o.b)("strong",{parentName:"p"},"RGB")," format is added with STM32H7 products to the Chrom-ART peripheral.\nThis feature, combined with the JPEG hardware codec can offload the CPU when encoding and decoding JPEG images.   "),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/mcu/chrom-art-acceleration.png",caption:"YCbCr to RGB Hardware performance",noShadow:!0,width:"500",mdxType:"Figure"}),Object(o.b)("p",null,"The Chrom-ART accelerator, with the features listed above, offers a huge advantage for graphical applications.\nIf available in the chosen MCU, TouchGFX handles all Chrom-ART features and redirects all possible drawing operations to the Chrom-ART peripheral instead of the CPU."),Object(o.b)("p",null,"The Chrom-ART peripheral is available with high performance STM32 families. "),Object(o.b)(c.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,"Refer to AN4943 application note for more information:, ",Object(o.b)(l.a,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/17/82/73/f8/b8/8a/47/c7/DM00338361/files/DM00338361.pdf/jcr:content/translations/en.DM00338361.pdf",mdxType:"Link"},"Chrom-ART Hardware acceleration"),".")),Object(o.b)("h3",{id:"jpeg-hardware-codec"},"JPEG Hardware Codec"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"STM32H7")," and ",Object(o.b)("strong",{parentName:"p"},"STM32F7")," families provide a hardware JPEG codec to encode and decode images and videos."),Object(o.b)("p",null,"This feature is important if the UI application needs to play a video file or display JPEG images.  "),Object(o.b)("p",null,"JPEG images generally take up less memory. The JPEG hardware codec ensures that the images can be decoded at runtime without CPU overload."),Object(o.b)("p",null,"Some TouchGFX demos utilizes the JPEG hardware codec, offloading the CPU while playing an MJPEG video."),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/mcu/jpeg-codec-acceleration.png",caption:"Hardware JPEG codec performance",noShadow:!0,width:"500",mdxType:"Figure"}),Object(o.b)(c.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,"Refer to AN4996 application note for more information: ",Object(o.b)(l.a,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/a5/9d/22/46/61/6d/4a/ab/DM00356635/files/DM00356635.pdf/jcr:content/translations/en.DM00356635.pdf",mdxType:"Link"},"Hardware JPEG codec"),".")),Object(o.b)("h3",{id:"chrom-grc"},"Chrom-GRC"),Object(o.b)("p",null,"The STM32 Chrom-GRC\u2122 (GFXMMU) is a peripheral in some STM32 microcontrollers that aims to efficiently support the\nemerging trend towards non-rectangular displays."),Object(o.b)("p",null,"The Chrom-GRC\u2122 peripheral enables applications to reduce the amount of RAM needed for storing the framebuffer when addressing non-rectangular displays."),Object(o.b)("p",null,"In the case of a round display, the peripheral reduces the memory requirements by ",Object(o.b)("strong",{parentName:"p"},"20%"),"."),Object(o.b)("p",null,"The Chrom-GRC\u2122 peripheral is not mandatory when controlling non-square screens, but it is recommended."),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/mcu/stm-32-chrom-grc.png",caption:"Memory optimization with Chrom-GRC peripheral",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)(c.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,"Refer to AN5051 application note for more information: ",Object(o.b)(l.a,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/74/21/86/42/af/d5/4f/58/DM00407777/files/DM00407777.pdf/jcr:content/translations/en.DM00407777.pdf",mdxType:"Link"},"Graphic memory optimization"),".")),Object(o.b)("h2",{id:"internal-flash"},"Internal Flash"),Object(o.b)("p",null,"A graphical user interface application using bitmap resources needs non-volatile memory to store the data.\nThe execution from and access to internal flash is in some cases up to two times faster than external flash."),Object(o.b)("p",null,"As the internal flash is limited in size, in many cases it is often used for storing the TouchGFX framework, screen definitions and UI logic while the bitmap data is stored in external flash."),Object(o.b)("p",null,"The portfolio of STM32 products used for graphic applications is between ",Object(o.b)("strong",{parentName:"p"},"a few Kbytes")," and ",Object(o.b)("strong",{parentName:"p"},"a few Mega bytes")," of internal flash memory."),Object(o.b)("p",null,"External memory may be required when the amount of bitmap data does not fit within internal flash."),Object(o.b)(c.a,{mdxType:"FurtherReading"},"Refer to ",Object(o.b)(l.a,{to:"/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"External Memories")," for more details."),Object(o.b)("p",null,"TouchGFX flash memory requirement:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Framework:                       ",Object(o.b)("strong",{parentName:"li"},"60kbytes")," to ",Object(o.b)("strong",{parentName:"li"},"100kbytes"),"."),Object(o.b)("li",{parentName:"ul"},"Screen definition and GUI logic: ",Object(o.b)("strong",{parentName:"li"},"1")," to ",Object(o.b)("strong",{parentName:"li"},"100Kbytes"),".")),Object(o.b)("p",null,"These numbers depend on the framework features used and the size and complexity of the application."),Object(o.b)("h2",{id:"internal-ram"},"Internal RAM"),Object(o.b)("p",null,"Internal RAM can be used for storing the framebuffer(s), when the size of these fit within the available memory. Alternatively one might add external memory to the setup."),Object(o.b)("p",null,"Calculating the size of a framebuffer depends on the width, height and color depth. For example, a display with HVGA resolution (480x320) and 16 bit colors, the memory needed for one framebuffer is:"),Object(o.b)("p",null,"Size of 1 framebuffer = ",Object(o.b)("strong",{parentName:"p"},"480 x 320 x 2")," =  ",Object(o.b)("strong",{parentName:"p"},"307.200 bytes")," "),Object(o.b)("p",null,"The STM32 products used for graphic applications ranges from ",Object(o.b)("strong",{parentName:"p"},"a few Kbytes")," and ",Object(o.b)("strong",{parentName:"p"},"a few Mega Bytes")," of internal RAM. "),Object(o.b)(c.a,{mdxType:"FurtherReading"},"Refer to the ",Object(o.b)(l.a,{to:"/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"External Memories")," section for more details on framebuffers in external memory."),Object(o.b)("p",null,"TouchGFX RAM requirement:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Framework:          ",Object(o.b)("strong",{parentName:"li"},"10Kbytes")," to ",Object(o.b)("strong",{parentName:"li"},"30Kbytes")),Object(o.b)("li",{parentName:"ul"},"Widgets:            ",Object(o.b)("strong",{parentName:"li"},"1Kbytes")," to ",Object(o.b)("strong",{parentName:"li"},"15Kbytes"))),Object(o.b)("p",null,"Memory requirements may vary from application to application."),Object(o.b)("h2",{id:"lcd-controller"},"LCD Controller"),Object(o.b)("p",null,"The choice of the MCU also depends on the display interface that will be used and the resolution.\nThe 800x480 resolution for example can only be achieved with an efficient interface in terms of data transfer speed.\nRGB-TFT and MPI-DSI interfaces are often used for higher resolutions, as the bandwidth is in many cases higher than SPI or Parallel 8080/6800.\nSmall resolution displays often embed controller and GRAM and so can be connected through simple SPI or 8080/6800 interfaces."),Object(o.b)("p",null,"High resolution displays (WQVGA and above) often don\u2019t embed controller and GRAM, therefore the controller needs to be at the microcontroller side. On STM32 MCUs embedding RGB-TFT and MIPI DSI interfaces the controller is present."),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/mcu/display-interfaces.png",caption:"The picture shows 4 examples of different display interfaces with/without GRAM and display controller.",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)(c.a,{mdxType:"FurtherReading"},"Refer to the ",Object(o.b)(l.a,{to:"/docs/development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"Display")," section for more information."),Object(o.b)("h2",{id:"packages--io"},"Packages & I/O"),Object(o.b)("p",null,"The number of I/Os needed is dependent on the chosen display and external memories.\nRunning a parallel display with parallel RAM/flash can require a high number of I/Os resulting in a larger package.        "),Object(o.b)("h2",{id:"memory-interfacing"},"Memory Interfacing"),Object(o.b)("p",null,"When internal flash and RAM in the microcontroller is not sufficient, choosing the right MCU with the most suitable external memory interface becomes important.\nThe STM32 products provide different memory controller peripherals to interface with the NOR, NAND, SRAM, SDRAM, LPSDR SDRAM, and PSRAM memories. "),Object(o.b)("h3",{id:"flexible-memory-controller--flexible-static-memory-controller-fmcfsmc"},"Flexible Memory Controller & Flexible Static Memory Controller (FMC/FSMC)"),Object(o.b)("p",null,"In addition to the support of the static RAM, the FMC adds dynamic RAM support (SDRAM) to the FSMC.\nThe flexible memory controller (FMC) with its high external access speed and 8, 16 and especially 32 bit data bus, allows for higher throughout from and to external RAM and hence better support of higher resolution.\nThe FMC has an independent chip select for each memory bank.\nThe FMC can control an external flash memory for the data and an external RAM memory for the framebuffer and heap extension for the graphical stack."),Object(o.b)("h3",{id:"serial-memory-interface"},"Serial Memory Interface"),Object(o.b)("p",null,"Depending on the STM32 product, the serial memory interface is embedded and allows interfacing with single, double, quad, octo, and hyperBus flash memories alongside QSPI, PSRAM, OPI PSRAM, and Hyper RAM memories.\nThe serial high speed memory interface can control up to ",Object(o.b)("strong",{parentName:"p"},"256 Mbytes")," when in memory mapped mode and ",Object(o.b)("strong",{parentName:"p"},"4Gbytes")," in indirect mode."),Object(o.b)("p",null,"Compared to parallel interfaces, the serial memory interface permits the connection of a lower cost external flash memory to small packages and reduces the number of used pins."),Object(o.b)(c.a,{mdxType:"FurtherReading"},"Refer to AN4760 application note for more information: ",Object(o.b)(l.a,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/b0/7e/46/a8/5e/c1/48/01/DM00227538/files/DM00227538.pdf/jcr:content/translations/en.DM00227538.pdf",mdxType:"Link"},"Quad-SPI interface on STM32 microcontrollers"),"."),Object(o.b)("h3",{id:"stm32-value-line-products"},"STM32 Value Line products"),Object(o.b)("p",null,"For price optimization, STM32H7 and STM32F7 platforms offer value line products with limited amount of internal flash.\nWith these products, the graphic resources will be stored in the external flash."),Object(o.b)("h2",{id:"cortex-m-cores"},"Cortex\xae-M Cores"),Object(o.b)("p",null,"STM32 MCUs comes in different ARC Cortex\xae-M architectures. Below are the most used cores for running graphics on STM32."),Object(o.b)("h3",{id:"cortex-m0"},"Cortex\xae-M0+"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Cortex\xae-M0+")," is characterized by its simple architecture and low price. It is recommended for smaller static graphic applications, running at lower resolutions."),Object(o.b)("h3",{id:"cortex-m4"},"Cortex\xae-M4"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Cortex\xae-M4")," contains more functionalities than the ",Object(o.b)("strong",{parentName:"p"},"M0+")," and accelerates calculations. It includes a DSP instruction set and a single precision FPU unit. These instructions offload the CPU and increases the speed of calculations."),Object(o.b)("h3",{id:"cortex-m7"},"Cortex\xae-M7"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Cortex\xae-M7")," contains a more complex architecture but also a DSP instruction set, and comes with a more efficient FPU unit with double precision and a level1 cache memory with up to ",Object(o.b)("strong",{parentName:"p"},"16KB")," for data and instructions.\nThe cache memory gives the possibility of having data and instructions close to the calculation unit in order to optimize the fetch time."),Object(o.b)("h3",{id:"feature-overview"},"Feature overview"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Feature"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Cortex-M0+"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Cortex-M4"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Cortex-M7"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DMIPS/MHz range"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.95-1.36"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.25-1.95"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.14-3.23")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Core Mark\xae/MHz"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.46"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3.42"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"5.01")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Digital Signal Processing (DSP) extension"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Floating Point Hardware"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes (SP)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes (SP + DP)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Built-in-caches"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes (option 4-64KB), I-Cachen D-Cache")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Bus Protocol"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AHB Lite,Fast I/O"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AHB Lite, APB"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AXI4, AHB Lite, APB, TCM")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Dual Core Lock-Step Support"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")))),Object(o.b)("h3",{id:"level-1-cache"},"Level 1 cache:"),Object(o.b)("p",null,"The STM32H7 and STM32F7 families include up to ",Object(o.b)("strong",{parentName:"p"},"16 Kbytes")," of L1-Cache both for instructions and data.\nAn L1-Cache stores a set of data or instructions near the CPU, so the CPU does not have to keep fetching the same data that is repeatedly used."),Object(o.b)(c.a,{mdxType:"FurtherReading"},"Refer to AN4839 application note for more information: ",Object(o.b)(l.a,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",mdxType:"Link"},"Level 1 Cache"),"."),Object(o.b)("h3",{id:"dual-core"},"Dual core"),Object(o.b)("p",null,"The STM32H7 series includes the dual-core line: "),Object(o.b)("p",null,"Arm\xae Cortex\xae-M7 and Cortex\xae-M4 cores can respectively run up to 480 MHz and 240 MHz enabling more processing and application partitioning. Dual-core STM32H7 product lines are available with an embedded SMPS for improved dynamic power efficiency."),Object(o.b)("p",null,"The second Cortex\xae-M4 can offload heavy calculations to open up the M7 core for the drawing/graphic operations."),Object(o.b)(s.a,{mdxType:"Note"},"The TouchGFX Generator tool is not available as additional software for STM32H7 dual-cores"),Object(o.b)("h2",{id:"bus-architecture"},"Bus architecture"),Object(o.b)("p",null,"The majority of STM32 microcontrollers provide a ",Object(o.b)("strong",{parentName:"p"},"32-bits multi-AHB")," bus matrix interconnecting all the masters (CPU, DMAs, etc.) and the slaves (flash memory, RAM, FSMC, AHB and APB peripherals). This ensures seamless and efficient operations even when several high-speed peripherals work simultaneously."),Object(o.b)("p",null,"In addition to multi-AHB interconnect, some STM32 (Cortex\xae-M7) products embed ",Object(o.b)("strong",{parentName:"p"},"64-bit")," AXI to expand bandwidth. This yields the best compromise between performance and power consumption."),Object(o.b)("h2",{id:"price"},"Price"),Object(o.b)("p",null,"The size of the internal flash, internal RAM, and number of pins available in the package influence the price of the MCU.\nConsidering the requirements of the interface, resolution, performance, etc., the user can ultimately find suitable MCUs and estimate price."),Object(o.b)(c.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,"See ",Object(o.b)(l.a,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs")," for available STM32 microcontrollers.")))}u.isMDXComponent=!0},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},h="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||b[h]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},509:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(510),l=n(24),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,p=n||l,d=Object(c.a)(p),h=Object(a.useRef)(!1),b=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!b&&d&&window.docusaurus.prefetch(p),function(){b&&t&&t.disconnect()}}),[p,b,d]),p&&d?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){h.current||(window.docusaurus.preload(p),h.current=!0)},innerRef:function(e){var n,r;b&&e&&d&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):o.a.createElement("a",Object(r.a)({},e,{href:p}))}},510:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},512:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(a.Component);t.a=i},513:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=i},515:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=n(512),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(a.Component);t.a=l},519:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=n(512),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(a.Component);t.a=l}}]);