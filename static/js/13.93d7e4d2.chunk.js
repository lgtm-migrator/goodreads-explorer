(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{208:function(e,t,a){"use strict";var n=a(42),o=a(43),l=a(46),i=a(44),r=a(47),s=a(21),c=a(1),d=a.n(c),h=a(2),u=a.n(h),m=a(249),g=(a(209),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={checkedList:e.defaultCheckedList,indeterminate:!0,checkAll:!1},a.onChange=a.onChange.bind(Object(s.a)(Object(s.a)(a))),a.onCheckAllChange=a.onCheckAllChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"onChange",value:function(e,t){var a=this,n=this.state.checkedList;t?n.push(e):n=n.filter(function(t){return t!==e}),this.setState({checkedList:n,indeterminate:!!n.length&&n.length<this.props.options.length,checkAll:n.length===this.props.options.length},function(){return a.props.onChange(a.state.checkedList)})}},{key:"onCheckAllChange",value:function(e){var t=this;this.setState({checkedList:e.target.checked?this.props.options:[],indeterminate:!1,checkAll:e.target.checked},function(){return t.props.onChange(t.state.checkedList)})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:this.props.className},d.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},d.a.createElement(m.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Check all")),d.a.createElement("ul",{className:"shelvesCheckboxGroup"},this.props.options.map(function(t,a){return d.a.createElement("li",{key:a},d.a.createElement(m.a,{onChange:function(a){return e.onChange(t,a.target.checked)},key:t,checked:e.props.defaultCheckedList.indexOf(t)>-1,disabled:e.props.disable[a]},e.props.optionLabel[a]?e.props.optionLabel[a]:t))})))}}]),t}(c.Component));g.defaultProps={disable:[],optionLabel:[]},g.propTpes={options:u.a.array.isRequired,onChange:u.a.func,optionLabel:u.a.array,defaultCheckedList:u.a.array,disable:u.a.array},t.a=g},209:function(e,t,a){},533:function(e,t,a){},540:function(e,t,a){},543:function(e,t,a){},544:function(e,t,a){},583:function(e,t,a){"use strict";a.r(t);var n=a(42),o=a(43),l=a(46),i=a(44),r=a(47),s=a(21),c=a(1),d=a.n(c),h=a(568),u=a(569),m=a(578),g=a(584),b=a(575),k=a(574),p=a(159),f=a(395),v=a.n(f),E=a(208),y=a(396),S={keys:["hot dog","burger","sandwich","kebab","fries","donut"],margin:{top:50,right:50,bottom:50,left:60},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}]},C=(a(533),function(e){return d.a.createElement("div",{className:"barGraph"},d.a.createElement(y.ResponsiveBar,{data:e.data,indexBy:"key",margin:S.margin,padding:.3,colors:"nivo",colorBy:"id",defs:S.defs,fill:S.fill,borderColor:"inherit:darker(1.6)",axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:e.xLabel,legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:e.yLabel,legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:"inherit:darker(1.6)",animate:!0,motionStiffness:90,motionDamping:15}))}),L=a(182),x=a(534),O=(a(540),1337),j=function(){var e=1e4*Math.sin(O++);return e-Math.floor(e)},P=function(e,t,a){return d.a.createElement(L.a,{key:e.value,title:"".concat(e.value," (").concat(e.count,")")},d.a.createElement("span",{key:e.value,style:{fontSize:"".concat(t,"em"),border:"2px solid ".concat(a),margin:"3px",padding:"3px",display:"inline-block"}},e.value))},B=function(e){var t=e.data.map(function(e){return{value:e.key,count:e.value}});return d.a.createElement(x.TagCloud,{tags:t,minSize:1,maxSize:5,renderer:P,randomNumberGenerator:j})},A=a(541),R=(a(543),function(e){return d.a.createElement("div",{className:"pieChart"},d.a.createElement(A.ResponsivePie,{data:e.data,margin:{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,colors:"nivo",colorBy:"id",borderWidth:1,borderColor:"inherit:darker(0.2)",radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:"inherit",slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",animate:!0,motionStiffness:90,motionDamping:15,defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}]}))}),N=a(11),w=function(e){return e.reduce(function(e,t){return e+t},0)};function D(e,t){var a=[];return e.user_shelves.forEach(function(e){t.indexOf(e.name)>-1&&(e.books.book&&(e.books.book.length?e.books.book:[e.books.book]).forEach(function(t){a.push(Object(N.a)({},t,{property:{shelf:e.name},author:t.authors.author.name}))}))}),a}function z(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={};e.forEach(function(e){var o=e[t];a&&(o=a(o)),n[o]?n[o].push(e):n[o]=[e]});var o=Object.keys(n);return Object.values(n).map(function(e,t){return{key:o[t],value:e.length}})}a(544);var H=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={shelvesSelectPopover:!1,books:[],shelves:[],selectedShelves:[]},a.hideShelvesSelect=a.hideShelvesSelect.bind(Object(s.a)(Object(s.a)(a))),a.handleShelvesChange=a.handleShelvesChange.bind(Object(s.a)(Object(s.a)(a))),a.handleShelvesSelectVisibleChange=a.handleShelvesSelectVisibleChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.userData.user_shelves.map(function(e){return e.books.book?{name:e.name,bookCount:e.books.book.length?e.books.book.length:1}:{name:e.name,bookCount:0}}),t=e.length>0?[e[0].name]:[],a=D(this.props.userData,t);this.setState({shelves:e,selectedShelves:t,books:a})}},{key:"hideShelvesSelect",value:function(){this.setState({shelvesSelectPopover:!1})}},{key:"handleShelvesSelectVisibleChange",value:function(e){this.setState({shelvesSelectPopover:e})}},{key:"handleShelvesChange",value:function(e){var t=D(this.props.userData,e);this.setState({books:t,selectedShelves:e})}},{key:"render",value:function(){var e=this.state,t=e.books,a=e.shelvesSelectPopover,n=e.shelves,o=e.selectedShelves,l=this.props.userData.user_shelves.map(function(e){return{id:e.name,label:e.name,value:parseInt(e.books.end),color:v()()}}),i=function(e){var t=e.map(function(e){return"string"===typeof e.num_pages?parseInt(e.num_pages):0}),a=e.map(function(e){return"string"===typeof e.average_rating?parseFloat(e.average_rating):0}),n=e.length,o=w(t),l=w(a);return{totalBooks:e.length,totalPages:o,averagePages:(o/n).toFixed(2),averageRating:(l/n).toFixed(2)}}(t),r=z(t,"published",function(e){return"string"===typeof e?e:"Unknown"}),s=z(t,"author"),c=z(t,"format",function(e){return"string"===typeof e?e:"Unknown"}),f=function(e){var t=z(e,"average_rating"),a={"0-1":0,"1-2":0,"2-3":0,"3-4":0,"4-5":0};t.forEach(function(e){switch(Math.floor(parseFloat(e.key))){case 0:a["0-1"]+=1;break;case 1:a["1-2"]+=1;break;case 2:a["2-3"]+=1;break;case 3:a["3-4"]+=1;break;case 4:a["4-5"]+=1}});var n=Object.keys(a);return Object.values(a).map(function(e,t){return{key:n[t],value:e}})}(t),y=function(e){var t=z(e,"num_pages"),a={"0-100":0,"100-200":0,"200-300":0,"300-400":0,"400-500":0,"500-600":0,"600-700":0,"700-800":0,"800-900":0,"900-1000":0,"1000-1100":0,"1100-1200":0,"1200+":0};t.forEach(function(e){switch(Math.floor(parseFloat(e.key)/100)){case 0:a["0-100"]+=1;break;case 1:a["100-200"]+=1;break;case 2:a["200-300"]+=1;break;case 3:a["300-400"]+=1;break;case 4:a["400-500"]+=1;break;case 5:a["500-600"]+=1;break;case 6:a["600-700"]+=1;break;case 7:a["700-800"]+=1;break;case 8:a["800-900"]+=1;break;case 9:a["900-1000"]+=1;break;case 10:a["1000-1100"]+=1;break;case 11:a["1100-1200"]+=1;break;case 12:a["1200+"]+=1}});var n=Object.keys(a);return Object.values(a).map(function(e,t){return{key:n[t],value:e}})}(t),S=c.map(function(e){return{id:e.key,label:e.key,value:e.value,color:v()()}});return console.log("Books: ",t),console.log("YearHist: ",r),console.log("authorHist: ",s),console.log("ratingHist",f),console.log("numPagesHist",y),console.log("Shelves",l),console.log("formatDistribution",c),console.log("stats",i),d.a.createElement("div",{className:"statistics"},d.a.createElement(h.a,{gutter:16},d.a.createElement(u.a,{xs:24,sm:12,md:6,lg:4,xl:4},d.a.createElement(m.a,null,d.a.createElement(g.a,{title:"Total Shelves",value:n.length}))),d.a.createElement(u.a,{xs:24,sm:12,md:6,lg:4,xl:4},d.a.createElement(m.a,null,d.a.createElement(g.a,{title:"Total Books",value:i.totalBooks}))),d.a.createElement(u.a,{xs:24,sm:12,md:6,lg:4,xl:4},d.a.createElement(m.a,null,d.a.createElement(g.a,{title:"Total Pages",value:i.totalPages}))),d.a.createElement(u.a,{xs:24,sm:12,md:6,lg:4,xl:4},d.a.createElement(m.a,null,d.a.createElement(g.a,{title:"Average Pages",value:i.averagePages}))),d.a.createElement(u.a,{xs:24,sm:12,md:6,lg:4,xl:4},d.a.createElement(m.a,null,d.a.createElement(g.a,{title:"Average Rating",value:i.averageRating})))),d.a.createElement(b.a,null),d.a.createElement(h.a,null,d.a.createElement(m.a,{title:"Authors"},d.a.createElement(B,{data:s}))),d.a.createElement(b.a,null),d.a.createElement(h.a,{gutter:16},d.a.createElement(u.a,{xs:24,sm:24,md:12,lg:12,xl:12},d.a.createElement(m.a,{title:"Shelves"},d.a.createElement(R,{data:l}))),d.a.createElement(u.a,{xs:24,sm:24,md:12,lg:12,xl:12},d.a.createElement(m.a,{title:"Book Formats"},d.a.createElement(R,{data:S})))),d.a.createElement(b.a,{dashed:!0}),d.a.createElement(h.a,null,d.a.createElement(m.a,{title:"Histogram of Books by Published Year"},d.a.createElement(C,{data:r,xLabel:"Published Year",yLabel:"Number of Books"}))),d.a.createElement(b.a,{dashed:!0}),d.a.createElement(h.a,null,d.a.createElement(m.a,{title:"Histogram of Books by Average Rating"},d.a.createElement(C,{data:f,xLabel:"Average Rating",yLabel:"Number of Books"}))),d.a.createElement(b.a,{dashed:!0}),d.a.createElement(h.a,null,d.a.createElement(m.a,{title:"Histogram of Books by Number of Pages"},d.a.createElement(C,{data:y,xLabel:"Number of Pages",yLabel:"Number of Books"}))),d.a.createElement(b.a,{dashed:!0}),d.a.createElement(k.a,{content:d.a.createElement(E.a,{onChange:this.handleShelvesChange,options:n.map(function(e){return e.name}),defaultCheckedList:o,optionLabel:n.map(function(e){return"".concat(e.name," (").concat(e.bookCount,")")}),disable:n.map(function(e){return 0===e.bookCount}),className:"graphPopover"}),title:"Shelves (".concat(n.length,")"),trigger:"click",visible:a,onVisibleChange:this.handleShelvesSelectVisibleChange,placement:"bottomLeft"},d.a.createElement(p.a,{icon:"check-square",style:{position:"fixed",top:20,right:60}},"Select Shelves")))}}]),t}(c.Component);t.default=H}}]);
//# sourceMappingURL=13.93d7e4d2.chunk.js.map