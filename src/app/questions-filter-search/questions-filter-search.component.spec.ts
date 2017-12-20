import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsFilterSearchComponent } from './questions-filter-search.component';

describe('QuestionsFilterSearchComponent', () => {
  let component: QuestionsFilterSearchComponent;
  let fixture: ComponentFixture<QuestionsFilterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsFilterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
