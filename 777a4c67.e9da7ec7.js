(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{318:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return i})),a.d(e,"rightToc",(function(){return j})),a.d(e,"default",(function(){return s}));var c=a(1),n=a(9),b=(a(0),a(508)),r=a(510),l=a(512),o={title:"ManyBlockAllocator"},i={id:"api/classes/classtouchgfx_1_1_many_block_allocator",title:"ManyBlockAllocator",description:"This class is partial framebuffer allocator using multiple blocks. \r",source:"@site/docs\\api\\classes\\classtouchgfx_1_1_many_block_allocator.mdx",permalink:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator",sidebar:"docs",previous:{title:"LockFreeDMA_Queue",permalink:"/docs/api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue"},next:{title:"Matrix4x4",permalink:"/docs/api/classes/classtouchgfx_1_1_matrix4x4"}},j=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator">FrameBufferAllocator</Link>',id:"public-functions-inherited-from-framebufferallocator",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"allocateBlock",id:"allocateblock",children:[]},{value:"freeBlockAfterTransfer",id:"freeblockaftertransfer",children:[]},{value:"getBlockForTransfer",id:"getblockfortransfer",children:[]},{value:"hasBlockReadyForTransfer",id:"hasblockreadyfortransfer",children:[]},{value:"ManyBlockAllocator",id:"manyblockallocator",children:[]},{value:"markBlockReadyForTransfer",id:"markblockreadyfortransfer",children:[]}]}],O={rightToc:j},d="wrapper";function s(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(b.b)(d,Object(c.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null," This class is partial framebuffer allocator using multiple blocks.\nNew buffers can be allocated until no free blocks are available. After transfer to ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/classtouchgfx_1_1_l_c_d"}),"LCD"),", a block is queued for allocation again."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"See"),": ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/classtouchgfx_1_1_single_block_allocator"}),"SingleBlockAllocator")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),":  ",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),Object(b.b)("h2",{id:"public-functions"},"Public Functions"),Object(b.b)("div",{class:"function-table",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),"(const uint16_t x, const uint16_t y, const uint16_t width, const uint16_t height, uint8_t ** block)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Allocates a framebuffer block.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),"()")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Free a block after transfer to the ",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_l_c_d"}),"LCD"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),"(",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_rect"}),"Rect")," & rect)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Get the block ready for transfer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),"()")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Check if a block is ready for transfer to the ",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_l_c_d"}),"LCD"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"Link"},"ManyBlockAllocator")),"()")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),"()")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Marks a previously allocated block as ready to be transferred to the ",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_l_c_d"}),"LCD"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("h2",{id:"additional-inherited-members"},"Additional inherited members"),Object(b.b)("h3",{id:"public-functions-inherited-from-framebufferallocator"},"Public Functions inherited from ",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),Object(b.b)("div",{class:"function-table",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),"()")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Finalizes an instance of the ",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(b.b)(l.a,{url:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"allocateblock"},"allocateBlock"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"x ,"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"y ,"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"width ,"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"height ,"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"uint8_t **"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"block"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Allocates a framebuffer block. "),Object(b.b)("p",null,"The block will have at least the width requested. The height of the allocated block can be lower than requested if not enough memory is available."),Object(b.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(b.b)("div",{class:"api-content-indented",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"x"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The absolute x coordinate of the block on the screen.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"y"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The absolute y coordinate of the block on the screen.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"width"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The width of the block.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"height"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The height of the block.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"block"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Pointer to pointer to return the block address in."))))),Object(b.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(b.b)("div",{class:"api-content-indented",markdown:"1"},Object(b.b)("p",null,"The height of the allocated block. ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::FrameBufferAllocator::allocateBlock")))),Object(b.b)(l.a,{url:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"freeblockaftertransfer"},"freeBlockAfterTransfer"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Free a block after transfer to the ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/classtouchgfx_1_1_l_c_d"}),"LCD"),". "),Object(b.b)("p",null,"Marks a previously allocated block as transferred and ready to reuse. "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::freeBlockAfterTransfer")))),Object(b.b)(l.a,{url:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"getblockfortransfer"},"getBlockForTransfer"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_rect"}),"Rect")," &"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"rect"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Get the block ready for transfer. "),Object(b.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(b.b)("div",{class:"api-content-indented",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"rect"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Reference to rect to write block x, y, width, and height."))))),Object(b.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(b.b)("div",{class:"api-content-indented",markdown:"1"},Object(b.b)("p",null,"Returns the address of the block ready for transfer. ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::getBlockForTransfer")))),Object(b.b)(l.a,{url:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"hasblockreadyfortransfer"},"hasBlockReadyForTransfer"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Check if a block is ready for transfer to the ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/classtouchgfx_1_1_l_c_d"}),"LCD"),". "),Object(b.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(b.b)("div",{class:"api-content-indented",markdown:"1"},Object(b.b)("p",null,"True if a block is ready for transfer. ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::hasBlockReadyForTransfer")))),Object(b.b)(l.a,{url:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"manyblockallocator"},"ManyBlockAllocator"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"Link"},"ManyBlockAllocator")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),Object(b.b)(l.a,{url:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"markblockreadyfortransfer"},"markBlockReadyForTransfer"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Marks a previously allocated block as ready to be transferred to the ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/classtouchgfx_1_1_l_c_d"}),"LCD"),". "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(b.b)(r.a,{to:"/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::markBlockReadyForTransfer")))))}s.isMDXComponent=!0}}]);