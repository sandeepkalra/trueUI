import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsManageComponent } from './tags-manage.component';

describe('TagsManageComponent', () => {
  let component: TagsManageComponent;
  let fixture: ComponentFixture<TagsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
