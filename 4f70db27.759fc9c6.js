(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return h}));var a=n(1),i=n(9),o=(n(0),n(217)),r=n(218),l={id:"Tutorial_02",title:"Tutorial 2: Creating your own application"},c={id:"Tutorials/Tutorial_02",title:"Tutorial 2: Creating your own application",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Tutorials\\Tutorial_02.mdx",permalink:"/docs/Tutorials/Tutorial_02",sidebar:"docs",previous:{title:"Tutorial 1: Trying out the examples",permalink:"/docs/Tutorials/Tutorial_01"},next:{title:"Tutorial 3: Applications with multiple screens",permalink:"/docs/Tutorials/Tutorial_03"}},u=[{value:"Step 1: Setting a background Image",id:"step-1-setting-a-background-image",children:[{value:"Starting a new project",id:"starting-a-new-project",children:[]},{value:"Inserting a background",id:"inserting-a-background",children:[]}]},{value:"Step 2: Adding Buttons",id:"step-2-adding-buttons",children:[{value:"Adding the Buttons",id:"adding-the-buttons",children:[]},{value:"Changing the look",id:"changing-the-look",children:[]}]},{value:"Step 3: Adding Text",id:"step-3-adding-text",children:[{value:"Text Background",id:"text-background",children:[]},{value:"Adding the text",id:"adding-the-text",children:[]},{value:"Changing the Text Typography",id:"changing-the-text-typography",children:[]},{value:"Using a wildcard text",id:"using-a-wildcard-text",children:[]}]},{value:"Step 4: Adding code",id:"step-4-adding-code",children:[{value:"Implementing the virtual methods",id:"implementing-the-virtual-methods",children:[]},{value:"Updating the counter value",id:"updating-the-counter-value",children:[]}]}],s={rightToc:u},p="wrapper";function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow this tutorial to learn more about the basics of TouchGFX. You will learn how to add images to your application and use buttons. You will also see how to use texts and calculated numbers. In the last steps you will write code to enhance the look of the UI you have created with the TouchGFX Designer. This tutorial assumes no knowledge of TouchGFX, but we assume a little experience with programming."),Object(o.b)("h2",{id:"step-1-setting-a-background-image"},"Step 1: Setting a background Image"),Object(o.b)("p",null,"In this first step you will see how to insert a PNG image as a background. But first we will create a new project."),Object(o.b)("h3",{id:"starting-a-new-project"},"Starting a new project"),Object(o.b)("p",null,'Start a new project in TouchGFX Designer. We will call the project MyApplication1. The project is based on the "STM32F746G Discovery Kit" Application Template and the "Blank UI" UI template. '),Object(o.b)("p",null,'If you have a different STM32 Evaluation Kit, you can check if it is supported in this article (###TODO Link) or just go ahead and look in the list presented in the Designer when you are changing the Application Template. If you do not have a supported board you can select the "Simulator" Application Template and just run the application on your computer. '),Object(o.b)("p",null,"Please be aware that this tutorial runs on a display with a resolution of 480x272. If you select an Application Template with a different resolution, the graphics will not fit the screen, but you should be able to complete the tutorial anyway."),Object(o.b)(r.a,{imageSource:"/img/Tutorials/tutorial02/new_proj.png",caption:"Creating the new project using the STM32F746 Application Template and Blank UI",mdxType:"Figure"}),Object(o.b)("p",null,"Now that you have a newly created blank project let us start modifying it."),Object(o.b)("p",null,"A TouchGFX application consists of a number of Screens. The Screens contains a number of Widgets that make up the user interface. A Screen covers the whole display, so only one Screen is shown to the user at a time."),Object(o.b)("p",null,"The first thing to do is to change the name of the initial Screen to Main as illustrated below:"),Object(o.b)(r.a,{imageSource:"/img/Tutorials/tutorial02/change_name.png",caption:"Changing the name of the Screen",mdxType:"Figure"}),Object(o.b)("h3",{id:"inserting-a-background"},"Inserting a background"),Object(o.b)("p",null,"It is normally a good thing to cover the complete background of a Screen with one or more widgets. This can be e.g. a Box or an Image. In this application we will use an Image."),Object(o.b)("p",null,"Before we can use an image in the TouchGFX Designer we need to import the file. TouchGFX supports BMP and PNG images. PNG files are preferred over BMP files as they are smaller and supports transparent pixels."),Object(o.b)("p",null,"The images we will use in this tutorial can be downloaded from this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/download/Tutorials/tutorial02/touchgfx_tutorial2.zip"}),"link"),". Unzip the file to a directory on your disk."),Object(o.b)("p",null,'We want to use the file named "background.png" as our background. To import that file, select the Images tab and click the blue plus icon. Navigate to the unzipped folder and select the "background.png" file. Press open to import it. You can also "drag & drop" images onto the image tab to import them to your project.'),Object(o.b)("p",null,"Be aware that images imported to your project will be converted and compiled into your project and thus take up flash space. So only import the images that you need."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/image_import.png",alt:"The image background.png is imported",title:"The image background.png is imported"}))," "),Object(o.b)("p",null,"We are now ready to use the image in our application. To do that we need an Image widget. Select the Widgets tab in the Canvas tab, find the Image Widget in the list of widgets, click it to insert an Image Widget on the Screen. It is a good principle to change the name to something meaningful, like backgroundImage."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/insert_widget.png",alt:"Inserting an Image Widget",title:"Inserting an Image Widget"}))," "),Object(o.b)("p",null,'After inserting a Widget we normally need to configure some of its properties like Position or Color. The properties of the selected Widget are shown to the right in the TouchGFX Designer. In this case we are satisfied with the position in 0,0, but we want to change the Image property to select the "background.png" file previously imported. Select the "background.png" in the Image drop-down list.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/selecting_image_as_background.png",alt:"Selecting the imported image file as background",title:"Selecting the imported image file as background"}))," "),Object(o.b)("p",null,"We have now created a simple application with one Screen consisting of only a background image covering the whole user interface."),Object(o.b)("p",null,'Before moving on try to press the "Run Simulator" button to check that the project compiles and runs. You can still not interact with the application since we have not yet added any active widgets.'),Object(o.b)("h2",{id:"step-2-adding-buttons"},"Step 2: Adding Buttons"),Object(o.b)("p",null,"In this step owe will add two buttons to the application and use different PNG files to give them a customized look."),Object(o.b)("h3",{id:"adding-the-buttons"},"Adding the Buttons"),Object(o.b)("p",null,'Add a button to the Screen by clicking the Button Widget in the Widgets tab. Move the new Widget by dragging it with the mouse. Position the button at x=40, y=60. Name the new Widget "buttonUp". Add another Button at position x=40, y=150. Name this Widget "ButtonDown".'),Object(o.b)("p",null,"The project now looks like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/adding_buttons.png",alt:"Adding two Buttons",title:"Adding two Buttons"}))," "),Object(o.b)("p",null,"You can use the small up/down button on the X and Y properties to fine-tune the position of the Widgets. You can also select the button widget (by clicking it on the canvas) and adjust the position using the arrow keys on your keyboard."),Object(o.b)("h3",{id:"changing-the-look"},"Changing the look"),Object(o.b)("p",null,"We will now change the look of the Buttons. A Button is made up of two images. One image is shown when the button is pressed, and another images is shown when the button is not pressed (released). Most widgets come with a set of predefined styles, which is basically a set of values for certain properties of the widget describing a particular look. These styles are good for fast prototyping, but most often you will replace them when creating a real application."),Object(o.b)("p",null,'Go to the Images tab as in previous step and click the "plus" icon to import some images. This time import the images: "button_down_pressed.png", "button_down_released.png", "button_up_pressed.png", and "button_up_released.png".'),Object(o.b)("p",null,'Now select the "buttonUp" button. For that button, start by selecting "No-Style" for the Style property. Select "button_up_released.png" for the Release Image property. Select "button_up_pressed.png" for Pressed Image.'),Object(o.b)("p",null,"You can immediately see the look of the button on the canvas in the TouchGFX Designer."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/bitmap_for_button.png",alt:"Setting bitmaps for Buttons",title:"Setting bitmaps for Buttons"}))," "),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/bitmap_for_button_2.png",alt:"Setting bitmaps for Buttons",title:"Setting bitmaps for Buttons"}))," "),Object(o.b)("p",null,'For "buttonDown" select again "No-Style" for Style, "button_down_released.png" for Release Image, "button_down_pressed.png" for Pressed Image.'),Object(o.b)("p",null,'You have now finished setting up the Buttons. Click "Run Simulator" to try your application.'),Object(o.b)("p",null,"Try both buttons to verify that the Buttons are configured correct."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/running_the_simulator.png",alt:"Running the Simulator",title:"Running the Simulator"}))," "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Most widgets in TouchGFX uses images to define their size, meaning that they cannot directly be resized. This is done for performance reasons (###TODO insert link). If you want to change the size of such widgets, like for example the buttons in this tutorial, you will do this by creating a new set of images for the buttons and use them as Released and Pressed images instead.")),Object(o.b)("h2",{id:"step-3-adding-text"},"Step 3: Adding Text"),Object(o.b)("p",null,"In this step we will add a large TextArea Widget to the application."),Object(o.b)("p",null,"All text is shown using a TextArea Widget, but before we add a TextArea to the application, we will add another Image to give the text a better background."),Object(o.b)("h3",{id:"text-background"},"Text Background"),Object(o.b)("p",null,'Import another image file, "counter_box.png". Insert a new Image Widget, name it "textBackground", and position it at x=250, y=59. Set the property Style to "No-Style", and Image to "counter_box".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/add_background_for_text.png",alt:"Added background for text",title:"Added background for text"}))," "),Object(o.b)("h3",{id:"adding-the-text"},"Adding the text"),Object(o.b)("p",null,'We are now ready to add a TextArea Widget. Click the Text Area icon in the Widgets tab. Rename the Widget to "textCounter" and move the Widget to position x=250, y=90.\nWe want the Widget to show a large text, so un-check the "auto-size" property, and set the size to a fixed width=152, and height=90.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/add_textarea.png",alt:"Added a TextArea",title:"Added a TextArea"}))," "),Object(o.b)("p",null,'The default color of a TextArea Widget is black, which is rather dark on our background. Select the Color property of "textCounter", and change the color to white.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/text_color.png",alt:"Changing text color",title:"Changing text color"}))," "),Object(o.b)("h3",{id:"changing-the-text-typography"},"Changing the Text Typography"),Object(o.b)("p",null,"We want the text to be bigger. The way to do that is to change the typography used for the text. A typography defines the font, e.g. Verdana, the size, and the alignment, left, right, or center, for a text."),Object(o.b)("p",null,"Select the Texts tab in the top of the TouchGFX Designer, click Typographies, and update the size of the Default typography to 80."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/typography_size.png",alt:"Changing text size",title:"Changing text size"}))," "),Object(o.b)("p",null,'Going back to the Screen (by clicking the "Canvas" tab in the top), we see that the text is much bigger now. In fact we cannot read the complete text "New Text". Click the centered icon under the "Alignment" property to get the text centered.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/text_alignment.png",alt:"Changing text alignment",title:"Changing text alignment"}))," "),Object(o.b)("h3",{id:"using-a-wildcard-text"},"Using a wildcard text"),Object(o.b)("p",null,'We want the TextArea to show a number that we can change with the buttons. To do that, we must change the text to include a "wildcard". A wildcard is a marker, "',"<","d",">",'" in the text that can be substituted with something else at runtime. We just want to show a number, so we will change the text to just "',"<","d",">",'". In other projects you can combine the dynamic parts with a fixed text, e.g. "Temperature: ',"<","temp",">",' \xb0C".'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The text inside the ","<","...",">"," wildcard brackets are optional. You can use them to communicate to implementers or translators what kind of information will be inserted in the wildcard or you can leave it empty. ")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/wildcard_text.png",alt:"Configure the wildcard text",title:"Configure the wildcard text"}))," "),Object(o.b)("p",null,'Click "Run Simulator" to try your application.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/running_the_simulator_2.png",alt:"Running the Simulator",title:"Running the Simulator"}))," "),Object(o.b)("p",null,"This concludes step 3 of the tutorial. Here we learned how to insert TextArea Widgets in your user interface and how to change the size of the text by changing the typography. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"There is a lot more to learn about how to use text and fonts in TouchGFX. If you want to know more read the complete description ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"here")," ###TODO insert link")),Object(o.b)("h2",{id:"step-4-adding-code"},"Step 4: Adding code"),Object(o.b)("p",null,"With the TouchGFX Designer it is easy to link actions to a Button through an Interaction. An Interaction links a trigger, e.g. a button press, to an action, e.g. running code or moving an element."),Object(o.b)("p",null,'Select the Interactions tab in the upper right corner and click the "Add Interaction" button to create a new Interaction'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/add_interactions.png",alt:"Adding interactions",title:"Adding interactions"}))," "),Object(o.b)("p",null,"We will create two Interactions. One for each of the Buttons. We will setup both Interactions to call a C++ method on the current Screen."),Object(o.b)("p",null,'Change the "Trigger" field to "Button is clicked". Set the "Choose clicked source" to "buttonUp". Change the "Action" field to "Call new virtual function". For "Function Name" type "buttonUpClicked". You should also give the Interaction an informative name, so that you can recognize it later on.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/configure_interaction.png",alt:"Configure the Button interaction",title:"Configure the Button interaction"}))," "),Object(o.b)("p",null,'Create a similar Interaction with "buttonDown" as "clicked source".'),Object(o.b)("p",null,'If you either click the "Generate Code" button or "Run Simulator" button, the Designer will update the generated code with the information you entered in the interactions just created. This means that it will create two new virtual functions in the view base class for this screen.'),Object(o.b)("p",null,'Let us investigate this more and see how we can have our own code executed. Click the "Browse Code" button in the bottom bar. This will give you a File Explorer placed in your application folder. Navigate to the folder'),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MyApplication1\\generated\\gui_generated\\include\\gui_generated\\main_screen\\")),Object(o.b)("p",null,"and open the file MainViewBase.hpp. If you like you can also open one of the project files and find the file here:"),Object(o.b)("p",null,"(###TODO update with correct project files for F746)"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"IDE"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path to project file"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Visual Studio"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"simulator/msvs/Application.sln")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CubeIDE"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"???")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IAR Embedded Workbench 8"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"target/IAR8.x/application.eww")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"KEIL uVision v5"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"target/Keil/application.uvprojx")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that not all project files are present as default. To change toolchain you need to use the CubeMX tool. Read more on this here (###TODO insert link).")),Object(o.b)("p",null,"The new virtual methods are found in the public part of the MainViewBase class. The generated methods have empty implementations. The intention is that the programmer implements these methods in the subclass."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/empty_virtual_methods.png",alt:"Empty virtual methods are generated in the superclass",title:"Empty virtual methods are generated in the superclass"}))," "),Object(o.b)("h3",{id:"implementing-the-virtual-methods"},"Implementing the virtual methods"),Object(o.b)("p",null,'The remaining task is now to implement these two methods to change the counter value when the user presses the buttons. To do that, declare the methods again in the "MainView" class. This class can be found in'),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MyApplication1\\gui\\include\\gui\\main_screen\\MainView.hpp")),Object(o.b)("p",null,"Open this file and insert the two function declarations in the class:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/insert_functions.png",alt:"Inserting function declarations",title:"Inserting function declarations"}))," "),Object(o.b)("p",null,"The next task is to implement the two methods by adding the implementation in the .cpp-file. This file is located in"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MyApplication1\\gui\\src\\main_screen\\MainView.cpp")),Object(o.b)("p",null,'In the implementation below we have added calls to "touchgfx_printf". This function is useful to print out lines of text when running the simulator. When running on target, the line will have no effect.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/add_impl.png",alt:"Adding first implementation",title:"Adding first implementation"}))," "),Object(o.b)("p",null,'Click "Run Simulator" in TouchGFX Designer again to run the new code. Click the Buttons a couple of times to see that the Interactions and methods are working as expected:'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/running_the_simulator_3.png",alt:"Running the Simulator",title:"Running the Simulator"}))," "),Object(o.b)("h3",{id:"updating-the-counter-value"},"Updating the counter value"),Object(o.b)("p",null,'The last task is to write C++ code in the new methods to update the counter value when the user presses the button. To do that we first add a new integer variable, "counter", in the MainView class:'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/add_integer_counter.png",alt:"Adding an integer counter variable",title:"Adding an integer counter variable"}))," "),Object(o.b)("p",null,'In the "buttonUpClicked" method we increment the counter value. The new value is then converted to a string and copied to the 10 characters buffer we configured for the text in the previous step:'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/changing_textcounter.png",alt:"Changing the textCounter Widget from C++",title:"Changing the textCounter Widget from C++"}))," "),Object(o.b)("p",null,"(###TODO insert and mention code that initializes the counter to 0.)"),Object(o.b)("p",null,'Note that we call "invalidate()" on the textCounter widget after updating it. This ensures that the TextArea is redrawn after the counter value has been updated.'),Object(o.b)("p",null,'We need one more thing before the application is finished. TouchGFX only included the characters needed from the used fonts, so we need to tell TouchGFX Designer to include the characters 0-9 in the Default typography. To do that, go back to TouchGFX Designer and click the "Texts" tab, then the "Typographies" tab. In the "Wildcard Ranges" column for the Default typography, add the range "0-9".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/set_wildcard_range.png",alt:"Setting the Wildcard Range for the Default typography",title:"Setting the Wildcard Range for the Default typography"}))," "),Object(o.b)("p",null,'Now click "Run Simulator" again and click the up button a few times:'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/Tutorials/tutorial02/running_the_simulator_4.png",alt:"Running the Simulator",title:"Running the Simulator"}))," "),Object(o.b)("p",null,'As the program is now, it will not handle negative numbers correctly. This can be fixed, either by inserting a guard in the buttonDownClicked() function to ensure the counter does not go below 0 or by adding the character "-" to the used typography. This can be accomplished simply by adding a minus ("-") in the Wildcard Characters cell for the Default typography.'),Object(o.b)("p",null,"This step concludes tutorial 2."),Object(o.b)("p",null,"(###TODO insert links)"),Object(o.b)("p",null,"Read more about texts here: Using texts and fonts."),Object(o.b)("p",null,"Read more about TouchGFX application development here: Basic Application Development."))}h.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,b=p["".concat(r,".").concat(h)]||p[h]||d[h]||o;return n?i.a.createElement(b,l({ref:t},u,{components:n})):i.a.createElement(b,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},218:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=r}}]);