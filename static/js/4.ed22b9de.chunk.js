(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{148:function(e,t,a){e.exports=a.p+"static/media/good_reads_explorer.eff85db6.png"},177:function(e,t,a){"use strict";a.r(t);var n=a(41),i=a(42),r=a(44),o=a(43),s=a(45),c=a(1),l=a.n(c),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={hasError:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("Error",e,t)}},{key:"render",value:function(){return this.state.hasError?l.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(c.Component);t.default=u},185:function(e,t,a){},240:function(e,t,a){},248:function(e,t,a){},271:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAAAAACMIRMSAAAAmElEQVR4AX2RwQ4EIQhD/f9ftYW7p6U0buYiEmLG5fGUXRlELda2eyEJ6mDFea36Kf8RZ1egUjFTOFTtn4RSFN6Uu7Pq0bu7iFx8U/ZEh3yyyEk1fFIy+CXiXB+Ve3TdGVxuN6XTeRo0Y6d38aMLH8ZvtBXjDK/BtayAreM0dBdXZqcsdq+cJv/9f/3l286UK68zZVKX6V0/HECKK51+49AAAAAASUVORK5CYII="},272:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(41),i=a(42),r=a(44),o=a(43),s=a(45),c=a(21),l=a(1),u=a.n(l),d=a(22),p=a(303),h=a(12),m=a(316),f=a(312),g=a(313),b=a(317),y=a(4),O=a(306),v=a(302),k=(a(185),O.a.Meta),S=function(e){return u.a.createElement(O.a,{bordered:!1,className:"userCard"},u.a.createElement(k,{avatar:u.a.createElement(v.a,{src:e.user.image,size:"large"}),title:u.a.createElement("a",{href:e.user.link,target:"_blank",rel:"noopener noreferrer"},e.user.name),description:e.user.description.length>160?"".concat(e.user.description.slice(0,160),"..."):e.user.description,className:"userCardMeta"}))},E=a(11),j=a(124),C=a(295),x=a(294),A=a(238),N=a.n(A),R=a(293),w=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(o.a)(t).call(this))).clickHandler=e.clickHandler.bind(Object(c.a)(Object(c.a)(e))),e.doubleClickHandler=e.doubleClickHandler.bind(Object(c.a)(Object(c.a)(e))),e.mouseOverHandler=e.mouseOverHandler.bind(Object(c.a)(Object(c.a)(e))),e.mouseOutHandler=e.mouseOutHandler.bind(Object(c.a)(Object(c.a)(e))),e.clickTimeout=null,e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"clickHandler",value:function(){this.props.onClick({type:"NODE",data:this.props.id})}},{key:"doubleClickHandler",value:function(){this.props.onDoubleClick&&this.props.onDoubleClick({type:"NODE",data:this.props.id})}},{key:"mouseOverHandler",value:function(e,t){this.props.onMouseOver&&this.props.onMouseOver({type:"NODE",data:{id:this.props.id,text:this.props.text,type:this.props.type},event:e})}},{key:"mouseOutHandler",value:function(e){this.props.onMouseOut&&this.props.onMouseOut({type:"NODE",data:{id:this.props.id,text:this.props.text,type:this.props.type},event:e})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.radius,n=e.color,i=e.x,r=e.y,o=e.style,s=e.active;return u.a.createElement("g",{className:t,transform:"translate(".concat(i,",").concat(r,")"),onClick:this.clickHandler,style:{cursor:"pointer",opacity:s?1:.1},onMouseOver:this.mouseOverHandler,onMouseOut:this.mouseOutHandler},u.a.createElement("circle",{r:a,fill:n,style:o}),D(this.props))}}]),t}(l.Component),D=function(e){var t=e.id,a=e.img,n=e.radius,i=e.shortText,r=e.textStyle;return a?u.a.createElement("g",null,u.a.createElement("defs",null,u.a.createElement("clipPath",{id:"clip_".concat(t)},u.a.createElement("circle",{r:n-1}))),u.a.createElement("image",{xlinkHref:a,clipPath:"url(#clip_".concat(t,")"),x:-n,y:-n,width:2*n})):u.a.createElement("text",{dx:-n/2,dy:r.fontSize/2,style:r},i)};w.defaultProps={className:"node",radius:35,color:"#FFFFFF",style:{r:35,stroke:"#375E97",strokeWidth:"3px"},textStyle:{fontSize:15,fill:"#fff",strokeWidth:"3px",fontWeight:"normal"},x:0,y:0,active:!0};var H=w,M=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.d,a=e.pointer,n=e.style,i=e.id,r=e.active;return u.a.createElement("g",{style:{opacity:r?1:.1}},T(this.props),u.a.createElement("path",{id:i,style:n,d:t,markerEnd:a?"url(#".concat(i,"_pointer)"):a}),F(this.props))}}]),t}(l.Component),T=function(e){if(e.pointer)return u.a.createElement("defs",null,u.a.createElement("marker",{id:"".concat(e.id,"_pointer"),viewBox:"0 -5 10 10",refX:e.arrowOffset,refY:"-2",markerWidth:"6",markerHeight:"6",orient:"auto"},u.a.createElement("path",{d:"M0,-5L10,0L0,5",fill:"#666",style:{opacity:1}})))},F=function(e){if(e.type)return u.a.createElement("text",null,u.a.createElement("textPath",{dx:0,dy:5,href:"#".concat(e.id),startOffset:"50%",style:e.textStyle},e.type))};M.defaultProps={style:{strokeWidth:1.5,fill:"none",stroke:"gba(50, 50, 50, 0.2)"},textStyle:{pointerEvents:"none",textAnchor:"middle",fill:"#333"},pointer:!0,active:!0};var _=M,I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state=Object(E.a)({},a.props),a.getArcPath=a.getArcPath.bind(Object(c.a)(Object(c.a)(a))),a.getLinks=a.getLinks.bind(Object(c.a)(Object(c.a)(a))),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(E.a)({},e))}},{key:"getLinks",value:function(e,t){return this.state.links.filter(function(a){return a.source.id===e.id&&a.target.id===t.id}).map(function(e){return e.type})}},{key:"getArcPath",value:function(e){var t,a,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=n?e.source.x:e.target.x,r=n?e.source.y:e.target.y,o=n?e.target.x:e.source.x,s=n?e.target.y:e.source.y,c=o-i,l=s-r,u=this.getLinks(e.source,e.target),d=Object(R.a)().domain(u).range([1,2])(e.type);1===d?(a=1,t=1):d%2===0?(a=0,t=d/2):d%3===0&&(a=1,t=d/3+1);var p=Math.sqrt(c*c+l*l)/(1+.5*(t-1));return"M".concat(i,",").concat(r,"A").concat(1.7*p,",").concat(1.7*p," ").concat(0,", ").concat(0,", ").concat(a," ").concat(o,",").concat(s)}},{key:"render",value:function(){var e=this,t=this.state,a=t.nodes,n=t.links;return u.a.createElement("g",{className:this.props.className,transform:this.props.transform},u.a.createElement("g",{className:"links"},n.reduce(function(t,a,n){return"object"===typeof a.source&&"object"===typeof a.target?(t.push(u.a.createElement(_,{key:n,d:e.getArcPath(a),style:a.style,id:a.id,type:a.type,arrowOffset:1.45*a.target.radius,active:a.active})),t):t},[])),u.a.createElement("g",{className:"nodes"},a.map(function(t,a){return u.a.createElement(H,Object.assign({key:a,onClick:e.props.onClick,onDoubleClick:e.props.onDoubleClick,onMouseOver:e.props.onMouseOver,onMouseOut:e.props.onMouseOut},t))})))}}]),t}(l.Component);I.defaultProps={className:"universe",nodes:[],links:[]};var P=I,U=(a(240),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={nodes:[],links:[],selectedNode:null,activeNodes:[],simulation:a.initSimulation(),width:100,height:100,transform:{x:0,y:0,k:1},tooltip:{text:"",style:{opacity:0,top:0,left:0}}},a.initSimulation=a.initSimulation.bind(Object(c.a)(Object(c.a)(a))),a.initZoomHandler=a.initZoomHandler.bind(Object(c.a)(Object(c.a)(a))),a.updateSimulation=a.updateSimulation.bind(Object(c.a)(Object(c.a)(a))),a.onTick=a.onTick.bind(Object(c.a)(Object(c.a)(a))),a.svg=u.a.createRef(),a.nodes=[],a.links=[],a.interval=1e3/a.props.fps,a.millis=Date.now(),a.mouseOverHandler=a.mouseOverHandler.bind(Object(c.a)(Object(c.a)(a))),a.mouseOutHandler=a.mouseOutHandler.bind(Object(c.a)(Object(c.a)(a))),a.clickHandler=a.clickHandler.bind(Object(c.a)(Object(c.a)(a))),a.getNeighborNodes=a.getNeighborNodes.bind(Object(c.a)(Object(c.a)(a))),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.initZoomHandler(),this.setState(Object(E.a)({},this.props,{width:this.svg.current.clientWidth,height:this.svg.current.clientHeight}),function(){e.updateSimulation()})}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState(Object(E.a)({},e),function(){t.interval=1e3/t.state.fps,t.updateSimulation()})}},{key:"initSimulation",value:function(){var e=Object(C.c)().id(function(e){return e.id}).strength(function(e){return e.strength}).distance(function(e){return e.distance});return Object(C.e)().force("link",e)}},{key:"initZoomHandler",value:function(){var e=this,t=Object(j.f)(".svgGraph"),a=Object(x.a)().on("zoom",function(){e.setState({transform:j.b.transform})});t.call(a).on("dblclick.zoom",null)}},{key:"updateSimulation",value:function(){var e=this,t=this.state,a=t.nodes,n=t.links,i=t.simulation,r=t.width,o=t.height,s=t.attraceForceStrength,c=t.chargeStrength,l=t.collisionRadiusOffset,u=t.collisionStrength,d=t.animation,p=t.velocityDecay,h=t.alphaStart,m=t.cluster,f=t.clusterRadiusScale;if(this.nodes=a,this.links=[],n.forEach(function(t){var a=e.nodes.filter(function(e){return e.id===t.source})[0],n=e.nodes.filter(function(e){return e.id===t.target})[0];a&&n&&e.links.push(Object(E.a)({},t,{source:a,target:n}))}),i.nodes(this.nodes).on("tick",this.onTick),i.force("link").links(this.links),i.force("center",Object(C.a)(r/2,o/2)).force("attraceForce",Object(C.d)().strength(s)).force("charge",Object(C.d)().strength(c)).force("collision",Object(C.b)().radius(function(e){return e.radius+l}).strength(u)),m){var g={};N()(this.nodes,"type").map(function(e){return e.type}).forEach(function(e,t,a){if(!g[e]){var n=r>o?o*f:r*f;g[e]={x:Math.cos((t+1)/a.length*2*Math.PI)*n+r/2+Math.random(),y:Math.sin((t+1)/a.length*2*Math.PI)*n+o/2+Math.random(),radius:n}}}),i.force("cluster",function(t){return B(t,e.nodes,g)})}else i.force("cluster",null);if(i.alpha(h).alphaTarget(0).velocityDecay(p).restart(),!d)for(;i.alpha()>=.02;)i.tick()}},{key:"onTick",value:function(e){var t=Date.now();t-this.millis>this.interval&&(this.millis=t,this.setState({nodes:this.nodes,links:this.links}))}},{key:"mouseOutHandler",value:function(){this.setState({tooltip:{style:{opacity:0}}})}},{key:"mouseOverHandler",value:function(e){var t=e.event,a=e.type,n=e.data,i="";"NODE"===a?i="[".concat(n.type,"] ").concat(n.text):"LINK"===a&&(i="".concat(n.type)),this.setState({tooltip:{text:i,style:{opacity:1,top:t.clientY+15,left:t.clientX+15}}})}},{key:"clickHandler",value:function(e){this.state.selectedNode===e.data?this.setState({selectedNode:null,activeNodes:[]}):this.setState({selectedNode:e.data,activeNodes:this.getNeighborNodes(e.data)})}},{key:"getNeighborNodes",value:function(e){return this.links.reduce(function(t,a){return a.target.id===e?t.push(a.source.id):a.source.id===e&&t.push(a.target.id),t},[])}},{key:"render",value:function(){var e=this.state,t=e.transform,a=e.tooltip,n=e.selectedNode,i=e.activeNodes,r=this.state.nodes.map(function(e){return Object(E.a)({},e,{active:null===n||e.id===n||i.indexOf(e.id)>-1})}),o=this.state.links.map(function(e){return Object(E.a)({},e,{active:null===n||e.source.id===n||e.target.id===n})});return u.a.createElement("div",{className:"networkGraph",style:{width:"100%",height:"100%"}},u.a.createElement("svg",{className:"svgGraph",width:"100%",height:"100%",ref:this.svg},u.a.createElement(P,{nodes:r,links:o,transform:"translate(".concat(t.x,",").concat(t.y,") scale(").concat(t.k,")"),onClick:this.clickHandler,onDoubleClick:this.props.onDoubleClick,onMouseOver:this.mouseOverHandler,onMouseOut:this.mouseOutHandler})),u.a.createElement("span",{className:"networkGrapTooltip",style:a.style},a.text))}}]),t}(l.Component)),B=function(e,t,a){t.forEach(function(t){var n=a[t.type];if(n.x!==t.x&&n.y!==t.y){var i=.5*e;t.vx-=(t.x-n.x)*i,t.vy-=(t.y-n.y)*i}})};U.defaultProps={nodes:[],links:[],attraceForceStrength:10,chargeStrength:-10,collisionRadiusOffset:15,collisionStrength:.5,animation:!0,cluster:!1,fps:60,alphaStart:1,velocityDecay:.4,clusterRadiusScale:2};var V=U,W=a(242),L=a(166),K=a.n(L),G={backgroundColor:"#eee",cursor:"pointer",overflow:"hidden",position:"relative"},X={transition:"transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"},Y=function(e){var t=e.index,a=e.onClick,n=e.photo,i=e.margin,r=e.direction,o=e.top,s=e.left;return"column"===r&&(G.position="absolute",G.left=s,G.top=o),u.a.createElement("div",{style:Object(E.a)({margin:i,height:n.height,width:n.width},G),className:"lazy-image"},u.a.createElement(K.a,{overflow:!0},u.a.createElement("img",Object.assign({style:Object(E.a)({},X)},n,{onClick:function(e){return a(e,{index:t,photo:n})},alt:n.alt,title:n.alt}))))},z=function(e){return u.a.createElement(W.a,{photos:e.books.map(function(e,t){return{src:e.small_image_url.replace(/.(s\/)/g,function(e){var t=e.split("s/");return t[0]<58?t[0].concat("l/"):e}),width:98,height:148,alt:e.title,key:e.title}}),onClick:function(e,t){window.open(t.photo.link,"_blank")},direction:"column",margin:e.margin,columns:e.columns,ImageComponent:Y})},Z=a(311),J=a(32),$=a(308),q=a(151),Q=(a(248),Z.a.Group),ee=["animation","cluster"],te=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state=Object(E.a)({},e),a.defaultOptions=ee.filter(function(e){return a.props.settings[e]}),a.updateState=a.updateState.bind(Object(c.a)(Object(c.a)(a))),a.updateFps=a.updateFps.bind(Object(c.a)(Object(c.a)(a))),a.updateCluster=a.updateCluster.bind(Object(c.a)(Object(c.a)(a))),a.updateAnimation=a.updateAnimation.bind(Object(c.a)(Object(c.a)(a))),a.updateAlphaStart=a.updateAlphaStart.bind(Object(c.a)(Object(c.a)(a))),a.updateVelocityDecay=a.updateVelocityDecay.bind(Object(c.a)(Object(c.a)(a))),a.updateChargeStrength=a.updateChargeStrength.bind(Object(c.a)(Object(c.a)(a))),a.updateCollisionStrength=a.updateCollisionStrength.bind(Object(c.a)(Object(c.a)(a))),a.updateClusterRadiusScale=a.updateClusterRadiusScale.bind(Object(c.a)(Object(c.a)(a))),a.updateCollisionRadiusOffset=a.updateCollisionRadiusOffset.bind(Object(c.a)(Object(c.a)(a))),a.updateAttracForceStrength=a.updateAttracForceStrength.bind(Object(c.a)(Object(c.a)(a))),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"updateState",value:function(e){var t=this;this.setState({settings:Object(E.a)({},this.state.settings,e)},function(){return t.props.onChange(t.state.settings)})}},{key:"updateFps",value:function(e){this.updateState({fps:e})}},{key:"updateCluster",value:function(e){this.updateState({cluster:e})}},{key:"updateAnimation",value:function(e){this.updateState({animation:e})}},{key:"updateAlphaStart",value:function(e){this.updateState({alphaStart:e})}},{key:"updateVelocityDecay",value:function(e){this.updateState({velocityDecay:e})}},{key:"updateChargeStrength",value:function(e){this.updateState({chargeStrength:e})}},{key:"updateCollisionStrength",value:function(e){this.updateState({collisionStrength:e})}},{key:"updateClusterRadiusScale",value:function(e){this.updateState({clusterRadiusScale:e})}},{key:"updateCollisionRadiusOffset",value:function(e){this.updateState({collisionRadiusOffset:e})}},{key:"updateAttracForceStrength",value:function(e){this.updateState({attraceForceStrength:e})}},{key:"render",value:function(){var e=this,t=this.state.settings,a=t.fps,n=t.alphaStart,i=t.velocityDecay,r=t.attraceForceStrength,o=t.collisionStrength,s=t.collisionRadiusOffset,c=t.clusterRadiusScale,l=t.chargeStrength;return u.a.createElement("div",{className:"settings"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9",padding:5}},u.a.createElement(Q,{options:ee,value:this.defaultOptions,onChange:function(t){e.defaultOptions=t,e.updateState({animation:t.indexOf("animation")>-1,cluster:t.indexOf("cluster")>-1})},className:"settingsCheckbox"}))),u.a.createElement("li",null,u.a.createElement(J.a,{title:"How many times per second to render the graph.",placement:"rightTop"},"FPS (",a,")"),u.a.createElement($.a,{defaultValue:a,max:120,min:1,step:1,onAfterChange:this.updateFps})),u.a.createElement("li",null,u.a.createElement(J.a,{title:"Initial Alpha of simulation.",placement:"rightTop"},"Alpha Start (",n,")"),u.a.createElement($.a,{defaultValue:n,max:1,min:0,step:.01,onAfterChange:this.updateAlphaStart})),u.a.createElement("li",null,u.a.createElement(J.a,{title:"The decay factor is akin to atmospheric friction; after the application of any forces during a tick, each node\u2019s velocity is multiplied by 1 - decay. As with lowering the alpha decay rate, less velocity decay may converge on a better solution, but risks numerical instabilities and oscillation.",placement:"rightTop"},"velocity Decay (",i,")"),u.a.createElement($.a,{defaultValue:i,max:1,min:0,step:.01,onAfterChange:this.updateVelocityDecay})),u.a.createElement("li",null,u.a.createElement(J.a,{title:"It can be used to simulate gravity (attraction) if the strength is positive, or electrostatic charge (repulsion) if the strength is negative.",placement:"rightTop"},"Charge Strength (",l,")"),u.a.createElement($.a,{defaultValue:l,max:500,min:-500,step:1,onAfterChange:this.updateChargeStrength})),u.a.createElement("li",null,u.a.createElement(J.a,{title:"Sets the collision force strength to the specified number.",placement:"rightTop"},"Collision Strength (",o,")"),u.a.createElement($.a,{defaultValue:o,max:1,min:0,step:.01,onAfterChange:this.updateCollisionStrength})),u.a.createElement("li",null,u.a.createElement(J.a,{title:"The collision force treats nodes as circles with a given radius, rather than points, and prevents nodes from overlapping.",placement:"rightTop"},"Collision Radius Offset (",s,")"),u.a.createElement($.a,{defaultValue:s,max:50,min:0,step:1,onAfterChange:this.updateCollisionRadiusOffset})),u.a.createElement("li",null,u.a.createElement(J.a,{title:"Sets attractive force strength between nodes",placement:"rightTop"},"Attractive Force Strength (",r,")"),u.a.createElement($.a,{defaultValue:r,max:500,min:-500,step:1,onAfterChange:this.updateAttracForceStrength})),u.a.createElement("li",null,u.a.createElement(J.a,{title:"Radius of the circle around which to cluster the nodes.",placement:"rightTop"},"Cluster Radius Scale (",c,")"),u.a.createElement($.a,{defaultValue:c,max:10,min:.5,step:.5,onAfterChange:this.updateClusterRadiusScale})),u.a.createElement("div",{style:{padding:10}},u.a.createElement(q.a,{type:"danger",onClick:function(){return e.props.onReset()},block:!0},"Reset"))))}}]),t}(l.Component);te.defaultProps={settings:{fps:60,cluster:!0,alphaStart:1,animation:!0,velocityDecay:.1,chargeStrength:-100,clusterRadiusScale:2,collisionStrength:.5,collisionRadiusOffset:15,attraceForceStrength:-100}};var ae=te,ne=a(177),ie=function(e){return e.split(" ").slice(0,3).map(function(e){return e.charAt(0).toUpperCase()}).join("")};var re=a(271),oe=a.n(re),se=a(148),ce=a.n(se),le=(a(272),m.a.SubMenu),ue=f.a.Content,de=f.a.Sider,pe=g.a.TreeNode,he={getUserInfo:h.d,getUserData:h.b},me={fps:60,cluster:!0,alphaStart:1,animation:!0,velocityDecay:.1,chargeStrength:-100,collisionStrength:.5,collisionRadiusOffset:15,attraceForceStrength:-100,clusterRadiusScale:2},fe=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(r.a)(this,Object(o.a)(t).call(this,e));var i=window.localStorage.getItem("graphSettings");return a.state={selectedShelf:null,selectedShelves:[],selectedMenu:0,graphSettings:i?JSON.parse(i):me},console.log("Init Settings",a.state.graphSettings),a.onSelect=a.onSelect.bind(Object(c.a)(Object(c.a)(a))),a.onCheck=a.onCheck.bind(Object(c.a)(Object(c.a)(a))),a.onSettingsChange=a.onSettingsChange.bind(Object(c.a)(Object(c.a)(a))),a.onSettingsReset=a.onSettingsReset.bind(Object(c.a)(Object(c.a)(a))),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserData(this.props.match.params.userId)}},{key:"onSelect",value:function(e,t){console.log("selected",e,t)}},{key:"onCheck",value:function(e,t){console.log("onCheck",e,t),this.setState({selectedShelves:e})}},{key:"onSettingsChange",value:function(e){this.setState({graphSettings:e}),window.localStorage.setItem("graphSettings",JSON.stringify(e))}},{key:"onSettingsReset",value:function(){this.setState({graphSettings:me}),window.localStorage.removeItem("graphSettings"),window.location.reload()}},{key:"render",value:function(){var e=this.props.userData;return u.a.createElement(ne.default,null,u.a.createElement(f.a,{className:"dashboard"},u.a.createElement(f.a,null,u.a.createElement(de,{className:"sider",width:270},u.a.createElement("div",{className:"logo",style:{padding:"10px",background:"#fff"}},u.a.createElement(p.a,{to:"/"},u.a.createElement("img",{src:ce.a,width:"250px",alt:"Goodreads"}))),be(e),ye(this)),u.a.createElement(f.a,{style:{padding:"0 24px 24px"}},u.a.createElement(b.a,{style:{margin:"16px 0"}},u.a.createElement(b.a.Item,null,"Home"),u.a.createElement(b.a.Item,null,"User"),u.a.createElement(b.a.Item,null,"Books")),u.a.createElement(ue,{className:"mainContent",style:{backgroundImage:{bgImage:oe.a},padding:0,margin:0,height:"100%"}},ge(this))))))}}]),t}(l.Component),ge=function(e){var t=e.state,a=t.selectedMenu,n=t.selectedShelf,i=t.graphSettings,r=e.props.userData;if(e.props.userData){if(0===a){var o=function(e,t){var a=[],n={},i={},r={},o=[];return e.user_shelves.forEach(function(e){t.indexOf(e.name)>-1&&e.books.book&&(e.books.book.length?e.books.book:[e.books.book]).forEach(function(t){a.push(Object(E.a)({},t,{property:{shelf:e.name}}))})}),a.forEach(function(e){var t=e.authors.author;n[e.id.$t]||(n[e.id.$t]={id:e.id.$t,text:e.title,type:"BOOK",img:e.image_url,color:"#336B87",radius:35,style:{r:35,stroke:"#375E97",strokeWidth:"3px"}},i[t.id]||(i[t.id]={id:t.id,text:t.name,type:"AUTHOR",img:t.image_url.$t,color:"#FB6542",radius:35,style:{r:35,stroke:"#FB6542",strokeWidth:"3px"}}),r[e.publisher]||(r[e.publisher]={id:"string"===typeof e.publisher?e.publisher:"Self Published",text:"string"===typeof e.publisher?e.publisher:"Self Published",type:"PUBLISHER",color:"#DDA487",radius:35,style:{r:35,stroke:"#7D4427",strokeWidth:"3px"}}),o.push({source:t.id,sourceType:"AUTHOR",target:e.id.$t,targetType:"BOOK",type:"AUTHOR_OF",property:{publicationYear:e.publication_year,publicationMonth:e.publication_month,publicationDay:e.publication_day}}),o.push({source:e.id.$t,sourceType:"BOOK",target:"string"===typeof e.publisher?e.publisher:"Self Published",targetType:"PUBLISHER",type:"PUBLISHED_BY",property:{publicationYear:e.publication_year,publicationMonth:e.publication_month,publicationDay:e.publication_day}}),o.push({source:t.id,sourceType:"AUTHOR",target:e.publisher,targetType:"PUBLISHER",type:"WORKS_WITH",property:{publicationYear:e.publication_year,publicationMonth:e.publication_month,publicationDay:e.publication_day}}))}),{nodes:Object.values(n).concat(Object.values(i)).concat(Object.values(r)).map(function(e,t){return Object(E.a)({},e,{shortText:ie(e.text),textStyle:{fontSize:15,fill:"#fff",strokeWidth:"2px",fontWeight:"normal"}})}),links:o.map(function(e){return Object(E.a)({},e,{strength:.5,distance:350,id:"".concat(e.source,"-").concat(e.type,"-").concat(e.target),style:{strokeWidth:1.5,fill:"none",stroke:"rgba(50, 50, 50, 0.2)"}})})}}(e.props.userData,e.state.selectedShelves),s=o.nodes,c=o.links;return u.a.createElement(V,Object.assign({nodes:s,links:c},i))}if(1===a)return Oe(r,n)}},be=function(e){return e?u.a.createElement(S,{user:{name:e.name||"",userName:e.user_name||"",image:e.image_url||"",link:e.link,description:"string"===typeof e.about?e.about:"Last active: ".concat(e.last_active)}}):u.a.createElement(S,{user:{name:"",userName:"",image:"",description:""}})},ye=function(e){var t=e.props.userData;if(t)return console.log(t),u.a.createElement(m.a,{mode:"inline",defaultOpenKeys:["shelves"],style:{borderRight:0},theme:"light"},u.a.createElement(le,{key:"shelves",title:u.a.createElement("span",null,u.a.createElement(y.a,{type:"book"}),"Shelves")},u.a.createElement(g.a,{checkable:!0,onSelect:e.onSelect,onCheck:e.onCheck,className:"shelves"},t.user_shelves.map(function(e){if(e.books.book){var t=e.books.book.length?e.books.book:[e.books.book];return u.a.createElement(pe,{title:"".concat(e.name," (").concat(t.length,")"),key:e.name,className:"booksList"},t.map(function(e,t){return u.a.createElement(pe,{title:"".concat(e.title," (").concat(e.published,")"),key:"".concat(t,"_").concat(e.title),disableCheckbox:!0})}))}return u.a.createElement(pe,{title:"".concat(e.name," (0)"),key:e.name,disabled:!0})}))),u.a.createElement(le,{key:"settings",title:u.a.createElement("span",null,u.a.createElement(y.a,{type:"setting"}),"Settings")},u.a.createElement(ae,{onChange:e.onSettingsChange,onReset:e.onSettingsReset,settings:e.state.graphSettings})))},Oe=function(e,t){if(e){var a=e.user_shelves.find(function(e){return e.name===t});if(a){var n=a.books;return n.book?(n=n.book.length?n.book:[n.book],u.a.createElement("div",{style:{width:"100%",height:"100%",overflow:"auto"}},u.a.createElement(z,{books:n,margin:0,columns:7}))):u.a.createElement("div",null)}return u.a.createElement("div",{style:{padding:20}},u.a.createElement("p",null,"Bookshelf doesn't exist."))}return u.a.createElement("div",null)};t.default=Object(d.b)(function(e){return{userInfo:e.dashboard.userInfo,userData:e.dashboard.userData}},he)(fe)}}]);
//# sourceMappingURL=4.ed22b9de.chunk.js.map