"use strict";(self.webpackChunkreact_ts_the_best_choose_movies=self.webpackChunkreact_ts_the_best_choose_movies||[]).push([[399],{159:function(e,n,r){r.d(n,{Q:function(){return t}});var t={idle:"idle",loading:"loading",success:"success",error:"error"}},399:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t,s,a,c=r(165),i=r(861),o=r(439),u=r(791),d=r(47),l=r(689),f=r(87),p=r(168),h=r(444),v=h.ZP.li(t||(t=(0,p.Z)(["\n  padding: 4px;\n"]))),x=r(184),g=function(e){var n=e.movies,r=(0,l.TH)();return console.log(r),(0,x.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.title;return(0,x.jsx)(v,{children:(0,x.jsx)(f.rU,{to:"movies/".concat(n),state:{from:r},children:t})},n)}))})},m=r(159),Z=h.ZP.div(s||(s=(0,p.Z)(["\n  padding: 24px 48px;\n"]))),_=h.ZP.h2(a||(a=(0,p.Z)(["\n  margin-bottom: 16px;\n"]))),j=function(){var e=(0,u.useState)([]),n=(0,o.Z)(e,2),r=n[0],t=n[1],s=(0,u.useState)(m.Q.idle),a=(0,o.Z)(s,2),l=a[0],f=a[1];(0,u.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(m.Q.loading),e.prev=1,e.next=4,(0,d.t)({URL:"trending/movie/day"});case 4:n=e.sent,p(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),f(m.Q.error);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=function(e){var n=e.results.map((function(e){return{id:e.id,title:e.original_title}}));t(n),f(m.Q.success)};return(0,x.jsxs)(Z,{children:[l===m.Q.error&&(0,x.jsx)(_,{children:"NOT FOUND"}),l===m.Q.loading&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:"Trending today"}),(0,x.jsx)("p",{children:"Loading..."})]}),l===m.Q.success&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:"Trending today"}),(0,x.jsx)(g,{movies:r})]})]})}},47:function(e,n,r){r.d(n,{t:function(){return c}});var t=r(165),s=r(861),a=r(243).Z.create({baseURL:"https://api.themoviedb.org/3/"}),c=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){var r,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get(n.URL,{params:{api_key:"51cea464d1158e7d34cacf903de39a42",query:n.searchName}});case 2:return r=e.sent,s=r.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=399.25250b4b.chunk.js.map