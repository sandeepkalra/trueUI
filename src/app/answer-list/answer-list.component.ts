import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../services/service-globals/globals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
  providers: [GlobalsService]
})
export class AnswerListComponent implements OnInit {

  Answers: any[] = [];

  q_id: number = 0;
  constructor(private  _globals : GlobalsService,
              private _router : Router,
              private _activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activeRoute.params.subscribe(params => this.q_id = +params['q_id'])
  }

  GetAnswersForQuestion(q_id:number, user_id: number) {
    this._globals.GetAnswersForQuestion(q_id , user_id).subscribe(data =>
    {
      console.log("answers list is ", data);
    });
  }


}
