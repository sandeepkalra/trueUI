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
  is_logged_in = false;
  hide_forgot_password : boolean = true;
  is_user_admin: boolean = false;

  constructor(private _router: Router,
              private _loadingService: TdLoadingService,
              private _dialog: TdDialogService,
              private _viewContainerRef: ViewContainerRef,
              private _globals: GlobalsService) {}


  ngOnInit() {

  }

  Login(u_id, password): void {
    console.log("Login", u_id, password);

    this._globals.IsUserLoggedIn().subscribe(data => {

      this.is_logged_in = data;
    });
    console.log(" is logged in = ",  this.is_logged_in);
    this._globals.IsUserAdmin().subscribe(data=> {
      console.log("is user login", data);
      this.is_user_admin = data;
    });

    this.hide_forgot_password = false;
    this._loadingService.register();

    setTimeout(() => {
      this._router.navigate(['/u/i']);
      this._loadingService.resolve();
    }, 2000);

  }

  Logout(): void {
    this.hide_forgot_password = true;
    this.is_logged_in = false;
    this.is_user_admin = false;
    this._router.navigate(['/u/o']);
  }

  MyProfile(): void {
    this._router.navigate(['/u/i/my-profile'])
  }
  GetDiscussionList():void {
    this._router.navigate(['/u/i/discussions-main'])
  }
  GetBlogList():void {
    this._router.navigate(['/u/i/blogs-main'])
  }
  GetUserList():void{
    this._router.navigate(['/u/i/users-main'])
  }
  GetQuestionList():void {
    this._router.navigate(['/u/i/questions-main'])
  }
  GetTagsList():void {
    this._router.navigate(['/u/i/tags-main/tags-list'])
  }

  ManageTags(operation, tag, data): void {
    this._router.navigate(['/u/i/tags-main/tags-manage'])
  }

}
