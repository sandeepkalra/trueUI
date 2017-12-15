import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsMainComponent } from './blogs-main.component';

describe('BlogsMainComponent', () => {
  let component: BlogsMainComponent;
  let fixture: ComponentFixture<BlogsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
