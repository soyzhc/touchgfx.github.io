(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(9),i=(r(0),r(208)),a=r(209),c={id:"HardwareSelectionIntroduction",title:"Introduction"},p={id:"Development/HardwareSelection/HardwareSelectionIntroduction",title:"Introduction",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\HardwareSelection\\Introduction.mdx",permalink:"/docs/Development/HardwareSelection/HardwareSelectionIntroduction",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/Development/DevelopmentIntroduction"},next:{title:"MCU",permalink:"/docs/Development/HardwareSelection/HardwareComponents/HardwareSelectionMCU"}},u=[],l={rightToc:u},s="wrapper";function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{imageSource:"/img/Development/HardwareSelection/activities_selected_000.png",caption:"Project activity",noShadow:!0,width:"600",mdxType:"Figure"}),Object(i.b)(a.a,{imageSource:"/img/Development/HardwareSelection/components_selected_000.png",caption:"Project component",noShadow:!0,width:"600",mdxType:"Figure"}),Object(i.b)("p",null,"###TODO Write"))}d.isMDXComponent=!0},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||i;return r?o.a.createElement(f,c({ref:t},u,{components:r})):o.a.createElement(f,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},209:function(e,t,r){"use strict";var n=r(5),o=r(0),i=r.n(o),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,r=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("img",{width:t,height:r,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("img",{width:t,height:r,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption))},t}(o.Component);t.a=a}}]);