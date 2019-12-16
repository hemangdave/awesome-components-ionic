(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-real-estate-listing-real-estate-listing-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.html": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.html ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title> {{estateProperty.name}} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" elestic-header>\r\n  <section class=\"housing-image\" [ngStyle]=\"{ 'background-image': 'url(' + estateProperty.image + ')'}\">\r\n    <section class=\"ion-padding housing-banner\">\r\n      <span class=\"housing-title\">{{estateProperty.name}}</span>\r\n      <span class=\"price\">${{estateProperty.price}}</span>\r\n    </section>\r\n  </section>\r\n  <section class=\"main-content\">\r\n    <ion-grid class=\"main-features\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\" *ngFor=\"let feature of estateProperty.features\">\r\n          <ion-icon [name]=\"feature.icon\"></ion-icon>\r\n          <span class=\"item-block\">{{feature.title}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"listing-details\">\r\n      <ion-row>\r\n        <p  class=\"ion-margin-horizontal\" style=\"text-align: justify\">\r\n          {{estateProperty.description}}\r\n        </p>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-icon name=\"home\"></ion-icon>{{estateProperty.style}}\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"pin\"></ion-icon>{{estateProperty.size}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let a of [1,1,1,1,1,1,1,1,1,1]\">\r\n        <ion-col>\r\n          info here\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </section>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button size=\"large\" expand=\"full\" class=\"ion-no-margin\" color=\"danger\">\r\n    get in touch now\r\n  </ion-button>\r\n</ion-footer>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.module.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.module.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: RealEstateListingPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModule", function () { return RealEstateListingPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./real-estate-listing.page */ "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts");
            var routes = [
                {
                    path: '',
                    component: _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_6__["RealEstateListingPage"]
                }
            ];
            var RealEstateListingPageModule = /** @class */ (function () {
                function RealEstateListingPageModule() {
                }
                return RealEstateListingPageModule;
            }());
            RealEstateListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_real_estate_listing_page__WEBPACK_IMPORTED_MODULE_6__["RealEstateListingPage"]]
                })
            ], RealEstateListingPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.scss": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.scss ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Header */\n.toolbar-background {\n  border-color: transparent;\n  background: rgba(0, 0, 0, 0.3);\n}\n.bar-button,\n.toolbar-title {\n  color: white;\n}\n/* Image */\n.housing-image {\n  background-size: cover;\n  height: 50vh;\n  position: relative;\n}\n.housing-banner {\n  color: white;\n  background: rgba(0, 0, 0, 0.3);\n  height: 13vh;\n  width: 100vw;\n  position: absolute;\n  bottom: -1px;\n}\n.housing-banner .housing-title {\n  display: block;\n  font-size: 1.2rem;\n}\n.housing-banner .price {\n  font-size: 3rem;\n}\n/* Content */\n.content {\n  background: whitesmoke;\n}\n.scroll-content {\n  padding-top: 0 !important;\n}\n.main-content {\n  color: #666;\n}\n.listing-details ion-col {\n  padding: 1rem;\n  margin: 0.45rem;\n  background: rgba(236, 236, 236, 0.8);\n}\n.listing-details ion-col ion-icon {\n  margin-right: 0.5rem;\n}\n.main-features {\n  color: #3cc59a;\n}\n.main-features ion-icon {\n  font-size: 5.5rem !important;\n}\n.item-block {\n  text-align: center;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9yZWFsLWVzdGF0ZS1saXN0aW5nL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxtaXNjZWxsYW5lb3VzXFxyZWFsLWVzdGF0ZS1saXN0aW5nXFxyZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9yZWFsLWVzdGF0ZS1saXN0aW5nL3JlYWwtZXN0YXRlLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLFdBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsOEJBVGM7QUNJaEI7QURRQTs7RUFFRSxZQVprQjtBQ09wQjtBRFFBLFVBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUNFLFlBdkJrQjtFQXdCbEIsOEJBMUJjO0VBMkJkLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTEY7QURPRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0xKO0FEUUU7RUFDRSxlQUFBO0FDTko7QURTQSxZQUFBO0FBQ0E7RUFDRSxzQkF4Q2M7QUNrQ2hCO0FEU0E7RUFDRSx5QkFBQTtBQ05GO0FEU0E7RUFDRSxXQWxEVztBQzRDYjtBRFFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FwRGtCO0FDK0NwQjtBRE1FO0VBQ0Usb0JBQUE7QUNKSjtBRFFBO0VBQ0UsY0FBQTtBQ0xGO0FET0U7RUFDRSw0QkFBQTtBQ0xKO0FEU0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvcmVhbC1lc3RhdGUtbGlzdGluZy9yZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjay1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiR0ZXh0LWNvbG9yOiAjNjY2O1xyXG4kYmFubmVyLXRleHQtY29sb3I6IHdoaXRlO1xyXG4kY29udGVudC1jb2xvcjogd2hpdGVzbW9rZTtcclxuJGRldGFpbC1iYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuOCk7XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2stb3ZlcmxheTtcclxufVxyXG5cclxuLmJhci1idXR0b24sXHJcbi50b29sYmFyLXRpdGxlIHtcclxuICBjb2xvcjogJGJhbm5lci10ZXh0LWNvbG9yO1xyXG59XHJcblxyXG4vKiBJbWFnZSAqL1xyXG4uaG91c2luZy1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaG91c2luZy1iYW5uZXIge1xyXG4gIGNvbG9yOiAkYmFubmVyLXRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrLW92ZXJsYXk7XHJcbiAgaGVpZ2h0OiAxM3ZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMXB4O1xyXG5cclxuICAuaG91c2luZy10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbn1cclxuLyogQ29udGVudCAqL1xyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogJGNvbnRlbnQtY29sb3I7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG59XHJcbi5saXN0aW5nLWRldGFpbHMgaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW46IDAuNDVyZW07XHJcbiAgYmFja2dyb3VuZDogJGRldGFpbC1iYWNrZ3JvdW5kO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tZmVhdHVyZXMge1xyXG4gIGNvbG9yOiAjM2NjNTlhO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tYmxvY2sge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iLCIvKiBIZWFkZXIgKi9cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5iYXItYnV0dG9uLFxuLnRvb2xiYXItdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEltYWdlICovXG4uaG91c2luZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNTB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaG91c2luZy1iYW5uZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgaGVpZ2h0OiAxM3ZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMXB4O1xufVxuLmhvdXNpbmctYmFubmVyIC5ob3VzaW5nLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmhvdXNpbmctYmFubmVyIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLyogQ29udGVudCAqL1xuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5saXN0aW5nLWRldGFpbHMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMC40NXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjgpO1xufVxuLmxpc3RpbmctZGV0YWlscyBpb24tY29sIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5tYWluLWZlYXR1cmVzIHtcbiAgY29sb3I6ICMzY2M1OWE7XG59XG4ubWFpbi1mZWF0dXJlcyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: RealEstateListingPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPage", function () { return RealEstateListingPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RealEstateListingPage = /** @class */ (function () {
                function RealEstateListingPage() {
                    this.estateProperty = {
                        name: 'Pretty house',
                        description: "It\u2019s a 2 bedroom, 2 bathroom laneway house that also has a spacious study off the upstairs landing.\n                  Sporting modern finishes and some cute touches like wall niches and bamboo accents,\n                  this laneway house is a great example of what can be built on most of Vancouver\u2019s standard 33 x 122\n                  foot lots.",
                        price: '850000',
                        image: 'https://static.lakana.com/mmm-global-us-east-1/photo/2018/11/16/2019-exterior-home-trends_1542398306940_19450740_ver1.0_1280_720.jpg',
                        style: 'Modern Interior',
                        size: '33\' Lot',
                        features: [
                            {
                                icon: 'paw',
                                title: 'Pet Friendly'
                            },
                            {
                                icon: 'bicycle',
                                title: 'Bike Stations'
                            },
                            {
                                icon: 'rose',
                                title: 'Beautiful Garden'
                            }
                        ]
                    };
                }
                RealEstateListingPage.prototype.ngOnInit = function () {
                };
                return RealEstateListingPage;
            }());
            RealEstateListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-real-estate-listing',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./real-estate-listing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./real-estate-listing.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], RealEstateListingPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-real-estate-listing-real-estate-listing-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-real-estate-listing-real-estate-listing-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-real-estate-listing-real-estate-listing-module-es5.js.map