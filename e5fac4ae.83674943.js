(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{472:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return j}));var r=n(1),a=n(9),i=(n(0),n(508)),o=n(513),c=n(515),b=n(523),l=n(516),p=n(517),s=n(518),d=n(520),u=n(514),h={id:"box-with-border",title:"BoxWithBorder"},m={id:"development/ui-development/ui-components/shapes/box-with-border",title:"BoxWithBorder",description:"import Figure from '@site/components/Figure'",source:"@site/docs\\development\\ui-development\\ui-components\\shapes\\box-with-border.mdx",permalink:"/docs/development/ui-development/ui-components/shapes/box-with-border",sidebar:"docs",previous:{title:"Box",permalink:"/docs/development/ui-development/ui-components/shapes/box"},next:{title:"Line",permalink:"/docs/development/ui-development/ui-components/shapes/line"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],O={rightToc:g},f="wrapper";function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(f,Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A BoxWithBorder in TouchGFX is a rectangular shaped widget that can be assigned a single color for all contained pixels within a specified border with a seperate color and size. The BoxWithBorder can be assigned any size and position."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/box-with-border/widget-appearance.png",caption:"BoxWithBorder running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The BoxWithBorder can be found in the Shapes widget group in TouchGFX Designer."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/box-with-border/widget-group.png",caption:"BoxWithBorder in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a BoxWithBorder in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(s.a,{text:"Name is the unique identifier used in TouchGFX Designer and code",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(i.b)(s.a,{text:"Making the widget invisible also disables interacting with the widget through the screen",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Appearance")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Color",mdxType:"Property"})," specifies the color of all the pixels contained within the rectangle.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Border Color",mdxType:"Property"})," specifies the color of the outer border pixels.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Border Size",mdxType:"Property"})," specifies the size of the outer border.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget. ",Object(i.b)(s.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by a BoxWithBorder in TouchGFX Designer."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Widget specific actions")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Resize widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Resize a widget.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Change box color")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Change the color of a Box widget.")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget actions")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"A BoxWithBorder does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"A BoxWithBorder is one of the most lightweight widgets in all of TouchGFX because it does not have to read any pixel data or do any complicated calculations. Therefore, the BoxWithBorder is considered a very fast performing widget on most platforms."),Object(i.b)("p",null,"For more details on drawing performance, read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a BoxWithBorder widget."),Object(i.b)(u.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    boxWithBorderName.setPosition(240, 56, 337, 132);\n    boxWithBorderName.setColor(touchgfx::Color::getColorFrom24BitRGB(212, 27, 27));\n    boxWithBorderName.setBorderColor(touchgfx::Color::getColorFrom24BitRGB(21, 24, 202));\n    boxWithBorderName.setBorderSize(20);\n\n    add(boxWithBorderName);\n}\n")),Object(i.b)(l.a,{mdxType:"Tip"},Object(i.b)("li",null,"You can use these functions and the others available in the BoxWithBorder class in user code. Remember to force a redraw by calling ",Object(i.b)(p.a,{text:"boxWithBorderName.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget.")),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(c.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(d.a,{link:"classes/classtouchgfx_1_1_box_with_border",mdxType:"API"},"API reference for the BoxWithBorder class"))))}j.isMDXComponent=!0},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,h=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?a.a.createElement(h,c({ref:t},l,{components:n})):a.a.createElement(h,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},509:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(39),c=n(510),b=n(24),l=n.n(b);t.a=function(e){var t,n=e.to,b=e.href,p=n||b,s=Object(c.a)(p),d=Object(a.useRef)(!1),u=l.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!u&&s&&window.docusaurus.prefetch(p),function(){u&&t&&t.disconnect()}}),[p,u,s]),p&&s?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var n,r;u&&e&&s&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):i.a.createElement("a",Object(r.a)({},e,{href:p}))}},510:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},512:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(a.Component);t.a=o},513:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=o},514:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{class:"code-header"},i.a.createElement("div",null,i.a.createElement("h5",null,this.props.children)))},t}(a.Component);t.a=o},515:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=n(512),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(a.Component);t.a=b},516:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=n(512),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(a.Component);t.a=b},517:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=o},518:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=o},520:function(e,t,n){"use strict";n(521);var r=n(5),a=n(0),i=n.n(a),o=n(509),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="/docs/api/"+this.props.link;return(i.a.createElement(o.a,{to:e},this.props.children))},t}(a.Component);t.a=c},521:function(e,t,n){"use strict";n(522)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},522:function(e,t,n){var r=n(12),a=n(13),i=n(25),o=/"/g,c=function(e,t,n,r){var a=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},523:function(e,t,n){"use strict";n(524);var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=o},524:function(e,t,n){var r=n(26).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);