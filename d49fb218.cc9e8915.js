(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{192:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(9),c=(r(0),r(217)),i=r(220),a=r(221),l=(r(218),{id:"Colors",title:"Colors"}),s={id:"BasicConcepts/Colors",title:"Colors",description:"import Link from '@docusaurus/Link';",source:"@site/docs\\BasicConcepts\\Colors.mdx",permalink:"/docs/BasicConcepts/Colors",sidebar:"docs",previous:{title:"Graphics Engine",permalink:"/docs/BasicConcepts/GraphicsEngine"},next:{title:"Engine Architecture",permalink:"/docs/BasicConcepts/EngineArchitecture"}},p=[{value:"Color depth",id:"color-depth",children:[{value:"Direct color",id:"direct-color",children:[]},{value:"True color",id:"true-color",children:[]}]},{value:"Formats",id:"formats",children:[{value:"Grayscale",id:"grayscale",children:[]},{value:"Palettized colors",id:"palettized-colors",children:[]}]},{value:"Framebuffer colors",id:"framebuffer-colors",children:[]},{value:"Image colors",id:"image-colors",children:[]},{value:"Text colors",id:"text-colors",children:[]},{value:"Pros and cons",id:"pros-and-cons",children:[{value:"Chrom-ART support.",id:"chrom-art-support",children:[]}]}],u={rightToc:p},h="wrapper";function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)(h,Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The possible colors of an application has an impact on many parts of the application.\nFrom the visual appearance to memory consumption and overall performance.\nThis section will detail the color format choices available in TouchGFX and highlight pros and cons and where they apply."),Object(c.b)("h2",{id:"color-depth"},"Color depth"),Object(c.b)("p",null,"Every pixel has a color.\nIn TouchGFX such a color is represented by a number.\nColor depth describes the number of possible colors. The color depth is measured in bits per pixel (bpp)."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A color depth of 1 bpp implies that only two colors can be represented. Zero and one. Typically black and white."),Object(c.b)("li",{parentName:"ul"},"A color depth of 2 bpp implies that four different colors can be represented. One through three."),Object(c.b)("li",{parentName:"ul"},"..."),Object(c.b)("li",{parentName:"ul"},"A color depth of 24 bpp implies that (2^24) 16,777,216 different colors can be represented.")),Object(c.b)("h3",{id:"direct-color"},"Direct color"),Object(c.b)("h3",{id:"true-color"},"True color"),Object(c.b)("h2",{id:"formats"},"Formats"),Object(c.b)("h3",{id:"grayscale"},"Grayscale"),Object(c.b)("h3",{id:"palettized-colors"},"Palettized colors"),Object(c.b)("h2",{id:"framebuffer-colors"},"Framebuffer colors"),Object(c.b)("p",null,"The framebuffer stores pixels. Each pixel will be presented on screen. The color format chosen for the "),Object(c.b)("h3",{id:""}),Object(c.b)("h2",{id:"image-colors"},"Image colors"),Object(c.b)("h2",{id:"text-colors"},"Text colors"),Object(c.b)("h2",{id:"pros-and-cons"},"Pros and cons"),Object(c.b)("h3",{id:"chrom-art-support"},"Chrom-ART support."),Object(c.b)(a.a,{mdxType:"FurtherReading"},Object(c.b)("li",null,"Wikipedia article on ",Object(c.b)(i.a,{to:"https://en.wikipedia.org/wiki/Color_depth",mdxType:"Link"},"color depth")),"."))}d.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||c;return r?o.a.createElement(f,a({ref:t},s,{components:r})):o.a.createElement(f,a({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:n,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},218:function(e,t,r){"use strict";var n=r(5),o=r(0),c=r.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,r=this.props.height;return e?c.a.createElement("div",{class:"figure noshadow"},c.a.createElement("a",{href:this.props.imageSource,target:"_blank"},c.a.createElement("img",{width:t,height:r,src:this.props.imageSource})),c.a.createElement("p",null,this.props.caption)):c.a.createElement("div",{class:"figure"},c.a.createElement("a",{href:this.props.imageSource,target:"_blank"},c.a.createElement("img",{width:t,height:r,src:this.props.imageSource})),c.a.createElement("p",null,this.props.caption))},t}(o.Component);t.a=i},219:function(e,t,r){"use strict";var n=r(5),o=r(0),c=r.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return c.a.createElement("div",{class:e},c.a.createElement("div",{class:"highlight-heading"},c.a.createElement("h5",null,c.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),c.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(o.Component);t.a=i},220:function(e,t,r){"use strict";var n=r(1),o=r(0),c=r.n(o),i=r(34),a=/^\/(?!\/)/;t.a=function(e){var t,r=e.to,l=e.href,s=r||l,p=a.test(s),u=Object(o.useRef)(!1),h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(o.useEffect)((function(){return!h&&p&&window.docusaurus.prefetch(s),function(){h&&t&&t.disconnect()}}),[s,h,p]),s&&p?c.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(s),u.current=!0)},innerRef:function(e){var r,n;h&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:s})):c.a.createElement("a",Object(n.a)({},e,{href:s}))}},221:function(e,t,r){"use strict";var n=r(5),o=r(0),c=r.n(o),i=r(219),a=c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},c.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return c.a.createElement(i.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)},t}(o.Component);t.a=l}}]);