"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var core_2 = require("@covalent/core");
var users_component_1 = require("./users.component");
exports.UsersComponent = users_component_1.UsersComponent;
var form_component_1 = require("./form/form.component");
exports.UsersFormComponent = form_component_1.UsersFormComponent;
var users_routes_1 = require("./users.routes");
var user_service_1 = require("./services/user.service");
exports.UserService = user_service_1.UserService;
exports.USER_PROVIDER = user_service_1.USER_PROVIDER;
exports.USERS_API = user_service_1.USERS_API;
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        declarations: [
            users_component_1.UsersComponent,
            form_component_1.UsersFormComponent,
        ],
        imports: [
            // angular modules
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            // material modules
            material_1.MatSnackBarModule,
            material_1.MatIconModule,
            material_1.MatListModule,
            material_1.MatTooltipModule,
            material_1.MatCardModule,
            material_1.MatButtonModule,
            material_1.MatToolbarModule,
            material_1.MatInputModule,
            material_1.MatSlideToggleModule,
            material_1.MatMenuModule,
            // covalent modules
            core_2.CovalentLoadingModule,
            core_2.CovalentDialogsModule,
            core_2.CovalentMediaModule,
            core_2.CovalentLayoutModule,
            core_2.CovalentSearchModule,
            core_2.CovalentCommonModule,
            // extra
            users_routes_1.userRoutes,
        ],
        providers: [
            { provide: user_service_1.USERS_API, useValue: '' },
            user_service_1.USER_PROVIDER,
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;
