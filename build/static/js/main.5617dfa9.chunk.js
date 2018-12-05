(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5529:function(e,t,a){e.exports=a(5882)},5882:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(33),l=a.n(r),s=a(38),c=a(12),i=a(9),d=a(24),m=a.n(d),p=a(5883),u=Object(i.withStyles)({root:{flexGrow:1,marginBottom:64},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){return o.a.createElement("div",{className:e.classes.root},o.a.createElement(c.a,{position:"fixed"},o.a.createElement(c.e,null,o.a.createElement(c.f,{variant:"title",color:"inherit",className:e.classes.grow},"IoT Alarm Clock"),o.a.createElement(m.a,{color:"inherit",component:p.a,to:"/"},"Alarms"),o.a.createElement(m.a,{color:"inherit",component:p.a,to:"/settings"},"Modules"))))}),h=a(10),b=a(19),g=a(20),f=a(23),y=a(21),E=a(22),v=a(77),O=a.n(v),j=a(104),C=a.n(j),k=a(105),x=a.n(k),w=a(106),S=a.n(w),N=a(161),M=a(107),A=a.n(M),D=a(56),T=a.n(D),I=a(37),F=a.n(I),H=a(66),B=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleOpenSettings=function(){a.setState({settingsOpen:!0})},a.handleClose=function(){a.setState({settingsOpen:!1})},a.state={settingsOpen:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props;return o.a.createElement(H.b,{draggableId:t.apiName,index:t.index},function(a,n){return o.a.createElement("div",Object.assign({},a.draggableProps,{ref:a.innerRef}),o.a.createElement(C.a,{style:n.isDragging?{backgroundColor:"#f5f5f5"}:{backgroundColor:"white"}},o.a.createElement("div",a.dragHandleProps,o.a.createElement(x.a,null,o.a.createElement(N.a,null))),o.a.createElement(S.a,{primary:t.displayName||t.apiName}),t.active&&o.a.createElement(A.a,null,o.a.createElement(T.a,{"aria-label":"Open Settings",onClick:e.handleOpenSettings},o.a.createElement(N.b,null)))),o.a.createElement(F.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:e.state.settingsOpen,onClose:e.handleClose},o.a.createElement("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#f5f5f5"},className:t.classes.paper},o.a.cloneElement(t.children,{closeModal:e.handleClose}))))})}}]),t}(o.a.Component),U=Object(i.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit}}})(B),W=a(25),P=a.n(W),K=a(31),L=a.n(K),R=a(28),J=a.n(R),G=a(40),Y=a.n(G),_=a(41),q=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#ffffff"],z="http://"+window.location.hostname+":3000";function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("patching",t),fetch(z+"/"+e,{method:"PATCH",headers:{"Content-Type":"application/json; charset=utf-8"},cache:"no-cache",body:JSON.stringify(t)}).then(function(e){return e.json()})}function $(e){fetch(z+"/"+e.props.apiKey,{cache:"no-cache"}).then(function(e){return e.json()}).then(function(t){console.log("got",t[0]),e.setState(Object(h.a)({},t[0]))})}var Q=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),V(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeFormat=function(e){a.setState({format24:e.target.checked})},a.state={color:{r:255,g:255,b:255},format24:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){$(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(P.a,{component:"legend"},"Display Format"),o.a.createElement(L.a,null,o.a.createElement(J.a,{control:o.a.createElement(Y.a,{checked:this.state.format24,onChange:this.handleChangeFormat,value:"format24"}),label:"Display as 24-hour time?"}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(m.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),X=Object(i.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(Q),Z=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeShowFullDate=function(e){a.setState({showFullDate:e.target.checked})},a.handleUpdateSettings=function(){console.log("handled updated settings"),V(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.state={color:{r:255,g:255,b:255},showFullDate:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){$(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(P.a,{component:"legend"},"Display Format"),o.a.createElement(L.a,null,o.a.createElement(J.a,{control:o.a.createElement(Y.a,{checked:this.state.showFullDate,onChange:this.handleChangeShowFullDate,value:this.state.showFullDate}),label:"Show the full date with words? (e.g. Tuesday, July 2nd, 2019)"}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(m.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ee=Object(i.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(Z),te=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),V(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeDisplayFormat=function(e){a.setState({displayAsCountdown:e.target.checked})},a.state={color:{r:255,g:255,b:255},displayAsCountdown:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){$(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(P.a,{component:"legend"},"Display Format"),o.a.createElement(L.a,null,o.a.createElement(J.a,{control:o.a.createElement(Y.a,{checked:this.state.displayAsCountdown,onChange:this.handleChangeDisplayFormat,value:"displayAsCountdown"}),label:"Display as countdown until next alarm?"}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(m.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ae=Object(i.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"}}})(te),ne=a(53),oe=a.n(ne),re=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings"),V(a.props.apiKey,Object(h.a)({},a.state)),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeCity=function(e){a.setState({city:e.target.value})},a.state={color:{r:255,g:255,b:255},city:"Indianapolis"},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){$(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(L.a,null,o.a.createElement(oe.a,{id:"city",label:"City",className:e.textField,value:this.state.city,onChange:this.handleChangeCity,margin:"normal"}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(m.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),le=Object(i.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"},textField:{marginBottom:"10px"}}})(re),se=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleUpdateSettings=function(){console.log("handled updated settings");var e=a.state.text.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f");V(a.props.apiKey,Object(h.a)({},a.state,{text:e})),a.props.closeModal()},a.handleChangeColor=function(e){a.setState({color:e.rgb})},a.handleChangeText=function(e){a.setState({text:e.target.value})},a.state={color:{r:255,g:255,b:255},text:"Text to display"},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){$(this)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.modal},o.a.createElement(L.a,null,o.a.createElement(oe.a,{id:"text",label:"Text",className:e.textField,value:this.state.text,onChange:this.handleChangeText,margin:"normal",helperText:"Text will continously scroll."}),o.a.createElement(P.a,{variant:"subtitle2",className:e.colorHeader},"Display Color"),o.a.createElement(_.CirclePicker,{colors:q,onChange:this.handleChangeColor,color:this.state.color})),o.a.createElement(m.a,{variant:"contained",color:"primary",className:e.button,fullWidth:!0,onClick:this.handleUpdateSettings},"Update"))}}]),t}(o.a.Component),ce=Object(i.withStyles)(function(e){return{button:{margin:e.spacing.unit,marginTop:"30px"},colorHeader:{marginBottom:"5px"},modal:{backgroundColor:"#f5f5f5"},textField:{marginBottom:"10px"}}})(se);function ie(e){return e.charAt(0).toUpperCase()+e.slice(1)}function de(e){var t=e,a=!1;return isNaN(e)&&(t=null,a=null),e>=12?(t=String(24-t),a=!0):(0==e&&(e=12,t=12),t=String(t),a=!1),{hour:e,ampmHour:t,evening:a}}function me(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var pe=a(76),ue=a.n(pe),he=function(e){function t(){return Object(b.a)(this,t),Object(f.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props;return o.a.createElement(c.c,{item:!0,xs:12,sm:6},o.a.createElement(c.f,{variant:"h6"},ie(e.columnId)," Modules"),o.a.createElement(H.c,{droppableId:e.columnId},function(t){return o.a.createElement(c.d,Object.assign({className:e.classes.paper},t.droppableProps),o.a.createElement(ue.a,{rootRef:t.innerRef},o.a.createElement(O.a,{style:{minHeight:"60px"}},e.modules.map(function(t){return o.a.createElement(U,{apiName:t,displayName:"nextalarm"===t?"Next Alarm":ie(t),active:"active"===e.columnId,key:t,index:e.indexes[t]},function(e){switch(e){case"time":return o.a.createElement(X,{apiKey:e});case"nextalarm":return o.a.createElement(ae,{apiKey:e});case"date":return o.a.createElement(ee,{apiKey:e});case"weather":return o.a.createElement(le,{apiKey:e});case"text":return o.a.createElement(ce,{apiKey:e});default:return null}}(t))}))),0===e.modules.length?o.a.createElement(c.f,{variant:"body2",style:{position:"relative",bottom:"30px"}},"Drag modules here to add them to the alarm clock."):"",t.placeholder)}))}}]),t}(o.a.Component),be=Object(i.withStyles)(function(e){return{paper:{textAlign:"center",color:e.palette.text.secondary}}})(he),ge=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).getModules=function(e){return"active"===e?a.getActiveModules(a.state.modules):"inactive"===e?a.getInactiveModules(a.state.modules):null},a.getActiveModules=function(e){return Object.keys(e).filter(function(t){return e[t]>=0&&e[t]<=3}).sort(function(t,a){return e[t]-e[a]})},a.getInactiveModules=function(e){return Object.keys(e).filter(function(t){return e[t]<0||e[t]>3})},a.onDragEnd=function(e){var t=e.destination,n=e.source,o=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){if("inactive"===t.droppableId){var r=Object(h.a)({},a.state.modules,Object(s.a)({},o,-1));a.setState({modules:r},function(){console.log(Object(h.a)({},a.state.modules)),V("modules",Object(h.a)({},a.state.modules))})}if("active"!==t.droppableId||"inactive"!==n.droppableId||4!==a.getActiveModules(a.state.modules).length){if("active"===t.droppableId&&"inactive"===n.droppableId&&a.getActiveModules(a.state.modules).length<4){var l=a.getActiveModules(a.state.modules);l.splice(t.index,0,o);var c=Object(h.a)({},a.state.modules);l.forEach(function(e){c[e]=l.indexOf(e)}),a.setState({modules:c},function(){console.log(Object(h.a)({},a.state.modules)),V("modules",Object(h.a)({},a.state.modules))})}if("active"===t.droppableId&&"active"===n.droppableId){var i=a.getActiveModules(a.state.modules);i.splice(n.index,1),i.splice(t.index,0,o);var d=Object(h.a)({},a.state.modules);i.forEach(function(e){d[e]=i.indexOf(e)}),a.setState({modules:d},function(){console.log(Object(h.a)({},a.state.modules)),V("modules",Object(h.a)({},a.state.modules))})}}}},a.state={modules:{time:-1,nextalarm:-1,date:-1,weather:-1,text:-1},columnOrder:["active","inactive"]},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(z+"/modules",{cache:"no-cache"}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({modules:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement(c.c,{container:!0,spacing:24},o.a.createElement(H.a,{onDragEnd:this.onDragEnd},this.state.columnOrder.map(function(t){var a=e.getModules(t);return o.a.createElement(be,{modules:a,columnId:t,key:t,indexes:e.state.modules})})))}}]),t}(o.a.Component),fe=Object(i.withStyles)(function(e){return{paper:{textAlign:"center",color:e.palette.text.secondary}}})(ge);var ye=Object(i.withStyles)(function(e){return{root:{flexGrow:1},demo:{backgroundColor:e.palette.background.paper}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(c.f,{variant:"subtitle1"},"Drag modules from inactive to active to display it on your alarm. You can only have 4 active modules at a time."),o.a.createElement("br",null),o.a.createElement(fe,null))}),Ee=a(27),ve=a(78),Oe=a.n(ve),je=a(108),Ce=a.n(je),ke=a(110),xe=a.n(ke),we=a(109),Se=a.n(we),Ne=a(46),Me=a.n(Ne),Ae=a(43),De=a.n(Ae),Te=a(111),Ie=a.n(Te),Fe=a(112),He=a.n(Fe),Be=a(252),Ue=a.n(Be),We=a(42),Pe=a.n(We),Ke=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).state={name:a.props.name?a.props.name:"",hour:a.props.hour?a.props.hour:(new Date).getHours(),min:a.props.min?a.props.min:(new Date).getMinutes(),days:{monday:!(!a.props.days||!a.props.days.monday)&&a.props.days.monday,tuesday:!(!a.props.days||!a.props.days.tuesday)&&a.props.days.tuesday,wednesday:!(!a.props.days||!a.props.days.wednesday)&&a.props.days.wednesday,thursday:!(!a.props.days||!a.props.days.thursday)&&a.props.days.thursday,friday:!(!a.props.days||!a.props.days.friday)&&a.props.days.friday,saturday:!(!a.props.days||!a.props.days.saturday)&&a.props.days.saturday,sunday:!(!a.props.days||!a.props.days.sunday)&&a.props.days.sunday}},a.submitAlarm=a.submitAlarm.bind(Object(Ee.a)(Object(Ee.a)(a))),a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"submitAlarm",value:function(){var e=this;this.props.id?fetch(z+"/alarms/"+this.props.id,{method:"PATCH",headers:{"Content-Type":"application/json; charset=utf-8"},cache:"no-cache",body:JSON.stringify(this.state)}).then(function(t){t.json(),e.props.fetchAlarms(),e.props.closeModal()}):fetch(z+"/alarms",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},cache:"no-cache",body:JSON.stringify(this.state)}).then(function(e){return e.json()})}},{key:"deleteAlarm",value:function(){var e=this;this.props.id&&fetch(z+"/alarms/"+this.props.id,{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"},cache:"no-cache"}).then(function(t){t.json(),e.props.fetchAlarms(),e.props.closeModal()})}},{key:"render",value:function(){var e=this;return o.a.createElement(c.c,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start"},o.a.createElement(c.c,{item:!0},o.a.createElement(P.a,{component:"legend"},"Alarm Time"),o.a.createElement(Ue.a,{placeholder:this.props.placeholder,mode:"12h",defaultValue:this.props.id?new Date((new Date).setHours(this.props.hour,this.props.min)):new Date,onChange:function(t){return e.setState({hour:t.getHours(),min:t.getMinutes()})}})),o.a.createElement(c.c,{item:!0},o.a.createElement(oe.a,{required:!0,id:"alarmName",label:"Alarm Name",margin:"normal",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})),o.a.createElement(c.c,{item:!0},o.a.createElement(L.a,null,o.a.createElement(J.a,{className:this.props.classes.checkbox,control:o.a.createElement(Pe.a,{checked:this.state.days.monday,onChange:function(t){return e.setState({days:Object(h.a)({},e.state.days,{monday:t.target.checked})})}}),label:"Monday"}),o.a.createElement(J.a,{className:this.props.classes.checkbox,control:o.a.createElement(Pe.a,{checked:this.state.days.tuesday,onChange:function(t){return e.setState({days:Object(h.a)({},e.state.days,{tuesday:t.target.checked})})},value:"tuesday"}),label:"Tuesday"}),o.a.createElement(J.a,{className:this.props.classes.checkbox,control:o.a.createElement(Pe.a,{checked:this.state.days.wednesday,onChange:function(t){return e.setState({days:Object(h.a)({},e.state.days,{wednesday:t.target.checked})})},value:"wednesday"}),label:"Wednesday"}),o.a.createElement(J.a,{className:this.props.classes.checkbox,control:o.a.createElement(Pe.a,{checked:this.state.days.thursday,onChange:function(t){return e.setState({days:Object(h.a)({},e.state.days,{thursday:t.target.checked})})},value:"thursday"}),label:"Thursday"}),o.a.createElement(J.a,{className:this.props.classes.checkbox,control:o.a.createElement(Pe.a,{checked:this.state.days.friday,onChange:function(t){return e.setState({days:Object(h.a)({},e.state.days,{friday:t.target.checked})})},value:"friday"}),label:"Friday"}),o.a.createElement(J.a,{className:this.props.classes.checkbox,control:o.a.createElement(Pe.a,{checked:this.state.days.saturday,onChange:function(t){return e.setState({days:Object(h.a)({},e.state.days,{saturday:t.target.checked})})},value:"saturday"}),label:"Saturday"}),o.a.createElement(J.a,{className:this.props.classes.checkbox,control:o.a.createElement(Pe.a,{checked:this.state.days.sunday,onChange:function(t){return e.setState({days:Object(h.a)({},e.state.days,{sunday:t.target.checked})})},value:"sunday"}),label:"Sunday"}))),o.a.createElement("br",null),o.a.createElement(c.c,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start"},o.a.createElement(c.c,{item:!0},o.a.createElement(m.a,{color:"primary",variant:"contained",onClick:function(){e.submitAlarm()}},"Submit")),o.a.createElement(c.c,{item:!0},this.props.id&&o.a.createElement(m.a,{style:{marginLeft:25},variant:"contained",onClick:function(){e.deleteAlarm()}},"Delete"))))}}]),t}(n.Component),Le=Object(i.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},dense:{marginTop:19},menu:{width:200},checkbox:{marginBottom:-10}}})(Ke),Re=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleEditOpen=function(){a.setState({editModalOpen:!0})},a.handleEditClose=function(){a.setState({editModalOpen:!1})},console.log(de(a.props.hour)),a.updateEnabled=a.updateEnabled.bind(Object(Ee.a)(Object(Ee.a)(a))),a.state={enabled:a.props.enabled,editModalOpen:!1},a.handleEditOpen=a.handleEditOpen.bind(Object(Ee.a)(Object(Ee.a)(a))),a.handleEditClose=a.handleEditClose.bind(Object(Ee.a)(Object(Ee.a)(a))),a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"updateEnabled",value:function(e,t){V("alarms/"+this.props.id,{enabled:t}),this.setState({enabled:t})}},{key:"render",value:function(){var e,t=this.props.classes;return o.a.createElement("div",null,o.a.createElement(Ce.a,{className:t.root,elevation:1},o.a.createElement(Se.a,{className:t.cardContent},o.a.createElement(Me.a,{variant:"h3",className:t.timeText},de(this.props.hour).ampmHour,":",isNaN(this.props.min)?this.props.min:String(this.props.min).padStart(2,"0")),o.a.createElement(Me.a,{variant:"h6",className:t.amPMText},de(this.props.hour).evening?"pm":"am"),o.a.createElement(Y.a,{className:t.enabledSwitch,value:"enabled",checked:this.state.enabled,onChange:this.updateEnabled}),this.props.name&&o.a.createElement(Me.a,{variant:"body1"},this.props.name)),o.a.createElement("br",null),o.a.createElement(xe.a,null,o.a.createElement(c.c,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:t.bottomItems},o.a.createElement(c.c,{item:!0},o.a.createElement(De.a,{label:"M",className:t.chip,color:this.props.days&&this.props.days.monday?"primary":"default"}),o.a.createElement(De.a,{label:"T",className:t.chip,color:this.props.days&&this.props.days.tuesday?"primary":"default"}),o.a.createElement(De.a,{label:"W",className:t.chip,color:this.props.days&&this.props.days.wednesday?"primary":"default"}),o.a.createElement(De.a,{label:"Th",className:t.chip,color:this.props.days&&this.props.days.thursday?"primary":"default"}),o.a.createElement(De.a,{label:"F",className:t.chip,color:this.props.days&&this.props.days.friday?"primary":"default"}),o.a.createElement(De.a,{label:"Sa",className:t.chip,color:this.props.days&&this.props.days.saturday?"primary":"default"}),o.a.createElement(De.a,{label:"Su",className:t.chip,color:this.props.days&&this.props.days.sunday?"primary":"default"})),o.a.createElement(c.c,{item:!0},this.props.color&&o.a.createElement(Ie.a,{className:t.colorIcon,style:{color:(e=this.props.color,"#"+me(e.r)+me(e.g)+me(e.b))}}),o.a.createElement(T.a,{className:t.editButton,"aria-label":"Edit",onClick:this.handleEditOpen},o.a.createElement(He.a,null)))))),o.a.createElement(F.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.editModalOpen,onClose:this.handleEditClose},o.a.createElement("div",{className:t.modal},o.a.createElement(Me.a,{variant:"h6",id:"modal-title"},"Edit an new alarm"),o.a.createElement("br",null),o.a.createElement(Le,{fetchAlarms:this.props.getAlarms,closeModal:this.handleEditClose,id:this.props.id,hour:this.props.hour,min:this.props.min,name:this.props.name,days:this.props.days}))))}}]),t}(n.Component),Je=Object(i.withStyles)(function(e){var t;return{root:(t={paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},Object(s.a)(t,e.breakpoints.down("xs"),{minWidth:"inherit"}),Object(s.a)(t,e.breakpoints.down("sm"),{minWidth:"360px"}),Object(s.a)(t,e.breakpoints.up("md"),{minWidth:"800px"}),Object(s.a)(t,e.breakpoints.up("lg"),{minWidth:"1000px"}),t),timeText:{display:"inline-block"},amPMText:{display:"inline-block",paddingLeft:"4px"},cardContent:{marginBottom:-20,paddingBottom:0},enabledSwitch:{float:"right"},bottomItems:{paddingLeft:"5px"},chip:{width:32,height:32,fontSize:10,marginRight:5},editButton:{marginLeft:3,textAlign:"right"},colorIcon:{position:"relative",top:8,border:"2px solid #757575",borderRadius:"100%"},modal:{position:"absolute",width:50*e.spacing.unit,boxShadow:e.shadows[5],padding:4*e.spacing.unit,top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#f5f5f5"}}})(Re),Ge=a(113),Ye=a.n(Ge),_e=a(114),qe=a.n(_e),ze=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleOpen=function(){a.setState({createAlarmModalOpen:!0})},a.closeModal=function(){a.setState({createAlarmModalOpen:!1})},a.getAlarms=function(){fetch(z+"/alarms",{cache:"no-cache"}).then(function(e){return e.json()}).then(function(e){console.log("got",e),a.setState({alarms:e}),a.setState({createAlarmModalOpen:!1})})},a.state={createAlarmModalOpen:!1,alarms:[]},a.closeModal.bind(Object(Ee.a)(Object(Ee.a)(a))),a.handleOpen.bind(Object(Ee.a)(Object(Ee.a)(a))),a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.getAlarms()}},{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",null,o.a.createElement(Oe.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:16},o.a.createElement(c.f,{variant:"h4",className:t.title},"Your Alarms"),this.state.alarms.map(function(t){return o.a.createElement(Oe.a,{item:!0,key:t._id},o.a.createElement(Je,{enabled:t.enabled,id:t._id,hour:t.hour,min:t.min,name:t.name,days:t.days,getAlarms:e.getAlarms}))})),o.a.createElement(F.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.createAlarmModalOpen,onClose:this.getAlarms},o.a.createElement("div",{className:t.modal},o.a.createElement(c.f,{variant:"h6",id:"modal-title"},"Create a new alarm"),o.a.createElement("br",null),o.a.createElement(Le,{placeholder:"New alarm time",fetchAlarms:this.getAlarms,closeModal:this.closeModal}))),o.a.createElement(Ye.a,{color:"primary","aria-label":"Add",className:t.fab,onClick:this.handleOpen},o.a.createElement(qe.a,null)))}}]),t}(o.a.Component),Ve=Object(i.withStyles)(function(e){return{root:Object(h.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),demo:{backgroundColor:e.palette.background.paper},fab:{position:"fixed",bottom:2*e.spacing.unit,right:2*e.spacing.unit},title:{textAlign:"left"},modal:{position:"absolute",width:50*e.spacing.unit,boxShadow:e.shadows[5],padding:4*e.spacing.unit,top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#f5f5f5"}}})(ze),$e=a(5885),Qe=a(5884),Xe=Object(i.withStyles)(function(e){return{main:Object(s.a)({padding:3*e.spacing.unit},e.breakpoints.down("xs"),{padding:2*e.spacing.unit})}})(function(e){var t=e.classes;return o.a.createElement($e.a,null,o.a.createElement(n.Fragment,null,o.a.createElement(c.b,null),o.a.createElement(u,null),o.a.createElement("main",{className:t.main},o.a.createElement(Qe.a,{path:"/",exact:!0,component:Ve}),o.a.createElement(Qe.a,{path:"/settings",exact:!0,component:ye}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5529,2,1]]]);
//# sourceMappingURL=main.5617dfa9.chunk.js.map