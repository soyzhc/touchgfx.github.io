(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{164:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return m})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(1),r=t(9),o=(t(0),t(261)),i=t(262),s=t(272),l={id:"hardware-selection-external-memories",title:"External Memories"},m={id:"development/hardware-selection/hardware-components/hardware-selection-external-memories",title:"External Memories",description:"import Figure from '@site/components/Figure';\r",source:"@site/docs\\development\\hardware-selection\\hardware-components\\hardware-selection-external-memories.mdx",permalink:"/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",sidebar:"docs",previous:{title:"Display",permalink:"/docs/development/hardware-selection/hardware-components/hardware-selection-display"},next:{title:"Introduction",permalink:"/docs/development/board-bring-up/board-introduction"}},c=[{value:"External non-volatile memories",id:"external-non-volatile-memories",children:[{value:"NOR flash",id:"nor-flash",children:[]},{value:"NAND flash memories",id:"nand-flash-memories",children:[]},{value:"eMMC memories",id:"emmc-memories",children:[]}]},{value:"Volatile memories",id:"volatile-memories",children:[]}],d={rightToc:c},h="wrapper";function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(h,Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This chapter is focussing on helping you choose the external memory for your embedded graphical user interface.\nBefore reading this chapter, it is recommended to read the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/hardware-selection/preliminary-considerations"}),"Preliminary Considerations"),"\nand ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU"),"\nso you are aware of some dependencies which are important when choosing the right external memories."),Object(o.b)("p",null,"Running a TouchGFX GUI application sometimes require external memories for storing the framebuffer(s), bitmaps, fonts, etc.\nA TouchGFX GUI is not dependent on external memories to run, but needs either internal RAM (in MCU) or external RAM for storing the framebuffer(s), and internal and/or external flash for storing data."),Object(o.b)("p",null,"Below overview shows some external memories which can be used with an STM32 MCU, some of the different memory examples are available with both serial and parallel interfaces."),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/external-memories/memory-overview.png",caption:"Memory overview",mdxType:"Figure"}),Object(o.b)("p",null,"The different STM32 microcontrollers comes with different external memory interfaces, allowing to connect different external memories."),Object(o.b)("h2",{id:"external-non-volatile-memories"},"External non-volatile memories"),Object(o.b)("p",null,"In a GUI application, the non-volatile storage (flash) is mainly used for storing all bitmaps/data, or for code execution for the STM32 value line products for example.\nThe non-volatile memories are supported by the STM32 products and can be connected with different types of interfaces.\nParallel or serial memories and different configurations, a wide of range of the non-volatile memories are proposed"),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/external-memories/non-volatile-memory-overview.png",caption:"",noShadow:!0,width:"500",mdxType:"Figure"}),Object(o.b)("p",null,"The choice of the non-volatile storage depend on:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Density"),Object(o.b)("li",{parentName:"ul"},"Performance"),Object(o.b)("li",{parentName:"ul"},"Type of the interface (Parallel/Serial)"),Object(o.b)("li",{parentName:"ul"},"The cost")),Object(o.b)("h3",{id:"nor-flash"},"NOR flash"),Object(o.b)("p",null,"NOR flash is a non-volatile memory that allows random access to any area in the memory."),Object(o.b)("p",null,"The NOR flash ranges is between ",Object(o.b)("strong",{parentName:"p"}," 128M bits ")," to ",Object(o.b)("strong",{parentName:"p"}," 2 Gbits "),"."),Object(o.b)("p",null,"For example, a 480x272 resolution and 16 bits per pixel as color depth, the user interface needs 261 kbytes so ~2Mbits for a full screen.\nThis means that a 256 Mbits NOR flash can store up to 128 full screen images. This example is not taking in to consideration when using multiple layers on a background, like buttons, sliders, icons, etc."),Object(o.b)("p",null,"The NOR flash can be used in ",Object(o.b)("strong",{parentName:"p"}," memory mapped ")," mode where the external flash is seen as an internal memory for read operations.\nThis mode allows the system masters (such as DMA, LTDC, DMA2D, GFXMMU or SDMMC) to access autonomously even in low-power mode when the CPU is\nstopped, which is ideal for mobile and wearable applications."),Object(o.b)("p",null,"The NOR flash memory is available with wide of range with different interface options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parallel NOR flash (with x8 or x16 interfaces)"),Object(o.b)("li",{parentName:"ul"},"Serial NOR flash (Single, dual, quad and Octo data lines for serial memories, and hyperbus flash)")),Object(o.b)("h4",{id:"serial-nor-flash-memories"},"Serial NOR flash memories"),Object(o.b)("p",null,"The Spi flash memories are connected to the STM32 by the QSPI interface.\nThis type of memories has many benefits:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Frequency: up to 133MHz"),Object(o.b)("li",{parentName:"ul"},"Reducing the printed circuit board (PCB) area"),Object(o.b)("li",{parentName:"ul"},"Simplifying the printed circuit board (PCB) design and reducing the GPIOs (general-purpose input/output) usage"),Object(o.b)("li",{parentName:"ul"},"Memory mapped mode up to ",Object(o.b)("strong",{parentName:"li"}," 256Mbytes ")," of addressable area."),Object(o.b)("li",{parentName:"ul"},"Number of needed pins is between ",Object(o.b)("strong",{parentName:"li"}," 4 ")," to ",Object(o.b)("strong",{parentName:"li"}," 12 ")," pins.")),Object(o.b)("h5",{id:"nor-single-dual-quad-octo-flash-memories"},"NOR single, dual, quad, Octo flash memories"),Object(o.b)("p",null,"The NOR flash memories are available with different configurations."),Object(o.b)("p",null,"Single, dual, quad and octo data lines, the serial NOR flash memories still increases in performance and bus width addressing the future needs of graphical applications.\nSwitching to the serial NOR flash memories with more data lines enhance the performance and the bandwidth of the memory but also request more pins to interface with the STM32 products."),Object(o.b)("p",null,"Below, an overview of the different spi memories depending on the number of data lines:"),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/external-memories/serial-modes.png",caption:"",noShadow:!0,width:"500",mdxType:"Figure"}),Object(o.b)("h4",{id:"parallel-nor-flash-memories"},"Parallel NOR flash memories"),Object(o.b)("p",null,"The same advantages as the serial flash memory in term of performance and configuration.\nThe parallel NOR flash can be configured in memory mapped mode and can be accessed as if it was an internal memory.\nBy the way, the differences between the parallel and serial NOR flash is the number of pins and the complexity of the printed circuit board (PCB)"),Object(o.b)("p",null,"Up to ",Object(o.b)("strong",{parentName:"p"}," 47 pins ")," are needed for the NOR flash memory with up to 24 pins for address and 16 pins for data."),Object(o.b)("h3",{id:"nand-flash-memories"},"NAND flash memories"),Object(o.b)("p",null,"The NAND flash memories is ideal for applications such as data storage where ",Object(o.b)("strong",{parentName:"p"}," higher memory capacity ")," and ",Object(o.b)("strong",{parentName:"p"}," faster write and erase operations ")," are required.\nThe NAND flash memories cannot be configured as a memory mapped mode and in consequence, the NAND flash memories are ",Object(o.b)("strong",{parentName:"p"}," not recommended for code execution. ")),Object(o.b)("p",null,"The NAND flash ranges is between ",Object(o.b)("strong",{parentName:"p"}," 1 Gbits ")," to ",Object(o.b)("strong",{parentName:"p"}," 512 Gbits ")),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/external-memories/nand-flash.png",caption:"",noShadow:!0,width:"500",mdxType:"Figure"}),Object(o.b)("h3",{id:"emmc-memories"},"eMMC memories"),Object(o.b)("p",null,"eMMC (Embedded Multi Media Card), established by the MMC Association, is equivalent to NAND flash plus master IC.\nOne obvious advantage of eMMC is ",Object(o.b)("strong",{parentName:"p"}," the integration of a controller ")," in the package that provides standard interfaces and manages flash memory,\nallowing handset manufacturers to concentrate on other parts of product development and shorten the time to launch products to the market."),Object(o.b)("p",null,"The eMMC flash ranges is between ",Object(o.b)("strong",{parentName:"p"}," 2 Gbits ")," to ",Object(o.b)("strong",{parentName:"p"}," 128 Gbits ")),Object(o.b)("p",null,"The eMMC has relatively lower random read performance compared to NAND and NOR which requires an addition of a cache to overcome slow random read."),Object(o.b)("p",null,"Up to ",Object(o.b)("strong",{parentName:"p"}," 10 pins ")," are needed for the eMMC flash memory with 8 pins for data and 2 pins for control."),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/external-memories/emmc-flash.png",caption:"",noShadow:!0,width:"500",mdxType:"Figure"}),Object(o.b)("h2",{id:"volatile-memories"},"Volatile memories"),Object(o.b)("p",null,'External Volatile memory is mainly used to store the framebuffer(s), if the internal RAM in the MCU is insufficient. This section is focussing on SRAM, DRAM and PSRAM as they are commonly used in embedded systems running a GUI. But there are other available variants, and the memory manufactures are using different naming schemes for their memories for example "hyper RAM", "IoT RAM", "octal RAM", and common for most of them is that you can find an STM32 MCU which supports it.'),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/external-memories/volatile-memory-overview.png",caption:"Volatile Memories",mdxType:"Figure"}),Object(o.b)("p",null,"When selecting the right external RAM, we recommend having the following in mind:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Density"),Object(o.b)("li",{parentName:"ul"},"Performance"),Object(o.b)("li",{parentName:"ul"},"Power consumption"),Object(o.b)("li",{parentName:"ul"},"Interface / pin size"),Object(o.b)("li",{parentName:"ul"},"Framebuffer strategy")),Object(o.b)("h4",{id:"sram"},"SRAM"),Object(o.b)("p",null,"SRAM is a static random-access memory and retain the bit data as long as the power is supplied. Generally SRAM provides faster access, but can be more expensive than DRAM. It comes in smaller densities like 64 Kbits to 32 Mbits.\nSRAM typically has a lower access time compared to DRAM and therefore more suitable for GUIs needing more animations, scaling, rotation etc.\nSRAM comes in both synchronous and asynchronous modes, where as the synchronous modes offers higher bandwidth capabilities, but also a more complex interface."),Object(o.b)(s.a,{mdxType:"Note"},"Also available as a non-volatile random-access memory called nvSRAM which also has the ability to store and recall data."),Object(o.b)("h4",{id:"sdram"},"SDRAM"),Object(o.b)("p",null,"SDRAM is a dynamic random-access memory and stores each bit of data on capacitors, which requires less physical space to store the same amount of data compared to SRAM (Static RAM). As it requires constantly refresh in order to keep the data, it requires more power compared to SRAM.\nSDRAM densities typically comes in 16 Mbits up to 512 Mbits, available in x8, x16, and 32 bit interfaces, running frequencies between 100-200 MHz.\nA suitable SDRAM for storing two framebuffers running a 24bpp 800*480 resolution would be a a 32 Mbits SDRAM as a double framebuffer strategy requires ~24Mbits of RAM."),Object(o.b)("h4",{id:"psram"},"PSRAM"),Object(o.b)("p",null,"PSRAM is pseudo static random access memory, with an internal structure of a DRAM (control logic), and a SRAM interface. It typically comes in 8-256 Mbits densities. PSRAM compared to traditional SDRAM and SRAM has the advantages of higher speed and lower power consumption."),Object(o.b)("p",null,"New octal RAM and Hyper RAM memories uses serial 8 bit interfaces in a dual data rate mode, offering high throughput speed and good integration."))}p.isMDXComponent=!0},272:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),i=t(265),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:s},this.props.children)},a}(r.Component);a.a=l}}]);