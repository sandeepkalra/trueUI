"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var users_component_1 = require("./users.component");
var form_component_1 = require("./form/form.component");
var routes = [{
        path: 'users',
        children: [{
                path: '',
                component: users_component_1.UsersComponent,
            }, {
                path: 'add',
                component: form_component_1.UsersFormComponent,
            }, {
                path: ':id/edit',
                component: form_component_1.UsersFormComponent,
            }],
    }];
exports.userRoutes = router_1.RouterModule.forChild(routes);
