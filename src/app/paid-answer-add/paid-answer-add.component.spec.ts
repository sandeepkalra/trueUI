import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidAnswerAddComponent } from './paid-answer-add.component';

describe('PaidAnswerAddComponent', () => {
  let component: PaidAnswerAddComponent;
  let fixture: ComponentFixture<PaidAnswerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidAnswerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidAnswerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
