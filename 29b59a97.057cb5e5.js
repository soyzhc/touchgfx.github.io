(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{214:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return s})),a.d(e,"rightToc",(function(){return d})),a.d(e,"default",(function(){return m}));var b=a(1),n=a(9),c=(a(0),a(508)),l=a(510),r=a(512),i={title:"DrawableListItems"},s={id:"api/classes/classtouchgfx_1_1_drawable_list_items",title:"DrawableListItems",description:"An array of drawables used by [DrawableList](/docs/api/classes/classtouchgfx_1_1_drawable_list). \r",source:"@site/docs\\api\\classes\\classtouchgfx_1_1_drawable_list_items.mdx",permalink:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items",sidebar:"docs",previous:{title:"DrawableList",permalink:"/docs/api/classes/classtouchgfx_1_1_drawable_list"},next:{title:"DrawableListItemsInterface",permalink:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface"}},d=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface">DrawableListItemsInterface</Link>',id:"public-functions-inherited-from-drawablelistitemsinterface",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"DrawableListItems",id:"drawablelistitems",children:[]},{value:"getDrawable",id:"getdrawable",children:[]},{value:"getNumberOfDrawables",id:"getnumberofdrawables",children:[]},{value:"operator[]",id:"operator",children:[]},{value:"~DrawableListItems",id:"drawablelistitems-1",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"element",id:"element",children:[]}]}],O={rightToc:d},j="wrapper";function m(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(c.b)(j,Object(b.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null," An array of drawables used by ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/classtouchgfx_1_1_drawable_list"}),"DrawableList"),".\nThis class is used to ease the setup of a callback function to get access to a specific drawable in the array."),Object(c.b)("p",null,"Example usage: "),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-cpp"}),"static const int NUMBER_OF_DRAWABLES = 5;\nDrawableListItems<TextAreaWithOneWildcardContainer, NUMBER_OF_DRAWABLES> menuItems;\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Template Parameters"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TYPE")," Type of the drawables. Can be a simple drawable, such as ",Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/classtouchgfx_1_1_image"}),"Image")," or a more complex container. "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"SIZE")," Size of the array. This is the number of drawables to allocate and should be all visible drawables on the screen at any given time. ")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),":  ",Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface",mdxType:"Link"},"DrawableListItemsInterface")),Object(c.b)("h2",{id:"public-functions"},"Public Functions"),Object(c.b)("div",{class:"function-table",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-drawablelistitems",mdxType:"Link"},"DrawableListItems")),"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Initializes a new instance of the ",Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items"}),"DrawableListItems")," class.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0",Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_drawable"}),"Drawable")," *"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-getdrawable",mdxType:"Link"},"getDrawable")),"(int16_t index)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Gets a drawable at a given index.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","int16_t"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-getnumberofdrawables",mdxType:"Link"},"getNumberOfDrawables")),"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Gets number of drawables.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"TYPE &"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-operator[]",mdxType:"Link"},"operator[]")),"(int index)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Array indexer operator.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-~drawablelistitems",mdxType:"Link"},"~DrawableListItems")),"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(c.b)("h2",{id:"public-attributes"},"Public Attributes"),Object(c.b)("div",{class:"function-table",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"TYPE"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#variable-element",mdxType:"Link"},"element")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The array of drawables.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(c.b)("h2",{id:"additional-inherited-members"},"Additional inherited members"),Object(c.b)("h3",{id:"public-functions-inherited-from-drawablelistitemsinterface"},"Public Functions inherited from ",Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface",mdxType:"Link"},"DrawableListItemsInterface")),Object(c.b)("div",{class:"function-table",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface#function-~drawablelistitemsinterface",mdxType:"Link"},"~DrawableListItemsInterface")),"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Finalizes an instance of the ",Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface"}),"DrawableListItemsInterface")," class.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)(r.a,{url:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-drawablelistitems",mdxType:"DoxybookHeaderLink"}),Object(c.b)("h3",{id:"drawablelistitems"},"DrawableListItems"),Object(c.b)("div",{class:"api-container",markdown:"1"},Object(c.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-drawablelistitems",mdxType:"Link"},"DrawableListItems")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"("),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),")"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(c.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(c.b)("p",null,"Initializes a new instance of the ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items"}),"DrawableListItems")," class. "))),Object(c.b)(r.a,{url:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-getdrawable",mdxType:"DoxybookHeaderLink"}),Object(c.b)("h3",{id:"getdrawable"},"getDrawable"),Object(c.b)("div",{class:"api-container",markdown:"1"},Object(c.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"virtual","\xa0","Drawable *","\xa0",Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-getdrawable",mdxType:"Link"},"getDrawable")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"("),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"int16_t"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),")"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(c.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(c.b)("p",null,"Gets a drawable at a given index. "),Object(c.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(c.b)("div",{class:"api-content-indented",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Zero-based index of the drawable."))))),Object(c.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(c.b)("div",{class:"api-content-indented",markdown:"1"},Object(c.b)("p",null,"Null if it fails, else the drawable. ")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface#function-getdrawable",mdxType:"Link"},"touchgfx::DrawableListItemsInterface::getDrawable")))),Object(c.b)(r.a,{url:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-getnumberofdrawables",mdxType:"DoxybookHeaderLink"}),Object(c.b)("h3",{id:"getnumberofdrawables"},"getNumberOfDrawables"),Object(c.b)("div",{class:"api-container",markdown:"1"},Object(c.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"virtual","\xa0","int16_t","\xa0",Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-getnumberofdrawables",mdxType:"Link"},"getNumberOfDrawables")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"("),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),")"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(c.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(c.b)("p",null,"Gets number of drawables. "),Object(c.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(c.b)("div",{class:"api-content-indented",markdown:"1"},Object(c.b)("p",null,"The number of drawables. ")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface#function-getnumberofdrawables",mdxType:"Link"},"touchgfx::DrawableListItemsInterface::getNumberOfDrawables")))),Object(c.b)(r.a,{url:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-operator[]",mdxType:"DoxybookHeaderLink"}),Object(c.b)("h3",{id:"operator"},"operator[]"),Object(c.b)("div",{class:"api-container",markdown:"1"},Object(c.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TYPE &","\xa0",Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-operator[]",mdxType:"Link"},"operator[]")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"("),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"int"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),")"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(c.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(c.b)("p",null,"Array indexer operator. "),Object(c.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(c.b)("div",{class:"api-content-indented",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Zero-based index of elements to access."))))),Object(c.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(c.b)("div",{class:"api-content-indented",markdown:"1"},Object(c.b)("p",null,"The indexed value. ")))),Object(c.b)(r.a,{url:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-~drawablelistitems",mdxType:"DoxybookHeaderLink"}),Object(c.b)("h3",{id:"drawablelistitems-1"},"~DrawableListItems"),Object(c.b)("div",{class:"api-container",markdown:"1"},Object(c.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"virtual","\xa0",Object(c.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#function-~drawablelistitems",mdxType:"Link"},"~DrawableListItems")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"("),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),")"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(c.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)(r.a,{url:"/docs/api/classes/classtouchgfx_1_1_drawable_list_items#variable-element",mdxType:"DoxybookHeaderLink"}),Object(c.b)("h3",{id:"element"},"element"),Object(c.b)("div",{class:"api-container",markdown:"1"},Object(c.b)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},Object(c.b)("p",null,"TYPE element ")),Object(c.b)("div",{class:"api-container-content",markdown:"1"},Object(c.b)("p",null,"The array of drawables. "))))}m.isMDXComponent=!0}}]);