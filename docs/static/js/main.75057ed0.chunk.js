(this.webpackJsonpgifexpert=this.webpackJsonpgifexpert||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),u=n(9),s=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.length>2&&(e((function(t){return[a].concat(Object(u.a)(t))})),o(""))},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),f=n.n(d),b=n(8),p=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,r,c,a,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&api_key=U3Gn1I79r3WHiqMhGm6sQ9NLk3AFnbIo"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(t){t.id;var e=t.title,n=t.url;return Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("img",{src:n,alt:e})})},O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e}),a&&"Cargando.....",c.map((function(t){return Object(s.jsx)(l,Object(j.a)({},t),t.id)}))]})},h=function(){var t=Object(r.useState)(["One punch"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"GifExpertApp"}),Object(s.jsx)(o,{setCategories:c}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(O,{category:t},t)}))})]})};n(17);a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.75057ed0.chunk.js.map