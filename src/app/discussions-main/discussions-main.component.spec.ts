import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionsMainComponent } from './discussions-main.component';

describe('DiscussionsMainComponent', () => {
  let component: DiscussionsMainComponent;
  let fixture: ComponentFixture<DiscussionsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
