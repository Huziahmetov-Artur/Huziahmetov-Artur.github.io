(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Class/ListMas.ts":
/*!**********************************!*\
  !*** ./src/app/Class/ListMas.ts ***!
  \**********************************/
/*! exports provided: listOfApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listOfApp", function() { return listOfApp; });
var listOfApp = [];


/***/ }),

/***/ "./src/app/action-app/action-app.component.css":
/*!*****************************************************!*\
  !*** ./src/app/action-app/action-app.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gameBlock{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 220px;\n  height: 220px;\n  background: white;\n  margin: 10px;\n  border-radius: 20px;\n}\nh2,p{\n  margin: 2px;\n}\nimg{\n  height: 150px;\n  width: 150px;\n  border-radius: 10px;\n}\n.gamePage{\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  height: 350px;\n}\n.sortButton{\n  display: flex;\n}\nbutton{\n  margin: 20px;\n  border-radius: 15px;\n  color: #1f071f;\n  font-size: 20px;\n  background: #cad9e3;\n  padding: 10px 20px 10px 20px;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/action-app/action-app.component.html":
/*!******************************************************!*\
  !*** ./src/app/action-app/action-app.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sortButton\">\n  <h1>Sort by :</h1>\n<button (click)=\"change('app_name')\">Name</button>\n<button (click)=\"change('app_type')\">Type</button>\n</div>\n<div class=\"gamePage\">\n\n  <div *ngFor=\"let App of infoMas\" class=\"gameBlock\" routerLink=\"/game/{{App.app_short}}\">\n    <img src=\"{{App.url}}\">\n    <h2>{{App.app_name}}</h2>\n    <p>✩ {{App.all_rating}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/action-app/action-app.component.ts":
/*!****************************************************!*\
  !*** ./src/app/action-app/action-app.component.ts ***!
  \****************************************************/
/*! exports provided: ActionAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAppComponent", function() { return ActionAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/get.service */ "./src/app/service/get.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionAppComponent = /** @class */ (function () {
    function ActionAppComponent(GetService) {
        this.GetService = GetService;
    }
    ActionAppComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    ActionAppComponent.prototype.refresh = function () {
        var _this = this;
        this.GetService.getApi().subscribe(function (res) {
            _this.variable = res;
            _this.infoMas = _this.variable.filter(function (a) { return a.app_type === 'action'; });
        });
    };
    ActionAppComponent.prototype.change = function (type) {
        this.GetService.sortt(this.infoMas, type);
    };
    ActionAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action-app',
            template: __webpack_require__(/*! ./action-app.component.html */ "./src/app/action-app/action-app.component.html"),
            styles: [__webpack_require__(/*! ./action-app.component.css */ "./src/app/action-app/action-app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"]])
    ], ActionAppComponent);
    return ActionAppComponent;
}());



/***/ }),

/***/ "./src/app/adventure-app/adventure-app.component.css":
/*!***********************************************************!*\
  !*** ./src/app/adventure-app/adventure-app.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gameBlock{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 220px;\n  height: 220px;\n  background: white;\n  margin: 10px;\n  border-radius: 20px;\n}\nh2,p{\n  margin: 2px;\n}\nimg{\n  height: 150px;\n  width: 150px;\n  border-radius: 10px;\n}\n.gamePage{\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  height: 350px;\n}\n.sortButton{\n  display: flex;\n}\nbutton{\n  margin: 20px;\n  border-radius: 15px;\n  color: #1f071f;\n  font-size: 20px;\n  background: #cad9e3;\n  padding: 10px 20px 10px 20px;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/adventure-app/adventure-app.component.html":
/*!************************************************************!*\
  !*** ./src/app/adventure-app/adventure-app.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sortButton\">\n  <h1>Sort by :</h1>\n  <button (click)=\"change('app_name')\">Name</button>\n  <button (click)=\"change('app_type')\">Type</button>\n</div>\n<div class=\"gamePage\">\n  <div *ngFor=\"let App of infoMas\" class=\"gameBlock\" routerLink=\"/game/{{App.app_short}}\">\n    <img src=\"{{App.url}}\">\n    <h2>{{App.app_name}}</h2>\n    <p>✩ {{App.all_rating}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/adventure-app/adventure-app.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/adventure-app/adventure-app.component.ts ***!
  \**********************************************************/
/*! exports provided: AdventureAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureAppComponent", function() { return AdventureAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/get.service */ "./src/app/service/get.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdventureAppComponent = /** @class */ (function () {
    function AdventureAppComponent(GetService) {
        this.GetService = GetService;
    }
    AdventureAppComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdventureAppComponent.prototype.refresh = function () {
        var _this = this;
        this.GetService.getApi().subscribe(function (res) {
            _this.variable = res;
            _this.infoMas = _this.variable.filter(function (a) { return a.app_type === "adventure"; });
        });
    };
    AdventureAppComponent.prototype.change = function (type) {
        this.GetService.sortt(this.infoMas, type);
    };
    AdventureAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adventure-app',
            template: __webpack_require__(/*! ./adventure-app.component.html */ "./src/app/adventure-app/adventure-app.component.html"),
            styles: [__webpack_require__(/*! ./adventure-app.component.css */ "./src/app/adventure-app/adventure-app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"]])
    ], AdventureAppComponent);
    return AdventureAppComponent;
}());



/***/ }),

/***/ "./src/app/app-page/app-page.component.css":
/*!*************************************************!*\
  !*** ./src/app/app-page/app-page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  outline: none;\r\n}\r\n.oneApp{\r\n  padding: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  font-size: 30px;\r\n  background: white;\r\n  width: 700px;\r\n  border-radius: 20px;\r\n}\r\nimg{\r\n  height: 400px;\r\n  width: 400px;\r\n  border-radius: 20px;\r\n}\r\nh1,p,li{\r\n  margin: 2px;\r\n}\r\nbutton{\r\n  margin: 20px;\r\n  border-radius: 28px;\r\n  color: #1f071f;\r\n  font-size: 27px;\r\n  background: #cad9e3;\r\n  padding: 10px 20px 10px 20px;\r\n  text-decoration: none;\r\n}\r\nbutton:hover {\r\n  background: #c0e5fc;\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app-page/app-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/app-page/app-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"oneApp\" *ngIf=\"oneGame\">\n  <img src=\"{{oneGame.url}}\">\n  <h1>{{oneGame.app_name}}</h1>\n  <div>\n  <p>Size : {{oneGame.file_size}}</p>\n  <p>✩ {{oneGame.all_rating}}</p>\n  <p>Type : {{oneGame.app_type | uppercase }}</p>\n  <p>Downloads : {{oneGame.downloads}}</p>\n  <p>Price : {{oneGame.price}}</p>\n  <p>Version : {{oneGame.version}}</p>\n  </div>\n  <div>\n    Permissions:\n    <div *ngFor=\"let st of oneGame.permissions\">\n      <li>{{st}}</li>\n    </div>\n  </div>\n  <button>Download</button>\n</div>\n"

/***/ }),

/***/ "./src/app/app-page/app-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-page/app-page.component.ts ***!
  \************************************************/
/*! exports provided: AppPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPageComponent", function() { return AppPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/get.service */ "./src/app/service/get.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppPageComponent = /** @class */ (function () {
    function AppPageComponent(activateRoute, GetService, router) {
        this.activateRoute = activateRoute;
        this.GetService = GetService;
        this.router = router;
        this.id = activateRoute.snapshot.params['id'];
    }
    AppPageComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AppPageComponent.prototype.refresh = function () {
        var _this = this;
        this.GetService.getApi().subscribe(function (res) {
            _this.variable = res;
            _this.oneGame = _this.variable.filter(function (a) { return a.app_short.toLowerCase() === _this.id; })[0];
            if (_this.oneGame) {
            }
            else {
                alert('No app');
                _this.router.navigate([""]);
            }
        });
    };
    AppPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-page',
            template: __webpack_require__(/*! ./app-page.component.html */ "./src/app/app-page/app-page.component.html"),
            styles: [__webpack_require__(/*! ./app-page.component.css */ "./src/app/app-page/app-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppPageComponent);
    return AppPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-page/app-page.component */ "./src/app/app-page/app-page.component.ts");
/* harmony import */ var _action_app_action_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-app/action-app.component */ "./src/app/action-app/action-app.component.ts");
/* harmony import */ var _music_app_music_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-app/music-app.component */ "./src/app/music-app/music-app.component.ts");
/* harmony import */ var _strategy_app_strategy_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strategy-app/strategy-app.component */ "./src/app/strategy-app/strategy-app.component.ts");
/* harmony import */ var _adventure_app_adventure_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adventure-app/adventure-app.component */ "./src/app/adventure-app/adventure-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: 'action', component: _action_app_action_app_component__WEBPACK_IMPORTED_MODULE_4__["ActionAppComponent"] },
    { path: 'music', component: _music_app_music_app_component__WEBPACK_IMPORTED_MODULE_5__["MusicAppComponent"] },
    { path: 'strategy', component: _strategy_app_strategy_app_component__WEBPACK_IMPORTED_MODULE_6__["StrategyAppComponent"] },
    { path: 'adventure', component: _adventure_app_adventure_app_component__WEBPACK_IMPORTED_MODULE_7__["AdventureAppComponent"] },
    { path: 'game/:id', component: _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_3__["AppPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-page/app-page.component */ "./src/app/app-page/app-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _action_app_action_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action-app/action-app.component */ "./src/app/action-app/action-app.component.ts");
/* harmony import */ var _music_app_music_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./music-app/music-app.component */ "./src/app/music-app/music-app.component.ts");
/* harmony import */ var _strategy_app_strategy_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./strategy-app/strategy-app.component */ "./src/app/strategy-app/strategy-app.component.ts");
/* harmony import */ var _adventure_app_adventure_app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adventure-app/adventure-app.component */ "./src/app/adventure-app/adventure-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_7__["AppPageComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _action_app_action_app_component__WEBPACK_IMPORTED_MODULE_9__["ActionAppComponent"],
                _music_app_music_app_component__WEBPACK_IMPORTED_MODULE_10__["MusicAppComponent"],
                _strategy_app_strategy_app_component__WEBPACK_IMPORTED_MODULE_11__["StrategyAppComponent"],
                _adventure_app_adventure_app_component__WEBPACK_IMPORTED_MODULE_12__["AdventureAppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  outline: none;\n}\nheader{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nimg{\n  height: 70px;\n  width: auto;\n}\ninput[type = \"search\"]{\n  height: 50px;\n  width: 700px;\n  font-size: 30px;\n}\nul{\n  display: flex;\n  width: 600px;\n}\nli{\n  width: 150px;\n  font-size: 30px;\n  list-style-type: none;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <img src=\"https://www.ixbt.com/short/images/2017/Sep/google_play_logo_2015-630x247.png\"\n       routerLink=\"\">\n  <input type=\"search\" [(ngModel)]=\"searchVar\" (click)=\"changeRouter()\" (change)=\"search()\">\n\n  <ul class=\"categories\">\n    <li class=\"Action\" routerLink=\"action\">Action</li>\n    <li class=\"Music\" routerLink=\"music\">Music</li>\n    <li class=\"Strategy\" routerLink=\"strategy\">Strategy</li>\n    <li class=\"Adventure\" routerLink=\"adventure\">Adventure</li>\n  </ul>\n</header>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Class_ListMas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Class/ListMas */ "./src/app/Class/ListMas.ts");
/* harmony import */ var _service_get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/get.service */ "./src/app/service/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(GetService, router, activateRoute) {
        this.GetService = GetService;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.GetService.getApi().subscribe(function (res) {
            _Class_ListMas__WEBPACK_IMPORTED_MODULE_1__["listOfApp"].push.apply(_Class_ListMas__WEBPACK_IMPORTED_MODULE_1__["listOfApp"], res);
        });
    };
    HeaderComponent.prototype.search = function () {
        console.log(this.searchVar);
        this.searchVar = this.searchVar.replace(/\s/g, '').toLowerCase();
        console.log(this.searchVar);
        this.router.navigate(["/game/" + this.searchVar]);
        this.searchVar = '';
    };
    HeaderComponent.prototype.changeRouter = function () {
        this.router.navigate([""]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  outline: none;\n}\n.gameBlock{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 220px;\n  height: 220px;\n  background: white;\n  margin: 10px;\n  border-radius: 20px;\n}\nh2,p{\n  margin: 2px;\n}\nimg{\n  height: 150px;\n  width: 150px;\n  border-radius: 10px;\n}\n.gamePage{\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  height: 350px;\n}\n.sortButton{\n  display: flex;\n  margin-left: 70px;\n}\nbutton{\n  margin: 20px;\n  border-radius: 15px;\n  color: #1f071f;\n  font-size: 20px;\n  background: #cad9e3;\n  padding: 10px 20px 10px 20px;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sortButton\">\n  <h1>Sort by :</h1>\n  <button (click)=\"change('app_name')\">Name</button>\n  <button (click)=\"change('app_type')\">Type</button>\n</div>\n<div class=\"gamePage\">\n<div *ngFor=\"let App of user\" class=\"gameBlock\" routerLink=\"game/{{App.app_short | lowercase }}\">\n  <img src=\"{{App.url}}\">\n  <h2>{{App.app_name}}</h2>\n  <p>✩ {{App.all_rating}}</p>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Class_ListMas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Class/ListMas */ "./src/app/Class/ListMas.ts");
/* harmony import */ var _service_get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/get.service */ "./src/app/service/get.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(GetService) {
        this.GetService = GetService;
        this.user = _Class_ListMas__WEBPACK_IMPORTED_MODULE_1__["listOfApp"];
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.change = function (type) {
        this.GetService.sortt(_Class_ListMas__WEBPACK_IMPORTED_MODULE_1__["listOfApp"], type);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "test", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "disp", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/music-app/music-app.component.css":
/*!***************************************************!*\
  !*** ./src/app/music-app/music-app.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gameBlock{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 220px;\n  height: 220px;\n  background: white;\n  margin: 10px;\n  border-radius: 20px;\n}\nh2,p{\n  margin: 2px;\n}\nimg{\n  height: 150px;\n  width: 150px;\n  border-radius: 10px;\n}\n.gamePage{\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  height: 350px;\n}\n.sortButton{\n  display: flex;\n}\nbutton{\n  margin: 20px;\n  border-radius: 15px;\n  color: #1f071f;\n  font-size: 20px;\n  background: #cad9e3;\n  padding: 10px 20px 10px 20px;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/music-app/music-app.component.html":
/*!****************************************************!*\
  !*** ./src/app/music-app/music-app.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sortButton\">\n  <h1>Sort by :</h1>\n  <button (click)=\"change('app_name')\">Name</button>\n  <button (click)=\"change('app_type')\">Type</button>\n</div>\n<div class=\"gamePage\">\n  <div *ngFor=\"let App of infoMas\" class=\"gameBlock\" routerLink=\"/game/{{App.app_short}}\">\n    <img src=\"{{App.url}}\">\n    <h2>{{App.app_name}}</h2>\n    <p>✩ {{App.all_rating}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/music-app/music-app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/music-app/music-app.component.ts ***!
  \**************************************************/
/*! exports provided: MusicAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAppComponent", function() { return MusicAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/get.service */ "./src/app/service/get.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicAppComponent = /** @class */ (function () {
    function MusicAppComponent(GetService) {
        this.GetService = GetService;
    }
    MusicAppComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    MusicAppComponent.prototype.refresh = function () {
        var _this = this;
        this.GetService.getApi().subscribe(function (res) {
            _this.variable = res;
            _this.infoMas = _this.variable.filter(function (a) { return a.app_type === "music"; });
        });
    };
    MusicAppComponent.prototype.change = function (type) {
        this.GetService.sortt(this.infoMas, type);
    };
    MusicAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music-app',
            template: __webpack_require__(/*! ./music-app.component.html */ "./src/app/music-app/music-app.component.html"),
            styles: [__webpack_require__(/*! ./music-app.component.css */ "./src/app/music-app/music-app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"]])
    ], MusicAppComponent);
    return MusicAppComponent;
}());



/***/ }),

/***/ "./src/app/service/get.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/get.service.ts ***!
  \****************************************/
/*! exports provided: GetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetService", function() { return GetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetService = /** @class */ (function () {
    function GetService(http) {
        this.http = http;
    }
    GetService.prototype.getApi = function () {
        return this.http.get('http://localhost:4200/assets/info.json');
    };
    GetService.prototype.sortt = function (mas, typee) {
        console.log(typee);
        mas.sort(function (a, b) {
            if (a[typee] > b[typee]) {
                return 1;
            }
            if (a[typee] < b[typee]) {
                return -1;
            }
            return 0;
        });
    };
    GetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetService);
    return GetService;
}());



/***/ }),

/***/ "./src/app/strategy-app/strategy-app.component.css":
/*!*********************************************************!*\
  !*** ./src/app/strategy-app/strategy-app.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gameBlock{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 220px;\n  height: 220px;\n  background: white;\n  margin: 10px;\n  border-radius: 20px;\n}\nh2,p{\n  margin: 2px;\n}\nimg{\n  height: 150px;\n  width: 150px;\n  border-radius: 10px;\n}\n.gamePage{\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  height: 350px;\n}\n.sortButton{\n  display: flex;\n}\nbutton{\n  margin: 20px;\n  border-radius: 15px;\n  color: #1f071f;\n  font-size: 20px;\n  background: #cad9e3;\n  padding: 10px 20px 10px 20px;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/strategy-app/strategy-app.component.html":
/*!**********************************************************!*\
  !*** ./src/app/strategy-app/strategy-app.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sortButton\">\n  <h1>Sort by :</h1>\n  <button (click)=\"change('app_name')\">Name</button>\n  <button (click)=\"change('app_type')\">Type</button>\n</div>\n<div class=\"gamePage\">\n  <div *ngFor=\"let App of infoMas\" class=\"gameBlock\" routerLink=\"/game/{{App.app_short}}\">\n    <img src=\"{{App.url}}\">\n    <h2>{{App.app_name}}</h2>\n    <p>✩ {{App.all_rating}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/strategy-app/strategy-app.component.ts":
/*!********************************************************!*\
  !*** ./src/app/strategy-app/strategy-app.component.ts ***!
  \********************************************************/
/*! exports provided: StrategyAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyAppComponent", function() { return StrategyAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/get.service */ "./src/app/service/get.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrategyAppComponent = /** @class */ (function () {
    function StrategyAppComponent(GetService) {
        this.GetService = GetService;
    }
    StrategyAppComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    StrategyAppComponent.prototype.refresh = function () {
        var _this = this;
        this.GetService.getApi().subscribe(function (res) {
            _this.variable = res;
            _this.infoMas = _this.variable.filter(function (a) { return a.app_type === "strategy"; });
        });
    };
    StrategyAppComponent.prototype.change = function (type) {
        this.GetService.sortt(this.infoMas, type);
    };
    StrategyAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-strategy-app',
            template: __webpack_require__(/*! ./strategy-app.component.html */ "./src/app/strategy-app/strategy-app.component.html"),
            styles: [__webpack_require__(/*! ./strategy-app.component.css */ "./src/app/strategy-app/strategy-app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"]])
    ], StrategyAppComponent);
    return StrategyAppComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map