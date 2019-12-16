var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-buttons-buttons-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/buttons/buttons.page.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/buttons/buttons.page.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Buttons</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar>\r\n    <fiv-buttons [iconsOnly]=\"iconsOnly\" [forceActionsheet]=\"forceActionsheet\" [forcePopover]=\"forcePopover\"\r\n      [header]=\"header\" [subHeader]=\"subHeader\" [count]=\"count\" slot=\"end\">\r\n      <fiv-button [color]=\"'primary'\" (click)=\"presentToast('add clicked')\" [text]=\"'Add'\">\r\n      </fiv-button>\r\n      <fiv-button (click)=\"presentToast('delete clicked')\" [icon]=\"'md-trash'\" [text]=\"'Delete'\">\r\n      </fiv-button>\r\n      <fiv-button (click)=\"presentToast('select image clicked')\" [icon]=\"'md-image'\" [text]=\"'Select Image'\">\r\n      </fiv-button>\r\n      <fiv-button (click)=\"presentToast('take photo clicked')\" [icon]=\"'md-camera'\" [text]=\"'Take Photo'\">\r\n      </fiv-button>\r\n    </fiv-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Number of visible icons outside of popover / actionsheet</ion-label>\r\n    <ion-input min=\"0\" max=\"4\" type=\"number\" placeholder=\"0 - 4\" [(ngModel)]=\"count\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Header Text (Actionsheet only)</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"header\" [(ngModel)]=\"header\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Subheader Text (Actionsheet only)</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"subHeader\" [(ngModel)]=\"subHeader\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Force Actionsheet</ion-label>\r\n    <ion-checkbox [checked]=\"forceActionsheet\" [(ngModel)]=\"forceActionsheet\" slot=\"end\"></ion-checkbox>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Force Popover</ion-label>\r\n    <ion-checkbox [checked]=\"forcePopover\" [(ngModel)]=\"forcePopover\" slot=\"end\"></ion-checkbox>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Show icons only (Toolbar only)</ion-label>\r\n    <ion-checkbox [checked]=\"iconsOnly\" [(ngModel)]=\"iconsOnly\" slot=\"end\"></ion-checkbox>\r\n  </ion-item>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/buttons/buttons.module.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/buttons/buttons.module.ts ***!
          \**********************************************************************/
        /*! exports provided: ButtonsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPageModule", function () { return ButtonsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _buttons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons.page */ "./src/app/pages/fivethree/components/buttons/buttons.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _buttons_page__WEBPACK_IMPORTED_MODULE_6__["ButtonsPage"]
                }
            ];
            var ButtonsPageModule = /** @class */ (function () {
                function ButtonsPageModule() {
                }
                return ButtonsPageModule;
            }());
            ButtonsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivButtonsModule"]
                    ],
                    declarations: [_buttons_page__WEBPACK_IMPORTED_MODULE_6__["ButtonsPage"]]
                })
            ], ButtonsPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/buttons/buttons.page.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/buttons/buttons.page.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/buttons/buttons.page.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/buttons/buttons.page.ts ***!
          \********************************************************************/
        /*! exports provided: ButtonsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPage", function () { return ButtonsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var ButtonsPage = /** @class */ (function () {
                function ButtonsPage(toastController) {
                    this.toastController = toastController;
                    this.subHeader = 'subheader here';
                    this.header = 'More Actions';
                    this.count = 1;
                    this.forceActionsheet = false;
                    this.forcePopover = false;
                    this.iconsOnly = true;
                }
                ButtonsPage.prototype.ngOnInit = function () { };
                ButtonsPage.prototype.presentToast = function (text) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var toast;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastController.create({
                                        message: text,
                                        duration: 2000
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return ButtonsPage;
            }());
            ButtonsPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
            ]; };
            ButtonsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-buttons',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buttons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/buttons/buttons.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buttons.page.scss */ "./src/app/pages/fivethree/components/buttons/buttons.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
            ], ButtonsPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-components-buttons-buttons-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-components-buttons-buttons-module-es5.js.map
//# sourceMappingURL=pages-fivethree-components-buttons-buttons-module-es5.js.map