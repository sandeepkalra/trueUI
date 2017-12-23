import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/service-globals/globals.service';

/* IN */

@Component({
  selector: 'app-i',
  templateUrl: './i.component.html',
  styleUrls: ['./i.component.css'],
  providers: [ GlobalsService]
})
export class IComponent implements OnInit {

  constructor(private _globals: GlobalsService) { }

  ngOnInit() {
  }

}
