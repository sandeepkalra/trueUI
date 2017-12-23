import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/service-globals/globals.service';

@Component({
  selector: 'app-questions-main',
  templateUrl: './questions-main.component.html',
  styleUrls: ['./questions-main.component.css'],
  providers: [ GlobalsService]
})
export class QuestionsMainComponent implements OnInit {

  constructor(private _globals: GlobalsService) { }

  ngOnInit() {
  }

}
