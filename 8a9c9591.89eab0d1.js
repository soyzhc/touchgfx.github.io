(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(9),l=(n(0),n(237)),r=n(240),s={id:"hardware-selection-display",title:"Display"},o={id:"Development/HardwareSelection/HardwareComponents/hardware-selection-display",title:"Display",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\HardwareSelection\\HardwareComponents\\display.mdx",permalink:"/docs/Development/HardwareSelection/HardwareComponents/hardware-selection-display",sidebar:"docs",previous:{title:"MCU",permalink:"/docs/Development/HardwareSelection/HardwareComponents/hardware-selection-mcu"},next:{title:"External Flash",permalink:"/docs/Development/HardwareSelection/HardwareComponents/hardware-selection-external-flash"}},c=[{value:"Examples of displays",id:"examples-of-displays",children:[{value:"LCD-TFT",id:"lcd-tft",children:[]},{value:"OLED and AMOLED",id:"oled-and-amoled",children:[]},{value:"MIP",id:"mip",children:[]},{value:"ePaper/eInk",id:"epapereink",children:[]}]},{value:"Display Interface Overview",id:"display-interface-overview",children:[{value:"Brightness &amp; Backlight",id:"brightness--backlight",children:[]},{value:"Viewing Position and Color Inversion",id:"viewing-position-and-color-inversion",children:[]},{value:"Display Lifetime",id:"display-lifetime",children:[]},{value:"Pixel density",id:"pixel-density",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Touch / Non-touch displays",id:"touch--non-touch-displays",children:[]},{value:"Displays with RAM",id:"displays-with-ram",children:[]},{value:"Non-square pixels",id:"non-square-pixels",children:[]},{value:"Cover lense",id:"cover-lense",children:[]},{value:"Screen self refresh rate",id:"screen-self-refresh-rate",children:[]}]}],p={rightToc:c},b="wrapper";function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)(b,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This chapter focuses on some considerations that should be included when selecting the right display for your embedded GUI product. Generally, TouchGFX runs on any kind of display, and is not dependent on display technologies, viewing angles, brightness etc."),Object(l.b)("h2",{id:"examples-of-displays"},"Examples of displays"),Object(l.b)("p",null,"Selecting the right display technology can be complicated as key factors in each display are different. The following chapter will only high-evel adress the different technologies, and hopefully help you in the right direction.\nEach kind of display consists of rows and columns of pixels, which can be driven in different ways, having internal and/or external; display controller and ram for framebuffers. In some technologies, each pixel needs to be updated frequently compared to other technologies where this is not necessary, and updates only happens when something changes. "),Object(l.b)("p",null,"Below displays are produced with different interfaces such as; RGB-TFT, SPI, I2C, MIPI-DSI and Parallel 8080/6800"),Object(l.b)("h3",{id:"lcd-tft"},"LCD-TFT"),Object(l.b)("p",null,"TFT means thin-film-transistor, and is a variant of LCD displays with an active matrix. LCD-TFTs are widely used in embedded products as they are available in many different resolutions, sizes, interfaces, price ranges, etc. "),Object(l.b)("p",null,"Some variants of TFT-LCDs are TN and IPS panels. Examples of TFT-LCDs which is an IPS, is the STM32F769 DISCO, STM32H747 DISCO, both running a 800*480 MIPI-DSI TFT IPS LCD display.\nExamples of TFT-LCD TN displays are the sTM32F746G DISCO, and STM32H7B3I DK.\nBoth technologies comes in different qualities, but some differences can be the color reproduction and viewing angles, where IPS panels often are best. "),Object(l.b)("p",null,"INDS\xc6T BILLEDE ( EDT?)"),Object(l.b)("h3",{id:"oled-and-amoled"},"OLED and AMOLED"),Object(l.b)("h3",{id:"mip"},"MIP"),Object(l.b)("p",null,"MIP means memory in pixels, and is showing pixels which only needs power/data for displaying the image when something changes on the screen. These kind of displays are low power runs from low to full color GUIs.  "),Object(l.b)("h3",{id:"epapereink"},"ePaper/eInk"),Object(l.b)("p",null,"EInk displays are low color displays, ideal for applications with low power consumption needs, wide viewing angles, and easy readebility. TouchGFX Implementer Sdataway is demonstrating an EInk display running an TouchGFX application on a STM32F412. Link: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.touchgfx.com/cases/e-ink/"}),"https://www.touchgfx.com/cases/e-ink/"),"   "),Object(l.b)("h2",{id:"display-interface-overview"},"Display Interface Overview"),Object(l.b)("p",null,"The display is connected to the MCU via different types of interfaces. The display interfaces varies on different parameters, and below section is addressing graphics related paramters like, number of pins needed, max bandwidth supporting different resolutions.",Object(l.b)("br",{parentName:"p"}),"\n","TouchGFX can use any display interface. "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Interface"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"# of pins"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Target resolutions"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Max bandwidth"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Benefits"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Disadvantages"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SPI"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4*"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Up to 480*272"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"16 MHz"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Simple hardware interface, faster than I2C,"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Parallel 8080/6800 (FMC)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8/16*"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Up to 480*272"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RGB-TFT (LTDC)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8/18/24*"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Up to 1280*800"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"High performance, low cost"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"High pin count, parallel communication can cause EMC issues")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MIPI-DSI (LTDC)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Up to 1280*800"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"High performance, low pin count,"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Complex protocols and drivers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LVDS**"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Low EMC/interference, high speed"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bridge needed")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"*Additional pins can be needed for: touch, power, controls signals etc.  "),Object(l.b)("li",{parentName:"ul"},"** a bridge is needed for interfacing with a LVDS display.  ")),Object(l.b)("h3",{id:"brightness--backlight"},"Brightness & Backlight"),Object(l.b)("p",null,"Often measured in Candelas/M2. Backlights are the most power consuming part of the display. In sunlight one would need around 600 cd/M2. Often higher brightness gives higher heat minimizing the live time of the LEDs.  "),Object(l.b)("h3",{id:"viewing-position-and-color-inversion"},"Viewing Position and Color Inversion"),Object(l.b)("p",null,"When embedding a display into a product, it is important to anticipate and know which viewing positions the user can have. In some displays from certain viewing positions, a color inversion can happen. So installing the display in the right position, allowing the user to operate and experience the GUI while seeing the right colors designed by the graphics designer can be tricky.  "),Object(l.b)("p",null,"The color inversion can happen on TN panels. Adding a SWV film can help increasing viewing angles.  "),Object(l.b)(r.a,{imageSource:"/img/Development/HardwareSelection/display/viewing-position.png",caption:"Viewing position",mdxType:"Figure"}),Object(l.b)("h3",{id:"display-lifetime"},"Display Lifetime"),Object(l.b)("p",null,"The lifetime is defined as the time until the display reached half brightness at 25 degrees. If your product has a long life expendensy then this parameter must be taken into considerations. "),Object(l.b)("h3",{id:"pixel-density"},"Pixel density"),Object(l.b)("p",null,"Pixel density is defining how many pixels is shown pr. Inch or square inch. Choosing the right pixel density can depend on the expectations from the end user, environment, design needs etc. Putting this into perspective a high-end mobile phone runs a 6.1\u201d 2340",Object(l.b)("em",{parentName:"p"},"1080 with a pixel density pr. square inch of 178,500, and a commonly used 5\u201d TFT display running 800"),"480 has 34.816 Pixels pr. Square inch. "),Object(l.b)(r.a,{imageSource:"/img/Development/HardwareSelection/display/pixel-density.png",caption:"Pixel density",noShadow:!0,mdxType:"Figure"}),Object(l.b)("p",null,"Some standard resolutions, display sizes and pixel densities:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"QVGA 320*240"),"    -  -  -    ",Object(l.b)("strong",{parentName:"li"},"WQVGA 480*272"),Object(l.b)("br",{parentName:"li"}),"2.4\u201d (27,777 PPI2)    -  -  -    4,3\u201d (16,462 PPI2)",Object(l.b)("br",{parentName:"li"}),"3.5\u201d (13,061 PPI2)     -  -  -   5\u201d (12,175 PPI2)")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"HVGA 480*320"),Object(l.b)("br",{parentName:"p"}),"\n","3.5\u201d (27,167 PPI2)  ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"VGA 640*480"),Object(l.b)("br",{parentName:"p"}),"\n","5,7\u201d (19,698 PPI2)",Object(l.b)("br",{parentName:"p"}),"\n","6.4 (15,625 PPI2)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"WVGA 800*480"),Object(l.b)("br",{parentName:"p"}),"\n","4\u201d (54,400 PPI2)",Object(l.b)("br",{parentName:"p"}),"\n","5\u201d (34,816 PPI2)",Object(l.b)("br",{parentName:"p"}),"\n","7\u201d (17,763 PPI2)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"SVGA 800*600"),Object(l.b)("br",{parentName:"p"}),"\n","8,4\u201d (14,172 PPI2)",Object(l.b)("br",{parentName:"p"}),"\n","10,4\u201d (9,245 PPI2)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"WSVGA 1024*600"),Object(l.b)("br",{parentName:"p"}),"\n","7\u201d (28,746 PPI2)",Object(l.b)("br",{parentName:"p"}),"\n","10,1\u201d (13,808 PPI2)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"XGA 1024*768"),Object(l.b)("br",{parentName:"p"}),"\n","10,4\u201d (16,061 PPI2)",Object(l.b)("br",{parentName:"p"}),"\n","12,1\u201d (11.190 PPI2)"))),Object(l.b)(r.a,{imageSource:"/img/Development/HardwareSelection/display/pixel-density-graph.png",caption:"",mdxType:"Figure"}),Object(l.b)(r.a,{imageSource:"/img/Development/HardwareSelection/display/pixel-density-parrot.png",caption:"",mdxType:"Figure"}),Object(l.b)(r.a,{imageSource:"/img/Development/HardwareSelection/display/pixel-density-parrot-zoom.png",caption:"",mdxType:"Figure"}),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Pictures on left side (TFT with coverlense) is showing a pixel density of 4\u201d 54,400 PPI2 (Pixels pr. square inches) and on the right (TFT without coverlense) a pixel density of 7\u201d 17,763 PPI2.")),Object(l.b)("p",null,"For some applications it can be difficult seeing any difference, unless the display is being looked at closely. Examples of pixels denisties are: STM32F476DISCO with 16,462 PPI2, STM32F769DISCO with 54,400 PPI2. "),Object(l.b)("p",null," On above example the following terms is relevant to discuss:"),Object(l.b)("h4",{id:"dynamic-color-range"},"Dynamic color range"),Object(l.b)("p",null,"Is in this case the ratio between two contrast colors, like black and white. In the above example, the eye of the parrot contains different levels of white and black. The image on the left has PPI2 at 54,000 vs 17,763 on the right, this means that the display on the left has more pixels to show all the colors represented, creating a smoother transition between different colors. "),Object(l.b)("h4",{id:"anti-aliasing"},"Anti-aliasing"),Object(l.b)("p",null,"When the pixel denisty is too low (can also happen in other cases) a staircase effect can appear. Using anti-aliasing in the application can smooth out these staircase edges in an image. When looking close at the display, the staircase effect slightly appears on the right image, as the pixel density does not allow the display to represent a high enough color range enabling high enough anti-aliasing.   "),Object(l.b)(r.a,{imageSource:"/img/Development/HardwareSelection/display/anti-aliasing.png",caption:"Anti-aliasing",noShadow:!0,mdxType:"Figure"}),Object(l.b)("h3",{id:"environment"},"Environment"),Object(l.b)("p",null,"When desiding which display to use, the environment is a vital part to consider.\nSome questions to ask yourself are: Is the display in direct sunlight? Is it being used in rugged environments where it needs to be impact resistent? Is it being handled by one wearing gloves? Does it need vandal proofing? Is it being operated with buttons only?\nAnswering theses questions will give you an better idea of which touch technology to selected, or even if touch is required. "),Object(l.b)("p",null,"Note: TouchGFX runs on both touch and non-touch displays. "),Object(l.b)("h3",{id:"touch--non-touch-displays"},"Touch / Non-touch displays"),Object(l.b)("h4",{id:"capasitive"},"Capasitive"),Object(l.b)("p",null,"This is the most popular touch technology. It comes in two sensing technologies: first is the self capacitance which is for single finger touch, secondly is the mutual capacitance allowing multi touch but more challenged when exposed to water/moist (TouchGFX does not support multi touch).",Object(l.b)("br",{parentName:"p"}),"\n","Most STM32 DISCO boards are uisng the capasitive touch, some examples are the STM32H7B3I DISCO, STM32H750 DISCO, STM32F746G DISCO. "),Object(l.b)("h4",{id:"resistive"},"Resistive"),Object(l.b)("p",null,"A simple technology activated by mechanical pressure, and only requires ADC - or a simple touch controller. It is often low price, due to maturity. The surface is more acceptable to scratches and tearing, so more difficult to vanlda proof, it also has a lower sunlight readebility.\nThe STM32F429 DISCO board is using a resisteive touch, available with a TouchGFX application. "),Object(l.b)("h4",{id:"non-touch"},"Non-touch"),Object(l.b)("p",null,"Often if the GUI is being controlled by buttons, just displaying images/video or controlled externally by another device, than adding touch to the product might not be relevant. "),Object(l.b)("h3",{id:"displays-with-ram"},"Displays with RAM"),Object(l.b)("p",null,"Displays with either Motorla 6800 , Intel 8080, SPI, or MIPI-DSI interfaces is in most cases embedding RAM (GRAM), which has the size of 1 full framebuffer. These types of displays can connect to the MCU via SPI, FMC or DSI-host. A second ram (framebuffer) is required external to the display. "),Object(l.b)("p",null,"Only smaller resolutions, simple animations, simple app, "),Object(l.b)("h3",{id:"non-square-pixels"},"Non-square pixels"),Object(l.b)("h3",{id:"cover-lense"},"Cover lense"),Object(l.b)("p",null,"As the display is the face of your embedded graphical user interface product, and in many cases the look and feel of the display is important. The cover lense can improve the design, scratch resistence, impact strenght, colors, etc. "),Object(l.b)("h3",{id:"screen-self-refresh-rate"},"Screen self refresh rate"),Object(l.b)("p",null,"Bandwidt needs to be faster then the update of the screen"),Object(l.b)("p",null,"Inkludere noget mere touchgfx, i forskellige artikerl\nColor rnage: sort hvide, mindre hukommelse, "))}d.isMDXComponent=!0}}]);