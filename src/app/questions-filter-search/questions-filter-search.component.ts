import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalsService } from '../../services/service-globals/globals.service';

@Component({
  selector: 'app-tags-filter-search',
  templateUrl: './questions-filter-search.component.html',
  styleUrls: ['./questions-filter-search.component.css'],
  providers:[GlobalsService],
})
export class QuestionsFilterSearchComponent implements OnInit {

  filtered_questions_list: any[];
  tag_details: any;
  constructor(private _router: Router,
              private _activeRoute: ActivatedRoute,
              private _globals: GlobalsService){

  }
  ngOnInit() {
     var tag_param:string;
      this._activeRoute.params.subscribe(params => {
       tag_param = params['tag'];
     });


    this._globals.GetTagDetails(tag_param).subscribe(
      data => {this.tag_details = data;}
    );

    this._globals.GetQuestionByTagFilter([tag_param]).subscribe(
        data => {this.filtered_questions_list = data;}
      );

    console.log("filtered tag", this.tag_details);
    console.log("This filtered question list ", this.filtered_questions_list)
  }


  GotoTagPage(tag:string) {
    this._globals.GetTagDetails(tag).subscribe(
      data => {this.tag_details = data;}
    );

    this._globals.GetQuestionByTagFilter([tag]).subscribe(
      data => {this.filtered_questions_list = data;}
    );
  }

  AddNewQuestion() {
    this._router.navigate(['/u/i/questions-main/questions-new'])
  }


  SubmitAnswerToQuestion(question:any){
    var url = '/u/i/questions-main/question/' + question.q_id;
    this._router.navigate([url])
  }
}
