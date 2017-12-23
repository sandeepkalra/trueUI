import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../services/service-globals/globals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [GlobalsService]
})
export class UsersListComponent implements OnInit {

  users_list:any[] = [];
  constructor(private _router: Router,
              private _activeRoute : ActivatedRoute,
              private _globals: GlobalsService) { }

  ngOnInit() {
    this._globals.GetUsersList().subscribe(data=> {
      this.users_list = data
      console.log("list", data)
    })

  }


}
