import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { GlobalsService } from '../../services/service-globals/globals.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [ GlobalsService]
})
export class QuestionComponent implements OnInit {

  q_id: number;
  question : any;
  constructor(private _router:Router,
              private _activeRoute: ActivatedRoute,
              private _globals : GlobalsService) { }

  ngOnInit() {
    this._activeRoute.params.subscribe(params => this.q_id = +params['q_id']);
    this._globals.GetQuestionByIdFilter(this.q_id).subscribe(data => {
      console.log("loaded question", data);
      this.question = data[0];
    });
  }

  GotoTagPage(tag:string) {
    var url = "/u/i/tags-main/tags-filter-search/" + tag;
    this._router.navigate([url])
  }




}
