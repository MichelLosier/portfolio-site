webpackJsonp([1,4],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'about',
            template: __webpack_require__(519),
            styles: [__webpack_require__(515)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/about.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtworkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtworkService = (function () {
    function ArtworkService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.artworkUrl = 'api/artwork/';
    }
    ArtworkService.prototype.getArtworkByID = function (artworkID) {
        var url = this.artworkUrl + "id/" + artworkID;
        console.log(url);
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtworkService.prototype.getArtworkByProjectID = function (projectID) {
        var url = this.artworkUrl + "/project/" + projectID;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtworkService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ArtworkService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ArtworkService);
    return ArtworkService;
    var _a;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/artwork.service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectGallery; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectGallery = (function () {
    function ProjectGallery(projectGalleryService, route) {
        this.projectGalleryService = projectGalleryService;
        this.route = route;
    }
    ProjectGallery.prototype.ngOnInit = function () {
        this.category = this.route.routeConfig.path;
        this.getProjects(this.category);
    };
    ProjectGallery.prototype.getProjects = function (category) {
        var _this = this;
        this.projectGalleryService.getAllProjectsCategory(category)
            .subscribe(function (project) { return _this.projects = project; });
    };
    ProjectGallery.prototype.selectProject = function (project) {
        this.selectedProject = project;
    };
    ProjectGallery = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'project-gallery',
            template: __webpack_require__(522),
            styles: [__webpack_require__(518)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__["a" /* ProjectGalleryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__["a" /* ProjectGalleryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ProjectGallery);
    return ProjectGallery;
    var _a, _b;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/project-gallery.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectGalleryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectGalleryService = (function () {
    function ProjectGalleryService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.projectsUrl = 'api/projects/';
    }
    ProjectGalleryService.prototype.getAllProjects = function () {
        return this.http.get(this.projectsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectGalleryService.prototype.getAllProjectsCategory = function (category) {
        var url = this.projectsUrl + "category/" + category;
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    ProjectGalleryService.prototype.getProjectByID = function (projectID) {
        var url = this.projectsUrl + "id/" + projectID;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectGalleryService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProjectGalleryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ProjectGalleryService);
    return ProjectGalleryService;
    var _a;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/project-gallery.service.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 337;


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(457);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/main.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_gallery_project_gallery_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ROUTES = [
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'comics',
        component: __WEBPACK_IMPORTED_MODULE_3__project_gallery_project_gallery_component__["a" /* ProjectGallery */]
    },
    {
        path: 'illustration',
        component: __WEBPACK_IMPORTED_MODULE_3__project_gallery_project_gallery_component__["a" /* ProjectGallery */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/app-routing.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Michel Losier';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(520),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_gallery_project_gallery_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_gallery_gallery_image_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_gallery_project_gallery_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project_gallery_artwork_service__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__project_gallery_project_gallery_component__["a" /* ProjectGallery */],
                __WEBPACK_IMPORTED_MODULE_8__project_gallery_gallery_image_component__["a" /* GalleryImage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__project_gallery_project_gallery_service__["a" /* ProjectGalleryService */], __WEBPACK_IMPORTED_MODULE_10__project_gallery_artwork_service__["a" /* ArtworkService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artwork_service__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryImage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryImage = (function () {
    function GalleryImage(artworkService) {
        this.artworkService = artworkService;
        this.baseUrl = "../assets/images/";
        this.loading = true;
        this.id = null;
    }
    GalleryImage.prototype.ngOnInit = function () {
        this.getImage(this.id);
    };
    GalleryImage.prototype.getImage = function (id) {
        var _this = this;
        console.log(id);
        this.artworkService.getArtworkByID(id)
            .subscribe(function (artwork) {
            console.log(artwork);
            _this.artwork = artwork;
            _this.imageUrl = _this.createArtworkUrl(artwork);
            _this.altText = artwork.altText;
        });
    };
    GalleryImage.prototype.createArtworkUrl = function (artwork) {
        return "" + this.baseUrl + artwork.location + artwork.normal;
    };
    GalleryImage.prototype.tempLoad = function (event) {
        this.imageUrl = "";
        this.loading = true;
        this.altText = "...";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], GalleryImage.prototype, "id", void 0);
    GalleryImage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'gallery-image',
            template: __webpack_require__(521),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__artwork_service__["a" /* ArtworkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__artwork_service__["a" /* ArtworkService */]) === 'function' && _a) || Object])
    ], GalleryImage);
    return GalleryImage;
    var _a;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/gallery-image.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/environment.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "\nh1 {\n\tfont-size: 1.75rem;\n}\nnav {\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\tborder-bottom: 1px solid #666;\n\theight: 2rem;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row nowrap;\n\t        flex-flow: row nowrap;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n}\nnav a {\n\tcolor: #666;\n\tcursor: pointer;\n\tpadding: 0 1rem;\n\ttext-decoration:none;\n}\nnav a:hover {\n\tcolor: #e26e26;\n\tborder-bottom: 6px solid #e26e26;\n}\nnav a:visted, a:link {\n\tcolor: #e26e26;\n}\nnav a.active {\n\tcolor: #e26e26;\n}\n.view-container {\n\twidth: 75%;\n\tmargin: 0 auto;\n\tpadding: 2em;\n}"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "img { \n\tdisplay:block;\n\tmax-width:275px;\n\tmax-height:325px;\n\twidth: auto; \n\theight:auto;\n\tmargin: 1rem auto;\n\t}\nimg.loading {\n\twidth:300px;\n\theight:350px;\n\tbackground-color:white;\n\ttext-align:center;\n\tfont-size:2rem;\n\tline-height: 300px;\n\tcolor:#e26e26;\n}\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = ".gallery-container {\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n}\n.project-container {\n\tmargin: 1em;\n}\n.project-container h3 {\n\ttext-align:center;\n}\n.preview-container {\n\theight:350px;\n\twidth:300px;\n\tborder: 1px solid #666;\n\tpadding: 1em;\n}\n.preview-container:hover {\n\tborder-color:#e26e26;\n\tcursor: pointer;\n}\n.description {\n\tcolor:#e26e26;\n\tpadding:1rem;\n\tposition:absolute;\n\theight: 325px;\n\twidth: 275px;\n\tbackground:rgba(256,256,256, 0.95);\n}\n.description p {\n\ttext-align: center;\n}"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "\n\t<h2>about</h2>\n\t<p>Michel is an artist in Portland, OR. He was raised in the hot flat-lands of Florida and earned his B.S. in Anthropology and Russian and East European Studies from Florida State University. It was in his study of cultural linguistics that he became interested in the relationships of text and image which eventually lead him to the comic arts. His work is strongly influenced by ecological and political environments and strives to present these formations with a sensitive line and character centered poetic narrative.</p>"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<nav>\n\t<a routerLink=\"/about\" routerLinkActive=\"active\">about</a>\n\t<a routerLink=\"/illustration\" routerLinkActive=\"active\">illustration</a>\n\t<a routerLink=\"/comics\" routerLinkActive=\"active\">comics</a>\n</nav>\n<div class=\"view-container\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<img \n\t[class.loading]=\"loading\"\n\t[alt]=\"altText\"\n\t[src]=\"imageUrl\"\n\t(error)=\"tempLoad($event)\"\n\t(load)=\"loading = false\"\n\t/>"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<h2>{{category}}</h2>\n<div class=\"gallery-container\">\n\t<div class=\"project-container\" *ngFor=\"let project of projects\">\n\t\t<h3>{{project.name}}</h3>\n\t\t<div \n\t\t(click)=\"selectProject(project)\"\n\t\tclass=\"preview-container\">\n\t\t\t<div \n\t\t\t\t*ngIf=\"selectedProject == project\"\n\t\t\t\tclass=\"description\">\n\t\t\t\t\t<p>{{project.description}}</p>\n\t\t\t\n\t\t\t</div>\n\t\t\t<gallery-image [id]='project.featuredImage'></gallery-image>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(338);


/***/ })

},[540]);
//# sourceMappingURL=main.bundle.map