webpackJsonp([1,4],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(321);
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
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.projectsUrl = 'api/projects/';
    }
    //GETS
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
    //POST
    ProjectGalleryService.prototype.createProject = function (project) {
        var url = "" + this.projectsUrl;
        return this.http.post(url, JSON.stringify(project), this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //PUT
    ProjectGalleryService.prototype.updateProject = function (projectID, project) {
        var url = this.projectsUrl + "id/" + projectID;
        return this.http.put(url, project, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //DELETE
    ProjectGalleryService.prototype.deleteProject = function (projectID) {
        var url = this.projectsUrl + "id/" + projectID;
        return this.http.delete(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectGalleryService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], ProjectGalleryService);
    return ProjectGalleryService;
    var _a;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/project-gallery.service.js.map

/***/ }),

/***/ 305:
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
            template: __webpack_require__(521),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/about.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(321);
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
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
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
    //POST
    ArtworkService.prototype.createArtwork = function (artwork) {
        var url = "" + this.artworkUrl;
        return this.http.post(url, JSON.stringify(artwork), this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //PUT
    ArtworkService.prototype.updateArtwork = function (artworkID, artwork) {
        var url = this.artworkUrl + "id/" + artworkID;
        return this.http.put(url, artwork, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //DELETE
    ArtworkService.prototype.deleteArtwork = function (artworkID) {
        var url = this.artworkUrl + "id/" + artworkID;
        return this.http.delete(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtworkService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], ArtworkService);
    return ArtworkService;
    var _a;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/artwork.service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDetail = (function () {
    function ProjectDetail(projectService, route) {
        this.projectService = projectService;
        this.route = route;
        this.includeCaptions = true;
    }
    ProjectDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.getProject(params['id']); })
            .subscribe(function (project) {
            console.log("project: " + project);
            _this.project = project;
            _this.category = project.category;
        });
    };
    ProjectDetail.prototype.getProject = function (projectId) {
        console.log("getProject was passed: " + projectId);
        return this.projectService.getProjectByID(projectId);
    };
    ProjectDetail = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'project-detail',
            template: __webpack_require__(524),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__["a" /* ProjectGalleryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__["a" /* ProjectGalleryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ProjectDetail);
    return ProjectDetail;
    var _a, _b;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/project-detail.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(529);
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
        if (this.selectedProject === project) {
            this.selectedProject = undefined;
        }
        else {
            this.selectedProject = project;
        }
    };
    ProjectGallery = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'project-gallery',
            template: __webpack_require__(525),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__["a" /* ProjectGalleryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__project_gallery_service__["a" /* ProjectGalleryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ProjectGallery);
    return ProjectGallery;
    var _a, _b;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/project-gallery.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 338;


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_gallery_project_gallery_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_gallery_project_detail_component__ = __webpack_require__(307);
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
    },
    {
        path: 'project/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__project_gallery_project_detail_component__["a" /* ProjectDetail */]
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

/***/ 457:
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
            template: __webpack_require__(522),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_gallery_project_gallery_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_gallery_project_detail_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_gallery_gallery_image_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project_gallery_project_gallery_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_gallery_artwork_service__ = __webpack_require__(306);
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
                __WEBPACK_IMPORTED_MODULE_8__project_gallery_project_detail_component__["a" /* ProjectDetail */],
                __WEBPACK_IMPORTED_MODULE_9__project_gallery_gallery_image_component__["a" /* GalleryImage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__project_gallery_project_gallery_service__["a" /* ProjectGalleryService */], __WEBPACK_IMPORTED_MODULE_11__project_gallery_artwork_service__["a" /* ArtworkService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artwork_service__ = __webpack_require__(306);
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
        this.showCaption = false;
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], GalleryImage.prototype, "showCaption", void 0);
    GalleryImage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'gallery-image',
            template: __webpack_require__(523),
            styles: [__webpack_require__(518)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__artwork_service__["a" /* ArtworkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__artwork_service__["a" /* ArtworkService */]) === 'function' && _a) || Object])
    ], GalleryImage);
    return GalleryImage;
    var _a;
}());
//# sourceMappingURL=/Users/michellosier/portfolio-site/portfolio-app/src/gallery-image.component.js.map

/***/ }),

/***/ 460:
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

/***/ 516:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "\nh1 {\n\tfont-size: 1.75rem;\n\ttext-align:center;\n}\nheader#main-header {\n\tborder-bottom: 1px solid #666;\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:horizontal;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-flow:row wrap;\n\t        flex-flow:row wrap;\n\t-webkit-box-pack:start;\n\t    -ms-flex-pack:start;\n\t        justify-content:flex-start;\n}\ndiv#title-container {\n\tpadding: 1rem 1rem 0 1rem;\n\tmargin-right: 1rem;\n\t-webkit-box-flex:1;\n\t    -ms-flex-positive:1;\n\t        flex-grow:1;\n}\nnav#main-nav {\n\t-webkit-box-flex:8;\n\t    -ms-flex-positive:8;\n\t        flex-grow:8;\n\tpadding-top:3rem;\n}\nnav#main-nav ul {\n\tpadding:0;\n\tmargin:0;\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\theight: 2rem;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row nowrap;\n\t        flex-flow: row nowrap;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n\n}\nnav#main-nav li {\n\tdisplay:inline-block;\n\tpadding-bottom:2rem;\n}\nnav#main-nav a {\n\tpadding:1rem;\n\tcolor: #666;\n\tcursor: pointer;\n\ttext-decoration:none;\n}\nnav#main-nav li:hover {\n\tcolor: #e26e26;\n\tborder-bottom: 6px solid #e26e26;\n}\nnav#main-nav a:hover {\n\tcolor: #e26e26;\n}\nnav#main-nav a.active {\n\tcolor: #e26e26;\n}\n.main-view-container {\n\twidth: 75%;\n\tmargin: 0 auto;\n\tpadding: 2rem;\n}"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "img { \n\tdisplay:block;\n\tmax-width:100%;\n\tmax-height:100%;\n\twidth: auto; \n\tmargin: 0 auto;\n\t}\nimg.loading {\n\twidth:100%;\n\theight:100%;\n\tbackground-color:white;\n\ttext-align:center;\n\tfont-size:2rem;\n\tline-height: 300px;\n\tcolor:#e26e26;\n}\n.caption {\n\tfont-size: 1rem;\n\ttext-align:center;\n}\n"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "h2 {\n\ttext-align:center;\n}\n.description-container {\n\tmargin: 0 auto;\n\ttext-align: center;\n\tborder-top: 1px solid #666;\n\tborder-bottom: 1px solid #666;\n\twidth: 50%;\n\n}\n.artwork-container {\n\twidth:75%;\n\ttext-align: center;\n\tmargin:3rem auto;\n}\n\n.comics {\n\n}\n\n.illustration {\n\t\n}"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = ".gallery-container {\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n}\n.project-container {\n\tmargin: 1em;\n}\n.project-container h3 {\n\ttext-align:center;\n}\n.preview-container {\n\theight:350px;\n\twidth:300px;\n\tborder: 1px solid #666;\n\tpadding: 1em;\n}\n.preview-container:hover {\n\tborder-color:#e26e26;\n\tcursor: pointer;\n}\n.description {\n\tcolor:#e26e26;\n\tpadding:1rem;\n\tposition:absolute;\n\theight: 325px;\n\twidth: 275px;\n\tbackground:rgba(256,256,256, 0.95);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    text-align: left;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n}\n.description p {\n\ttext-align: left;\n}\n.selected {\n\tborder-color:#e26e26;\n}\n.view-button {\n\tcolor: #666;\n\tpadding: 1rem 3rem;\n\tborder: 1px solid #666;\n}\n.view-button:hover {\n\tcolor:#e26e26;\n\tborder-color:#e26e26;\n\tcursor: pointer;\n}"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "\n\t<h2>about</h2>\n\t<p>Michel is an artist in Portland, OR. He was raised in the hot flat-lands of Florida and earned his B.S. in Anthropology and Russian and East European Studies from Florida State University. It was in his study of cultural linguistics that he became interested in the relationships of text and image which eventually lead him to the comic arts. His work is strongly influenced by ecological and political environments and strives to present these formations with a sensitive line and character centered poetic narrative.</p>"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<header id=\"main-header\">\n\t<div id=\"title-container\">\n\t\t<h1>\n\t\t  {{title}}\n\t\t</h1>\n\t</div>\n\t<nav id=\"main-nav\">\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/about\" routerLinkActive=\"active\">about</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/illustration\" routerLinkActive=\"active\">illustration</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/comics\" routerLinkActive=\"active\">comics</a>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n</header>\n<div class=\"main-view-container\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "\n\t<img\n\t\t[class.loading]=\"loading\"\n\t\t[alt]=\"altText\"\n\t\t[src]=\"imageUrl\"\n\t\t(error)=\"tempLoad($event)\"\n\t\t(load)=\"loading = false\"\n\t\t/>\n\t\t<p *ngIf=\"(artwork && showCaption)\" class=\"caption\">{{artwork.caption}}</p>\n"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\">\n\t<h2>{{project.name}}</h2>\n\t<div class=\"layout-container\">\n\t\t<div class=\"description-container\">\n\t\t\t<p>{{project.description}}</p>\n\t\t</div>\n\t\t<div \n\t\t\tclass=\"artwork-container\"\n\t\t\t[ngClass]=\"category\" \n\t\t\t*ngFor=\"let artworkID of project.gallery\">\n\t\t\t<gallery-image \n\t\t\t\t[id]=\"artworkID\"\n\t\t\t\t[showCaption]=\"includeCaptions\"\n\t\t\t></gallery-image>\t\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<h2>{{category}}</h2>\n<div class=\"gallery-container\">\n\t<div class=\"project-container\" *ngFor=\"let project of projects\">\n\t\t<h3>{{project.name}}</h3>\n\t\t<div \n\t\t(click)=\"selectProject(project)\"\n\t\t[class.selected]=\"selectedProject == project\"\n\t\tclass=\"preview-container\">\n\t\t\t<div \n\t\t\t*ngIf=\"selectedProject == project\"\n\t\t\tclass=\"description\">\n\t\t\t\t\t<p>{{project.description}}</p>\n\n\t\t\t\t\t<div class=\"view-button\"\n\t\t\t\t\t\t[routerLink]=\"['/project', project._id]\"\n\t\t\t\t\t>view</div>\n\t\t\t</div>\n\t\t\t<gallery-image \n\t\t\t\t[id]='project.featuredImage'>\n\t\t\t</gallery-image>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(339);


/***/ })

},[545]);
//# sourceMappingURL=main.bundle.map