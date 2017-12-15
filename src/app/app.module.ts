import { NgModule } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { AppComponent } from './app.component';
import { routedComponents, AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import {RequestInterceptor} from '../config/interceptors/request.interceptor';

import { CovalentLayoutModule,
  CovalentStepsModule,
  CovalentSearchModule,
  CovalentDialogsModule,
  CovalentMenuModule,
  CovalentNotificationsModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentCommonModule,
  CovalentMessageModule
  /*, any other modules */
} from '@covalent/core';
//
// const httpInterceptorProviders: Type<any>[] = [
//   RequestInterceptor,
// ];
// import { USER_PROVIDER, USERS_API } from './users';
import {
  MatSnackBarModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatDatepickerModule,
} from '@angular/material';

import { MOCK_API } from '../config/api.config';
export function getAPI(): string {
  return MOCK_API;
}

// (optional) Additional Covalent Modules imports
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FaqsComponent } from './faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,



  ], // directives, components, and pipes owned by this NgModule
  imports: [
    AppRoutingModule,
    /* Angular */
    BrowserModule,
    BrowserAnimationsModule,

    /* Covalent  Dependencies*/
    SharedModule,
    CovalentLayoutModule,
    CovalentSearchModule,
    CovalentDialogsModule,
    CovalentStepsModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    CovalentDynamicFormsModule,
    CovalentHighlightModule,
    CovalentMediaModule,
    CovalentCommonModule,
    CovalentMarkdownModule,
    CovalentLoadingModule,
    CovalentDynamicFormsModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentMessageModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),

    /* Material Design */
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatMenuModule ,
    MatDatepickerModule,

  ], // modules needed to run this module
  providers: [

  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
