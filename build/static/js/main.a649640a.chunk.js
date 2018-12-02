(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5522:function(e,t,a){e.exports=a(5862)},5862:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(29),r=a.n(l),c=a(53),i=a(27),s=a(16),u=a(25),d=a.n(u),m=a(5863),p=Object(s.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){return o.a.createElement("div",{className:e.classes.root},o.a.createElement(i.a,{position:"static"},o.a.createElement(i.e,null,o.a.createElement(i.f,{variant:"title",color:"inherit",className:e.classes.grow},"IoT Alarm Clock"),o.a.createElement(d.a,{color:"inherit",component:m.a,to:"/"},"Modules"),o.a.createElement(d.a,{color:"inherit",component:m.a,to:"/alarms"},"Alarms"))))}),h=a(17),g=a(19),f=a(20),b=a(23),v=a(21),y=a(24),E=a(66),C=a.n(E),O=a(92),j=a.n(O),x=a(93),k=a.n(x),w=a(94),S=a.n(w),D=a(144),N=a(95),M=a.n(N),I=a(64),A=a.n(I),F=a(51),U=a.n(F),T=a(54),H=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleOpenSettings=function(){a.setState({settingsOpen:!0})},a.handleClose=function(){a.setState({settingsOpen:!1})},a.state={settingsOpen:!1},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props;return o.a.createElement(T.b,{draggableId:t.apiName,index:t.index},function(a,n){return o.a.createElement("div",Object.assign({},a.draggableProps,{ref:a.innerRef}),o.a.createElement(j.a,{style:n.isDragging?{backgroundColor:"#f5f5f5"}:{backgroundColor:"white"}},o.a.createElement("div",a.dragHandleProps,o.a.createElement(k.a,null,o.a.createElement(D.a,null))),o.a.createElement(S.a,{primary:t.displayName||t.apiName}),t.active&&o.a.createElement(M.a,null,o.a.createElement(A.a,{"aria-label":"Open Settings",onClick:e.handleOpenSettings},o.a.createElement(D.b,null)))),o.a.createElement(U.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:e.state.settingsOpen,onClose:e.handleClose},o.a.createElement("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#f5f5f5"},className:t.classes.paper},o.a.cloneElement(t.children,{closeModal:e.handleClose}))))})}}]),t}(o.a.Component),K=Object(s.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit}}})(H),B=a(22),P=a.n(B),W=a(30),J=a.n(W),R=a(43),G=a.n(R),L=a(44),Y=a.n(L),$=a(36),q=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#ffffff"],z="http://"+window.location.hostname+":3000";function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("patching",t),fetch(z+"/"+e,{method:"PATCH",headers:{"Content-Type":"application/json; charset=utf-8"},cache:"no-cache",body:JSON.stringify(t)}).then(function(e){return e.json()})}function V(e){fetch(z+"/"+e.props.apiKey,{cache:"no-cache"}).then(function(e){return e.json()}).then(function(t){console.log("got",t[0]),e.setState(Object(h.a)({},t[0]))})}var X=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),Q(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeFormat=function(e){a.setState({format24:e.target.checked})},a.state={color:{r:255,g:255,b:255},format24:!1},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){V(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(P.a,{component:"legend"},"Display Format"),o.a.createElement(J.a,null,o.a.createElement(G.a,{control:o.a.createElement(Y.a,{checked:this.state.format24,onChange:this.handleChangeFormat,value:"format24"}),label:"Display as 24-hour time?"}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement($.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(d.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),Z=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(X),_=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeShowFullDate=function(e){a.setState({showFullDate:e.target.checked})},a.handleUpdateSettings=function(){console.log("handled updated settings"),Q(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.state={color:{r:255,g:255,b:255},showFullDate:!1},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){V(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(P.a,{component:"legend"},"Display Format"),o.a.createElement(J.a,null,o.a.createElement(G.a,{control:o.a.createElement(Y.a,{checked:this.state.showFullDate,onChange:this.handleChangeShowFullDate,value:this.state.showFullDate}),label:"Show the full date with words? (e.g. Tuesday, July 2nd, 2019)"}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement($.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(d.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ee=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(_),te=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),Q(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeDisplayFormat=function(e){a.setState({displayAsCountdown:e.target.checked})},a.state={color:{r:255,g:255,b:255},displayAsCountdown:!1},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){V(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(P.a,{component:"legend"},"Display Format"),o.a.createElement(J.a,null,o.a.createElement(G.a,{control:o.a.createElement(Y.a,{checked:this.state.displayAsCountdown,onChange:this.handleChangeDisplayFormat,value:"displayAsCountdown"}),label:"Display as countdown until next alarm?"}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement($.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(d.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ae=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(te),ne=a(52),oe=a.n(ne),le=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),Q(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeCity=function(e){a.setState({city:e.target.value})},a.state={color:{r:255,g:255,b:255},city:"Indianapolis"},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){V(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(J.a,null,o.a.createElement(oe.a,{id:"city",label:"City",className:e.textField,value:this.state.city,onChange:this.handleChangeCity,margin:"normal"}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement($.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(d.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),re=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"},textField:{marginBottom:"10px"}}})(le),ce=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings");var e=a.state.text.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f");Q(a.props.apiKey,Object(h.a)({},a.state,{text:e})),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeText=function(e){a.setState({text:e.target.value})},a.state={color:{r:255,g:255,b:255},text:"Text to display"},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){V(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(J.a,null,o.a.createElement(oe.a,{id:"text",label:"Text",className:e.textField,value:this.state.text,onChange:this.handleChangeText,margin:"normal",helperText:"Text will continously scroll."}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement($.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(d.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ie=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"},textField:{marginBottom:"10px"}}})(ce);var se=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},ue=a(65),de=a.n(ue),me=function(e){function t(){return Object(g.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props;return o.a.createElement(i.c,{item:!0,xs:12,sm:6},o.a.createElement(i.f,{variant:"h6"},se(e.columnId)),o.a.createElement(T.c,{droppableId:e.columnId},function(t){return o.a.createElement(i.d,Object.assign({className:e.classes.paper},t.droppableProps),o.a.createElement(de.a,{rootRef:t.innerRef},o.a.createElement(C.a,{style:{minHeight:"60px"}},e.modules.map(function(t){return o.a.createElement(K,{apiName:t,displayName:"nextalarm"===t?"Next Alarm":se(t),active:"active"===e.columnId,key:t,index:e.indexes[t]},function(e){switch(e){case"time":return o.a.createElement(Z,{apiKey:e});case"nextalarm":return o.a.createElement(ae,{apiKey:e});case"date":return o.a.createElement(ee,{apiKey:e});case"weather":return o.a.createElement(re,{apiKey:e});case"text":return o.a.createElement(ie,{apiKey:e});default:return null}}(t))}))),0===e.modules.length?o.a.createElement(i.f,{variant:"body2",style:{position:"relative",bottom:"30px"}},"Drag modules here to add them to the alarm clock."):"",t.placeholder)}))}}]),t}(o.a.Component),pe=Object(s.withStyles)(function(e){return{paper:{textAlign:"center",color:e.palette.text.secondary}}})(me),he=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).getModules=function(e){return"active"===e?a.getActiveModules(a.state.modules):"inactive"===e?a.getInactiveModules(a.state.modules):null},a.getActiveModules=function(e){return Object.keys(e).filter(function(t){return e[t]>=0&&e[t]<=3}).sort(function(t,a){return e[t]-e[a]})},a.getInactiveModules=function(e){return Object.keys(e).filter(function(t){return e[t]<0||e[t]>3})},a.onDragEnd=function(e){var t=e.destination,n=e.source,o=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){if("inactive"===t.droppableId){var l=Object(h.a)({},a.state.modules,Object(c.a)({},o,-1));a.setState({modules:l},function(){console.log(Object(h.a)({},a.state.modules)),Q("modules",Object(h.a)({},a.state.modules))})}if("active"!==t.droppableId||"inactive"!==n.droppableId||4!==a.getActiveModules(a.state.modules).length){if("active"===t.droppableId&&"inactive"===n.droppableId&&a.getActiveModules(a.state.modules).length<4){var r=a.getActiveModules(a.state.modules);r.splice(t.index,0,o);var i=Object(h.a)({},a.state.modules);r.forEach(function(e){i[e]=r.indexOf(e)}),a.setState({modules:i},function(){console.log(Object(h.a)({},a.state.modules)),Q("modules",Object(h.a)({},a.state.modules))})}if("active"===t.droppableId&&"active"===n.droppableId){var s=a.getActiveModules(a.state.modules);s.splice(n.index,1),s.splice(t.index,0,o);var u=Object(h.a)({},a.state.modules);s.forEach(function(e){u[e]=s.indexOf(e)}),a.setState({modules:u},function(){console.log(Object(h.a)({},a.state.modules)),Q("modules",Object(h.a)({},a.state.modules))})}}}},a.state={modules:{time:-1,nextalarm:-1,date:-1,weather:-1,text:-1},columnOrder:["active","inactive"]},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(z+"/modules",{cache:"no-cache"}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({modules:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement(i.c,{container:!0,spacing:24},o.a.createElement(T.a,{onDragEnd:this.onDragEnd},this.state.columnOrder.map(function(t){var a=e.getModules(t);return o.a.createElement(pe,{modules:a,columnId:t,key:t,indexes:e.state.modules})})))}}]),t}(o.a.Component),ge=Object(s.withStyles)(function(e){return{paper:{textAlign:"center",color:e.palette.text.secondary}}})(he);var fe=Object(s.withStyles)(function(e){return{root:{flexGrow:1},demo:{backgroundColor:e.palette.background.paper}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(i.f,{variant:"subtitle1"},"Drag modules from inactive to active to display it on your alarm. You can only have 4 active modules at a time."),o.a.createElement("br",null),o.a.createElement(ge,null))}),be=a(5865),ve=a(5864),ye=function(){return o.a.createElement("h2",null,"Alarms will go here")},Ee=Object(s.withStyles)(function(e){return{main:Object(c.a)({padding:3*e.spacing.unit},e.breakpoints.down("xs"),{padding:2*e.spacing.unit})}})(function(e){var t=e.classes;return o.a.createElement(be.a,null,o.a.createElement(n.Fragment,null,o.a.createElement(i.b,null),o.a.createElement(p,null),o.a.createElement("main",{className:t.main},o.a.createElement(ve.a,{path:"/",exact:!0,component:fe}),o.a.createElement(ve.a,{path:"/alarms",exact:!0,component:ye}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5522,2,1]]]);
//# sourceMappingURL=main.a649640a.chunk.js.map