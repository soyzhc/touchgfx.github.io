(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{385:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return g}));var a=n(1),i=n(9),o=(n(0),n(508)),r=n(511),c=n(518),s=n(515),l=n(513),d=n(516),p={id:"code-structure",title:"Code Structure"},u={id:"development/ui-development/software-architecture/code-structure",title:"Code Structure",description:"This section explains the structure of a TouchGFX project - from the code generated by TouchGFX Designer to the extending code written by the user.\r",source:"@site/docs\\development\\ui-development\\software-architecture\\code-structure.mdx",permalink:"/docs/development/ui-development/software-architecture/code-structure",sidebar:"docs",previous:{title:"The Screen Concept",permalink:"/docs/development/ui-development/software-architecture/screen-definition-and-mvp"},next:{title:"Using IDEs with TouchGFX",permalink:"/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"}},h=[{value:"Generated Code vs. User Code",id:"generated-code-vs-user-code",children:[]},{value:"Files Generated by TouchGFX Designer",id:"files-generated-by-touchgfx-designer",children:[]},{value:"Example",id:"example",children:[{value:"TouchGFX Designer View",id:"touchgfx-designer-view",children:[]},{value:"Layers",id:"layers",children:[]},{value:"Code",id:"code",children:[]}]}],b={rightToc:h},m="wrapper";function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(m,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section explains the structure of a TouchGFX project - from the code generated by TouchGFX Designer to the extending code written by the user."),Object(o.b)("h2",{id:"generated-code-vs-user-code"},"Generated Code vs. User Code"),Object(o.b)("p",null,"The code generated by TouchGFX Designer will be completely separate from the code written by the user. In fact, the generated code is placed in the folder ",Object(o.b)("inlineCode",{parentName:"p"},"generated/gui_generated"),", whereas the handwritten code is placed in the ",Object(o.b)("inlineCode",{parentName:"p"},"gui")," folder."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"gui_generated")," code serves as base classes for user code classes. The base classes contain all the setup code configured in TouchGFX Designer. The following class diagram shows the relationship of the classes:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels.png",caption:"Class hierarchy of engine, generated and user classes",mdxType:"Figure"}),Object(o.b)("p",null,"As shown above, TouchGFX Designer applications consist of 3 different layers of code:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Engine"),": these classes are the standard classes provided by TouchGFX. These act as base classes for the generated classes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Generated"),": these classes and corresponding files will be regenerated whenever TouchGFX Designer generates code. Therefore, these classes and files should not be edited manually, as any manual changes will be overwritten on the next run of the code generator. These classes are base classes for the user classes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"User"),": these classes are intended for handwritten code. The user is free to put any code in this layer. The user classes will be generated if not present, but will never be altered by TouchGFX Designer. They ",Object(o.b)("em",{parentName:"li"},"belong to the user"),".")),Object(o.b)(c.a,{mdxType:"Note"},"The architecture of the applications generated by TouchGFX Designer is open in the sense that there should be no limits to what you can create. If something (e.g. a widget, animation, or effect) is not supported by TouchGFX Designer, you can add them in user classes. The code generated by TouchGFX Designer is by design not allowed to restrict you in your way of doing TouchGFX applications."),Object(o.b)("h2",{id:"files-generated-by-touchgfx-designer"},"Files Generated by TouchGFX Designer"),Object(o.b)("p",null,"As a rule, TouchGFX Designer will ",Object(o.b)("em",{parentName:"p"},"only")," regenerate files within the ",Object(o.b)("inlineCode",{parentName:"p"},"generated")," folder in a TouchGFX project and it is therefore important that you do not manually edit these, as they will be overwritten. However, TouchGFX Designer can also generate missing files needed for compilation, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"application.config"),", ",Object(o.b)("inlineCode",{parentName:"p"},"simulator/main.cpp")," and skin images located in ",Object(o.b)("inlineCode",{parentName:"p"},"assets/images/__designer"),". In actuality, TouchGFX Designer only needs the following to be able to generate, compile and run a project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},".touchgfx")," file describing the project"),Object(o.b)("li",{parentName:"ul"},"User code (if any) located in the ",Object(o.b)("inlineCode",{parentName:"li"},"gui")," folder"),Object(o.b)("li",{parentName:"ul"},"User images (if any) located in the ",Object(o.b)("inlineCode",{parentName:"li"},"assets/images")," folder"),Object(o.b)("li",{parentName:"ul"},"Texts (if any) located in the ",Object(o.b)("inlineCode",{parentName:"li"},"assets/texts/texts.xlsx")," file"),Object(o.b)("li",{parentName:"ul"},"Fonts (if any) located in the ",Object(o.b)("inlineCode",{parentName:"li"},"assets/fonts")," folder")),Object(o.b)(s.a,{mdxType:"Tip"},"When using version control such as Git, this means that only the files listed above actually need to be commited to a repository. The rest can be generated by TouchGFX Designer itself."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"A simple example of an application having both generated and user code will be given below. This should illustrate the aspects above in more detail."),Object(o.b)("h3",{id:"touchgfx-designer-view"},"TouchGFX Designer View"),Object(o.b)("p",null,"The following example has just one screen. The screen ",Object(o.b)("inlineCode",{parentName:"p"},"MyScreen")," consists of a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/shapes/box"}),"Box")," ",Object(o.b)("inlineCode",{parentName:"p"},"box1")," and a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/buttons/button"}),"Button")," ",Object(o.b)("inlineCode",{parentName:"p"},"button1"),". We have set up an interaction to call the virtual function ",Object(o.b)("inlineCode",{parentName:"p"},"setRandomColor()")," when ",Object(o.b)("inlineCode",{parentName:"p"},"button1")," is clicked."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/software-architecture/code-structure/designer-application.png",caption:"TouchGFX Designer application",mdxType:"Figure"}),Object(o.b)("p",null,"Whenever we press the button we would like to change the color of the background box to a new random color. To demonstrate how to write your own custom code, we will implement this behavior in user code."),Object(o.b)("h3",{id:"layers"},"Layers"),Object(o.b)("p",null,"The different classes involved in this example can be seen below:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.png",caption:"Example classes",mdxType:"Figure"}),Object(o.b)("p",null,"We see that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MyScreenViewBase"),", ",Object(o.b)("inlineCode",{parentName:"li"},"FrontendApplicationBase")," and ",Object(o.b)("inlineCode",{parentName:"li"},"FrontendHeapBase")," are in the generated space, implying that:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"They will be regenerated whenever a change is made in TouchGFX Designer"),Object(o.b)("li",{parentName:"ul"},"The user should not manually edit these classes"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MyScreenView"),", ",Object(o.b)("inlineCode",{parentName:"li"},"MyScreenPresenter"),", ",Object(o.b)("inlineCode",{parentName:"li"},"FrontendApplication")," and ",Object(o.b)("inlineCode",{parentName:"li"},"FrontendHeap")," are created in the user code space, meaning that:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These will not be regenerated when changes are made in TouchGFX Designer"),Object(o.b)("li",{parentName:"ul"},"The user is free to add custom code here"))),Object(o.b)("li",{parentName:"ul"},"All the setup of ",Object(o.b)("inlineCode",{parentName:"li"},"box1")," and ",Object(o.b)("inlineCode",{parentName:"li"},"button1")," is done in the generated view base class ",Object(o.b)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"."),Object(o.b)("li",{parentName:"ul"},"All the functions for transitioning between screens are in the generated application base class ",Object(o.b)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"."),Object(o.b)("li",{parentName:"ul"},"All the book keeping, making sure that the right amount of memory is allocated, is located in the generated heap base class ",Object(o.b)("inlineCode",{parentName:"li"},"FrontendHeapBase"),".")),Object(o.b)("p",null,"The user is free to edit the user code classes. For instance you could add more widgets. For now we will just implement the ",Object(o.b)("inlineCode",{parentName:"p"},"setRandomColor")," function to actually change the color of ",Object(o.b)("inlineCode",{parentName:"p"},"box1"),"."),Object(o.b)("h3",{id:"code"},"Code"),Object(o.b)("p",null,"Looking at the view base code, we see the setup of the box and button generated by TouchGFX Designer. We also see the setup of and the call to the virtual function ",Object(o.b)("inlineCode",{parentName:"p"},"setRandomColor")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"buttonCallbackHandler"),", but at the moment this function does not do anything:"),Object(o.b)(l.a,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{27-37}","{27-37}":!0}),'/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <touchgfx/Color.hpp>\n#include "BitmapDatabase.hpp"\n\nMyScreenViewBase::MyScreenViewBase() :\n    buttonCallback(this, &MyScreenViewBase::buttonCallbackHandler)\n{\n    box1.setPosition(0, 0, 800, 480);\n    box1.setColor(touchgfx::Color::getColorFrom24BitRGB(255, 255, 255));\n\n    button1.setXY(155, 106);\n    button1.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n    button1.setAction(buttonCallback);\n\n    add(box1);\n    add(button1);\n}\n\nvoid MyScreenViewBase::setupScreen()\n{\n\n}\n\nvoid MyScreenViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &button1)\n    {\n        //Interaction1\n        //When button1 clicked call virtual function\n        //Call setRandomColor\n        setRandomColor();\n    }\n}\n')),Object(o.b)("p",null,"Looking at the header file for the view base class, we see the declaration of ",Object(o.b)("inlineCode",{parentName:"p"},"setRandomColor")," and an instruction to override and implement the function in user code:"),Object(o.b)(l.a,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.hpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#ifndef MYSCREENVIEWBASE_HPP\n#define MYSCREENVIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n#include <touchgfx/widgets/Button.hpp>\n\nclass MyScreenViewBase : public touchgfx::View<MyScreenPresenter>\n{\npublic:\n    MyScreenViewBase();\n    virtual ~MyScreenViewBase() {}\n    virtual void setupScreen();\n\n    /*\n     * Virtual Action Handlers\n     */\n    virtual void setRandomColor()\n    {\n        // Override and implement this function in MyScreen\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box box1;\n    touchgfx::Button button1;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<MyScreenViewBase, const touchgfx::AbstractButton&> buttonCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void buttonCallbackHandler(const touchgfx::AbstractButton& src);\n\n};\n\n#endif // MYSCREENVIEWBASE_HPP\n")),Object(o.b)("p",null,"So let's do just that. Navigate to the user code header file ",Object(o.b)("inlineCode",{parentName:"p"},"MyScreenView.hpp")," and override the function:"),Object(o.b)(l.a,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenView.hpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{14}","{14}":!0}),"#ifndef MYSCREENVIEW_HPP\n#define MYSCREENVIEW_HPP\n\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n\nclass MyScreenView : public MyScreenViewBase\n{\npublic:\n    MyScreenView();\n    virtual ~MyScreenView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void setRandomColor();\nprotected:\n};\n\n#endif // MYSCREENVIEW_HPP\n")),Object(o.b)("p",null,"Then we need to implement the actual behavior of ",Object(o.b)("inlineCode",{parentName:"p"},"setRandomColor")," in the cpp file for ",Object(o.b)("inlineCode",{parentName:"p"},"MyScreenView"),":"),Object(o.b)(l.a,{mdxType:"CodeHeader"},"MyApplication/gui/src/my_screen/MyScreenView.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{19-23}","{19-23}":!0}),"#include <gui/myscreen_screen/MyScreenView.hpp>\n#include <touchgfx/Color.hpp>\n\nMyScreenView::MyScreenView()\n{\n\n}\n\nvoid MyScreenView::setupScreen()\n{\n    MyScreenViewBase::setupScreen();\n}\n\nvoid MyScreenView::tearDownScreen()\n{\n    MyScreenViewBase::tearDownScreen();\n}\n\nvoid MyScreenView::setRandomColor()\n{\n    box1.setColor(touchgfx::Color::getColorFrom24BitRGB(rand()&0xff, rand()&0xff, rand()&0xff));\n    box1.invalidate();\n}\n")),Object(o.b)("p",null,"Running the simulator now shows that we have succeeded in creating a simple application utilizing both generated and user code - the background box now changes to a random color everytime you click the button."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/software-architecture/code-structure/simulator-random-color.gif",caption:"Simulator showcasing the application",mdxType:"Figure"}),Object(o.b)(s.a,{mdxType:"Tip"},"Of course you do not need to use any features of the code generated by TouchGFX Designer but it will potentially save a lot of time. It is possible to do TouchGFX applications the old-school way by just adding the necessary files by hand.",Object(o.b)("br",null),Object(o.b)("br",null),"It is also possible to mix and match. For example, you can have screens that are not defined within the TouchGFX Designer project. You can add the ",Object(o.b)(d.a,{text:"gotoXYZ",mdxType:"InlineCode"})," functions to the ",Object(o.b)(d.a,{text:"FrontendApplication",mdxType:"InlineCode"})," class and add the views, presenters and transitions you need for your screen to the ",Object(o.b)(d.a,{text:"FrontendHeap",mdxType:"InlineCode"}),"."))}g.isMDXComponent=!0},509:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=r},511:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=r},513:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"code-header"},o.a.createElement("div",null,o.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=r},515:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(509),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(i.Component);t.a=s},516:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=r},518:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(509),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(i.Component);t.a=s}}]);