(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{357:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return m})),r.d(t,"metadata",(function(){return g})),r.d(t,"rightToc",(function(){return h})),r.d(t,"default",(function(){return f}));var n=r(1),a=r(9),i=(r(0),r(508)),o=r(513),c=r(515),s=r(516),p=r(523),b=r(517),l=r(518),u=r(520),d=r(514),m={id:"image-progress",title:"ImageProgress"},g={id:"development/ui-development/ui-components/progress-indicators/image-progress",title:"ImageProgress",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\development\\ui-development\\ui-components\\progress-indicators\\image-progress.mdx",permalink:"/docs/development/ui-development/ui-components/progress-indicators/image-progress",sidebar:"docs",previous:{title:"BoxProgress",permalink:"/docs/development/ui-development/ui-components/progress-indicators/box-progress"},next:{title:"TextProgress",permalink:"/docs/development/ui-development/ui-components/progress-indicators/text-progress"}},h=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],O={rightToc:h},j="wrapper";function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)(j,Object(n.a)({},O,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An ImageProgress shows the current progress by using a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/images/tiled-image"}),"TiledImage")," as the progress indicator on top of a background ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/images/image"}),"Image"),". The progress image, the ",Object(i.b)(p.a,{name:"Alpha",mdxType:"Property"})," and the ",Object(i.b)(p.a,{name:"Direction",mdxType:"Property"})," towards which the image will progress can be configured.\nIt is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/image-progress/widget-appearance.gif",caption:"ImageProgress running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The ImageProgress can be found in the Progress Indicators widget group in TouchGFX Designer."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/image-progress/widget-group.png",caption:"ImageProgress in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for an ImageProgress in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(l.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)(l.a,{text:"The size of an ImageProgress is determined by the size of the selected background image.",mdxType:"InlineNote"}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget.",Object(i.b)("br",null),Object(i.b)(l.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Style")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(i.b)("br",null),Object(i.b)(l.a,{text:"These styles contain images that are free to use.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Image")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Background",mdxType:"Property"})," sets the background image.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Progress",mdxType:"Property"})," sets the image used to display progress.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Progress Position")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Y",mdxType:"Property"})," coordinates specify the top left corner of the progress image relative to the position of the ProgressIndicator.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"H",mdxType:"Property"})," specify the width and height of the progress image.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Values")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Range Min",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Range Max",mdxType:"Property"})," specify the minimum and maximum integer values of the indicator.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Initial",mdxType:"Property"})," specifies the initial value of the progress indicator.",Object(i.b)(p.a,{name:"Steps Total",mdxType:"Property"})," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Steps Min",mdxType:"Property"})," specifies the minimum steps the progress indicator shows.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Appearance")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Direction",mdxType:"Property"})," specifies in which direction the progress indicator should progress.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Anchor progress image at zero",mdxType:"Property"}),' specifies if the progress image should be anchored in the 0 point relative to the progress direction, i.e. whether the image is "revealed" or "pulled".',Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget. ",Object(i.b)(l.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(p.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(p.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by the ImageProgress are described in the following sections."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Widget specific actions")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Set value")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the value of the progress indicator.")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget actions")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"The ImageProgress does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"An ImageProgress consists of a TiledImage and a background Image. Therefore, the ImageProgress is dependent on image drawing and is considered a fast performing widget on most platforms."),Object(i.b)("p",null,"For more details on image drawing performance, read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up an ImageProgress."),Object(i.b)(d.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"imageProgress.setXY(148, 126);\nimageProgress.setProgressIndicatorPosition(2, 2, 180, 16);\nimageProgress.setRange(0, 100);\nimageProgress.setDirection(touchgfx::AbstractDirectionProgress::RIGHT);\nimageProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_PROGRESS_INDICATOR_BG_SQUARE_DEGREES_ID));\nimageProgress.setBitmap(BITMAP_BLUE_PROGRESSINDICATORS_FILL_TILING_PROGRESS_INDICATOR_FILL_STRIPED_NORMAL_HORIZONTAL_ID);\nimageProgress.setValue(0);\nimageProgress.setAnchorAtZero(false);\n")),Object(i.b)(s.a,{mdxType:"Tip"},"You can use these functions and the others available in the ImageProgress class in user code. Remember to force a redraw by calling ",Object(i.b)(b.a,{text:"imageProgress1.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(i.b)("h3",{id:"user-code"},"User Code"),Object(i.b)("p",null,"The following example illustrates how to implement the ",Object(i.b)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to simulate progress. Running this code creates the application shown at the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/progress-indicators/image-progress"}),"beginning of this article"),"."),Object(i.b)(d.a,{mdxType:"CodeHeader"},"Screen1View.hpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),Object(i.b)(d.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = imageProgress.getValue();\n    int16_t max;\n    int16_t min;\n    imageProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    imageProgress.setValue(nextValue);\n}\n")),Object(i.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the ImageProgress, try creating a new application within TouchGFX Designer with the following UI template:"),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example.png",caption:"ProgressIndicator Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(c.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(u.a,{link:"classes/classtouchgfx_1_1_image_progress",mdxType:"API"},"API reference for the ImageProgress class"))))}f.isMDXComponent=!0},508:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(r),u=n,m=l["".concat(o,".").concat(u)]||l[u]||d[u]||i;return r?a.a.createElement(m,c({ref:t},p,{components:r})):a.a.createElement(m,c({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},509:function(e,t,r){"use strict";var n=r(1),a=r(0),i=r.n(a),o=r(39),c=r(510),s=r(24),p=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,b=r||s,l=Object(c.a)(b),u=Object(a.useRef)(!1),d=p.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&l&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,l]),b&&l?i.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(b),u.current=!0)},innerRef:function(e){var r,n;d&&e&&l&&(r=e,n=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:b})):i.a.createElement("a",Object(n.a)({},e,{href:b}))}},510:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))},512:function(e,t,r){"use strict";var n=r(5),a=r(0),i=r.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(a.Component);t.a=o},513:function(e,t,r){"use strict";var n=r(5),a=r(0),i=r.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,r=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:r,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:r,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=o},514:function(e,t,r){"use strict";var n=r(5),a=r(0),i=r.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{class:"code-header"},i.a.createElement("div",null,i.a.createElement("h5",null,this.props.children)))},t}(a.Component);t.a=o},515:function(e,t,r){"use strict";var n=r(5),a=r(0),i=r.n(a),o=r(512),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(a.Component);t.a=s},516:function(e,t,r){"use strict";var n=r(5),a=r(0),i=r.n(a),o=r(512),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(a.Component);t.a=s},517:function(e,t,r){"use strict";var n=r(5),a=r(0),i=r.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=o},518:function(e,t,r){"use strict";var n=r(5),a=r(0),i=r.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=o},520:function(e,t,r){"use strict";r(521);var n=r(5),a=r(0),i=r.n(a),o=r(509),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="/docs/api/"+this.props.link;return(i.a.createElement(o.a,{to:e},this.props.children))},t}(a.Component);t.a=c},521:function(e,t,r){"use strict";r(522)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},522:function(e,t,r){var n=r(12),a=r(13),i=r(25),o=/"/g,c=function(e,t,r,n){var a=String(i(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},523:function(e,t,r){"use strict";r(524);var n=r(5),a=r(0),i=r.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=o},524:function(e,t,r){var n=r(26).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||r(10)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);