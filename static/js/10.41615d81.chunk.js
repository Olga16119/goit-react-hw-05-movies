"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[10],{10:function(e,r,n){n.r(r);var t=n(861),s=n(439),i=n(757),a=n.n(i),c=n(243),o=n(791),l=n(689),d=n(87),h=n(184);r.default=function(){var e,r,n=(0,o.useState)(null),i=(0,s.Z)(n,2),u=i[0],v=i[1],p=(0,l.UO)().movieId,f=(0,l.TH)(),x=(0,o.useRef)(null!==(e=null===(r=f.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return console.log(p),(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(a().mark((function e(){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a90ebb64c23761c126aa80b4b044784d",r="https://api.themoviedb.org/3/movie/".concat(p,"&api_key=").concat("a90ebb64c23761c126aa80b4b044784d"),e.prev=2,e.next=5,c.Z.get(r);case 5:n=e.sent,v(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Error fetching movie details");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),u?(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:u.title})," ",(0,h.jsx)("img",{src:u.poster_path,alt:u.title}),(0,h.jsx)(d.rU,{to:x.current,children:"Go Back"}),(0,h.jsxs)("p",{children:["User score: ",Math.round(u.vote_average/10*100),"%"]}),(0,h.jsxs)("p",{children:["Overview ",u.overview]}),(0,h.jsxs)("p",{children:["Genres ",u.genres.map((function(e){return e.name})).join(",")]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{to:"cast",state:{from:x},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{to:"reviews",state:{from:x},children:"Reviews"})})]}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(l.j3,{})})]})]}):(0,h.jsx)("p",{children:"Loading..."})}}}]);
//# sourceMappingURL=10.41615d81.chunk.js.map