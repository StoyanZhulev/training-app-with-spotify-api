webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var search_component_1 = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
var app_routes_1 = __webpack_require__("../../../../../src/app/app.routes.ts");
var song_card_component_1 = __webpack_require__("../../../../../src/app/components/song-card/song-card.component.ts");
var album_component_1 = __webpack_require__("../../../../../src/app/components/album/album.component.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
var create_component_1 = __webpack_require__("../../../../../src/app/components/playlist/create/create.component.ts");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var dialog_1 = __webpack_require__("../../../material/esm5/dialog.es5.js");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var auth_component_1 = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
var isLogged_guard_1 = __webpack_require__("../../../../../src/app/guards/isLogged.guard.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/components/common/header/header.component.ts");
var my_playlists_component_1 = __webpack_require__("../../../../../src/app/components/playlist/my-playlists/my-playlists.component.ts");
var playlist_card_component_1 = __webpack_require__("../../../../../src/app/components/playlist/playlist-card/playlist-card.component.ts");
var playlist_tracks_dialog_component_1 = __webpack_require__("../../../../../src/app/components/playlist/playlist-tracks-dialog/playlist-tracks-dialog.component.ts");
var expired_token_interceptor_1 = __webpack_require__("../../../../../src/app/interceptors/expired-token.interceptor.ts");
var preview_component_1 = __webpack_require__("../../../../../src/app/components/audio/preview/preview.component.ts");
var simple_song_card_component_1 = __webpack_require__("../../../../../src/app/components/simple-song-card/simple-song-card.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                search_component_1.SearchComponent,
                song_card_component_1.SongCardComponent,
                album_component_1.AlbumComponent,
                login_component_1.LoginComponent,
                create_component_1.CreateComponent,
                auth_component_1.AuthComponent,
                header_component_1.HeaderComponent,
                my_playlists_component_1.MyPlaylistsComponent,
                playlist_card_component_1.PlaylistCardComponent,
                playlist_tracks_dialog_component_1.PlaylistTracksDialogComponent,
                preview_component_1.PreviewComponent,
                simple_song_card_component_1.SimpleSongCardComponent
            ],
            entryComponents: [
                playlist_tracks_dialog_component_1.PlaylistTracksDialogComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routes_1.AppRoutingModule,
                material_1.MatButtonModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatChipsModule,
                material_1.MatCardModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatGridListModule,
                material_1.MatCheckboxModule,
                material_1.MatSelectModule,
                material_1.MatMenuModule,
                dialog_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatIconModule
            ],
            providers: [
                auth_service_1.AuthService,
                playlist_service_1.PlaylistService,
                isLogged_guard_1.IsLoggedGuard,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: expired_token_interceptor_1.ExpiredTokenInterceptor,
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var search_component_1 = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
var album_component_1 = __webpack_require__("../../../../../src/app/components/album/album.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
var create_component_1 = __webpack_require__("../../../../../src/app/components/playlist/create/create.component.ts");
var auth_component_1 = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
var isLogged_guard_1 = __webpack_require__("../../../../../src/app/guards/isLogged.guard.ts");
var my_playlists_component_1 = __webpack_require__("../../../../../src/app/components/playlist/my-playlists/my-playlists.component.ts");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'search' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'auth', component: auth_component_1.AuthComponent },
    { path: 'search', component: search_component_1.SearchComponent, canActivate: [isLogged_guard_1.IsLoggedGuard] },
    { path: 'albums/:id', component: album_component_1.AlbumComponent, canActivate: [isLogged_guard_1.IsLoggedGuard] },
    { path: 'create/playlist', pathMatch: 'full', component: create_component_1.CreateComponent, canActivate: [isLogged_guard_1.IsLoggedGuard] },
    { path: 'playlists/mine', pathMatch: 'full', component: my_playlists_component_1.MyPlaylistsComponent, canActivate: [isLogged_guard_1.IsLoggedGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {
                    useHash: true
                })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/components/album/album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img {\n    padding: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    \n}\n\n.container {\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.songs {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n\n.song-container {\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/album.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"img\">\n        <img src=\"{{image?.url}}\" >\n    </div>\n    <div class=\"songs\">\n        <h2>{{name}}</h2>\n        <p>\n            <label>{{label}}</label>\n\n        </p>\n        <span>Release date: {{releaseDate}}</span>\n        <div class=\"song-container\">\n            <app-simple-song-card *ngFor=\"let song of songs\" [song]=\"song\" [playlists]=\"playlists\"></app-simple-song-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/album/album.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(route, http, authService, playlistService) {
        this.route = route;
        this.http = http;
        this.authService = authService;
        this.playlistService = playlistService;
        this.access_token = this.authService.getAccessToken();
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.http.get("https://api.spotify.com/v1/albums/" + id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.access_token
            }
        }).subscribe(function (data) {
            console.log(data);
            _this.album = data;
            _this.copyrights = _this.album.copyrights;
            _this.songs = _this.album.tracks.items;
            _this.image = _this.album.images[0];
            _this.releaseDate = _this.album.release_date;
            _this.label = _this.album.label;
            _this.name = _this.album.name;
            console.log(_this.songs);
        });
        this.playlistService.getMyPlaylists().subscribe(function (data) {
            _this.playlists = data.items;
        });
    };
    AlbumComponent = __decorate([
        core_1.Component({
            selector: 'app-album',
            template: __webpack_require__("../../../../../src/app/components/album/album.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/album/album.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            http_1.HttpClient,
            auth_service_1.AuthService,
            playlist_service_1.PlaylistService])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;


/***/ }),

/***/ "../../../../../src/app/components/audio/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".audio {\n    width: 100%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/audio/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<audio controls class=\"audio\">\n  <source src=\"{{previewUrl}}\" type=\"audio/mp3\">\n</audio>"

/***/ }),

/***/ "../../../../../src/app/components/audio/preview/preview.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PreviewComponent.prototype, "previewUrl", void 0);
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/components/audio/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/audio/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;


/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(route, authService, router) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.router = router;
        // if (!sessionStorage.getItem('access_token') || sessionStorage.getItem('access_token') === 'null') {
        this.route.queryParamMap.subscribe(function (params) {
            var access_token = params.get('access_token');
            var refresh_token = params.get('refresh_token');
            sessionStorage.setItem('access_token', access_token);
            sessionStorage.setItem('refresh_token', refresh_token);
            _this.authService.updateAuth({ access_token: access_token, refresh_token: refresh_token });
            _this.router.navigateByUrl('search');
        });
        //   }else {
        //     this.router.navigateByUrl('search')
        //   }
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/components/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            auth_service_1.AuthService,
            router_2.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;


/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<a href=\"/login\"> <button mat-raised-button color=\"primary\">Login</button></a>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/components/common/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n\n\n.link {\n    text-decoration: none;\n    color: black;\n    padding: 10px;\n}\n\n\n.btn {\n    font-size: 20px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row class=\"header\">\n    <a *ngIf=\"isLoggedIn\" routerLink=\"/search\" class=\"link\"><button mat-button class=\"btn\">Search</button></a>\n    <a *ngIf=\"isLoggedIn\" class=\"link\" routerLink=\"/create/playlist\"><button mat-button class=\"btn\">Create playlist</button></a>   \n    <a *ngIf=\"isLoggedIn\" class=\"link\" routerLink=\"/playlists/mine\"><button mat-button class=\"btn\">My playlists</button></a>      \n    <a *ngIf=\"!isLoggedIn\" class=\"link\" routerLink=\"/login\"><button mat-button class=\"btn\">Login</button></a>   \n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/common/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isLoggedIn = sessionStorage.getItem('access_token') ? sessionStorage.getItem('access_token') !== 'null' ? true : false : false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/components/playlist/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  \n  .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin: 20px;\n  }\n  \n  .btn {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n  }\n  \n  /* .example-container > * {\n    width: 50%;\n  } */\n  \n  .example-card {\n    width: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n</div> -->\n<app-header></app-header>\n<div class=\"container\">\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Create playlist</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput placeholder=\"Enter playlist title\" [formControl]=\"name\" required>\n        <mat-error *ngIf=\"name.invalid\">{{getNameErrorMessage()}}</mat-error>\n      </mat-form-field>\n    \n      <mat-form-field>\n        <textarea matInput placeholder=\"Enter playlist description\" [formControl]=\"description\" required></textarea>\n        <mat-error *ngIf=\"description.invalid\">{{getDescrErrorMessage()}}</mat-error>        \n      </mat-form-field>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"public\">Public</mat-checkbox>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button (click)=\"createPlaylist()\" class=\"btn\" mat-button>Create</button>\n  </mat-card-actions>\n</mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/playlist/create/create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(authService, playlistService, http, router) {
        var _this = this;
        this.authService = authService;
        this.playlistService = playlistService;
        this.http = http;
        this.router = router;
        this.name = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.description = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.public = false;
        this.access_token = this.authService.getAccessToken();
        this.authService.user
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.getNameErrorMessage = function () {
        return this.name.hasError('required') ? 'You must enter a value' : '';
    };
    CreateComponent.prototype.getDescrErrorMessage = function () {
        return this.description.hasError('required') ? 'You must enter a value' : '';
    };
    CreateComponent.prototype.createPlaylist = function () {
        var _this = this;
        console.log(this.access_token);
        this.http.post("https://api.spotify.com/v1/users/" + this.user.id + "/playlists", {
            "description": this.description.value,
            "public": this.public,
            "name": this.name.value
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.access_token,
            }
        }).subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/playlists/mine');
        });
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/components/playlist/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playlist/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            playlist_service_1.PlaylistService,
            http_1.HttpClient,
            router_1.Router])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ "../../../../../src/app/components/playlist/my-playlists/my-playlists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".playlists {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/my-playlists/my-playlists.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"playlists\">\n  <app-playlist-card *ngFor=\"let playlist of playlists\" [playlist]=\"playlist\"></app-playlist-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/playlist/my-playlists/my-playlists.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var MyPlaylistsComponent = /** @class */ (function () {
    function MyPlaylistsComponent(http, authServece, playlistService) {
        this.http = http;
        this.authServece = authServece;
        this.playlistService = playlistService;
        this.access_token = this.authServece.getAccessToken();
    }
    MyPlaylistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playlistService.getMyPlaylists().subscribe(function (data) {
            _this.playlistsObj = data;
            _this.playlists = _this.playlistsObj.items;
            console.log(_this.playlists);
        });
    };
    MyPlaylistsComponent = __decorate([
        core_1.Component({
            selector: 'app-my-playlists',
            template: __webpack_require__("../../../../../src/app/components/playlist/my-playlists/my-playlists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playlist/my-playlists/my-playlists.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService,
            playlist_service_1.PlaylistService])
    ], MyPlaylistsComponent);
    return MyPlaylistsComponent;
}());
exports.MyPlaylistsComponent = MyPlaylistsComponent;


/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist-card/playlist-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n    max-width: 200px;\n    margin: 10px\n  }\n\n  .btn {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist-card/playlist-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>{{playlist.name}}</mat-card-title>\n  </mat-card-header>\n  <img mat-card-image src=\"../../assets/img/playlist.jpg\" alt=\"No image\">\n  <mat-card-content>\n    <h3>{{playlist.owner.display_name}}</h3>\n  </mat-card-content>\n  <mat-card-actions>\n    <button class=\"btn\" (click)=\"showTracks(playlist.id, playlist.name)\" mat-button>TRACKS</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist-card/playlist-card.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var playlist_tracks_dialog_component_1 = __webpack_require__("../../../../../src/app/components/playlist/playlist-tracks-dialog/playlist-tracks-dialog.component.ts");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var PlaylistCardComponent = /** @class */ (function () {
    function PlaylistCardComponent(dialog, playlistService) {
        this.dialog = dialog;
        this.playlistService = playlistService;
    }
    PlaylistCardComponent.prototype.showTracks = function (id, name) {
        var _this = this;
        this.playlistService.getTracks(id).subscribe(function (tracks) {
            console.log(tracks);
            console.log(id);
            var dialogRef = _this.dialog.open(playlist_tracks_dialog_component_1.PlaylistTracksDialogComponent, {
                width: '400px',
                data: {
                    tracks: tracks,
                    name: name,
                    playlistId: id
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
            });
        });
    };
    PlaylistCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlaylistCardComponent.prototype, "playlist", void 0);
    PlaylistCardComponent = __decorate([
        core_1.Component({
            selector: 'app-playlist-card',
            template: __webpack_require__("../../../../../src/app/components/playlist/playlist-card/playlist-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playlist/playlist-card/playlist-card.component.css")]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            playlist_service_1.PlaylistService])
    ], PlaylistCardComponent);
    return PlaylistCardComponent;
}());
exports.PlaylistCardComponent = PlaylistCardComponent;


/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist-tracks-dialog/playlist-tracks-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttons {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center\n}\n\n.container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.name {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center\n}\n\ni:hover {\n    cursor:pointer\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist-tracks-dialog/playlist-tracks-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"name\" mat-dialog-title>{{name}}</h1>\n  <mat-divider></mat-divider>\n  <div mat-dialog-content>\n    <ol>\n      <li *ngFor=\"let song of songs; let i = index\">{{song.track.artists[0].name}} - {{song.track.name}}\n          <i (click)=\"remove(song.track.uri, i)\" class=\"material-icons md-24\">delete</i>\n     \n    </ol>\n  </div>\n  <mat-divider></mat-divider>\n  <div mat-dialog-actions class=\"buttons\">\n    <button mat-button (click)=\"loadMore()\">LOAD MORE</button>\n    <button mat-button (click)=\"close()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist-tracks-dialog/playlist-tracks-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var PlaylistTracksDialogComponent = /** @class */ (function () {
    function PlaylistTracksDialogComponent(dialogRef, playlistService, data) {
        this.dialogRef = dialogRef;
        this.playlistService = playlistService;
        this.data = data;
        this.songs = data.tracks.items;
        this.name = data.name;
        this.playlistId = data.playlistId;
        console.log(this.songs);
    }
    PlaylistTracksDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    PlaylistTracksDialogComponent.prototype.remove = function (uri, index) {
        var _this = this;
        this.playlistService.removeTrack(this.playlistId, uri, index).subscribe(function (data) {
            _this.close();
        });
    };
    PlaylistTracksDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-playlist-tracks-dialog',
            template: __webpack_require__("../../../../../src/app/components/playlist/playlist-tracks-dialog/playlist-tracks-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playlist/playlist-tracks-dialog/playlist-tracks-dialog.component.css")]
        }),
        __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            playlist_service_1.PlaylistService, Object])
    ], PlaylistTracksDialogComponent);
    return PlaylistTracksDialogComponent;
}());
exports.PlaylistTracksDialogComponent = PlaylistTracksDialogComponent;


/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".songs {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div>\n    <form (submit)=\"search()\" lass=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Search track\" [formControl]=\"songSearch\">\n        </mat-form-field>\n      <button type=\"submit\" mat-raised-button color=\"primary\">Search</button>        \n      </form>\n</div>\n\n\n<div class=\"songs\">\n  <app-song-card *ngFor=\"let song of songs\" [song]=\"song\" [playlists]=\"playlists\"></app-song-card>\n</div>\n<div *ngIf=\"songs\">\n  <button mat-raised-button color=\"primary\" (click)=\"loadMore()\">Load more</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, http, authService, playlistService) {
        this.route = route;
        this.http = http;
        this.authService = authService;
        this.playlistService = playlistService;
        this.songSearch = new forms_1.FormControl('');
        this.access_token = this.authService.getAccessToken();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playlistService.getMyPlaylists().subscribe(function (data) {
            _this.playlistsObj = data;
            _this.playlists = _this.playlistsObj.items;
        });
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.http.get("https://api.spotify.com/v1/search?query=" + this.songSearch.value + "&type=track,artist").subscribe(function (data) {
            _this.tracks = data['tracks'];
            _this.songs = _this.tracks.items;
            console.log(_this.songs);
        });
    };
    SearchComponent.prototype.loadMore = function () {
        var _this = this;
        this.http.get(this.tracks.next).subscribe(function (data) {
            _this.tracks = data['tracks'];
            _this.songs = _this.songs.concat(_this.tracks.items);
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            http_1.HttpClient,
            auth_service_1.AuthService,
            playlist_service_1.PlaylistService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "../../../../../src/app/components/simple-song-card/simple-song-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n    max-width: 250px;\n    margin: 10px\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/simple-song-card/simple-song-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"info\" class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>{{song.name}}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n      <p>Artists: <span *ngFor=\"let artist of song.artists\">{{artist.name}}, </span></p>\n    <app-preview *ngIf=\"song.preview_url\" [previewUrl]=\"song.preview_url\"></app-preview>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button [matMenuTriggerFor]=\"menu\">ADD TO PLAYLIST</button>\n    <mat-menu #menu=\"matMenu\">\n      <button *ngFor=\"let playlist of playlists\" (click)=\"addToPlaylist(playlist.id, song.uri)\" mat-menu-item>{{playlist.name}}</button>\n    </mat-menu>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/simple-song-card/simple-song-card.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var SimpleSongCardComponent = /** @class */ (function () {
    function SimpleSongCardComponent(playlistService) {
        this.playlistService = playlistService;
    }
    SimpleSongCardComponent.prototype.ngOnInit = function () {
    };
    SimpleSongCardComponent.prototype.addToPlaylist = function (playlistId, songUri) {
        this.playlistService.addSongToPlaylist(playlistId, songUri).subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SimpleSongCardComponent.prototype, "song", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SimpleSongCardComponent.prototype, "playlists", void 0);
    SimpleSongCardComponent = __decorate([
        core_1.Component({
            selector: 'app-simple-song-card',
            template: __webpack_require__("../../../../../src/app/components/simple-song-card/simple-song-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/simple-song-card/simple-song-card.component.css")]
        }),
        __metadata("design:paramtypes", [playlist_service_1.PlaylistService])
    ], SimpleSongCardComponent);
    return SimpleSongCardComponent;
}());
exports.SimpleSongCardComponent = SimpleSongCardComponent;


/***/ }),

/***/ "../../../../../src/app/components/song-card/song-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n    max-width: 250px;\n    margin: 10px\n  }\n  \n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/song-card/song-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n  <div class=\"info\">\n    <img class=\"img\" src=\"{{song.album.images[0].url}}\">\n  </div>\n  <div class=\"info\">\n    <h3>{{song.name}}</h3>\n    <a routerLink=\"/albums/{{song.album.id}}\"><p>Album: {{song.album.name}}</p></a>\n    <p>Artists: <span *ngFor=\"let artist of song.artists\">{{artist.name}}, </span></p>\n  </div>\n</div> -->\n<mat-card class=\"info\" class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{song.name}}</mat-card-title>\n       <mat-card-subtitle><a routerLink=\"/albums/{{song.album.id}}\">Album: {{song.album.name}}</a></mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{song.album.images[0].url}}\" alt=\"No image\">\n    <mat-card-content>\n        <p>Artists: <span *ngFor=\"let artist of song.artists\">{{artist.name}}, </span></p>\n      <app-preview *ngIf=\"song.preview_url\" [previewUrl]=\"song.preview_url\"></app-preview>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button [matMenuTriggerFor]=\"menu\">ADD TO PLAYLIST</button>\n      <mat-menu #menu=\"matMenu\">\n        <button *ngFor=\"let playlist of playlists\" (click)=\"addToPlaylist(playlist.id, song.uri)\" mat-menu-item>{{playlist.name}}</button>\n      </mat-menu>\n    </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/song-card/song-card.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var core_2 = __webpack_require__("../../../core/esm5/core.js");
var playlist_service_1 = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var SongCardComponent = /** @class */ (function () {
    function SongCardComponent(playlistService) {
        this.playlistService = playlistService;
    }
    SongCardComponent.prototype.ngOnInit = function () {
    };
    SongCardComponent.prototype.addToPlaylist = function (playlistId, songUri) {
        this.playlistService.addSongToPlaylist(playlistId, songUri).subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        core_2.Input(),
        __metadata("design:type", Object)
    ], SongCardComponent.prototype, "song", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", Object)
    ], SongCardComponent.prototype, "playlists", void 0);
    SongCardComponent = __decorate([
        core_1.Component({
            selector: 'app-song-card',
            template: __webpack_require__("../../../../../src/app/components/song-card/song-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/song-card/song-card.component.css")]
        }),
        __metadata("design:paramtypes", [playlist_service_1.PlaylistService])
    ], SongCardComponent);
    return SongCardComponent;
}());
exports.SongCardComponent = SongCardComponent;


/***/ }),

/***/ "../../../../../src/app/guards/isLogged.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var IsLoggedGuard = /** @class */ (function () {
    function IsLoggedGuard(router) {
        this.router = router;
        this.isLoggedIn = false;
    }
    IsLoggedGuard.prototype.canActivate = function (route, state) {
        return this.checkIsLoggedIn(state.url);
    };
    IsLoggedGuard.prototype.checkIsLoggedIn = function (url) {
        if (!sessionStorage.getItem('access_token') || sessionStorage.getItem('access_token') === 'null') {
            this.router.navigateByUrl('login');
            return false;
        }
        return true;
    };
    IsLoggedGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], IsLoggedGuard);
    return IsLoggedGuard;
}());
exports.IsLoggedGuard = IsLoggedGuard;


/***/ }),

/***/ "../../../../../src/app/interceptors/expired-token.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var ExpiredTokenInterceptor = /** @class */ (function () {
    function ExpiredTokenInterceptor(router, http) {
        this.router = router;
        this.http = http;
        this.isRefreshing = false;
        this.token = new BehaviorSubject_1.BehaviorSubject(null);
    }
    ExpiredTokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(this.addToken(req, sessionStorage.getItem('access_token')))
            .catch(function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                return _this.handle401(req, next);
            }
            else {
                return Observable_1.Observable.throw(error);
            }
        });
    };
    ExpiredTokenInterceptor.prototype.addToken = function (req, token) {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
    };
    ExpiredTokenInterceptor.prototype.handle401 = function (req, next) {
        var _this = this;
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.token.next(null);
            return this.http.get("/refresh_token?refresh_token=" + sessionStorage.getItem('refresh_token'))
                .switchMap(function (data) {
                console.log('got new token', data);
                sessionStorage.setItem('access_token', data.access_token);
                return next.handle(_this.addToken(req, data.access_token));
            })
                .finally(function () {
                _this.isRefreshing = false;
            });
        }
    };
    ExpiredTokenInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            http_2.HttpClient])
    ], ExpiredTokenInterceptor);
    return ExpiredTokenInterceptor;
}());
exports.ExpiredTokenInterceptor = ExpiredTokenInterceptor;


/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.authSource = new BehaviorSubject_1.BehaviorSubject({});
        this.authRecieved$ = this.authSource.asObservable();
        this.user = new BehaviorSubject_1.BehaviorSubject({});
        this.hasUser = false;
        this.accessToken = '';
        this.userId = "";
        this.authRecieved$.subscribe(function (data) {
            _this.accessToken = data.access_token;
        });
    }
    ;
    AuthService.prototype.getAccessToken = function () {
        if (this.accessToken) {
            return this.accessToken;
        }
        if (this.userId) {
            return this.userId;
        }
        this.accessToken = sessionStorage.getItem('access_token');
        this.getUserInfo();
        return sessionStorage.getItem('access_token');
    };
    AuthService.prototype.updateAuth = function (data) {
        this.authSource.next(data);
        this.getUserInfo();
    };
    AuthService.prototype.getUserInfo = function () {
        var _this = this;
        var options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + this.getAccessToken() },
            json: true
        };
        this.http.get(options.url, { headers: options.headers })
            .subscribe(function (data) {
            _this.userId = data['id'];
            _this.user.next(data);
        });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/services/playlist.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var PlaylistService = /** @class */ (function () {
    function PlaylistService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.token = this.authService.getAccessToken();
        this.authService.user
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    }
    ;
    PlaylistService.prototype.createPlaylist = function (userId, body) {
        return this.http.post("https://api.spotify.com/v1/users/" + userId + "/playlists", {
            "description": body.description,
            "public": false,
            "name": body.name
        });
    };
    PlaylistService.prototype.getMyPlaylists = function () {
        return this.http.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        });
    };
    PlaylistService.prototype.addSongToPlaylist = function (playlistId, songUri) {
        return this.http.post("https://api.spotify.com/v1/users/" + this.user.id + "/playlists/" + playlistId + "/tracks?uris=" + songUri, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        });
    };
    PlaylistService.prototype.getTracks = function (playlistId) {
        return this.http.get("https://api.spotify.com/v1/users/" + this.user.id + "/playlists/" + playlistId + "/tracks", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        });
    };
    PlaylistService.prototype.removeTrack = function (playlistId, trackUi, index) {
        console.log(index);
        var data = {
            tracks: [
                {
                    uri: trackUi,
                    positions: [index]
                }
            ]
        };
        return this.http.request('delete', "https://api.spotify.com/v1/users/" + this.user.id + "/playlists/" + playlistId + "/tracks", {
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            },
        });
    };
    PlaylistService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService])
    ], PlaylistService);
    return PlaylistService;
}());
exports.PlaylistService = PlaylistService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map