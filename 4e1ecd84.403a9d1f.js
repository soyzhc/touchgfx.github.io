(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return f}));var a=n(1),r=n(9),i=(n(0),n(261)),l=n(262),c=n(271),o=n(266),b=n(274),s=n(275),p=n(263),d=n(268),m=n(273),h={id:"scroll-wheel",title:"ScrollWheel"},u={id:"development/ui-development/ui-components/containers/scroll-wheel",title:"ScrollWheel",description:"import Figure from '@site/components/Figure'",source:"@site/docs\\development\\ui-development\\ui-components\\containers\\scroll-wheel.mdx",permalink:"/docs/development/ui-development/ui-components/containers/scroll-wheel",sidebar:"docs",previous:{title:"ScrollList",permalink:"/docs/development/ui-development/ui-components/containers/scroll-list"},next:{title:"BoxProgress",permalink:"/docs/development/ui-development/ui-components/progress-indicators/box-progress"}},O=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[{value:"Item Templates",id:"item-templates",children:[]}]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:O},g="wrapper";function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(g,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ScrollWheel is a scrollable menu containing multiple items, which are dynamically updated when scrolling through the items in the wheel, and the item which is selected is moved into focus. Enabling the code to react to interactions with the ScrollWheel, different callbacks can be invoked based on the interaction with the items in the wheel."),Object(i.b)(l.a,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-appearance.gif",caption:"ScrollWheel running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The ScrollWheel can be found in the Containers widget group in TouchGFX Designer."),Object(i.b)(l.a,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-group.png",caption:"ScrollWheel in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a ScrollWheel in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(o.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(p.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Type")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(o.a,{name:"Type",mdxType:"Property"})," specifies whether the ScrollWheel is oriented vertically or horizontally.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(o.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(o.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(o.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget.",Object(i.b)("br",null),Object(i.b)(p.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Item Template")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(o.a,{name:"Item Template",mdxType:"Property"})," specifies which CustomContainer to use as template.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Number of Items",mdxType:"Property"})," specifies the number of items present in the ScrollWheel.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Initial Selected Item",mdxType:"Property"})," specifies which item is selected first.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Use Selected Style Template",mdxType:"Property"})," specifies whether to use a seperate template for the selected item.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Selected Style Template",mdxType:"Property"})," specifies which CustomContainer to use as selected template.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"List Appearance")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(o.a,{name:"Circular",mdxType:"Property"})," specifies if the items in the ScrollWheel will loop when reaching the end.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Selected Item Offset",mdxType:"Property"})," specifies the location of the selected item.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Item Margin",mdxType:"Property"})," specifies the spacing between items.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Extra Size Before",mdxType:"Property"})," and ",Object(i.b)(o.a,{name:"Extra Size After",mdxType:"Property"})," specify the size of the area in which ",Object(i.b)(o.a,{name:"Selected Style Template",mdxType:"Property"})," is shown.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Margin Before",mdxType:"Property"})," and ",Object(i.b)(o.a,{name:"Margin After",mdxType:"Property"})," specify the size of the margin before and after the area in which ",Object(i.b)(o.a,{name:"Selected Style Template",mdxType:"Property"})," is shown.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Animation")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(o.a,{name:"Easing",mdxType:"Property"})," and ",Object(i.b)(o.a,{name:"Easing Option",mdxType:"Property"})," specify which easing equation to use for animations.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"Swipe Acc.",mdxType:"Property"})," and ",Object(i.b)(o.a,{name:"Drag Acc.",mdxType:"Property"})," specify the acceleration when scrolling.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(o.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(o.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(o.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(o.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h3",{id:"item-templates"},"Item Templates"),Object(i.b)("p",null,"The items in a ScrollList are based on a concept called ",Object(i.b)(o.a,{name:"Item Template",mdxType:"Property"})," which is a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/touchgfx-engine-features/custom-containers"}),"CustomContainer")," that serves as a base for the graphical elements for the items in the ScrollWheel.\nTo highlight the selected item, the ScrollWheel has the option to select an Item Template called ",Object(i.b)(o.a,{name:"Selected Style Template",mdxType:"Property"}),", which is only used for the selected item.\nBefore creating a ScrollWheel, a CustomContainer for the Item Template, along with a ",Object(i.b)(o.a,{name:"Selected Style Template",mdxType:"Property"})," if enabled, should be created."),Object(i.b)("p",null,"After the ScrollWheel is created, the CustomContainer can be selected under the property ",Object(i.b)(o.a,{name:"Item Template",mdxType:"Property"}),". When selecting the Custom Container for the ",Object(i.b)(o.a,{name:"Item Template",mdxType:"Property"}),", the ScrollWheel resizes to fit with the size property that is not in the scrollable direction (",Object(i.b)(p.a,{text:"width for vertical orientation and height for horizontal orientation",mdxType:"InlineNote"}),") of the selected Custom Container.\nChanging the other size property (",Object(i.b)(p.a,{text:"height for vertical orientation and width for horizontal orientation",mdxType:"InlineNote"}),") determines the number of items visible."),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by the ScrollWheel are described in the following sections."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget action")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"A ScrollWheel does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"A ScrollWheel is a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/containers/container"}),"Container")," type, and does not per default appear in the draw chain. Therefore, the performance is wholly dependent on the drawing performance of the children."),Object(i.b)("p",null,"For more details on drawing performance, read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a ScrollWheel."),Object(i.b)(m.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollWheel.setPosition(140, 10, 200, 252);\n    scrollWheel.setHorizontal(false);\n    scrollWheel.setCircular(false);\n    scrollWheel.setEasingEquation(touchgfx::EasingEquations::backEaseIn);\n    scrollWheel.setSwipeAcceleration(10);\n    scrollWheel.setDragAcceleration(10);\n    scrollWheel.setNumberOfItems(60);\n    scrollWheel.setSelectedItemOffset(100);\n    scrollWheel.setSelectedItemExtraSize(0, 0);\n    scrollWheel.setSelectedItemMargin(0, 0);\n    scrollWheel.setDrawableSize(50, 3);\n    scrollWheel.setDrawables(scrollWheelListItems, updateItemCallback,\n                              scrollWheelSelectedListItems, updateItemCallback);\n    scrollWheel.animateToItem(0, 0);\n\n    add(scrollWheel);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollWheel.initialize();\n    for (int i = 0; i < scrollWheelListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelListItems[i].initialize();\n    }\n    for (int i = 0; i < scrollWheelSelectedListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelSelectedListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollWheelListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollWheelUpdateItem(*cc, itemIndex);\n    }\n    else if (items == &scrollWheelSelectedListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextCenterContainer* cc = (TextCenterContainer*)d;\n        scrollWheelUpdateCenterItem(*cc, itemIndex);\n    }\n}\n')),Object(i.b)(b.a,{mdxType:"Tip"},"You can use these functions and the others available in the ScrollWheel class in user code. Remember to force a redraw by calling ",Object(i.b)(s.a,{text:"scrollWheel.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(i.b)("h3",{id:"user-code"},"User Code"),Object(i.b)("p",null,"After the graphical elements for the ScrollWheel and its properties are set, user code can be written to update the items in the ScrollWheel. The header file for the Screen1ViewBase class which is generated by the TouchGFX Designer is shown below:"),Object(i.b)(m.a,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{8-11,13-16}","{8-11,13-16}":!0}),"class Screen1ViewBase : public touchgfx::View\n{\npublic:\n    Screen1ViewBase();\n    virtual ~Screen1ViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n\n    touchgfx::BoxWithBorder boxWithBorder1;\n    touchgfx::ScrollWheelWithSelectionStyle scrollWheel1;\n    touchgfx::DrawableListItems<CustomContainer1, 6> scrollWheel1ListItems;\n    touchgfx::DrawableListItems<CustomContainer2, 2> scrollWheel1SelectedListItems;\n\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<Screen1ViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n\n};\n")),Object(i.b)("p",null,"When the TouchGFX Designer generates the code for ScrollWheel, the functions ",Object(i.b)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," and ",Object(i.b)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem"),", highlighted above, is created for the user to override and update the items in the ScrollWheel."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"UpdateItem")," function is always generated for a ScrollWheel and can be implemented to updated the contained items, while the ",Object(i.b)("inlineCode",{parentName:"p"},"UpdateCenterItem")," function updates the item based on the ",Object(i.b)(o.a,{name:"Selected Style Template",mdxType:"Property"})," and is therefore only generated if the usage of a ",Object(i.b)(o.a,{name:"Selected Style Template",mdxType:"Property"})," is selected. Other than updating different items, the two functions contain the same parameters used for updating the items in the the ScrollWheel."),Object(i.b)("p",null,"The parameter ",Object(i.b)("inlineCode",{parentName:"p"},"itemIndex")," contains the index value of the item, which is used to identify which item is being updated. The parameter ",Object(i.b)("inlineCode",{parentName:"p"},"item")," is a reference to a visible item in the ScrollWheel. Updating the appearance for the parameter ",Object(i.b)("inlineCode",{parentName:"p"},"item")," results in an update to the render for a visible item in the ScrollWheel."),Object(i.b)("p",null,"An example implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," and ",Object(i.b)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," in the user code files ",Object(i.b)("inlineCode",{parentName:"p"},"Screen1View.hpp")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Screen1View.cpp")," is shown below:"),Object(i.b)(m.a,{mdxType:"CodeHeader"},"Screen1View.hpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex);\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HPP\n")),Object(i.b)(m.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n\nvoid Screen1View::scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n")),Object(i.b)("p",null,"In the header file ",Object(i.b)("inlineCode",{parentName:"p"},"Screen1View.hpp"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," and ",Object(i.b)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," functions are overridden and are then implemented in ",Object(i.b)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"."),Object(i.b)("p",null,"The goal of this example is to update the text in the Item Template with the index value of the items which are visible, like the example shown ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/containers/scroll-wheel"}),"in the beginning of this section"),". Since both the Item Template and the Selected Style Template are based on CustomContainer, a ",Object(i.b)("inlineCode",{parentName:"p"},"setIndex")," function is created for both CustomContainers. The ",Object(i.b)("inlineCode",{parentName:"p"},"setIndex")," function is able to take the ",Object(i.b)("inlineCode",{parentName:"p"},"itemIndex")," parameter and update the text in the Item Template and the Selected Style Template.\nCalling the ",Object(i.b)("inlineCode",{parentName:"p"},"setIndex")," for an item results in an update to the appearance of the visible items thereby showing their index value."),Object(i.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the ScrollWheel, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(i.b)(l.a,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example.png",caption:"ScrollWheel and List Example UI Template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(c.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(d.a,{link:"/classtouchgfx_1_1_scroll_wheel.html",mdxType:"API"},"API reference for the ScrollWheel class"))))}f.isMDXComponent=!0},263:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=l},266:function(e,t,n){"use strict";n(267);var a=n(5),r=n(0),i=n.n(r),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(r.Component);t.a=l},267:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(11)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},268:function(e,t,n){"use strict";n(269);var a=n(5),r=n(0),i=n.n(r),l=n(264),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return i.a.createElement(l.a,{to:e,target:"_blank"},this.props.children)},t}(r.Component);t.a=c},269:function(e,t,n){"use strict";n(270)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},270:function(e,t,n){var a=n(17),r=n(18),i=n(23),l=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(l,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);