(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5527:function(e,t,a){e.exports=a(5877)},5877:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(30),l=a.n(r),c=a(35),i=a(23),s=a(9),d=a(24),u=a.n(d),m=a(5878),p=Object(s.withStyles)({root:{flexGrow:1,marginBottom:64},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){return o.a.createElement("div",{className:e.classes.root},o.a.createElement(i.a,{position:"fixed"},o.a.createElement(i.e,null,o.a.createElement(i.f,{variant:"title",color:"inherit",className:e.classes.grow},"IoT Alarm Clock"),o.a.createElement(u.a,{color:"inherit",component:m.a,to:"/"},"Modules"),o.a.createElement(u.a,{color:"inherit",component:m.a,to:"/alarms"},"Alarms"))))}),h=a(17),g=a(18),f=a(19),b=a(21),v=a(20),y=a(22),E=a(74),O=a.n(E),j=a(99),C=a.n(j),x=a(100),w=a.n(x),k=a(101),S=a.n(k),N=a(158),D=a(102),M=a.n(D),I=a(52),A=a.n(I),T=a(41),F=a.n(T),B=a(63),U=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleOpenSettings=function(){a.setState({settingsOpen:!0})},a.handleClose=function(){a.setState({settingsOpen:!1})},a.state={settingsOpen:!1},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props;return o.a.createElement(B.b,{draggableId:t.apiName,index:t.index},function(a,n){return o.a.createElement("div",Object.assign({},a.draggableProps,{ref:a.innerRef}),o.a.createElement(C.a,{style:n.isDragging?{backgroundColor:"#f5f5f5"}:{backgroundColor:"white"}},o.a.createElement("div",a.dragHandleProps,o.a.createElement(w.a,null,o.a.createElement(N.a,null))),o.a.createElement(S.a,{primary:t.displayName||t.apiName}),t.active&&o.a.createElement(M.a,null,o.a.createElement(A.a,{"aria-label":"Open Settings",onClick:e.handleOpenSettings},o.a.createElement(N.b,null)))),o.a.createElement(F.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:e.state.settingsOpen,onClose:e.handleClose},o.a.createElement("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#f5f5f5"},className:t.classes.paper},o.a.cloneElement(t.children,{closeModal:e.handleClose}))))})}}]),t}(o.a.Component),H=Object(s.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit}}})(U),W=a(26),K=a.n(W),P=a(31),R=a.n(P),L=a(48),J=a.n(L),G=a(37),Y=a.n(G),_=a(38),z=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#ffffff"],$="http://"+window.location.hostname+":3000";function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("patching",t),fetch($+"/"+e,{method:"PATCH",headers:{"Content-Type":"application/json; charset=utf-8"},cache:"no-cache",body:JSON.stringify(t)}).then(function(e){return e.json()})}function Q(e){fetch($+"/"+e.props.apiKey,{cache:"no-cache"}).then(function(e){return e.json()}).then(function(t){console.log("got",t[0]),e.setState(Object(h.a)({},t[0]))})}var V=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),q(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeFormat=function(e){a.setState({format24:e.target.checked})},a.state={color:{r:255,g:255,b:255},format24:!1},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){Q(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(K.a,{component:"legend"},"Display Format"),o.a.createElement(R.a,null,o.a.createElement(J.a,{control:o.a.createElement(Y.a,{checked:this.state.format24,onChange:this.handleChangeFormat,value:"format24"}),label:"Display as 24-hour time?"}),o.a.createElement(K.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:z,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(u.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),X=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(V),Z=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeShowFullDate=function(e){a.setState({showFullDate:e.target.checked})},a.handleUpdateSettings=function(){console.log("handled updated settings"),q(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.state={color:{r:255,g:255,b:255},showFullDate:!1},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){Q(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(K.a,{component:"legend"},"Display Format"),o.a.createElement(R.a,null,o.a.createElement(J.a,{control:o.a.createElement(Y.a,{checked:this.state.showFullDate,onChange:this.handleChangeShowFullDate,value:this.state.showFullDate}),label:"Show the full date with words? (e.g. Tuesday, July 2nd, 2019)"}),o.a.createElement(K.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:z,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(u.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ee=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(Z),te=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),q(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeDisplayFormat=function(e){a.setState({displayAsCountdown:e.target.checked})},a.state={color:{r:255,g:255,b:255},displayAsCountdown:!1},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){Q(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(K.a,{component:"legend"},"Display Format"),o.a.createElement(R.a,null,o.a.createElement(J.a,{control:o.a.createElement(Y.a,{checked:this.state.displayAsCountdown,onChange:this.handleChangeDisplayFormat,value:"displayAsCountdown"}),label:"Display as countdown until next alarm?"}),o.a.createElement(K.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:z,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(u.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ae=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(te),ne=a(62),oe=a.n(ne),re=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),q(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeCity=function(e){a.setState({city:e.target.value})},a.state={color:{r:255,g:255,b:255},city:"Indianapolis"},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){Q(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(R.a,null,o.a.createElement(oe.a,{id:"city",label:"City",className:e.textField,value:this.state.city,onChange:this.handleChangeCity,margin:"normal"}),o.a.createElement(K.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:z,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(u.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),le=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"},textField:{marginBottom:"10px"}}})(re),ce=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings");var e=a.state.text.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f");q(a.props.apiKey,Object(h.a)({},a.state,{text:e})),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeText=function(e){a.setState({text:e.target.value})},a.state={color:{r:255,g:255,b:255},text:"Text to display"},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){Q(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(R.a,null,o.a.createElement(oe.a,{id:"text",label:"Text",className:e.textField,value:this.state.text,onChange:this.handleChangeText,margin:"normal",helperText:"Text will continously scroll."}),o.a.createElement(K.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:z,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(u.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ie=Object(s.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"},textField:{marginBottom:"10px"}}})(ce);function se(e){return e.charAt(0).toUpperCase()+e.slice(1)}function de(e){var t=e,a=!1;return isNaN(e)&&(t=null,a=null),e>=12?(t=String(24-t),a=!0):(t=String(t),a=!1),{hour:e,ampmHour:t,evening:a}}function ue(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var me=a(73),pe=a.n(me),he=function(e){function t(){return Object(g.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props;return o.a.createElement(i.c,{item:!0,xs:12,sm:6},o.a.createElement(i.f,{variant:"h6"},se(e.columnId)," Modules"),o.a.createElement(B.c,{droppableId:e.columnId},function(t){return o.a.createElement(i.d,Object.assign({className:e.classes.paper},t.droppableProps),o.a.createElement(pe.a,{rootRef:t.innerRef},o.a.createElement(O.a,{style:{minHeight:"60px"}},e.modules.map(function(t){return o.a.createElement(H,{apiName:t,displayName:"nextalarm"===t?"Next Alarm":se(t),active:"active"===e.columnId,key:t,index:e.indexes[t]},function(e){switch(e){case"time":return o.a.createElement(X,{apiKey:e});case"nextalarm":return o.a.createElement(ae,{apiKey:e});case"date":return o.a.createElement(ee,{apiKey:e});case"weather":return o.a.createElement(le,{apiKey:e});case"text":return o.a.createElement(ie,{apiKey:e});default:return null}}(t))}))),0===e.modules.length?o.a.createElement(i.f,{variant:"body2",style:{position:"relative",bottom:"30px"}},"Drag modules here to add them to the alarm clock."):"",t.placeholder)}))}}]),t}(o.a.Component),ge=Object(s.withStyles)(function(e){return{paper:{textAlign:"center",color:e.palette.text.secondary}}})(he),fe=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).getModules=function(e){return"active"===e?a.getActiveModules(a.state.modules):"inactive"===e?a.getInactiveModules(a.state.modules):null},a.getActiveModules=function(e){return Object.keys(e).filter(function(t){return e[t]>=0&&e[t]<=3}).sort(function(t,a){return e[t]-e[a]})},a.getInactiveModules=function(e){return Object.keys(e).filter(function(t){return e[t]<0||e[t]>3})},a.onDragEnd=function(e){var t=e.destination,n=e.source,o=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){if("inactive"===t.droppableId){var r=Object(h.a)({},a.state.modules,Object(c.a)({},o,-1));a.setState({modules:r},function(){console.log(Object(h.a)({},a.state.modules)),q("modules",Object(h.a)({},a.state.modules))})}if("active"!==t.droppableId||"inactive"!==n.droppableId||4!==a.getActiveModules(a.state.modules).length){if("active"===t.droppableId&&"inactive"===n.droppableId&&a.getActiveModules(a.state.modules).length<4){var l=a.getActiveModules(a.state.modules);l.splice(t.index,0,o);var i=Object(h.a)({},a.state.modules);l.forEach(function(e){i[e]=l.indexOf(e)}),a.setState({modules:i},function(){console.log(Object(h.a)({},a.state.modules)),q("modules",Object(h.a)({},a.state.modules))})}if("active"===t.droppableId&&"active"===n.droppableId){var s=a.getActiveModules(a.state.modules);s.splice(n.index,1),s.splice(t.index,0,o);var d=Object(h.a)({},a.state.modules);s.forEach(function(e){d[e]=s.indexOf(e)}),a.setState({modules:d},function(){console.log(Object(h.a)({},a.state.modules)),q("modules",Object(h.a)({},a.state.modules))})}}}},a.state={modules:{time:-1,nextalarm:-1,date:-1,weather:-1,text:-1},columnOrder:["active","inactive"]},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch($+"/modules",{cache:"no-cache"}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({modules:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement(i.c,{container:!0,spacing:24},o.a.createElement(B.a,{onDragEnd:this.onDragEnd},this.state.columnOrder.map(function(t){var a=e.getModules(t);return o.a.createElement(ge,{modules:a,columnId:t,key:t,indexes:e.state.modules})})))}}]),t}(o.a.Component),be=Object(s.withStyles)(function(e){return{paper:{textAlign:"center",color:e.palette.text.secondary}}})(fe);var ve=Object(s.withStyles)(function(e){return{root:{flexGrow:1},demo:{backgroundColor:e.palette.background.paper}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(i.f,{variant:"subtitle1"},"Drag modules from inactive to active to display it on your alarm. You can only have 4 active modules at a time."),o.a.createElement("br",null),o.a.createElement(be,null))}),ye=a(75),Ee=a.n(ye),Oe=a(103),je=a.n(Oe),Ce=a(105),xe=a.n(Ce),we=a(104),ke=a.n(we),Se=a(47),Ne=a.n(Se),De=a(49),Me=a.n(De),Ie=a(106),Ae=a.n(Ie),Te=a(107),Fe=a.n(Te),Be=function(e){function t(e){var a;return Object(g.a)(this,t),a=Object(b.a)(this,Object(v.a)(t).call(this,e)),console.log(de(a.props.hour)),a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e,t=this.props.classes;return o.a.createElement("div",null,o.a.createElement(je.a,{className:t.root,elevation:1},o.a.createElement(ke.a,{className:t.cardContent},o.a.createElement(Ne.a,{variant:"h3",className:t.timeText},de(this.props.hour).ampmHour,":",isNaN(this.props.min)?this.props.min:String(this.props.min).padStart(2,"0")),o.a.createElement(Ne.a,{variant:"h6",className:t.amPMText},de(this.props.hour).evening?"pm":"am"),o.a.createElement(Y.a,{className:t.enabledSwitch,value:"enabled"}),this.props.name&&o.a.createElement(Ne.a,{variant:"body1"},this.props.name)),o.a.createElement("br",null),o.a.createElement(xe.a,null,o.a.createElement(i.c,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:t.bottomItems},o.a.createElement(i.c,{item:!0},o.a.createElement(Me.a,{label:"M",className:t.chip,color:this.props.days&&this.props.days.monday?"primary":"default"}),o.a.createElement(Me.a,{label:"T",className:t.chip,color:this.props.days&&this.props.days.tuesday?"primary":"default"}),o.a.createElement(Me.a,{label:"W",className:t.chip,color:this.props.days&&this.props.days.wednesday?"primary":"default"}),o.a.createElement(Me.a,{label:"Th",className:t.chip,color:this.props.days&&this.props.days.thursday?"primary":"default"}),o.a.createElement(Me.a,{label:"F",className:t.chip,color:this.props.days&&this.props.days.friday?"primary":"default"})),o.a.createElement(i.c,{item:!0},this.props.color&&o.a.createElement(Ae.a,{className:t.colorIcon,style:{color:(e=this.props.color,"#"+ue(e.r)+ue(e.g)+ue(e.b))}}),o.a.createElement(A.a,{className:t.editButton,"aria-label":"Delete"},o.a.createElement(Fe.a,null)))))))}}]),t}(n.Component),Ue=Object(s.withStyles)(function(e){var t;return{root:(t={paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},Object(c.a)(t,e.breakpoints.down("xs"),{minWidth:"inherit"}),Object(c.a)(t,e.breakpoints.down("sm"),{minWidth:"360px"}),Object(c.a)(t,e.breakpoints.up("md"),{minWidth:"800px"}),Object(c.a)(t,e.breakpoints.up("lg"),{minWidth:"1000px"}),t),timeText:{display:"inline-block"},amPMText:{display:"inline-block",paddingLeft:"4px"},cardContent:{marginBottom:-20,paddingBottom:0},enabledSwitch:{float:"right"},bottomItems:{paddingLeft:"5px"},chip:{width:32,height:32,fontSize:10,marginRight:5},editButton:{marginLeft:3,textAlign:"right"},colorIcon:{position:"relative",top:8,border:"2px solid #757575",borderRadius:"100%"}}})(Be),He=a(108),We=a.n(He),Ke=a(109),Pe=a.n(Ke),Re=a(249),Le=a.n(Re),Je=function(e){function t(){return Object(g.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Le.a,{placeholder:this.props.placeholder,mode:"12h",onChange:function(e){return console.log(e)}}))}}]),t}(n.Component),Ge=Object(s.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},dense:{marginTop:19},menu:{width:200}}})(Je),Ye=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleOpen=function(){a.setState({createAlarmModalOpen:!0})},a.handleClose=function(){a.setState({createAlarmModalOpen:!1})},a.state={createAlarmModalOpen:!1,alarms:[]},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch($+"/alarms",{cache:"no-cache"}).then(function(e){return e.json()}).then(function(t){console.log("got",t),e.setState({alarms:t})})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(Ee.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:16},o.a.createElement(i.f,{variant:"h4",className:e.title},"Your Alarms"),this.state.alarms.map(function(e){return o.a.createElement(Ee.a,{item:!0,key:e._id},o.a.createElement(Ue,{id:e._id,hour:e.hour,min:e.min,name:e.name,color:e.color,days:e.days}))})),o.a.createElement(F.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.createAlarmModalOpen,onClose:this.handleClose},o.a.createElement("div",{className:e.modal},o.a.createElement(i.f,{variant:"h6",id:"modal-title"},"Create a new alarm"),o.a.createElement(Ge,{placeholder:"New alarm time"}))),o.a.createElement(We.a,{color:"primary","aria-label":"Add",className:e.fab,onClick:this.handleOpen},o.a.createElement(Pe.a,null)))}}]),t}(o.a.Component),_e=Object(s.withStyles)(function(e){return{root:Object(h.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),demo:{backgroundColor:e.palette.background.paper},fab:{position:"fixed",bottom:2*e.spacing.unit,right:2*e.spacing.unit},title:{textAlign:"left"},modal:{position:"absolute",width:50*e.spacing.unit,boxShadow:e.shadows[5],padding:4*e.spacing.unit,top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#f5f5f5"}}})(Ye),ze=a(5880),$e=a(5879),qe=Object(s.withStyles)(function(e){return{main:Object(c.a)({padding:3*e.spacing.unit},e.breakpoints.down("xs"),{padding:2*e.spacing.unit})}})(function(e){var t=e.classes;return o.a.createElement(ze.a,null,o.a.createElement(n.Fragment,null,o.a.createElement(i.b,null),o.a.createElement(p,null),o.a.createElement("main",{className:t.main},o.a.createElement($e.a,{path:"/",exact:!0,component:ve}),o.a.createElement($e.a,{path:"/alarms",exact:!0,component:_e}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5527,2,1]]]);
//# sourceMappingURL=main.7ccb84f0.chunk.js.map