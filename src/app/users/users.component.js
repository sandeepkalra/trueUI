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
var UsersComponent = (function () {
    function UsersComponent(_titleService, _loadingService, _dialogService, _snackBarService, _userService, _changeDetectorRef, media) {
        this._titleService = _titleService;
        this._loadingService = _loadingService;
        this._dialogService = _dialogService;
        this._snackBarService = _snackBarService;
        this._userService = _userService;
        this._changeDetectorRef = _changeDetectorRef;
        this.media = media;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this._titleService.setTitle('Covalent Users');
        this.load();
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        // broadcast to all listener observables when loading the page
        this.media.broadcast();
        // force a new change detection cycle since change detections
        // have finished when `ngAfterViewInit` is executed
        this._changeDetectorRef.detectChanges();
    };
    UsersComponent.prototype.filterUsers = function (displayName) {
        if (displayName === void 0) { displayName = ''; }
        this.filteredUsers = this.users.filter(function (user) {
            return user.displayName.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
        });
    };
    UsersComponent.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, 4, 5]);
                        this._loadingService.register('users.list');
                        _a = this;
                        return [4 /*yield*/, this._userService.query().toPromise()];
                    case 1:
                        _a.users = _c.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        error_1 = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this._userService.staticQuery().toPromise()];
                    case 3:
                        _b.users = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.filteredUsers = Object.assign([], this.users);
                        this._loadingService.resolve('users.list');
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.delete = function (id) {
        var _this = this;
        this._dialogService
            .openConfirm({ message: 'Are you sure you want to delete this user?' })
            .afterClosed().toPromise().then(function (confirm) {
            if (confirm) {
                _this._delete(id);
            }
        });
    };
    UsersComponent.prototype._delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        this._loadingService.register('users.list');
                        return [4 /*yield*/, this._userService.delete(id).toPromise()];
                    case 1:
                        _a.sent();
                        this.users = this.users.filter(function (user) {
                            return user.id !== id;
                        });
                        this.filteredUsers = this.filteredUsers.filter(function (user) {
                            return user.id !== id;
                        });
                        this._snackBarService.open('User Deleted', 'Ok');
                        return [3 /*break*/, 4];
                    case 2:
                        error_2 = _a.sent();
                        this._dialogService.openAlert({ message: 'There was an error trying to delete the user' });
                        return [3 /*break*/, 4];
                    case 3:
                        this._loadingService.resolve('users.list');
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'qs-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.scss'],
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
