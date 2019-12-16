(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-color-changing-slide-color-changing-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.html": 
        /*!******************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.html ***!
          \******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Color Changing Slide</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n  <ion-slides #slider [pager]=\"true\" (ionSlideDidChange)=\"onSlideChanged()\">\r\n    <ion-slide [style.background-color]=\"color\">\r\n      <div class=\"container\">\r\n        <h1>\r\n          <span>Love </span>\r\n          <ul>\r\n            <li>him</li>\r\n            <li>her</li>\r\n            <li>you</li>\r\n            <li>me</li>\r\n            <li>them</li>\r\n            <li>everyone</li>\r\n          </ul>\r\n        </h1>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide *ngFor=\"let slide of slides\" [style.background-color]=\"color\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.module.ts": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.module.ts ***!
          \****************************************************************************************************/
        /*! exports provided: SlideColorChangingPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideColorChangingPageModule", function () { return SlideColorChangingPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _slide_color_changing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-color-changing.page */ "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.ts");
            var routes = [
                {
                    path: '',
                    component: _slide_color_changing_page__WEBPACK_IMPORTED_MODULE_6__["SlideColorChangingPage"]
                }
            ];
            var SlideColorChangingPageModule = /** @class */ (function () {
                function SlideColorChangingPageModule() {
                }
                return SlideColorChangingPageModule;
            }());
            SlideColorChangingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_slide_color_changing_page__WEBPACK_IMPORTED_MODULE_6__["SlideColorChangingPage"]]
                })
            ], SlideColorChangingPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.scss": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.scss ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bar-buttons,\n.toolbar-title {\n  color: #fff;\n}\n\n.scroll-content {\n  padding-top: 0 !important;\n}\n\nion-slide {\n  transition: all 1s linear;\n}\n\n.swiper-container {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  /* Center slide text vertically */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  width: 80%;\n  margin: 10% auto 0;\n}\n\nh1 {\n  width: 100%;\n  max-width: initial;\n  overflow: hidden;\n  display: flex;\n  position: relative;\n  font-size: 30px;\n  font-family: Helvetica;\n  font-family: Sans-serif;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-align: left;\n  padding-left: 10px;\n}\n\nh1,\nspan,\nh2 {\n  color: white;\n}\n\nul {\n  margin: 0 0 0 50px;\n  position: absolute;\n  -webkit-animation: scroll 6s infinite linear;\n          animation: scroll 6s infinite linear;\n}\n\nli {\n  display: block;\n  margin-bottom: 30px;\n}\n\n@-webkit-keyframes scroll {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes scroll {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWNvbG9yLWNoYW5naW5nL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxzbGlkZXNcXHNsaWRlLWNvbG9yLWNoYW5naW5nXFxzbGlkZS1jb2xvci1jaGFuZ2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1jb2xvci1jaGFuZ2luZy9zbGlkZS1jb2xvci1jaGFuZ2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FEREE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhBOzs7RUFHRSxZQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDUUY7O0FETkE7RUFDRTtJQUNFLHdCQUFBO0VDU0Y7RURQQTtJQUNFLDRCQUFBO0VDU0Y7QUFDRjs7QURmQTtFQUNFO0lBQ0Usd0JBQUE7RUNTRjtFRFBBO0lBQ0UsNEJBQUE7RUNTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWNvbG9yLWNoYW5naW5nL3NsaWRlLWNvbG9yLWNoYW5naW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXItYnV0dG9ucyxcclxuLnRvb2xiYXItdGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5pb24tc2xpZGUge1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLyogQ2VudGVyIHNsaWRlIHRleHQgdmVydGljYWxseSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vLy8vXHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMTAlIGF1dG8gMDtcclxufVxyXG5oMSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgZm9udC1mYW1pbHk6IFNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbmgxLFxyXG5zcGFuLFxyXG5oMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbnVsIHtcclxuICBtYXJnaW46IDAgMCAwIDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGFuaW1hdGlvbjogc2Nyb2xsIDZzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5saSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgfVxyXG59XHJcbiIsIi5iYXItYnV0dG9ucyxcbi50b29sYmFyLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZSB7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBDZW50ZXIgc2xpZGUgdGV4dCB2ZXJ0aWNhbGx5ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxMCUgYXV0byAwO1xufVxuXG5oMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LWZhbWlseTogU2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5oMSxcbnNwYW4sXG5oMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudWwge1xuICBtYXJnaW46IDAgMCAwIDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYW5pbWF0aW9uOiBzY3JvbGwgNnMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.ts ***!
          \**************************************************************************************************/
        /*! exports provided: SlideColorChangingPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideColorChangingPage", function () { return SlideColorChangingPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SlideColorChangingPage = /** @class */ (function () {
                function SlideColorChangingPage() {
                    this.slides = [
                        {
                            title: 'Dream\'s Adventure',
                            imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
                            songs: 2,
                            private: false
                        },
                        {
                            title: 'For the Weekend',
                            imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
                            songs: 4,
                            private: false
                        },
                        {
                            title: 'Family Time',
                            imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
                            songs: 5,
                            private: true
                        },
                        {
                            title: 'My Trip',
                            imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
                            songs: 12,
                            private: true
                        }
                    ];
                    this.colors = ['#e43737', '#e0e437', '#37e446', '#375be4', '#972cb1'];
                    this.color = this.colors[0];
                }
                SlideColorChangingPage.prototype.ngOnInit = function () {
                };
                SlideColorChangingPage.prototype.onSlideChanged = function () {
                    var _this = this;
                    this.slider.getActiveIndex().then(function (currentIndex) {
                        _this.color = _this.colors[currentIndex];
                        console.log('Slide changed! Current index is', currentIndex);
                    });
                };
                return SlideColorChangingPage;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('slider', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
            ], SlideColorChangingPage.prototype, "slider", void 0);
            SlideColorChangingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-slide-color-changing',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-color-changing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-color-changing.page.scss */ "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SlideColorChangingPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-color-changing-slide-color-changing-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slide-color-changing-slide-color-changing-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slide-color-changing-slide-color-changing-module-es5.js.map