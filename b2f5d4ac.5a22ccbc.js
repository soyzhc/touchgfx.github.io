(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{397:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return o})),t.d(i,"metadata",(function(){return l})),t.d(i,"rightToc",(function(){return p})),t.d(i,"default",(function(){return u}));var n=t(1),a=t(9),r=(t(0),t(508)),s=t(511),o=(t(517),{id:"images-view",title:"Images View"}),l={id:"development/ui-development/designer-user-guide/images-view",title:"Images View",description:"The Images View is used to manage the images used in a TouchGFX application (located under the assets\\images folder).\r",source:"@site/docs\\development\\ui-development\\designer-user-guide\\images-view.mdx",permalink:"/docs/development/ui-development/designer-user-guide/images-view",sidebar:"docs",previous:{title:"Canvas View",permalink:"/docs/development/ui-development/designer-user-guide/canvas-view"},next:{title:"Texts View",permalink:"/docs/development/ui-development/designer-user-guide/texts-view"}},p=[{value:"Tree View",id:"tree-view",children:[]},{value:"Table View",id:"table-view",children:[]},{value:"Properties View",id:"properties-view",children:[]}],c={rightToc:p},d="wrapper";function u(e){var i=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)(d,Object(n.a)({},c,t,{components:i,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Images View is used to manage the images used in a TouchGFX application (located under the assets\\images folder).\nIt includes 3 sections: the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#tree-view"}),"tree view")," (left side), the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#table-view"}),"table view")," (middle) and the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#properties-view"}),"properties view")," (right side)."),Object(r.b)("p",null,"The default configuration values for an image can be changed in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/designer-user-guide/config-view#default-image-configuration"}),"Default Image Configuration")," in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/designer-user-guide/config-view"}),"Config View"),"."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-view.png",caption:"Images view in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"tree-view"},"Tree View"),Object(r.b)("p",null,"The tree view provides an overview of the images and folders present in your application. The width of the tree view can be changed by dragging the grid-splitter thumb to suit your needs."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view.gif",caption:"The tree view in Images",mdxType:"Figure"}),Object(r.b)("p",null,"You can add images to the assets\\images folder by clicking the blue button with a plus icon or by dragging the images directly to the Designer from the File Explorer. Images added to the assets\\images folder will automatically show up in the Image Manager."),Object(r.b)("p",null,"Clicking on a folder node will show the images in that folder in the table view (clicking on the root folder \u201cimages\u201d will show all images in the application, including images located in subfolders)."),Object(r.b)("p",null,"Clicking on an image node will also show the other images under the same folder in the table view and select it such that its properties can be changed in the right side properties view."),Object(r.b)("p",null,"Clicking the chevron next to a folder will collapse/expand the folder."),Object(r.b)("p",null,"Clicking the x button while hovering over a node lets you delete that item from disk."),Object(r.b)("h2",{id:"table-view"},"Table View"),Object(r.b)("p",null,"The table view shows a list of the images located under the currently selected folder and contains different columns corresponding to different properties for an image. Clicking the header of a column sorts the list either ascending or descending."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view.png",caption:"The table view in Images",mdxType:"Figure"}),Object(r.b)("p",null,"The Image column contains a preview of the image. Hovering over the image preview will show the preview in full size. Clicking the preview will open the image in the default application associated with .png images (for example paint.net)."),Object(r.b)("p",null,"Clicking a row will select the image such that its properties can be changed in the right side properties view."),Object(r.b)("p",null,"When the value of a cell is grayed out, it means that the default value is used. When an explicit value has been set on an image, the cell will light up, as seen in the image above, where the image 'menu_demo_screen_05.png' has had its default Image Format value changed to ARGB8888."),Object(r.b)("h2",{id:"properties-view"},"Properties View"),Object(r.b)("p",null,"The properties view is used to change the properties of an image. It includes an image preview at the top, which, like the preview in the table view, will show a full size version if you hover over it, and will also open up the default application associated with .png files when clicked."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-properties-view.gif",caption:"The properties view in Images",mdxType:"Figure"}),Object(r.b)("p",null,"The different properties all have a default value. When no explicit value has been set on a property, the default value is shown in a grayed out manner in the selection boxes. When an explicit value is set, the value is shown in a lit up matter as shown below."),Object(r.b)("p",null,"Pressing the Reset button will remove the current value and reset it back to its default value. When an explicit value has been set, changing the default value will not have an impact on that specific property."))}u.isMDXComponent=!0},511:function(e,i,t){"use strict";var n=t(5),a=t(0),r=t.n(a),s=function(e){function i(){return e.apply(this,arguments)||this}return Object(n.a)(i,e),i.prototype.render=function(){var e=this.props.noShadow||!1,i=this.props.width,t=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:i,height:t,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:i,height:t,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},i}(a.Component);i.a=s},517:function(e,i,t){"use strict";var n=t(5),a=t(0),r=t.n(a),s=function(e){function i(){return e.apply(this,arguments)||this}return Object(n.a)(i,e),i.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},i}(a.Component);i.a=s}}]);