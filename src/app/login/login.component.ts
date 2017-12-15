import {Component, OnInit, ViewContainerRef} from '@angular/core';

import { Router } from '@angular/router';
import { TdDialogService, TdLoadingService} from '@covalent/core';
import { GlobalsService} from '../../services/service-globals/globals.service';

@Component({
  selector: 'app-login',
  providers: [ GlobalsService ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
              private _loadingService: TdLoadingService,
              private _dialog: TdDialogService,
              private _viewContainerRef: ViewContainerRef,
              private _globals: GlobalsService
  ) {
    this.is_logged_in = this._globals.is_user_admin;
    console.log("is_logged_in", this.is_logged_in);
  }

  ngOnInit() {
    this.is_logged_in = this._globals.is_user_admin;
  }

  is_logged_in : boolean = true;
  hide_forgot_password : boolean = true;
  is_user_admin: boolean = false;
  Login(u_id, password): void {
    console.log("Login", u_id, password);
    this.hide_forgot_password = false;

    this._loadingService.register();
    setTimeout(() => {

      this.is_logged_in = true;
      this.is_user_admin = this._globals.is_user_admin;
      this._router.navigate(['/u/i/log-in-complete']);
      this._loadingService.resolve();
    }, 2000);

  }

  Logout(): void {
    this.hide_forgot_password = true;
    this.is_logged_in = false;
    this.is_user_admin = false;

    this._router.navigate(['/u/o/']);
  }

  MyProfile(): void {
    this._router.navigate(['/u/i/my-profile'])
  }
  GetDiscussionList():void {
    this._router.navigate(['/u/i/discussions-list'])
  }
  GetBlogList():void {
    this._router.navigate(['/u/i/blogs-list'])
  }
  GetUserList():void{
    this._router.navigate(['/u/i/users-list'])
  }
  GetQuestionList():void {
    this._router.navigate(['/u/i/questions-of-interest'])
  }
  GetTagsList():void {
    this._router.navigate(['/u/i/tags-list'])
  }

  ManageTags(operation, tag, data): void {
    this._router.navigate(['/u/i/tags-manage'])
  }

}
