import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../services/service-globals/globals.service';
import { FilterTagsPipe } from '../../filters/search_tags/search.pipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css'],
  providers:[GlobalsService, FilterTagsPipe]
})
export class TagsListComponent implements OnInit {

  constructor(private _globals : GlobalsService,
              private _filter : FilterTagsPipe,
              private _router: Router) {}

              searchInputTerm:string = '';
  tagList: any;

  ngOnInit() {
    this.LoadList()
  }

  LoadList(){
    this._globals.GetTagList("","/tags-list",{}).subscribe(
      data => {
        console.log("got data, ", data);
        this.tagList = data;
      });
  }

  GetTagDetails(title :string) {
    console.log("looking for info: ", title);
    this._globals.GetTagDetails(title).subscribe(data =>
    {
      console.log("get tag details", data);
    });
  }

  RouteToQuestionWithFilter(tag: string) {
    var path = "/u/i/tags-main/tags-filter-search/" + tag;
    this._router.navigate([path])
  }

  GetQuestionsByTags(tags:string[]) {
    console.log("looking for tags:", tags);
    this._globals.GetQuestionByTagFilter(tags).subscribe(data => {
      console.log("Questions found, ", data)
    });
  }
}
