import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsLatestComponent } from './questions-latest.component';

describe('QuestionsLatestComponent', () => {
  let component: QuestionsLatestComponent;
  let fixture: ComponentFixture<QuestionsLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
