"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,r){r.r(t);var n=r(433),a=r(861),c=r(439),i=r(757),s=r.n(i),o=r(689),u=r(243),h=r(184),l=r(791),v=l.useState,d=l.useEffect;t.default=function(){var e=v([]),t=(0,c.Z)(e,2),r=t[0],i=t[1],l=(0,o.UO)().movieId;return d((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a90ebb64c23761c126aa80b4b044784d",t="https://api.themoviedb.org/3/movie/".concat(l,"/reviews?api_key=").concat("a90ebb64c23761c126aa80b4b044784d"),e.prev=2,e.next=5,u.Z.get(t);case 5:r=e.sent,a=r.data,i((0,n.Z)(a.results)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Error fetching reviews information",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),0===r.length?(0,h.jsx)("div",{children:"No reviews available for this movie."}):(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Reviews"}),(0,h.jsx)("ul",{children:r.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=186.b512506a.chunk.js.map