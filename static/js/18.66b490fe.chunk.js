(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{555:function(e,t,a){},576:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(43),i=a(46),l=a(44),d=a(47),o=a(1),u=a.n(o),s=a(586),c=a(585),p=a(577),g=(a(555),s.a.Header),m=s.a.Content,b=[{title:"Index",dataIndex:"idx",sorter:function(e,t){return e.idx-t.idx},defaultSortOrder:"ascending",width:"20px"},{title:"Title",dataIndex:"title",render:function(e){return u.a.createElement("div",null,u.a.createElement("img",{src:e.img,alt:e.text,style:{paddingRight:10}}),u.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.text))}},{title:"Published",dataIndex:"published",sorter:function(e,t){return e.published-t.published},defaultSortOrder:"ascending",width:"100px"},{title:"Rating",dataIndex:"averageRating",render:function(e){return u.a.createElement(c.a,{value:e})},sorter:function(e,t){return e.averageRating-t.averageRating},defaultSortOrder:"ascending",width:"140px"}],h=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.title;return console.log(t),u.a.createElement(s.a,null,u.a.createElement(g,{className:"libraryHeader",style:{position:"fixed",zIndex:1,width:"100%"}},u.a.createElement("h4",null,"Books in: ",a)),u.a.createElement(m,{style:{marginTop:64}},u.a.createElement("div",{className:"bookLibrary"},u.a.createElement(p.a,{columns:b,dataSource:t.map(function(e,t){return{key:t,idx:t+1,published:parseInt(e.published),title:{text:e.title,link:e.link,img:e.small_image_url},averageRating:parseFloat(e.average_rating)}}),pagination:{position:"both"},bordered:!0}))))}}]),t}(o.Component);t.default=h}}]);
//# sourceMappingURL=18.66b490fe.chunk.js.map