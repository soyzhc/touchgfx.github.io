(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{305:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},306:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},307:function(e,t,a){"use strict";var n=a(0),r=a(305);t.a=function(){return Object(n.useContext)(r.a)}},312:function(e,t,a){"use strict";var n=a(0),r=a(286),c="",o="dark";t.a=function(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):c),l=a[0],i=a[1],s=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[i]),u=Object(n.useCallback)((function(){i(c),s(c)}),[]),d=Object(n.useCallback)((function(){i(o),s(o)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",l)}),[l]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&i(e)}catch(a){console.error(a)}}),[i]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?o:c)}))}),[]),{isDarkTheme:l===o,setLightTheme:u,setDarkTheme:d}}},313:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(286),o=a(132),l=a.n(o),i="docusaurus.announcement.dismiss",s="docusaurus.announcement.id";t.a=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,o=a.id,u=a.content,d=a.backgroundColor,h=a.textColor,f=Object(n.useState)(!0),m=f[0],b=f[1];return Object(n.useEffect)((function(){var e=localStorage.getItem(s),t=o!==e;localStorage.setItem(s,o),t&&localStorage.setItem(i,!1),(t||"false"===localStorage.getItem(i))&&b(!1)}),[]),!u||m?null:r.a.createElement("div",{className:l.a.announcementBar,style:{backgroundColor:d,color:h},role:"banner"},r.a.createElement("div",{className:l.a.announcementBarContent,dangerouslySetInnerHTML:{__html:u}}),r.a.createElement("button",{type:"button",className:l.a.announcementBarClose,onClick:function(){localStorage.setItem(i,!0),b(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}},314:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},315:function(e,t,a){"use strict";var n=a(286),r=a(307),c=a(290),o=a(292);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,u=i.href||t,d={};i.target?d={target:i.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var h=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(h),logoAlt:i.alt}}},316:function(e,t,a){"use strict";var n=a(1),r=a(9),c=a(0),o=a.n(c),l=a(288),i=a.n(l),s=a(272),u=a(286),d=a(290),h=a(136),f=a.n(h);function m(e){var t=e.to,a=e.href,c=e.label,l=Object(r.a)(e,["to","href","label"]),i=Object(d.a)(t);return o.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},l),c)}var b=function(e){var t=e.url,a=e.alt;return(o.a.createElement("img",{className:"footer__logo",alt:a,src:t}))};t.a=function(){var e=Object(u.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,c=n.links,l=void 0===c?[]:c,s=n.logo,h=void 0===s?{}:s,v=Object(d.a)(h.src);return a?o.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},l&&l.length>0&&o.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(m,e))}))):null)}))),(h||r)&&o.a.createElement("div",{className:"text--center"},h&&h.src&&o.a.createElement("div",{className:"margin-bottom--sm"},h.href?o.a.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},o.a.createElement(b,{alt:h.alt,url:v})):o.a.createElement(b,{alt:h.alt,url:v})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},329:function(e,t,a){"use strict";var n=a(1),r=(a(295),a(78),a(9)),c=a(0),o=a.n(c),l=a(288),i=a.n(l),s=a(272),u=a(286),d=a(290),h=(a(62),a(28),a(19),a(20),a(86),a(306)),f=(a(133),function(e){var t=Object(c.useState)(!1),n=t[0],r=t[1],l=Object(c.useRef)(null),s=Object(u.a)().siteConfig,d=(void 0===s?{}:s).themeConfig.algolia,f=Object(h.b)();var m=function(e){void 0===e&&(e=!0),n||Promise.all([a.e(132).then(a.t.bind(null,400,7)),a.e(85).then(a.t.bind(null,401,7))]).then((function(t){var a=t[0].default;r(!0),window.docsearch=a,function(e){window.docsearch({appId:d.appId,apiKey:d.apiKey,indexName:d.indexName,inputSelector:"#search_input_react",algoliaOptions:d.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;f.push(r)}}),e&&l.current.focus()}(e)}))},b=Object(c.useCallback)((function(){m(),n&&l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(c.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),p=Object(c.useCallback)((function(e){var t="mouseover"!==e.type;m(t)}));return o.a.createElement("div",{className:"navbar__search",key:"search-box"},o.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),o.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:p,onFocus:p,onBlur:v,ref:l}))}),m=a(336),b=a.n(m),v=a(134),p=a.n(v),g=function(){return o.a.createElement("span",{className:i()(p.a.toggle,p.a.moon)})},k=function(){return o.a.createElement("span",{className:i()(p.a.toggle,p.a.sun)})},E=function(e){var t=Object(u.a)().isClient;return(o.a.createElement(b.a,Object(n.a)({disabled:!t,icons:{checked:o.a.createElement(g,null),unchecked:o.a.createElement(k,null)}},e)))},_=a(307);var O=function(e){var t=Object(c.useState)(e),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){return n(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,n]},y=function(e){var t=Object(c.useState)(!0),a=t[0],n=t[1],r=Object(c.useState)(!1),o=r[0],l=r[1],i=Object(c.useState)(0),s=i[0],u=i[1],d=Object(c.useState)(0),f=d[0],m=d[1],b=Object(c.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(h.c)(),p=O(v.hash),g=p[0],k=p[1],E=function(){var e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&n(!0),!(e<f)){if(o)return l(!1),n(!1),void u(e);var t=document.documentElement.scrollHeight-f,a=window.innerHeight;s&&e>=s?n(!1):e+a<t&&n(!0),u(e)}};return Object(c.useEffect)((function(){if(e)return window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[s,f]),Object(c.useEffect)((function(){e&&(n(!0),k(v.hash))}),[v]),Object(c.useEffect)((function(){e&&g&&l(!0)}),[g]),{navbarRef:b,isNavbarVisible:a}},j=a(314),C=a(315),N=a(135),w=a.n(N);function S(e){var t=e.activeBasePath,a=e.to,c=e.href,l=e.label,i=(e.position,Object(r.a)(e,["activeBasePath","to","href","label","position"])),u=Object(d.a)(a),h=Object(d.a)(t);return o.a.createElement(s.a,Object(n.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:c}:Object.assign({activeClassName:"navbar__link--active",to:u},t?{isActive:function(e,t){return t.pathname.startsWith(h)}}:null),i),l)}function T(e){var t=e.items,a=e.position,c=Object(r.a)(e,["items","position"]);return t?o.a.createElement("div",{className:i()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},o.a.createElement(S,Object(n.a)({className:"navbar__item navbar__link"},c),c.label),o.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(S,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):o.a.createElement(S,Object(n.a)({className:"navbar__item navbar__link"},c))}function x(e){var t=e.items,a=Object(r.a)(e,["items"]);return t?o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(S,Object(n.a)({className:"menu__link menu__link--sublist"},a),a.label),o.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(S,Object(n.a)({className:"menu__link"},e)))})))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(S,Object(n.a)({className:"menu__link"},a)))}t.a=function(){var e,t,a=Object(u.a)(),r=a.siteConfig.themeConfig,l=r.navbar,d=(l=void 0===l?{}:l).title,h=l.links,m=void 0===h?[]:h,b=l.hideOnScroll,v=void 0!==b&&b,p=r.disableDarkMode,g=void 0!==p&&p,k=a.isClient,O=Object(c.useState)(!1),N=O[0],S=O[1],B=Object(c.useState)(!1),M=B[0],L=B[1],P=Object(_.a)(),I=P.isDarkTheme,D=P.setLightTheme,F=P.setDarkTheme,X=y(v),G=X.navbarRef,R=X.isNavbarVisible,A=Object(C.a)(),H=A.logoLink,U=A.logoLinkProps,K=A.logoImageUrl,W=A.logoAlt;Object(j.a)(N);var V=Object(c.useCallback)((function(){S(!0)}),[S]),Y=Object(c.useCallback)((function(){S(!1)}),[S]),J=Object(c.useCallback)((function(e){return e.target.checked?F():D()}),[D,F]);return o.a.createElement("nav",{ref:G,className:i()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":N},e[w.a.navbarHideable]=v,e[w.a.navbarHidden]=!R,e))},o.a.createElement("div",{className:"navbar__inner"},o.a.createElement("div",{className:"navbar__items"},o.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:V,onKeyDown:V},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:H},U),null!=K&&o.a.createElement("img",{key:k,className:"navbar__logo",src:K,alt:W}),null!=d&&o.a.createElement("strong",{className:i()("navbar__title",(t={},t[w.a.hideLogoText]=M,t))},d)),m.filter((function(e){return"left"===e.position})).map((function(e,t){return o.a.createElement(T,Object(n.a)({},e,{key:t}))}))),o.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"right"===e.position})).map((function(e,t){return o.a.createElement(T,Object(n.a)({},e,{key:t}))})),!g&&o.a.createElement(E,{className:w.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:J}),o.a.createElement(f,{handleSearchBarToggle:L,isSearchBarExpanded:M}))),o.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),o.a.createElement("div",{className:"navbar-sidebar"},o.a.createElement("div",{className:"navbar-sidebar__brand"},o.a.createElement(s.a,Object(n.a)({className:"navbar__brand",onClick:Y,to:H},U),null!=K&&o.a.createElement("img",{key:k,className:"navbar__logo",src:K,alt:W}),null!=d&&o.a.createElement("strong",{className:"navbar__title"},d)),!g&&N&&o.a.createElement(E,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:J})),o.a.createElement("div",{className:"navbar-sidebar__items"},o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return o.a.createElement(x,Object(n.a)({},e,{onClick:Y,key:t}))})))))))}},330:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(78),a(295),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),o=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=function(e){var t=c(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return(r.a.createElement(o.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children))}},331:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(311);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},336:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=h(c),l=h(a(288)),i=h(a(17)),s=h(a(337)),u=h(a(338)),d=a(339);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},337:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},338:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},339:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);