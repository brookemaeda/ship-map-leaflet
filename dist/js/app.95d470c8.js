(function(){"use strict";var t={3868:function(t,e,n){var o=n(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav-bar"),e("my-map"),e("date-picker")],1)},a=[],r=function(){var t=this,e=t._self._c;return e("v-map",{staticClass:"a",attrs:{zoom:10,center:t.initialLocation}},[e("v-icondefault"),e("v-tilelayer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),e("v-marker-cluster",{attrs:{options:t.clusterOptions},on:{clusterclick:function(e){return t.click()},ready:t.ready}},t._l(t.locations,(function(n){return e("v-marker",{key:n.id,attrs:{"lat-lng":n.latlng,icon:t.icon}},[e("v-popup",{attrs:{content:n.text}})],1)})),1)],1)},l=[],s=n(3512),c=n(9926),u=n(50),p=n(7530),f=n(8344),d=n(3153),h=n(464),m=n.n(h),v=n(7093),g=n(8858),k=n(6431);function b(t){let e=t+.1,n=t-.1;return Math.random()*(e-n)+n}var y={name:"MyMap",components:{"v-map":s.Z,"v-tilelayer":c.Z,"v-icondefault":u.Z,"v-marker":p.Z,"v-popup":f.Z,"v-marker-cluster":m()},methods:{click:t=>console.log("clusterclick",t),ready:t=>console.log("ready",t)},data(){let t=[];for(let n=0;n<100;n++)t.push({id:n,latlng:(0,d.latLng)(b(-34.9205),b(-57.953646)),text:"Hola "+n});let e=(0,d.icon)(Object.assign({},d.Icon.Default.prototype.options,{iconUrl:v,iconRetinaUrl:k,shadowUrl:g}));return{locations:t,icon:e,clusterOptions:{},initialLocation:(0,d.latLng)(-34.9205,-57.953646)}},mounted(){setTimeout((()=>{console.log("done"),this.$nextTick((()=>{this.clusterOptions={disableClusteringAtZoom:11}}))}),5e3)}},x=y,w=n(1001),O=(0,w.Z)(x,r,l,!1,null,"99f237aa",null),C=O.exports,L=function(){var t=this,e=t._self._c;return e("nav-bar",{attrs:{options:t.navbarOptions}})},M=[],_=n(3084),T=n.p+"img/lockup-color.10bcd4ee.png",D={name:"NavBar",components:{"nav-bar":_.Z},data(){return{navbarOptions:{elementId:"main-navbar",isUsingVueRouter:!0,mobileBreakpoint:992,brandImagePath:"./",brandImage:T,brandImageAltText:"brand-image",collapseButtonOpenColor:"#661c23",collapseButtonCloseColor:"#661c23",showBrandImageInMobilePopup:!0,ariaLabelMainNav:"Main Navigation",tooltipAnimationType:"shift-away",tooltipPlacement:"bottom",menuOptionsLeft:[{type:"link",text:"Why Dunder Mifflin XXX",arrowColor:"#659CC8",subMenuOptions:[{isLinkAction:!0,type:"link",text:"About",subText:"Stupid corporate wet blankets. Like booze ever killed anyone.",path:{name:"about"}},{type:"hr"},{type:"link",text:"Locations",subText:"You're a presentation tool!",path:{name:"locations"}},{type:"hr"},{type:"link",text:"Blog",subText:"I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.",path:{name:"blog"}}]},{type:"link",text:"Contact",subMenuOptions:[{type:"link",text:"Customer Service",path:{name:"customer-service"},iconLeft:'<i class="fa fa-user fa-fw"></i>'},{type:"link",text:"Accounting",path:{name:"accounting"},iconLeft:'<i class="fa fa-star fa-fw"></i>'},{type:"hr"},{type:"link",text:"Reception",path:{name:"reception"},iconLeft:'<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>'}]},{type:"link",text:"Latest Data",subMenuOptions:[{type:"hr"}]},{type:"link",text:"Last Months Data",subMenuOptions:[{type:"hr"}]},{type:"link",text:"Historical Data",subMenuOptions:[{type:"link",text:"Date Picker",path:{name:"customer-service"},iconLeft:'<i class="fa fa-user fa-fw"></i>'}]}],menuOptionsRight:[{type:"button",text:"Signup",path:{name:"signup"},class:"button-red"},{type:"button",text:"Login",path:{name:"login"},iconRight:'<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'}]}}}},Z=D,j=(0,w.Z)(Z,L,M,!1,null,null,null),S=j.exports,I=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"block"},[e("span",{staticClass:"demonstration"},[t._v("With quick options")]),e("el-date-picker",{attrs:{type:"monthrange","text-align":"right","unlink-panels":"","range-separator":"To","start-placeholder":"Start month","end-placeholder":"End month","picker-options":t.pickerOptions},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)])},B=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block"},[e("span",{staticClass:"demonstration"},[t._v("Default")])])}],P={data(){return{pickerOptions:{shortcuts:[{text:"This month",onClick(t){t.$emit("pick",[new Date,new Date])}},{text:"This year",onClick(t){const e=new Date,n=new Date((new Date).getFullYear(),0);t.$emit("pick",[n,e])}},{text:"Last 6 months",onClick(t){const e=new Date,n=new Date;n.setMonth(n.getMonth()-6),t.$emit("pick",[n,e])}}]},value1:"",value2:""}}},A=P,R=(0,w.Z)(A,I,B,!1,null,null,null),$=R.exports,U={name:"App",components:{"my-map":C,"nav-bar":S,"date-picker":$}},z=U,N=(0,w.Z)(z,i,a,!1,null,null,null),X=N.exports,E=n(8499),F=n.n(E),H=n(4193);o["default"].config.productionTip=!1,o["default"].use(F(),{locale:H.Z}),new o["default"]({render:t=>t(X)}).$mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,a){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(l=!1,a<r&&(r=a));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,r=o[0],l=o[1],s=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var u=s(n)}for(e&&e(o);c<r.length;c++)a=r[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkleaflet_demo"]=self["webpackChunkleaflet_demo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3868)}));o=n.O(o)})();
//# sourceMappingURL=app.95d470c8.js.map