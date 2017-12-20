import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../services/service-globals/globals.service';
import { FilterTagsPipe } from '../../filters/search_tags/search.pipe';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css'],
  providers:[GlobalsService, FilterTagsPipe]
})
export class TagsListComponent implements OnInit {

  constructor(private _globals : GlobalsService,
    private _filter : FilterTagsPipe) {

  }
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
}
