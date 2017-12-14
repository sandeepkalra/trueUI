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
import {SignupCompleteComponent} from './signup-complete/signup-complete.component';
import {UComponent} from './u/u.component';
import {IComponent} from './i/i.component';
import {OComponent} from './o/o.component';

const routes: Routes = [
  /*
   u = undefined user. We normally steer him to o
   o = outsider ... who hasn't yet signed up [ default to not-logged-in]
   i = insider ... who has a login/password [ default to log-in-complete]
   */
  { path: 'u', component: UComponent , children: [
      { path: 'i', component: IComponent , children: [
          { path: 'log-in-complete', component: LogInCompleteComponent},
          { path: 'signup-complete', component: SignupCompleteComponent },
          { path: '',             redirectTo: '/u/i/log-in-complete',     pathMatch: 'prefix'  },
          { path: '**',         component: LogInCompleteComponent  }
        ]},
      { path: 'o', component: OComponent , children: [
          { path: 'not-logged-in',component: NotLoggedInComponent  },
          { path: 'forgot-password', component: ForgotPasswordComponent },
          { path: '',             redirectTo: '/u/o/not-logged-in',     pathMatch: 'prefix'  },
          { path: '**',           component: NotLoggedInComponent  }
        ] },
      { path: '',             redirectTo: '/u/o/',     pathMatch: 'prefix'  },
      { path: '**',          component: OComponent  },
    ],
  },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component : PrivacyPolicyComponent },
  { path: '',             redirectTo: 'u',     pathMatch: 'full'  },
  { path: '**',           component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true /* True for debugging */, useHash: false }),
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
