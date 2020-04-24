(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return f}));var a=n(1),r=n(9),i=(n(0),n(508)),o=n(513),c=n(515),b=n(523),l=n(516),p=n(517),s=n(518),u=n(520),d=n(514),m={id:"radio-button",title:"RadioButton"},h={id:"development/ui-development/ui-components/buttons/radio-button",title:"RadioButton",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\development\\ui-development\\ui-components\\buttons\\radio-button.mdx",permalink:"/docs/development/ui-development/ui-components/buttons/radio-button",sidebar:"docs",previous:{title:"ToggleButton",permalink:"/docs/development/ui-development/ui-components/buttons/toggle-button"},next:{title:"RepeatButton",permalink:"/docs/development/ui-development/ui-components/buttons/repeat-button"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]}]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]},{value:"API Reference",id:"api-reference",children:[]}],O={rightToc:g},j="wrapper";function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A RadioButton in TouchGFX is a widget that is aware of touch events and can send a callback when the RadioButton is clicked. A radio button consists of four images, corresponding to a selected or unselected button during a pressed or released state. RadioButtons can be added to a RadioButtonGroup which handles the deselection of radio buttons when a new selection is made."),Object(i.b)("p",null,"The RadioButton can be replicated with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/buttons/flex-button"}),"FlexButton"),". A FlexButton is a more configurable button that takes up a bit more RAM in exchange for flexibility."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-appearance.png",caption:"RadioButton running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The RadioButton can be found in the Buttons widget group in TouchGFX Designer."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-group.png",caption:"RadioButton in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for the RadioButton are described in the following sections."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(s.a,{text:"Name is the unique identifier used in TouchGFX Designer and code",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)(s.a,{text:"The size of a RadioButton is determined by the size of the selected images.",mdxType:"InlineNote"}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget.",Object(i.b)("br",null),Object(i.b)(s.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Selection")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Selected",mdxType:"Property"})," specifies the initial selection state of the button. ",Object(i.b)(b.a,{name:"Deselectable",mdxType:"Property"})," specifies the ability to deselect the button by pressing it while in the selected state.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Group")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Group",mdxType:"Property"})," specifies the name of the group this button will be assigned to. Selection and deselection behaviour is contained within these RadioButtonGroups.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Style")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(i.b)("br",null),Object(i.b)(s.a,{text:"These styles contain images that are free to use",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Image")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Released Image",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Pressed Image",mdxType:"Property"})," specify the images assigned to the pressed and released states from the Designer skin library or the Project folder.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Appearance")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget.",Object(i.b)("br",null),Object(i.b)(s.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by the RadioButton are described in the following sections."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget action")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Trigger")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Radio Button is selected")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A RadioButton has been deselected.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Radio Button is deselected")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A RadioButton has been selected.")))),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"The RadioButton is composed of four images and is dependent on image drawing. Therefore, a RadioButton is considered a fast performing widget on most platforms."),Object(i.b)("p",null,"For more details on image drawing performance, read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a RadioButton."),Object(i.b)(d.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\ncreen1ViewBase::Screen1ViewBase() :\n    radioButtonSelectedCallback(this, &Screen1ViewBase::radioButtonSelectedCallbackHandler)\n{\n    radioButtonName.setXY(136, 114);\n    radioButtonName.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_INACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_PRESSED_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_ACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_NORMAL_ID));\n    radioButtonName.setSelected(false);\n    radioButtonName.setDeselectionEnabled(true);\n\n    add(radioButtonName);\n    radioButtonGroupName.add(radioButtonName);\n\n    radioButtonGroupName.setRadioButtonSelectedHandler(radioButtonSelectedCallback);\n}\n\nvoid Screen1ViewBase::radioButtonSelectedCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &radioButtonName)\n    {\n        //InteractionName\n        //When buttonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),Object(i.b)(l.a,{mdxType:"Tip"},"You can use these functions and the others available in the RadioButton class in user code. Remember to force a redraw by calling ",Object(i.b)(p.a,{text:"radioButtonName.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(i.b)("h2",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the RadioButton, try creating a new application within TouchGFX Designer with the following UI template:"),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-templates/radio-button-example.png",caption:"RadioButton Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(c.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(u.a,{link:"classes/classtouchgfx_1_1_radio_button",mdxType:"API"},"API reference for the RadioButton class"))))}f.isMDXComponent=!0},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},509:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),o=n(39),c=n(510),b=n(24),l=n.n(b);t.a=function(e){var t,n=e.to,b=e.href,p=n||b,s=Object(c.a)(p),u=Object(r.useRef)(!1),d=l.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&s&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,s]),p&&s?i.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(p),u.current=!0)},innerRef:function(e){var n,a;d&&e&&s&&(n=e,a=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:p})):i.a.createElement("a",Object(a.a)({},e,{href:p}))}},510:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},512:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=o},513:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=o},514:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{class:"code-header"},i.a.createElement("div",null,i.a.createElement("h5",null,this.props.children)))},t}(r.Component);t.a=o},515:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=n(512),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(r.Component);t.a=b},516:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=n(512),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(r.Component);t.a=b},517:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",null,this.props.text)},t}(r.Component);t.a=o},518:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=o},520:function(e,t,n){"use strict";n(521);var a=n(5),r=n(0),i=n.n(r),o=n(509),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/docs/api/"+this.props.link;return(i.a.createElement(o.a,{to:e},this.props.children))},t}(r.Component);t.a=c},521:function(e,t,n){"use strict";n(522)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},522:function(e,t,n){var a=n(12),r=n(13),i=n(25),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},523:function(e,t,n){"use strict";n(524);var a=n(5),r=n(0),i=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(r.Component);t.a=o},524:function(e,t,n){var a=n(26).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);