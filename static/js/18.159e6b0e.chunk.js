(this["webpackJsonpgoodreads-explorer"]=this["webpackJsonpgoodreads-explorer"]||[]).push([[18],{576:function(e,t,a){},598:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a(45),i=a(48),l=a(47),o=a(1),d=a.n(o),s=a(608),u=a(607),c=a(599),p=(a(576),s.a.Header),g=s.a.Content,m=[{title:"Index",dataIndex:"idx",sorter:function(e,t){return e.idx-t.idx},defaultSortOrder:"ascending",width:"20px"},{title:"Title",dataIndex:"title",render:function(e){return d.a.createElement("div",null,d.a.createElement("img",{src:e.img,alt:e.text,style:{paddingRight:10}}),d.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.text))}},{title:"Published",dataIndex:"published",sorter:function(e,t){return e.published-t.published},defaultSortOrder:"ascending",width:"100px"},{title:"Rating",dataIndex:"averageRating",render:function(e){return d.a.createElement(u.a,{value:e})},sorter:function(e,t){return e.averageRating-t.averageRating},defaultSortOrder:"ascending",width:"140px"}],h=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.title;return console.log(t),d.a.createElement(s.a,null,d.a.createElement(p,{className:"libraryHeader",style:{position:"fixed",zIndex:1,width:"100%"}},d.a.createElement("h4",null,"Books in: ",a)),d.a.createElement(g,{style:{marginTop:64}},d.a.createElement("div",{className:"bookLibrary"},d.a.createElement(c.a,{columns:m,dataSource:t.map((function(e,t){return{key:t,idx:t+1,published:parseInt(e.published),title:{text:e.title,link:e.link,img:e.small_image_url},averageRating:parseFloat(e.average_rating)}})),pagination:{position:"both"},bordered:!0}))))}}]),a}(o.Component);t.default=h}}]);
//# sourceMappingURL=18.159e6b0e.chunk.js.map