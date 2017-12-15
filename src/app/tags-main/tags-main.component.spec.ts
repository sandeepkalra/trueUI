import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsMainComponent } from './tags-main.component';

describe('TagsMainComponent', () => {
  let component: TagsMainComponent;
  let fixture: ComponentFixture<TagsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
