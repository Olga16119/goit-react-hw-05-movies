"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=s(861),r=s(439),i=s(757),n=s.n(i),c=s(243),o=s(791),l=s(689),d=s(87),h="MovieDetails_backLink__+2RHd",u="MovieDetails_details__NEBVF",v="MovieDetails_description__iYc3X",m="MovieDetails_informLink__PbHMV",p=s(184),f=function(){var e,t,s=(0,o.useState)(null),i=(0,r.Z)(s,2),f=i[0],x=i[1],j=(0,l.UO)().movieId,_=(0,l.TH)(),b=(0,o.useRef)(null!==(e=null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(n().mark((function e(){var t,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a90ebb64c23761c126aa80b4b044784d",t="https://api.themoviedb.org/3/movie/".concat(j,"?api_key=").concat("a90ebb64c23761c126aa80b4b044784d"),e.prev=2,e.next=5,c.Z.get(t);case 5:s=e.sent,x(s.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Error fetching movie details",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[j]),f?(0,p.jsxs)("div",{className:u,children:[" ",(0,p.jsx)(d.rU,{to:b.current,className:h,children:"Go Back"}),(0,p.jsx)("h2",{children:f.title}),(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(f.poster_path),alt:f.title,width:"250"}),(0,p.jsxs)("p",{className:v,children:[" ","User score: ",Math.round(f.vote_average/10*100),"%"]}),(0,p.jsxs)("p",{className:v,children:[" Overview: ",f.overview]}),(0,p.jsxs)("p",{className:v,children:[" ","Genres: ",f.genres.map((function(e){return e.name})).join(", ")]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(d.rU,{to:"cast",className:m,state:{from:b},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(d.rU,{to:"reviews",className:m,state:{from:b},children:"Reviews"})})]}),(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(l.j3,{})})]})]}):(0,p.jsx)("p",{children:"Loading..."})}}}]);
//# sourceMappingURL=76.cc901459.chunk.js.map