import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSearchComponent } from './questions-search.component';

describe('QuestionsSearchComponent', () => {
  let component: QuestionsSearchComponent;
  let fixture: ComponentFixture<QuestionsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
