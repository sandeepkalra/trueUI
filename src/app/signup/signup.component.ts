import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {TdDialogService} from '@covalent/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _dialog: TdDialogService,
              private _route : Router,
              private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }
  Signup(uid, passwd, confpwd, dob, residence) {
    console.log("Signup", uid, passwd, confpwd, dob, residence);
    if ((uid == undefined)
      || (passwd == undefined)
      || (confpwd == undefined)
      || (dob == undefined)
      || (residence == undefined)
      || ( dob.split('-',3) [0] == undefined)
      || ( dob.split('-',3) [1] == undefined)
      || ( dob.split('-',3) [2] == undefined)
    )
    {
      this._dialog.openAlert({
        title: "Signup Incomplete",
        message: "All fields are madatory.",
        closeButton: 'CLOSE'
      });
      return
    }

    /* Check under age */
    var date_splits = dob.split('-',3);
    var today_year = new Date().getFullYear()
    var today_month = new Date().getMonth()
    var today_day = new Date().getDay()

    console.log("date splits : ", date_splits[0], date_splits[1] , date_splits[2]);
    var age_in_years : number = 1;
    age_in_years += (today_year - date_splits[0]);
    age_in_years += (today_month - date_splits[1])/12;
    age_in_years += (today_day - date_splits[2])/30;
    console.log("age in years:", age_in_years);

    if (age_in_years < 18 || age_in_years > 105) {
      this._dialog.openAlert({
        title: "Underage",
        message: "Sorry. You must be over 18 & less than 105 to signup.",
        closeButton: 'CLOSE'
      });
    } else  if (passwd != confpwd) {
      this._dialog.openAlert({
        title: "Password Mismatch",
        message: "The password does not match.",
        closeButton: 'CLOSE'
      });
    } else {
      this._dialog.openAlert({
        title: "Thanks for Signup.",
        message: "We have sent you email to confirm your identity. Please click on the link to complete the signup",
      });
      this._route.navigate(['/u/i/signup-complete'])
    }


  }


}
