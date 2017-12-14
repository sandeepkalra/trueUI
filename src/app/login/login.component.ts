import {Component, OnInit, ViewContainerRef} from '@angular/core';

import { Router } from '@angular/router';
import { TdDialogService, TdLoadingService} from '@covalent/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
              private _loadingService: TdLoadingService,
              private _dialog: TdDialogService,
              private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  is_logged_in : boolean = false;
  hide_forgot_password : boolean = true;

  Login(u_id, password): void {
    console.log("Login", u_id, password);
    this.hide_forgot_password = false;

    this._loadingService.register();
    setTimeout(() => {

      this.is_logged_in = true;
      this._router.navigate(['/u/i/log-in-complete']);
      this._loadingService.resolve();
    }, 2000);

  }

  Logout(): void {
    this.hide_forgot_password = true;
    this.is_logged_in = false;
    this._dialog.openAlert({
      message: 'The dialog service.',
      disableClose: false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Logout', //OPTIONAL, hides if not provided
      closeButton: 'CLOSE', //OPTIONAL, defaults to 'CLOSE'
    });

  }

}
