(this["webpackJsonpmaterial-ui-paperbase-demo"]=this["webpackJsonpmaterial-ui-paperbase-demo"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),r=t(13),n=t.n(r),s=t(21),l=t(36),o=t(14),j=t(83),d=t(163),b=t(6),x=t(164),m=t(168),h=t(48),O=t(161),p=t(61),g=t(4),u=t(153),v=t(166),y=t(149),k=t(150),f=t(152),w=t(151),C=t(53),N=t.n(C),P=t(76),z=t.n(P),M=t(78),E=t.n(M),S=t(77),B=t.n(S),R=t(1),T=[{id:"Game",children:[{id:"Home",icon:Object(R.jsx)(N.a,{}),index:0,active:!1},{id:"Coming Soon...",icon:Object(R.jsx)(z.a,{}),index:1,active:!1}]},{id:"Others",children:[{id:"Usage",icon:Object(R.jsx)(B.a,{}),index:2,active:!1},{id:"Contact",icon:Object(R.jsx)(E.a,{}),index:3,active:!1}]}];var U=Object(b.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)}}}))((function(e){var a=e.classes,t=Object(p.a)(e,["classes"]),c=i.a.useState(0),r=Object(s.a)(c,2),n=r[0],l=r[1];return Object(R.jsx)(v.a,Object(o.a)(Object(o.a)({variant:"permanent"},t),{},{children:Object(R.jsxs)(y.a,{disablePadding:!0,children:[Object(R.jsx)(k.a,{className:Object(g.a)(a.firebase,a.item,a.itemCategory),children:"Among Us Helper"}),T.map((function(e){var t=e.id,c=e.children;return Object(R.jsxs)(i.a.Fragment,{children:[Object(R.jsx)(k.a,{className:a.categoryHeader,children:Object(R.jsx)(w.a,{classes:{primary:a.categoryHeaderPrimary},children:t})}),c.map((function(e){var t=e.id,c=e.icon,i=e.index,r=e.active;return Object(R.jsxs)(k.a,{button:!0,className:Object(g.a)(a.item,r&&a.itemActiveItem),selected:n===i,onClick:function(e){return function(e,a){l(a)}(0,i)},children:[Object(R.jsx)(f.a,{className:a.itemIcon,children:c}),Object(R.jsx)(w.a,{classes:{primary:a.itemPrimary},children:t})]},t)})),Object(R.jsx)(u.a,{className:a.divider})]},t)}))]})}))})),W=t(155),I=t(156),H=t(112),D=t(157),A=t(59),L=t.n(A),F=t(154),G=t(172),Y=Object(F.a)({root:{}});function J(e){return"".concat(e,"\xb0C")}var Q=function(){var e=Y();return Object(R.jsx)("div",{className:e.root,children:Object(R.jsx)(G.a,{defaultValue:50,getAriaValueText:J,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:25,min:0,max:100})})},V=t(158),q=t(169);var K=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes,t=i.a.useState({red:!0,blue:!0,green:!0,pink:!0,orange:!0,yellow:!0,black:!0,white:!0,purple:!0,brown:!0,cyan:!0,lime:!0}),c=Object(s.a)(t,2),r=c[0],n=c[1],j=i.a.useState({red:!1,blue:!1,green:!1,pink:!1,orange:!1,yellow:!1,black:!1,white:!1,purple:!1,brown:!1,cyan:!1,lime:!1}),d=Object(s.a)(j,2),b=d[0],x=d[1],m=function(e){"isUsedEMRight"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),x(Object(o.a)(Object(o.a)({},b),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+".")),"isExistPlayer"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),n(Object(o.a)(Object(o.a)({},r),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+"."))};return Object(R.jsxs)(H.a,{className:a.paper,children:[Object(R.jsx)(W.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(R.jsx)(I.a,{children:Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(N.a,{className:a.block,color:"inherit"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(L.a,{className:a.block,color:"inherit"})}),Object(R.jsx)(D.a,{item:!0,xs:6,children:Object(R.jsx)(h.a,{children:"Detective"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(L.a,{className:a.block,color:"inherit"})})]})})}),Object(R.jsx)("div",{className:a.contentWrapper,children:Object(R.jsxs)(D.a,{container:!0,alignItems:"center",children:[Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Red"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.red,onChange:m,color:"primary",name:"isExistPlayer",value:"red"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.red,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"red"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Blue"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.blue,onChange:m,color:"primary",name:"isExistPlayer",value:"blue"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.blue,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"blue"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Green"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.green,onChange:m,color:"primary",name:"isExistPlayer",value:"green"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.green,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"green"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Pink"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.pink,onChange:m,color:"primary",name:"isExistPlayer",value:"pink"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.pink,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"pink"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Orange"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.orange,onChange:m,color:"primary",name:"isExistPlayer",value:"orange"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.orange,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"orange"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Yellow"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.yellow,onChange:m,color:"primary",name:"isExistPlayer",value:"yellow"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.yellow,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"yellow"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Black"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.black,onChange:m,color:"primary",name:"isExistPlayer",value:"black"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.black,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"black"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"White"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.white,onChange:m,color:"primary",name:"isExistPlayer",value:"white"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.white,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"white"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Purple"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.white,onChange:m,color:"primary",name:"isExistPlayer",value:"white"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.purple,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"purple"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Brown"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.brown,onChange:m,color:"primary",name:"isExistPlayer",value:"brown"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.brown,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"brown"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Cyan"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.pink,onChange:m,color:"primary",name:"isExistPlayer",value:"pink"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.cyan,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"cyan"})})]}),Object(R.jsxs)(D.a,{container:!0,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{children:"Lime"})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(V.a,{size:"small",checked:r.lime,onChange:m,color:"primary",name:"isExistPlayer",value:"lime"})}),Object(R.jsx)(D.a,{item:!0,xs:4,children:Object(R.jsx)(Q,{})}),Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(q.a,{checked:b.lime,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"lime"})})]})]})})]})})),X=t(167),Z=t(160),$=t(165);var _=function(e){var a=e.children,t=e.value,c=e.index,i=Object(p.a)(e,["children","value","index"]);return Object(R.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:t!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},i),{},{children:t===c&&Object(R.jsx)($.a,{p:3,children:Object(R.jsx)(h.a,{children:a})})}))},ee=t.p+"static/media/TheSkeld.236dbec6.png",ae=t.p+"static/media/MiraHQ.061041be.png",te=t.p+"static/media/Polus.00e35bcb.png";function ce(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ie=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"},mapPanel:{width:"100%",height:"100%"},map:{display:"inline-block",width:"100%",height:"100%"}}}))((function(e){var a=e.classes,t=i.a.useState(0),c=Object(s.a)(t,2),r=c[0],n=c[1];return Object(R.jsxs)(H.a,{className:a.paper,children:[Object(R.jsx)(W.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(R.jsx)(I.a,{children:Object(R.jsxs)(X.a,{value:r,onChange:function(e,a){n(a)},"aria-label":"simple tabs example",indicatorColor:"green",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:[Object(R.jsx)(Z.a,Object(o.a)({label:"The Skeld"},ce(0))),Object(R.jsx)(Z.a,Object(o.a)({label:"MiraHQ"},ce(1))),Object(R.jsx)(Z.a,Object(o.a)({label:"Polus"},ce(2)))]})})}),Object(R.jsxs)("div",{className:a.contentWrapper,children:[Object(R.jsx)(_,{value:r,index:0,className:a.mapPanel,children:Object(R.jsx)("img",{src:ee,art:r,className:a.map})}),Object(R.jsx)(_,{value:r,index:1,className:a.mapPanel,children:Object(R.jsx)("img",{src:ae,art:r,className:a.map})}),Object(R.jsx)(_,{value:r,index:2,className:a.mapPanel,children:Object(R.jsx)("img",{src:te,art:r,className:a.map})})]})]})})),re=t(171),ne=t(162),se=t(82),le=t.n(se),oe=t(159),je=t(79),de=t.n(je),be=t(81),xe=t.n(be),me=t(170);var he=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(R.jsx)(H.a,{className:a.paper,children:Object(R.jsx)("div",{className:a.contentWrapper,children:Object(R.jsx)(h.a,{color:"textSecondary",align:"center",children:"Developing! Please wait..."})})})})),Oe="rgba(255, 255, 255, 0.7)";function pe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ge=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:Oe,"&:hover":{color:e.palette.common.white}},button:{borderColor:Oe}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=i.a.useState(1),r=Object(s.a)(c,2),n=r[0],l=r[1];return Object(R.jsxs)(i.a.Fragment,{children:[Object(R.jsx)(W.a,{color:"primary",position:"sticky",elevation:0,children:Object(R.jsx)(I.a,{children:Object(R.jsxs)(D.a,{container:!0,spacing:1,alignItems:"center",children:[Object(R.jsx)(m.a,{smUp:!0,children:Object(R.jsx)(D.a,{item:!0,children:Object(R.jsx)(oe.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(R.jsx)(de.a,{})})})}),Object(R.jsx)(D.a,{item:!0,xs:!0}),Object(R.jsx)(D.a,{item:!0,children:Object(R.jsx)(O.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(R.jsx)(D.a,{item:!0,children:Object(R.jsx)(me.a,{title:"Alerts \u2022 No alerts",children:Object(R.jsx)(oe.a,{color:"inherit",children:Object(R.jsx)(xe.a,{})})})}),Object(R.jsx)(D.a,{item:!0,children:Object(R.jsx)(oe.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(R.jsx)(re.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(R.jsx)(W.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(R.jsx)(I.a,{children:Object(R.jsxs)(D.a,{container:!0,alignItems:"center",spacing:1,children:[Object(R.jsx)(D.a,{item:!0,xs:!0,children:Object(R.jsx)(h.a,{color:"inherit",variant:"h5",component:"h1",children:"Home"})}),Object(R.jsx)(D.a,{item:!0,children:Object(R.jsx)(ne.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(R.jsx)(D.a,{item:!0,children:Object(R.jsx)(me.a,{title:"Help",children:Object(R.jsx)(oe.a,{color:"inherit",children:Object(R.jsx)(le.a,{})})})})]})})}),Object(R.jsx)(W.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(R.jsxs)(X.a,{value:n,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(R.jsx)(Z.a,Object(o.a)({textColor:"inherit",label:"Top"},pe(0))),Object(R.jsx)(Z.a,Object(o.a)({textColor:"inherit",label:"Players"},pe(1))),Object(R.jsx)(Z.a,Object(o.a)({textColor:"inherit",label:"Map"},pe(2)))]})}),Object(R.jsxs)("main",{className:a.main,children:[Object(R.jsx)(_,{value:n,index:0,className:a.mapPanel,children:Object(R.jsx)(he,{})}),Object(R.jsx)(_,{value:n,index:1,className:a.mapPanel,children:Object(R.jsx)(K,{})}),Object(R.jsx)(_,{value:n,index:2,className:a.mapPanel,children:Object(R.jsx)(ie,{})})]})]})}));function ue(){return Object(R.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(R.jsx)(O.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ve=Object(j.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});ve=Object(o.a)(Object(o.a)({},ve),{},{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:ve.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:ve.palette.common.white}},MuiTab:{root:Object(l.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},ve.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:ve.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:ve.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var ye={root:{display:"flex",minHeight:"100vh"},drawer:Object(l.a)({},ve.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},footer:{padding:ve.spacing(2),background:"#eaeff1"}};var ke=Object(b.a)(ye)((function(e){var a=e.classes,t=i.a.useState(!1),c=Object(s.a)(t,2),r=c[0],n=c[1],l=function(){n(!r)},o=i.a.useState(1),j=Object(s.a)(o,2);return j[0],j[1],Object(R.jsx)(d.a,{theme:ve,children:Object(R.jsxs)("div",{className:a.root,children:[Object(R.jsx)(x.a,{}),Object(R.jsxs)("nav",{className:a.drawer,children:[Object(R.jsx)(m.a,{smUp:!0,implementation:"js",children:Object(R.jsx)(U,{PaperProps:{style:{width:256}},variant:"temporary",open:r,onClose:l,selectedPage:!0})}),Object(R.jsx)(m.a,{xsDown:!0,implementation:"css",children:Object(R.jsx)(U,{PaperProps:{style:{width:256}}})})]}),Object(R.jsxs)("div",{className:a.app,children:[Object(R.jsx)(ge,{onDrawerToggle:l}),Object(R.jsx)("footer",{className:a.footer,children:Object(R.jsx)(ue,{})})]})]})})}));n.a.render(Object(R.jsx)(ke,{}),document.querySelector("#root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.2f15afbd.chunk.js.map