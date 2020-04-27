(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{410:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return g}));var n=o(1),a=o(9),i=(o(0),o(508)),r=o(511),c=o(517),l=o(516),s={id:"tutorial-05",title:"Tutorial 5: Creating Custom Triggers and Actions"},u={id:"tutorials/tutorial-05",title:"Tutorial 5: Creating Custom Triggers and Actions",description:'With TouchGFX Designer it is possible to define your own interaction components with custom triggers and actions. Each Screen in your application can contain a collection of actions <InlineNote text="(these are simply void methods in C++)" /> that you can call from within TouchGFX Designer as well as in code, while custom containers can also have a collection of triggers <InlineNote text="(which is equal to a callback in C++)" /> which your application can react to.\r',source:"@site/docs\\tutorials\\tutorial-05.mdx",permalink:"/docs/tutorials/tutorial-05",sidebar:"docs",previous:{title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior",permalink:"/docs/tutorials/tutorial-04"},next:{title:"AbstractButton",permalink:"/docs/api/classes/classtouchgfx_1_1_abstract_button"}},p=[{value:"Adding a Custom Action to a Screen",id:"adding-a-custom-action-to-a-screen",children:[]},{value:"Passing a Value to a Custom Action",id:"passing-a-value-to-a-custom-action",children:[]},{value:"Using Custom Triggers in Custom Containers",id:"using-custom-triggers-in-custom-containers",children:[]}],d={rightToc:p},h="wrapper";function g(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)(h,Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"With TouchGFX Designer it is possible to define your own interaction components with custom triggers and actions. Each Screen in your application can contain a collection of actions ",Object(i.b)(c.a,{text:"(these are simply void methods in C++)",mdxType:"InlineNote"})," that you can call from within TouchGFX Designer as well as in code, while custom containers can also have a collection of triggers ",Object(i.b)(c.a,{text:"(which is equal to a callback in C++)",mdxType:"InlineNote"})," which your application can react to."),Object(i.b)("p",null,"In this tutorial, we will go through this functionality to learn the possibilities this gives us to create more clean and dynamic TouchGFX applications."),Object(i.b)("h2",{id:"adding-a-custom-action-to-a-screen"},"Adding a Custom Action to a Screen"),Object(i.b)("p",null,"In this section we will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new application with a background box and a button"),Object(i.b)("li",{parentName:"ul"},"Add a custom action to the application"),Object(i.b)("li",{parentName:"ul"},"Change the background color using the custom action when the button is pressed")),Object(i.b)("p",null,'Let\'s start out by creating a new blank application with dimensions 480x272 and inserting a Box for the background (let\'s name this "background") and a Button (name this one "button"). You should have something similar to the image below:'),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/white-background-and-button.png",caption:"Adding a white background Box and a Button",mdxType:"Figure"}),Object(i.b)("p",null,'Next, let\'s add a custom action to our Screen. You can do this from the properties tab of the Screen by selecting the Screen and pressing the + button in the "ACTIONS" group. Name the action "setBackgroundColor" and give it a description like "Sets the background color". This generates a virtual method in ',Object(i.b)("inlineCode",{parentName:"p"},"Screen1ViewBase.hpp")," called ",Object(i.b)("inlineCode",{parentName:"p"},"setBackgroundColor()")," with an empty implementation in ",Object(i.b)("inlineCode",{parentName:"p"},"Screen1ViewBase.cpp"),"."),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/adding-custom-action-to-screen.png",caption:"Adding a new custom action to a Screen",mdxType:"Figure"}),Object(i.b)("p",null,"You can add functionality to this method by overriding it in user code in the ",Object(i.b)("inlineCode",{parentName:"p"},"Screen1View.cpp")," file or by creating interactions through TouchGFX Designer. Let's try out the latter by going to the interactions tab for the screen and adding an interaction that calls our new method when our button is clicked."),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click.png",caption:"Call setBackgroundColor when button is clicked",mdxType:"Figure"}),Object(i.b)("p",null,"Now we specify what actually happens when ",Object(i.b)(l.a,{text:"setBackgroundColor",mdxType:"InlineCode"})," is called. This is done by using our new custom action as a trigger in another interaction. Let's start out by simply setting the background Box color to black by using the action ",Object(i.b)("em",{parentName:"p"},'"Change box color"')," when the trigger ",Object(i.b)("em",{parentName:"p"},'"setBackgroundColor is called"')," happens."),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality.png",caption:"Implementing functionality for custom action setBackgroundColor",mdxType:"Figure"}),Object(i.b)("p",null,"Now run the simulator and press the button; the background should turn black. You have successfully created your first custom action."),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/black-color-result.png",caption:"Pressing button turns background black",mdxType:"Figure"}),Object(i.b)("h2",{id:"passing-a-value-to-a-custom-action"},"Passing a Value to a Custom Action"),Object(i.b)("p",null,"Building upon the application we have just created, this section will expand upon the custom action concept by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adding a parameter to the setBackgroundColor custom action"),Object(i.b)("li",{parentName:"ul"},"Passing a random color to setBackgroundColor"),Object(i.b)("li",{parentName:"ul"},"Using this to change the background to random colors when pressing the button")),Object(i.b)("p",null,"Let's make this application a little more interesting by passing a value to our ",Object(i.b)(l.a,{text:"setBackgroundColor",mdxType:"InlineCode"})," custom action to make it more dynamic."),Object(i.b)("p",null,"Goto the interactions tab fot the Screen and delete the two current interactions by pressing the x button for each of them, as we will be setting up new ones."),Object(i.b)("p",null,"Go to the properties tab for the Screen to the custom action called ",Object(i.b)(l.a,{text:"setBackgroundColor",mdxType:"InlineCode"}),' and check off the checkbox for type and input "colortype" which will be the type of the parameter we are going to pass to the action (colortype is the builtin TouchGFX type for describing colors). It is not possible to name the parameter and it will be named ',Object(i.b)("em",{parentName:"p"},'"value"'),"."),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/adding-type-to-action.png",caption:"Setting up a parameter for a custom action",mdxType:"Figure"}),Object(i.b)("p",null,'Next let\'s setup an interaction which uses our newly added parameter value. We do this by using the trigger "setBackgroundColor is called" and the action "Execute C++ code". We want to use our new parameter to set the color of our background Box, so the code to execute should be:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"background.setColor(value);\nbackground.invalidate();\n")),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/set-color-execute-code.png",caption:"Using the passed value to change color of background",mdxType:"Figure"}),Object(i.b)("p",null,'Notice that the trigger displays the name and type of the parameter "value : colortype".'),Object(i.b)("p",null,'Next, let\'s set up the interaction that actually calls setBackgroundColor when our button is clicked. Add another interaction with trigger "Button is clicked" and action "Call Screen1 setBackgroundColor" and notice that the value property also displays which type it expects. Let\'s pass a random color to setBackgroundColor by utilizing the randomization method ',Object(i.b)("inlineCode",{parentName:"p"},"rand()")," in ",Object(i.b)("inlineCode",{parentName:"p"},"stdlib.h")," to get three random numbers between 0 and 255 and using those to specify the color. To gain access to ",Object(i.b)("inlineCode",{parentName:"p"},"rand()"),' we need to include it into our application. Luckily for us, it is also possible to supply your own includes from within TouchGFX Designer for both screens and custom containers. Go to the properties tab for the screen and under the "INCLUDES" group, input:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n")),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/include-stdlib.png",caption:"Including stdlib to gain access to rand()",mdxType:"Figure"}),Object(i.b)("p",null,"Next, for the value property we are going to input:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFrom24BitRGB(rand()%256, rand()%256, rand()%256)\n")),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/pass-random-color-to-action.png",caption:"Passing a random color when button is clicked",mdxType:"Figure"}),Object(i.b)("p",null,"Now run the simulator and try pressing the button a couple of times. You should see the background changing to random colors."),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/random-color-result-initial.png",caption:"Resulting random color when clicking the button",mdxType:"Figure"}),Object(i.b)("h2",{id:"using-custom-triggers-in-custom-containers"},"Using Custom Triggers in Custom Containers"),Object(i.b)("p",null,"Finally, Custom Containers can also define a collection of custom triggers so in this section we will expand upon the application by doing the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new custom container called ColorEmitter"),Object(i.b)("li",{parentName:"ul"},'Add a custom trigger to ColorEmitter called "colorChanged"'),Object(i.b)("li",{parentName:"ul"},"Use the colorChanged trigger to signal out random colors to the application when the button is pressed"),Object(i.b)("li",{parentName:"ul"},"Set up interactions in the screen to listen for the colorChanged trigger"),Object(i.b)("li",{parentName:"ul"},"Use whatever color the ColorEmitter sends out to set the color of the background box")),Object(i.b)("p",null,"Let's try using a custom trigger to signal some event in our application. Instead of our button interaction passing the random color to ",Object(i.b)("inlineCode",{parentName:"p"},"setBackgroundColor"),", let's try and make a custom container send out the random color to our Screen, and then let the Screen use whatever value the custom container communicated. This should end up being a simple example of different UI components communicating with each other in an application to make smaller, more reusable components."),Object(i.b)("p",null,'First, let\'s create a new custom container and call it "ColorEmitter". Insert a button and call it "button". You should have something similar to the image below:'),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/color-emitter-custom-container.png",caption:"ColorEmitter custom container",mdxType:"Figure"}),Object(i.b)("p",null,"Now, let's make it so that whenever the button is clicked, the ColorEmitter will emit a random color to the world. Anyone can then decide to listen for this emit and use the color for something. In our case, we just want to mimic the behavior we had before by using the color to set the background color."),Object(i.b)("p",null,'To make the custom container emit a color, first we need to create a custom trigger. Go to the properties tab for the custom container and press the + button in the "TRIGGERS" group. Name the trigger "colorChanged", give it description "The color has changed" and give it the type "colortype".'),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container.png",caption:"Adding a custom trigger to a custom container",mdxType:"Figure"}),Object(i.b)("p",null,'Next, go to the interactions tab for the custom container and create a new interaction. Use trigger "Button is clicked" and action "Emit colorChanged". Now we want to communicate a random color, so use the same code from earlier for the value property:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFrom24BitRGB(rand()%256, rand()%256, rand()%256)\n")),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/emitting-color-changed.png",caption:"Emitting a custom trigger",mdxType:"Figure"}),Object(i.b)("p",null,"However, this won't work initially since the ",Object(i.b)(l.a,{text:"touchgfx::Color",mdxType:"InlineCode"}),' namespace is not automatically included within our custom container. So like earlier, we are going to supply our own include for the custom container. Go to the properties tab for the custom container and under the "INCLUDES" group, input:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n")),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/extra-includes.png",caption:"Supplying extra includes",mdxType:"Figure"}),Object(i.b)("p",null,'Now we want to replace our old button with the new ColorEmitter custom container we have created. Select Screen1 and delete the button here. This should give a domain error in the interaction that was using this button, so delete that interaction also as we will create a new one for the ColorEmitter. Now insert an instance of our ColorEmitter on Screen1, then create a new interaction on Screen1. For the trigger, you should see an option called "ColorEmitter colorChanged happens". Select that one and for the action use "Call Screen1 setBackgroundColor". Now we need to use the value from the colorChanged emit, which will always be named "value" (like discussed earlier in this article). Therefore, input "value" into the value property.'),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction.png",caption:"Setting up an interaction to listen for colorChanged custom trigger",mdxType:"Figure"}),Object(i.b)("p",null,"Now run simulator and try pressing the button again. The same behavior should be present, with the background changing to random colors. But now, instead of just having all the functionality implemented in the Screen, we've successfully created our own communication between the Screen and some of its smaller, reusable components, namely our simple ColorEmitter."),Object(i.b)(r.a,{imageSource:"/img/tutorials/tutorial-05/random-color-result-final.png",caption:"Resulting random color when button is clicked",mdxType:"Figure"}))}g.isMDXComponent=!0},511:function(e,t,o){"use strict";var n=o(5),a=o(0),i=o.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,o=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:o,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:o,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=r},516:function(e,t,o){"use strict";var n=o(5),a=o(0),i=o.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=r},517:function(e,t,o){"use strict";var n=o(5),a=o(0),i=o.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=r}}]);