function _get(t,e,i){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var r=_superPropBase(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var i,r=_getPrototypeOf(t);if(e){var n=_getPrototypeOf(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return _possibleConstructorReturn(this,i)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{gL5z:function(t,e,i){"use strict";i.r(e),i.d(e,"MatGridPageModule",(function(){return P}));var r,n=i("ofXK"),o=i("3Pt+"),a=i("tyNb"),s=i("TEn/"),l=i("fXoL"),c=i("FKr1"),u=i("8LU1"),h=i("cH1L"),g=["*"],f=new l.r("MAT_GRID_LIST"),d=((r=function(){function t(e,i){_classCallCheck(this,t),this._element=e,this._gridList=i,this._rowspan=1,this._colspan=1}return _createClass(t,[{key:"_setStyle",value:function(t,e){this._element.nativeElement.style[t]=e}},{key:"rowspan",get:function(){return this._rowspan},set:function(t){this._rowspan=Math.round(Object(u.f)(t))}},{key:"colspan",get:function(){return this._colspan},set:function(t){this._colspan=Math.round(Object(u.f)(t))}}]),t}()).\u0275fac=function(t){return new(t||r)(l.Qb(l.l),l.Qb(f,8))},r.\u0275cmp=l.Kb({type:r,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,e){2&t&&l.Db("rowspan",e.rowspan)("colspan",e.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:g,decls:2,vars:0,consts:[[1,"mat-figure"]],template:function(t,e){1&t&&(l.nc(),l.Wb(0,"figure",0),l.mc(1),l.Vb())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],encapsulation:2,changeDetection:0}),r),p=function(){function t(){_classCallCheck(this,t),this.columnIndex=0,this.rowIndex=0}return _createClass(t,[{key:"update",value:function(t,e){var i=this;this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map((function(t){return i._trackTile(t)}))}},{key:"_trackTile",value:function(t){var e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new _(this.rowIndex,e)}},{key:"_findMatchingGap",value:function(t){if(t>this.tracker.length)throw Error("mat-grid-list: tile with colspan ".concat(t," is wider than ")+'grid with cols="'.concat(this.tracker.length,'".'));var e=-1,i=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)):-1!=(e=this.tracker.indexOf(0,this.columnIndex))?(i=this._findGapEndIndex(e),this.columnIndex=e+1):(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e))}while(i-e<t||0==i);return Math.max(e,0)}},{key:"_nextRow",value:function(){this.columnIndex=0,this.rowIndex++;for(var t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}},{key:"_findGapEndIndex",value:function(t){for(var e=t+1;e<this.tracker.length;e++)if(0!=this.tracker[e])return e;return this.tracker.length}},{key:"_markTilePosition",value:function(t,e){for(var i=0;i<e.colspan;i++)this.tracker[t+i]=e.rowspan}},{key:"rowCount",get:function(){return this.rowIndex+1}},{key:"rowspan",get:function(){var t=Math.max.apply(Math,_toConsumableArray(this.tracker));return t>1?this.rowCount+t-1:this.rowCount}}]),t}(),_=function t(e,i){_classCallCheck(this,t),this.row=e,this.col=i},y=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,m=function(){function t(){_classCallCheck(this,t),this._rows=0,this._rowspan=0}return _createClass(t,[{key:"init",value:function(t,e,i,r){this._gutterSize=x(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=r}},{key:"getBaseTileSize",value:function(t,e){return"(".concat(t,"% - (").concat(this._gutterSize," * ").concat(e,"))")}},{key:"getTilePosition",value:function(t,e){return 0===e?"0":k("(".concat(t," + ").concat(this._gutterSize,") * ").concat(e))}},{key:"getTileSize",value:function(t,e){return"(".concat(t," * ").concat(e,") + (").concat(e-1," * ").concat(this._gutterSize,")")}},{key:"setStyle",value:function(t,e,i){var r=100/this._cols,n=(this._cols-1)/this._cols;this.setColStyles(t,i,r,n),this.setRowStyles(t,e,r,n)}},{key:"setColStyles",value:function(t,e,i,r){var n=this.getBaseTileSize(i,r);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(n,e)),t._setStyle("width",k(this.getTileSize(n,t.colspan)))}},{key:"getGutterSpan",value:function(){return"".concat(this._gutterSize," * (").concat(this._rowspan," - 1)")}},{key:"getTileSpan",value:function(t){return"".concat(this._rowspan," * ").concat(this.getTileSize(t,1))}},{key:"getComputedHeight",value:function(){return null}}]),t}(),w=function(t){_inherits(i,t);var e=_createSuper(i);function i(t){var r;return _classCallCheck(this,i),(r=e.call(this)).fixedRowHeight=t,r}return _createClass(i,[{key:"init",value:function(t,e,r,n){if(_get(_getPrototypeOf(i.prototype),"init",this).call(this,t,e,r,n),this.fixedRowHeight=x(this.fixedRowHeight),!y.test(this.fixedRowHeight))throw Error('Invalid value "'.concat(this.fixedRowHeight,'" set as rowHeight.'))}},{key:"setRowStyles",value:function(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",k(this.getTileSize(this.fixedRowHeight,t.rowspan)))}},{key:"getComputedHeight",value:function(){return["height",k("".concat(this.getTileSpan(this.fixedRowHeight)," + ").concat(this.getGutterSpan()))]}},{key:"reset",value:function(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach((function(t){t._setStyle("top",null),t._setStyle("height",null)}))}}]),i}(m),b=function(t){_inherits(i,t);var e=_createSuper(i);function i(t){var r;return _classCallCheck(this,i),(r=e.call(this))._parseRatio(t),r}return _createClass(i,[{key:"setRowStyles",value:function(t,e,i,r){this.baseTileHeight=this.getBaseTileSize(i/this.rowHeightRatio,r),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",k(this.getTileSize(this.baseTileHeight,t.rowspan)))}},{key:"getComputedHeight",value:function(){return["paddingBottom",k("".concat(this.getTileSpan(this.baseTileHeight)," + ").concat(this.getGutterSpan()))]}},{key:"reset",value:function(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach((function(t){t._setStyle("marginTop",null),t._setStyle("paddingTop",null)}))}},{key:"_parseRatio",value:function(t){var e=t.split(":");if(2!==e.length)throw Error('mat-grid-list: invalid ratio given for row-height: "'.concat(t,'"'));this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}}]),i}(m),v=function(t){_inherits(i,t);var e=_createSuper(i);function i(){return _classCallCheck(this,i),e.apply(this,arguments)}return _createClass(i,[{key:"setRowStyles",value:function(t,e){var i=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(i,e)),t._setStyle("height",k(this.getTileSize(i,t.rowspan)))}},{key:"reset",value:function(t){t._tiles&&t._tiles.forEach((function(t){t._setStyle("top",null),t._setStyle("height",null)}))}}]),i}(m);function k(t){return"calc(".concat(t,")")}function x(t){return t.match(/([A-Za-z%]+)$/)?t:"".concat(t,"px")}var S,C,T=((C=function(){function t(e,i){_classCallCheck(this,t),this._element=e,this._dir=i,this._gutter="1px"}return _createClass(t,[{key:"ngOnInit",value:function(){this._checkCols(),this._checkRowHeight()}},{key:"ngAfterContentChecked",value:function(){this._layoutTiles()}},{key:"_checkCols",value:function(){if(!this.cols)throw Error('mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">')}},{key:"_checkRowHeight",value:function(){this._rowHeight||this._setTileStyler("1:1")}},{key:"_setTileStyler",value:function(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new v:t&&t.indexOf(":")>-1?new b(t):new w(t)}},{key:"_layoutTiles",value:function(){var t=this;this._tileCoordinator||(this._tileCoordinator=new p);var e=this._tileCoordinator,i=this._tiles.filter((function(e){return!e._gridList||e._gridList===t})),r=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,e,this.cols,r),i.forEach((function(i,r){var n=e.positions[r];t._tileStyler.setStyle(i,n.row,n.col)})),this._setListStyle(this._tileStyler.getComputedHeight())}},{key:"_setListStyle",value:function(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}},{key:"cols",get:function(){return this._cols},set:function(t){this._cols=Math.max(1,Math.round(Object(u.f)(t)))}},{key:"gutterSize",get:function(){return this._gutter},set:function(t){this._gutter="".concat(null==t?"":t)}},{key:"rowHeight",get:function(){return this._rowHeight},set:function(t){var e="".concat(null==t?"":t);e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}}]),t}()).\u0275fac=function(t){return new(t||C)(l.Qb(l.l),l.Qb(h.b,8))},C.\u0275cmp=l.Kb({type:C,selectors:[["mat-grid-list"]],contentQueries:function(t,e,i){var r;1&t&&l.Ib(i,d,!0),2&t&&l.yc(r=l.fc())&&(e._tiles=r)},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,e){2&t&&l.Db("cols",e.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[l.Bb([{provide:f,useExisting:C}])],ngContentSelectors:g,decls:2,vars:0,template:function(t,e){1&t&&(l.nc(),l.Wb(0,"div"),l.mc(1),l.Vb())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],encapsulation:2,changeDetection:0}),C),O=((S=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ob({type:S}),S.\u0275inj=l.Nb({factory:function(t){return new(t||S)},imports:[[c.j,c.h],c.j,c.h]}),S);function R(t,e){if(1&t&&(l.Wb(0,"mat-grid-tile",4),l.Mc(1),l.Vb()),2&t){var i=e.$implicit;l.Jc("background",i.color,l.Jb),l.oc("colspan",i.cols)("rowspan",i.rows),l.Cb(1),l.Oc(" ",i.text," ")}}var H,I,z=[{path:"",component:(H=function(){function t(){_classCallCheck(this,t),this.tiles=[{text:"One",cols:3,rows:1,color:"lightblue"},{text:"Two",cols:1,rows:2,color:"lightgreen"},{text:"Three",cols:1,rows:1,color:"lightpink"},{text:"Four",cols:2,rows:1,color:"#DDBDF1"}]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),H.\u0275fac=function(t){return new(t||H)},H.\u0275cmp=l.Kb({type:H,selectors:[["app-mat-grid"]],decls:9,vars:1,consts:[["slot","start"],[1,"ion-padding"],["cols","4","rowHeight","100px"],[3,"colspan","rowspan","background",4,"ngFor","ngForOf"],[3,"colspan","rowspan"]],template:function(t,e){1&t&&(l.Wb(0,"ion-header"),l.Wb(1,"ion-toolbar"),l.Wb(2,"ion-buttons",0),l.Rb(3,"ion-back-button"),l.Vb(),l.Wb(4,"ion-title"),l.Mc(5,"Grid"),l.Vb(),l.Vb(),l.Vb(),l.Wb(6,"ion-content",1),l.Wb(7,"mat-grid-list",2),l.Kc(8,R,2,5,"mat-grid-tile",3),l.Vb(),l.Vb()),2&t&&(l.Cb(8),l.oc("ngForOf",e.tiles))},directives:[s.z,s.mb,s.l,s.h,s.i,s.kb,s.u,T,n.n,d],styles:[""]}),H)}],P=((I=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ob({type:I}),I.\u0275inj=l.Nb({factory:function(t){return new(t||I)},imports:[[n.c,o.g,s.nb,a.j.forChild(z),O]]}),I)}}]);