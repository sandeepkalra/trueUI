import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsMainComponent } from './questions-main.component';

describe('QuestionsMainComponent', () => {
  let component: QuestionsMainComponent;
  let fixture: ComponentFixture<QuestionsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
