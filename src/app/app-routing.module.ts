import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogInCompleteComponent } from './log-in-complete/log-in-complete.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotLoggedInComponent } from './not-logged-in/not-logged-in.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  { path: 'login',        component: LoginComponent  },
  { path: 'signup',       component: SignupComponent  } ,
  { path: 'not-logged-in',component: NotLoggedInComponent  },
  { path: '',             redirectTo: '/not-logged-in',     pathMatch: 'full'  },
  { path: '**',           component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true, useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
  LoginComponent,
  SignupComponent,
  ForgotPasswordComponent,
  LogInCompleteComponent,
  NotFoundComponent,
  NotLoggedInComponent,
  PrivacyPolicyComponent,
  TermsAndConditionsComponent
];
