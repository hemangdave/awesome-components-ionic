function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,o){return n&&_defineProperties(e.prototype,n),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"+aO9":function(e,n,o){"use strict";o.r(n),o.d(n,"BottomSheetPageModule",(function(){return V}));var t=o("ofXK"),i=o("3Pt+"),c=o("TEn/"),a=o("tyNb"),b=o("Kxyh"),r=o("fXoL"),l=o("jhN1");function s(e,n){if(1&e){var o=r.Xb();r.Wb(0,"ion-list"),r.Wb(1,"ion-radio-group",7),r.Wb(2,"ion-item"),r.Wb(3,"ion-label"),r.Mc(4,"Top"),r.Vb(),r.Wb(5,"ion-radio",8),r.ec("click",(function(){r.Cc(o);var e=r.ic();return e.drawerState=e.states.Top})),r.Vb(),r.Vb(),r.Wb(6,"ion-item"),r.Wb(7,"ion-label"),r.Mc(8,"Docked"),r.Vb(),r.Wb(9,"ion-radio",8),r.ec("click",(function(){r.Cc(o);var e=r.ic();return e.drawerState=e.states.Docked})),r.Vb(),r.Vb(),r.Wb(10,"ion-item"),r.Wb(11,"ion-label"),r.Mc(12,"Bottom"),r.Vb(),r.Wb(13,"ion-radio",8),r.ec("click",(function(){r.Cc(o);var e=r.ic();return e.drawerState=e.states.Bottom})),r.Vb(),r.Vb(),r.Vb(),r.Vb()}if(2&e){var t=r.ic();r.Cb(1),r.oc("value",t.states.Docked),r.Cb(4),r.oc("value",t.states.Top),r.Cb(4),r.oc("value",t.states.Docked),r.Cb(4),r.oc("value",t.states.Bottom)}}function d(e,n){1&e&&(r.Wb(0,"p"),r.Mc(1,"This component only works on mobile."),r.Vb())}function u(e,n){if(1&e){var o=r.Xb();r.Wb(0,"fiv-bottom-sheet",9,10),r.ec("fivProgress",(function(e){return r.Cc(o),r.ic().onPan(e)}))("stateChange",(function(e){return r.Cc(o),r.ic().drawerState=e})),r.Wb(2,"fiv-bottom-sheet-content",11),r.Wb(3,"ion-card"),r.Wb(4,"ion-card-header"),r.Wb(5,"ion-card-subtitle"),r.Mc(6,"Card Subtitle"),r.Vb(),r.Wb(7,"ion-card-title"),r.Mc(8,"Card Title"),r.Vb(),r.Vb(),r.Wb(9,"ion-card-content"),r.Mc(10," Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. "),r.Vb(),r.Vb(),r.Vb(),r.Vb()}if(2&e){var t=r.ic();r.oc("state",t.drawerState)("dockedHeight",t.dockedHeight)("shouldBounce",t.shouldBounce)("distanceTop",t.distanceTop),r.Cb(2),r.oc("float",t.float)("rounded",t.rounded)("handle",t.handle)}}var h,f,g,p=function(){return["mobile"]},m=function(){return["desktop"]},C=[{path:"",component:(h=function(){function e(n){_classCallCheck(this,e),this.dom=n,this.shouldBounce=!0,this.dockedHeight=224,this.distanceTop=0,this.drawerState=b.a.Docked,this.states=b.a,this.handle=!0,this.float=!0,this.rounded=!0,this.animation=!1}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onPan",value:function(e){this.animation&&(e=+e.toFixed(2),this.transform=this.dom.bypassSecurityTrustStyle("translateY(-".concat(180*e,"px) scale(").concat(Math.min(1,1.2-e),")")),this.filter=this.dom.bypassSecurityTrustStyle("blur(".concat(4*e,"px)")))}}]),e}(),h.\u0275fac=function(e){return new(e||h)(r.Qb(l.b))},h.\u0275cmp=r.Kb({type:h,selectors:[["app-bottom-sheet"]],decls:42,vars:13,consts:[["slot","start"],["defaultHref","/fivethree"],[4,"fivIf"],[3,"ngModel","ngModelChange"],["type","number","value","150",3,"ngModel","ngModelChange"],["type","number","value","56",3,"ngModel","ngModelChange"],[3,"state","dockedHeight","shouldBounce","distanceTop","fivProgress","stateChange",4,"fivIf"],[3,"value"],[3,"value","click"],[3,"state","dockedHeight","shouldBounce","distanceTop","fivProgress","stateChange"],["fbs",""],[3,"float","rounded","handle"]],template:function(e,n){1&e&&(r.Wb(0,"ion-header"),r.Wb(1,"ion-toolbar"),r.Wb(2,"ion-buttons",0),r.Rb(3,"ion-back-button",1),r.Vb(),r.Wb(4,"ion-title"),r.Mc(5,"Bottom Sheet"),r.Vb(),r.Vb(),r.Vb(),r.Wb(6,"ion-content"),r.Kc(7,s,14,4,"ion-list",2),r.Wb(8,"ion-list"),r.Wb(9,"ion-item"),r.Wb(10,"ion-label"),r.Mc(11,"Bounce"),r.Vb(),r.Wb(12,"ion-checkbox",3),r.ec("ngModelChange",(function(e){return n.shouldBounce=e})),r.Vb(),r.Vb(),r.Wb(13,"ion-item"),r.Wb(14,"ion-label"),r.Mc(15,"Docked height"),r.Vb(),r.Wb(16,"ion-input",4),r.ec("ngModelChange",(function(e){return n.dockedHeight=e})),r.Vb(),r.Vb(),r.Wb(17,"ion-item"),r.Wb(18,"ion-label"),r.Mc(19,"Top Distance"),r.Vb(),r.Wb(20,"ion-input",5),r.ec("ngModelChange",(function(e){return n.distanceTop=e})),r.Vb(),r.Vb(),r.Wb(21,"ion-item-divider"),r.Wb(22,"ion-label"),r.Mc(23,"Bottom Sheet Content"),r.Vb(),r.Vb(),r.Wb(24,"ion-item"),r.Wb(25,"ion-label"),r.Mc(26,"Show example content pan animation"),r.Vb(),r.Wb(27,"ion-checkbox",3),r.ec("ngModelChange",(function(e){return n.animation=e})),r.Vb(),r.Vb(),r.Wb(28,"ion-item"),r.Wb(29,"ion-label"),r.Mc(30,"Rounded"),r.Vb(),r.Wb(31,"ion-checkbox",3),r.ec("ngModelChange",(function(e){return n.rounded=e})),r.Vb(),r.Vb(),r.Wb(32,"ion-item"),r.Wb(33,"ion-label"),r.Mc(34,"Handle"),r.Vb(),r.Wb(35,"ion-checkbox",3),r.ec("ngModelChange",(function(e){return n.handle=e})),r.Vb(),r.Vb(),r.Wb(36,"ion-item"),r.Wb(37,"ion-label"),r.Mc(38,"Float"),r.Vb(),r.Wb(39,"ion-checkbox",3),r.ec("ngModelChange",(function(e){return n.float=e})),r.Vb(),r.Vb(),r.Vb(),r.Kc(40,d,2,0,"p",2),r.Vb(),r.Kc(41,u,11,7,"fiv-bottom-sheet",6)),2&e&&(r.Cb(7),r.oc("fivIf",r.sc(10,p)),r.Cb(5),r.oc("ngModel",n.shouldBounce),r.Cb(4),r.oc("ngModel",n.dockedHeight),r.Cb(4),r.oc("ngModel",n.distanceTop),r.Cb(7),r.oc("ngModel",n.animation),r.Cb(4),r.oc("ngModel",n.rounded),r.Cb(4),r.oc("ngModel",n.handle),r.Cb(4),r.oc("ngModel",n.float),r.Cb(1),r.oc("fivIf",r.sc(11,m)),r.Cb(1),r.oc("fivIf",r.sc(12,p)))},directives:[c.z,c.mb,c.l,c.h,c.i,c.kb,c.u,b.E,c.K,c.D,c.J,c.r,c.c,i.k,i.n,c.C,c.tb,c.E,c.R,c.xb,c.Q,c.vb,b.f,b.g,c.m,c.o,c.p,c.q,c.n],styles:["fiv-bottom-sheet-content[_ngcontent-%COMP%]{background:#fff}"]}),h)}],W=((g=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ob({type:g}),g.\u0275inj=r.Nb({factory:function(e){return new(e||g)},imports:[[a.j.forChild(C)],a.j]}),g),V=((f=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ob({type:f}),f.\u0275inj=r.Nb({factory:function(e){return new(e||f)},imports:[[t.c,i.g,c.nb,W,b.h,b.D,b.C]]}),f)}}]);