(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return f}));var a=n(1),i=n(9),r=(n(0),n(261)),l=n(262),c=n(271),b=n(266),o=n(274),d=n(275),s=n(263),p=n(268),m=n(273),u={id:"slider",title:"Slider"},g={id:"development/ui-development/ui-components/miscellaneous/slider",title:"Slider",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\development\\ui-development\\ui-components\\miscellaneous\\slider.mdx",permalink:"/docs/development/ui-development/ui-components/miscellaneous/slider",sidebar:"docs",previous:{title:"Shape",permalink:"/docs/development/ui-development/ui-components/shapes/shape"},next:{title:"TextArea",permalink:"/docs/development/ui-development/ui-components/miscellaneous/text-area"}},h=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],O={rightToc:h},j="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A Slider uses three images to display a slider either in a vertical or horizontal orientation. The indicator image of a Slider can be dragged to modify an internal integer value that is broadcasted through callbacks. The value broadcasted operates on an integer value range ",Object(r.b)(s.a,{text:"e.g. 0 to 100",mdxType:"InlineNote"}),"."),Object(r.b)(l.a,{imageSource:"/img/development/ui-development/ui-components/slider/widget-appearance.gif",caption:"Slider running in the simulator",mdxType:"Figure"}),Object(r.b)("h2",{id:"widget-group"},"Widget Group"),Object(r.b)("p",null,"The Slider can be found in the Miscellaneous widget group in TouchGFX Designer."),Object(r.b)(l.a,{imageSource:"/img/development/ui-development/ui-components/slider/widget-group.png",caption:"Slider in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("p",null,"The properties for a Slider in TouchGFX Designer."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Group")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Name")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(b.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(r.b)(s.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Type")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(b.a,{name:"Type",mdxType:"Property"})," specifies whether the Slider should be vertically or horizontally oriented.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Location")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(b.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(r.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"The size of a Slider is taken from the size of the associated images and cannot be altered except by changing the images.",mdxType:"InlineNote"}),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Style")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(b.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"These styles contain images that are free to use",mdxType:"InlineNote"}),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Image")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(b.a,{name:"Background Image",mdxType:"Property"})," specifies the background image that the indicator slides across.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"Background Filled Image",mdxType:"Property"})," specifies the image filling the area on top of the background image behind the indicator.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"Indicator Image",mdxType:"Property"})," specifies the image that can be dragged to change the value of the slider.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(s.a,{text:"The background image and background filled image must both be the same size.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Positions")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(b.a,{name:"Background Position X",mdxType:"Property"})," and ",Object(r.b)(b.a,{name:"Background Position Y",mdxType:"Property"})," specify the top left corner position of the ",Object(r.b)(b.a,{name:"Background Image",mdxType:"Property"})," and ",Object(r.b)(b.a,{name:"Background Filled Image",mdxType:"Property"}),".",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"Indicator Position Min",mdxType:"Property"})," and ",Object(r.b)(b.a,{name:"Indicator Position Max",mdxType:"Property"})," specify the minimum and maximum positions of the ",Object(r.b)(b.a,{name:"Indicator Image",mdxType:"Property"}),".",Object(r.b)("br",null),Object(r.b)(s.a,{text:"For a horizontal slider these two values are in the x-axis and for a vertical slider they are in the y-axis",mdxType:"InlineNote"}),".",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"Indicator Position Y",mdxType:"Property"})," specifies the indicator image's position in the y-axis.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"If the slider is vertically oriented this value instead adjusts in the x-axis.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Values")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(b.a,{name:"Min",mdxType:"Property"})," and ",Object(r.b)(b.a,{name:"Max",mdxType:"Property"})," specifies the internal integer range that is broadcast from the Slider using callbacks.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"Start",mdxType:"Property"})," specifies the initial internal value in the Slider. ",Object(r.b)(s.a,{text:"This also changes the initial position of the indicator.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Mixins")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(b.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(r.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(b.a,{name:"Y",mdxType:"Property"})," values.")))),Object(r.b)("h2",{id:"interactions"},"Interactions"),Object(r.b)("p",null,"The actions and triggers supported by the Slider are described in the following sections."),Object(r.b)("h3",{id:"actions"},"Actions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Standard widget action")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Move widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Hide widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Show widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(r.b)("h3",{id:"triggers"},"Triggers"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Trigger")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Slider adjustment initiated")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A Slider has been clicked or dragged.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Slider adjustment confirmed")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A Slider indicator is no longer being dragged.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Slider value changed")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A Sliders value has changed.")))),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"A Slider consists of three images. Therefore, a Slider is dependent on image drawing and is considered a fast performing widget on most platforms."),Object(r.b)("p",null,"For more details on image drawing performance, read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"generated-code"},"Generated Code"),Object(r.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Slider."),Object(r.b)(m.a,{mdxType:"CodeHeader"},"mainViewBase.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase()\n{\n    slider.setXY(71, 173);\n    slider.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_SLIDER2_ROUND_BACK_ID), touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_SLIDER2_ROUND_FILL_ID), touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_INDICATORS_SLIDER2_ROUND_NOB_ID));\n    slider.setupHorizontalSlider(2, 6, 0, 0, 284);\n    slider.setValueRange(0, 100);\n    slider.setValue(0);\n\n    add(slider);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),Object(r.b)(o.a,{mdxType:"Tip"},"You can use these functions and the others available in the Slider class in user code. Remember to force a redraw by calling ",Object(r.b)(d.a,{text:"slider.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(r.b)("h3",{id:"user-code"},"User Code"),Object(r.b)("p",null,"The following code example shows how to setup the three callbacks of a Slider:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)(d.a,{text:"setStartValueCallback",mdxType:"InlineCode"})),Object(r.b)("li",{parentName:"ul"},Object(r.b)(d.a,{text:"setNewValueCallback",mdxType:"InlineCode"})),Object(r.b)("li",{parentName:"ul"},Object(r.b)(d.a,{text:"setStopValueCallback",mdxType:"InlineCode"}))),Object(r.b)(m.a,{mdxType:"CodeHeader"},"mainView.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueStartedChangeCallback;\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueChangedCallback;\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueConfirmedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void sliderValueStartedChangeCallbackHandler(const touchgfx::Slider& src, int value);\n    void sliderValueChangedCallbackHandler(const touchgfx::Slider& src, int value);\n    void sliderValueConfirmedCallbackHandler(const touchgfx::Slider& src, int value);\n};\n\n#endif // MAINVIEW_HPP\n")),Object(r.b)(m.a,{mdxType:"CodeHeader"},"mainView.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    sliderValueStartedChangeCallback(this, &mainView::sliderValueStartedChangeCallbackHandler),\n    sliderValueChangedCallback(this, &mainView::sliderValueChangedCallbackHandler),\n    sliderValueConfirmedCallback(this, &mainView::sliderValueConfirmedCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    slider.setStartValueCallback(sliderValueStartedChangeCallback);\n    slider.setNewValueCallback(sliderValueChangedCallback);\n    slider.setStopValueCallback(sliderValueConfirmedCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::sliderValueStartedChangeCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the slider starts changing value.\n    }\n}\n\nvoid mainView::sliderValueChangedCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the value of the slider changes.\n    }\n}\n\nvoid mainView::sliderValueConfirmedCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the slider stops the changing value.\n    }\n}\n")),Object(r.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(r.b)("p",null,"To further explore the Slider, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(r.b)(l.a,{imageSource:"/img/development/ui-development/ui-templates/slider-example.png",caption:"Slider Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)(l.a,{imageSource:"/img/development/ui-development/ui-templates/pool-demo.png",caption:"Pool Demo UI template in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)(c.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,Object(r.b)(p.a,{link:"classtouchgfx_1_1_slider.html",mdxType:"API"},"API reference for the Slider class"))))}f.isMDXComponent=!0},263:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=l},266:function(e,t,n){"use strict";n(267);var a=n(5),i=n(0),r=n.n(i),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.name)},t}(i.Component);t.a=l},267:function(e,t,n){var a=n(24).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(11)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},268:function(e,t,n){"use strict";n(269);var a=n(5),i=n(0),r=n.n(i),l=n(264),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return r.a.createElement(l.a,{to:e,target:"_blank"},this.props.children)},t}(i.Component);t.a=c},269:function(e,t,n){"use strict";n(270)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},270:function(e,t,n){var a=n(17),i=n(18),r=n(23),l=/"/g,c=function(e,t,n,a){var i=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(l,"&quot;")+'"'),c+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);