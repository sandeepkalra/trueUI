import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../services/service-globals/globals.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-questions-new',
  templateUrl: './questions-new.component.html',
  styleUrls: ['./questions-new.component.css'],
  providers: [GlobalsService]
})
export class QuestionsNewComponent implements OnInit {

  tags_list: any[] = [];
  tag_name_list: string[] = [];
  selected_tag_list: string [] = [];
  constructor(private _globals : GlobalsService) { }


  ngOnInit() {
    this._globals.GetTagList("localhost:4200", "/get/tag_list", {}).subscribe(
      data => {
        this.tags_list = data;
        for(var i = 0; i <  this.tags_list.length; ++i) {
          this.tag_name_list.push(data[i].title);
        }
      }
      );

  }

  AddTag(s: string) : void {
    if (s != null) {
      if (!this.selected_tag_list.includes(s)) {
        this.selected_tag_list.push(s)
      }
    }
  }

  RemoveTag(s: string) : void {
    for(var i = 0; i <  this.selected_tag_list.length; ++i) {
      if (this.selected_tag_list[i] == s) {
        this.selected_tag_list.splice(i, 1)
        return
      }
    }
  }

}
