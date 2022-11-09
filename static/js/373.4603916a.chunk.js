"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[373],{373:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,a,i,c,s,o,u,l=r(861),p=r(885),d=r(757),x=r.n(d),h=r(791),f=r(689),v=r(168),g=r(731),m=r(444),j=(0,m.ZP)(g.OL)(t||(t=(0,v.Z)(["\n  display: inline-block;\n  width: 80px;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  margin-bottom: 16px;\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 4px 6px;\n  transition: color 250ms linear, border-color 250ms linear;\n\n  &:hover {\n    color: coral;\n    border-color: coral;\n  }\n"]))),w=m.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n\n  padding: 20px 0;\n"]))),Z=m.ZP.li(i||(i=(0,v.Z)(["\n  display: flex;\n"]))),y=m.ZP.div(c||(c=(0,v.Z)(["\n  margin-left: 20px;\n"]))),k=m.ZP.p(s||(s=(0,v.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 0;\n  margin-right: 10px;\n  width: 100px;\n"]))),b=m.ZP.p(o||(o=(0,v.Z)(["\n  padding: 12px 0;\n  max-width: 500px;\n"]))),_=r(171),P=(0,m.ZP)(g.rU)(u||(u=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),S=r(128),U=r(184),C=function(n){var e=n.to,r=n.children;return(0,U.jsxs)(P,{to:e,children:[(0,U.jsx)(S.jTe,{size:"24"}),r]})},F=function(){var n,e,r=(0,h.useState)(null),t=(0,p.Z)(r,2),a=t[0],i=t[1],c=(0,h.useState)(null),s=(0,p.Z)(c,2),o=s[0],u=s[1],d=(0,f.UO)().movieId,v=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/home";(0,h.useEffect)((function(){var n=function(){var n=(0,l.Z)(x().mark((function n(e){var r;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,_.Mc)(e);case 3:r=n.sent,i(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();n(d)}),[d]);var g;return(0,U.jsxs)("main",{children:[o&&(0,U.jsx)("p",{children:"Try again"}),a?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(C,{to:v,children:"Back"}),(0,U.jsxs)(w,{children:[(0,U.jsx)("div",{children:(0,U.jsx)("img",{src:"".concat((g=a.poster_path,null===g?"https://via.placeholder.com/300sx450.jpg":"https://image.tmdb.org/t/p/w300".concat(g))),alt:"".concat(a.title||a.original_title||a.name)})}),(0,U.jsx)("div",{children:(0,U.jsxs)(y,{children:[(0,U.jsxs)("h2",{children:["".concat(a.title||a.original_title||a.name," "),"(".concat(parseInt(a.release_date),")")]}),(0,U.jsxs)("ul",{children:[(0,U.jsxs)(Z,{children:[(0,U.jsx)(k,{children:"Vote / Votes"}),(0,U.jsxs)(b,{children:[(0,U.jsx)("span",{children:"".concat(a.vote_average.toFixed(1))}),(0,U.jsx)("span",{children:" / "}),(0,U.jsx)("span",{children:"".concat(a.vote_count)})]})]}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(k,{children:"Popularity"}),(0,U.jsx)(b,{children:"".concat(a.popularity.toFixed(1))})]}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(k,{children:"Overview"}),(0,U.jsx)(b,{children:"".concat(a.overview)})]}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(k,{children:"Genres"}),(0,U.jsx)(b,{children:"".concat(a.genres.map((function(n){return n.name})).join(", "))})]})]})]})})]}),(0,U.jsxs)("ul",{children:[(0,U.jsx)("li",{children:(0,U.jsx)(j,{to:"cast",children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,U.jsx)(h.Suspense,{fallback:(0,U.jsx)("div",{children:"Loading..."}),children:(0,U.jsx)(f.j3,{})})]}):(0,U.jsx)("p",{children:"Wops, try again"})]})}},171:function(n,e,r){r.d(e,{Bt:function(){return v},E3:function(){return d},Mc:function(){return l},wr:function(){return o},y:function(){return h}});var t=r(861),a=r(757),i=r.n(a),c=r(44),s="0214e4f6556edfc65f2eadfc23b43510";function o(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(i().mark((function n(){var e,r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:s,language:"en-US"},n.next=3,c.ZP.get("/trending/all/day",{params:e});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:s,language:"en-US"},n.next=3,c.ZP.get("/movie/".concat(e),{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:s,language:"en-US",query:e},n.next=3,c.ZP.get("/search/movie/",{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:s,language:"en-US"},n.next=3,c.ZP.get("/movie/".concat(e,"/credits"),{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:s,language:"en-US"},n.next=3,c.ZP.get("/movie/".concat(e,"/reviews"),{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.ZP.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=373.4603916a.chunk.js.map