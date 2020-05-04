function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{h6u4:function(e,i,t){"use strict";t.r(i),t.d(i,"ExpandableHeaderPageModule",(function(){return b}));var n,a,s,r=t("ofXK"),u=t("3Pt+"),l=t("tyNb"),o=t("TEn/"),c=t("fXoL"),m=((n=function(){function e(i,t,n){_classCallCheck(this,e),this.element=i,this.renderer=t,this.domCtrl=n,this.hidden=!1,this.triggerDistance=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.initStyles(),this.scrollArea.ionScroll.subscribe((function(i){var t=i.detail.deltaY;0===i.detail.currentY&&e.hidden?e.show():!e.hidden&&t>e.triggerDistance?e.hide():e.hidden&&t<-e.triggerDistance&&e.show()}))}},{key:"initStyles",value:function(){var e=this;this.domCtrl.write((function(){e.renderer.setStyle(e.element.nativeElement,"transition","0.5s linear")}))}},{key:"hide",value:function(){var e=this;this.domCtrl.write((function(){e.renderer.setStyle(e.element.nativeElement,"min-height","0px"),e.renderer.setStyle(e.element.nativeElement,"height","0px"),e.renderer.setStyle(e.element.nativeElement,"opacity","0"),e.renderer.setStyle(e.element.nativeElement,"padding","0")})),this.hidden=!0}},{key:"show",value:function(){var e=this;this.domCtrl.write((function(){e.renderer.setStyle(e.element.nativeElement,"height","150px"),e.renderer.removeStyle(e.element.nativeElement,"opacity"),e.renderer.removeStyle(e.element.nativeElement,"min-height"),e.renderer.removeStyle(e.element.nativeElement,"padding")})),this.hidden=!1}}]),e}()).\u0275fac=function(e){return new(e||n)(c.Qb(c.l),c.Qb(c.F),c.Qb(o.d))},n.\u0275dir=c.Lb({type:n,selectors:[["","appExpandableHeader",""]],inputs:{scrollArea:["appExpandableHeader","scrollArea"]}}),n),d=[{path:"",component:(a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Kb({type:a,selectors:[["app-expandable-header"]],decls:29,vars:3,consts:[["color","primary",3,"appExpandableHeader"],["name","search"],["type","text"],["name","funnel"],["slot","start"],["defaultHref","/"],[1,"ion-padding",3,"fullscreen","scrollEvents"],["scrollArea",""]],template:function(e,i){if(1&e&&(c.Wb(0,"ion-header"),c.Wb(1,"ion-toolbar",0),c.Wb(2,"ion-item"),c.Wb(3,"ion-label"),c.Rb(4,"ion-icon",1),c.Vb(),c.Rb(5,"ion-input",2),c.Vb(),c.Wb(6,"ion-item"),c.Wb(7,"ion-label"),c.Rb(8,"ion-icon",3),c.Vb(),c.Rb(9,"ion-input",2),c.Vb(),c.Vb(),c.Wb(10,"ion-toolbar"),c.Wb(11,"ion-buttons",4),c.Rb(12,"ion-back-button",5),c.Vb(),c.Wb(13,"ion-title"),c.Mc(14," Expandable header "),c.Vb(),c.Vb(),c.Vb(),c.Wb(15,"ion-content",6,7),c.Wb(17,"header"),c.Wb(18,"h1"),c.Mc(19,"Dummy Title"),c.Vb(),c.Vb(),c.Wb(20,"main"),c.Wb(21,"p"),c.Mc(22,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta dolor urna, quis iaculis eros tincidunt sed. Nunc tempor porttitor lacus, non ultrices sapien interdum non. Curabitur tempor efficitur tellus, id convallis felis varius eu. Pellentesque quis velit metus. Nam quis dictum quam. Integer ut mauris augue. Nulla at convallis mauris. Sed vel faucibus odio. Proin eu ante in massa scelerisque auctor. Nulla at sapien id lectus ultricies dapibus at eu augue. Morbi ac volutpat nulla. Morbi elit ex, accumsan vitae tincidunt eget, posuere id sem. Sed cursus sem ante, non fringilla augue mattis ac. "),c.Vb(),c.Wb(23,"p"),c.Mc(24,"Vestibulum finibus mi lacus, eget condimentum diam consequat eu. Donec fermentum accumsan libero, a fermentum ante faucibus vel. Etiam euismod mi nec efficitur tincidunt. Nulla facilisi. Vivamus nec malesuada turpis. Nulla ultricies non lacus vel scelerisque. Integer vulputate ex non rutrum scelerisque. Sed ac dapibus risus. Fusce blandit, mauris at semper venenatis, metus ipsum ultricies lacus, quis suscipit nunc nibh ut tellus. Cras varius quam vel libero scelerisque accumsan. Pellentesque at luctus tortor. In eleifend neque justo, porttitor auctor augue rhoncus ac. Mauris ut eros eu sapien aliquet lacinia. Donec fringilla velit diam, eu maximus felis lacinia vel."),c.Vb(),c.Wb(25,"p"),c.Mc(26,"Nullam eleifend ut eros sit amet aliquam. In mattis dolor non tortor vulputate, nec eleifend magna lobortis. Vivamus id ex ultrices, mollis enim a, fringilla risus. Quisque vel aliquet diam. Morbi vitae facilisis elit. Donec in pretium sapien. Phasellus rhoncus nisi ante, eget tempus nibh pretium non. Aliquam fringilla, odio sit amet varius commodo, lacus metus volutpat nisi, in faucibus est urna non orci. Suspendisse rhoncus lobortis tortor, sed placerat metus finibus sodales. Mauris at sapien placerat, efficitur leo at, auctor erat. In faucibus tellus sit amet leo vehicula, ac ultrices dui auctor. Duis maximus auctor metus a vulputate."),c.Vb(),c.Wb(27,"p"),c.Mc(28,"Nullam eleifend ut eros sit amet aliquam. In mattis dolor non tortor vulputate, nec eleifend magna lobortis. Vivamus id ex ultrices, mollis enim a, fringilla risus. Quisque vel aliquet diam. Morbi vitae facilisis elit. Donec in pretium sapien. Phasellus rhoncus nisi ante, eget tempus nibh pretium non. Aliquam fringilla, odio sit amet varius commodo, lacus metus volutpat nisi, in faucibus est urna non orci. Suspendisse rhoncus lobortis tortor, sed placerat metus finibus sodales. Mauris at sapien placerat, efficitur leo at, auctor erat. In faucibus tellus sit amet leo vehicula, ac ultrices dui auctor. Duis maximus auctor metus a vulputate."),c.Vb(),c.Vb(),c.Vb()),2&e){var t=c.zc(16);c.Cb(1),c.oc("appExpandableHeader",t),c.Cb(14),c.oc("fullscreen",!0)("scrollEvents",!0)}},directives:[o.z,o.mb,m,o.D,o.J,o.A,o.C,o.yb,o.l,o.h,o.i,o.kb,o.u],styles:["ion-item[_ngcontent-%COMP%]{width:92%;padding-left:10px!important;margin:4% 4% 10px;--background:#fff;opacity:.7;font-size:.9em;transition:.2s linear}"]}),a)}],b=((s=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:s}),s.\u0275inj=c.Nb({factory:function(e){return new(e||s)},imports:[[r.c,u.g,o.nb,l.j.forChild(d)]]}),s)}}]);