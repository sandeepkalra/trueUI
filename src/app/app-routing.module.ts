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
import { SignupCompleteComponent } from './signup-complete/signup-complete.component';
import { UComponent } from './u/u.component';
import { IComponent } from './i/i.component';
import { OComponent } from './o/o.component';
import { UsersListComponent } from './users-list/users-list.component';
import { QuestionsOfInterestComponent } from './questions-of-interest/questions-of-interest.component';
import { QuestionsLatestComponent } from './questions-latest/questions-latest.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsPopularComponent } from './questions-popular/questions-popular.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { FooterComponent } from './footer/footer.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { DiscussionsListComponent } from './discussions-list/discussions-list.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { TagsManageComponent } from './tags-manage/tags-manage.component';
import { QuestionsMainComponent } from './questions-main/questions-main.component';
import { TagsMainComponent } from './tags-main/tags-main.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { BlogsMainComponent } from './blogs-main/blogs-main.component';
import { DiscussionsMainComponent } from './discussions-main/discussions-main.component';
import { MyDashboardMainComponent } from './my-dashboard-main/my-dashboard-main.component';
import { MyDashboardProfileComponent } from './my-dashboard-profile/my-dashboard-profile.component';
import { MyDashboardWalletComponent } from './my-dashboard-wallet/my-dashboard-wallet.component';
import { MyMainComponent } from './my-main/my-main.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {FaqsComponent} from './faqs/faqs.component';
import {QuestionsNewComponent} from './questions-new/questions-new.component';
import {QuestionsSearchComponent} from './questions-search/questions-search.component';
import {QuestionsFilterSearchComponent} from './questions-filter-search/questions-filter-search.component';
import {TagsSearchComponent} from './tags-search/tags-search.component';
import {QuestionComponent} from './question/question.component';
import {AnswerListComponent} from './answer-list/answer-list.component';
import {AnswerAddComponent} from './answer-add/answer-add.component';
import {CommentAddComponent} from './comment-add/comment-add.component';
import {CommentListComponent} from './comment-list/comment-list.component';

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
          { path: 'tags-list' , component: TagsListComponent },
          { path: 'users-main', component: UsersMainComponent , children: [
              { path: 'users-list', component: UsersListComponent },
              { path: 'user-profile', component: UserProfileComponent },
              { path: '',  redirectTo: '/u/i/users-main/users-list',     pathMatch: 'prefix'  },
              { path: '**',         component: UsersListComponent  }
            ]},
          { path : 'questions-main', component: QuestionsMainComponent , children : [
              { path: 'question' , component: QuestionComponent },
              { path: 'questions-latest' , component: QuestionsLatestComponent },
              { path: 'questions-list' , component: QuestionsListComponent },
              { path: 'questions-popular', component : QuestionsPopularComponent },
              { path: 'questions-of-interest' , component: QuestionsOfInterestComponent },
              { path: 'questions-search', component: QuestionsSearchComponent },
              { path: 'questions-filter-search', component: QuestionsFilterSearchComponent },
              { path: 'questions-new' , component: QuestionsNewComponent , children: [
                  { path: 'comment-list' , component: CommentListComponent },
                  { path: 'comment-add' , component: CommentAddComponent },
                  { path: 'answer-list' , component: AnswerListComponent },
                  { path: 'answer-add' , component: AnswerAddComponent },
                  { path: '',  redirectTo: '/u/i/questions-main/questions-new/answer-list',     pathMatch: 'prefix'  },
                  { path: '**',         component: AnswerListComponent  }
                ]
              },
              { path: '',  redirectTo: '/u/i/questions-main/questions-of-interest',     pathMatch: 'prefix'  },
              { path: '**',         component: QuestionsOfInterestComponent  }
            ]},
          { path: 'tags-main', component: TagsMainComponent, children: [
              { path: 'tags-manage', component: TagsManageComponent},
              { path: 'tags-list', component: TagsListComponent },
              { path: 'tags-search', component: TagsSearchComponent },
              { path: '',  redirectTo: '/u/i/tags-main/tags-list',     pathMatch: 'prefix'  },
              { path: '**',         component: TagsListComponent  }
            ]},
          { path: 'blogs-main', component: BlogsMainComponent, children:[
              { path: 'blogs-list' , component : BlogsListComponent },
              { path: '',  redirectTo: '/u/i/blogs-main/blogs-list',     pathMatch: 'prefix'  },
              { path: '**',         component: BlogsListComponent  }
          ]},

          { path: 'discussions-main', component: DiscussionsMainComponent, children: [
              { path: 'discussions-list' , component : DiscussionsListComponent },
              { path: '',  redirectTo: '/u/i/discussions-main/discussions-list',     pathMatch: 'prefix'  },
              { path: '**',         component: DiscussionsListComponent  }
          ]},
          { path: 'my-profile', component: MyMainComponent },
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
  { path: 'faqs', component: FaqsComponent },
  { path: 'privacy-policy', component : PrivacyPolicyComponent },
  { path: '',             redirectTo: 'u',     pathMatch: 'full'  },
  { path: '**',           component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: false /* True for debugging */, useHash: false }),
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
  TermsAndConditionsComponent,
  FooterComponent,
  HeaderComponent,
  SignupCompleteComponent,
  OComponent,
  UComponent,
  IComponent,
  QuestionsOfInterestComponent,
  QuestionsPopularComponent,
  QuestionsLatestComponent,
  TagsListComponent,
  UsersListComponent,
  BlogsListComponent,
  DiscussionsListComponent,
  QuestionsListComponent,
  TagsManageComponent,
  QuestionsMainComponent,
  TagsMainComponent,
  UsersMainComponent,
  BlogsMainComponent,
  DiscussionsMainComponent,
  MyDashboardMainComponent,
  MyDashboardProfileComponent,
  MyDashboardWalletComponent,
  MyMainComponent,
  UserProfileComponent,
  FaqsComponent,
  QuestionsNewComponent,
  TagsSearchComponent,
  QuestionsSearchComponent,
  QuestionsFilterSearchComponent,
  QuestionComponent,

  AnswerAddComponent,
  AnswerListComponent,
  CommentAddComponent,
  CommentListComponent,
];
