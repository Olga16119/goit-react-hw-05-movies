"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[328],{328:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),c=r(439),a=r(757),o=r.n(a),u=r(791),s=r(689),i="Cast_cast__m5y0R",p=r(545),f=r(184),l=function(){var t=(0,u.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],l=(0,s.UO)().movieId;return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.y)(l);case 3:e=t.sent,a(e.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error fetching actors' informations",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[l]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Cast"}),(0,f.jsx)("ul",{className:i,children:r.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg",alt:t.name,width:"200"}),(0,f.jsx)("p",{children:t.name}),(0,f.jsx)("p",{children:t.character})]},t.id)}))})]})}},545:function(t,e,r){r.d(e,{Bt:function(){return v},DG:function(){return p},Tg:function(){return i},Y5:function(){return f},y:function(){return l}});var n=r(861),c=r(757),a=r.n(c),o=r(243),u="a90ebb64c23761c126aa80b4b044784d",s="https://api.themoviedb.org/3/",i=function(){var t=(0,n.Z)(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"trending/movie/day?api_key=").concat(u));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log("Error fetching movies",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"search/movie?api_key=").concat(u,"&query=").concat(e));case 3:return r=t.sent,(n=r.data).ok||console.log("Request was not ok"),t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(0),console.log("Error fetching",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log("Error fetching movie details",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log("Error fetching actors' informations",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log("Error fetching reviews information",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=328.5f8e0b29.chunk.js.map