"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(861),c=t(439),i=t(757),a=t.n(i),o=t(689),s=t(184),u=t(411).default,f=t(791),h=f.useState,l=f.useEffect;n.default=function(){var e=h([]),n=(0,c.Z)(e,2),t=n[0],i=n[1],f=(0,o.UO)().movieId;return l((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a90ebb64c23761c126aa80b4b044784d",n="https://api.themoviedb.org/3/movie/".concat(f,"/reviews&api_key=").concat("a90ebb64c23761c126aa80b4b044784d"),e.prev=2,e.next=5,u.get(n);case 5:t=e.sent,i(t.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Error fetching reviews' information");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),0===t.length?(0,s.jsx)("div",{children:"No reviews available for this movie."}):(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Reviews"}),(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)}))})]})}},411:function(e,n,t){e.exports=t.p+"static/media/axios.e7d77f0967a69d31d7fc.cjs"},861:function(e,n,t){function r(e,n,t,r,c,i,a){try{var o=e[i](a),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var a=e.apply(n,t);function o(e){r(a,c,i,o,s,"next",e)}function s(e){r(a,c,i,o,s,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=186.c37543aa.chunk.js.map