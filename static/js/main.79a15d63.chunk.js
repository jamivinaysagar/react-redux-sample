(this["webpackJsonpreact-redux-sample"]=this["webpackJsonpreact-redux-sample"]||[]).push([[0],{104:function(e,t,n){e.exports=n(128)},121:function(e,t,n){},125:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),o=n(20),c=n.n(o),l=n(36),u=n(151),s=n(152),m=n(153),d=n(161),h=n(158),p=n(159),f=n(160),E=n(155),g=n(156),v=n(157),b=n(78),y=n(25),w=n(43),O=n(37),S=n(98),T=Object(S.a)({palette:{type:"light",primary:{light:"#e1ecff",main:"#1d8ef1"},secondary:{main:"#42a6f5"}},typography:{button:{textTransform:"none"},fontFamily:["Varela Round","Roboto","sans-serif"].join(",")}}),j=Object(S.a)({palette:{type:"dark",primary:{light:"#18ffff",main:"#212121"},secondary:{main:"#26c6da"}},typography:{button:{textTransform:"none"},fontFamily:["Varela Round","Roboto","sans-serif"].join(",")}});!function(e){e.LOAD_THEME="[Theme] Load theme",e.LOAD_THEME_SUCCESS="[Theme] Loaded theme successfuly",e.SET_THEME="[Theme] Set theme"}(a||(a={}));var x={theme:T},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.LOAD_THEME_SUCCESS:case a.SET_THEME:return Object(O.a)({},e,{theme:t.payload});default:return e}},_=n(29),I=n.n(_),M=n(33),C=n(75),H=n(76),L=function(){function e(){Object(C.a)(this,e)}return Object(H.a)(e,null,[{key:"getTheme",value:function(){return Promise.resolve(T)}}]),e}(),A=function(e){return{type:a.LOAD_THEME_SUCCESS,payload:e}},W=I.a.mark(F),q=I.a.mark(J),D=I.a.mark(N);function F(){var e;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.b)(L.getTheme);case 2:return e=t.sent,t.next=5,Object(M.d)(A(e));case 5:case"end":return t.stop()}}),W)}function J(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(a.LOAD_THEME,F);case 2:case"end":return e.stop()}}),q)}function N(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([Object(M.c)(J)]);case 2:case"end":return e.stop()}}),D)}var B={id:"core",reducerMap:{core:k},sagas:[N],initialActions:[],finalActions:[]},R=n(81),P=n.n(R),G=(n(121),i.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,301))}))),U=i.a.lazy((function(){return n.e(4).then(n.bind(null,305))})),V={loadTheme:function(){return{type:a.LOAD_THEME}},setTheme:function(e){return{type:a.SET_THEME,payload:e}}},z=Object(l.connect)((function(e){var t=e.core;return{theme:null===t||void 0===t?void 0:t.theme}}),V)((function(e){var t=e.theme,n=e.loadTheme,a=e.setTheme,o=Object(u.a)((null===t||void 0===t?void 0:t.breakpoints.down("sm"))||"");return Object(r.useEffect)((function(){n()}),[n]),i.a.createElement(w.DynamicModuleLoader,{modules:[B]},t&&i.a.createElement(s.a,{theme:t},i.a.createElement(m.a,null),i.a.createElement(E.a,{position:"relative"},i.a.createElement(g.a,null,i.a.createElement(d.a,{flexGrow:1,clone:!0},i.a.createElement(v.a,{variant:"h6",noWrap:!0},"react-redux")),t===T&&i.a.createElement(h.a,{color:"inherit",onClick:function(){return a(j)}},i.a.createElement(p.a,null,"brightness_4")),t===j&&i.a.createElement(h.a,{color:"inherit",onClick:function(){return a(T)}},i.a.createElement(p.a,null,"brightness_7")),i.a.createElement(h.a,{color:"inherit",href:"https://github.com/jfcere/react-redux-sample"},i.a.createElement("img",{src:P.a,alt:"GitHub"})))),i.a.createElement(f.a,{className:"app-container",maxWidth:"lg",disableGutters:o},i.a.createElement(b.a,null,i.a.createElement(r.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(y.c,null,i.a.createElement(y.a,{path:"/heroes",component:G}),i.a.createElement(y.a,{path:"/",component:U})))))))})),Y=n(88);n(125);var $=n(38),K=n(17),Q=n(49),X=[{id:1,name:"Captain America",powerId:5,quote:"You can't justify murder by masking it with a cause."},{id:2,name:"Cat Woman",powerId:14,quote:"Like the view? It's the only thing you'll be catching tonight."},{id:3,name:"Flash",powerId:12,quote:"Life doesn't give us purpose. We give life purpose."},{id:4,name:"Spiderman",powerId:9,quote:"With great power comes great responsability."},{id:5,name:"Robin",powerId:4,quote:"Holy funny bone."}],Z=[{id:1,name:"Intangibility"},{id:2,name:"Force Field"},{id:3,name:"Mind Control"},{id:4,name:"Superhuman Intelligence"},{id:5,name:"Superhuman Agility"},{id:6,name:"Time Manipulation"},{id:7,name:"Teleportation"},{id:8,name:"Precognition"},{id:9,name:"Wall Crawling"},{id:10,name:"Atmokinesis"},{id:11,name:"Omnilinguilism"},{id:12,name:"Superhuman Speed"},{id:13,name:"Telepathy"},{id:14,name:"Night Vision"},{id:15,name:"Time Travel"},{id:16,name:"Invulnerability"},{id:17,name:"Water Breathing"},{id:18,name:"Superhuman Endurance"},{id:19,name:"Healing"},{id:20,name:"Superhuman Strength"},{id:21,name:"Invincibility"},{id:22,name:"Flying"}];function ee(e,t){localStorage.setItem(e,JSON.stringify(t.all(e).models))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){var e;Object(K.d)("en",(function(e){e.irregular("hero","heroes"),e.irregular("power","powers")})),Object(Q.b)({models:(e={},Object($.a)(e,"hero",Q.a.extend({})),Object($.a)(e,"power",Q.a.extend({})),e),seeds:function(e){(function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}("hero")||X).forEach((function(t){return e.create("hero",t)})),Z.forEach((function(t){return e.create("power",t)}))},routes:function(){this.get("/api/heroes",(function(e){return e.all("hero").models})),this.delete("/api/heroes/:id",(function(e,t){var n=t.params.id,a=e.find("hero",n);return null===a||void 0===a||a.destroy(),ee("hero",e),(null===a||void 0===a?void 0:a.attrs)||{}})),this.post("/api/heroes",(function(e,t){var n,a=JSON.parse(t.requestBody),r=e.create("hero",Object(O.a)({},a,{id:null})).id;return ee("hero",e),(null===(n=e.find("hero",r))||void 0===n?void 0:n.attrs)||{}})),this.put("/api/heroes/:id",(function(e,t){var n=t.params.id,a=JSON.parse(t.requestBody),r=e.find("hero",n);return null===r||void 0===r||r.update(a),ee("hero",e),(null===r||void 0===r?void 0:r.attrs)||{}})),this.get("/api/powers",(function(e){return e.all("power").models}))}})}();var te=Object(w.createStore)({extensions:[Object(Y.getSagaExtension)()]});c.a.render(i.a.createElement(l.Provider,{store:te},i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,t,n){e.exports=n.p+"static/media/github.69494fdd.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.79a15d63.chunk.js.map