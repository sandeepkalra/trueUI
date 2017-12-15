import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsOfInterestComponent } from './questions-of-interest.component';

describe('QuestionsOfInterestComponent', () => {
  let component: QuestionsOfInterestComponent;
  let fixture: ComponentFixture<QuestionsOfInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsOfInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
