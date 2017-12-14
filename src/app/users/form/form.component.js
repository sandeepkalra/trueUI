"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var UsersFormComponent = (function () {
    function UsersFormComponent(_userService, _router, _route, _snackBarService, _loadingService, _dialogService) {
        this._userService = _userService;
        this._router = _router;
        this._route = _route;
        this._snackBarService = _snackBarService;
        this._loadingService = _loadingService;
        this._dialogService = _dialogService;
    }
    UsersFormComponent.prototype.goBack = function () {
        this._router.navigate(['/users']);
    };
    UsersFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.url.subscribe(function (url) {
            _this.action = (url.length > 1 ? url[1].path : 'add');
        });
        this._route.params.subscribe(function (params) {
            _this.id = params.id;
            if (_this.id) {
                _this.load();
            }
        });
    };
    UsersFormComponent.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        this._loadingService.register('user.form');
                        return [4 /*yield*/, this._userService.get(this.id).toPromise()];
                    case 1:
                        user = _a.sent();
                        this.displayName = user.displayName;
                        this.email = user.email;
                        this.admin = (user.siteAdmin === 1 ? true : false);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        this._dialogService.openAlert({ message: 'There was an error loading the user' });
                        return [3 /*break*/, 4];
                    case 3:
                        this._loadingService.resolve('user.form');
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersFormComponent.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var siteAdmin, now, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, 6, 7]);
                        this._loadingService.register('user.form');
                        siteAdmin = (this.admin ? 1 : 0);
                        now = new Date();
                        this.user = {
                            displayName: this.displayName,
                            email: this.email,
                            siteAdmin: siteAdmin,
                            id: this.id || this.displayName.replace(/\s+/g, '.'),
                            created: now,
                            lastAccess: now,
                        };
                        if (!(this.action === 'add')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._userService.create(this.user).toPromise()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this._userService.update(this.id, this.user).toPromise()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this._snackBarService.open('User Saved', 'Ok');
                        this.goBack();
                        return [3 /*break*/, 7];
                    case 5:
                        error_2 = _a.sent();
                        this._dialogService.openAlert({ message: 'There was an error saving the user' });
                        return [3 /*break*/, 7];
                    case 6:
                        this._loadingService.resolve('user.form');
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return UsersFormComponent;
}());
UsersFormComponent = __decorate([
    core_1.Component({
        selector: 'qs-user-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.scss'],
    })
], UsersFormComponent);
exports.UsersFormComponent = UsersFormComponent;
